'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// @ts-expect-error: react-force-graph-2d types are incompatible with next/dynamic
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false
})

export default function GraphView({ data }: { data: any }) {
    // Prevent SSR issues and ensure window exists
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="h-96 w-full bg-muted animate-pulse rounded-lg">Loading Graph...</div>;

    return (
        <div className="h-[500px] w-full border rounded-lg overflow-hidden bg-zinc-950">
            <ForceGraph2D
                graphData={data}
                nodeLabel="name"
                nodeColor={node => (node as any).group === 'Strategy' ? '#4f46e5' : '#f59e0b'}
                linkColor={() => '#525252'}
                backgroundColor="#09090b"
            />
        </div>
    )
}
