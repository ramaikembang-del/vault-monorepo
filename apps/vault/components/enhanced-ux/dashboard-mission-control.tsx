"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    Trophy,
    Flame,
    Target,
    ArrowRight,
    BarChart3,
    Users,
    Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

// Utility wrapper for icons
// Utility wrapper for icons
const DashIcon = ({ icon: Icon, ...props }: { icon: any, className?: string }) => (
    <Icon aria-hidden="true" {...props} />
);

// --- Constants / Mocks ---
const DASHBOARD_DATA = {
    sprintName: "Sprint 1: Power BI Launch",
    progress: 80,
    weeks: ["Week 0 (Pre)", "Week 2", "Week 5 (Launch)"],
    targetText: "Target: Launch on Feb 5, 2026. Prioritize marketing assets this week.",
    quickActions: [
        { title: "Strategy", progress: 65, color: "bg-blue-500", path: "/biz" },
        { title: "Product", progress: 40, color: "bg-orange-500", path: "/products" },
        { title: "UI Design", progress: 25, color: "bg-purple-500", path: "/products" },
    ],
    companySnapshot: {
        activeProducts: 2,
        targetCustomers: 50,
        runwayMonths: 12
    }
};

const getRecentAchievements = (unlockedIds: string[]) => {
    if (!unlockedIds || unlockedIds.length === 0) return [];
    // Simply take the last 2 for now
    return unlockedIds.slice(-2).reverse().map(id => ({
        id,
        title: id.replace(/_/g, ' '),
        description: "Achievement unlocked!"
    }));
};


export function DashboardMissionControl() {
    const { user } = useUser();
    const firstName = user?.firstName || "Partner";

    // Read animation settings from CSS variables
    const [animConfig, setAnimConfig] = React.useState({
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3,
        ease: "easeOut",
        stagger: 0.05
    });

    React.useEffect(() => {
        // NOTE: We intentionally read from CSS variables here to support the Studio Tuner dynamic theming system.
        // This allows the animation config to update in real-time when the user tweaks settings in the tuner.
        const styles = getComputedStyle(document.documentElement);
        setAnimConfig({
            type: styles.getPropertyValue("--page-anim-type").trim() || "spring",
            stiffness: parseFloat(styles.getPropertyValue("--page-anim-stiffness")) || 300,
            damping: parseFloat(styles.getPropertyValue("--page-anim-damping")) || 30,
            duration: parseFloat(styles.getPropertyValue("--page-anim-duration")) || 0.3,
            ease: styles.getPropertyValue("--page-anim-ease").trim() || "easeOut",
            stagger: parseFloat(styles.getPropertyValue("--page-anim-stagger")) || 0.05
        });
    }, []);

    const transition: any = animConfig.type === "spring"
        ? { type: "spring", stiffness: animConfig.stiffness, damping: animConfig.damping }
        : { type: "tween", duration: animConfig.duration, ease: animConfig.ease };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: animConfig.stagger,
                // Pass transition to children if needed, but usually stagger is enough here
                // We keep it clean for now
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: transition
        }
    };

    return (
        <div
            className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col"
            style={{
                paddingTop: "var(--page-padding-y)",
                paddingBottom: "var(--page-padding-y)",
                paddingLeft: "var(--page-padding-x)",
                paddingRight: "var(--page-padding-x)",
            }}
        >

            <div
                className="mx-auto"
                style={{ maxWidth: "var(--page-max-width)" }}
            >

                {/* 1. Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition}
                    className="mb-8 flex items-end justify-between"
                >
                    <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Mission Control</p>
                        <h1 className="text-4xl font-bold text-foreground">
                            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">{firstName}</span>
                        </h1>
                    </div>
                    <div className="text-right hidden sm:block">
                        <p className="text-muted-foreground text-sm">Current Sprint</p>
                        <p className="text-xl font-semibold text-foreground">{DASHBOARD_DATA.sprintName}</p>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12"
                    style={{ gap: "var(--page-section-gap)" }}
                >

                    {/* LEFT COLUMN - Main Progress (8 cols) */}
                    <div
                        className="lg:col-span-8 flex flex-col"
                        style={{ gap: "var(--page-grid-gap)" }}
                    >

                        {/* Sprint Status Card */}
                        <motion.div variants={itemVariants}>
                            <Card className="overflow-hidden">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-center">
                                        <CardTitle className="flex items-center gap-2">
                                            <DashIcon icon={Target} className="text-accent-500 w-5 h-5" /> Sprint Progress
                                        </CardTitle>
                                        <span className="text-2xl font-bold">{DASHBOARD_DATA.progress}%</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {/* Timeline Visualization */}
                                    <div className="relative pt-4 pb-2">
                                        <div className="flex justify-between text-xs text-muted-foreground mb-2 font-mono uppercase">
                                            {DASHBOARD_DATA.weeks.map((week, idx) => (
                                                <span key={idx}>{week}</span>
                                            ))}
                                        </div>
                                        <div className="h-4 w-full bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${DASHBOARD_DATA.progress}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-accent-600 to-accent-400 relative"
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse" />
                                            </motion.div>
                                        </div>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {DASHBOARD_DATA.targetText}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Quick Actions Grid */}
                        <div
                            className="grid grid-cols-1 sm:grid-cols-3"
                            style={{ gap: "var(--page-card-gap)" }}
                        >
                            {DASHBOARD_DATA.quickActions.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <Card className="cursor-pointer hover:border-accent-500/50 transition-colors group">
                                        <Link href={item.path}>
                                            <CardContent className="p-5">
                                                <h4 className="text-muted-foreground text-sm mb-2">{item.title}</h4>
                                                <div className="flex items-end justify-between mb-2">
                                                    <span className="text-2xl font-bold group-hover:text-accent-400 transition-colors">{item.progress}%</span>
                                                    <DashIcon icon={ArrowRight} className="w-4 h-4 text-muted-foreground group-hover:text-accent-400 transition-colors" />
                                                </div>
                                                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                                    <div className={`h-full ${item.color}`} style={{ width: `${item.progress}%` }} />
                                                </div>
                                            </CardContent>
                                        </Link>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Achievements */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-base">
                                        <DashIcon icon={Trophy} className="text-yellow-500 w-5 h-5" /> Recent Achievements
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {(() => {
                                        const metadata = user?.publicMetadata as any;
                                        const unlockedIds = (metadata?.achievements as string[]) || [];
                                        const recentAchievements = getRecentAchievements(unlockedIds);

                                        if (recentAchievements.length === 0) {
                                            return (
                                                <div className="text-center py-6 text-muted-foreground italic text-sm">
                                                    No achievements unlocked yet. Start exploring to earn badges!
                                                </div>
                                            );
                                        }

                                        return recentAchievements.map((achievement) => (
                                            <div key={achievement.id} className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border border-accent-500/10 hover:border-accent-500/30 transition-all">
                                                <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-lg">
                                                    🏆
                                                </div>
                                                <div>
                                                    <h4 className="font-medium capitalize">{achievement.title}</h4>
                                                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                                                </div>
                                            </div>
                                        ));
                                    })()}

                                    {/* Show a locked one as motivation */}
                                    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 opacity-70 border border-dashed border-border">
                                        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
                                            🔒
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Deep Diver</h4>
                                            <p className="text-xs text-muted-foreground mt-1">Keep exploring the vault to unlock</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>

                    {/* RIGHT COLUMN - Context & Recs (4 cols) */}
                    <div
                        className="lg:col-span-4 flex flex-col"
                        style={{ gap: "var(--page-grid-gap)" }}
                    >

                        {/* Company Snapshot */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardHeader className="pb-2">
                                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                        <DashIcon icon={Briefcase} className="w-4 h-4" /> Company Snapshot
                                    </h3>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-center border-b border-border/50 pb-2">
                                            <span className="text-muted-foreground">Products</span>
                                            <span className="font-mono font-medium">{DASHBOARD_DATA.companySnapshot.activeProducts} Active</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-border/50 pb-2">
                                            <span className="text-muted-foreground">Customers</span>
                                            <span className="font-mono font-medium text-accent-400">{DASHBOARD_DATA.companySnapshot.targetCustomers} (Target)</span>
                                        </li>
                                        <li className="flex justify-between items-center border-b border-border/50 pb-2">
                                            <span className="text-muted-foreground">Runway</span>
                                            <span className="font-mono font-medium text-success-500">{DASHBOARD_DATA.companySnapshot.runwayMonths} Months</span>
                                        </li>
                                        <li className="flex justify-between items-center">
                                            <span className="text-muted-foreground">Team</span>
                                            <div className="flex -space-x-2">
                                                <div className="h-6 w-6 rounded-full bg-accent-500 border border-background" />
                                                <div className="h-6 w-6 rounded-full bg-blue-500 border border-background" />
                                            </div>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Hot Topics / Recommendations */}
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardHeader className="pb-2">
                                    <h3 className="text-lg font-semibold text-accent-500 flex items-center gap-2">
                                        <DashIcon icon={Flame} className="w-5 h-5" /> Recommended
                                    </h3>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Link href="/biz/strategy" className="block outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 rounded-lg">
                                        <div
                                            className="p-3 rounded-lg border transition-colors cursor-pointer"
                                            style={{
                                                backgroundColor: `hsla(var(--page-accent-hue), var(--page-accent-sat), var(--page-accent-light), 0.1)`,
                                                borderColor: `hsla(var(--page-accent-hue), var(--page-accent-sat), var(--page-accent-light), 0.3)`
                                            }}
                                        >
                                            <div
                                                className="text-xs font-bold mb-1"
                                                style={{ color: `hsl(var(--page-accent-hue), var(--page-accent-sat), var(--page-accent-light))` }}
                                            >
                                                CRITICAL • WEEK 0
                                            </div>
                                            <h4 className="font-medium text-sm">GTM Strategy: Pre-Sale phase</h4>
                                            <p className="text-xs text-muted-foreground mt-1">15 min read • Required for call tomorrow</p>
                                        </div>
                                    </Link>

                                    <Link href="/biz/personas" className="block outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500 rounded-lg">
                                        <div className="p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary transition-colors cursor-pointer">
                                            <div className="text-xs font-bold text-blue-500 mb-1">POPULAR</div>
                                            <h4 className="font-medium text-sm">User Personas: The "Busy Exec"</h4>
                                            <p className="text-xs text-muted-foreground mt-1">5 min read • 2 new comments</p>
                                        </div>
                                    </Link>

                                    <Button variant="outline" className="w-full mt-2 text-xs h-9 text-accent-600 hover:text-accent-700 hover:bg-accent-50 dark:text-accent-400 dark:hover:bg-accent-950/50">
                                        View All Suggested
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>

                </motion.div>
            </div>
        </div>
    );
}
