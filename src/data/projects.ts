import { Bot, Container, Brain, Network, LayoutDashboard, LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  icon: LucideIcon;
  image?: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "AI Command Center",
    description: "Full-stack SaaS platform for managing and orchestrating AI agent fleets. Features multi-tenant architecture, user management with roles and permissions, real-time analytics dashboard, agent configuration, RAG knowledge management, and integrations with Stripe, Supabase, and Google APIs.",
    technologies: ["React", "TypeScript", "Supabase", "Stripe", "VertexAI", "Multi-tenant"],
    date: "Oct 2025",
    icon: LayoutDashboard,
    image: 'public/projects/MultiAgentSystem.png',
    link: "#",
    github: "#"
  },
  {
    title: "AI Multi-Agent System",
    description: "Developed a multi-agent AI system with Google ADK, integrating RAG, web search, code execution, graph/PDF generation, and multi-format document processing (Excel, Word, PowerPoint, PDF).",
    technologies: ["Google ADK", "RAG", "MCP", "Long-Term Memory", "GCP", "A2A"],
    date: "Sept 2025",
    icon: Bot,
    image: 'public/projects/ChatInterface.png',
    link: "#",
    github: "#"
  },
  {
    title: "Learn2Slither",
    description: "Reinforcement learning agent trained from scratch to play the classic Snake game using Q-learning.",
    technologies: ["Python", "Reinforcement Learning", "Q-Learning", "Tkinter"],
    date: "April 2025",
    icon: Brain,
    image: 'public/projects/Learn2Slither.png',
    link: "#",
    github: "#"
  },
  {
    title: "Multilayer Perceptron",
    description: "A tunable MLP classifier that predicts the malignancy of a tumor from the Wisconsin Diagnostic Breast Cancer dataset from scratch.",
    technologies: ["Python", "NumPy", "Pandas", "Neural Networks"],
    date: "March 2025",
    icon: Brain,
    image: 'public/projects/MultilayerPerceptron.png',
    link: "#",
    github: "#"
  },
  {
    title: "Inception-Of-Things",
    description: "Deployed scalable multi-container applications with Docker & Kubernetes, implementing CI/CD pipelines, service discovery, and fault-tolerant orchestration.",
    technologies: ["Docker", "Kubernetes", "K3S", "K3D", "CI/CD"],
    date: "July 2025",
    icon: Network,
    image: 'public/projects/Kubernetes.png',
    link: "#",
    github: "#"
  },
];
