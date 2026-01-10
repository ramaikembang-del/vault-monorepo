import { NextResponse } from 'next/server'
import { generateGraphData } from '@/lib/graph/extract-nodes'

// Revalidate every hour, or on demand if we want
export const revalidate = 3600

export async function GET() {
    try {
        const data = generateGraphData()
        return NextResponse.json(data)
    } catch (error) {
        console.error('Failed to generate graph data:', error)
        return NextResponse.json({ nodes: [], links: [] }, { status: 500 })
    }
}
