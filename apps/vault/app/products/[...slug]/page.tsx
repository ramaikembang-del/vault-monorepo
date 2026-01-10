import { getMDXContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import remarkWikiLink from 'remark-wiki-link'
import remarkGfm from 'remark-gfm'
import { EventTracker } from '@/components/gamification/EventTracker'

import { Mermaid } from '@/components/mdx/Mermaid'

export default async function Page({ params }: { params: { slug: string[] } }) {
    const { slug } = params
    const fullPath = `/products/${slug.join('/')}`
    const data = getMDXContent(slug, 'products')

    if (!data) {
        return notFound()
    }

    const components = {
        code: (props: any) => {
            const { className, children } = props
            if (className === 'language-mermaid') {
                return <Mermaid chart={children} />
            }
            return <code {...props} />
        }
    }

    const mdxOptions = {
        remarkPlugins: [
            remarkGfm,
            [remarkWikiLink, {
                hrefTemplate: (permalink: string) => `/products/${permalink}`,
                aliasDivider: '|'
            }]
        ]
    }

    return (
        <article className="prose dark:prose-invert max-w-none">
            <EventTracker path={fullPath} />
            <h1>{data.frontmatter.title || data.slug}</h1>
            {/* @ts-expect-error Async Server Component */}
            <MDXRemote source={data.content} options={{ mdxOptions }} components={components} />
        </article>
    )
}
