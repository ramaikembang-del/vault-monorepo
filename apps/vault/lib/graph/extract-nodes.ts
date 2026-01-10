import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/biz')

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
            // 1. If target includes 'biz/', strip it to match our relative IDs (since we scan content/biz)
            if (targetId.startsWith('biz/')) {
                const potentialId = targetId.replace('biz/', '');
                if (idMap.has(potentialId)) {
                    targetId = potentialId;
                }
            }

            // 2. If the target is NOT found in our ID map, checking if it might be a partial match or just skip it
            // ensuring we don't create links to non-existent nodes which crashes d3-force
            if (!idMap.has(targetId)) {
                // Try finding a node that ends with this target (lazy matching for filenames)
                const matchedId = Array.from(idMap.keys()).find(id => id.endsWith(targetId) || id.endsWith(targetId + '/index'));
                if (matchedId) {
                    targetId = matchedId;
                } else {
                    // If still not found, we skip adding this link to avoid "node not found" errors
                    // or we could add a "ghost" node, but for now skipping is safer for stability.
                    console.warn(`Skipping broken link: [[${target}]] in ${sourceSlug}`);
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
