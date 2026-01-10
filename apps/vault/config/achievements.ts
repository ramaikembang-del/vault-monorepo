import { Achievement } from '@/types/user';

export const ACHIEVEMENTS: Achievement[] = [
    // Shared
    {
        id: 'onboarded',
        name: 'Initiate',
        description: 'Select your role and begin your journey.',
        icon: 'UserCheck',
        xp: 100,
        condition: (p) => !!p.role,
    },
    {
        id: 'scholar',
        name: 'Scholar',
        description: 'Read 10 documentation files.',
        icon: 'BookOpen',
        xp: 200,
        condition: (p) => p.stats.docsRead >= 10,
    },
    {
        id: 'vault_keeper',
        name: 'Vault Keeper',
        description: 'Access the admin dashboard.',
        icon: 'Shield',
        xp: 500,
        condition: (_, ctx) => ctx?.path === '/admin',
    },

    // Field Ops (Marketer/Closer)
    {
        id: 'market_watcher',
        name: 'Market Watcher',
        description: 'Study the market intelligence (Read 5 Research docs).',
        icon: 'LineChart',
        xp: 250,
        role: 'field_ops',
        condition: (p, ctx) => ctx?.category === 'research' && p.stats.docsRead >= 5, // Simplified logic for now
    },
    {
        id: 'closer',
        name: 'The Closer',
        description: 'Master the Sales Playbooks.',
        icon: 'DollarSign',
        xp: 500,
        role: 'field_ops',
        condition: (_, ctx) => ctx?.path?.includes('sales'),
    },

    // Strategy Arch (Builder)
    {
        id: 'visionary',
        name: 'Visionary',
        description: 'Read 5 Strategy documents.',
        icon: 'Telescope',
        xp: 250,
        role: 'strategy_arch',
        condition: (p, ctx) => ctx?.category === 'strategy' && p.stats.docsRead >= 5,
    },
    {
        id: 'architect',
        name: 'System Architect',
        description: 'Deep dive into technical specifications.',
        icon: 'Server',
        xp: 250,
        role: 'strategy_arch',
        condition: (_, ctx) => ctx?.path?.includes('specifications'),
    },
];
