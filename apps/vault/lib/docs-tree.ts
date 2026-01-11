import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export type DocNode = {
    title: string
    href: string
    items?: DocNode[]
    isExpanded?: boolean
    isActive?: boolean
    order?: number
}

// Helper to check if a directory is a "section" (has index.md or other files)
function isSection(dirPath: string) {
    return fs.statSync(dirPath).isDirectory()
}

export function getDocsTree(
    dir: string,
    rootHref: string = '/biz'
): DocNode[] {
    const fullPath = path.join(CONTENT_DIR, dir)
    if (!fs.existsSync(fullPath)) return []

    const items = fs.readdirSync(fullPath)
    const tree: DocNode[] = []

    items.forEach((item) => {
        // Skip hidden files
        if (item.startsWith('.')) return

        const itemPath = path.join(fullPath, item)
        const stats = fs.statSync(itemPath)
        const relativePath = path.relative(path.join(CONTENT_DIR, 'biz'), itemPath) // Assuming relative to content/biz for now

        if (stats.isDirectory()) {
            // Recurse
            // Check for index.md or _meta.json in future, for now just folder name
            const children = getDocsTree(path.join(dir, item), rootHref)

            if (children.length > 0) {
                tree.push({
                    title: item.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                    href: '#', // Header only
                    items: children,
                    order: 99
                })
            }
        } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
            const content = fs.readFileSync(itemPath, 'utf8')
            const { data } = matter(content)

            // Handle "index.md" as special case? Or just list it? 
            // Usually index.md is the parent folder's content.
            // For now, treat all MD files as leaf nodes.

            const slug = item.replace(/\.mdx?$/, '')
            const href = `${rootHref}/${dir === 'biz' ? '' : dir.replace('biz/', '')}/${slug}`.replace('//', '/')

            tree.push({
                title: data.title || slug.replace(/-/g, ' '),
                href: href,
                order: data.order || 99
            })
        }
    })

    return tree.sort((a, b) => (a.order || 99) - (b.order || 99))
}
