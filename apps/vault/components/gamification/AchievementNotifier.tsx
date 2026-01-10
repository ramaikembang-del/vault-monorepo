'use client'

import { useEffect, useRef } from 'react'
import { useUser } from '@clerk/nextjs'
import confetti from 'canvas-confetti'
import { ACHIEVEMENTS } from '@/config/achievements'
import { Award } from 'lucide-react'

export function AchievementNotifier() {
    const { user, isLoaded } = useUser()
    const previousAchievements = useRef<string[]>([])
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (!isLoaded || !user) return

        const currentAchievements = (user.publicMetadata.achievements as string[]) || []

        // On first load, just sync the current list
        if (isFirstRender.current) {
            previousAchievements.current = currentAchievements
            isFirstRender.current = false
            return
        }

        // Find new achievements
        const newlyUnlocked = currentAchievements.filter(
            id => !previousAchievements.current.includes(id)
        )

        if (newlyUnlocked.length > 0) {
            newlyUnlocked.forEach(id => {
                const achievement = ACHIEVEMENTS.find(a => a.id === id)
                if (achievement) {
                    triggerCelebration(achievement)
                }
            })
            previousAchievements.current = currentAchievements
        }
    }, [user, isLoaded])

    const triggerCelebration = (achievement: any) => {
        // 1. Confetti burst
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#f97316', '#10b981', '#fbbf24'],
            zIndex: 9999
        })

        // 2. Play subtle sound if possible (omitted for now)

        // 3. Log to console for dev verification
        console.log(`🏆 ACHIEVEMENT UNLOCKED: ${achievement.name}`)
    }

    return null // Ghost component
}
