import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./ui/brand-icons";
import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { projects } from "../data/resume";

const iconLink =
  "inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100";

const arrowButton =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100";

export default function Projects() {
  const scroller = useRef(null);

  function scrollByCard(dir) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : 480;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-20">
      <div className="flex items-end justify-between">
        <SectionHeading eyebrow="Work" title="Projects" />
        <div className="hidden gap-2 md:flex">
          <button onClick={() => scrollByCard(-1)} aria-label="Scroll projects left" className={arrowButton}>
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => scrollByCard(1)} aria-label="Scroll projects right" className={arrowButton}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <InView delay={0.1}>
        <div
          ref={scroller}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {projects.map((project) => (
            <div key={project.name} data-card className="w-[85vw] shrink-0 snap-start sm:w-[440px]">
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
            </div>
          ))}
        </div>
      </InView>
    </section>
  );
}
