import 'server-only'
import fs from 'node:fs'
import path from 'node:path'

export type BlogPost = {
  title: string
  description?: string
  link: string
  uid: string
}

const BLOG_DIR = path.join(process.cwd(), 'app', 'blog')

function parseFrontmatter(src: string): Partial<BlogPost> {
  const fmMatch = src.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---/)
  if (!fmMatch) return {}
  const body = fmMatch[1]
  const title = body.match(/^title:\s*['"]?([^'"\n]+)['"]?/m)?.[1]
  const description = body.match(/^description:\s*['"]?([^'"\n]+)['"]?/m)?.[1]
  return { title, description }
}

function parseExportedMetadata(src: string): Partial<BlogPost> {
  const metaMatch = src.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\}/)
  if (!metaMatch) return {}
  const obj = metaMatch[1]
  const title = obj.match(/title:\s*['"]([^'"]+)['"]/m)?.[1]
  const description = obj.match(/description:\s*['"]([^'"]+)['"]/m)?.[1]
  return { title, description }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) return []
  const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })
  const posts: BlogPost[] = []
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const slug = entry.name
    const mdxPath = path.join(BLOG_DIR, slug, 'page.mdx')
    if (!fs.existsSync(mdxPath)) continue
    const src = fs.readFileSync(mdxPath, 'utf8')
    const { title, description } = {
      ...parseFrontmatter(src),
      ...parseExportedMetadata(src),
    }
    posts.push({
      title: title ?? slug,
      description,
      link: `/blog/${slug}`,
      uid: `blog-${slug}`,
    })
  }
  // Sort: numeric slugs newest-first; otherwise by title
  posts.sort((a, b) => {
    const an = Number(a.uid.replace('blog-', ''))
    const bn = Number(b.uid.replace('blog-', ''))
    if (Number.isFinite(an) && Number.isFinite(bn)) return bn - an
    return a.title.localeCompare(b.title)
  })
  return posts
}
