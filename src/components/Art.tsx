import { Palette, Eye } from "lucide-react";

const Art = () => {
  // Placeholder art pieces - you can replace these with actual images later
  const artPieces = [
    {
      title: "Data Visualization Series",
      medium: "Digital Art",
      year: "2024",
      description: "Abstract representations of statistical concepts using geometric forms and color gradients.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      title: "Neural Network Patterns",
      medium: "Pen & Ink",
      year: "2023",
      description: "Hand-drawn interpretations of neural network architectures and their learning processes.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Probability Landscapes",
      medium: "Watercolor",
      year: "2023",
      description: "Visual exploration of probability distributions through organic watercolor techniques.",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Algorithm Flow",
      medium: "Mixed Media",
      year: "2023",
      description: "Physical representation of sorting algorithms using layered paper and thread.",
      image: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Statistical Portraits",
      medium: "Photography",
      year: "2022",
      description: "Portrait series exploring the human stories behind data points and statistical analysis.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center"
    },
    {
      title: "Information Theory",
      medium: "Digital Collage",
      year: "2022",
      description: "Collage series representing information entropy and compression concepts.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="art" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="section-title">Creative Works</span>
          </h2>
          
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Exploring the intersection of data science and visual art, where analytical thinking meets creative expression.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artPieces.map((piece, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="portfolio-card rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={piece.image}
                      alt={piece.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {piece.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-foreground">
                        {piece.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {piece.year}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary">
                      <Palette className="w-4 h-4" />
                      <span className="text-sm font-medium">{piece.medium}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {piece.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              "Art is the intersection of technical precision and creative intuition—much like data science."
            </p>
            <div className="flex justify-center">
              <span className="px-4 py-2 bg-accent/10 text-accent-foreground rounded-full text-sm">
                Currently working on: Generative Art with Machine Learning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;