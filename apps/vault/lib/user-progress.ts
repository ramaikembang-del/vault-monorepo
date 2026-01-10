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
        searchCount: 0,
        streak: 0,
        researchRead: 0,
        salesRead: 0,
        strategyRead: 0,
        marketingRead: 0,
        longReads: 0,
    },
    achievements: [],
}

export async function getUserProgress(): Promise<UserProgress> {
    const { userId } = auth()
    if (!userId) return INITIAL_PROGRESS

    try {
        const user = await clerkClient.users.getUser(userId)
        return (user.publicMetadata as unknown as UserProgress) || INITIAL_PROGRESS
    } catch (e) {
        return INITIAL_PROGRESS
    }
}

export async function setPlayerRole(role: PlayerRole) {
    const { userId } = auth()
    if (!userId) throw new Error('Unauthorized')

    const progress = await getUserProgress()
    if (progress.role) throw new Error('Role already selected')

    // Initial role selection grants XP
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
    const category = getCategoryFromPath(currentPath)

    // Update Stats Granularly
    const newStats = {
        ...progress.stats,
        docsRead: progress.stats.docsRead + 1,
        researchRead: progress.stats.researchRead + (category === 'research' ? 1 : 0),
        salesRead: progress.stats.salesRead + (category === 'sales' ? 1 : 0),
        strategyRead: progress.stats.strategyRead + (category === 'strategy' ? 1 : 0),
        marketingRead: progress.stats.marketingRead + (category === 'marketing' ? 1 : 0),
    }

    let newXp = progress.xp + 10; // Base XP for reading
    const newAchievements = [...progress.achievements]

    // Check Achievements with context
    const context = { path: currentPath, category }

    ACHIEVEMENTS.forEach(achievement => {
        if (newAchievements.includes(achievement.id)) return;
        if (achievement.role && achievement.role !== progress.role) return;

        if (achievement.condition({ ...progress, stats: newStats }, context)) {
            newAchievements.push(achievement.id)
            newXp += achievement.xp
        }
    })

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

export async function incrementSearchCount() {
    const { userId } = auth()
    if (!userId) return

    const progress = await getUserProgress()
    const newStats = {
        ...progress.stats,
        searchCount: (progress.stats.searchCount || 0) + 1
    }

    const newAchievements = [...progress.achievements]
    let newXp = progress.xp + 5 // Small XP for searching

    ACHIEVEMENTS.forEach(achievement => {
        if (newAchievements.includes(achievement.id)) return;
        if (achievement.condition({ ...progress, stats: newStats }, {})) {
            newAchievements.push(achievement.id)
            newXp += achievement.xp
        }
    })

    await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: { ...progress, stats: newStats, xp: newXp, achievements: newAchievements },
    })
}

function getCategoryFromPath(path: string): string {
    const p = path.toLowerCase()
    if (p.includes('/biz/strategy')) return 'strategy'
    if (p.includes('/biz/research')) return 'research'
    if (p.includes('sales')) return 'sales'
    if (p.includes('marketing')) return 'marketing'
    if (p.includes('/products')) return 'product'
    return 'general'
}
