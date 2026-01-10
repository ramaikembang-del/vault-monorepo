// @ts-nocheck
'use client'

import React from 'react'
import * as HoverCard from '@radix-ui/react-hover-card'
import { cn } from '@/lib/utils'
import { FileText, Clock, Tag } from 'lucide-react'

interface HoverPreviewProps {
    children: React.ReactNode
    title: string
    excerpt?: string
    category?: string
    readTime?: string
    status?: 'draft' | 'stable' | 'archived'
}

export function HoverPreview({
    children,
    title,
    excerpt,
    category,
    readTime,
    status = 'stable'
}: HoverPreviewProps) {
    return (
        <HoverCard.Root openDelay={300} closeDelay={100}>
            <HoverCard.Trigger asChild>
                {children}
            </HoverCard.Trigger>
            <HoverCard.Portal>
                <HoverCard.Content
                    className={cn(
                        "z-50 w-64 rounded-xl border border-zinc-800 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-md",
                        "animate-in fade-in zoom-in-95 duration-200"
                    )}
                    sideOffset={5}
                >
                    <div className="space-y-3">
                        <div className="flex items-start justify-between">
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-white leading-tight">{title}</h4>
                                {category && (
                                    <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                                        <Tag size={10} />
                                        {category}
                                    </div>
                                )}
                            </div>
                            <div className={cn(
                                "h-2 w-2 rounded-full",
                                status === 'stable' ? "bg-green-500" : "bg-yellow-500"
                            )} />
                        </div>

                        {excerpt && (
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 italic">
                                "{excerpt}"
                            </p>
                        )}

                        <div className="flex items-center gap-4 border-t border-zinc-900 pt-3">
                            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-medium">
                                <Clock size={12} />
                                {readTime || '3 min'}
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-medium">
                                <FileText size={12} />
                                MDX Doc
                            </div>
                        </div>
                    </div>
                    <HoverCard.Arrow className="fill-zinc-800" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}
