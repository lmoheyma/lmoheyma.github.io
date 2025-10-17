import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, X } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, ranging from AI systems to machine learning applications
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
                {/* Icon header area */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/50 overflow-hidden">
                  {project.image ? (
                    <>
                      <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                        <DialogTrigger asChild>
                          <div className="absolute inset-0 cursor-pointer group/image">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform group-hover/image:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-[90vw] max-h-[95vh] p-0 border-0 bg-transparent shadow-none">
                          <div className="relative">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="max-h-[90vh] max-w-[90vw] w-auto h-auto rounded-lg"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-20 w-20 text-primary/20" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 z-10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1 z-10">
                    <span className="text-sm font-medium">{project.date}</span>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2 flex-shrink-0">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View project"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tech}
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
