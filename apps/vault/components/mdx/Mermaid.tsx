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
    const [id] = useState(() => `mermaid-${Math.random().toString(36).substring(2, 11)}`)

    useEffect(() => {
        let isMounted = true;
        const renderChart = async () => {
            if (!chart || !ref.current) return;

            try {
                // Clear previous SVG for a clean render
                if (isMounted) setSvg('');

                const { svg } = await mermaid.render(id, chart);
                if (isMounted) {
                    setSvg(svg);
                }
            } catch (error) {
                console.error('Mermaid rendering failed:', error);
            }
        };

        // Small delay to ensure DOM is ready and prevent race conditions during rapid updates
        const timer = setTimeout(renderChart, 50);
        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, [chart, id]);

    return (
        <div className="my-6 flex justify-center overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
            <div ref={ref} dangerouslySetInnerHTML={{ __html: svg }} />
        </div>
    )
}
