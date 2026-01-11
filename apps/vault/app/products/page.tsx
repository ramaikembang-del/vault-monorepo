import { ContentGrid } from '@/components/navigation/ContentGrid'

export default function ProductsPage() {
    return (
        <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {/* Quick Stats / Highlights for Workbench */}
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <div className="text-2xl font-bold">19</div>
                    <p className="text-xs text-muted-foreground">Active Products</p>
                </div>
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Experiments Running</p>
                </div>
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
                    <div className="text-2xl font-bold">100%</div>
                    <p className="text-xs text-muted-foreground">Design Token Sync</p>
                </div>
            </div>

            <div className="space-y-4">
                <div className="prose dark:prose-invert">
                    <h2>Active Specifications</h2>
                    <p>Live PRDs and technical roadmaps.</p>
                </div>
                <ContentGrid directory="products" />
            </div>
        </div>
    )
}
