# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional single-page portfolio website for Uday Malviya (Full Stack + GenAI Engineer) with React, Tailwind, subtle Motion Primitives-style animation, and a dark/light theme.

**Architecture:** Vite + React SPA. All resume content lives in `src/data/resume.js`; presentational components render from it. shadcn-style UI primitives and Motion Primitives-style animation components are copied into `src/components/ui/` (no CLI, no TypeScript). Dark mode is class-based (`.dark` on `<html>`), set pre-hydration by an inline script, toggled and persisted via `localStorage`.

**Tech Stack:** Vite, React 18+, Tailwind CSS v4 (`@tailwindcss/vite`), `motion` (Framer Motion successor), `lucide-react`, `clsx` + `tailwind-merge`, `@fontsource-variable/inter`.

## Global Constraints

- JavaScript only — no TypeScript (spec: "resume site, keep it light").
- Dark theme is the default; light theme only when `localStorage.theme === "light"`.
- Accent color: emerald (`emerald-600` light / `emerald-400` dark). Neutrals: zinc.
- Content column: `max-w-3xl` centered, `px-6`.
- Subtle motion only: hero text reveal, in-view section fades. No parallax/particles.
- All resume text comes from `src/data/resume.js` — components must not hard-code content (except the "UM." monogram and footer credit).
- External links: `target="_blank" rel="noreferrer"`.
- Project working dir: `c:\Users\vishw\Downloads\portfolio` (already a git repo with `docs/`).
- Verification per task: `npm run build` must pass. No unit test framework — this is a static content site; verification is build + visual checks (final task).

---

### Task 1: Project scaffold, Tailwind v4, theme bootstrap

**Files:**
- Create: `package.json`, `vite.config.js`, `.gitignore`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/lib/utils.js`

**Interfaces:**
- Produces: `cn(...inputs)` from `src/lib/utils.js` (clsx + tailwind-merge). Dark-mode variant works via `.dark` class on `<html>`. `npm run dev` / `npm run build` scripts.

- [ ] **Step 1: Write `package.json`**

```json
{
  "name": "uday-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install react react-dom motion clsx tailwind-merge lucide-react tailwindcss @tailwindcss/vite @fontsource-variable/inter`
Run: `npm install -D vite @vitejs/plugin-react`

- [ ] **Step 3: Write `.gitignore`**

```
node_modules
dist
```

- [ ] **Step 4: Write `vite.config.js`** (no path alias — relative imports throughout)

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

- [ ] **Step 5: Write `index.html`** — title/meta + pre-hydration theme script (dark default unless stored light)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uday Malviya — Full Stack + GenAI Engineer</title>
    <meta
      name="description"
      content="Portfolio of Uday Malviya — Full Stack + GenAI Engineer. React, Node.js, FastAPI, and RAG/LLM systems."
    />
    <script>
      if (localStorage.theme !== "light") document.documentElement.classList.add("dark");
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Write `src/index.css`** — Tailwind v4 CSS-first config with class-based dark variant and Inter

```css
@import "tailwindcss";
@import "@fontsource-variable/inter";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: "Inter Variable", ui-sans-serif, system-ui, -apple-system, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100;
}

::selection {
  @apply bg-emerald-500/30;
}
```

- [ ] **Step 7: Write `src/main.jsx`**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 8: Write placeholder `src/App.jsx`** (replaced in Task 4/6)

```jsx
export default function App() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-bold tracking-tight">Scaffold OK</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">Tailwind + theme working.</p>
    </main>
  );
}
```

- [ ] **Step 9: Write `src/lib/utils.js`**

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 10: Verify build**

Run: `npm run build`
Expected: builds with no errors (dist/ emitted).

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind v4 with dark-mode bootstrap"
```

---

### Task 2: Resume data module + resume PDF

**Files:**
- Create: `src/data/resume.js`
- Create: `public/Uday_Malviya_Resume.pdf` (copy of `C:\Users\vishw\Downloads\udayFullStack.pdf`)

**Interfaces:**
- Produces: named exports `profile`, `experience`, `projects`, `skillGroups`, `education`, `achievements` consumed by all section components. Shapes exactly as written below.

- [ ] **Step 1: Copy resume PDF**

Run (PowerShell): `New-Item -ItemType Directory -Force public; Copy-Item "C:\Users\vishw\Downloads\udayFullStack.pdf" "public\Uday_Malviya_Resume.pdf"`

- [ ] **Step 2: Write `src/data/resume.js`**

Note: GenAI Engineer bullets are inferred from the resume's AI project/skills (role is new, no bullets exist in the PDF) — flagged for user review. Project links are placeholders (`#`) until the user supplies URLs.

```js
export const profile = {
  name: "Uday Malviya",
  headline: "Full Stack + GenAI Engineer",
  pitch:
    "I build scalable web applications with React, Node.js and FastAPI — and voice-driven GenAI systems powered by RAG, LangChain and pgvector.",
  location: "Indore, Madhya Pradesh, India",
  email: "udaymalviya2003@gmail.com",
  github: "https://github.com/udaymalviya",
  linkedin: "https://www.linkedin.com/in/uday-malviya",
  resumeFile: "/Uday_Malviya_Resume.pdf",
};

export const experience = [
  {
    company: "ZenQua Technologies Pvt. Ltd.",
    role: "GenAI Engineer",
    period: "Apr 2026 – Present",
    location: "Indore, India · On-site",
    bullets: [
      "Developing GenAI product features end to end — RAG pipelines, hybrid retrieval (vector + full-text search), and LLM orchestration with LangChain and LangGraph.",
      "Building FastAPI services backing AI features, with PostgreSQL and pgvector for embedding storage and retrieval.",
      "Optimizing LLM response latency with Redis caching, connection pooling, and streaming responses over WebSockets.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "pgvector", "Azure OpenAI", "Redis"],
  },
  {
    company: "ZenQua Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Jul 2025 – Apr 2026",
    location: "Indore, India · On-site",
    bullets: [
      "Engineered scalable web applications using React.js, TypeScript, and API-driven architecture, contributing across frontend and backend systems.",
      "Designed and optimized RESTful APIs to improve data efficiency and system performance.",
      "Implemented Redis caching to reduce API latency and enhance application responsiveness.",
      "Collaborated on deployments using AWS, ensuring scalable and reliable production systems.",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "REST APIs", "Redis", "AWS"],
  },
  {
    company: "Fin Coopers Tech Pvt Ltd.",
    role: "Full Stack Developer Intern",
    period: "Apr 2025 – Jun 2025",
    location: "Indore, India · On-site",
    bullets: [
      "Built and maintained RESTful APIs using Node.js, Express.js, and MongoDB, powering core backend modules.",
      "Designed MongoDB schemas and integrated backend services with clean, modular architecture for scalability.",
      "Implemented real-time functionality using WebSockets, enabling live data updates across the application.",
      "Implemented secure Google OAuth 2.0 authentication, enabling seamless user sign-in and protected application access.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "WebSockets", "OAuth 2.0"],
  },
];

export const projects = [
  {
    name: "VIPRA AI",
    year: "2026",
    tagline: "Voice-based AI physics tutor",
    bullets: [
      "Voice-based AI physics tutor with a RAG pipeline over 6,900+ textbook chunks in pgvector, grounding Azure OpenAI responses with retrieved textbook context.",
      "Hybrid retrieval pipeline combining vector search with PostgreSQL full-text search for better RAG context.",
      "Real-time streaming voice pipeline over WebSockets — latency optimized with connection pooling, embedding pre-warming, and speculative prefetching.",
    ],
    tech: ["FastAPI", "Next.js", "Azure OpenAI", "pgvector", "PostgreSQL", "WebSockets"],
    links: { live: "#", repo: "#" },
  },
  {
    name: "Royal York W",
    year: "2025",
    tagline: "Property management CRM",
    bullets: [
      "Core CRM modules built with React.js and Node.js for property management workflows.",
      "Real-time WebRTC audio/video calling between tenants and property owners.",
      "Google Maps integration for location-based property visualization and management.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebRTC", "Google Maps"],
    links: { live: "#" },
  },
];

export const skillGroups = [
  { label: "Languages", items: ["C++", "Java", "JavaScript", "TypeScript", "Python"] },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "SSR", "State Management", "Socket.IO", "shadcn/ui", "Web Performance"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "GraphQL", "Event-Driven Architecture"],
  },
  { label: "Databases & Caching", items: ["PostgreSQL", "MongoDB", "Redis", "pgvector"] },
  {
    label: "AI / GenAI",
    items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "Knowledge Base Design"],
  },
  { label: "Tools & Cloud", items: ["Docker", "AWS", "Git", "GitHub", "Postman"] },
];

export const education = {
  school: "Indore Institute of Science and Technology",
  degree: "B.Tech",
  period: "2021 – 2025",
  detail: "CGPA: 7.32 · Indore, Madhya Pradesh",
};

export const achievements = [
  "Smart India Hackathon 2023 Finalist",
  "Represented Madhya Pradesh in state-level Pickleball tournaments",
];
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: PASS (data module compiles; PDF copied into `dist/` output).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add resume data module and downloadable resume PDF"
```

---

### Task 3: UI primitives (Button, Badge, Card) + motion components (TextEffect, InView)

**Files:**
- Create: `src/components/ui/button.jsx`, `src/components/ui/badge.jsx`, `src/components/ui/card.jsx`, `src/components/ui/text-effect.jsx`, `src/components/ui/in-view.jsx`

**Interfaces:**
- Consumes: `cn` from `src/lib/utils.js`.
- Produces:
  - `Button({ as = "button", variant = "default" | "outline" | "ghost", className, ...props })`
  - `Badge({ className, children })`
  - `Card({ className, children })`
  - `TextEffect({ children, className, delay = 0 })` — per-word staggered reveal (hero only)
  - `InView({ children, className, delay = 0 })` — fade/slide-up once when scrolled into view

- [ ] **Step 1: Write `src/components/ui/button.jsx`**

```jsx
import { cn } from "../../lib/utils";

const variants = {
  default:
    "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
  outline:
    "border border-zinc-300 text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800",
  ghost: "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",
};

export function Button({ as: Comp = "button", variant = "default", className, ...props }) {
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
```

- [ ] **Step 2: Write `src/components/ui/badge.jsx`**

```jsx
import { cn } from "../../lib/utils";

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300",
        className
      )}
    >
      {children}
    </span>
  );
}
```

- [ ] **Step 3: Write `src/components/ui/card.jsx`**

```jsx
import { cn } from "../../lib/utils";

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50",
        className
      )}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 4: Write `src/components/ui/text-effect.jsx`** (Motion Primitives-style per-word reveal)

```jsx
import { motion } from "motion/react";

export function TextEffect({ children, className, delay = 0 }) {
  const words = String(children).split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: delay + i * 0.06, ease: "easeOut" }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
```

- [ ] **Step 5: Write `src/components/ui/in-view.jsx`**

```jsx
import { motion } from "motion/react";

export function InView({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add UI primitives and motion components"
```

---

### Task 4: Navbar, ThemeToggle, Hero — assembled in App

**Files:**
- Create: `src/components/ThemeToggle.jsx`, `src/components/Navbar.jsx`, `src/components/Hero.jsx`
- Modify: `src/App.jsx` (replace placeholder)

**Interfaces:**
- Consumes: `Button`, `TextEffect` from Task 3; `profile` from Task 2.
- Produces: `<Navbar />`, `<Hero />` (section `id="home"`), `<ThemeToggle />`. Section anchor ids used by Navbar links: `#experience`, `#projects`, `#skills`, `#contact` (sections arrive in Tasks 5–6; dead anchors until then are fine).

- [ ] **Step 1: Write `src/components/ThemeToggle.jsx`**

```jsx
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
```

- [ ] **Step 2: Write `src/components/Navbar.jsx`**

```jsx
import { Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { profile } from "../data/resume";

const links = [
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/70">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-bold tracking-tight">
          UM<span className="text-emerald-600 dark:text-emerald-400">.</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button as="a" href={profile.resumeFile} download className="h-9 px-3 text-xs">
            <Download size={14} /> Resume
          </Button>
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 3: Write `src/components/Hero.jsx`**

```jsx
import { motion } from "motion/react";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { TextEffect } from "./ui/text-effect";
import { Button } from "./ui/button";
import { profile } from "../data/resume";

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
        <p className="mt-6 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.pitch}</p>
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
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 4: Replace `src/App.jsx`**

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add navbar, theme toggle, and hero section"
```

---

### Task 5: Experience timeline + Projects cards

**Files:**
- Create: `src/components/SectionHeading.jsx`, `src/components/Experience.jsx`, `src/components/Projects.jsx`
- Modify: `src/App.jsx` (add sections)

**Interfaces:**
- Consumes: `InView`, `Badge`, `Card`, `Button` from Task 3; `experience`, `projects` from Task 2.
- Produces: `<SectionHeading eyebrow title />`, `<Experience />` (`id="experience"`), `<Projects />` (`id="projects"`).

- [ ] **Step 1: Write `src/components/SectionHeading.jsx`**

```jsx
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
```

- [ ] **Step 2: Write `src/components/Experience.jsx`**

```jsx
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
```

- [ ] **Step 3: Write `src/components/Projects.jsx`**

```jsx
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { InView } from "./ui/in-view";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { projects } from "../data/resume";

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
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live site`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
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
```

- [ ] **Step 4: Update `src/App.jsx`**

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add experience timeline and project cards"
```

---

### Task 6: Skills, Education & Achievements, Footer — complete page

**Files:**
- Create: `src/components/Skills.jsx`, `src/components/Education.jsx`, `src/components/Footer.jsx`
- Modify: `src/App.jsx` (final assembly)

**Interfaces:**
- Consumes: `InView`, `Badge`, `Card`, `Button`, `SectionHeading`; `skillGroups`, `education`, `achievements`, `profile` from Task 2.
- Produces: `<Skills />` (`id="skills"`), `<Education />`, `<Footer />` (`id="contact"`). Page complete.

- [ ] **Step 1: Write `src/components/Skills.jsx`**

```jsx
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
            <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-4">
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
```

- [ ] **Step 2: Write `src/components/Education.jsx`**

```jsx
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
```

- [ ] **Step 3: Write `src/components/Footer.jsx`** (doubles as Contact section)

```jsx
import { Github, Linkedin, Mail } from "lucide-react";
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
            <Github size={16} /> GitHub
          </Button>
          <Button as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="outline">
            <Linkedin size={16} /> LinkedIn
          </Button>
        </div>
        <p className="mt-12 text-xs text-zinc-500">
          © {new Date().getFullYear()} {profile.name} · Built with React, Tailwind CSS & Motion
        </p>
      </InView>
    </footer>
  );
}
```

- [ ] **Step 4: Final `src/App.jsx`**

```jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </main>
    </>
  );
}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add skills, education, and contact sections — page complete"
```

---

### Task 7: Full verification pass

**Files:**
- Modify: only if fixes are needed.

**Interfaces:**
- Consumes: the complete app.

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: PASS, no warnings about missing assets; `dist/Uday_Malviya_Resume.pdf` exists.

- [ ] **Step 2: Serve and inspect**

Run: `npm run preview` (background) and verify with a browser/screenshot tool:
- All 7 sections render in order; nav anchor links scroll to the right sections.
- Dark theme by default; toggle switches to light; reload preserves choice.
- Resume button downloads the PDF.
- Responsive: no horizontal overflow at 375px width; project grid stacks to 1 column.
- Animations: hero text staggers in; sections fade in on scroll; content never stays hidden.

- [ ] **Step 3: Fix anything found, rebuild, and commit**

```bash
git add -A
git commit -m "fix: verification pass fixes"
```

(Skip commit if nothing changed.)
