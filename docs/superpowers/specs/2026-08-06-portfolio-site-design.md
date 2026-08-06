# Portfolio Site — Design Spec

**Date:** 2026-08-06
**Owner:** Uday Malviya
**Status:** Approved (direction A — minimal editorial)

## Goal

A professional single-page portfolio/resume website for Uday Malviya — Full Stack + GenAI Engineer. Clean, typography-led, subtly animated. "Not fancy but attractive." Target audience: recruiters and hiring managers.

## Stack

- **Build:** Vite + React 18 (JavaScript, not TypeScript — resume site, keep it light)
- **Styling:** Tailwind CSS, class-based dark mode
- **Components:** shadcn/ui primitives (Button, Card, Badge) — copied in, not a dependency
- **Animation:** Motion Primitives components (TextEffect, InView) built on `motion` (Framer Motion) — copied in per Motion Primitives' copy-paste model
- **Theme:** dark by default, light/dark toggle persisted to `localStorage`, respects `prefers-color-scheme` on first visit

## Visual direction (A — minimal editorial)

- Typography-led: large hero type, restrained sizes elsewhere; Inter (or system font stack) with tight tracking on headings
- Generous whitespace, max-width ~42–48rem content column
- One accent color (emerald or blue family) used sparingly: links, badges, timeline dots
- Subtle motion only: hero text reveal on load, sections fade/slide in on scroll, nav link hover states. No parallax, no particle backgrounds.
- Both themes fully styled; neutral zinc/slate scale

## Page structure (single scroll)

1. **Navbar** — sticky, blurred backdrop. Left: name/monogram. Right: section links (Experience, Projects, Skills, Contact), theme toggle, "Resume" download button.
2. **Hero** — name, headline "Full Stack + GenAI Engineer", one-line pitch (React/Node/FastAPI + RAG/LLM systems), location (Indore, India), icon links (GitHub, LinkedIn, email), Download Resume button.
3. **Experience** — vertical timeline:
   - ZenQua Technologies Pvt. Ltd. — GenAI Engineer (Apr 2026 – Present)
   - ZenQua Technologies Pvt. Ltd. — Associate Software Engineer (Jul 2025 – Apr 2026)
   - Fin Coopers Tech Pvt Ltd. — Full Stack Developer Intern (Apr 2025 – Jun 2025)
   - Bullets from resume PDF; tech badges per role.
4. **Projects** — cards: VIPRA AI (GenAI, FastAPI, Next.js, pgvector, RAG) and Royal York W (React, Node, Express, MongoDB, WebRTC). Description bullets, tech badges, link buttons (placeholder `#` until user supplies URLs).
5. **Skills** — grouped badge rows: Languages (C++, Java, JavaScript, TypeScript, Python), Frontend, Backend, Databases & Caching, AI, Tools. Java included per user request.
6. **Education & Achievements** — B.Tech, Indore Institute of Science and Technology (2021–2025, CGPA 7.32); SIH 2023 Finalist; state-level Pickleball for MP.
7. **Footer** — social links, email, small copyright.

## Architecture

- All resume content lives in `src/data/resume.js` — components render from it; user edits content without touching components.
- Components: `Navbar`, `Hero`, `Experience`, `Projects`, `Skills`, `Education`, `Footer` in `src/components/`, each focused and independent.
- Motion Primitives + shadcn pieces in `src/components/ui/`.
- Theme handling: small `ThemeToggle` component + inline script in `index.html` to avoid flash of wrong theme.
- Resume PDF served from `public/Uday_Malviya_Resume.pdf` (copied from `udayFullStack.pdf`).

## Error handling / edge cases

- Static site — no network calls, no forms. External links `target="_blank" rel="noreferrer"`.
- Placeholder project links render but are clearly swappable in `resume.js`.
- No JS-disabled fallback needed beyond semantic HTML (content still renders; animations are progressive enhancement — InView components must not hide content permanently if JS fails to animate).

## Testing / verification

- `npm run build` passes; `npm run dev` renders all sections in both themes.
- Manual check: responsive at mobile (375px), tablet, desktop; theme toggle persists on reload; resume download works.

## Out of scope (YAGNI)

- Contact form, blog, CMS, analytics, i18n, profile photo, multi-page routing, SEO beyond basic meta tags.
