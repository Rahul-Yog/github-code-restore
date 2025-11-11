import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, MapPin, TrendingUp, DollarSign, Home } from "lucide-react";
import StoneRoseNavigation from "@/components/stonerose/StoneRoseNavigation";
import StoneRoseFooter from "@/components/stonerose/StoneRoseFooter";
import StoneRoseLeadForm from "@/components/stonerose/StoneRoseLeadForm";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const neighborhoods = [
    {
      name: "Georgina Heights",
      distance: "25 min (22 km)",
      searchVolume: "2,400 monthly",
      avgPrice: "$850K+",
      pros: ["Established community", "GTA connectivity", "Strong schools", "Mature infrastructure"],
      cons: ["High prices", "Limited inventory", "Higher property taxes", "Traffic congestion"],
      bestFor: "Families prioritizing GTA proximity"
    },
    {
      name: "King City",
      distance: "28 min (25 km)",
      searchVolume: "260 monthly",
      avgPrice: "$1.2M+",
      pros: ["Luxury community", "Large lots", "Excellent schools", "Rural feel with city access"],
      cons: ["Very expensive", "Long commutes", "Limited amenities", "Car-dependent"],
      bestFor: "High-income families wanting estate homes"
    },
    {
      name: "Bolton",
      distance: "35 min (32 km)",
      searchVolume: "210 monthly",
      avgPrice: "$900K+",
      pros: ["Small-town charm", "Growing community", "Better value than GTA core", "Parks & trails"],
      cons: ["Limited transit", "Commute times", "Fewer amenities", "Still expensive"],
      bestFor: "Young families seeking value near GTA"
    },
    {
      name: "Stonerose, Niagara Falls",
      distance: "11 min to hospital",
      searchVolume: "14,800 monthly",
      avgPrice: "From mid-$500Ks",
      pros: ["Affordable pricing", "New construction", "$74K HST rebate", "Near new hospital", "QEW access", "Tourism economy", "Natural beauty"],
      cons: ["Farther from GTA", "Smaller job market", "Tourist traffic in summer"],
      bestFor: "First-time buyers, healthcare workers, investors, anyone seeking value"
    },
    {
      name: "Oshawa",
      distance: "1 hour to Niagara",
      searchVolume: "210 monthly",
      avgPrice: "$700K+",
      pros: ["More affordable than Toronto", "GO Train access", "Durham College area", "Growing tech sector"],
      cons: ["Still expensive", "Commute to Niagara", "Economic transition", "Weather"],
      bestFor: "Toronto commuters seeking affordability"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Top 5 Neighborhoods Near Niagara Falls for First-Time Homebuyers | Stonerose Blog</title>
        <meta name="description" content="Compare the best neighborhoods near Niagara Falls including Georgina Heights, King City, Bolton, and Stonerose. Detailed analysis of prices, commute times, pros & cons for first-time homebuyers." />
        <meta name="keywords" content="neighborhoods near niagara falls, georgina heights, king city homes, bolton ontario, homes for sale niagara falls, first time home buyer guide, pre construction homes comparison" />
        <link rel="canonical" href="https://yourdomain.com/blog/top-neighborhoods-near-niagara-falls" />
      </Helmet>

      <StoneRoseNavigation />
      
      <main>
        {/* Article Header */}
        <article className="pt-32 pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog">
                <Button variant="ghost" className="mb-6 pl-0">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>

              <div className="mb-8">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded text-sm font-semibold">
                  Buyer's Guide
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Top 5 Neighborhoods Near Niagara Falls for First-Time Homebuyers
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>January 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>12 min read</span>
                </div>
              </div>

              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're searching for "<strong className="text-foreground">homes for sale Niagara Falls</strong>" or exploring 
                  nearby communities, you're making a smart move. The Niagara region and surrounding GTA areas offer diverse 
                  housing options, from affordable pre-construction homes to established luxury communities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This comprehensive guide compares the top 5 neighborhoods within commuting distance of Niagara Falls, 
                  analyzing pricing, commute times, investment potential, and lifestyle factors to help you make an 
                  informed decision as a first-time homebuyer.
                </p>
              </div>

              {/* Neighborhood Comparison Cards */}
              <div className="space-y-8 mb-12">
                {neighborhoods.map((neighborhood, index) => (
                  <Card key={index} className={`border-2 ${neighborhood.name === "Stonerose, Niagara Falls" ? "border-primary bg-primary/5" : ""}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-2">
                            {index + 1}. {neighborhood.name}
                          </h2>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{neighborhood.distance}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              <span>{neighborhood.searchVolume}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground mb-1">Avg Price</div>
                          <div className="text-xl font-bold text-primary">{neighborhood.avgPrice}</div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-green-600">✓</span> Pros
                          </h3>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {neighborhood.pros.map((pro, i) => (
                              <li key={i}>• {pro}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <span className="text-red-600">✗</span> Cons
                          </h3>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {neighborhood.cons.map((con, i) => (
                              <li key={i}>• {con}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-background/50 rounded-lg p-4">
                        <p className="text-sm">
                          <strong className="text-foreground">Best For:</strong>{" "}
                          <span className="text-muted-foreground">{neighborhood.bestFor}</span>
                        </p>
                      </div>

                      {neighborhood.name === "Stonerose, Niagara Falls" && (
                        <div className="mt-4">
                          <Button onClick={scrollToContact} className="w-full sm:w-auto">
                            Learn More About Stonerose
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Investment Analysis */}
              <Card className="bg-accent/5 border-2 border-accent mb-12">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <DollarSign className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Investment Analysis: Why Stonerose Stands Out
                      </h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Affordability Gap:</strong> With GTA homes averaging $850K-$1.2M+, 
                      Stonerose's mid-$500K pricing offers <strong className="text-primary">$300K-$700K in savings</strong>.
                    </p>
                    <p>
                      <strong className="text-foreground">HST Rebate Advantage:</strong> First-time buyers save up to $74K 
                      in HST rebates - exclusive to new construction purchases.
                    </p>
                    <p>
                      <strong className="text-foreground">Growth Catalyst:</strong> South Niagara Hospital opens Summer 2028, 
                      bringing 2,500+ jobs and significant economic growth to the area.
                    </p>
                    <p>
                      <strong className="text-foreground">Appreciation Potential:</strong> Historical Niagara Falls real estate 
                      appreciation of 5-7% annually, with hospital project likely accelerating growth.
                    </p>
                    <p>
                      <strong className="text-foreground">Rental Income:</strong> Tourism economy provides strong short-term 
                      rental potential, while healthcare workers create long-term tenant demand.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While Georgina Heights, King City, Bolton, and Oshawa offer established communities with strong GTA 
                  connectivity, they come with hefty price tags that push home ownership out of reach for many first-time buyers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Stonerose in Niagara Falls</strong> presents a compelling alternative: 
                  modern pre-construction homes at <strong className="text-primary">half the price</strong>, significant HST savings, 
                  proximity to the new South Niagara Hospital, and exceptional quality of life. For healthcare professionals, 
                  young families, and savvy investors, Stonerose offers the best value in the Ontario real estate market.
                </p>
              </div>

              {/* CTA Section */}
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-8 text-center">
                  <Home className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Explore Stonerose?
                  </h3>
                  <p className="mb-6 text-primary-foreground/90">
                    Schedule a tour, download floor plans, or speak with our team to learn more about 
                    why first-time buyers are choosing Stonerose.
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={scrollToContact}
                  >
                    Get Started Today
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Get Your Free Buyer's Guide
                </h2>
                <p className="text-lg text-muted-foreground">
                  Download detailed floor plans, pricing information, and learn about HST rebates
                </p>
              </div>
              <StoneRoseLeadForm />
            </div>
          </div>
        </section>
      </main>

      <StoneRoseFooter />
    </>
  );
};

export default BlogPost;
