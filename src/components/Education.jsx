import { Award, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Card } from "./ui/card";
import { education, achievements } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 md:py-20">
      <SectionHeading eyebrow="Background" title="Education & Achievements" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <InView>
          <Card className="h-full">
            <GraduationCap className="text-emerald-600 dark:text-emerald-400" size={22} />
            <h3 className="mt-3 font-semibold">{education.school}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {education.degree} · {education.period}
            </p>
            <p className="mt-1 text-sm text-zinc-500">{education.detail}</p>
          </Card>
        </InView>
        <InView delay={0.1}>
          <Card className="h-full">
            <Award className="text-emerald-600 dark:text-emerald-400" size={22} />
            <h3 className="mt-3 font-semibold">Achievements</h3>
            <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Card>
        </InView>
      </div>
    </section>
  );
}
