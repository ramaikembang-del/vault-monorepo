import { NextRequest, NextResponse } from "next/server";
import { writeFile, readFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
    // Only allow in development
    if (process.env.NODE_ENV !== "development") {
        return NextResponse.json(
            { error: "This endpoint is only available in development" },
            { status: 403 }
        );
    }

    try {
        const body = await request.json();
        const { navConfig, pageConfig } = body;

        // Path to save the tuner defaults (in components/dev directory)
        const configPath = path.join(
            process.cwd(),
            "components",
            "dev",
            "tuner-defaults.json"
        );

        const config = {
            navbar: navConfig || {},
            page: pageConfig || {},
            lastUpdated: new Date().toISOString(),
            note: "These are custom defaults loaded by the Studio Tuner in development mode",
        };

        await writeFile(configPath, JSON.stringify(config, null, 2), "utf-8");

        return NextResponse.json({
            success: true,
            message: "Defaults saved successfully to tuner-defaults.json",
            path: configPath,
        });
    } catch (error) {
        console.error("Error saving defaults:", error);
        return NextResponse.json(
            {
                error: "Failed to save defaults",
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    // Only allow in development
    if (process.env.NODE_ENV !== "development") {
        return NextResponse.json(
            { error: "This endpoint is only available in development" },
            { status: 403 }
        );
    }

    try {
        const configPath = path.join(
            process.cwd(),
            "components",
            "dev",
            "tuner-defaults.json"
        );

        const data = await readFile(configPath, "utf-8");
        const config = JSON.parse(data);

        return NextResponse.json({
            success: true,
            config,
        });
    } catch (error) {
        // File doesn't exist yet - that's okay
        return NextResponse.json({
            success: true,
            config: null,
            message: "No custom defaults found",
        });
    }
}
