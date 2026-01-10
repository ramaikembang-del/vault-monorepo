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
    { day: 1, label: 'D1', task: 'Scaffold', completed: 100 },
    { day: 2, label: 'D2', task: 'Nav', completed: 100 },
    { day: 3, label: 'D3', task: 'Graph Eng', completed: 100 },
    { day: 4, label: 'D4', task: 'Visual', completed: 100 },
    { day: 5, label: 'D5', task: 'Notes', completed: 100 },
    { day: 6, label: 'D6', task: 'Search UI', completed: 100 },
    { day: 7, label: 'D7', task: 'Search Log', completed: 100 },
    { day: 8, label: 'D8', task: 'Clerk/Gami', completed: 100 },
    { day: 9, label: 'D9', task: 'Dashboard', completed: 50 },
    { day: 10, label: 'D10', task: 'Dashboard', completed: 0 },
    { day: 11, label: 'D11', task: 'Portfolio', completed: 0 },
    { day: 12, label: 'D12', task: 'Achieve', completed: 0 },
    { day: 13, label: 'D13', task: 'Polish', completed: 0 },
    { day: 14, label: 'D14', task: 'Launch', completed: 0 },
]

export function SprintProgress() {
    // Current Day calculation based on Sprint 1 Start (Jan 1, 2026)
    const START_DATE = new Date('2026-01-01T00:00:00')
    const NOW = new Date()
    const diffTime = Math.abs(NOW.getTime() - START_DATE.getTime())
    const currentDay = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1

    return (
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-zinc-400">Sprint 1 Execution</CardTitle>
                <div className="text-xl font-bold text-white">Day {currentDay} of 14</div>
            </CardHeader>
            <CardContent className="h-[200px] pt-4">
                <ResponsiveContainer width="100%" height="100%">
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
