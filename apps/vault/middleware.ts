import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/api/dev(.*)", "/api/graph(.*)"]);

// Define admin routes
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    // DEVELOPMENT BYPASS: Skip authentication in development mode
    if (process.env.NODE_ENV === "development") {
        return NextResponse.next();
    }

    // If it's a public route, allow access
    if (isPublicRoute(req)) {
        return NextResponse.next();
    }

    // Protect all other routes - require authentication
    const { userId, sessionClaims } = await auth();

    if (!userId) {
        // Redirect to sign-in if not authenticated
        const signInUrl = new URL("/sign-in", req.url);
        signInUrl.searchParams.set("redirect_url", req.url);
        return NextResponse.redirect(signInUrl);
    }

    // Access public metadata from session claims
    // Note: Requires JWT template configuration in Clerk Dashboard
    const metadata = sessionClaims?.publicMetadata as
        | {
            vaultAccess?: boolean;
            vaultRole?: string;
        }
        | undefined;



    if (!metadata?.vaultAccess) {
        return new Response(
            "Access Denied. Configure publicMetadata in Clerk JWT template.",
            { status: 403 }
        );
    }

    // Check admin-only routes
    if (isAdminRoute(req)) {
        if (metadata?.vaultRole !== "admin") {
            return new Response("Admin access required.", { status: 403 });
        }
    }

    return NextResponse.next();
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
};
