import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/brand-icons";
import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { projects } from "../data/resume";

const iconLink =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-20">
      <SectionHeading eyebrow="Work" title="Projects" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <InView key={project.name} delay={i * 0.1}>
            <Card className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-zinc-500">
                    {project.tagline} · {project.year}
                  </p>
                </div>
                <div className="flex gap-1">
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} repository`}
                      className={iconLink}
                    >
                      <GithubIcon size={16} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live site`}
                      className={iconLink}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <ul className="mt-4 flex-1 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </Card>
          </InView>
        ))}
      </div>
    </section>
  );
}
