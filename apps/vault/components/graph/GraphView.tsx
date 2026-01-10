'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FloatingNote } from './FloatingNote'

// @ts-expect-error: react-force-graph-2d types are incompatible with next/dynamic
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
    ssr: false
})

export default function GraphView() {
    const [isMounted, setIsMounted] = useState(false);
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [activeNode, setActiveNode] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        fetch('/api/graph')
            .then(res => res.json())
            .then(data => setGraphData(data))
            .catch(err => console.error(err));
    }, []);

    if (!isMounted) return <div className="h-[500px] w-full bg-muted animate-pulse rounded-lg flex items-center justify-center text-muted-foreground">Loading Graph...</div>;

    const handleNodeClick = (node: any) => {
        setActiveNode(node);
    };

    return (
        <div className="h-[500px] w-full border rounded-lg overflow-hidden bg-zinc-950 relative">
            <ForceGraph2D
                graphData={graphData}
                nodeLabel="name"
                nodeColor={node => (node as any).group === 'Strategy' ? '#4f46e5' : '#f59e0b'}
                linkColor={() => '#525252'}
                backgroundColor="#09090b"
                onNodeClick={handleNodeClick}
            />
            {activeNode && (
                <FloatingNote
                    title={activeNode.name}
                    id={activeNode.id}
                    onClose={() => setActiveNode(null)}
                    onNavigate={() => router.push(`/biz/${activeNode.id}`)}
                />
            )}
        </div>
    )
}
