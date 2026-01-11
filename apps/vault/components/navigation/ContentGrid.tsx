import Link from 'next/link'
import { getFolderMetadata } from '@/lib/mdx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, ArrowRight } from 'lucide-react'

interface ContentGridProps {
    directory: 'biz' | 'products'
}

export function ContentGrid({ directory }: ContentGridProps) {
    const items = getFolderMetadata(directory)

    if (items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed rounded-xl border-zinc-800">
                <p className="text-muted-foreground font-medium">No documents found in this sector yet.</p>
                <p className="text-xs text-zinc-500 mt-1 italic">Populate content/{directory} to see them here.</p>
            </div>
        )
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {items.map((item) => (
                <Link key={item.href} href={item.href} className="group">
                    <Card className="h-full border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm transition-all duration-300 group-hover:border-zinc-700 group-hover:bg-zinc-900/50 group-hover:translate-y-[-4px] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between mb-2">
                                <Badge variant="secondary" className="bg-zinc-800/80 text-zinc-400 border-zinc-700/50 text-[10px] uppercase tracking-wider font-black">
                                    {item.status}
                                </Badge>
                                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase">
                                    {/* @ts-ignore */}
                                    <Clock className="w-3 h-3" />
                                    {item.readTime}
                                </div>
                            </div>
                            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
                                {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-xs leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors line-clamp-3 font-medium">
                                {item.excerpt}
                            </CardDescription>
                            <div className="mt-4 flex items-center text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                                {/* @ts-ignore */}
                                Open Document <ArrowRight className="ml-1 w-3 h-3" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    )
}
