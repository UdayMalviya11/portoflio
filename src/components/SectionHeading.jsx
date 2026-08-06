import { InView } from "./ui/in-view";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <InView>
      <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </InView>
  );
}
