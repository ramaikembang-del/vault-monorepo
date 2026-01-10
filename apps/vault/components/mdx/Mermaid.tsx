'use client'

import React, { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'inherit',
})

interface MermaidProps {
    chart: string
}

export function Mermaid({ chart }: MermaidProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [svg, setSvg] = useState<string>('')

    useEffect(() => {
        const renderChart = async () => {
            if (ref.current && chart) {
                try {
                    const { svg } = await mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart)
                    setSvg(svg)
                } catch (error) {
                    console.error('Mermaid rendering failed:', error)
                }
            }
        }

        renderChart()
    }, [chart])

    return (
        <div className="my-6 flex justify-center overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div ref={ref} dangerouslySetInnerHTML={{ __html: svg }} />
        </div>
    )
}
