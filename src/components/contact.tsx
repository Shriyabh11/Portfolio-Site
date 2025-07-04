import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm always open to connecting with new people. Feel free to reach out on LinkedIn!
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-2 pt-4">
          <Button asChild size="lg">
            <Link href="https://www.linkedin.com/in/shriya-bharadwaj-0375662a9/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
