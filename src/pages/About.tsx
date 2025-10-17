import { Code2, Database, Brain, Cpu, Boxes, Workflow, Cloud, Container, Mail, Linkedin, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  { name: "Python", icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Boxes },
  { name: "LangChain", icon: Brain },
  { name: "OpenAI", icon: Cpu },
  { name: "FastAPI", icon: Workflow },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Container },
  { name: "Redis", icon: Database },
  { name: "MLflow", icon: Cloud },
];

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            AI Engineer passionate about building intelligent systems
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Large card - What I Do */}
          <div className="md:col-span-7 bg-secondary/30 rounded-3xl p-10 md:p-12 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-background rounded-2xl">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold mt-2">What I Do</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an AI Engineer passionate about developing intelligent AI agents
              and advanced monitoring platforms. My expertise focuses on creating
              autonomous systems capable of learning, adapting, and optimizing their
              performance in real-time.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              I bridge the gap between cutting-edge AI research and production-ready 
              applications, ensuring that innovative AI solutions are scalable, 
              reliable, and measurable.
            </p>
          </div>

          {/* Contact Card */}
          <div className="md:col-span-5 bg-primary text-primary-foreground rounded-3xl p-10 hover:scale-[1.02] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
            <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
            <p className="mb-6 opacity-90">
              Always interested in new projects and opportunities
            </p>
            <div className="space-y-3">
              <Button
                variant="secondary"
                className="w-full justify-start"
                asChild
              >
                <a href="mailto:your.email@example.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-start"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="secondary"
                className="w-full justify-start"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="md:col-span-5 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="h-6 w-6" />
              <h3 className="text-xl font-semibold">AI Agent Development</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Specialized in building autonomous AI agents using state-of-the-art
              LLM frameworks. Creating intelligent systems that can reason, plan,
              and execute complex tasks with minimal human intervention.
            </p>
          </div>

          <div className="md:col-span-7 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Performance Analytics</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Designing and implementing comprehensive monitoring solutions to track,
              analyze, and optimize AI agent performance. Building dashboards and
              metrics systems for production environments.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-background rounded-full text-sm font-medium">Real-time Monitoring</span>
              <span className="px-3 py-1 bg-background rounded-full text-sm font-medium">Analytics</span>
              <span className="px-3 py-1 bg-background rounded-full text-sm font-medium">Optimization</span>
            </div>
          </div>

          {/* Tech Stack - Full Width */}
          <div className="md:col-span-12 bg-secondary/30 rounded-3xl p-10 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <h2 className="text-2xl font-semibold mb-8 text-center">Tech Stack & Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl hover:bg-accent transition-all duration-300 hover:scale-105 group"
                  >
                    <IconComponent className="h-8 w-8 mb-3 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm text-center">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
