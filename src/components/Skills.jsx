import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Badge } from "./ui/badge";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-20">
      <SectionHeading eyebrow="Toolbox" title="Skills" />
      <div className="mt-10 space-y-6">
        {skillGroups.map((group, i) => (
          <InView key={group.label} delay={i * 0.05}>
            <div className="grid gap-2 sm:grid-cols-[220px_1fr] sm:gap-6">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </InView>
        ))}
      </div>
    </section>
  );
}
