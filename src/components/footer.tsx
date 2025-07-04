import Link from 'next/link';
import { Code2, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="#home" className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Portfolio</span>
        </Link>
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Shriya Bharadwaj. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="https://github.com/Shriyabh11" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.linkedin.com/in/shriya-bharadwaj-0375662a9/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-foreground/60 transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
