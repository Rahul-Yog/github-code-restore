import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import StoneRoseNavigation from "@/components/stonerose/StoneRoseNavigation";
import StoneRoseFooter from "@/components/stonerose/StoneRoseFooter";
import { Helmet } from "react-helmet";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      slug: "top-neighborhoods-near-niagara-falls",
      title: "Top 5 Neighborhoods Near Niagara Falls for First-Time Homebuyers",
      excerpt: "Discover the best neighborhoods within commuting distance of Niagara Falls, including Georgina Heights, King City, Bolton, and more. Complete comparison guide with pros, cons, and investment analysis.",
      date: "2025-01-15",
      readTime: "12 min read",
      category: "Buyer's Guide",
      image: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Niagara Falls Real Estate Blog | Home Buying Guides & Market Insights</title>
        <meta name="description" content="Expert advice on buying pre-construction homes in Niagara Falls. Market insights, investment tips, neighborhood guides, and HST rebate information for first-time homebuyers." />
        <meta name="keywords" content="niagara falls real estate blog, home buying guide niagara, pre construction tips, niagara falls market insights, first time home buyer ontario" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <StoneRoseNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/20 via-background to-accent/10 pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Niagara Falls Real Estate <span className="text-primary">Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Expert guides for buying homes in Niagara Falls and surrounding communities
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.slug} className="border-2 hover:border-primary transition-colors overflow-hidden group">
                    {post.image && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="group/btn p-0 h-auto hover:bg-transparent">
                          <span className="text-primary font-semibold">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <StoneRoseFooter />
    </>
  );
};

export default Blog;
