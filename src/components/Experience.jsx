import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Badge } from "./ui/badge";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-20">
      <SectionHeading eyebrow="Career" title="Experience" />
      <ol className="mt-10 space-y-12 border-l border-zinc-200 pl-8 dark:border-zinc-800">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <InView delay={i * 0.05}>
              <p className="text-sm text-zinc-500">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </InView>
          </li>
        ))}
      </ol>
    </section>
  );
}
