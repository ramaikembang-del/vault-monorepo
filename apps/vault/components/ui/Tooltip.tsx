// @ts-nocheck
'use client'

import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'
import { HelpCircle } from 'lucide-react'

interface TooltipProps {
    term: string
    definition: string
    children?: React.ReactNode
}

export function Tooltip({ term, definition, children }: TooltipProps) {
    return (
        <TooltipPrimitive.Provider delayDuration={200}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    <span
                        tabIndex={0}
                        className="inline-flex items-center gap-1 cursor-help border-b border-dotted border-blue-500/50 text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500/50 rounded-sm"
                    >
                        {children || term}
                        <HelpCircle size={10} className="opacity-50" />
                    </span>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipPrimitive.Content
                        side="top"
                        align="center"
                        className={cn(
                            "z-50 w-72 rounded-lg border border-zinc-800 bg-zinc-950 p-3 shadow-xl backdrop-blur-sm",
                            "animate-in fade-in zoom-in-95 duration-200"
                        )}
                        sideOffset={5}
                    >
                        <div className="space-y-1.5">
                            <h5 className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                                Why this matters?
                            </h5>
                            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                                <span className="font-bold text-white">{term}</span>: {definition}
                            </p>
                        </div>
                        <TooltipPrimitive.Arrow className="fill-zinc-800" />
                    </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}
