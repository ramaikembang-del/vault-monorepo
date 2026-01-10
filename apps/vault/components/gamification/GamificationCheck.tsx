import { getUserProgress } from '@/lib/user-progress'
import { RoleSelection } from '@/components/onboarding/RoleSelection'

export async function GamificationCheck() {
    const progress = await getUserProgress()

    if (!progress.role) {
        return <RoleSelection />
    }

    return null
}
