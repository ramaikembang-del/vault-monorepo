// @ts-nocheck
'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserProgress } from '@/types/user'
import { getUserProgress } from '@/lib/user-progress'
import { ACHIEVEMENTS } from '@/config/achievements'
import { Award, Zap, BookOpen, Star, MoreHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AchievementList } from '@/components/gamification/AchievementList'

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
                <div className="flex items-center justify-between mb-3 border-t border-zinc-800 pt-4 mt-2">
                    <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Unlocked Badges</h4>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="text-[10px] text-blue-400 hover:text-blue-300 font-medium transition-colors">
                                VIEW ALL
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto bg-zinc-950 border-zinc-900">
                            <DialogHeader>
                                <DialogTitle className="text-xl font-bold text-white">Achievement Gallery</DialogTitle>
                            </DialogHeader>
                            {progress && <AchievementList progress={progress} />}
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {progress.achievements.slice(0, 4).map((badgeId) => {
                        const badge = ACHIEVEMENTS.find(a => a.id === badgeId)
                        if (!badge) return null
                        return (
                            <div key={badgeId}
                                className="aspect-square rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group relative cursor-help transition-all hover:border-blue-500/50"
                                title={badge.name}
                            >
                                <Award className="h-5 w-5 text-blue-400" />
                            </div>
                        )
                    })}
                    {progress.achievements.length === 0 && (
                        <div className="col-span-4 py-4 text-center border border-dashed border-zinc-800 rounded-lg">
                            <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest">No Badges Yet</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
