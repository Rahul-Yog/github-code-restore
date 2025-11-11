import { Building2, Shield, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import streetscapeImage from "@/assets/stonerose-streetscape.jpg";

const StoneRoseOverviewSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Massive HST Savings",
      description: "NEW 2025: First-time buyers save $74K-$78K through 13% HST rebate (8% provincial + 5% federal). Resale buyers save $0.",
      highlight: true
    },
    {
      icon: Building2,
      title: "Premium Pre-Construction",
      description: "Modern townhomes designed with healthcare professionals in mind, featuring flexible layouts and quality finishes."
    },
    {
      icon: Shield,
      title: "Trusted Developer",
      description: "Built by Treasure Hill Homes, a respected name in Ontario real estate with decades of excellence."
    },
    {
      icon: TrendingUp,
      title: "Smart Investment",
      description: "Pre-construction pricing with proximity to South Niagara Hospital opening 2028. Strong appreciation potential."
    },
    {
      icon: Users,
      title: "Healthcare Community",
      description: "Join a growing community of healthcare professionals and families in Niagara's newest development."
    }
  ];

  return (
    <section id="overview" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Introducing Stonerose: Premier Pre-Construction Homes in{" "}
              <span className="text-primary">Niagara Falls</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stonerose offers a unique opportunity to own a modern townhome in one of Niagara's 
              most strategic locations. With the $3.6 billion South Niagara Hospital opening just 11 minutes away in Summer 2028, 
              this is the perfect time to secure your home at pre-construction pricing.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className={`border-2 hover:border-primary transition-colors ${
                    feature.highlight ? 'bg-primary/5 border-primary shadow-lg' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                        feature.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                      }`}>
                        <Icon className={`w-6 h-6 ${feature.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                          {feature.highlight && (
                            <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                              NEW
                            </span>
                          )}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Streetscape Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl mb-12">
            <img
              src={streetscapeImage}
              alt="Pre-construction homes Niagara Falls - Stonerose modern townhomes streetscape rendering near hospital"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-semibold mb-1">Artist's Rendering</p>
              <h3 className="text-3xl font-bold">Your New Home Awaits</h3>
            </div>
          </div>

          {/* Why Now Section */}
          <Card className="bg-primary/5 border-2 border-primary/20 mt-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Pre-Construction Homes at Stonerose?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Pre-Construction Pricing:</strong> Lock in today's prices before completion
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Hospital Proximity:</strong> 11 minutes to $3.6B hospital (opens 2028)
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Award-Winning Builder:</strong> Treasure Hill - 20+ years, 100% delivery
                    </span>
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">GTA Affordability:</strong> Save $200K-$300K vs Mississauga/Brampton
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Flexible Deposits:</strong> $60K total spread over 300 days
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Move-In:</strong> Spring 2027 (before hospital opens!)
                    </span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseOverviewSection;
