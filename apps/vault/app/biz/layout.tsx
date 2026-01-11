import { getDocsTree } from '@/lib/docs-tree'
import { DocsSidebar } from '@/components/navigation/DocsSidebar'

export default function BizLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Generate tree from content/biz
    const tree = getDocsTree('biz')

    return (
        <div className="flex min-h-screen flex-col">
            <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
                    <div className="px-4 py-2">
                        <h2 className="mb-4 px-2 text-lg font-bold tracking-tight text-foreground">Biz Lab</h2>
                        <DocsSidebar data={tree} />
                    </div>
                </aside>
                <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_200px]">
                    <div className="mx-auto w-full min-w-0">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
