import { Mail, Linkedin, MapPin, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="section-title">Let's Connect</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm actively seeking opportunities in data science and analytics. Let's discuss how we can work together to solve meaningful problems with data.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="portfolio-card rounded-xl p-8 text-left">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:your.email@berkeley.edu"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>sejal_sarda.email@berkeley.edu</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/sejal-sarda-ucb100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Sejal Sarda — LinkedIn</span>
                </a>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>Berkeley, CA (Open to relocation)</span>
                </div>
              </div>
            </div>

            <div className="portfolio-card rounded-xl p-8 text-left">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Resume & Portfolio</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-6">
                  Download my resume or view detailed project documentation.
                </p>
                
                <a
                  href="/resume.pdf"
                  download="Sejal_Sarda_Resume.pdf"
                  className="flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-glow transition-colors duration-300 w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Available for:</strong> Full-time positions, internships, and collaborative projects in data science, machine learning, and statistical analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Currently Seeking</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-medium text-foreground mb-2">Data Scientist</h4>
                <p className="text-sm text-muted-foreground">Machine learning, predictive modeling, and statistical analysis roles</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Data Analyst</h4>
                <p className="text-sm text-muted-foreground">Business intelligence, data visualization, and insights generation</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Research Assistant</h4>
                <p className="text-sm text-muted-foreground">Academic research in statistics, computational methods, or social data science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;