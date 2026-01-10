// @ts-nocheck
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
    const [hoveredNode, setHoveredNode] = useState<any>(null);
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
                nodeLabel={() => ''} // Disable default tooltip
                nodeColor={node => (node as any).group === 'Strategy' ? '#4f46e5' : '#f59e0b'}
                linkColor={() => '#525252'}
                backgroundColor="#09090b"
                onNodeClick={handleNodeClick}
                onNodeHover={(node) => setHoveredNode(node)}
            />

            {/* Premium Hover Preview Overlay */}
            {hoveredNode && !activeNode && (
                <div className="absolute top-4 right-4 z-50 pointer-events-none animate-in fade-in slide-in-from-right-2 duration-200">
                    <div className="w-64 rounded-xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-md">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h4 className="text-sm font-bold text-white">{hoveredNode.name}</h4>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mt-0.5">
                                    {hoveredNode.group || 'Document'}
                                </p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed italic line-clamp-2">
                            Explore the connections between this {(hoveredNode.group || 'item').toLowerCase()} and the rest of the Vault.
                        </p>
                    </div>
                </div>
            )}

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
