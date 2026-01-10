export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="container py-6 lg:py-8">
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-bold tracking-tight">Products Lab</h1>
                    <p className="text-muted-foreground">Experimental features and product prototypes.</p>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
