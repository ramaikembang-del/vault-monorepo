'use client'

import React from 'react'
import Draggable from 'react-draggable'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ExternalLink } from 'lucide-react'

interface FloatingNoteProps {
    title: string
    id: string
    onClose: () => void
    onNavigate: () => void
}

export function FloatingNote({ title, id, onClose, onNavigate }: FloatingNoteProps) {
    // We use a nodeRef for strict mode compatibility with react-draggable
    const nodeRef = React.useRef(null)

    return (
        // @ts-expect-error: react-draggable definition mismatch
        <Draggable nodeRef={nodeRef} defaultPosition={{ x: 20, y: 20 }}>
            <div ref={nodeRef} className="absolute z-50 w-80">
                <Card className="shadow-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium leading-none">
                            {title}
                        </CardTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={onClose}>
                            {/* @ts-expect-error: React version type conflict */}
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-xs break-all">
                            ID: {id}
                        </CardDescription>
                        <div className="mt-2 text-sm text-muted-foreground">
                            {/* Content preview could go here if we fetched it */}
                            Click below to read the full document.
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button size="sm" className="w-full" onClick={onNavigate}>
                            {/* @ts-expect-error: React version type conflict */}
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Open Document
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </Draggable>
    )
}
