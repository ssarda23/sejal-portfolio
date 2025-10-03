import { ChevronDown, Mail } from "lucide-react";
import headshotImage from "@/assets/sejal-headshot.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 portfolio-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src={headshotImage} 
                alt="Sejal Sarda - Data Science Student" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="section-title">Sejal Sarda</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Data Science & Statistics
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I study data not just for patterns, but for the people and communities behind the numbers.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProjects}
              className="portfolio-hero text-primary-foreground px-8 py-4 rounded-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              View My Projects
            </button>
            
            <div className="flex gap-4">
              <a
                href="mailto:sejal_sarda.email@berkeley.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;