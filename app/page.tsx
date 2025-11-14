'use client'
import { ContactDialog } from '@/components/contact-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Magnetic } from '@/components/ui/magnetic'
import ExperiencesTimeline from '@/components/vertical-timeline'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BLOG_POSTS as FALLBACK_BLOG_POSTS, SOCIAL_LINKS, WORK_EXPERIENCE } from './data'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'

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
        className="group bg-faint hover:bg-accent text-primary dark:hover:bg-accent dark:not-hover:bg-faint relative inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1 font-mono text-sm tracking-tight decoration-transparent transition-all duration-200 after:hidden after:bg-transparent hover:font-bold hover:no-underline hover:decoration-0 hover:after:bg-transparent"
      >
        <span className="transition-color group-hover:text-accent-foreground dark:group-hover:text-accent-foreground z-10 inline-flex items-center gap-1 duration-200">
          {children}
          <ArrowUpRight size={12} className="group-hover:text-accent-foreground" />
        </span>
      </a>
    </Magnetic>
  )
}

const SELF_TITLES: string[] = ['Software Engineer', 'Urbanist', 'Creative']

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
      className="my-12 flex max-w-full flex-col gap-20"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {/* #region MARK: Intro  */}
      {/* <motion.div
        className="flex flex-col"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <AnimatedTitles titles={SELF_TITLES} />
      </motion.div> */}
      {/* #endregion */}

      {/* MARK: About + Interests/Hobbies */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex-1 space-y-8"
      >
        {/* <h2 className="font-heading text-lg" aria-label="about">
          About
        </h2> */}
        <h2 className="sr-only hidden" aria-hidden="true" aria-label="about">
          About
        </h2>

        <div>
          <span className="text-secondary font-light">Hi there! I'm </span>
          <TextEffect
            as="span"
            preset="fade-in-blur"
            per="char"
            delay={0.2}
            className="text-accent block text-2xl leading-snug font-bold tracking-tighter"
          >
            Simon H Lee
          </TextEffect>
          <div className="leading-tight">
            {/* {'the '} */}
            <TextLoop interval={3.5}>
              {SELF_TITLES.map((nickname) => (
                <TextEffect
                  // as="span"
                  preset="fade-in-blur"
                  per="char"
                  delay={0.3}
                  speedSegment={0.6}
                  key={nickname}
                  className="text-primary font-medium"
                >
                  {nickname}
                </TextEffect>
              ))}
            </TextLoop>
          </div>
        </div>

        {/* <p>
          Hi there! I'm Simon{'. '}
          <br />
          I like making things, and I like solving problems.
          <br />
          Bonus points if the problem requires making things.
        </p> */}
        {/* MARK: Social Chips/Hovers/Cards */}

        <div id="hobbies">
          <p className="wrap-pretty">
            These days I spend most of my free time{' '}
            <a
              href="https://instagram.com/crimpwimp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              climbing <ArrowUpRight size={12} />
            </a>
            .
          </p>

          <div>
            Other things I enjoy in my free time:
            <ul className="mt-2 list-inside list-disc">
              <li>noodling around on the piano and guitar</li>

              <li>
                <a
                  href="https://music.apple.com/us/album/channel-orange/1440765580"
                  target="_blank"
                  className="group after:bg-chorange hover:after:bg-chorange-hover inline-flex items-center"
                >
                  <em className="group-hover:text-chorange-hover text-chorange">Channel Orange</em>{' '}
                  <ArrowUpRight size={12} className="group-hover:text-chorange" />
                </a>{' '}
                by Frank Ocean
              </li>

              <li>
                <a href="https://vsco.co/simonhl/gallery" className="inline-flex items-center">
                  snapping photos <ArrowUpRight size={12} />
                </a>{' '}
                {/* <span className="text-sm italic"> (I just use my phone camera)</span> */}
              </li>

              <li>exploring new places on foot or on bike</li>

              <li>fresh and hot $1 slices</li>
            </ul>
          </div>
        </div>

        {/* Github, LinkedIn, Instagram links/pills */}
        <h3 className="sr-only hidden" aria-hidden="true" aria-label="socials">
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
                  Want to work with me? Have any questions for me?
                  <br />
                  Just want to chat over coffee? Get in touch!
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
        <h2 id="blog" className="font-heading mb-4 text-lg">
          <Link href={'/blog'} className="no-underline">
            Blog Posts
          </Link>
        </h2>

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
                className="group before:bg-accent before bg-background border-faint dark:border-faint relative z-0 mb-4 w-full overflow-hidden rounded-lg border px-4 py-3 decoration-transparent before:absolute before:top-0 before:left-0 before:z-[-1] before:h-2 before:w-2 before:rounded-full before:opacity-0 before:transition-all before:duration-[400ms] before:ease-in-out hover:before:scale-[150] hover:before:opacity-100 hover:after:bg-transparent"
                href={post.link}
                data-id={post.uid}
              >
                <div className="group flex flex-col">
                  <h3 className="group-hover:text-accent-foreground text-primary font-medium transition-colors duration-200 ease-out">
                    {post.title}
                  </h3>

                  <p className="text-secondary group-hover:text-accent-foreground mt-1 text-sm font-normal transition-colors delay-100 duration-200 ease-out">
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
