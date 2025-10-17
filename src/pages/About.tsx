import { Code2, Database, Brain, Briefcase, GraduationCap, Sparkles, Globe, Award } from "lucide-react";

const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "C", "C++", "C#", "Java", "SQL", "Bash"],
  aiTools: ["Google ADK", "Vertex AI", "MCP", "A2A", "LangChain", "Keras", "TensorFlow", "Scikit-learn"],
  technologies: ["Docker", "GCP", "FastAPI", "NumPy", "Pandas", "Git", "React", "Kubernetes"],
};

const experiences = [
  {
    title: "AI Engineer",
    company: "StackEasy",
    period: "June 2025 – Dec 2025",
    description: "Led development of AI agents on Google ADK & Vertex AI, integrating APIs, MCP, and A2A. Served as tech lead on architecture decisions and deployed solutions on GCP.",
  },
  {
    title: "Full Stack Developer",
    company: "Headmind Partners",
    period: "Sept 2024 – March 2025",
    description: "Web application development with C#.NET MVC. Database management with SQL Server and collaboration with business teams.",
  },
];

const education = [
  {
    school: "42 Paris",
    degree: "Master in Artificial Intelligence and Data",
    period: "2023 – Present",
  },
  {
    school: "Université Paris-Cité",
    degree: "Deep Learning for Biology",
    period: "May 2025",
  },
  {
    school: "Université de Reims",
    degree: "Bachelor's degree in Maths/Computer Science",
    period: "2021 – 2023",
  },
];

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            AI Engineer specializing in multi-agent systems and machine learning
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          
          {/* Large card - Introduction */}
          <div className="md:col-span-12 bg-secondary/30 rounded-3xl p-10 md:p-12 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-background rounded-2xl">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold mt-2">AI Engineer</h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an AI Engineer with expertise in developing multi-agent systems and deploying 
              machine learning solutions on Google Cloud Platform. Currently pursuing a Master's 
              in Artificial Intelligence at 42 Paris, I specialize in building intelligent systems 
              using cutting-edge technologies like Google ADK, Vertex AI, and various ML frameworks.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              My work focuses on creating autonomous AI agents, implementing RAG systems, and 
              developing full-stack applications that bridge AI capabilities with practical business needs.
            </p>
          </div>

          {/* Experience Section */}
          <div className="md:col-span-6 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6" />
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="md:col-span-6 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-lg">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section - Languages */}
          <div className="md:col-span-4 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Programming</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((lang, index) => (
                <span key={index} className="px-3 py-1 bg-background rounded-full text-sm font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Section - AI Tools */}
          <div className="md:col-span-4 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Brain className="h-6 w-6" />
              <h3 className="text-xl font-semibold">AI & ML</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.aiTools.map((tool, index) => (
                <span key={index} className="px-3 py-1 bg-background rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Section - Technologies */}
          <div className="md:col-span-4 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-background rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Languages & Interests */}
          <div className="md:col-span-6 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.45s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Languages</h3>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground"><span className="font-medium text-foreground">French:</span> Native</p>
              <p className="text-muted-foreground"><span className="font-medium text-foreground">English:</span> Advanced</p>
              <p className="text-muted-foreground"><span className="font-medium text-foreground">Spanish:</span> Beginner</p>
            </div>
          </div>

          {/* Interests */}
          <div className="md:col-span-6 bg-secondary/30 rounded-3xl p-8 hover:bg-secondary/40 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Award className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Interests</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Mountain biking, running, science, music, and video games
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
