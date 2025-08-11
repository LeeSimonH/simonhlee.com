export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  highlights?: string[]
}

type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
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
    name: 'svve11',
    description: 'Open source UI library of accessible Svelte components',
    image: '/img/projects/svve11-logo-square-purple.png',
    link: 'https://svve11-five.vercel.app/',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Janus Health',
    title: 'Software Engineer II',
    start: 'Nov 2022',
    end: 'Apr 2025',
    link: 'https://janus-ai.com/',
    id: 'work-1',
    highlights: [
      'Built core backend infrastructure for a new product initiative, including a type-safe TypeScript SDK with Zod validation, RESTful API endpoints, and a PostgreSQL database layer using Sequelize ORM',
      'Developed and launched user interfaces for new features and product expansions across multiple core products, utilizing Angular and TypeScript for the frontend and Node.js for backend services',
    ],
  },
  {
    company: 'Walker Macy',
    title: 'Designer',
    start: 'Nov 2017',
    end: 'Jul 2021',
    link: 'https://walkermacy.com/',
    highlights: [
      'Collaborated frequently within multidisciplinary teams of engineers, architects, and nontechnical stakeholders, often bridging across technical gaps to ensure alignment, and translate high-level concepts into construction-ready specifications for design solutions in a fast-paced, deadline-driven environment',
    ],
    id: 'work-2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My First Post',
    description: 'My first file made with mdx',
    link: '/blog/001',
    uid: 'blog-001',
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
