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
