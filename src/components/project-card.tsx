'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Video } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export type Project = {
  title: string;
  description: string;
  image: string;
  imageHint: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  hasVideo?: boolean;
  isUpcoming?: boolean;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { toast } = useToast();

  const handleVideoClick = () => {
    toast({
      title: "Coming Soon!",
      description: "A video demonstration for this project will be available soon.",
    });
  };
  
  return (
    <Card className="overflow-hidden flex flex-col h-full bg-card group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 border-2 border-card hover:border-primary">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <div className="p-6 flex flex-col flex-grow">
        <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.isUpcoming && <Badge variant="secondary">Upcoming</Badge>}
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-accent text-accent">{tag}</Badge>
          ))}
        </div>
        <CardContent className="p-0 pt-4 flex-grow">
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 pt-4 flex justify-end gap-2">
          {project.githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                <Github className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </Link>
            </Button>
          )}
          {project.demoUrl && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                <ExternalLink className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
              </Link>
            </Button>
          )}
          {project.hasVideo && (
            <Button variant="ghost" size="icon" onClick={handleVideoClick} aria-label={`${project.title} Video Demo`} suppressHydrationWarning>
              <Video className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
