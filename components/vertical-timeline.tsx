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
import { BriefcaseBusinessIcon } from 'lucide-react'

export default function ExperiencesTimeline(props: {
  experiences: WorkExperience[]
}) {
  return (
    <Timeline defaultValue={props.experiences.length}>
      {props.experiences.map((item, idx) => (
        <TimelineItem
          key={item.id}
          step={idx + 1}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" />

            <TimelineTitle>
              <div>
                <h4 className="text-lg font-medium dark:text-white">
                  {item.title}
                </h4>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-base group relative inline-block text-base text-zinc-500 dark:text-zinc-300"
                >
                  <span className="group relative inline-flex shrink-0 items-center gap-[1px]">
                    {item.company}{' '}
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
                  </span>
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-[currentColor] transition-all duration-200 group-hover:max-w-full dark:bg-zinc-50"></span>
                </a>
              </div>
            </TimelineTitle>
            <TimelineDate>
              <div className="flex text-sm font-normal text-zinc-500 dark:text-zinc-300">
                {item.start} - {item.end}
              </div>
            </TimelineDate>
            <TimelineIndicator className="group-data-completed/timeline-item:bg group-data-completed/timeline-item:text-primary flex size-6 items-center justify-center group-data-completed/timeline-item:border-0 group-data-[orientation=vertical]/timeline:-left-7">
              <BriefcaseBusinessIcon
                className="group-not-data-completed/timeline-item:hidden"
                size={18}
              />
            </TimelineIndicator>
          </TimelineHeader>
          <TimelineContent>
            <div className="flex-col text-zinc-600 dark:text-zinc-100">
              {item.summary?.length && (
                <div className="mt-2 text-sm tracking-normal">
                  {item.summary}
                </div>
              )}
              {item.highlights?.length && (
                <ul className="text- ml-4 list-outside list-disc font-mono">
                  {item.highlights.map((highlight, idx) => (
                    <li key={`${item.id}-highlight-${idx}`} className="mt-3">
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
  )
}
