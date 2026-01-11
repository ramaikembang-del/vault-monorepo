import { ContentGrid } from '@/components/navigation/ContentGrid'

export default function BizIndexPage() {
    return (
        <div className="space-y-6">
            <div className="prose dark:prose-invert">
                <h1>Biz Lab Docs</h1>
                <p>Strategic insights, research, and playbooks for the Clario Ecosystem.</p>
            </div>
            <ContentGrid directory="biz" />
        </div>
    )
}
