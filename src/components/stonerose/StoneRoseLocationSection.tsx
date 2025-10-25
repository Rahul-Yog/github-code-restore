import { MapPin, Navigation, School, ShoppingBag, Coffee, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StoneRoseLocationSection = () => {
  const proximityPoints = [
    {
      icon: MapPin,
      title: "South Niagara Hospital",
      distance: "8km",
      description: "Opening 2028 - Your workplace just minutes away"
    },
    {
      icon: Navigation,
      title: "QEW Access",
      distance: "5km",
      description: "Easy highway access for GTA connections"
    },
    {
      icon: ShoppingBag,
      title: "Shopping & Retail",
      distance: "3km",
      description: "Major shopping centers and amenities nearby"
    },
    {
      icon: School,
      title: "Schools",
      distance: "2km",
      description: "Quality elementary and secondary schools"
    },
    {
      icon: Coffee,
      title: "Dining & Entertainment",
      distance: "4km",
      description: "Niagara Falls attractions and restaurants"
    },
    {
      icon: Trees,
      title: "Parks & Recreation",
      distance: "1km",
      description: "Green spaces and recreational facilities"
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

          {/* Map Placeholder */}
          <Card className="mb-12 overflow-hidden border-2">
            <CardContent className="p-0">
              <div className="relative h-96 bg-accent/50 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <p className="text-lg font-semibold text-foreground">Interactive Location Map</p>
                  <p className="text-sm text-muted-foreground">
                    Montrose Road, Niagara Falls, ON
                  </p>
                </div>
                {/* In production, replace with actual interactive map */}
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
                    <strong className="text-foreground">Day Shifts:</strong> 8-10 minute drive via Montrose Road
                  </p>
                  <p>
                    <strong className="text-foreground">Night Shifts:</strong> Even faster with reduced traffic
                  </p>
                  <p>
                    <strong className="text-foreground">Public Transit:</strong> Bus routes available for alternative commuting
                  </p>
                  <p>
                    <strong className="text-foreground">Bike-Friendly:</strong> Safe cycling routes to hospital area
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
