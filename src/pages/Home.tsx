import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight animate-fade-in-up">
            Hi, I'm Louis
          </h1>
          
          <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-2xl md:text-3xl font-medium">
              AI Engineer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I develop AI agents and platforms to track their performance
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8"
            >
              <Link to="/about">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
