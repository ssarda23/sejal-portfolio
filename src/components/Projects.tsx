import { ArrowRight, BarChart3, Brain, TrendingUp, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "SpendWise – Financial Wellness App",
      description: "Built a financial wellness app that combines adaptive AI coaching with spending locks to help young consumers cut overspending in real time. Designed UX flows, developed prototypes, and tested with early users.",
      technologies: ["React Native", "Node.js", "Python", "Figma", "Plaid API"],
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      slug: "spendwise-app",
      featured: true
    },
    {
      title: "Bayesian Estimation of Renewable Energy Impacts",
      description: "Capstone project modeling the causal and Bayesian effects of renewable adoption on U.S. carbon emissions. Built hierarchical models on 2023 EPA eGRID data to quantify uncertainty at plant, state, and national levels.",
      technologies: ["Python", "PyMC", "statsmodels", "linearmodels", "Matplotlib"],
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop&crop=center",
      slug: "bayesian-estimation"
    },
    {
      title: "Cook County Housing Price Estimation",
      description: "Developed predictive models on Cook County housing transactions to analyze structural, locational, and neighborhood effects on price. Compared regression and ensemble methods for improved valuation accuracy.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center",
      slug: "cook-county-housing"
    },
    {
      title: "Urban Mobility Research – HuMNet Lab",
      description: "Advanced the TimeGeo framework by integrating Path Size Logit (PSL) models for more realistic route prediction. Proposed feedback loop calibration with SimMobility to improve sparse-data trajectory modeling.",
      technologies: ["Python", "PyMC", "Transformers", "GIS", "Matplotlib"],
      icon: <MapPin className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center",
      slug: "urban-mobility-humnet"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="section-title">Featured Projects</span>
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`portfolio-card rounded-xl p-8 ${
                  project.featured ? "border-l-4 border-accent" : ""
                }`}
              >
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 order-2 md:order-1">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="md:col-span-8 order-1 md:order-2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="text-primary">{project.icon}</div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.title}
                        {project.featured && (
                          <span className="ml-3 px-2 py-1 text-xs bg-accent text-accent-foreground rounded-full">
                            Featured
                          </span>
                        )}
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => navigate(`/project/${project.slug}`)}
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-glow transition-colors duration-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;