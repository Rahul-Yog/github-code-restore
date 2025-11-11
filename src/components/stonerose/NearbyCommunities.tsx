import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const NearbyCommunities = () => {
  const communities = [
    {
      name: "Georgina Heights",
      distance: "25 min (22 km)",
      route: "Via Hwy 400 S & QEW",
      searchVolume: "2,400/mo",
      link: "/georgina-heights-niagara-homes",
      description: "Established GTA community with excellent schools and amenities"
    },
    {
      name: "King City",
      distance: "28 min (25 km)",
      route: "Via Hwy 400 S & QEW",
      searchVolume: "260/mo",
      link: "#",
      description: "Luxury estate homes with rural charm and city access"
    },
    {
      name: "Bolton",
      distance: "35 min (32 km)",
      route: "Via Hwy 400 S & QEW",
      searchVolume: "210/mo",
      link: "#",
      description: "Growing community offering better value near the GTA"
    },
    {
      name: "Oshawa",
      distance: "1 hour (90 km)",
      route: "Via QEW & Hwy 401",
      searchVolume: "210/mo",
      link: "#",
      description: "Durham region hub with GO Train access to Toronto"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Nearby <span className="text-primary">Communities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay connected to GTA communities while enjoying Stonerose's exceptional value and lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {communities.map((community, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {community.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {community.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      <TrendingUp className="w-3 h-3" />
                      <span>{community.searchVolume}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground">{community.distance}</span>
                      <span className="text-muted-foreground">from Stonerose</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{community.route}</span>
                    </div>
                  </div>

                  {community.link !== "#" ? (
                    <Link to={community.link}>
                      <Button variant="outline" size="sm" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="outline" size="sm" className="w-full" disabled>
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Why Choose Stonerose Over GTA Communities?
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 mt-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$300K+</div>
                  <p className="text-sm text-muted-foreground">Average savings vs GTA homes</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$74K</div>
                  <p className="text-sm text-muted-foreground">HST rebate for first-time buyers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3 min</div>
                  <p className="text-sm text-muted-foreground">To QEW highway access</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NearbyCommunities;
