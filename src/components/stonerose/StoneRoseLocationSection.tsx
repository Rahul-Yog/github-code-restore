import { MapPin, Navigation, School, ShoppingBag, Coffee, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aerialImage from "@/assets/stonerose-aerial.jpg";

const StoneRoseLocationSection = () => {
  const proximityPoints = [
    {
      icon: MapPin,
      title: "South Niagara Hospital",
      distance: "11min",
      description: "Opening Summer 2028 - $3.6B state-of-the-art facility"
    },
    {
      icon: Navigation,
      title: "QEW Highway Access",
      distance: "3min",
      description: "Direct highway access for GTA connections"
    },
    {
      icon: ShoppingBag,
      title: "Outlet Collection Niagara",
      distance: "10min",
      description: "Major shopping and retail destination"
    },
    {
      icon: School,
      title: "Quality Schools",
      distance: "3.5km",
      description: "10 schools within radius - public & Catholic"
    },
    {
      icon: Coffee,
      title: "Niagara Falls Downtown",
      distance: "8min",
      description: "Tourist attractions, dining, entertainment"
    },
    {
      icon: Trees,
      title: "Niagara-on-the-Lake",
      distance: "13min",
      description: "Historic town, wineries, and heritage sites"
    }
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Location That <span className="text-primary">Works for You</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stonerose is strategically positioned on Montrose Road in Niagara Falls, offering 
              unparalleled access to the new South Niagara Hospital while maintaining proximity 
              to all essential amenities.
            </p>
          </div>

          {/* Aerial Location Map */}
          <Card className="mb-12 overflow-hidden border-2">
            <CardContent className="p-0">
              <div className="relative h-[300px] md:h-[500px]">
                <img
                  src={aerialImage}
                  alt="Pre-construction homes Niagara Falls location - Stonerose aerial view showing proximity to South Niagara Hospital and QEW highway"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                  <p className="text-sm font-semibold text-foreground">
                    📍 Montrose Road, Niagara Falls, ON
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Proximity Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {proximityPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {point.title}
                          </h3>
                          <span className="text-sm font-bold text-primary">
                            {point.distance}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Commute Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Easy Commute for Healthcare Workers
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Day Shifts:</strong> 11-minute drive via Montrose Road to hospital
                  </p>
                  <p>
                    <strong className="text-foreground">Night Shifts:</strong> Even faster with reduced traffic, under 10 minutes
                  </p>
                  <p>
                    <strong className="text-foreground">GO Transit:</strong> 10-12 minutes to Niagara Falls GO Station
                  </p>
                  <p>
                    <strong className="text-foreground">Local Transit:</strong> Niagara Region Transit Routes 113, 109, 213, 60/65
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Family-Friendly Niagara Living
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Safe Neighborhoods:</strong> Family-oriented community environment
                  </p>
                  <p>
                    <strong className="text-foreground">Top Schools:</strong> Excellent public and Catholic school options nearby
                  </p>
                  <p>
                    <strong className="text-foreground">Recreation:</strong> Parks, trails, and sports facilities within walking distance
                  </p>
                  <p>
                    <strong className="text-foreground">Tourism Hub:</strong> World-class attractions and natural beauty on your doorstep
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* GTA Connection */}
          <Card className="mt-6 border-2 border-primary">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Navigation className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Stay Connected to the GTA
                  </h3>
                  <p className="text-muted-foreground">
                    Quick QEW access keeps you connected to Toronto (1.5 hours), Mississauga (1 hour), 
                    and Hamilton (45 minutes) for family visits, shopping trips, or professional development.
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

export default StoneRoseLocationSection;
