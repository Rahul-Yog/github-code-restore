import { Card } from '@/components/ui/card';
import { MapPin, Train, Plane, ShoppingBag, GraduationCap, Hospital, TreePine } from 'lucide-react';
import neighbourhoodMap from '@/assets/neighbourhood-map.jpg';

const LocationSection = () => {
  const amenities = [
    {
      icon: Train,
      title: "Proposed Transit Hub",
      description: "Direct access to proposed transit hub with connections to Highway 410",
      distance: "Walking distance"
    },
    {
      icon: ShoppingBag,
      title: "Bramalea City Centre",
      description: "Major shopping destination with 300+ stores and services",
      distance: "10 min drive"
    },
    {
      icon: GraduationCap,
      title: "Top-Rated Schools",
      description: "Access to highly-rated schools in both Caledon and Brampton",
      distance: "Walking distance"
    },
    {
      icon: Hospital,
      title: "Brampton Civic Hospital",
      description: "Full-service hospital with emergency and specialized care",
      distance: "15 min drive"
    },
    {
      icon: TreePine,
      title: "Community Retail",
      description: "Walking distance to retail within the community",
      distance: "Walking distance"
    },
    {
      icon: Plane,
      title: "Pearson Airport",
      description: "Easy access to Canada's largest international airport",
      distance: "25 min drive"
    }
  ];

  const neighborhoods = [
    {
      name: "Caledon Village",
      description: "Historic charm with small-town atmosphere and natural beauty",
      highlights: ["Caledon Village Historic District", "Local cafes and shops", "Heritage buildings"]
    },
    {
      name: "Brampton",
      description: "Dynamic urban center with diverse amenities and entertainment",
      highlights: ["Brampton City Hall", "Rose Theatre", "Downtown Brampton"]
    },
    {
      name: "Bolton",
      description: "Growing community with natural landscapes and recreational facilities",
      highlights: ["Humber Valley Heritage Trail", "McMichael Canadian Art Collection", "Conservation areas"]
    }
  ];

  return (
    <section id="location" className="section-spacing bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Caledon Location & Neighbourhood
          </h2>
          <div className="w-24 h-1 luxury-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located at the gateway of Caledon, Crown of Caledon offers the perfect balance 
            of natural beauty and urban convenience with easy access to Brampton and the GTA.
          </p>
        </div>

        {/* Location Highlight */}
        <div className="mb-16">
            <Card className="luxury-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="p-8 text-center">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-6" />
                <h3 className="text-3xl font-display font-bold text-primary mb-4">
                  Gateway of Caledon
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  This prestigious location places you at the heart of Caledon's newest development, 
                  where natural beauty meets modern convenience with direct access to Highway 410.
                </p>
              </div>
            </Card>
        </div>

        {/* Neighbourhood Map */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-8">
            Neighbourhood Map
          </h3>
          <Card className="luxury-card overflow-hidden max-w-4xl mx-auto">
            <img 
              src={neighbourhoodMap} 
              alt="Crown of Caledon Neighbourhood Map - Gateway of Caledon | Caledon Homes For Sale Location" 
              className="w-full h-auto"
            />
          </Card>
        </div>

        {/* Neighborhood Amenities Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Neighborhood Amenities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="luxury-card group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <amenity.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-primary">{amenity.title}</h4>
                        <span className="text-xs text-accent font-medium bg-accent/10 px-2 py-1 rounded-full">
                          {amenity.distance}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Surrounding Neighborhoods */}
        <div>
          <h3 className="text-3xl font-display font-bold text-primary text-center mb-12">
            Explore the Surrounding Area
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="luxury-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="p-6">
                  <h4 className="text-xl font-display font-bold text-primary mb-3">
                    {neighborhood.name}
                  </h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {neighborhood.description}
                  </p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-primary text-sm">Key Highlights:</h5>
                    {neighborhood.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 luxury-gradient rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation Note */}
        <div className="mt-16 text-center">
          <Card className="luxury-card bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-3xl mx-auto">
            <div className="p-8">
              <Train className="h-12 w-12 text-accent mx-auto mb-4" />
              <h4 className="text-xl font-display font-bold text-primary mb-4">
                Exceptional Transit Connectivity
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                With proposed transit hub, Highway 410, and major arterial roads nearby, Crown of Caledon 
                offers unparalleled access to the Greater Toronto Area while maintaining 
                the peaceful, natural lifestyle you desire.
              </p>
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;