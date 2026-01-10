// @ts-nocheck
'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
    ReferenceLine
} from 'recharts'

const SPRINT_DATA = [
    { day: 1, label: 'D1: Foundation', task: 'Sprint 1', completed: 100 },
    { day: 2, label: 'D2: Audit', task: 'QA & Spec Sync', completed: 60 },
    { day: 3, label: 'D3: Engine', task: 'Logic & Moat', completed: 0 },
]

export function SprintProgress() {
    // Consolidated Velocity: Sprint 1 was Day 1 (4.5 Hours). Day 2 is Audit/QA.
    const START_DATE = new Date('2026-01-10T00:00:00')
    const NOW = new Date()
    const diffTime = Math.abs(NOW.getTime() - START_DATE.getTime())
    const currentDay = Math.min(3, Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1)

    return (
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400 uppercase tracking-widest font-bold">Velocity Report (v0.1.0)</CardTitle>
                <div className="text-xl font-black text-white">Phase: {currentDay === 1 ? 'Day 1 Core' : currentDay === 2 ? 'Day 2 Audit' : 'Day 3 Moat'}</div>
            </CardHeader>
            <CardContent className="h-[200px] pt-4">
                <ResponsiveContainer width="100%" height="100%" minHeight={100}>
                    <BarChart data={SPRINT_DATA}>
                        <XAxis
                            dataKey="label"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#71717a', fontSize: 10 }}
                        />
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-2 shadow-md">
                                            <p className="text-xs font-bold text-white">{payload[0].payload.task}</p>
                                            <p className="text-[10px] text-zinc-400">{payload[0].value}% Complete</p>
                                        </div>
                                    )
                                }
                                return null
                            }}
                        />
                        <Bar dataKey="completed" radius={[4, 4, 0, 0]}>
                            {SPRINT_DATA.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.day === currentDay ? '#3b82f6' : entry.day < currentDay ? '#22c55e' : '#27272a'}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
