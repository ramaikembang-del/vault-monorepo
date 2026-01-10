// @ts-nocheck
'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ACHIEVEMENTS } from '@/config/achievements'
import { UserProgress } from '@/types/user'
import * as Icons from 'lucide-react'
import { cn } from '@/lib/utils'

interface AchievementListProps {
    progress: UserProgress
    onClose?: () => void
}

export function AchievementList({ progress, onClose }: AchievementListProps) {
    const [filter, setFilter] = useState<'all' | 'field_ops' | 'strategy_arch'>('all')

    const filteredAchievements = ACHIEVEMENTS.filter(a => {
        if (filter === 'all') return true
        return a.role === filter || !a.role
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {['all', 'field_ops', 'strategy_arch'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-3 py-1 rounded-full text-xs font-medium border transition-colors",
                                filter === f
                                    ? "bg-blue-600 border-blue-500 text-white"
                                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                            )}
                        >
                            {f.replace('_', ' ').toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredAchievements.map((achievement) => {
                    const isUnlocked = (progress?.achievements ?? []).includes(achievement.id)
                    const IconComponent = Icons[achievement.icon] || Icons.Award

                    return (
                        <Card
                            key={achievement.id}
                            className={cn(
                                "border-zinc-800 transition-all duration-300",
                                isUnlocked
                                    ? "bg-zinc-900/50 shadow-lg shadow-blue-500/10 border-blue-900/30"
                                    : "bg-zinc-950 opacity-40 grayscale"
                            )}
                        >
                            <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                                <div className={cn(
                                    "p-3 rounded-full mb-2",
                                    isUnlocked ? "bg-blue-500/20 text-blue-400" : "bg-zinc-800 text-zinc-600"
                                )}>
                                    <IconComponent size={24} />
                                </div>
                                <h4 className="font-bold text-sm text-zinc-100">{achievement.name}</h4>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    {achievement.description}
                                </p>
                                {isUnlocked && (
                                    <span className="text-[10px] font-mono text-blue-400">+{achievement.xp} XP</span>
                                )}
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
