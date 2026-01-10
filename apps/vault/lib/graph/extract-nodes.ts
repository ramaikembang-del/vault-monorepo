import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath)

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            if (file.endsWith('.md') || file.endsWith('.mdx')) {
                arrayOfFiles.push(path.join(dirPath, "/", file))
            }
        }
    })

    return arrayOfFiles
}

export function generateGraphData() {
    const files = getAllFiles(CONTENT_DIR)

    const nodes: any[] = []
    const links: any[] = []
    const idMap = new Map()

    // Pass 1: Create Nodes
    files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8')
        const { data, content: body } = matter(content)

        // Slug logic: similar to mdx.ts, relative to CONTENT_DIR, strip extension
        let slug = path.relative(CONTENT_DIR, file).replace(/\\/g, '/')
        slug = slug.replace(/\.mdx?$/, '')

        const id = slug
        idMap.set(id, true) // Track valid IDs

        nodes.push({
            id,
            name: data.title || path.basename(slug),
            val: 1, // Default size
            group: data.group || 'unknown' // Can use frontmatter group
        })
    })

    // Pass 2: Create Links (Wiki Links [[...]] )
    const wikiLinkRegex = /\[\[(.*?)\]\]/g

    files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8')
        const { content: body } = matter(content)

        let sourceSlug = path.relative(CONTENT_DIR, file).replace(/\\/g, '/').replace(/\.mdx?$/, '')

        let match;
        while ((match = wikiLinkRegex.exec(body)) !== null) {
            const target = match[1].split('|')[0].trim() // Handle [[Target|Alias]]

            // Simple matching: Assume target is a filename or partial slug
            // For now, let's just create a link. 
            // In a real generic system, we'd need fuzzy matching or exact path matching.
            // We will try to find if 'target' exists as a node ID (exact match)
            // or is a suffix of an ID.

            let targetId = target;

            // Normalization Logic:
            // The ID structure is now relative to 'content/', so IDs look like 'biz/strategy/...' or 'products/...'

            // 1. Direct match check
            if (idMap.has(targetId)) {
                // Perfect, do nothing
            }
            // 2. Fallback: Check if target (e.g. 'biz/strategy/doc') matches an ID
            // or if we need to append .md (though we strip extensions usually)
            else {
                // Try finding a node that ends with this target (lazy matching)
                // This covers cases where a link might be relative like [[foundations/06-prioritization]] linking to biz/strategy/planning/foundations/06...
                const matchedId = Array.from(idMap.keys()).find(id => id.endsWith(targetId) || id.endsWith(targetId + '/index'));

                if (matchedId) {
                    targetId = matchedId;
                } else {
                    // If still not found, we skip adding this link
                    // console.warn(`Skipping broken link: [[${target}]] in ${sourceSlug}`);
                    continue;
                }
            }

            links.push({
                source: sourceSlug,
                target: targetId
            })
        }
    })

    return { nodes, links }
}
