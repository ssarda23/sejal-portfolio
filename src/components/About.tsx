import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="section-title">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>UC Berkeley - Data Science & Statistics</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Berkeley, California</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Expected Graduation: May 2026</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
              I’m a UC Berkeley senior in Data Science & Statistics with a minor in City Planning. My work spans Bayesian modeling, housing price prediction, and urban mobility research, alongside co-founding SpendWise, a personal finance startup. 
              
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond academics, I'm an avid reader and artist, always seeking to blend creativity with analytical thinking. I believe that the intersection of data science and creative expression leads to the most innovative solutions.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold section-title">Technical Skills</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "R", "SQL", "JavaScript", "Java"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Tools & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Tableau", "Git"].map((tool) => (
                      <span key={tool} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Areas of Interest</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "Statistical Analysis", "Data Visualization", "Predictive Modeling"].map((area) => (
                      <span key={area} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;