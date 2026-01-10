
import { DynamicNavbar } from "@/components/enhanced-ux/dynamic-navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <DynamicNavbar />
            <div className="transition-all duration-300">
                {children}
            </div>
        </div>
    );
}
