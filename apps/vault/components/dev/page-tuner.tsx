"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Palette, Save, RotateCcw, X, GripHorizontal, ChevronDown, Globe, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PageConfig {
    // Layout
    "--page-padding-x-desktop": string;
    "--page-padding-x-mobile": string;
    "--page-padding-y-desktop": string;
    "--page-padding-y-mobile": string;
    "--page-max-width": string;
    "--page-section-gap-desktop": string;
    "--page-section-gap-mobile": string;
    "--page-grid-gap": string;
    "--page-card-gap": string;
    "--page-content-spacing": string;
    "--page-sidebar-width": string;
    // Typography
    "--page-h1-size": string;
    "--page-h2-size": string;
    "--page-h3-size": string;
    "--page-h4-size": string;
    "--page-body-size": string;
    "--page-small-size": string;
    "--page-line-height": string;
    "--page-heading-weight": string;
    "--page-body-weight": string;
    "--page-letter-spacing": string;
    "--page-h1-line-height": string;
    "--page-h2-line-height": string;
    // Components
    "--page-card-padding": string;
    "--page-card-radius": string;
    "--page-card-shadow": string;
    "--page-card-border-width": string;
    "--page-button-radius": string;
    "--page-input-radius": string;
    "--page-hover-scale": string;
    "--page-hover-opacity": string;
    "--page-transition-speed": string;
    "--page-focus-ring-width": string;
    // Animation
    "--page-anim-type": string;
    "--page-anim-stiffness": string;
    "--page-anim-damping": string;
    "--page-anim-duration": string;
    "--page-anim-ease": string;
    "--page-anim-stagger": string;
    // Colors
    "--page-accent-hue": string;
    "--page-accent-sat": string;
    "--page-accent-light": string;
    "--page-card-bg-opacity": string;
    "--page-text-muted-opacity": string;
    "--page-border-opacity": string;
    "--page-surface-tint": string;
    "--page-highlight-opacity": string;
}

const DEFAULTS: PageConfig = {
    "--page-padding-x-desktop": "32px",
    "--page-padding-x-mobile": "16px",
    "--page-padding-y-desktop": "42px",
    "--page-padding-y-mobile": "24px",
    "--page-max-width": "1400px",
    "--page-section-gap-desktop": "48px",
    "--page-section-gap-mobile": "32px",
    "--page-grid-gap": "24px",
    "--page-card-gap": "16px",
    "--page-content-spacing": "32px",
    "--page-sidebar-width": "280px",
    "--page-h1-size": "36px",
    "--page-h2-size": "30px",
    "--page-h3-size": "24px",
    "--page-h4-size": "20px",
    "--page-body-size": "16px",
    "--page-small-size": "14px",
    "--page-line-height": "1.6",
    "--page-heading-weight": "700",
    "--page-body-weight": "400",
    "--page-letter-spacing": "-0.01em",
    "--page-h1-line-height": "1.2",
    "--page-h2-line-height": "1.3",
    "--page-card-padding": "24px",
    "--page-card-radius": "12px",
    "--page-card-shadow": "0 1px 3px rgba(0,0,0,0.1)",
    "--page-card-border-width": "1px",
    "--page-button-radius": "8px",
    "--page-input-radius": "8px",
    "--page-hover-scale": "1.02",
    "--page-hover-opacity": "0.8",
    "--page-transition-speed": "200ms",
    "--page-focus-ring-width": "2px",
    "--page-anim-type": "spring",
    "--page-anim-stiffness": "300",
    "--page-anim-damping": "30",
    "--page-anim-duration": "0.3",
    "--page-anim-ease": "easeOut",
    "--page-anim-stagger": "0.05",
    "--page-accent-hue": "220",
    "--page-accent-sat": "90%",
    "--page-accent-light": "50%",
    "--page-card-bg-opacity": "1",
    "--page-text-muted-opacity": "0.7",
    "--page-border-opacity": "0.2",
    "--page-surface-tint": "0",
    "--page-highlight-opacity": "0.1",
};

const Icon = ({ icon: I, className, ...props }: { icon: any, className?: string } & React.ComponentProps<"svg">) => {
    return <I className={className} {...props} />;
};

export function PageTuner() {
    const isDev = process.env.NODE_ENV === "development";
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState<"global" | "page">("global");
    const [config, setConfig] = useState<PageConfig>(DEFAULTS);
    const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        layout: true,
        typography: false,
        components: false,
        animation: false,

        colors: false,
    });
    const [saveMenuOpen, setSaveMenuOpen] = useState(false);

    // ... (rest of code)

    function Dropdown({ label, value, onChange, options }: { label: string, value: string, onChange: (v: string) => void, options: string[] }) {
        return (
            <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground font-medium">{label}</span>
                    <span className="font-mono text-foreground/80">{value}</span>
                </div>
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-8 px-2 text-xs bg-secondary border border-border rounded-md appearance-none cursor-pointer hover:bg-secondary/80 transition-colors"
                >
                    {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
        );
    }

    // Get current page name
    const getPageName = () => {
        if (pathname === "/") return "Dashboard";
        if (pathname.startsWith("/products")) return "Products";
        if (pathname.startsWith("/biz")) return "Biz Lab";
        if (pathname.startsWith("/admin")) return "Admin";
        return "Unknown";
    };

    const getRouteKey = () => {
        if (pathname === "/") return "dashboard";
        if (pathname.startsWith("/products")) return "products";
        if (pathname.startsWith("/biz")) return "biz";
        if (pathname.startsWith("/admin")) return "admin";
        return "global";
    };

    useEffect(() => {
        if (!isDev) return;
        const styles = getComputedStyle(document.documentElement);
        const current: any = {};
        Object.keys(DEFAULTS).forEach((key) => {
            const val = styles.getPropertyValue(key).trim();
            if (val) current[key] = val;
        });
        setConfig(prev => ({ ...prev, ...current }));

        // Inject page-specific class for scoping
        const routeKey = getRouteKey();
        const className = `page-${routeKey}`;
        document.body.classList.add(className);

        // Cleanup previous classes
        const classes = document.body.className.split(" ");
        classes.forEach(c => {
            if (c.startsWith("page-") && c !== className) {
                document.body.classList.remove(c);
            }
        });

        return () => {
            document.body.classList.remove(className);
        };
    }, [isDev, pathname]);

    const updateValue = (key: keyof PageConfig, value: string) => {
        setConfig(prev => ({ ...prev, [key]: value }));
        document.documentElement.style.setProperty(key, value);
    };

    const handleSave = async (overrideMode?: "global") => {
        setStatus("saving");
        setSaveMenuOpen(false);
        try {
            const targetMode = overrideMode || mode;
            const res = await fetch("/api/dev/update-page-styles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    config,
                    mode: targetMode,
                    route: targetMode === "page" ? getRouteKey() : "global"
                }),
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
        setConfig(DEFAULTS);
        Object.entries(DEFAULTS).forEach(([key, val]) => {
            document.documentElement.style.setProperty(key, val);
        });
    };

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    if (!isDev) return null;

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-4 right-20 z-[100]"
                    >
                        <Button
                            onClick={() => setIsOpen(true)}
                            size="icon"
                            className="h-12 w-12 rounded-full shadow-2xl bg-purple-600 hover:bg-purple-700 text-white hover:scale-110 transition-transform"
                        >
                            <Icon icon={Palette} className="h-6 w-6" />
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        drag
                        dragMomentum={false}
                        className="fixed bottom-4 right-20 z-[100] w-96 bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50 cursor-grab active:cursor-grabbing">
                            <div className="flex items-center gap-2">
                                <Icon icon={GripHorizontal} className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm font-bold uppercase tracking-wider">Page Studio</span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                                <Icon icon={X} className="h-3.5 w-3.5" />
                            </Button>
                        </div>

                        {/* Mode Toggle */}
                        <div className="p-3 border-b border-border bg-muted/20">
                            <div className="flex gap-2 mb-2">
                                <Button
                                    onClick={() => setMode("global")}
                                    variant={mode === "global" ? "default" : "outline"}
                                    size="sm"
                                    className="flex-1 gap-2"
                                >
                                    <Icon icon={Globe} className="h-3.5 w-3.5" />
                                    Global
                                </Button>
                                <Button
                                    onClick={() => setMode("page")}
                                    variant={mode === "page" ? "default" : "outline"}
                                    size="sm"
                                    className="flex-1 gap-2"
                                >
                                    <Icon icon={FileText} className="h-3.5 w-3.5" />
                                    Page
                                </Button>
                            </div>
                            {mode === "page" && (
                                <div className="text-xs text-muted-foreground text-center">
                                    Editing: <span className="font-semibold text-foreground">{getPageName()}</span>
                                </div>
                            )}
                        </div>

                        {/* Controls */}
                        <div className="p-4 space-y-3 overflow-y-auto flex-1">
                            {/* Layout */}
                            <Section title="Layout & Structure" expanded={expandedSections.layout} onToggle={() => toggleSection("layout")}>
                                <div className="mb-4">
                                    <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2">Desktop</h4>
                                    <Control label="Padding X" value={config["--page-padding-x-desktop"]} onChange={(v) => updateValue("--page-padding-x-desktop", v)} min={0} max={128} suffix="px" />
                                    <Control label="Padding Y" value={config["--page-padding-y-desktop"]} onChange={(v) => updateValue("--page-padding-y-desktop", v)} min={0} max={128} suffix="px" />
                                    <Control label="Section Gap" value={config["--page-section-gap-desktop"]} onChange={(v) => updateValue("--page-section-gap-desktop", v)} min={16} max={192} suffix="px" />
                                </div>
                                <div className="mb-4 pt-2 border-t border-border/50">
                                    <h4 className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-2 mt-2">Mobile</h4>
                                    <Control label="Padding X" value={config["--page-padding-x-mobile"]} onChange={(v) => updateValue("--page-padding-x-mobile", v)} min={0} max={64} suffix="px" />
                                    <Control label="Padding Y" value={config["--page-padding-y-mobile"]} onChange={(v) => updateValue("--page-padding-y-mobile", v)} min={0} max={64} suffix="px" />
                                    <Control label="Section Gap" value={config["--page-section-gap-mobile"]} onChange={(v) => updateValue("--page-section-gap-mobile", v)} min={8} max={96} suffix="px" />
                                </div>
                                <div className="pt-2 border-t border-border/50">
                                    <Control label="Max Width" value={config["--page-max-width"]} onChange={(v) => updateValue("--page-max-width", v)} min={800} max={2000} suffix="px" />
                                    <Control label="Grid Gap" value={config["--page-grid-gap"]} onChange={(v) => updateValue("--page-grid-gap", v)} min={8} max={64} suffix="px" />
                                    <Control label="Card Gap" value={config["--page-card-gap"]} onChange={(v) => updateValue("--page-card-gap", v)} min={8} max={48} suffix="px" />
                                </div>
                            </Section>

                            {/* Typography */}
                            <Section title="Typography" expanded={expandedSections.typography} onToggle={() => toggleSection("typography")}>
                                <Control label="H1 Size" value={config["--page-h1-size"]} onChange={(v) => updateValue("--page-h1-size", v)} min={24} max={64} suffix="px" />
                                <Control label="H2 Size" value={config["--page-h2-size"]} onChange={(v) => updateValue("--page-h2-size", v)} min={20} max={48} suffix="px" />
                                <Control label="H3 Size" value={config["--page-h3-size"]} onChange={(v) => updateValue("--page-h3-size", v)} min={16} max={40} suffix="px" />
                                <Control label="Body Size" value={config["--page-body-size"]} onChange={(v) => updateValue("--page-body-size", v)} min={12} max={24} suffix="px" />
                                <Control label="Line Height" value={config["--page-line-height"]} onChange={(v) => updateValue("--page-line-height", v)} min={1} max={2} step={0.1} suffix="" />
                                <Control label="Heading Weight" value={config["--page-heading-weight"]} onChange={(v) => updateValue("--page-heading-weight", v)} min={400} max={900} step={100} suffix="" />
                            </Section>

                            {/* Components */}
                            <Section title="Component Styling" expanded={expandedSections.components} onToggle={() => toggleSection("components")}>
                                <Control label="Card Padding" value={config["--page-card-padding"]} onChange={(v) => updateValue("--page-card-padding", v)} min={8} max={64} suffix="px" />
                                <Control label="Card Radius" value={config["--page-card-radius"]} onChange={(v) => updateValue("--page-card-radius", v)} min={0} max={32} suffix="px" />
                                <Control label="Border Width" value={config["--page-card-border-width"]} onChange={(v) => updateValue("--page-card-border-width", v)} min={0} max={4} suffix="px" />
                                <Control label="Button Radius" value={config["--page-button-radius"]} onChange={(v) => updateValue("--page-button-radius", v)} min={0} max={32} suffix="px" />
                                <Control label="Hover Scale" value={config["--page-hover-scale"]} onChange={(v) => updateValue("--page-hover-scale", v)} min={1} max={1.1} step={0.01} suffix="" />
                                <Control label="Transition Speed" value={config["--page-transition-speed"]} onChange={(v) => updateValue("--page-transition-speed", v)} min={100} max={500} suffix="ms" />
                            </Section>

                            {/* Animation */}
                            <Section title="Animation" expanded={expandedSections.animation} onToggle={() => toggleSection("animation")}>
                                <Dropdown
                                    label="Type"
                                    value={config["--page-anim-type"] || "spring"}
                                    onChange={(v) => updateValue("--page-anim-type", v)}
                                    options={["spring", "tween"]}
                                />
                                {config["--page-anim-type"] === "spring" && (
                                    <>
                                        <Control label="Stiffness" value={config["--page-anim-stiffness"] || "300"} onChange={(v) => updateValue("--page-anim-stiffness", v)} min={10} max={500} step={10} suffix="" />
                                        <Control label="Damping" value={config["--page-anim-damping"] || "30"} onChange={(v) => updateValue("--page-anim-damping", v)} min={5} max={100} step={1} suffix="" />
                                    </>
                                )}
                                {config["--page-anim-type"] === "tween" && (
                                    <>
                                        <Control label="Duration" value={config["--page-anim-duration"] || "0.3"} onChange={(v) => updateValue("--page-anim-duration", v)} min={0.1} max={2} step={0.1} suffix="s" />
                                        <Dropdown
                                            label="Ease"
                                            value={config["--page-anim-ease"] || "easeOut"}
                                            onChange={(v) => updateValue("--page-anim-ease", v)}
                                            options={["linear", "easeIn", "easeOut", "easeInOut", "circIn", "circOut", "backIn", "backOut", "anticipate"]}
                                        />
                                    </>
                                )}
                                <Control label="Stagger Delay" value={config["--page-anim-stagger"] || "0.05"} onChange={(v) => updateValue("--page-anim-stagger", v)} min={0} max={0.5} step={0.01} suffix="s" />
                            </Section>

                            {/* Colors */}
                            <Section title="Color System" expanded={expandedSections.colors} onToggle={() => toggleSection("colors")}>
                                <Control label="Accent Hue" value={config["--page-accent-hue"]} onChange={(v) => updateValue("--page-accent-hue", v)} min={0} max={360} suffix="" />
                                <Control label="Accent Sat" value={config["--page-accent-sat"]} onChange={(v) => updateValue("--page-accent-sat", v)} min={0} max={100} suffix="%" />
                                <Control label="Accent Light" value={config["--page-accent-light"]} onChange={(v) => updateValue("--page-accent-light", v)} min={0} max={100} suffix="%" />
                                <Control label="Card BG Opacity" value={config["--page-card-bg-opacity"]} onChange={(v) => updateValue("--page-card-bg-opacity", v)} min={0} max={1} step={0.05} suffix="" />
                                <Control label="Text Muted Opacity" value={config["--page-text-muted-opacity"]} onChange={(v) => updateValue("--page-text-muted-opacity", v)} min={0} max={1} step={0.05} suffix="" />
                                <Control label="Border Opacity" value={config["--page-border-opacity"]} onChange={(v) => updateValue("--page-border-opacity", v)} min={0} max={1} step={0.05} suffix="" />
                            </Section>
                        </div>

                        {/* Footer */}
                        <div className="p-3 border-t border-border bg-muted/20 flex gap-2 items-center">
                            <div className="flex-1 relative flex">
                                <Button
                                    onClick={() => handleSave()}
                                    disabled={status === "saving"}
                                    className={cn(
                                        "flex-1 gap-2 text-sm rounded-r-none border-r-0 focus:z-10",
                                        status === "saved" && "bg-green-600 hover:bg-green-700"
                                    )}
                                >
                                    <Icon icon={Save} className="h-3.5 w-3.5" />
                                    {status === "saving" ? "Saving..." : status === "saved" ? "Saved!" : mode === "global" ? "Save Global" : `Save ${getPageName()}`}
                                </Button>
                                <Button
                                    onClick={() => setSaveMenuOpen(!saveMenuOpen)}
                                    disabled={status === "saving"}
                                    variant="outline"
                                    className={cn(
                                        "w-8 px-0 rounded-l-none border-l-0 bg-primary text-primary-foreground hover:bg-primary/90 border-r-0 border-y-0",
                                        status === "saved" && "bg-green-600 hover:bg-green-700"
                                    )}
                                >
                                    <Icon icon={ChevronDown} className="h-4 w-4" />
                                </Button>

                                <AnimatePresence>
                                    {saveMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute bottom-full mb-2 left-0 right-0 bg-popover border border-border rounded-lg shadow-xl overflow-hidden z-50 p-1"
                                        >
                                            <button
                                                onClick={() => handleSave()}
                                                className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md flex items-center gap-2"
                                            >
                                                <Icon icon={Save} className="h-3.5 w-3.5" />
                                                <span>Save to {mode === "global" ? "Global" : getPageName()}</span>
                                            </button>
                                            <button
                                                onClick={() => handleSave("global")}
                                                className="w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-md flex items-center gap-2 text-amber-500"
                                            >
                                                <Icon icon={Globe} className="h-3.5 w-3.5" />
                                                <span>Save as New Default</span>
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Button onClick={handleReset} variant="outline" size="icon" title="Reset Defaults" className="h-10 w-10 shrink-0">
                                <Icon icon={RotateCcw} className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function Section({ title, expanded, onToggle, children }: { title: string, expanded: boolean, onToggle: () => void, children: React.ReactNode }) {
    return (
        <div className="border border-border rounded-lg overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-2.5 bg-muted/30 hover:bg-muted/50 transition-colors"
            >
                <span className="text-xs font-semibold uppercase tracking-wide">{title}</span>
                <Icon icon={ChevronDown} className={cn("h-3.5 w-3.5 transition-transform", expanded && "rotate-180")} />
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 space-y-3">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function Control({
    label,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    suffix
}: {
    label: string,
    value: string,
    onChange: (v: string) => void,
    min?: number,
    max?: number,
    step?: number,
    suffix?: string
}) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editValue, setEditValue] = React.useState(value);

    // Sync editValue when prop value changes (if not editing)
    React.useEffect(() => {
        if (!isEditing) setEditValue(value);
    }, [value, isEditing]);

    const handleCommit = () => {
        setIsEditing(false);
        let valid = parseFloat(editValue);
        if (isNaN(valid)) valid = parseFloat(value) || min;

        // Optional: clamp values (or allow users to override limits manually if they really want to)
        // We'll trust the user but maybe check bounds slightly
        // if (valid < min) valid = min;
        // if (valid > max) valid = max;

        onChange(valid.toString());
    };

    const detectedSuffix = suffix !== undefined ? suffix : "";

    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
                <span className="text-muted-foreground font-medium">{label}</span>
                {isEditing ? (
                    <div className="flex items-center gap-1">
                        <input
                            autoFocus
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onBlur={handleCommit}
                            onKeyDown={(e) => e.key === "Enter" && handleCommit()}
                            className="w-16 h-5 text-right bg-secondary border border-primary/50 rounded px-1 text-xs focus:outline-none focus:border-primary font-mono"
                        />
                        <span className="text-muted-foreground text-[10px]">{detectedSuffix}</span>
                    </div>
                ) : (
                    <span
                        onClick={() => { setIsEditing(true); setEditValue(value); }}
                        className="font-mono text-foreground/80 cursor-pointer hover:text-primary hover:bg-primary/10 px-1 rounded transition-colors"
                        title="Click to edit manually"
                    >
                        {value}{detectedSuffix}
                    </span>
                )}
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={parseFloat(value) || 0}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
        </div>
    );
}
