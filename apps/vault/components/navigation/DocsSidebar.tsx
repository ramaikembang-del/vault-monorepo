'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ChevronRight, FileText, Folder } from 'lucide-react'

// Reuse type from tree generator
type DocNode = {
    title: string
    href: string
    items?: DocNode[]
    isExpanded?: boolean
    isActive?: boolean
    order?: number
}

interface DocsSidebarProps {
    data: DocNode[]
}

export function DocsSidebar({ data }: DocsSidebarProps) {
    const pathname = usePathname()

    // Simple recursive renderer
    const renderNode = (node: DocNode, level: number = 0) => {
        const isActive = pathname === node.href
        const hasChildren = node.items && node.items.length > 0
        const isFolder = node.href === '#'

        return (
            <div key={node.title} className="w-full">
                <Link
                    href={node.href}
                    className={cn(
                        "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                        "hover:bg-zinc-800/50 hover:text-foreground",
                        isActive
                            ? "bg-blue-500/10 text-blue-400 font-semibold"
                            : "text-muted-foreground",
                        level > 0 && "ml-4"
                    )}
                >
                    {/* @ts-ignore */}
                    {isFolder ? <Folder className="w-4 h-4 text-zinc-500" /> : <FileText className="w-4 h-4 opacity-50" />}
                    {node.title}
                </Link>
                {hasChildren && (
                    <div className="mt-1 border-l border-zinc-800 ml-4 pl-1">
                        {node.items!.map(child => renderNode(child, level + 1))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <nav className="w-full space-y-1">
            {data.map(node => renderNode(node))}
        </nav>
    )
}
