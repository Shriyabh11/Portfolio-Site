import { ProjectCard, type Project } from '@/components/project-card';

const projectsData: Project[] = [
  {
    title: 'Multimodal Emotion Recognition',
    description: 'A system to classify emotions from text and video in conversations using a late fusion architecture on the MELD dataset.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'emotion analysis',
    tags: ['Python', 'PyTorch', 'NLP', 'Computer Vision', 'Streamlit'],
    githubUrl: 'https://github.com/Shriyabh11',
    hasVideo: true,
  },
  {
    title: 'BETA - T1D AI Companion',
    description: 'An AI-powered Flutter app for Type 1 Diabetes management, providing mental health support, nutrition logging, and health Q&A.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'health application',
    tags: ['Flutter', 'Python', 'Gemini API', 'Firebase', 'RAG'],
    githubUrl: 'https://github.com/Shriyabh11',
    hasVideo: true,
  },
  {
    title: 'Nexus - Conversational CLI',
    description: 'An AI-powered natural language interface for Linux and databases that translates plain English into complex system commands and SQL queries.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'terminal code',
    tags: ['Python', 'Transformers', 'BERT', 'T5', 'SQLAlchemy'],
    githubUrl: 'https://github.com/Shriyabh11',
    hasVideo: true,
    isUpcoming: true,
  },
  {
    title: 'EduAI - CBSE English Tool',
    description: 'An intelligent tool for teachers to process documents and generate Q&A, mind maps, and worksheets for the CBSE English curriculum.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'education technology',
    tags: ['Python', 'Streamlit', 'GPT/Claude', 'RAG', 'OpenCV'],
    githubUrl: 'https://github.com/Shriyabh11/eduai-cbse-tool',
    hasVideo: true,
    isUpcoming: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've been working on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
