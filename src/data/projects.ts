import { Bot, Brain, Network, LayoutDashboard, LucideIcon } from "lucide-react";

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
    title: "Abstract0",
    description: "LLM-driven code sandbox with AI-powered React app generation. Full-stack platform featuring FastAPI backend with Mistral AI agents (Devstral 2), Vite + React frontend, and live Sandpack workspace for real-time code preview and editing.",
    technologies: ["React", "TypeScript", "FastAPI", "Mistral AI", "Sandpack", "Vite"],
    date: "Feb 2026",
    icon: Bot,
    image: '/projects/Abstract0.png',
    github: "https://github.com/lmoheyma/Abstract0"
  },
  {
    title: "AI Command Center",
    description: "Full-stack SaaS platform for managing and orchestrating AI agent fleets. Features multi-tenant architecture, user management with roles and permissions, real-time analytics dashboard, agent configuration, RAG knowledge management, and integrations with Stripe, Supabase, and Google APIs.",
    technologies: ["React", "TypeScript", "Supabase", "Stripe", "VertexAI", "Multi-tenant"],
    date: "Oct 2025",
    icon: LayoutDashboard,
    image: '/projects/MultiAgentSystem.png',
  },
  {
    title: "AI Multi-Agent System",
    description: "Developed a multi-agent AI system with Google ADK, integrating RAG, web search, code execution, graph/PDF generation, and multi-format document processing (Excel, Word, PowerPoint, PDF).",
    technologies: ["Google ADK", "RAG", "MCP", "Long-Term Memory", "GCP", "A2A"],
    date: "Sept 2025",
    icon: Bot,
    image: '/projects/ChatInterface.png',
  },
  {
    title: "Learn2Slither",
    description: "Reinforcement learning agent trained from scratch to play the classic Snake game using Q-learning.",
    technologies: ["Python", "Reinforcement Learning", "Q-Learning", "Tkinter"],
    date: "April 2025",
    icon: Brain,
    image: '/projects/Learn2Slither.png',
    github: "https://github.com/lmoheyma/Learn2Slither"
  },
  {
    title: "Multilayer Perceptron",
    description: "A tunable MLP classifier that predicts the malignancy of a tumor from the Wisconsin Diagnostic Breast Cancer dataset from scratch.",
    technologies: ["Python", "NumPy", "Pandas", "Neural Networks"],
    date: "March 2025",
    icon: Brain,
    image: '/projects/MultilayerPerceptron.png',
    github: "https://github.com/lmoheyma/multilayer-perceptron"
  },
  {
    title: "Inception-Of-Things",
    description: "Deployed scalable multi-container applications with Docker & Kubernetes, implementing CI/CD pipelines, service discovery, and fault-tolerant orchestration.",
    technologies: ["Docker", "Kubernetes", "K3S", "K3D", "CI/CD"],
    date: "July 2025",
    icon: Network,
    image: '/projects/Kubernetes.png',
    github: "https://github.com/DayaLiuzzo/IoT"
  },
];
