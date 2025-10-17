import { Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-semibold hover:opacity-70 transition-opacity flex-1"
        >
          Louis Moheymani
        </Link>

        <div className="flex items-center gap-1 flex-1 justify-center">
          <Button
            variant="ghost"
            asChild
            className={isActive("/") ? "bg-secondary" : ""}
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={isActive("/projects") ? "bg-secondary" : ""}
          >
            <Link to="/projects">Projects</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className={isActive("/about") ? "bg-secondary" : ""}
          >
            <Link to="/about">About</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-secondary"
          >
            <a
              href="https://linkedin.com/in/louis-moheymani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-secondary"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hover:bg-secondary hidden sm:flex"
          >
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-2" />
              CV
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
