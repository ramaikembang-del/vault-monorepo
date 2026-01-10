// @ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserProgress } from '@/types/user'
import { getUserProgress } from '@/lib/user-progress'
import { ACHIEVEMENTS } from '@/config/achievements'
import { Award, Zap, BookOpen, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function PersonalTracker() {
    const [progress, setProgress] = useState<UserProgress | null>(null)

    useEffect(() => {
        getUserProgress().then(setProgress)
    }, [])

    if (!progress) return null

    const xpInCurrentLevel = progress.xp % 500
    const xpPercentage = (xpInCurrentLevel / 500) * 100

    const roleName = progress.role === 'field_ops' ? 'Field Ops & Product' : 'Strategy & Architecture'
    const roleColor = progress.role === 'field_ops' ? 'text-orange-500' : 'text-blue-500'

    return (
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-sm font-medium text-zinc-400">Personal Progress</CardTitle>
                        <div className={`text-xl font-bold ${roleColor}`}>{roleName}</div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
                        <span className="text-lg font-bold text-white">{progress.level}</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {/* XP Bar */}
                <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-500">Level {progress.level}</span>
                        <span className="text-zinc-500">{progress.xp} XP Total</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${xpPercentage}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full ${progress.role === 'field_ops' ? 'bg-orange-500' : 'bg-blue-500'}`}
                        />
                    </div>
                    <div className="text-[10px] text-right text-zinc-600">
                        {500 - xpInCurrentLevel} XP to Level {progress.level + 1}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="rounded-lg bg-zinc-800/50 p-3 text-center">
                        <BookOpen className="mx-auto mb-1 h-4 w-4 text-zinc-400" />
                        <div className="text-lg font-bold">{progress.stats.docsRead}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Docs Read</div>
                    </div>
                    <div className="rounded-lg bg-zinc-800/50 p-3 text-center">
                        <Zap className="mx-auto mb-1 h-4 w-4 text-yellow-500" />
                        <div className="text-lg font-bold">{progress.stats.streak}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Day Streak</div>
                    </div>
                </div>

                {/* Badges */}
                <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Unlocked Badges</h4>
                    <div className="flex flex-wrap gap-2">
                        {ACHIEVEMENTS.map(achievement => {
                            const isUnlocked = progress.achievements.includes(achievement.id)
                            if (!isUnlocked) return null

                            return (
                                <div key={achievement.id}
                                    className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-help"
                                    title={`${achievement.name}: ${achievement.description}`}>
                                    <Award className={`h-6 w-6 ${progress.role === 'field_ops' ? 'text-orange-500' : 'text-blue-500'}`} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
