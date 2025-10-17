import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Bot, LineChart, Network, TestTube } from "lucide-react";

const projects = [
  {
    title: "AI Agent Framework",
    description: "Complete framework to develop and deploy autonomous AI agents with real-time monitoring capabilities",
    tags: ["Python", "LangChain", "FastAPI"],
    icon: Bot,
    imageUrl: "/placeholder-project-1.jpg", // User will add their own image
    link: "#"
  },
  {
    title: "Performance Analytics Platform",
    description: "Analytics platform to track and optimize AI agent performance in production environments",
    tags: ["React", "TypeScript", "PostgreSQL"],
    icon: LineChart,
    imageUrl: "/placeholder-project-2.jpg",
    link: "#"
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Orchestration system to coordinate multiple AI agents in complex workflows",
    tags: ["Python", "Redis", "Docker"],
    icon: Network,
    imageUrl: "/placeholder-project-3.jpg",
    link: "#"
  },
  {
    title: "AI Model Evaluation Suite",
    description: "Comprehensive suite of tools to evaluate and compare different AI model performances",
    tags: ["Python", "MLflow", "Jupyter"],
    icon: TestTube,
    imageUrl: "/placeholder-project-4.jpg",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, focusing on AI agents and performance analytics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-secondary/30 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                {/* Image placeholder area */}
                <div className="relative h-48 bg-secondary/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  {/* This is where users can add their project images */}
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
