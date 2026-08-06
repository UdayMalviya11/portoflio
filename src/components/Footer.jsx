import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Button } from "./ui/button";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-zinc-200 py-16 dark:border-zinc-800 md:py-20">
      <SectionHeading eyebrow="Contact" title="Get in touch" />
      <InView delay={0.1}>
        <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
          I&apos;m open to full-stack and GenAI engineering opportunities. The fastest way to reach me is
          email — I usually reply within a day.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button as="a" href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </Button>
          <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="outline">
            <GithubIcon size={16} /> GitHub
          </Button>
          <Button as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline">
            <LinkedinIcon size={16} /> LinkedIn
          </Button>
        </div>
        <p className="mt-12 text-xs text-zinc-500">
          © {new Date().getFullYear()} {profile.name} · Built with React, Tailwind CSS & Motion
        </p>
      </InView>
    </footer>
  );
}
