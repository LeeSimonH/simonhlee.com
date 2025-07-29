type Project = {
  name: string
  description: string
  link: string
  // video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'todo',
    description: 'todo',
    link: 'https://example..com',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'todo',
    title: 'todo',
    start: 'todo',
    end: 'todo',
    link: '',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/LeeSimonH',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/simonhlee',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/',
  },
]

export const EMAIL = 'simonlee1125@gmail.com'
