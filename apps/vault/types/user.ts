export type PlayerRole = 'field_ops' | 'strategy_arch' | null;

export interface UserStats {
    docsRead: number;
    searchCount: number;
    streak: number;
    lastActive?: string;
    researchRead: number;
    salesRead: number;
    strategyRead: number;
    marketingRead: number;
    longReads: number;
}

export interface UserProgress {
    role: PlayerRole;
    level: number;
    xp: number;
    stats: UserStats;
    achievements: string[]; // List of unlocked achievement IDs
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string; // Lucide icon name or emoji
    xp: number;
    role?: PlayerRole; // If undefined, available to all
    condition: (progress: UserProgress, context?: any) => boolean;
}
