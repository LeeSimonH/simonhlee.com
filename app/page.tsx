'use client'
import { ContactDialog } from '@/components/contact-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Magnetic } from '@/components/ui/magnetic'
import ExperiencesTimeline from '@/components/vertical-timeline'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BLOG_POSTS as FALLBACK_BLOG_POSTS, SOCIAL_LINKS, WORK_EXPERIENCE } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group bg-faint hover:bg-primary text-primary relative inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 font-mono text-sm tracking-tight decoration-transparent transition-all duration-300 hover:font-bold dark:not-hover:bg-zinc-800/60 dark:hover:bg-zinc-100"
      >
        <span className="transition-color text-primary group-hover:text-on-primary dark:group-hover:text-on-primary z-10 inline-flex items-center gap-1 duration-200">
          {children}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary group-hover:text-on-primary dark:group-hover:text-on-primary z-10 transition-colors duration-200"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [posts, setPosts] = useState<
    { title: string; description?: string; link: string; uid: string }[]
  >(
    FALLBACK_BLOG_POSTS as unknown as {
      title: string
      description?: string
      link: string
      uid: string
    }[]
  )

  useEffect(() => {
    /**
     * API endpoint to get stuff at /blog
     */
    fetch('/api/blogposts')
      .then((r) => (r.ok ? r.json() : []))
      .then((data: { title: string; description?: string; link: string; uid: string }[]) => {
        if (Array.isArray(data) && data.length > 0) setPosts(data)
      })
      .catch(() => {})
  }, [])

  return (
    <motion.main
      className="my-12 flex max-w-full flex-col gap-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* MARK: About + Interests/Hobbies */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex-1 space-y-8"
      >
        {/* <h2 className="font-heading mb-4 text-lg">About</h2> */}

        <p>
          Hi there! I'm Simon.
          <br />
          I like making things, and I like solving problems.
          <br />
          Bonus points if the problem requires making things.
        </p>
        {/* MARK: Social Chips/Hovers/Cards */}

        <div>
          <span>
            These days I spend most of my free time{' '}
            <a href="https://instagram.com/crimpwimp" target="_blank" rel="noopener noreferrer">
              climbing
            </a>
            ,<br />
            but other things I enjoy include:
          </span>
          <div>
            <ul className="mt-2 list-inside list-disc">
              <li>noodling around on the piano and guitar</li>
              <li>$1 slices</li>
              <li>
                <a href="https://vsco.co/simonhl/gallery">snapping photos</a>
              </li>
              <li>
                <em>Channel Orange</em> by Frank Ocean
              </li>
            </ul>
          </div>
        </div>

        {/* Github, LinkedIn, Instagram links/pills */}
        <h3 className="font-heading sr-only hidden" aria-hidden="true" aria-label="socials">
          Socials
        </h3>
        <div className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>

      {/* MARK: Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="grid grid-cols-1 gap-y-8"
      >
        <div className="flex flex-col gap-y-4">
          {/* Invisible anchor to preserve #contact hash navigation */}
          <span id="contact" className="block h-0 w-0 overflow-hidden" />

          <h2 className="font-heading text-lg">Connect</h2>

          <div className="contact-content">
            <div className="contact-info flex flex-col gap-4">
              <div className="text-secondary space-y-1 text-pretty">
                <p>
                  Want to work with me? Have any questions for me? Just want to chat over coffee?
                  Get in touch!
                </p>
              </div>
            </div>
          </div>

          {/* Contact dialog trigger */}
          <div>
            <ContactDialog />
          </div>
        </div>
      </motion.section>

      {/* MARK: Work Experience */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="font-heading mb-4 text-lg">Experience</h2>
        <ExperiencesTimeline experiences={WORK_EXPERIENCE} />
      </motion.section>

      {/* TODO: Selected Projects */}

      {/* MARK: Blog */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-4 text-lg font-medium">Blog</h3>

        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {posts.map((post) => (
              // Expanding Corner (experiment)
              <Link
                key={post.uid}
                className="group before:bg-primary before bg-background border-faint dark:border-faint relative z-0 mb-4 w-full overflow-hidden rounded-lg border px-4 py-3 decoration-transparent before:absolute before:top-0 before:left-0 before:z-[-1] before:h-2 before:w-2 before:rounded-full before:opacity-0 before:transition-all before:duration-[400ms] before:ease-out hover:decoration-transparent hover:before:scale-[150] hover:before:opacity-100 dark:bg-zinc-800/30"
                href={post.link}
                data-id={post.uid}
              >
                <div className="group flex flex-col">
                  <h4 className="group-hover:text-on-primary text-primary font-medium transition-colors duration-500 ease-out">
                    {post.title}
                  </h4>

                  <p className="text-secondary group-hover:text-on-primary mt-1 text-sm font-normal transition-colors delay-100 duration-500 ease-out group-hover:font-normal">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>
    </motion.main>
  )
}
