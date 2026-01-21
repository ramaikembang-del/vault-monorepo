"use client";

import React, { useEffect } from "react";
import { useVaultSettings } from "@/lib/store/settings-store";

/**
 * Settings Provider
 *
 * Applies vault settings to the DOM:
 * - Global font size cascade
 * - Accessibility preferences (reduced motion, high contrast)
 * - Link behavior
 * - CSS custom properties for settings
 */
export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const { global, activeProfile } = useVaultSettings();

  // Apply global font size cascade
  useEffect(() => {
    if (global.globalFontSizeCascade.enabled) {
      document.documentElement.style.setProperty(
        "--global-font-size",
        `${global.globalFontSizeCascade.masterFontSize}px`
      );
      document.documentElement.style.fontSize = `${global.globalFontSizeCascade.masterFontSize}px`;
    } else {
      document.documentElement.style.removeProperty("--global-font-size");
      document.documentElement.style.fontSize = "";
    }
  }, [
    global.globalFontSizeCascade.enabled,
    global.globalFontSizeCascade.masterFontSize,
  ]);

  // Apply accessibility settings
  useEffect(() => {
    // Reduced Motion
    if (global.accessibility.reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }

    // High Contrast
    if (global.accessibility.highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }

    // Screen Reader Optimizations
    if (global.accessibility.screenReaderOptimizations) {
      document.documentElement.classList.add("sr-optimized");
    } else {
      document.documentElement.classList.remove("sr-optimized");
    }

    // Enhanced Keyboard Navigation
    if (global.accessibility.keyboardNavigationEnhanced) {
      document.documentElement.classList.add("enhanced-kbd-nav");
    } else {
      document.documentElement.classList.remove("enhanced-kbd-nav");
    }
  }, [
    global.accessibility.reducedMotion,
    global.accessibility.highContrast,
    global.accessibility.screenReaderOptimizations,
    global.accessibility.keyboardNavigationEnhanced,
  ]);

  // Set active workflow profile as data attribute
  useEffect(() => {
    if (activeProfile) {
      document.documentElement.setAttribute("data-workflow-profile", activeProfile);
    } else {
      document.documentElement.removeAttribute("data-workflow-profile");
    }
  }, [activeProfile]);

  // Log settings changes in development
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("⚙️ Settings Provider: Global settings applied", {
        fontSize: global.globalFontSizeCascade.masterFontSize,
        reducedMotion: global.accessibility.reducedMotion,
        highContrast: global.accessibility.highContrast,
        activeProfile,
      });
    }
  }, [global, activeProfile]);

  return <>{children}</>;
}
