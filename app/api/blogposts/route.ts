import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/server/blog'

export const dynamic = 'force-static'

export async function GET() {
  const posts = await getAllBlogPosts()
  return NextResponse.json(posts)
}

