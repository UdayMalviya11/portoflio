import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Badge } from "./ui/badge";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-20">
      <SectionHeading eyebrow="Career" title="Experience" />
      <ol className="mt-10 space-y-12">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`}>
            <InView delay={i * 0.05}>
              <div className="grid gap-3 md:grid-cols-[220px_1fr] md:gap-10">
                <div className="md:pt-0.5">
                  <p className="text-sm font-medium text-zinc-500">{job.period}</p>
                  <p className="mt-1 hidden text-sm text-zinc-500 md:block">{job.location}</p>
                </div>
                <div className="relative border-l border-zinc-200 pl-6 dark:border-zinc-800 md:pl-8">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {job.company} <span className="md:hidden">· {job.location}</span>
                  </p>
                  <ul className="mt-3 max-w-4xl list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </InView>
          </li>
        ))}
      </ol>
    </section>
  );
}
