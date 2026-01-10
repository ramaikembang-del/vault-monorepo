'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mermaid } from '@/components/mdx/Mermaid'

const PORTFOLIO_DIAGRAM = `
graph LR
    P1[Product 01: Power BI] --> P2[Product 02: Support]
    P2 --> P3[Product 03: SaaS]
    
    style P1 fill:#22c55e,stroke:#16a34a,color:#fff,stroke-width:2px
    style P2 fill:#f97316,stroke:#ea580c,color:#fff
    style P3 fill:#94a3b8,stroke:#64748b,color:#fff
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
