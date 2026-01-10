"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings2, Save, RotateCcw, X, GripHorizontal, ChevronDown, Monitor, Tablet, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Keys that have -desktop, -tablet, -mobile variants
const RESPONSIVE_KEYS = [
    "--nav-collapsed-width",
    "--nav-expanded-width",
    "--nav-direction",
    "--nav-top",
    "--nav-bottom",
    "--nav-left",
    "--nav-right",
    "--nav-transform",
    "--nav-logo-mb",
    "--nav-logo-mr",
    "--nav-padding"
];

const DEFAULTS: Record<string, string> = {
    // Desktop Defaults
    "--nav-collapsed-width-desktop": "60px",
    "--nav-expanded-width-desktop": "260px",
    "--nav-direction-desktop": "column",
    "--nav-logo-mb-desktop": "16px",
    "--nav-logo-mr-desktop": "0px",
    "--nav-top-desktop": "50%",
    "--nav-bottom-desktop": "auto",
    "--nav-left-desktop": "16px",
    "--nav-right-desktop": "auto",
    "--nav-transform-desktop": "translateY(-50%)",
    "--nav-padding-desktop": "6px",

    // Tablet Defaults (Dock)
    "--nav-collapsed-width-tablet": "auto",
    "--nav-expanded-width-tablet": "auto",
    "--nav-direction-tablet": "row",
    "--nav-logo-mb-tablet": "0px",
    "--nav-logo-mr-tablet": "16px",
    "--nav-top-tablet": "auto",
    "--nav-bottom-tablet": "24px",
    "--nav-left-tablet": "50%",
    "--nav-right-tablet": "auto",
    "--nav-transform-tablet": "translateX(-50%)",
    "--nav-padding-tablet": "6px",

    // Mobile Defaults (Dock)
    "--nav-collapsed-width-mobile": "auto",
    "--nav-expanded-width-mobile": "auto",
    "--nav-direction-mobile": "row",
    "--nav-logo-mb-mobile": "0px",
    "--nav-logo-mr-mobile": "8px",
    "--nav-top-mobile": "auto",
    "--nav-bottom-mobile": "16px",
    "--nav-left-mobile": "50%",
    "--nav-right-mobile": "auto",
    "--nav-transform-mobile": "translateX(-50%)",
    "--nav-padding-mobile": "4px",

    // Shared Defaults
    "--nav-item-height": "44px",
    "--nav-icon-box": "44px",
    "--nav-padding-x": "6px",
    "--nav-padding-y": "6px",
    "--nav-gap": "6px",
    "--nav-radius": "16px",
    "--nav-radius-tl": "18px",
    "--nav-radius-tr": "18px",
    "--nav-radius-bl": "18px",
    "--nav-radius-br": "18px",
    "--nav-blur": "12px",
    "--nav-icon-size": "20px",
    "--nav-font-size": "14px",
    "--nav-logo-icon-box": "45px",
    "--nav-logo-icon-size": "20px",
    "--nav-logo-text-size": "14px",
    "--nav-logo-pt": "8px",
    "--nav-logo-pl": "2px",
    "--nav-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "--nav-bg-opacity": "0.95",
    "--nav-border-width": "1px",
    "--nav-transition-speed": "300ms",
    "--nav-profile-text-size": "14px",
    "--nav-theme-icon-size": "20px",
    "--nav-anim-type": "tween",
    "--nav-anim-stiffness": "300",
    "--nav-anim-damping": "30",
    "--nav-anim-duration": "0.3",
    "--nav-anim-ease": "easeOut",
};

const Icon = ({ icon: I, className, ...props }: { icon: any, className?: string } & React.ComponentProps<"svg">) => {
    return <I className={className} {...props} />;
};

export function NavbarTuner() {
    const isDev = process.env.NODE_ENV === "development";
    const [isOpen, setIsOpen] = useState(false);

    // Config State
    const [config, setConfig] = useState<Record<string, string>>(DEFAULTS);
    const [hydratedDefaults, setHydratedDefaults] = useState<Record<string, string>>(DEFAULTS);

    // Mode State
    const [navMode, setNavMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

    const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        dimensions: true,
        spacing: false,
        radius: false,
        position: false,
        effects: false,
        logo: false,
        content: false,
        animation: false,
    });

    useEffect(() => {
        if (!isDev) return;
        const styles = getComputedStyle(document.documentElement);
        const current: any = {};

        // Read all possible keys (responsive + shared)
        Object.keys(DEFAULTS).forEach((key) => {
            const val = styles.getPropertyValue(key).trim();
            if (val) current[key] = val;
        });

        setConfig(prev => {
            const next = { ...prev, ...current };
            setHydratedDefaults(next);
            return next;
        });
    }, [isDev]);

    const getTargetKey = (baseKey: string) => {
        if (RESPONSIVE_KEYS.includes(baseKey)) {
            return `${baseKey}-${navMode}`;
        }
        return baseKey;
    };

    const updateValue = (baseKey: string, value: string) => {
        const targetKey = getTargetKey(baseKey);
        setConfig(prev => ({ ...prev, [targetKey]: value }));
        document.documentElement.style.setProperty(targetKey, value);
    };

    const getValue = (baseKey: string) => {
        const targetKey = getTargetKey(baseKey);
        return config[targetKey] || "";
    };

    const handleSave = async () => {
        setStatus("saving");
        try {
            const res = await fetch("/api/dev/update-navbar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(config),
            });
            if (!res.ok) throw new Error("Failed");
            setStatus("saved");
            setTimeout(() => setStatus("idle"), 2000);
        } catch (e) {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleReset = () => {
        // Reset to hydrated defaults (what was loaded from CSS file)
        setConfig(hydratedDefaults);
        Object.entries(hydratedDefaults).forEach(([key, val]) => {
            document.documentElement.style.setProperty(key, val);
        });
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    if (!isDev) return null;

    return (
        <>
            {/* Toggle Button */}
            <motion.div
                className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Button
                    size="icon"
                    variant="outline"
                    className="h-10 w-10 rounded-full shadow-lg bg-background border-border hover:bg-muted"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <Icon icon={X} className="h-5 w-5" /> : <Icon icon={Settings2} className="h-5 w-5" />}
                </Button>
            </motion.div>

            {/* Tuner Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-4 bottom-16 w-80 max-h-[80vh] bg-card border border-border rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="p-3 border-b flex items-center justify-between bg-muted/30">
                            <div className="flex items-center gap-2">
                                <Icon icon={Settings2} className="w-4 h-4 text-primary" />
                                <span className="font-semibold text-sm">Navbar Tuner</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7"
                                    onClick={handleReset}
                                    title="Reset to Defaults"
                                >
                                    <Icon icon={RotateCcw} className="h-3.5 w-3.5" />
                                </Button>
                                <Button
                                    size="sm"
                                    className={cn(
                                        "h-7 text-xs gap-1.5",
                                        status === "saved" && "bg-green-500 hover:bg-green-600",
                                        status === "error" && "bg-red-500 hover:bg-red-600"
                                    )}
                                    onClick={handleSave}
                                    disabled={status === "saving"}
                                >
                                    <Icon icon={Save} className="h-3.5 w-3.5" />
                                    {status === "idle" && "Save"}
                                    {status === "saving" && "Saving..."}
                                    {status === "saved" && "Saved"}
                                    {status === "error" && "Error"}
                                </Button>
                            </div>
                        </div>

                        {/* Mode Switcher */}
                        <div className="p-2 border-b bg-muted/10 grid grid-cols-3 gap-1">
                            <Button
                                variant={navMode === "desktop" ? "default" : "ghost"}
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => setNavMode("desktop")}
                            >
                                <Icon icon={Monitor} className="w-3 h-3 mr-1" /> Desktop
                            </Button>
                            <Button
                                variant={navMode === "tablet" ? "default" : "ghost"}
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => setNavMode("tablet")}
                            >
                                <Icon icon={Tablet} className="w-3 h-3 mr-1" /> Tablet
                            </Button>
                            <Button
                                variant={navMode === "mobile" ? "default" : "ghost"}
                                size="sm"
                                className="h-7 text-xs"
                                onClick={() => setNavMode("mobile")}
                            >
                                <Icon icon={Smartphone} className="w-3 h-3 mr-1" /> Mobile
                            </Button>
                        </div>

                        {/* Helper Hint */}
                        <div className="px-3 py-1.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-[10px] border-b border-yellow-500/20 text-center">
                            Editing <strong>{navMode.toUpperCase()}</strong> variables. Resize window to test.
                        </div>

                        {/* Settings List */}
                        <div className="flex-1 overflow-y-auto p-2 space-y-2">
                            {/* Dimensions */}
                            <Section
                                title="Dimensions"
                                expanded={expandedSections.dimensions}
                                onToggle={() => toggleSection("dimensions")}
                            >
                                <Input label="Collapsed Width" value={getValue("--nav-collapsed-width")} onChange={(v) => updateValue("--nav-collapsed-width", v)} />
                                <Input label="Expanded Width" value={getValue("--nav-expanded-width")} onChange={(v) => updateValue("--nav-expanded-width", v)} />
                                <Input label="Item Height" value={getValue("--nav-item-height")} onChange={(v) => updateValue("--nav-item-height", v)} />
                                <Input label="Icon Box" value={getValue("--nav-icon-box")} onChange={(v) => updateValue("--nav-icon-box", v)} />
                            </Section>

                            {/* Logo */}
                            <Section title="Brand Logo" expanded={expandedSections.logo} onToggle={() => toggleSection("logo")}>
                                <Input label="Margin Bottom" value={getValue("--nav-logo-mb")} onChange={(v) => updateValue("--nav-logo-mb", v)} />
                                <Input label="Margin Right" value={getValue("--nav-logo-mr")} onChange={(v) => updateValue("--nav-logo-mr", v)} />
                                <Input label="Padding Top" value={getValue("--nav-logo-pt")} onChange={(v) => updateValue("--nav-logo-pt", v)} />
                                <Input label="Padding Left" value={getValue("--nav-logo-pl")} onChange={(v) => updateValue("--nav-logo-pl", v)} />
                                <Input label="Box Size" value={getValue("--nav-logo-icon-box")} onChange={(v) => updateValue("--nav-logo-icon-box", v)} />
                                <Input label="Icon Size" value={getValue("--nav-logo-icon-size")} onChange={(v) => updateValue("--nav-logo-icon-size", v)} />
                            </Section>

                            {/* Position */}
                            <Section title="Position" expanded={expandedSections.position} onToggle={() => toggleSection("position")}>
                                <Input label="Direction" value={getValue("--nav-direction")} onChange={(v) => updateValue("--nav-direction", v)} />
                                <Input label="Top" value={getValue("--nav-top")} onChange={(v) => updateValue("--nav-top", v)} />
                                <Input label="Bottom" value={getValue("--nav-bottom")} onChange={(v) => updateValue("--nav-bottom", v)} />
                                <Input label="Left" value={getValue("--nav-left")} onChange={(v) => updateValue("--nav-left", v)} />
                                <Input label="Right" value={getValue("--nav-right")} onChange={(v) => updateValue("--nav-right", v)} />
                                <Input label="Transform" value={getValue("--nav-transform")} onChange={(v) => updateValue("--nav-transform", v)} />
                            </Section>

                            {/* Spacing */}
                            <Section title="Spacing" expanded={expandedSections.spacing} onToggle={() => toggleSection("spacing")}>
                                <Input label="Container Padding" value={getValue("--nav-padding")} onChange={(v) => updateValue("--nav-padding", v)} />
                                <Input label="Padding X" value={getValue("--nav-padding-x")} onChange={(v) => updateValue("--nav-padding-x", v)} />
                                <Input label="Padding Y" value={getValue("--nav-padding-y")} onChange={(v) => updateValue("--nav-padding-y", v)} />
                                <Input label="Gap" value={getValue("--nav-gap")} onChange={(v) => updateValue("--nav-gap", v)} />
                            </Section>

                            {/* Radius */}
                            <Section title="Radius" expanded={expandedSections.radius} onToggle={() => toggleSection("radius")}>
                                <Input label="Global" value={getValue("--nav-radius")} onChange={(v) => updateValue("--nav-radius", v)} />
                                <div className="grid grid-cols-2 gap-2">
                                    <Input label="Top-L" value={getValue("--nav-radius-tl")} onChange={(v) => updateValue("--nav-radius-tl", v)} />
                                    <Input label="Top-R" value={getValue("--nav-radius-tr")} onChange={(v) => updateValue("--nav-radius-tr", v)} />
                                    <Input label="Bot-L" value={getValue("--nav-radius-bl")} onChange={(v) => updateValue("--nav-radius-bl", v)} />
                                    <Input label="Bot-R" value={getValue("--nav-radius-br")} onChange={(v) => updateValue("--nav-radius-br", v)} />
                                </div>
                            </Section>

                            {/* Effects */}
                            <Section title="Effects" expanded={expandedSections.effects} onToggle={() => toggleSection("effects")}>
                                <Input label="Blur" value={getValue("--nav-blur")} onChange={(v) => updateValue("--nav-blur", v)} />
                                <Input label="Opacity" value={getValue("--nav-bg-opacity")} onChange={(v) => updateValue("--nav-bg-opacity", v)} />
                                <Input label="Shadow" value={getValue("--nav-shadow")} onChange={(v) => updateValue("--nav-shadow", v)} />
                                <Input label="Border Width" value={getValue("--nav-border-width")} onChange={(v) => updateValue("--nav-border-width", v)} />
                            </Section>

                            {/* Animation */}
                            <Section title="Animation" expanded={expandedSections.animation} onToggle={() => toggleSection("animation")}>
                                <Input label="Type (spring/tween)" value={getValue("--nav-anim-type")} onChange={(v) => updateValue("--nav-anim-type", v)} />
                                <Input label="Stiffness" value={getValue("--nav-anim-stiffness")} onChange={(v) => updateValue("--nav-anim-stiffness", v)} />
                                <Input label="Damping" value={getValue("--nav-anim-damping")} onChange={(v) => updateValue("--nav-anim-damping", v)} />
                                <Input label="Duration" value={getValue("--nav-anim-duration")} onChange={(v) => updateValue("--nav-anim-duration", v)} />
                                <Input label="Ease" value={getValue("--nav-anim-ease")} onChange={(v) => updateValue("--nav-anim-ease", v)} />
                            </Section>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Subcomponents
function Section({ title, expanded, onToggle, children }: { title: string, expanded: boolean, onToggle: () => void, children: React.ReactNode }) {
    return (
        <div className="border rounded-lg overflow-hidden bg-background">
            <button
                className="w-full flex items-center justify-between p-2 text-xs font-medium hover:bg-muted/50 transition-colors"
                onClick={onToggle}
            >
                {title}
                <Icon icon={ChevronDown} className={cn("w-3.5 h-3.5 transition-transform", expanded ? "rotate-180" : "rotate-0")} />
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-2 space-y-2 border-t bg-muted/20">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function Input({ label, value, onChange }: { label: string, value: string, onChange: (val: string) => void }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{label}</label>
            <input
                className="w-full h-7 px-2 text-xs bg-muted/50 border rounded focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
