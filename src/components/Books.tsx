import { BookOpen, Star } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "Naomi",
      author: "Junichiro Tanizaki",
      rating: 4,
      category: "Japanese Literature",
      thoughts: "I was drawn in by its uneasy mix of humor and control — the story made me question who was really in power, and why obsession feels so timeless.",
      year: "1924",
      image: "https://m.media-amazon.com/images/I/611gYEL6OVL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "On Earth We're Briefly Gorgeous",
      author: "Ocean Vuong",
      rating: 5,
      category: "Contemporary Fiction",
      thoughts: "The prose felt like it was dissolving and rebuilding me at the same time. I kept stopping mid-sentence to breathe — it's rare to feel language so alive.",
      year: "2019",
      image: "https://m.media-amazon.com/images/I/81sSWzjCftL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      rating: 5,
      category: "History / Anthropology",
      thoughts: "It reframed human history for me — I started noticing how much of society is built on shared stories we just agree to believe in.",
      year: "2011",
      image: "https://citylights.com/wp-content/uploads/2025/06/3lx2b7bUrRFOT6sf7khBSfosize640.jpg"
    },
    {
      title: "The Stranger",
      author: "Albert Camus",
      rating: 5,
      category: "Existentialism",
      thoughts: "I remember feeling unsettled but also strangely clear-headed — like Camus had stripped life down to its barest bones and asked me to stare back.",
      year: "1942",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/97/L%27%C3%89tranger_-_Albert_Camus.jpg"
    },
    {
      title: "The Man Who Mistook His Wife for a Hat",
      author: "Oliver Sacks",
      rating: 5,
      category: "Neuroscience",
      thoughts: "These case studies were more moving than some novels I've read — I kept marveling at how fragile and astonishing the brain is.",
      year: "1985",
      image: "https://pictures.abebooks.com/isbn/9780330294911-us.jpg"
    },
    {
      title: "First Person Singular",
      author: "Haruki Murakami",
      rating: 4,
      category: "Short Stories",
      thoughts: "It felt like overhearing fragments of a dream — mundane details turning suddenly magical. Some stories stayed with me long after.",
      year: "2020",
      image: "https://m.media-amazon.com/images/I/814kwZgCINL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      rating: 5,
      category: "Fiction",
      thoughts: "This was one of the first books that made me cry. It showed me how guilt and love can tie people together across decades.",
      year: "2003",
      image: "https://m.media-amazon.com/images/I/81IzbD2IiIL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "Othello",
      author: "William Shakespeare",
      rating: 5,
      category: "Drama",
      thoughts: "I kept thinking about how jealousy can twist even the strongest bonds. The language still cuts straight through, centuries later.",
      year: "1604",
      image: "https://m.media-amazon.com/images/I/71if8BnWzmL._UF350,350_QL50_.jpg"
    },
    {
      title: "Spring Snow",
      author: "Yukio Mishima",
      rating: 4,
      category: "Japanese Literature",
      thoughts: "The novel lingered with me in its sadness — its beauty was in the restraint, in what the characters couldn't say as much as what they did.",
      year: "1969",
      image: "https://m.media-amazon.com/images/I/91W6-67zqqL._UF1000,1000_QL80_.jpg"
    },
    {
      title: "A Doll's House",
      author: "Henrik Ibsen",
      rating: 5,
      category: "Drama",
      thoughts: "Reading it, I felt both frustrated and inspired. Nora's final choice shook me — it made me question what freedom costs, especially for women.",
      year: "1879",
      image: "https://m.media-amazon.com/images/I/61qoUdHJJoL._UF1000,1000_QL80_.jpg"
    }
  ];

  const categories = ["All", ...new Set(books.map(book => book.category))];

  return (
    <section id="books" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="section-title">Reading List</span>
          </h2>
          
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Books that have shaped my perspective on literature, philosophy, and the human experience — from Japanese classics to contemporary voices.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div key={index} className="portfolio-card rounded-xl overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={`Cover of ${book.title}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-foreground rounded-full text-xs font-medium">
                      {book.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-foreground leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-muted-foreground">by {book.author}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-accent/10 text-accent-foreground rounded-full text-xs">
                      {book.category}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < book.rating
                              ? "text-accent fill-accent"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {book.thoughts}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Currently reading: <span className="text-foreground font-medium">"The Brothers Karamazov"</span> by Fyodor Dostoevsky
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;