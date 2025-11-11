import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home, TrendingUp, Clock, DollarSign, BadgeCheck } from "lucide-react";
import StoneRoseNavigation from "@/components/stonerose/StoneRoseNavigation";
import StoneRoseFooter from "@/components/stonerose/StoneRoseFooter";
import StoneRoseLeadForm from "@/components/stonerose/StoneRoseLeadForm";
import { Helmet } from "react-helmet";

const GeorginaHeights = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const proximityFeatures = [
    {
      icon: MapPin,
      title: "25 Minutes to Stonerose",
      description: "Easy commute via Highway 400 South to QEW"
    },
    {
      icon: Home,
      title: "Established Community",
      description: "Mature neighborhood with excellent amenities"
    },
    {
      icon: TrendingUp,
      title: "Investment Potential",
      description: "Strong appreciation in York Region market"
    }
  ];

  const commuteData = [
    { destination: "Stonerose Development", time: "25 min", distance: "22 km", route: "Via Hwy 400 S & QEW" },
    { destination: "South Niagara Hospital", time: "36 min", distance: "30 km", route: "Via Hwy 400 S & QEW" },
    { destination: "Downtown Toronto", time: "45 min", distance: "50 km", route: "Via Hwy 400 S" },
    { destination: "Pearson Airport", time: "20 min", distance: "25 km", route: "Via Hwy 427" }
  ];

  return (
    <>
      <Helmet>
        <title>New Homes Near Georgina Heights | Stonerose Niagara Falls Pre-Construction</title>
        <meta name="description" content="Explore new pre-construction homes in Niagara Falls - just 25 minutes from Georgina Heights. Modern 3-5 bedroom townhomes from mid-$500Ks. Perfect commute location with QEW highway access." />
        <meta name="keywords" content="georgina heights homes, niagara falls homes, homes near georgina heights, pre construction homes ontario, commute from georgina heights" />
        <link rel="canonical" href="https://yourdomain.com/georgina-heights-niagara-homes" />
      </Helmet>

      <StoneRoseNavigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/10 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <MapPin className="w-4 h-4" />
                <span>Perfect for Georgina Heights Residents</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                New Homes for Sale Near <span className="text-primary">Georgina Heights</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Only 25 minutes away - Modern pre-construction townhomes in Niagara Falls from mid-$500Ks
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={scrollToContact}>
                  Schedule a Tour
                </Button>
                <Button size="lg" variant="outline" onClick={scrollToContact}>
                  Download Floor Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Makes Sense Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Georgina Heights Families Choose <span className="text-primary">Stonerose</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {proximityFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-primary transition-colors">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="bg-primary/5 border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">The Perfect Commute Location</h3>
                  <p className="text-muted-foreground mb-4">
                    Stonerose offers the ideal balance - stay connected to Georgina Heights, Toronto, and the GTA 
                    while enjoying significantly more affordable housing, better value, and a higher quality of life in Niagara Falls.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Save $300K+:</strong> Similar GTA homes cost $900K+, Stonerose starts mid-$500Ks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Easy Access:</strong> 3 minutes to QEW highway for seamless GTA connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">First-Time Buyer Friendly:</strong> Save up to $74K in HST rebates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Better Lifestyle:</strong> Lower costs, natural beauty, family-friendly environment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Commute Calculator Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Commute Times from Stonerose
                </h2>
                <p className="text-lg text-muted-foreground">
                  Stay connected to everywhere that matters
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-primary/5">
                        <tr>
                          <th className="text-left p-4 font-semibold text-foreground">Destination</th>
                          <th className="text-left p-4 font-semibold text-foreground">Travel Time</th>
                          <th className="text-left p-4 font-semibold text-foreground">Distance</th>
                          <th className="text-left p-4 font-semibold text-foreground">Route</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commuteData.map((commute, index) => (
                          <tr key={index} className="border-t border-border">
                            <td className="p-4 font-medium text-foreground">{commute.destination}</td>
                            <td className="p-4 text-primary font-semibold">{commute.time}</td>
                            <td className="p-4 text-muted-foreground">{commute.distance}</td>
                            <td className="p-4 text-muted-foreground text-sm">{commute.route}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Analysis */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <DollarSign className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Smart Investment</h3>
                    <p className="text-muted-foreground mb-4">
                      Niagara Falls real estate offers exceptional value compared to the GTA, with strong 
                      appreciation potential driven by the new South Niagara Hospital opening in 2028.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pre-construction pricing locks in today's rates</li>
                      <li>• Historical 5-7% annual appreciation in the area</li>
                      <li>• Growing healthcare sector attracting professionals</li>
                      <li>• Tourism economy provides rental income potential</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="p-8">
                    <Home className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">What You Get</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong className="text-foreground">3-5 Bedrooms:</strong> Perfect for families of all sizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong className="text-foreground">2-Car Garage:</strong> Protected parking and storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong className="text-foreground">Modern Design:</strong> Contemporary finishes throughout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong className="text-foreground">Energy Efficient:</strong> Lower utility costs, eco-friendly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong className="text-foreground">First Occupancy:</strong> Spring 2027</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Learn More?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Book a tour or download floor plans - discover why Georgina Heights families are choosing Stonerose
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

export default GeorginaHeights;
