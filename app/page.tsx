'use client'
import { Country, SimpleContactModal } from '@/components/contact-modal-simple'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog'
import ExperiencesTimeline from '@/components/vertical-timeline'
import { XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import { SOCIAL_LINKS, WORK_EXPERIENCE } from './data'

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

function SocialMediaVideo(props: { url: string; children: any }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>{props.children}</MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-auto rounded-2xl bg-white p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-black dark:ring-zinc-800/50">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={props.url} width={328} />
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="link group hover:bg-link-hover-bg bg-muted text-primary dark:text-muted relative inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-xs transition-colors duration-200 hover:font-bold"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function Personal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  function onContactFormClose() {
    console.log('Modal closed')
    setIsModalOpen(false)
  }

  function onContactFormSave(data: any) {
    console.log('Contact saved:', data)
  }

  return (
    <motion.main
      className="my-8 flex max-w-full flex-col gap-24"
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
        <h2 className="font-heading mb-4 text-lg">About</h2>
        <div className="text-body-secondary flex-1 space-y-2">
          <p className="text-pretty">
            Although I consider myself a{' '}
            <code className="font-mono font-bold tracking-tighter">software engineer</code>,<br />
            the reality is that I just like creating things and solving problems.
            <br />
            <br />
            I'm a co-creater of{' '}
            <a
              href="https://github.com/oslabs-beta/Svve11"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              svve11
            </a>
            {', '}
            an open-source library of{' '}
            <a
              href="https://github.com/oslabs-beta/Svve11"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Svelte
            </a>{' '}
            components focused on web accessibility.
            <br />
            <br />
            In my spare time, I climb.
            <br />
            <small className="text-body-muted italic">
              I do other things too... (when I'm too tired to climb)
            </small>
          </p>
        </div>

        <div className="text-secondary flex flex-wrap gap-4 font-mono text-sm">
          <div className="rounded-lg bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900/40 dark:ring-zinc-800/50">
            <SocialMediaVideo
              url={
                'https://www.instagram.com/reel/DG9IfwwSSVz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              }
            >
              <div className="px-3 py-2">
                {/* <div>climb 🧗🏻‍♂️</div> */}
                <div>climb</div>
                <Link
                  href="https://www.instagram.com/crimpwimp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @crimpwimp
                </Link>
              </div>
            </SocialMediaVideo>
          </div>

          <div className="rounded-lg bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900/40 dark:ring-zinc-800/50">
            <SocialMediaVideo
              url={
                'https://www.instagram.com/p/CoJZDoEuiPs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
              }
            >
              <div className="px-3 py-2">
                {/* <div>draw 🧑🏻‍🎨</div> */}
                <div>draw</div>
                <Link
                  href="https://www.instagram.com/nomis_heel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @nomis_heel
                </Link>
              </div>
            </SocialMediaVideo>
          </div>

          <div className="rounded-lg bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900/40 dark:ring-zinc-800/50">
            <div className="px-3 py-2">
              {/* <div>snap photos 📸</div> */}
              <div>snap photos</div>
              <Link
                href="https://vsco.co/simonhl/gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                vsco/simonhl
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900/40 dark:ring-zinc-800/50">
            <div className="px-3 py-2">
              {/* <div>read 📖</div> */}
              <div>read</div>
              <Link
                href="https://www.goodreads.com/user/show/50267865-simon-lee"
                target="_blank"
                rel="noopener noreferrer"
              >
                goodreads
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* MARK: Work Experience */}
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h2 className="font-heading mb-4 text-lg">Work Experience</h2>
        <ExperiencesTimeline experiences={WORK_EXPERIENCE} />
      </motion.section>

      {/* TODO: Selected Projects */}

      {/* TODO: Blog */}

      {/* MARK: Connect */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="flex flex-col gap-5"
      >
        <h2 className="font-heading text-lg">Connect</h2>

        <div className="contact-content">
          <div className="contact-info flex flex-col gap-4">
            <div className="text-secondary space-y-1 text-pretty">
              <p>
                Want to work with me? Have any questions for me? Just want to chat over coffee? Get
                in touch!
              </p>
            </div>

            {/* Link-styled Button to open Contact Form */}
            <button
              type="button"
              className="group btn-link relative inline-flex max-w-fit items-center gap-1 font-mono"
              onClick={() => setIsModalOpen(true)}
            >
              Contact me
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="absolute bottom-0.5 left-0 block h-0.5 w-full max-w-0 bg-[currentColor] transition-all duration-200 group-hover:max-w-full"></span>
            </button>

            <h3 className="font-heading sr-only hidden" aria-hidden="true" aria-label="socials">
              Socials
            </h3>
            {/* Github, LinkedIn, Instagram links/pills */}
            <div className="flex items-center justify-start space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
            </div>
          </div>
        </div>

        <SimpleContactModal
          isOpen={isModalOpen}
          onClose={() => onContactFormClose()}
          onSave={(data: any) => onContactFormSave(data)}
          initialData={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            streetAddr: '',
            city: '',
            region: '',
            country: Country.US_CA,
            zipCode: '',
            notes: '',
          }}
        />
      </motion.section>
    </motion.main>
  )
}
