import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent">
              Shriya Bharadwaj
            </h1>
            <p className="font-headline text-2xl md:text-3xl text-primary">
              AI Student & Aspiring Developer
            </p>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              A second-year AI student passionate about machine learning, mobile development, and building cool projects.
            </p>
          </div>
          <div className="space-x-4 pt-6">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
          <div className="flex space-x-4 pt-6">
            <Link href="https://github.com/Shriyabh11" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-7 w-7 text-foreground/60 transition-colors hover:text-primary" />
            </Link>
            <Link href="https://www.linkedin.com/in/shriya-bharadwaj-0375662a9/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-7 w-7 text-foreground/60 transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
