import Link from 'next/link'

export default function ProductsPage() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Experiment 1</h3>
                <p className="text-sm text-muted-foreground mt-2">Placeholder for future experiments.</p>
                <div className="mt-4">
                    <span className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                        Coming Soon
                    </span>
                </div>
            </div>
        </div>
    )
}
