import { motion } from "motion/react";
import { Download, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/brand-icons";
import { TextEffect } from "./ui/text-effect";
import { Button } from "./ui/button";
import { profile } from "../data/resume";

const iconLink =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800";

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-16 md:pt-44 md:pb-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        <TextEffect>Hi, I&apos;m</TextEffect>
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
        <TextEffect delay={0.15}>{profile.name}</TextEffect>
      </h1>
      <h2 className="mt-3 text-xl font-medium text-zinc-600 dark:text-zinc-400 md:text-2xl">
        <TextEffect delay={0.35}>{profile.headline}</TextEffect>
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
      >
        <p className="mt-6 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.pitch}</p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500">
          <MapPin size={14} /> {profile.location}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button as="a" href={`mailto:${profile.email}`}>
            <Mail size={16} /> Get in touch
          </Button>
          <Button as="a" href={profile.resumeFile} download variant="outline">
            <Download size={16} /> Download Resume
          </Button>
          <div className="ml-1 flex items-center gap-1">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={iconLink}
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
