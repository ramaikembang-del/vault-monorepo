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

// In-memory cache for graph data
let cachedGraph: { nodes: any[], links: any[] } | null = null;
let lastScanTime = 0;
const CACHE_TTL = 30000; // 30 seconds

export function generateGraphData() {
    const now = Date.now();
    if (cachedGraph && (now - lastScanTime < CACHE_TTL)) {
        return cachedGraph;
    }

    const files = getAllFiles(CONTENT_DIR)
    const nodes: any[] = []
    const links: any[] = []
    const idMap = new Map<string, string>() // id -> body content

    // Single Pass: Create Nodes and Store Body
    files.forEach((file) => {
        const content = fs.readFileSync(file, 'utf8')
        const { data, content: body } = matter(content)

        let slug = path.relative(CONTENT_DIR, file).replace(/\\/g, '/')
        slug = slug.replace(/\.mdx?$/, '')

        const id = slug
        idMap.set(id, body)

        nodes.push({
            id,
            name: data.title || path.basename(slug),
            val: 1,
            group: data.group || (slug.startsWith('biz') ? 'biz' : 'products')
        })
    })

    // Process Links from memory
    const wikiLinkRegex = /\[\[(.*?)\]\]/g

    idMap.forEach((body, sourceSlug) => {
        let match;
        while ((match = wikiLinkRegex.exec(body)) !== null) {
            const target = match[1].split('|')[0].trim()
            let targetId = target

            if (idMap.has(targetId)) {
                // Exact match
            } else {
                // lazy matching
                const matchedId = Array.from(idMap.keys()).find(id =>
                    id.endsWith(targetId) || id.endsWith(targetId + '/index')
                )

                if (matchedId) {
                    targetId = matchedId
                } else {
                    continue
                }
            }

            links.push({
                source: sourceSlug,
                target: targetId
            })
        }
    })

    cachedGraph = { nodes, links };
    lastScanTime = now;
    return cachedGraph;
}
