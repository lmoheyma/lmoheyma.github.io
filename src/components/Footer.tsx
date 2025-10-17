const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Louis</h3>
            <p className="text-sm text-muted-foreground">
              AI Engineer building intelligent agents and performance tracking platforms
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                your.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/louis-moheymani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Louis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
