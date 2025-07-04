import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Link from 'next/link';

// Use the user's Google Doc link for download and a preview version for embedding.
const downloadUrl = "https://docs.google.com/document/d/1RdzOQ36Wo24HWnqjjlX15Vyn4ULtl6jyP3iRpAE6QUw/edit?usp=sharing";
const embedUrl = "https://docs.google.com/document/d/1RdzOQ36Wo24HWnqjjlX15Vyn4ULtl6jyP3iRpAE6QUw/preview";

export function Resume() {
  return (
    <section id="resume" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Resume</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Check out my full resume for more details on my experience and skills.
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild>
                <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                </Link>
            </Button>
          </div>
        </div>
        <Card className="w-full max-w-4xl mx-auto bg-secondary shadow-lg">
          <CardContent className="p-2">
            <div className="aspect-[1/1.414] w-full bg-background">
              <iframe
                src={embedUrl}
                title="Shriya Bharadwaj's Resume"
                className="w-full h-full border-0"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
