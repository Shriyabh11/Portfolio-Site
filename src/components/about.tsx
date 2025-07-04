import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="flex flex-col justify-center space-y-4 lg:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate second-year Artificial Intelligence student with a strong interest in Natural Language Processing (NLP) and mobile application development. I love building stuff and solving real-life problems, and I have hands-on experience creating REST APIs.
            </p>
            <p className="max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              To strengthen my foundational skills, I am currently diving deep into Data Structures and Algorithms. I'm always excited to learn new technologies and apply my skills to impactful, real-world projects. I'm eager to collaborate, so let's create something amazing together!
            </p>
          </div>
          <div className="flex items-center justify-center lg:col-span-2">
             <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px]">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQE6reKqTaMmUw/profile-displayphoto-shrink_800_800/B56ZZEu5icGsAg-/0/1744909868392?e=1756944000&v=beta&t=IKqJuhh9wP6ktMXdFi04yxbiQQmOb5VnM2V3NM9RnZ0"
                  alt="Shriya Bharadwaj"
                  width={400}
                  height={400}
                  className="object-cover rounded-full border-4 border-primary shadow-lg"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
