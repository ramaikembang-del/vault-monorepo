// @ts-nocheck
'use client'

import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
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

    const handleNodeClick = (node: any) => {
        setActiveNode(node);
    };

    const nodeSize = React.useCallback((node: any) => {
        const connectionWeight = (node.links?.length || 0) * 1.5;
        const readStatus = node.unread ? 3 : 1;
        return Math.max(5, Math.min(20, connectionWeight + readStatus));
    }, []);

    const nodeCanvasObject = React.useCallback((node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
        const size = nodeSize(node);
        const isHovered = hoveredNode?.id === node.id;

        if (isHovered) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, size + 4, 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(251, 191, 36, 0.2)';
            ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = (node as any).group?.toLowerCase() === 'strategy' ? '#3b82f6' :
            (node as any).group?.toLowerCase() === 'products' ? '#f97316' :
                '#10b981';
        ctx.fill();
    }, [hoveredNode, nodeSize]);

    useEffect(() => {
        setIsMounted(true);
        fetch('/api/graph')
            .then(res => res.json())
            .then(data => setGraphData(data))
            .catch(err => console.error(err));
    }, []);

    if (!isMounted) return <div className="h-[500px] w-full bg-muted animate-pulse rounded-lg flex items-center justify-center text-muted-foreground">Loading Graph...</div>;

    return (
        <div className="h-[500px] w-full border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 relative">
            <ForceGraph2D
                graphData={graphData}
                nodeLabel={() => ''}
                nodeColor={node => {
                    const group = (node as any).group?.toLowerCase();
                    if (group === 'strategy') return 'var(--graph-strategy-color)';
                    if (group === 'products') return 'var(--graph-product-color)';
                    if (group === 'financial') return 'var(--graph-financial-color)';
                    return '#94a3b8';
                }}
                nodeVal={nodeSize}
                linkColor={() => 'var(--graph-link-color)'}
                backgroundColor="var(--graph-bg)"
                onNodeClick={handleNodeClick}
                onNodeHover={(node) => setHoveredNode(node)}
                nodeCanvasObject={nodeCanvasObject}
            />

            {/* Premium Hover Preview Overlay */}
            {hoveredNode && !activeNode && (
                <div className="absolute top-4 right-4 z-50 pointer-events-none animate-in fade-in slide-in-from-right-2 duration-300">
                    <div className="w-68 rounded-xl border border-zinc-800/50 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-xl saturate-150">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h4 className="text-sm font-bold text-white tracking-tight">{hoveredNode.name}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-zinc-800 text-zinc-400 uppercase font-black">
                                        {hoveredNode.group || 'Document'}
                                    </span>
                                    <span className="text-[9px] text-zinc-500 font-bold italic">5 min read</span>
                                </div>
                            </div>
                            <div className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                            Synthesizing connections within the <span className="text-blue-400">{hoveredNode.group}</span> matrix.
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
