
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// CSS Value Validator
function isValidCSSValue(key: string, value: string): { valid: boolean; error?: string } {
    // Allow empty strings
    if (value === "") {
        return { valid: true };
    }

    // Trim whitespace
    const trimmed = value.trim();

    // Common CSS keywords
    const keywords = ["inherit", "initial", "unset", "auto", "none", "normal", "transparent"];
    if (keywords.includes(trimmed.toLowerCase())) {
        return { valid: true };
    }

    // Size values (px, rem, em, vh, vw, %, etc.)
    const sizePattern = /^-?\d+(\.\d+)?(px|rem|em|vh|vw|%|pt|cm|mm|in|pc|ex|ch|vmin|vmax)$/i;
    if (sizePattern.test(trimmed)) {
        return { valid: true };
    }

    // Numbers (for opacity, scale, etc.)
    const numberPattern = /^-?\d+(\.\d+)?$/;
    if (numberPattern.test(trimmed)) {
        return { valid: true };
    }

    // Hex colors (#rgb, #rrggbb, #rrggbbaa)
    const hexPattern = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
    if (hexPattern.test(trimmed)) {
        return { valid: true };
    }

    // RGB/RGBA colors
    const rgbPattern = /^rgba?\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(,\s*[\d.]+\s*)?\)$/i;
    if (rgbPattern.test(trimmed)) {
        return { valid: true };
    }

    // HSL/HSLA colors
    const hslPattern = /^hsla?\s*\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(,\s*[\d.]+\s*)?\)$/i;
    if (hslPattern.test(trimmed)) {
        return { valid: true };
    }

    // Direction keywords
    const directions = ["row", "column", "row-reverse", "column-reverse"];
    if (directions.includes(trimmed.toLowerCase())) {
        return { valid: true };
    }

    // Shadow values (allow complex strings with multiple values)
    // Example: "0 2px 8px rgba(0,0,0,0.1)"
    const shadowPattern = /^[\d\s.px\-]+rgba?\([^)]+\)$/i;
    if (shadowPattern.test(trimmed)) {
        return { valid: true };
    }

    // Calc() expressions
    const calcPattern = /^calc\(.+\)$/i;
    if (calcPattern.test(trimmed)) {
        return { valid: true };
    }

    // Multiple values separated by spaces (for shadows, borders, etc.)
    const multiValuePattern = /^[\d\s.px\-rem%em]+$/i;
    if (multiValuePattern.test(trimmed)) {
        return { valid: true };
    }

    // If none of the patterns match, it's invalid
    return {
        valid: false,
        error: `Invalid CSS value for ${key}: "${value}". Must be a valid CSS size, color, number, or keyword.`
    };
}

export async function POST(req: Request) {
    if (process.env.NODE_ENV !== "development") {
        return NextResponse.json({ error: "Forbidden in production" }, { status: 403 });
    }

    try {
        const { navConfig, pageConfig } = await req.json();

        // Validate all values before writing
        const validationErrors: string[] = [];

        if (navConfig) {
            Object.entries(navConfig).forEach(([key, val]) => {
                const validation = isValidCSSValue(key, val as string);
                if (!validation.valid && validation.error) {
                    validationErrors.push(validation.error);
                }
            });
        }

        if (pageConfig) {
            Object.entries(pageConfig).forEach(([key, val]) => {
                const validation = isValidCSSValue(key, val as string);
                if (!validation.valid && validation.error) {
                    validationErrors.push(validation.error);
                }
            });
        }

        // If validation failed, return errors without writing
        if (validationErrors.length > 0) {
            return NextResponse.json({
                error: "CSS validation failed",
                details: validationErrors
            }, { status: 400 });
        }

        // Path to globals.css
        const cssPath = path.join(process.cwd(), "app", "globals.css");
        let cssContent = await fs.readFile(cssPath, "utf-8");

        // Create backup before modifying
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const backupDir = path.join(process.cwd(), "app", "backups");
        const backupPath = path.join(backupDir, `globals.css.backup.${timestamp}`);

        // Ensure backup directory exists
        try {
            await fs.mkdir(backupDir, { recursive: true });
        } catch (error) {
            // Directory might already exist, ignore
        }

        // Write backup
        await fs.writeFile(backupPath, cssContent, "utf-8");
        console.log(`✅ Created backup: ${backupPath}`);

        // Cleanup old backups (keep last 5)
        try {
            const files = await fs.readdir(backupDir);
            const backupFiles = files
                .filter(f => f.startsWith("globals.css.backup."))
                .sort()
                .reverse();

            // Delete oldest backups if more than 5
            if (backupFiles.length > 5) {
                for (const file of backupFiles.slice(5)) {
                    await fs.unlink(path.join(backupDir, file));
                    console.log(`🗑️  Deleted old backup: ${file}`);
                }
            }
        } catch (error) {
            console.warn("Failed to cleanup old backups:", error);
        }

        // Helper to update CSS variable
        const updateVar = (key: string, val: string) => {
            // Regex finds "--key: value;" and replaces "value"
            // Handles multiline, spaces, different formatting
            const regex = new RegExp(`(${key}\\s*:\\s*)([^;]+)(;)`, "g");
            if (regex.test(cssContent)) {
                cssContent = cssContent.replace(regex, `$1${val}$3`);
            }
        };

        // Update Navbar Config
        if (navConfig) {
            Object.entries(navConfig).forEach(([key, val]) => {
                updateVar(key, val as string);
            });
        }

        // Update Page Config
        if (pageConfig) {
            Object.entries(pageConfig).forEach(([key, val]) => {
                updateVar(key, val as string);
            });
        }

        // Write back to file
        await fs.writeFile(cssPath, cssContent, "utf-8");

        return NextResponse.json({ success: true, message: "Synced to globals.css" });
    } catch (error) {
        console.error("Failed to sync CSS:", error);
        return NextResponse.json({ error: "Failed to write CSS file" }, { status: 500 });
    }
}
