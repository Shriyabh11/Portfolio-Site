import { BrainCircuit, Code, Smartphone, Server } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const skillsData = [
  { icon: <BrainCircuit className="w-10 h-10 text-primary" />, title: 'AI / Machine Learning', description: 'Machine Learning, Deep Learning, NLP' },
  { icon: <Smartphone className="w-10 h-10 text-primary" />, title: 'Mobile Development', description: 'Flutter, Dart' },
  { icon: <Code className="w-10 h-10 text-primary" />, title: 'Programming Languages', description: 'Python, C, C++' },
  { icon: <Server className="w-10 h-10 text-primary" />, title: 'Backend & APIs', description: 'RESTful APIs, Python' },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">My Technical Skills</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            As a student, I'm building my skills in various areas of technology. Here's what I'm focusing on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((skill) => (
            <Card key={skill.title} className="flex flex-col items-center text-center p-6 bg-secondary border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                {skill.icon}
                <CardTitle className="mt-4 font-headline">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
