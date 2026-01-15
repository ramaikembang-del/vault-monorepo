"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Settings2, Save, RotateCcw, X, GripHorizontal, ChevronDown, Palette, Globe, FileText, Monitor, Smartphone, Tablet, Code, ChevronsRight, Undo, Redo } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- CSS Variable Keys (Constants) ---
// This serves as the single source of truth for all CSS variable names
// Used throughout the component to prevent typos and enable refactoring

// Responsive navbar keys that have device-specific variants
const RESPONSIVE_NAV_KEYS = [
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
    "--nav-padding",
    "--nav-tabs-section-margin",
    "--nav-icon-size",
    "--nav-font-size",
    "--nav-padding-x",
    "--nav-padding-y",
    "--nav-logo-icon-box",
    "--nav-logo-text-size",
    "--nav-logo-pt",
    "--nav-logo-pl",
    "--nav-transform-origin",
    "--nav-extras-gap",
    "--nav-theme-padding-x",
    "--nav-theme-padding-y",
    "--nav-profile-padding-x",
    "--nav-profile-padding-y",
    "--nav-label-margin",
    "--nav-profile-text-size"
];

// --- Default Values ---
// These objects define all available CSS variables and their default values
// They serve as the single source of truth for:
// - Initial values on component mount
// - Reset functionality
// - Type safety through Record<string, string>
// - Auto-completion in IDEs

const NAVBAR_DEFAULTS: Record<string, string> = {
    // Desktop Defaults
    "--nav-collapsed-width-desktop": "60px",
    "--nav-expanded-width-desktop": "260px",
    "--nav-direction-desktop": "column",
    "--nav-logo-mb-desktop": "16px",
    "--nav-logo-mr-desktop": "0px",
    "--nav-tabs-section-margin-desktop": "0px",
    "--nav-top-desktop": "auto",
    "--nav-bottom-desktop": "24px",
    "--nav-left-desktop": "16px",
    "--nav-right-desktop": "auto",
    "--nav-transform-desktop": "none",
    "--nav-padding-desktop": "6px",

    // Tablet Defaults (Dock)
    "--nav-collapsed-width-tablet": "auto",
    "--nav-expanded-width-tablet": "auto",
    "--nav-direction-tablet": "column",
    "--nav-logo-mb-tablet": "0px",
    "--nav-logo-mr-tablet": "16px",
    "--nav-tabs-section-margin-tablet": "0px",
    "--nav-top-tablet": "auto",
    "--nav-bottom-tablet": "24px",
    "--nav-left-tablet": "16px",
    "--nav-right-tablet": "auto",
    "--nav-transform-tablet": "none",
    "--nav-padding-tablet": "6px",
    "--nav-icon-size-tablet": "21px",
    "--nav-font-size-tablet": "14px",
    "--nav-padding-x-tablet": "10px",
    "--nav-padding-y-tablet": "0px",
    "--nav-logo-icon-box-tablet": "45px",
    "--nav-logo-text-size-tablet": "14px",
    "--nav-logo-pt-tablet": "0px",
    "--nav-logo-pl-tablet": "1px",
    "--nav-transform-origin-tablet": "bottom left",
    "--nav-extras-gap-tablet": "0px",
    "--nav-theme-padding-x-tablet": "11px",
    "--nav-theme-padding-y-tablet": "6px",
    "--nav-profile-padding-x-tablet": "0px",
    "--nav-profile-padding-y-tablet": "6px",
    "--nav-label-margin-tablet": "12px",
    "--nav-profile-text-size-tablet": "14px",

    // Mobile Defaults (Dock)
    "--nav-collapsed-width-mobile": "auto",
    "--nav-expanded-width-mobile": "auto",
    "--nav-direction-mobile": "column",
    "--nav-logo-mb-mobile": "0px",
    "--nav-logo-mr-mobile": "8px",
    "--nav-tabs-section-margin-mobile": "0px",
    "--nav-top-mobile": "auto",
    "--nav-bottom-mobile": "24px",
    "--nav-left-mobile": "16px",
    "--nav-right-mobile": "auto",
    "--nav-transform-mobile": "none",
    "--nav-padding-mobile": "4px",
    "--nav-icon-size-mobile": "21px",
    "--nav-font-size-mobile": "14px",
    "--nav-padding-x-mobile": "10px",
    "--nav-padding-y-mobile": "0px",
    "--nav-logo-icon-box-mobile": "45px",
    "--nav-logo-text-size-mobile": "14px",
    "--nav-logo-pt-mobile": "0px",
    "--nav-logo-pl-mobile": "1px",
    "--nav-transform-origin-mobile": "bottom left",
    "--nav-extras-gap-mobile": "0px",
    "--nav-theme-padding-x-mobile": "11px",
    "--nav-theme-padding-y-mobile": "6px",
    "--nav-profile-padding-x-mobile": "0px",
    "--nav-profile-padding-y-mobile": "6px",
    "--nav-label-margin-mobile": "12px",
    "--nav-profile-text-size-mobile": "14px",

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
    "--nav-font-weight": "500",
    "--nav-logo-icon-box": "45px",
    "--nav-logo-icon-size": "20px",
    "--nav-logo-text-size": "14px",
    "--nav-logo-pt": "8px",
    "--nav-logo-pl": "2px",
    "--nav-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "--nav-bg-opacity": "0.95",
    "--nav-border-width": "1px",
    "--nav-transition-speed": "300ms",

    // Navigation Tab Styling
    "--nav-tab-radius": "8px",
    "--nav-tab-hover-scale": "1.02",
    "--nav-tab-active-bg-opacity": "1",
    "--nav-tab-inactive-opacity": "0.7",
    "--nav-tab-hover-opacity": "0.9",

    // Additional Elements
    "--nav-profile-text-size": "14px",
    "--nav-profile-avatar-size": "32px",
    "--nav-theme-icon-size": "20px",
    "--nav-theme-button-size": "40px",
    "--nav-extras-gap": "8px",
    "--nav-theme-padding-x": "6px",
    "--nav-theme-padding-y": "6px",
    "--nav-profile-padding-x": "6px",
    "--nav-profile-padding-y": "6px",

    // Animation
    "--nav-anim-type": "tween",
    "--nav-anim-stiffness": "300",
    "--nav-anim-damping": "30",
    "--nav-anim-duration": "0.3",
    "--nav-anim-ease": "easeOut",
};

// --- Page Config ---
// Responsive page keys that have device-specific variants
const RESPONSIVE_PAGE_KEYS = [
    "--page-padding-x",
    "--page-padding-y",
    "--page-section-gap",
    "--page-max-width"
];

const PAGE_DEFAULTS: Record<string, string> = {
    "--page-padding-x-desktop": "32px",
    "--page-padding-x-tablet": "24px",
    "--page-padding-x-mobile": "16px",

    "--page-padding-y-desktop": "42px",
    "--page-padding-y-tablet": "32px",
    "--page-padding-y-mobile": "24px",

    "--page-section-gap-desktop": "48px",
    "--page-section-gap-tablet": "40px",
    "--page-section-gap-mobile": "32px",

    "--page-max-width-desktop": "100%",
    "--page-max-width-tablet": "100%",
    "--page-max-width-mobile": "100%",

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

// Type for Lucide icon components
type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const Icon = ({ icon: I, className, ...props }: { icon: LucideIcon, className?: string } & React.ComponentProps<"svg">) => {
    return <I className={className} {...props} />;
};

// CSS Value Validator (client-side)
function validateCSSValue(value: string): { valid: boolean; error?: string } {
    // Allow empty strings
    if (value === "") {
        return { valid: true };
    }

    const trimmed = value.trim();

    // Common CSS keywords
    const keywords = ["inherit", "initial", "unset", "auto", "none", "normal", "transparent"];
    if (keywords.includes(trimmed.toLowerCase())) {
        return { valid: true };
    }

    // Size values (px, rem, em, vh, vw, %, etc.)
    if (/^-?\d+(\.\d+)?(px|rem|em|vh|vw|%|pt|cm|mm|in|pc|ex|ch|vmin|vmax)$/i.test(trimmed)) {
        return { valid: true };
    }

    // Numbers (for opacity, scale, etc.)
    if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
        return { valid: true };
    }

    // Hex colors
    if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(trimmed)) {
        return { valid: true };
    }

    // RGB/RGBA colors
    if (/^rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i.test(trimmed)) {
        return { valid: true };
    }

    // HSL/HSLA colors
    if (/^hsla?\s*\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+\s*)?\)$/i.test(trimmed)) {
        return { valid: true };
    }

    // Direction keywords
    const directions = ["row", "column", "row-reverse", "column-reverse"];
    if (directions.includes(trimmed.toLowerCase())) {
        return { valid: true };
    }

    // Shadow values
    if (/^[\d\s.px\-]+rgba?\([^)]+\)$/i.test(trimmed)) {
        return { valid: true };
    }

    // Calc() expressions
    if (/^calc\(.+\)$/i.test(trimmed)) {
        return { valid: true };
    }

    // Multiple values separated by spaces
    if (/^[\d\s.px\-rem%em]+$/i.test(trimmed)) {
        return { valid: true };
    }

    // Easing function keywords
    const easings = ["linear", "easein", "easeout", "easeinout", "circin", "circout", "backin", "backout", "anticipate"];
    if (easings.includes(trimmed.toLowerCase().replace(/[-_]/g, ""))) {
        return { valid: true };
    }

    return {
        valid: false,
        error: "Invalid CSS value"
    };
}

export function StudioTuner() {
    // Force enable for testing - TODO: revert to NODE_ENV check
    const isDev = true; // process.env.NODE_ENV === "development";
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"navbar" | "page">("page");

    // Config States
    const [navConfig, setNavConfig] = useState<Record<string, string>>(NAVBAR_DEFAULTS);
    const [navHydratedDefaults, setNavHydratedDefaults] = useState<Record<string, string>>(NAVBAR_DEFAULTS);
    const [pageConfig, setPageConfig] = useState<Record<string, string>>(PAGE_DEFAULTS);
    const [pageHydratedDefaults, setPageHydratedDefaults] = useState<Record<string, string>>(PAGE_DEFAULTS);

    // Mode States - UNIFIED
    const [globalDeviceMode, setGlobalDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
    const [pageMode, setPageMode] = useState<"global" | "page">("global");

    const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
    const [saveMenuOpen, setSaveMenuOpen] = useState(false);
    const saveMenuRef = useRef<HTMLDivElement>(null);
    const modeChangeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Undo/Redo History State
    const [history, setHistory] = useState<Array<{
        navConfig: Record<string, string>;
        pageConfig: Record<string, string>;
        timestamp: number;
    }>>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const isRecordingHistory = useRef(true);

    // Expanded Sections State (Merged)
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        // Navbar - Component-based sections
        navContainer: true,
        navLogo: false,
        navTabs: false,
        navExtras: false,
        navAnimation: false,
        navIndividualCorners: false,
        // Page - New sections
        pageLayoutContainer: true,
        pageGridSystem: false,
        pageTypography: true,
        pageComponents: false,
        pageAnimation: false,
        pageThemeColors: false
    });

    useEffect(() => {
        if (!isDev) return;

        const loadAndHydrate = async () => {
            const styles = getComputedStyle(document.documentElement);

            // Hydrate Navbar: Read from CSS (source of truth)
            const currentNav: Record<string, string> = {};

            // Read current CSS values
            Object.keys(NAVBAR_DEFAULTS).forEach((key) => {
                const val = styles.getPropertyValue(key).trim();
                currentNav[key] = val || NAVBAR_DEFAULTS[key];
            });

            setNavConfig(prev => {
                const next = { ...prev, ...currentNav };
                setNavHydratedDefaults(next);
                return next;
            });

            // Hydrate Page: Read from CSS (source of truth)
            const currentPage: Record<string, string> = {};
            Object.keys(PAGE_DEFAULTS).forEach((key) => {
                const val = styles.getPropertyValue(key).trim();
                currentPage[key] = val || PAGE_DEFAULTS[key];
            });

            setPageConfig(prev => {
                const next = { ...prev, ...currentPage };
                setPageHydratedDefaults(next);
                return next;
            });

            // Load saved defaults from file (team defaults)
            try {
                const response = await fetch('/api/dev/save-defaults');
                const data = await response.json();

                if (data.success && data.config) {
                    console.log("📁 Loading saved defaults from tuner-defaults.json");

                    if (data.config.navbar) {
                        setNavConfig(prev => ({ ...prev, ...data.config.navbar }));
                        setNavHydratedDefaults(prev => ({ ...prev, ...data.config.navbar }));

                        // Apply to DOM
                        Object.entries(data.config.navbar).forEach(([key, val]) => {
                            document.documentElement.style.setProperty(key, val as string);
                        });
                    }

                    if (data.config.page) {
                        setPageConfig(prev => ({ ...prev, ...data.config.page }));
                        setPageHydratedDefaults(prev => ({ ...prev, ...data.config.page }));

                        // Apply to DOM
                        Object.entries(data.config.page).forEach(([key, val]) => {
                            document.documentElement.style.setProperty(key, val as string);
                        });
                    }

                    console.log("✅ Loaded team defaults successfully");
                }
            } catch (e) {
                console.log("ℹ️ No custom defaults found, using CSS baseline");
            }

            // Load saved settings from localStorage
            // Check for page-specific settings first, then fall back to global
            try {
                let saved = null;
                let loadedFrom = "global";

                // Try page-specific settings first if pathname exists
                if (pathname) {
                    const pageSpecificKey = `studio-tuner-settings:${pathname}`;
                    const pageSpecific = localStorage.getItem(pageSpecificKey);
                    if (pageSpecific) {
                        saved = pageSpecific;
                        loadedFrom = `page (${pathname})`;
                        setPageMode("page"); // Auto-switch to page mode if page-specific settings exist
                    }
                }

                // Fall back to global settings if no page-specific found
                if (!saved) {
                    saved = localStorage.getItem("studio-tuner-settings");
                    loadedFrom = "global";
                }

                if (saved) {
                    const { navbar, page } = JSON.parse(saved);
                    console.log(`📦 Loaded settings from ${loadedFrom}:`, { navbar, page });

                    if (navbar) {
                        // Auto-migrate legacy tablet defaults (Center -> Bottom-Left)
                        if (navbar["--nav-top-tablet"] === "50%") {
                            navbar["--nav-top-tablet"] = "auto";
                            navbar["--nav-bottom-tablet"] = "24px";
                            navbar["--nav-left-tablet"] = "16px";
                            navbar["--nav-transform-tablet"] = "none";
                            console.log("🛠️ Migrated legacy tablet positioning to Bottom-Left");
                        }

                        setNavConfig(prev => ({ ...prev, ...navbar }));
                        // Only apply to DOM if value differs from current CSS
                        Object.entries(navbar).forEach(([key, val]) => {
                            const currentCSSValue = styles.getPropertyValue(key).trim();
                            if (currentCSSValue !== val) {
                                console.log(`🔄 Updating ${key}: "${currentCSSValue}" -> "${val}"`);
                                document.documentElement.style.setProperty(key, val as string);
                            }
                        });
                    }
                    if (page) {
                        setPageConfig(prev => ({ ...prev, ...page }));
                        // Only apply to DOM if value differs from current CSS
                        Object.entries(page).forEach(([key, val]) => {
                            const currentCSSValue = styles.getPropertyValue(key).trim();
                            if (currentCSSValue !== val) {
                                document.documentElement.style.setProperty(key, val as string);
                            }
                        });
                    }
                    console.log("✅ Loaded saved settings from localStorage");
                }
            } catch (e) {
                console.warn("Failed to load saved settings:", e);
            }
        };

        // Execute the async loading
        loadAndHydrate();

    }, [isDev, pathname]); // Reload when pathname changes to load page-specific settings

    // CSS Override Injection for Layout Simulation (with debounce)
    useEffect(() => {
        if (!isDev) return;

        // Clear pending timeout to debounce rapid mode changes
        if (modeChangeTimeoutRef.current) {
            clearTimeout(modeChangeTimeoutRef.current);
        }

        // Debounce CSS updates by 150ms
        modeChangeTimeoutRef.current = setTimeout(() => {
            const styleId = 'dev-mode-override';
            let styleEl = document.getElementById(styleId) as HTMLStyleElement;

            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = styleId;
                document.head.appendChild(styleEl);
            }

            // Get current mode values from config
            const getModeValue = (key: string) => {
                const navValue = navConfig[`${key}-${globalDeviceMode}`];
                if (navValue) return navValue;
                return navConfig[key] || NAVBAR_DEFAULTS[`${key}-${globalDeviceMode}`] || NAVBAR_DEFAULTS[key];
            };

            // Inject mode-specific overrides
            styleEl.textContent = `
                :root {
                    /* Navbar Layout Overrides */
                    --nav-collapsed-width: ${getModeValue('--nav-collapsed-width')} !important;
                    --nav-expanded-width: ${getModeValue('--nav-expanded-width')} !important;
                    --nav-direction: ${getModeValue('--nav-direction')} !important;
                    --nav-top: ${getModeValue('--nav-top')} !important;
                    --nav-bottom: ${getModeValue('--nav-bottom')} !important;
                    --nav-left: ${getModeValue('--nav-left')} !important;
                    --nav-right: ${getModeValue('--nav-right')} !important;
                    --nav-transform: ${getModeValue('--nav-transform')} !important;
                    --nav-logo-mb: ${getModeValue('--nav-logo-mb')} !important;
                    --nav-logo-mr: ${getModeValue('--nav-logo-mr')} !important;
                    --nav-padding: ${getModeValue('--nav-padding')} !important;
                    --nav-tabs-section-margin: ${getModeValue('--nav-tabs-section-margin')} !important;

                    /* Page Layout Overrides */
                    --page-padding-x: ${pageConfig[`--page-padding-x-${globalDeviceMode}`] || PAGE_DEFAULTS[`--page-padding-x-${globalDeviceMode}`]} !important;
                    --page-padding-y: ${pageConfig[`--page-padding-y-${globalDeviceMode}`] || PAGE_DEFAULTS[`--page-padding-y-${globalDeviceMode}`]} !important;
                    --page-section-gap: ${pageConfig[`--page-section-gap-${globalDeviceMode}`] || PAGE_DEFAULTS[`--page-section-gap-${globalDeviceMode}`]} !important;
                    --page-max-width: ${pageConfig[`--page-max-width-${globalDeviceMode}`] || PAGE_DEFAULTS[`--page-max-width-${globalDeviceMode}`]} !important;
                }
            `;

            // Force DynamicNavbar to re-read computed styles
            window.dispatchEvent(new Event('resize'));
        }, 150);

        return () => {
            // Cleanup timeout on unmount or re-run
            if (modeChangeTimeoutRef.current) {
                clearTimeout(modeChangeTimeoutRef.current);
            }
            // Cleanup style element on unmount
            const el = document.getElementById('dev-mode-override');
            if (el) el.remove();
        };
    }, [isDev, globalDeviceMode, navConfig, pageConfig]);

    // Click-outside handler for save menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (saveMenuRef.current && !saveMenuRef.current.contains(event.target as Node)) {
                setSaveMenuOpen(false);
            }
        };

        if (saveMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [saveMenuOpen]);

    // Keyboard shortcuts for undo/redo
    useEffect(() => {
        if (!isDev) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const modifier = isMac ? e.metaKey : e.ctrlKey;

            // Cmd/Ctrl+Z = Undo
            if (modifier && e.key === 'z' && !e.shiftKey) {
                e.preventDefault();
                undo();
            }

            // Cmd/Ctrl+Shift+Z = Redo
            if (modifier && e.key === 'z' && e.shiftKey) {
                e.preventDefault();
                redo();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isDev, history, historyIndex]);

    // Track config changes for history
    useEffect(() => {
        if (!isDev) return;
        pushToHistory();
    }, [navConfig, pageConfig]);

    // --- Helpers ---
    const getNavTargetKey = (baseKey: string) => {
        if (RESPONSIVE_NAV_KEYS.includes(baseKey)) {
            return `${baseKey}-${globalDeviceMode}`;
        }
        return baseKey;
    };

    const updateNavValue = (baseKey: string, value: string) => {
        const targetKey = getNavTargetKey(baseKey);
        setNavConfig(prev => ({ ...prev, [targetKey]: value }));
        document.documentElement.style.setProperty(targetKey, value);
    };

    const getNavValue = (baseKey: string) => {
        const targetKey = getNavTargetKey(baseKey);
        return navConfig[targetKey] || "";
    };

    const getPageTargetKey = (baseKey: string) => {
        if (RESPONSIVE_PAGE_KEYS.includes(baseKey)) {
            return `${baseKey}-${globalDeviceMode}`;
        }
        return baseKey;
    };

    const updatePageValue = (baseKey: string, value: string) => {
        const targetKey = getPageTargetKey(baseKey);
        setPageConfig(prev => ({ ...prev, [targetKey]: value }));
        document.documentElement.style.setProperty(targetKey, value);
    };

    const getPageValue = (baseKey: string) => {
        const targetKey = getPageTargetKey(baseKey);
        return pageConfig[targetKey] || "";
    };

    const handleSave = async (scope: "all" | "navbar" | "page", saveAsDefault = false) => {
        setStatus("saving");
        setSaveMenuOpen(false);
        try {
            if (saveAsDefault) {
                // Save as permanent defaults via API → tuner-defaults.json
                const res = await fetch("/api/dev/save-defaults", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ navConfig, pageConfig }),
                });

                if (!res.ok) {
                    throw new Error(`API save failed: ${res.status}`);
                }

                const data = await res.json();
                console.log("✅ Saved as new defaults to file:", data);

                // Update hydrated defaults so reset uses new values
                if (scope === "navbar" || scope === "all") {
                    setNavHydratedDefaults(navConfig);
                }
                if (scope === "page" || scope === "all") {
                    setPageHydratedDefaults(pageConfig);
                }

                // Clear localStorage so these new defaults take precedence
                localStorage.removeItem("studio-tuner-settings");
                console.log("✅ Cleared localStorage override to prioritize new defaults");
            } else {
                // Quick save to localStorage
                const saveData = {
                    navbar: scope === "navbar" || scope === "all" ? navConfig : undefined,
                    page: scope === "page" || scope === "all" ? pageConfig : undefined,
                    timestamp: new Date().toISOString(),
                };

                // Use route-based key when in "page" mode
                const storageKey = pageMode === "page" && pathname
                    ? `studio-tuner-settings:${pathname}`
                    : "studio-tuner-settings";

                localStorage.setItem(storageKey, JSON.stringify(saveData));
                console.log(`✅ Saved to localStorage (${pageMode} mode):`, storageKey, saveData);
            }

            setStatus("saved");
            setTimeout(() => setStatus("idle"), 2000);
        } catch (e) {
            console.error("❌ Save error:", e);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleSyncToCSS = async () => {
        setStatus("saving");
        setSaveMenuOpen(false);
        try {
            const res = await fetch("/api/dev/sync-css", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ navConfig, pageConfig }),
            });

            if (!res.ok) throw new Error("Sync failed");

            console.log("✅ Synced to globals.css");
            setStatus("saved");
            setTimeout(() => setStatus("idle"), 2000);
        } catch (e) {
            console.error("❌ Sync error:", e);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    const handleReset = () => {
        if (activeTab === "navbar") {
            setNavConfig(navHydratedDefaults);
            Object.entries(navHydratedDefaults).forEach(([key, val]) => {
                document.documentElement.style.setProperty(key, val);
            });
        } else {
            setPageConfig(pageHydratedDefaults);
            Object.entries(pageHydratedDefaults).forEach(([key, val]) => {
                document.documentElement.style.setProperty(key, val);
            });
        }
    };

    const toggleSection = (section: string) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    // History Management Functions
    const pushToHistory = () => {
        if (!isRecordingHistory.current) return;

        const newEntry = {
            navConfig: { ...navConfig },
            pageConfig: { ...pageConfig },
            timestamp: Date.now()
        };

        setHistory(prev => {
            // Remove any future history if we're not at the end
            const newHistory = prev.slice(0, historyIndex + 1);
            // Add new entry
            newHistory.push(newEntry);
            // Keep only last 20 entries
            return newHistory.slice(-20);
        });

        setHistoryIndex(prev => Math.min(prev + 1, 19));
    };

    const undo = () => {
        if (historyIndex <= 0) return;

        isRecordingHistory.current = false;
        const previousState = history[historyIndex - 1];

        setNavConfig(previousState.navConfig);
        setPageConfig(previousState.pageConfig);

        // Apply to DOM
        Object.entries(previousState.navConfig).forEach(([key, val]) => {
            document.documentElement.style.setProperty(key, val);
        });
        Object.entries(previousState.pageConfig).forEach(([key, val]) => {
            document.documentElement.style.setProperty(key, val);
        });

        setHistoryIndex(prev => prev - 1);
        setTimeout(() => {
            isRecordingHistory.current = true;
        }, 100);
    };

    const redo = () => {
        if (historyIndex >= history.length - 1) return;

        isRecordingHistory.current = false;
        const nextState = history[historyIndex + 1];

        setNavConfig(nextState.navConfig);
        setPageConfig(nextState.pageConfig);

        // Apply to DOM
        Object.entries(nextState.navConfig).forEach(([key, val]) => {
            document.documentElement.style.setProperty(key, val);
        });
        Object.entries(nextState.pageConfig).forEach(([key, val]) => {
            document.documentElement.style.setProperty(key, val);
        });

        setHistoryIndex(prev => prev + 1);
        setTimeout(() => {
            isRecordingHistory.current = true;
        }, 100);
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
                    className="h-12 w-12 rounded-full shadow-lg bg-black text-white hover:bg-zinc-800 border-2 border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <Icon icon={X} className="h-6 w-6" /> : <Icon icon={Palette} className="h-6 w-6" />}
                </Button>
            </motion.div>

            {/* Studio Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed right-4 bottom-20 w-[400px] h-[85vh] bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="p-4 border-b flex items-center justify-between bg-muted/30">
                            <div>
                                <h3 className="font-bold text-lg leading-none">Design Studio</h3>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Live Theme Editor</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8"
                                    onClick={undo}
                                    disabled={historyIndex <= 0}
                                    title={`Undo (${navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 'Cmd' : 'Ctrl'}+Z)`}
                                >
                                    <Icon icon={Undo} className="h-4 w-4" />
                                </Button>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8"
                                    onClick={redo}
                                    disabled={historyIndex >= history.length - 1}
                                    title={`Redo (${navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 'Cmd' : 'Ctrl'}+Shift+Z)`}
                                >
                                    <Icon icon={Redo} className="h-4 w-4" />
                                </Button>
                                <div className="w-px h-6 bg-border" />
                                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={handleReset} title="Reset Section">
                                    <Icon icon={RotateCcw} className="h-4 w-4" />
                                </Button>
                                <div className="relative" ref={saveMenuRef}>
                                    <Button
                                        size="sm"
                                        className={cn(
                                            "h-8 text-xs gap-1.5 min-w-[80px]",
                                            status === "saved" && "bg-green-500 hover:bg-green-600",
                                            status === "error" && "bg-red-500 hover:bg-red-600"
                                        )}
                                        onClick={() => setSaveMenuOpen(!saveMenuOpen)}
                                    >
                                        <Icon icon={Save} className="h-3.5 w-3.5" />
                                        {status === "idle" && "Save"}
                                        {status === "saving" && "Saving"}
                                        {status === "saved" && "Saved"}
                                        {status === "error" && "Error"}
                                    </Button>
                                    {saveMenuOpen && (
                                        <div className="absolute right-0 top-full mt-2 w-56 bg-card border rounded-lg shadow-xl p-1 z-10 flex flex-col gap-1">
                                            <div className="px-2 py-1 text-[10px] font-semibold text-muted-foreground uppercase">Save Options</div>

                                            {activeTab === "navbar" ? (
                                                <>
                                                    <Button variant="ghost" size="sm" className="justify-start h-8 text-xs" onClick={() => handleSave("navbar")}>
                                                        <Icon icon={Save} className="h-3.5 w-3.5 mr-2" />
                                                        Save Navbar Styles
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="justify-start h-8 text-xs text-amber-500" onClick={() => handleSave("navbar", true)}>
                                                        <Icon icon={Globe} className="h-3.5 w-3.5 mr-2" />
                                                        Save as New Default
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button variant="ghost" size="sm" className="justify-start h-8 text-xs" onClick={() => handleSave("page")}>
                                                        <Icon icon={Save} className="h-3.5 w-3.5 mr-2" />
                                                        {pageMode === "global" ? "Save Page Styles" : "Save to This Page"}
                                                    </Button>
                                                    <Button variant="ghost" size="sm" className="justify-start h-8 text-xs text-amber-500" onClick={() => handleSave("page", true)}>
                                                        <Icon icon={Globe} className="h-3.5 w-3.5 mr-2" />
                                                        Save as New Default
                                                    </Button>
                                                </>
                                            )}

                                            <div className="h-px bg-border my-1" />
                                            <Button variant="default" size="sm" className="justify-start h-8 text-xs" onClick={() => handleSave("all", true)}>
                                                <Icon icon={Save} className="h-3.5 w-3.5 mr-2" />
                                                Save All Changes
                                            </Button>

                                            <div className="h-px bg-border my-1" />
                                            <Button variant="ghost" size="sm" className="justify-start h-8 text-xs text-blue-500 font-medium" onClick={handleSyncToCSS}>
                                                <Icon icon={ChevronsRight} className="h-3.5 w-3.5 mr-2" />
                                                Sync to Production (CSS)
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Global Device Mode Switcher */}
                        <div className="p-2 border-b bg-muted/10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Device Preview</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                                <button
                                    onClick={() => setGlobalDeviceMode("desktop")}
                                    className={cn(
                                        "flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md transition-all",
                                        globalDeviceMode === "desktop"
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon icon={Monitor} className="w-3.5 h-3.5" /> Desktop
                                </button>
                                <button
                                    onClick={() => setGlobalDeviceMode("tablet")}
                                    className={cn(
                                        "flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md transition-all",
                                        globalDeviceMode === "tablet"
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon icon={Tablet} className="w-3.5 h-3.5" /> Tablet
                                </button>
                                <button
                                    onClick={() => setGlobalDeviceMode("mobile")}
                                    className={cn(
                                        "flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-md transition-all",
                                        globalDeviceMode === "mobile"
                                            ? "bg-primary text-primary-foreground shadow-sm"
                                            : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon icon={Smartphone} className="w-3.5 h-3.5" /> Mobile
                                </button>
                            </div>
                        </div>

                        {/* Visual Simulation Indicator */}
                        {globalDeviceMode !== "desktop" && (
                            <div className="px-3 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] border-b border-amber-500/20 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                <strong>🎨 Simulating {globalDeviceMode.toUpperCase()} layout</strong> - Layout forced regardless of window size
                            </div>
                        )}

                        {/* Tabs */}
                        <div
                            className="grid grid-cols-2 p-1 bg-muted/20 border-b"
                            role="tablist"
                            aria-label="Studio configuration tabs"
                        >
                            <button
                                role="tab"
                                aria-selected={activeTab === "page"}
                                aria-controls="page-panel"
                                tabIndex={activeTab === "page" ? 0 : -1}
                                onClick={() => setActiveTab("page")}
                                onKeyDown={(e) => {
                                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                                        e.preventDefault();
                                        setActiveTab("navbar");
                                        (e.currentTarget.nextElementSibling as HTMLElement)?.focus();
                                    }
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActiveTab("page");
                                    }
                                }}
                                className={cn(
                                    "flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50",
                                    activeTab === "page" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"
                                )}
                            >
                                <Icon icon={FileText} className="w-4 h-4" /> Page Layout
                            </button>
                            <button
                                role="tab"
                                aria-selected={activeTab === "navbar"}
                                aria-controls="navbar-panel"
                                tabIndex={activeTab === "navbar" ? 0 : -1}
                                onClick={() => setActiveTab("navbar")}
                                onKeyDown={(e) => {
                                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                                        e.preventDefault();
                                        setActiveTab("page");
                                        (e.currentTarget.previousElementSibling as HTMLElement)?.focus();
                                    }
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActiveTab("navbar");
                                    }
                                }}
                                className={cn(
                                    "flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary/50",
                                    activeTab === "navbar" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:bg-background/50"
                                )}
                            >
                                <Icon icon={GripHorizontal} className="w-4 h-4" /> Navbar
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-background/50">
                            {activeTab === "navbar" ? (
                                <div
                                    role="tabpanel"
                                    id="navbar-panel"
                                    aria-labelledby="navbar-tab"
                                    className="p-3 space-y-3"
                                >

                                    {/* 1️⃣ Container */}
                                    <Section title="Container" expanded={expanded.navContainer} onToggle={() => toggleSection("navContainer")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Size & Layout</div>
                                        <Input label="Width (Collapsed)" value={getNavValue("--nav-collapsed-width")} onChange={(v) => updateNavValue("--nav-collapsed-width", v)} />
                                        <Input label="Width (Expanded)" value={getNavValue("--nav-expanded-width")} onChange={(v) => updateNavValue("--nav-expanded-width", v)} />
                                        <Input label="Orientation" value={getNavValue("--nav-direction")} onChange={(v) => updateNavValue("--nav-direction", v)} options={["column", "row"]} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Position</div>
                                        <Input label="Vertical" value={getNavValue("--nav-top")} onChange={(v) => updateNavValue("--nav-top", v)} />
                                        <Input label="Horizontal" value={getNavValue("--nav-left")} onChange={(v) => updateNavValue("--nav-left", v)} />
                                        <Input label="Center Offset" value={getNavValue("--nav-transform")} onChange={(v) => updateNavValue("--nav-transform", v)} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Spacing</div>
                                        <Input label="Outer Padding" value={getNavValue("--nav-padding")} onChange={(v) => updateNavValue("--nav-padding", v)} />
                                        <Input label="Tab Spacing" value={getNavValue("--nav-gap")} onChange={(v) => updateNavValue("--nav-gap", v)} />
                                        <Input label="Transf Origin" value={getNavValue("--nav-transform-origin")} onChange={(v) => updateNavValue("--nav-transform-origin", v)} options={["center", "bottom left", "bottom center", "top left"]} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Visual Style</div>
                                        <Input label="Corner Radius" value={getNavValue("--nav-radius")} onChange={(v) => updateNavValue("--nav-radius", v)} />
                                        <div>
                                            <button
                                                className="text-[10px] text-muted-foreground cursor-pointer flex items-center gap-1 my-2 hover:text-foreground transition-colors"
                                                onClick={() => toggleSection("navIndividualCorners")}
                                            >
                                                <Icon
                                                    icon={ChevronDown}
                                                    className={cn(
                                                        "w-3 h-3 transition-transform",
                                                        expanded.navIndividualCorners ? "rotate-0" : "-rotate-90"
                                                    )}
                                                />
                                                <span className="uppercase tracking-wider font-semibold">Individual Corners</span>
                                            </button>
                                            <AnimatePresence>
                                                {expanded.navIndividualCorners && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="grid grid-cols-2 gap-3 mt-2">
                                                            <div className="min-w-0">
                                                                <Input label="Top Left" value={getNavValue("--nav-radius-tl")} onChange={(v) => updateNavValue("--nav-radius-tl", v)} />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <Input label="Top Right" value={getNavValue("--nav-radius-tr")} onChange={(v) => updateNavValue("--nav-radius-tr", v)} />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <Input label="Bottom Left" value={getNavValue("--nav-radius-bl")} onChange={(v) => updateNavValue("--nav-radius-bl", v)} />
                                                            </div>
                                                            <div className="min-w-0">
                                                                <Input label="Bottom Right" value={getNavValue("--nav-radius-br")} onChange={(v) => updateNavValue("--nav-radius-br", v)} />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        <Input label="Glass Blur" value={getNavValue("--nav-blur")} onChange={(v) => updateNavValue("--nav-blur", v)} />
                                        <Input label="Drop Shadow" value={getNavValue("--nav-shadow")} onChange={(v) => updateNavValue("--nav-shadow", v)} />
                                        <Input label="Background Opacity" value={getNavValue("--nav-bg-opacity")} onChange={(v) => updateNavValue("--nav-bg-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Border Width" value={getNavValue("--nav-border-width")} onChange={(v) => updateNavValue("--nav-border-width", v)} min={0} max={5} />
                                        <Input label="Animation Speed" value={getNavValue("--nav-transition-speed")} onChange={(v) => updateNavValue("--nav-transition-speed", v)} min={0} max={1000} />
                                    </Section>

                                    {/* 2️⃣ Logo / Brand */}
                                    <Section title="Logo / Brand" expanded={expanded.navLogo} onToggle={() => toggleSection("navLogo")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Size</div>
                                        <Input label="Logo Icon Box" value={getNavValue("--nav-logo-icon-box")} onChange={(v) => updateNavValue("--nav-logo-icon-box", v)} />
                                        <Input label="Logo Icon" value={getNavValue("--nav-logo-icon-size")} onChange={(v) => updateNavValue("--nav-logo-icon-size", v)} min={12} max={32} />
                                        <Input label="Logo Text" value={getNavValue("--nav-logo-text-size")} onChange={(v) => updateNavValue("--nav-logo-text-size", v)} min={10} max={24} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Position & Spacing</div>
                                        <Input label="Logo Margin Bottom" value={getNavValue("--nav-logo-mb")} onChange={(v) => updateNavValue("--nav-logo-mb", v)} />
                                        <Input label="Logo Margin Right" value={getNavValue("--nav-logo-mr")} onChange={(v) => updateNavValue("--nav-logo-mr", v)} />
                                        <Input label="Logo Offset Top" value={getNavValue("--nav-logo-pt")} onChange={(v) => updateNavValue("--nav-logo-pt", v)} />
                                        <Input label="Logo Offset Left" value={getNavValue("--nav-logo-pl")} onChange={(v) => updateNavValue("--nav-logo-pl", v)} />
                                        <Input label="Label Margin" value={getNavValue("--nav-label-margin")} onChange={(v) => updateNavValue("--nav-label-margin", v)} />
                                    </Section>

                                    {/* 3️⃣ Navigation Tabs */}
                                    <Section title="Navigation Tabs" expanded={expanded.navTabs} onToggle={() => toggleSection("navTabs")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Size</div>
                                        <Input label="Tab Height" value={getNavValue("--nav-item-height")} onChange={(v) => updateNavValue("--nav-item-height", v)} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Content</div>
                                        <Input label="Tab Icons" value={getNavValue("--nav-icon-size")} onChange={(v) => updateNavValue("--nav-icon-size", v)} min={12} max={32} />
                                        <Input label="Tab Text" value={getNavValue("--nav-font-size")} onChange={(v) => updateNavValue("--nav-font-size", v)} min={10} max={20} />
                                        <Input label="Font Weight" value={getNavValue("--nav-font-weight")} onChange={(v) => updateNavValue("--nav-font-weight", v)} options={["300", "400", "500", "600", "700"]} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Spacing</div>
                                        <Input label="Tab Padding X" value={getNavValue("--nav-padding-x")} onChange={(v) => updateNavValue("--nav-padding-x", v)} />
                                        <Input label="Tab Padding Y" value={getNavValue("--nav-padding-y")} onChange={(v) => updateNavValue("--nav-padding-y", v)} />
                                        <Input label="Label Margin" value={getNavValue("--nav-label-margin")} onChange={(v) => updateNavValue("--nav-label-margin", v)} />
                                        <Input label="Tabs Margin (Exp)" value={getNavValue("--nav-tabs-section-margin")} onChange={(v) => updateNavValue("--nav-tabs-section-margin", v)} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Visual Effects</div>
                                        <Input label="Tab Corner Radius" value={getNavValue("--nav-tab-radius")} onChange={(v) => updateNavValue("--nav-tab-radius", v)} />
                                        <Input label="Hover Scale" value={getNavValue("--nav-tab-hover-scale")} onChange={(v) => updateNavValue("--nav-tab-hover-scale", v)} min={1} max={1.1} step={0.01} />
                                        <Input label="Active Opacity" value={getNavValue("--nav-tab-active-bg-opacity")} onChange={(v) => updateNavValue("--nav-tab-active-bg-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Inactive Opacity" value={getNavValue("--nav-tab-inactive-opacity")} onChange={(v) => updateNavValue("--nav-tab-inactive-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Hover Opacity" value={getNavValue("--nav-tab-hover-opacity")} onChange={(v) => updateNavValue("--nav-tab-hover-opacity", v)} min={0} max={1} step={0.05} />
                                    </Section>

                                    {/* 4️⃣ Additional Elements */}
                                    <Section title="Additional Elements" expanded={expanded.navExtras} onToggle={() => toggleSection("navExtras")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Theme Toggle</div>
                                        <Input label="Icon Size" value={getNavValue("--nav-theme-icon-size")} onChange={(v) => updateNavValue("--nav-theme-icon-size", v)} min={12} max={32} />
                                        <Input label="Button Size" value={getNavValue("--nav-theme-button-size")} onChange={(v) => updateNavValue("--nav-theme-button-size", v)} min={32} max={56} />
                                        <div className="grid grid-cols-2 gap-2 mt-1">
                                            <Input label="Pad X" value={getNavValue("--nav-theme-padding-x")} onChange={(v) => updateNavValue("--nav-theme-padding-x", v)} min={0} max={24} />
                                            <Input label="Pad Y" value={getNavValue("--nav-theme-padding-y")} onChange={(v) => updateNavValue("--nav-theme-padding-y", v)} min={0} max={24} />
                                        </div>
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">User Profile</div>
                                        <Input label="Avatar Size" value={getNavValue("--nav-profile-avatar-size")} onChange={(v) => updateNavValue("--nav-profile-avatar-size", v)} min={24} max={48} />
                                        <Input label="Name Font Size" value={getNavValue("--nav-profile-text-size")} onChange={(v) => updateNavValue("--nav-profile-text-size", v)} min={10} max={20} />
                                        <div className="grid grid-cols-2 gap-2 mt-1">
                                            <Input label="Pad X" value={getNavValue("--nav-profile-padding-x")} onChange={(v) => updateNavValue("--nav-profile-padding-x", v)} min={0} max={24} />
                                            <Input label="Pad Y" value={getNavValue("--nav-profile-padding-y")} onChange={(v) => updateNavValue("--nav-profile-padding-y", v)} min={0} max={24} />
                                        </div>
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Layout</div>
                                        <Input label="Elements Gap" value={getNavValue("--nav-extras-gap")} onChange={(v) => updateNavValue("--nav-extras-gap", v)} />
                                    </Section>

                                    {/* 5️⃣ Animation */}
                                    <Section title="Animation" expanded={expanded.navAnimation} onToggle={() => toggleSection("navAnimation")}>
                                        <Input label="Type" value={getNavValue("--nav-anim-type")} onChange={(v) => updateNavValue("--nav-anim-type", v)} options={["spring", "tween"]} />
                                        {getNavValue("--nav-anim-type") === "spring" && (
                                            <>
                                                <Input label="Stiffness" value={getNavValue("--nav-anim-stiffness")} onChange={(v) => updateNavValue("--nav-anim-stiffness", v)} min={0} max={500} />
                                                <Input label="Damping" value={getNavValue("--nav-anim-damping")} onChange={(v) => updateNavValue("--nav-anim-damping", v)} min={0} max={100} />
                                            </>
                                        )}
                                        {getNavValue("--nav-anim-type") === "tween" && (
                                            <>
                                                <Input label="Duration" value={getNavValue("--nav-anim-duration")} onChange={(v) => updateNavValue("--nav-anim-duration", v)} min={0} max={2} step={0.1} />
                                                <Input label="Easing" value={getNavValue("--nav-anim-ease") || "easeOut"} onChange={(v) => updateNavValue("--nav-anim-ease", v)} options={["linear", "easeIn", "easeOut", "easeInOut", "circIn", "circOut", "backIn", "backOut", "anticipate"]} />
                                            </>
                                        )}
                                    </Section>

                                </div>
                            ) : (
                                <div
                                    role="tabpanel"
                                    id="page-panel"
                                    aria-labelledby="page-tab"
                                    className="p-3 space-y-3"
                                >
                                    {/* Page Controls */}
                                    {/* Page Scope Switcher */}
                                    <div className="p-1 bg-muted/40 rounded-lg grid grid-cols-2 gap-1 mb-4">
                                        <button
                                            onClick={() => setPageMode("global")}
                                            className={cn(
                                                "flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all shadow-sm",
                                                pageMode === "global"
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "bg-background border-border text-muted-foreground hover:bg-muted"
                                            )}
                                        >
                                            <Icon icon={Globe} className="w-3.5 h-3.5" /> Global Theme
                                        </button>
                                        <button
                                            onClick={() => setPageMode("page")}
                                            className={cn(
                                                "flex items-center justify-center gap-2 py-2 text-xs font-bold uppercase tracking-wider rounded-lg border transition-all shadow-sm",
                                                pageMode === "page"
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "bg-background border-border text-muted-foreground hover:bg-muted"
                                            )}
                                        >
                                            <Icon icon={FileText} className="w-3.5 h-3.5" /> This Page
                                        </button>
                                    </div>

                                    {/* Helper */}
                                    <div className="px-3 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[11px] rounded border border-purple-500/20 mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                        Editing <strong>{globalDeviceMode.toUpperCase()}</strong> variables for <strong>{pageMode.toUpperCase()}</strong> scope.
                                    </div>

                                    {/* 1️⃣ Layout & Container */}
                                    <Section title="Layout & Container" expanded={expanded.pageLayoutContainer} onToggle={() => toggleSection("pageLayoutContainer")}>
                                        <Input label="Page Max Width" value={getPageValue("--page-max-width")} onChange={(v) => updatePageValue("--page-max-width", v)} />
                                        <Input label="Padding X" value={getPageValue("--page-padding-x")} onChange={(v) => updatePageValue("--page-padding-x", v)} />
                                        <Input label="Padding Y" value={getPageValue("--page-padding-y")} onChange={(v) => updatePageValue("--page-padding-y", v)} />
                                        <Input label="Section Gap" value={getPageValue("--page-section-gap")} onChange={(v) => updatePageValue("--page-section-gap", v)} />
                                        <div className="h-px bg-border my-2" />
                                        <Input label="Content Spacing" value={getPageValue("--page-content-spacing")} onChange={(v) => updatePageValue("--page-content-spacing", v)} />
                                        <Input label="Sidebar Width" value={getPageValue("--page-sidebar-width")} onChange={(v) => updatePageValue("--page-sidebar-width", v)} />
                                    </Section>

                                    {/* 2️⃣ Grid System */}
                                    <Section title="Grid System" expanded={expanded.pageGridSystem} onToggle={() => toggleSection("pageGridSystem")}>
                                        <Input label="Grid Gap" value={getPageValue("--page-grid-gap")} onChange={(v) => updatePageValue("--page-grid-gap", v)} />
                                        <Input label="Card Gap" value={getPageValue("--page-card-gap")} onChange={(v) => updatePageValue("--page-card-gap", v)} />
                                    </Section>

                                    {/* 3️⃣ Typography */}
                                    <Section title="Typography" expanded={expanded.pageTypography} onToggle={() => toggleSection("pageTypography")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Headings</div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="min-w-0"><Input label="H1 Size" value={getPageValue("--page-h1-size")} onChange={(v) => updatePageValue("--page-h1-size", v)} /></div>
                                            <div className="min-w-0"><Input label="H2 Size" value={getPageValue("--page-h2-size")} onChange={(v) => updatePageValue("--page-h2-size", v)} /></div>
                                            <div className="min-w-0"><Input label="H3 Size" value={getPageValue("--page-h3-size")} onChange={(v) => updatePageValue("--page-h3-size", v)} /></div>
                                            <div className="min-w-0"><Input label="H4 Size" value={getPageValue("--page-h4-size")} onChange={(v) => updatePageValue("--page-h4-size", v)} /></div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-3 mt-2">
                                            <div className="min-w-0"><Input label="H1 LH" value={getPageValue("--page-h1-line-height")} onChange={(v) => updatePageValue("--page-h1-line-height", v)} /></div>
                                            <div className="min-w-0"><Input label="H2 LH" value={getPageValue("--page-h2-line-height")} onChange={(v) => updatePageValue("--page-h2-line-height", v)} /></div>
                                            <span></span>
                                        </div>
                                        <Input label="Heading Weight" value={getPageValue("--page-heading-weight")} onChange={(v) => updatePageValue("--page-heading-weight", v)} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Body Text</div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <Input label="Body Size" value={getPageValue("--page-body-size")} onChange={(v) => updatePageValue("--page-body-size", v)} />
                                            <Input label="Small Size" value={getPageValue("--page-small-size")} onChange={(v) => updatePageValue("--page-small-size", v)} />
                                        </div>
                                        <Input label="Body Weight" value={getPageValue("--page-body-weight")} onChange={(v) => updatePageValue("--page-body-weight", v)} />
                                        <Input label="Line Height" value={getPageValue("--page-line-height")} onChange={(v) => updatePageValue("--page-line-height", v)} />
                                        <Input label="Letter Spacing" value={getPageValue("--page-letter-spacing")} onChange={(v) => updatePageValue("--page-letter-spacing", v)} />
                                    </Section>

                                    {/* 4️⃣ Components */}
                                    <Section title="Components" expanded={expanded.pageComponents} onToggle={() => toggleSection("pageComponents")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Shapes</div>
                                        <Input label="Card Radius" value={getPageValue("--page-card-radius")} onChange={(v) => updatePageValue("--page-card-radius", v)} />
                                        <Input label="Card Padding" value={getPageValue("--page-card-padding")} onChange={(v) => updatePageValue("--page-card-padding", v)} />
                                        <Input label="Button Radius" value={getPageValue("--page-button-radius")} onChange={(v) => updatePageValue("--page-button-radius", v)} />
                                        <Input label="Input Radius" value={getPageValue("--page-input-radius")} onChange={(v) => updatePageValue("--page-input-radius", v)} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Effects</div>
                                        <Input label="Card Shadow" value={getPageValue("--page-card-shadow")} onChange={(v) => updatePageValue("--page-card-shadow", v)} />
                                        <Input label="Border Width" value={getPageValue("--page-card-border-width")} onChange={(v) => updatePageValue("--page-card-border-width", v)} min={0} max={4} />
                                        <Input label="Focus Ring" value={getPageValue("--page-focus-ring-width")} onChange={(v) => updatePageValue("--page-focus-ring-width", v)} min={0} max={5} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Interactions</div>
                                        <Input label="Hover Scale" value={getPageValue("--page-hover-scale")} onChange={(v) => updatePageValue("--page-hover-scale", v)} min={1} max={1.2} step={0.01} />
                                        <Input label="Hover Opacity" value={getPageValue("--page-hover-opacity")} onChange={(v) => updatePageValue("--page-hover-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Transition Speed" value={getPageValue("--page-transition-speed")} onChange={(v) => updatePageValue("--page-transition-speed", v)} min={0} max={1000} />
                                    </Section>

                                    {/* 5️⃣ Animation */}
                                    <Section title="Animation" expanded={expanded.pageAnimation} onToggle={() => toggleSection("pageAnimation")}>
                                        <Input label="Type" value={getPageValue("--page-anim-type")} onChange={(v) => updatePageValue("--page-anim-type", v)} options={["spring", "tween"]} />
                                        {getPageValue("--page-anim-type") === "spring" && (
                                            <>
                                                <Input label="Stiffness" value={getPageValue("--page-anim-stiffness")} onChange={(v) => updatePageValue("--page-anim-stiffness", v)} min={0} max={500} />
                                                <Input label="Damping" value={getPageValue("--page-anim-damping")} onChange={(v) => updatePageValue("--page-anim-damping", v)} min={0} max={100} />
                                            </>
                                        )}
                                        {getPageValue("--page-anim-type") === "tween" && (
                                            <>
                                                <Input label="Duration" value={getPageValue("--page-anim-duration")} onChange={(v) => updatePageValue("--page-anim-duration", v)} min={0} max={2} step={0.1} />
                                                <Input label="Ease" value={getPageValue("--page-anim-ease") || "easeOut"} onChange={(v) => updatePageValue("--page-anim-ease", v)} options={["linear", "easeIn", "easeOut", "easeInOut", "circIn", "circOut", "backIn", "backOut", "anticipate"]} />
                                            </>
                                        )}
                                        <Input label="Stagger Delay" value={getPageValue("--page-anim-stagger")} onChange={(v) => updatePageValue("--page-anim-stagger", v)} min={0} max={1} step={0.01} />
                                    </Section>

                                    {/* 6️⃣ Theme Colors */}
                                    <Section title="Theme Colors" expanded={expanded.pageThemeColors} onToggle={() => toggleSection("pageThemeColors")}>
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Accent</div>
                                        <Input label="Hue" value={getPageValue("--page-accent-hue")} onChange={(v) => updatePageValue("--page-accent-hue", v)} min={0} max={360} />
                                        <Input label="Saturation" value={getPageValue("--page-accent-sat")} onChange={(v) => updatePageValue("--page-accent-sat", v)} min={0} max={100} />
                                        <Input label="Lightness" value={getPageValue("--page-accent-light")} onChange={(v) => updatePageValue("--page-accent-light", v)} min={0} max={100} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Opacity</div>
                                        <Input label="Card BG" value={getPageValue("--page-card-bg-opacity")} onChange={(v) => updatePageValue("--page-card-bg-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Border" value={getPageValue("--page-border-opacity")} onChange={(v) => updatePageValue("--page-border-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Muted Text" value={getPageValue("--page-text-muted-opacity")} onChange={(v) => updatePageValue("--page-text-muted-opacity", v)} min={0} max={1} step={0.05} />
                                        <Input label="Highlight" value={getPageValue("--page-highlight-opacity")} onChange={(v) => updatePageValue("--page-highlight-opacity", v)} min={0} max={1} step={0.05} />
                                        <div className="h-px bg-border my-2" />
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Surface</div>
                                        <Input label="Surface Tint" value={getPageValue("--page-surface-tint")} onChange={(v) => updatePageValue("--page-surface-tint", v)} min={0} max={100} />
                                    </Section>

                                </div>
                            )}
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
        <div className="border rounded-lg overflow-hidden bg-background shadow-sm">
            <button
                className="w-full flex items-center justify-between p-3 text-xs font-bold uppercase tracking-wider hover:bg-muted/50 transition-colors"
                onClick={onToggle}
            >
                {title}
                <Icon icon={ChevronDown} className={cn("w-4 h-4 transition-transform text-muted-foreground", expanded ? "rotate-180" : "rotate-0")} />
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-3 space-y-3 border-t bg-muted/10">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function Input({ label, value, onChange, options, min: propMin, max: propMax, step: propStep }: { label: string, value: string, onChange: (val: string) => void, options?: string[], min?: number, max?: number, step?: number }) {
    const [validationError, setValidationError] = useState<string | null>(null);

    // Validate on change
    const handleChange = (newValue: string) => {
        const validation = validateCSSValue(newValue);
        if (!validation.valid && newValue !== "") {
            setValidationError(validation.error || "Invalid value");
        } else {
            setValidationError(null);
        }
        onChange(newValue);
    };

    // Dropdown Mode
    if (options) {
        return (
            <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{label}</label>
                <select
                    className="w-full h-8 px-2 text-xs bg-background border rounded-md focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono shadow-sm appearance-none cursor-pointer"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
            </div>
        );
    }

    // Color Detection
    const isHexColor = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value.trim());
    const isRgbColor = /^rgba?\s*\(/i.test(value.trim());
    const isHslColor = /^hsla?\s*\(/i.test(value.trim());
    const isColor = isHexColor || isRgbColor || isHslColor;

    // Convert any color to hex for color picker
    const toHex = (color: string): string => {
        if (isHexColor) return color.length === 4 ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}` : color;
        // For rgb/hsl, just return a default - color picker only works with hex
        return "#000000";
    };

    // Range Detection
    const numericMatch = value.match(/^([-\d.]+)(.*)$/);
    const hasNumeric = !!numericMatch;
    const numValue = hasNumeric ? parseFloat(numericMatch[1]) : 0;
    const unit = hasNumeric ? numericMatch[2] : "";

    // Unit detection for size values
    const sizeUnits = ["px", "rem", "em", "vh", "vw", "%"];
    const hasSizeUnit = sizeUnits.includes(unit);

    // Unit conversion functions
    const convertUnit = (val: number, fromUnit: string, toUnit: string): number => {
        if (fromUnit === toUnit) return val;

        // px to rem/em (assuming 16px base)
        if (fromUnit === "px" && (toUnit === "rem" || toUnit === "em")) {
            return val / 16;
        }
        // rem/em to px
        if ((fromUnit === "rem" || fromUnit === "em") && toUnit === "px") {
            return val * 16;
        }
        // Default: return as-is
        return val;
    };

    const switchUnit = (newUnit: string) => {
        if (!hasNumeric) return;
        const converted = convertUnit(numValue, unit, newUnit);
        const rounded = newUnit === "px" ? Math.round(converted) : Math.round(converted * 100) / 100;
        handleChange(`${rounded}${newUnit}`);
    };

    // Heuristics or Props for range
    let min = propMin !== undefined ? propMin : 0;
    let max = propMax !== undefined ? propMax : 100;
    let step = propStep !== undefined ? propStep : 1;

    // Fallback Heuristics
    if (propMax === undefined) {
        if (unit === "px") max = 200;
        if (label.toLowerCase().includes("radius")) max = 50;
        if (label.toLowerCase().includes("width")) max = 1600;
        if (label.toLowerCase().includes("opacity")) { min = 0; max = 1; step = 0.05; }
        if (label.toLowerCase().includes("duration")) { max = 2; step = 0.1; }
        if (label.toLowerCase().includes("hue")) { max = 360; }
        if (label.toLowerCase().includes("sat") || label.toLowerCase().includes("light")) { max = 100; }
    }

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(`${e.target.value}${unit}`);
    };

    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
                <label className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{label}</label>
                {hasNumeric && (
                    <span className="text-[10px] text-muted-foreground font-mono opacity-50">{value}</span>
                )}
            </div>
            <div className="flex items-center gap-2">
                {/* Color Picker for color values */}
                {isColor && isHexColor && (
                    <input
                        type="color"
                        value={toHex(value)}
                        onChange={(e) => handleChange(e.target.value)}
                        className="w-10 h-7 rounded border border-border cursor-pointer"
                        title="Pick color"
                    />
                )}

                {/* Slider for numeric values */}
                {hasNumeric && !isColor && (
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={numValue}
                        onChange={handleSliderChange}
                        className="flex-1 h-1.5 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                    />
                )}

                {/* Text input */}
                <input
                    className={cn(
                        "h-7 px-2 text-xs bg-background border rounded-md focus:outline-none transition-all font-mono shadow-sm",
                        hasNumeric && !isColor ? "w-16 text-right" : isColor ? "flex-1" : "w-full",
                        validationError
                            ? "border-red-500 focus:ring-1 focus:ring-red-500/50"
                            : "focus:ring-1 focus:ring-primary/20"
                    )}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                />

                {/* Unit Switcher for size values */}
                {hasSizeUnit && (
                    <select
                        className="h-7 px-1 text-xs bg-background border rounded-md focus:outline-none focus:ring-1 focus:ring-primary/20 cursor-pointer font-mono"
                        value={unit}
                        onChange={(e) => switchUnit(e.target.value)}
                        title="Switch unit"
                    >
                        <option value="px">px</option>
                        <option value="rem">rem</option>
                        <option value="em">em</option>
                        {unit === "vh" && <option value="vh">vh</option>}
                        {unit === "vw" && <option value="vw">vw</option>}
                        {unit === "%" && <option value="%">%</option>}
                    </select>
                )}
            </div>
            {validationError && (
                <div className="text-[10px] text-red-500 mt-0.5">{validationError}</div>
            )}
        </div>
    );
}
