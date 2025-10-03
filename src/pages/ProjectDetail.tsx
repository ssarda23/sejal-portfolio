import { ArrowLeft, ExternalLink, Calendar, Clock, Target } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Project data - in a real app, this would come from an API or data file
  const projects: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    technologies: string[];
    icon: string;
    image: string;
    duration: string;
    status: string;
    challenges: string[];
    results: string[];
    methodology: string;
    // Optional properties
    demo?: string;
    github?: string;
    pitchDeck?: string;
    fullPaper?: string;
    researchNotes?: string;
    pnasPaper?: string;
    featured?: boolean;
    problem?: string;
    solution?: string[];
    methods?: string[];
    impact?: string;
    vision?: string;
    references?: string[];
  }> = {
    "spendwise-app": {
      title: "SpendWise – Financial Wellness App",
      subtitle: "Analytics & Data Engineering Focus",
      description: "SpendWise is a financial wellness app designed as a behavioral intervention tool for overspending. Rather than just tracking historical transactions, it uses adaptive AI guidance and transactional controls ('spending locks') to nudge users toward healthier financial habits. My role focused on product analytics, data validation, and early-stage data pipelines, ensuring the product design was grounded in real behavioral evidence.",
      longDescription: "SpendWise is a financial wellness app designed as a behavioral intervention tool for overspending. Rather than just tracking historical transactions, it uses adaptive AI guidance and transactional controls ('spending locks') to nudge users toward healthier financial habits. My role focused on product analytics, data validation, and early-stage data pipelines, ensuring the product design was grounded in real behavioral evidence.",
      technologies: ["Python", "Firebase", "Matplotlib", "Seaborn", "Analytics", "A/B Testing"],
      icon: "💰",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      demo: "https://www.loom.com/share/c19e2ae66b1a47deb6dc0857d2963471?sid=22c6f80f-aacc-4811-af0e-c4d9d7959da6",
      pitchDeck: "https://drive.google.com/file/d/spendwise-pitch-deck",
      featured: true,
      duration: "4 months",
      status: "MVP Completed",
      problem: "Gen Z consumers — especially women aged 18–30 — consistently reported anxiety after weekends of overspending. In 100+ peer interviews, 80%+ of respondents said they knew their spending patterns but struggled to execute on budgets. Traditional budgeting apps visualize past spending but fail to influence real-time decision-making. From an analytics perspective, we defined the core product problem as: 'How can we measure and reduce the frequency and intensity of self-sabotaging transactions in discretionary spending categories?'",
      solution: [
        "Spending Locks: Hard transactional controls to prevent overspending in real-time",
        "AI Money Coach: Adaptive daily guidance with behavioral nudges",
        "Gamified Progress: Rings, streaks, and milestones that reframe savings motivation",
        "Behavioral Segmentation: Separate 'habitual overspenders' from 'impulse-only overspenders'"
      ],
      methods: [
        "Peer Interviews: Conducted >100 structured interviews, coding responses into quantitative signals",
        "Concierge MVP: Launched a 14-day text-message prototype simulating app features",
        "Data Pipelines: Set up lightweight logging system (Python + Firebase) for interaction tracking",
        "Behavioral Analytics: Segmentation analysis to inform feature prioritization",
        "A/B Testing: Validated reframing ('$50 saved = 2 days closer to Bali') vs raw dollar metrics"
      ],
      challenges: [
        "Measuring and reducing frequency of self-sabotaging transactions in discretionary spending",
        "Validating user tolerance for 'hard' spending controls vs soft nudges",
        "Building data pipelines to capture real-time behavioral signals",
        "Segregating serious users from test interactions in early datasets"
      ],
      results: [
        "Locks Engagement: 72% of lock prompts were accepted, validating user tolerance for 'hard' controls",
        "Savings Impact: Median savings during 14-day test was $38/week per user (~$2,000/year if scaled)",
        "Retention: Day-7 retention for MVP prototype was 64%, significantly above typical fintech pre-launch norms (~40–50%)",
        "Behavioral Validation: Reframing motivation was 2.3× more effective than raw dollar metrics",
        "Unit Impact: ~$38 saved/user/week, with potential ARR of $27M at 1% U.S. Gen Z adoption"
      ],
      methodology: "Combined peer interview research (>100 structured interviews), concierge MVP testing (14-day text prototype), data pipeline development (Python + Firebase), behavioral analytics with segmentation analysis, and A/B testing for motivation framing validation.",
      impact: "Validated that preventive, behavior-first design (spending locks + AI nudges) could shift financial outcomes in just two weeks. Demonstrated that gamified progress loops drove >20% higher engagement vs static summaries. Quantified unit impact with potential for significant ARR at scale.",
      vision: "To make financial health as trackable as steps or sleep — shifting finance from shame to daily wins through data-driven behavioral interventions."
    },
    "bayesian-estimation": {
      title: "Bayesian Estimation of Renewable Energy Impacts",
      subtitle: "Bayesian Hierarchical Modeling of U.S. Power Plant Emissions",
      description: "Capstone project modeling the causal and Bayesian effects of renewable adoption on U.S. carbon emissions. Built hierarchical models on 2023 EPA eGRID data to quantify uncertainty at plant, state, and national levels.",
      longDescription: "This capstone project under Professor Peng Ding (UC Berkeley) evaluated the impact of renewable energy adoption on CO₂ emissions across ~1,000 U.S. power plants using 2023 EPA eGRID data. We combined causal inference models with Bayesian hierarchical modeling to produce policy-relevant estimates with quantified uncertainty.",
      technologies: ["Python", "PyMC", "statsmodels", "linearmodels", "Matplotlib"],
      icon: "🌱",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=center",
      fullPaper: "https://drive.google.com/file/d/1GemGfpYVgC9RraxyTslngB4U0qIUBNbS/view?usp=sharing",
      duration: "4 months",
      status: "Completed",
      methods: [
        "Causal Inference: Two-way fixed effects and 2SLS regressions (Python: statsmodels, linearmodels)",
        "Bayesian Modeling: Three-level hierarchical model (plant → state → national) in PyMC",
        "Uncertainty Metrics: Posterior predictive checks, Wasserstein distance, Jensen–Shannon divergence, Overlap Coefficient",
        "Data Imputation: Bayesian inference used to recover missing plant-level emissions data"
      ],
      challenges: [
        "Modeling causal effects across hierarchical levels (plant → state → national)",
        "Handling missing plant-level emissions data",
        "Quantifying uncertainty with Bayesian credible intervals"
      ],
      results: [
        "Renewable adoption correlated with measurable CO₂ reduction",
        "Shrinkage effects corrected extreme small-sample state estimates",
        "Credible intervals highlighted heterogeneity across states"
      ],
      methodology: "We modeled the impact of renewable energy share on CO₂ emissions using two-way fixed effects and two-stage least squares (2SLS) regression, implemented in Python with statsmodels and linearmodels. To address uncertainty and heterogeneity, we built a three-level Bayesian hierarchical model in PyMC, capturing emissions variability across plant, state, and national levels. The Bayesian framework also allowed us to impute missing data and rigorously validate models using advanced distributional metrics such as Wasserstein distance, Jensen–Shannon divergence, and the Overlap Coefficient.",
      impact: "Findings provide evidence-based insight for energy policy, showing how renewables reduce emissions with greater credibility than frequentist point estimates."
    },
    "cook-county-housing": {
      title: "Cook County Housing Price Estimation",
      subtitle: "Predictive Modeling of Urban Housing Prices",
      description: "Developed predictive models on Cook County housing transactions to analyze structural, locational, and neighborhood effects on price. Compared regression and ensemble methods for improved valuation accuracy.",
      longDescription: "This project leveraged Cook County housing transactions to identify drivers of property valuation and test predictive modeling techniques. The goal was to understand both structural and locational determinants of housing prices.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center",
      duration: "3 months",
      status: "Completed",
      methods: [
        "Feature Engineering: Lot size, property age, number of rooms, neighborhood amenities",
        "Modeling: Compared multiple regression, random forest, and gradient boosting",
        "Evaluation: Cross-validation, R², residual analysis"
      ],
      challenges: [
        "Feature engineering for lot size, property age, and neighborhood amenities",
        "Handling outliers and missing data in housing transactions",
        "Comparing multiple modeling approaches for optimal performance"
      ],
      results: [
        "Gradient boosting outperformed linear regression, reducing MAE by ~18%",
        "Location-based variables (schools, amenities) had strongest predictive impact",
        "Outlier analysis revealed crime index and zoning effects missed by naive models"
      ],
      methodology: "Used feature engineering for structural and locational variables, compared multiple regression, random forest, and gradient boosting with cross-validation and residual analysis.",
      impact: "Demonstrated how predictive modeling can guide buyers, sellers, and policymakers in conversations about affordability."
    },
    "urban-mobility-humnet": {
      title: "Urban Mobility Research – HuMNet Lab",
      subtitle: "Advancing Mobility Models with Path Size Logit Integration",
      description: "Advanced the TimeGeo framework by integrating Path Size Logit (PSL) models for more realistic route prediction. Proposed feedback loop calibration with SimMobility to improve sparse-data trajectory modeling.",
      longDescription: "At HuMNet Lab, UC Berkeley, I enhanced the TimeGeo mobility framework by integrating Path Size Logit (PSL) models into its temporal-spatial decision process. TimeGeo simulates stay-location trajectories from sparse ICT/mobile phone data. PSL improves route realism by correcting for overlapping paths.",
      technologies: ["Python", "PyMC", "Transformers", "GIS", "Matplotlib"],
      icon: "🚗",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=center",
      researchNotes: "https://drive.google.com/file/d/humnet-research-notes",
      pnasPaper: "https://www.pnas.org/doi/10.1073/pnas.timegeo-framework",
      duration: "8 months",
      status: "Research Completed",
      methods: [
        "Temporal Modeling: Integrated circadian rhythm transitions for peak-hour dynamics",
        "Spatial Modeling: PSL adjusted route utilities to reduce overestimation of overlapping segments",
        "Feedback Loop: Proposed calibration with SimMobility outputs, aligning synthetic trajectories with observed GPS datasets",
        "Policy Angle: Used model outputs to evaluate land-use and infrastructure impacts on travel behavior"
      ],
      challenges: [
        "Integrating Path Size Logit models into existing TimeGeo framework",
        "Improving route realism by correcting for overlapping path segments",
        "Proposing feedback loop calibration with SimMobility outputs"
      ],
      results: [
        "PSL corrections improved OD flow prediction accuracy under sparse data",
        "Enhanced realism in destination choice and route assignment",
        "Strengthened simulation utility for testing automated mobility-on-demand scenarios"
      ],
      methodology: "Integrated temporal modeling with circadian rhythm transitions for peak-hour dynamics, spatial modeling with PSL-adjusted route utilities, and proposed calibration with SimMobility outputs aligning synthetic trajectories with observed GPS datasets.",
      impact: "This work shows how hierarchical, feedback-driven mobility models can better inform city planning and transport policy, particularly in contexts with limited mobility data.",
      references: [
        "PNAS: TimeGeo Framework Paper",
        "Research Notes: Research PDF"
      ]
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-glow transition-colors duration-300"
            >
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">{project.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {project.title}
                </h1>
                {project.subtitle && (
                  <h2 className="text-xl text-primary font-medium mb-2">
                    {project.subtitle}
                  </h2>
                )}
                {project.featured && (
                  <span className="px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full">
                    Featured Project
                  </span>
                )}
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {project.longDescription}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{project.status}</span>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem Statement */}
          {project.problem && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Problem Statement</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* Solution & Features */}
          {project.solution && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Solution & Features</h2>
              <ul className="space-y-3">
                {project.solution.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Methods */}
          {project.methods && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Methods</h2>
              <ul className="space-y-3">
                {project.methods.map((method, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Methodology */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Methodology</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.methodology}
            </p>
          </div>

          {/* Challenges */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <ul className="space-y-3">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          {project.impact && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Impact</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
            </div>
          )}

          {/* Vision */}
          {project.vision && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.vision}
              </p>
            </div>
          )}

          {/* References */}
          {project.references && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">References</h2>
              <ul className="space-y-3">
                {project.references.map((ref, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">📄</span>
                    <span className="text-muted-foreground">{ref}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            {project.fullPaper && (
              <a
                href={project.fullPaper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Full Paper
              </a>
            )}
            {project.researchNotes && (
              <a
                href={project.researchNotes}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Research Notes
              </a>
            )}
            {project.pnasPaper && (
              <a
                href={project.pnasPaper}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                PNAS Paper
              </a>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
