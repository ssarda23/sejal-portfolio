import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © 2024 Data Science Portfolio. Built with passion and precision.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              Back to Top
            </a>
            <a
              href="https://www.linkedin.com/in/sejal-sarda-ucb100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Sejal Sarda's LinkedIn (opens in new tab)"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <div className="w-px h-4 bg-primary-foreground/30"></div>
            <p className="text-sm text-primary-foreground/80">
              Made with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;