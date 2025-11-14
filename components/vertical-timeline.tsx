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
import { AsteriskIcon, ArrowUpRight } from 'lucide-react'

/**
 * Todo: Make ease TimelineItem collapisible
 */
export default function ExperiencesTimeline(props: { experiences: WorkExperience[] }) {
  return (
    <div className="h-full w-full">
      <Timeline defaultValue={props.experiences.length}>
        {props.experiences.map((job, idx) => (
          <TimelineItem
            key={job.id}
            step={idx + 1}
            className={`text-primary group-data-[orientation=vertical]/timeline:ms-10 ${idx === props.experiences.length - 1 ? 'mb-0' : 'mb-8'}`}
          >
            <TimelineHeader>
              <TimelineSeparator className="border border-zinc-300 group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-full group-data-[orientation=vertical]/timeline:translate-y-8 dark:border-zinc-600" />

              <TimelineTitle>
                <div className="flex w-full items-baseline justify-between">
                  {/* MARK: Job Title */}
                  <span className="text-base leading-relaxed font-medium">
                    {job.title}
                    {job.subtitle && (
                      <span className="text-secondary text-sm font-normal">
                        {', '}
                        {job.subtitle}
                      </span>
                    )}
                  </span>

                  {/* MARK: Job -> Dates */}
                  <TimelineDate>
                    <div className="text-muted text-sm font-normal tracking-tighter">
                      {job.start} - {job.end}
                    </div>
                  </TimelineDate>
                </div>

                {/* MARK: Company Name */}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <span className="group text-secondary group-hover:text-link-hover inline-flex shrink-1 items-center text-base leading-tight font-normal">
                    {job.company}
                    <ArrowUpRight size={12} className="group-hover:text-link-hover" />
                  </span>
                </a>
                {/* <HoverUnderline text={job.company} link={job.link} /> */}
              </TimelineTitle>

              <TimelineIndicator className="flex size-8 items-center justify-center group-data-completed/timeline-item:border-0 group-data-[orientation=vertical]/timeline:-left-8">
                <AsteriskIcon className="text-accent group-not-data-completed/timeline-item:hidden" />
              </TimelineIndicator>
            </TimelineHeader>

            {/* MARK: Job Description */}
            <TimelineContent>
              <div className="text-body-secondary flex-col leading-normal tracking-normal">
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="mt-4 list-none">
                    {job.highlights.map((highlight, idx) => (
                      <li
                        key={`${job.id}-highlight-${idx}`}
                        className="mt-4 font-sans text-sm leading-normal text-pretty"
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
