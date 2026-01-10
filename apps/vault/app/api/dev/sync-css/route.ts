
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
    if (process.env.NODE_ENV !== "development") {
        return NextResponse.json({ error: "Forbidden in production" }, { status: 403 });
    }

    try {
        const { navConfig, pageConfig } = await req.json();

        // Path to globals.css
        const cssPath = path.join(process.cwd(), "app", "globals.css");
        let cssContent = await fs.readFile(cssPath, "utf-8");

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
