'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { FlaskConical, Component, Palette, LayoutTemplate } from 'lucide-react'

export function ProductsSidebar() {
    const pathname = usePathname()

    const navItems = [
        {
            title: 'Overview',
            href: '/products',
            icon: LayoutTemplate
        },
        {
            title: 'Experiments',
            href: '#',
            icon: FlaskConical,
            items: [
                { title: 'Glass Card', href: '#' },
                { title: '3D Visualizer', href: '#' },
            ]
        },
        {
            title: 'UI Library',
            href: '#',
            icon: Component,
        },
        {
            title: 'Design Tokens',
            href: '#',
            icon: Palette,
        }
    ]

    return (
        <nav className="w-full space-y-2">
            {navItems.map((item) => (
                <div key={item.title}>
                    <Link
                        href={item.href}
                        className={cn(
                            "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            "hover:bg-zinc-800/50 hover:text-foreground",
                            pathname === item.href ? "bg-orange-500/10 text-orange-400 font-semibold" : "text-muted-foreground"
                        )}
                    >
                        {/* @ts-ignore */}
                        <item.icon className="w-4 h-4" />
                        {item.title}
                    </Link>
                    {item.items && (
                        <div className="mt-1 ml-4 pl-4 border-l border-zinc-800 space-y-1">
                            {item.items.map(subItem => (
                                <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="block px-2 py-1 text-xs text-zinc-500 hover:text-foreground transition-colors"
                                >
                                    {subItem.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    )
}
