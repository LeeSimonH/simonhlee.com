import { type WorkExperience } from '@/app/data'
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from '@/components/ui/timeline'
import { AsteriskIcon } from 'lucide-react'

export default function ExperiencesTimeline(props: { experiences: WorkExperience[] }) {
  return (
    <div className="h-full w-full max-w-[48ch]">
      <Timeline defaultValue={props.experiences.length}>
        {props.experiences.map((item, idx) => (
          <TimelineItem
            key={item.id}
            step={idx + 1}
            className="text-primary group-data-[orientation=vertical]/timeline:ms-10"
          >
            <TimelineHeader>
              <TimelineSeparator className="border border-zinc-300 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2rem)] group-data-[orientation=vertical]/timeline:translate-y-8 dark:border-zinc-600" />

              <TimelineTitle>
                <div className="flex w-full items-baseline justify-between">
                  {/* MARK: Job Title */}
                  <span className="text-base font-medium">{item.title}</span>

                  {/* MARK: Job -> Dates */}
                  <TimelineDate>
                    <div
                      className="flex text-sm font-normal text-zinc-500"
                      style={{ wordSpacing: '-0.02em' }}
                    >
                      {item.start} - {item.end}
                    </div>
                  </TimelineDate>
                </div>

                {/* MARK: Company Name */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block hover:bg-transparent"
                >
                  <span className="group text-secondary/90 hover:text-secondary-hover/90 relative inline-flex shrink-1 items-center gap-0.5 text-base leading-snug font-normal transition-colors duration-300 ease-in-out">
                    {item.company}{' '}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="bg-accent-hover absolute bottom-0.5 left-0 block h-px w-full max-w-0 transition-all duration-300 group-hover:max-w-full"></span>
                  </span>
                </a>
              </TimelineTitle>

              <TimelineIndicator className="flex size-8 items-center justify-center group-data-completed/timeline-item:border-0 group-data-[orientation=vertical]/timeline:-left-8">
                <AsteriskIcon className="group-not-data-completed/timeline-item:hidden" size={20} />
              </TimelineIndicator>
            </TimelineHeader>

            {/* MARK: Job Description */}
            <TimelineContent>
              <div className="text-body-secondary flex-col leading-normal tracking-normal">
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-2 list-none">
                    {item.highlights.map((highlight, idx) => (
                      <li
                        key={`${item.id}-highlight-${idx}`}
                        className="mb-4 font-sans text-sm leading-normal text-pretty"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
