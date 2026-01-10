import { getMDXContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import remarkWikiLink from 'remark-wiki-link'
import remarkGfm from 'remark-gfm'

export default async function Page({ params }: { params: { slug: string[] } }) {
    const { slug } = params
    const data = getMDXContent(slug, 'biz')

    if (!data) {
        return notFound()
    }

    const mdxOptions = {
        remarkPlugins: [
            remarkGfm,
            [remarkWikiLink, {
                hrefTemplate: (permalink: string) => `/biz/${permalink}`,
                aliasDivider: '|'
            }]
        ]
    }

    return (
        <article className="prose dark:prose-invert max-w-none">
            <h1>{data.frontmatter.title || data.slug}</h1>
            {/* @ts-expect-error Async Server Component */}
            <MDXRemote source={data.content} options={{ mdxOptions }} />
        </article>
    )
}
