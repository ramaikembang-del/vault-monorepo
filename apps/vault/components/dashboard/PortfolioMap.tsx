'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mermaid } from '@/components/mdx/Mermaid'

const PORTFOLIO_DIAGRAM = `
graph LR
    A[Vault Foundation] --> B[Knowledge Engine]
    A --> C[Gamification Core]
    B --> D[Personal Wiki]
    B --> E[Network Analysis]
    C --> F[Mission Control]
    C --> G[Progression System]
    
    style A fill:#3b82f6,stroke:#1d4ed8,color:#fff
    style B fill:#8b5cf6,stroke:#6d28d9,color:#fff
    style C fill:#ec4899,stroke:#be185d,color:#fff
`

export function PortfolioMap() {
    return (
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">
                    Product Portfolio Map
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center">
                    <Mermaid chart={PORTFOLIO_DIAGRAM} />
                </div>
            </CardContent>
        </Card>
    )
}
