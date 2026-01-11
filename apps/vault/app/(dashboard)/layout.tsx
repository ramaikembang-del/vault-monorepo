import { GamificationCheck } from '@/components/gamification/GamificationCheck'

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <GamificationCheck />
            <div className="flex-1 overflow-y-auto bg-zinc-950">
                {children}
            </div>
        </div>
    );
}
