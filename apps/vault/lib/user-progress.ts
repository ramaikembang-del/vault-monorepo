// @ts-nocheck
'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'
import { UserProgress, PlayerRole } from '@/types/user'
import { ACHIEVEMENTS } from '@/config/achievements'

// Default empty progress
const INITIAL_PROGRESS: UserProgress = {
    role: null,
    level: 1,
    xp: 0,
    stats: {
        docsRead: 0,
        streak: 0,
    },
    achievements: [],
}

export async function getUserProgress(): Promise<UserProgress> {
    const { userId } = auth()
    if (!userId) return INITIAL_PROGRESS

    const user = await clerkClient.users.getUser(userId)
    return (user.publicMetadata as unknown as UserProgress) || INITIAL_PROGRESS
}

export async function setPlayerRole(role: PlayerRole) {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    const progress = await getUserProgress()

    if (progress.role) throw new Error('Role already selected')

    // Award XP for Onboarding
    const newProgress = { ...progress, role, xp: progress.xp + 100 }

    // Check "Onboarded" achievement
    if (!newProgress.achievements.includes('onboarded')) {
        newProgress.achievements.push('onboarded')
    }

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: newProgress,
    })

    return newProgress
}

export async function incrementReadCount(currentPath: string) {
    const { userId } = auth()
    if (!userId) return

    const progress = await getUserProgress()

    // Update Stats
    const newStats = {
        ...progress.stats,
        docsRead: progress.stats.docsRead + 1
    }

    let newXp = progress.xp + 10; // Base XP for reading
    const newAchievements = [...progress.achievements]

    // Check Achievements
    const context = { path: currentPath, category: getCategoryFromPath(currentPath) }

    ACHIEVEMENTS.forEach(achievement => {
        if (newAchievements.includes(achievement.id)) return; // Already have it

        // Role check
        if (achievement.role && achievement.role !== progress.role) return;

        // Condition check
        if (achievement.condition({ ...progress, stats: newStats }, context)) {
            newAchievements.push(achievement.id)
            newXp += achievement.xp
        }
    })

    // Calculate Level (Simple linear curve: Level = 1 + XP / 500)
    const newLevel = Math.floor(1 + newXp / 500)

    const newProgress: UserProgress = {
        ...progress,
        xp: newXp,
        level: newLevel,
        stats: newStats,
        achievements: newAchievements
    }

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: newProgress,
    })

    return newProgress
}

function getCategoryFromPath(path: string): string {
    if (path.includes('/biz/strategy')) return 'strategy'
    if (path.includes('/biz/research')) return 'research'
    if (path.includes('/products')) return 'product'
    return 'general'
}
