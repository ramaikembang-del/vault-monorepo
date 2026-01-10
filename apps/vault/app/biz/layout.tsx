export default function BizLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                    <div className="p-4">
                        <h2 className="text-lg font-semibold tracking-tight">Biz Lab</h2>
                        {/* Sidebar nav will go here */}
                    </div>
                </aside>
                <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                    <div className="mx-auto w-full min-w-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
