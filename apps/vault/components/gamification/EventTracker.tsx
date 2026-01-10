'use client'

import { useEffect, useRef } from 'react'
import { incrementReadCount } from '@/lib/user-progress'

interface EventTrackerProps {
    path: string
}

export function EventTracker({ path }: EventTrackerProps) {
    const hasTracked = useRef(false)

    useEffect(() => {
        // Only track once per mount/path change
        if (!hasTracked.current) {
            incrementReadCount(path)
            hasTracked.current = true
        }
    }, [path])

    return null // Ghost component
}
