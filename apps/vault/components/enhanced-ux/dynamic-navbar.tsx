"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    CreditCard,
    Map,
    Settings,
    LayoutDashboard,
    Sun,
    Moon
} from "lucide-react";
import { useTheme } from "next-themes";

// Utility wrapper for icons
const NavIcon = ({ icon: Icon, ...props }: { icon: any, className?: string, style?: React.CSSProperties }) => <Icon {...props} />;

export function DynamicNavbar() {
    const pathname = usePathname();
    const { setTheme, theme } = useTheme();

    // --- State Management ---
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Click/Touch expanded state
    const [isRowOrientation, setIsRowOrientation] = useState(false); // Direction detection
    const [mounted, setMounted] = useState(false); // Suppress hydration flash

    // --- Mode Detection ---
    const [isCompact, setIsCompact] = useState(false); // Layout: Width < 1024px
    const [isTouch, setIsTouch] = useState(false);     // Interaction: Touch capabilities

    // Alias for backward compatibility with existing layout logic
    const isMobile = isCompact;
    const isMobileOpen = isOpen;
    const setIsMobileOpen = setIsOpen;

    // Suppress transitions on initial mount to prevent layout shift flash
    useEffect(() => {
        console.log('🔵 Component mounting, suppressing animations');
        const timer = setTimeout(() => {
            console.log('✅ Mounted state enabled, animations active');
            setMounted(true);
        }, 200); // Increased delay to allow mode detection to complete
        return () => clearTimeout(timer);
    }, []);

    // Responsive Detection Hook
    React.useEffect(() => {
        const checkModes = () => {
            const compact = window.matchMedia("(max-width: 1024px)").matches;
            const touch = window.matchMedia("(pointer: coarse)").matches;
            const direction = getComputedStyle(document.documentElement)
                .getPropertyValue("--nav-direction").trim();
            const isRow = direction === "row";

            console.log(`🔄 Mode check: compact=${compact}, touch=${touch}, direction="${direction}", isRow=${isRow}`);

            setIsCompact(compact);
            setIsTouch(touch);
            setIsRowOrientation(isRow);
        };
        console.log('🎯 Running initial mode detection');
        checkModes();
        window.addEventListener("resize", checkModes);
        return () => window.removeEventListener("resize", checkModes);
    }, []);

    // Derived Expansion State
    // Row Orientation (horizontal): Click-to-expand for all devices
    // Column Orientation (vertical): Hover on desktop, click on touch
    const isExpanded = isRowOrientation
        ? isOpen  // Row: Always click-to-expand
        : (isTouch ? isOpen : isHovered); // Column: Touch click, desktop hover

    // --- Animation Config ---
    const [animConfig, setAnimConfig] = useState({
        type: "tween",
        stiffness: 100,
        damping: 50,
        duration: 0.5,
        ease: "easeIn"
    });

    React.useEffect(() => {
        const styles = getComputedStyle(document.documentElement);
        setAnimConfig({
            type: styles.getPropertyValue("--nav-anim-type").trim() || "spring",
            stiffness: parseFloat(styles.getPropertyValue("--nav-anim-stiffness")) || 300,
            damping: parseFloat(styles.getPropertyValue("--nav-anim-damping")) || 30,
            duration: parseFloat(styles.getPropertyValue("--nav-anim-duration")) || 0.3,
            ease: styles.getPropertyValue("--nav-anim-ease").trim() || "easeOut"
        });
    }, []);

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const navItems = [
        { label: "Dashboard", path: "/", icon: LayoutDashboard },
        { label: "Products Lab", path: "/products", icon: CreditCard },
        { label: "Biz Lab", path: "/biz", icon: Map },
        { label: "Admin Panel", path: "/admin", icon: Settings },
    ];

    return (
        <div className={mounted ? undefined : "no-transitions"}>
            <style jsx>{`
                .no-transitions,
                .no-transitions * {
                    transition: none !important;
                    animation: none !important;
                }
            `}</style>
            <motion.div
                layout={mounted ? true : false}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: mounted ? 1 : 0,
                    width: isRowOrientation
                        ? (isExpanded ? "auto" : "var(--nav-collapsed-width)")
                        : (isExpanded ? "var(--nav-expanded-width)" : "var(--nav-collapsed-width)")
                }}
                transition={
                    animConfig.type === "spring"
                        ? { type: "spring", stiffness: animConfig.stiffness, damping: animConfig.damping }
                        : { type: "tween", duration: animConfig.duration, ease: animConfig.ease as any }
                }
                onMouseEnter={() => !isRowOrientation && !isTouch && setIsHovered(true)}
                onMouseLeave={() => !isRowOrientation && !isTouch && setIsHovered(false)}
                className={cn(
                    "fixed flex overflow-hidden cursor-default border-border",
                    "pointer-events-auto",
                    (isTouch || isRowOrientation) && "cursor-pointer",
                    isExpanded ? "items-start" : "items-start"
                )}
                onClick={() => (isTouch || isRowOrientation) && setIsOpen(!isOpen)}
                style={{
                    flexDirection: "var(--nav-direction)" as any,
                    // width handled by animate prop
                    left: "var(--nav-left)",
                    right: "var(--nav-right)",
                    top: "var(--nav-top)",
                    bottom: "var(--nav-bottom)",
                    transform: "var(--nav-transform)",
                    zIndex: "var(--nav-z-index)",
                    backdropFilter: `blur(var(--nav-blur))`,
                    backgroundColor: `hsl(var(--card) / var(--nav-bg-opacity))`,
                    borderWidth: "var(--nav-border-width)",
                    borderStyle: "solid",
                    padding: "var(--nav-padding)",
                    gap: "var(--nav-gap)",
                    borderRadius: `var(--nav-radius)`,
                    boxShadow: "var(--nav-shadow)",
                    transitionDuration: "var(--nav-transition-speed)",
                    transition: mounted ? undefined : 'none' // Suppress hydration flash
                }}
            >
                {/* Burger Menu Button (Mobile Column Only, When Collapsed) */}
                {isMobile && !isRowOrientation && !isExpanded && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center rounded-lg hover:bg-accent transition-colors mb-2"
                        style={{
                            minHeight: '44px',
                            minWidth: '44px',
                            width: 'var(--nav-icon-box)',
                            height: 'var(--nav-icon-box)'
                        }}
                        aria-label="Open menu"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        >
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    </button>
                )}

                {/* Brand Icon (Always visible) */}
                <div
                    className={cn("flex w-full items-center transition-all pointer-events-auto")}
                    style={{
                        marginBottom: "var(--nav-logo-mb)",
                        marginRight: "var(--nav-logo-mr)",
                        paddingTop: "var(--nav-logo-pt)",
                        paddingLeft: "var(--nav-logo-pl)"
                    }}
                >
                    <div
                        className="flex shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"
                        style={{ height: "var(--nav-logo-icon-box)", width: "var(--nav-logo-icon-box)" }}
                    >
                        <svg
                            className="transition-transform duration-200"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            style={{ width: "var(--nav-icon-size)", height: "var(--nav-icon-size)" }}
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>

                    <AnimatePresence>
                        {isExpanded && !isRowOrientation && (
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                className="whitespace-nowrap font-bold text-foreground overflow-hidden ml-4"
                                style={{ fontSize: "var(--nav-logo-text-size)" }}
                            >
                                Clario Vault
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation Items - Hidden when mobile collapsed */}
                {(!isMobile || isExpanded) && (
                    <div className="flex flex-col gap-1 w-full flex-1 pointer-events-auto" style={{ flexDirection: "inherit" }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "relative flex items-center justify-start w-full group transition-all",
                                    isActive(item.path)
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                                style={{
                                    height: "var(--nav-item-height)",
                                    paddingLeft: "var(--nav-padding-x)",
                                    paddingRight: "var(--nav-padding-x)",
                                    paddingTop: "var(--nav-padding-y)",
                                    paddingBottom: "var(--nav-padding-y)",
                                    borderRadius: "var(--nav-tab-radius)",
                                    fontWeight: "var(--nav-font-weight)",
                                    opacity: isActive(item.path) ? 1 : "var(--nav-tab-inactive-opacity)",
                                    "--hover-scale": "var(--nav-tab-hover-scale)",
                                    "--hover-opacity": "var(--nav-tab-hover-opacity)"
                                } as React.CSSProperties}
                            >
                                {isActive(item.path) && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 bg-primary -z-10"
                                        style={{
                                            borderRadius: "var(--nav-tab-radius)",
                                            opacity: "var(--nav-tab-active-bg-opacity)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Hover Effect for Inactive Items */}
                                {!isActive(item.path) && (
                                    <div className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                                        style={{ borderRadius: "var(--nav-tab-radius)" }}
                                    />
                                )}

                                <div style={{ width: 24, display: "flex", justifyContent: "center", flexShrink: 0 }}>
                                    <NavIcon icon={item.icon} style={{ width: "var(--nav-icon-size)", height: "var(--nav-icon-size)" }} />
                                </div>

                                <AnimatePresence>
                                    {isExpanded && !isRowOrientation && (
                                        <motion.span
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            className="whitespace-nowrap overflow-hidden ml-3"
                                            style={{ fontSize: "var(--nav-font-size)" }}
                                        >
                                            {item.label}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Link>
                        ))}
                    </div>
                )}

                {/* User UserButton (Bottom) */}
                <div
                    className={cn(
                        "mt-auto w-full pt-2 flex flex-col gap-1 pointer-events-auto",
                        !isMobile && "border-t border-border" // Standard border for desktop
                    )}
                    style={isMobile
                        ? { paddingTop: 0, marginTop: 0, flexDirection: "inherit", width: "auto", borderTop: "none" }
                        : {}
                    }
                >
                    {/* Theme Toggle */}
                    {(!isMobile || isExpanded) && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className={cn(
                                "flex justify-start hover:bg-accent",
                                isMobile ? "w-auto" : "w-full"
                            )}
                            style={{
                                height: "var(--nav-theme-button-size)",
                                width: isMobile ? "var(--nav-theme-button-size)" : "100%",
                                paddingLeft: "var(--nav-theme-padding-x)",
                                paddingRight: "var(--nav-theme-padding-x)",
                                paddingTop: "var(--nav-theme-padding-y)",
                                paddingBottom: "var(--nav-theme-padding-y)",
                                marginBottom: "var(--nav-extras-gap)"
                            }}
                        >
                            <div
                                className="relative shrink-0 flex items-center justify-center"
                                style={{ height: "var(--nav-icon-box)", width: 24 }}
                            >
                                <NavIcon icon={Sun} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" style={{ width: "var(--nav-theme-icon-size)", height: "var(--nav-theme-icon-size)" }} />
                                <NavIcon icon={Moon} className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" style={{ width: "var(--nav-theme-icon-size)", height: "var(--nav-theme-icon-size)" }} />
                            </div>

                            <AnimatePresence>
                                {isExpanded && !isMobile && (
                                    <motion.div
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="flex flex-1 items-center overflow-hidden whitespace-nowrap font-medium ml-3"
                                        style={{ fontSize: "var(--nav-font-size)" }}
                                    >
                                        <span>Toggle Theme</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Button>
                    )}

                    {/* User Profile */}
                    {(!isMobile || isExpanded) && (
                        <div
                            className={cn(
                                "group relative flex items-center transition-all hover:bg-accent cursor-pointer rounded-md",
                                isMobile ? "w-auto" : "w-full"
                            )}
                            style={{
                                height: "var(--nav-item-height)",
                                width: isMobile ? "var(--nav-item-height)" : "100%",
                                paddingLeft: "var(--nav-profile-padding-x)",
                                paddingRight: "var(--nav-profile-padding-x)",
                                paddingTop: "var(--nav-profile-padding-y)",
                                paddingBottom: "var(--nav-profile-padding-y)",
                                minHeight: "var(--nav-item-height)" // Prevent collapse during UserButton load
                            }}
                        >
                            <div
                                className="flex shrink-0 items-center justify-center"
                                style={{
                                    height: "var(--nav-icon-box)",
                                    width: "var(--nav-icon-box)",
                                    minHeight: "var(--nav-icon-box)", // Reserve space during load
                                    minWidth: "var(--nav-icon-box)"
                                }}
                            >
                                <UserButton
                                    afterSignOutUrl="/sign-in"
                                    appearance={{
                                        elements: {
                                            rootBox: {
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                                height: '100%'
                                            },
                                            userButtonTrigger: {
                                                padding: 0,
                                                minHeight: 0,
                                                lineHeight: 0,
                                                height: 'auto',
                                                width: 'auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            },
                                            avatarBox: {
                                                width: "var(--nav-profile-avatar-size)",
                                                height: "var(--nav-profile-avatar-size)",
                                                minWidth: "var(--nav-profile-avatar-size)",
                                                minHeight: "var(--nav-profile-avatar-size)"
                                            }
                                        }
                                    }}
                                />
                            </div>
                            <AnimatePresence>
                                {isExpanded && !isMobile && (
                                    <motion.div
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="flex flex-1 items-center overflow-hidden whitespace-nowrap font-medium ml-[9px]"
                                        style={{ fontSize: "var(--nav-profile-text-size)" }}
                                    >
                                        <span>Account</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
