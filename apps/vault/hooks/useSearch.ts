'use client'

import { useState, useEffect, useMemo } from 'react'
import Fuse from 'fuse.js'

interface SearchResult {
    id: string
    name: string
    group: string
    val: number
}

export function useSearch() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
    const [nodes, setNodes] = useState<SearchResult[]>([])

    // Fetch data once on mount
    useEffect(() => {
        setStatus('loading')
        fetch('/api/graph')
            .then(res => res.json())
            .then(data => {
                if (data.nodes) {
                    setNodes(data.nodes)
                    setStatus('ready')
                } else {
                    setStatus('error')
                }
            })
            .catch(err => {
                console.error("Search index failed to load", err)
                setStatus('error')
            })
    }, [])

    // Initialize Fuse with memoization
    const fuse = useMemo(() => {
        return new Fuse(nodes, {
            keys: ['name', 'id', 'group'],
            threshold: 0.3, // Fuzzy match sensitivity
            distance: 100,
            ignoreLocation: true, // Search everywhere in the string
        })
    }, [nodes])

    const search = (query: string) => {
        if (!query) return []
        return fuse.search(query).map(result => result.item)
    }

    return {
        search,
        status,
        resultCount: nodes.length
    }
}
