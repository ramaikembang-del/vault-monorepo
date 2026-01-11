import { ProductsSidebar } from '@/components/navigation/ProductsSidebar'

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="container flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                    <div className="px-4 py-2">
                        <h2 className="mb-4 px-2 text-lg font-bold tracking-tight text-foreground">Workbench</h2>
                        <ProductsSidebar />
                    </div>
                </aside>
                <main className="relative py-6 lg:gap-10 lg:py-8">
                    <div className="mx-auto w-full min-w-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
