import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentBase = path.join(process.cwd(), 'content')

export function getMDXFiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md' || path.extname(file) === '.mdx')
}

export function getAllMDXFiles(dir: string, fileList: string[] = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllMDXFiles(filePath, fileList);
        } else {
            if (path.extname(file) === '.md' || path.extname(file) === '.mdx') {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

export function getMDXContent(slug: string[], type: 'biz' | 'products' = 'biz') {
    const realSlug = slug ? slug.join('/') : 'index';
    const subdir = type === 'biz' ? 'biz' : 'products';
    const contentDir = path.join(contentBase, subdir);

    const fullPathMD = path.join(contentDir, `${realSlug}.md`)
    const fullPathMDX = path.join(contentDir, `${realSlug}.mdx`)

    let source = '';

    if (fs.existsSync(fullPathMD)) {
        source = fs.readFileSync(fullPathMD, 'utf8');
    } else if (fs.existsSync(fullPathMDX)) {
        source = fs.readFileSync(fullPathMDX, 'utf8');
    } else {
        return null;
    }

    const { content, data } = matter(source)
    return { content, frontmatter: data, slug: realSlug }
}
