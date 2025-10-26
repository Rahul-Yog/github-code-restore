import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Trophy, UtensilsCrossed, ShoppingBag, Home } from "lucide-react";
import StoneRoseGoogleMap from "./StoneRoseGoogleMap";

const StoneRoseAmenitiesSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const amenityCategories = [
    {
      icon: Trophy,
      title: "Experience Premier Golf Living Near Stonerose",
      description: "Nestled just minutes from some of Niagara Falls' finest golf courses, Stonerose offers an unmatched lifestyle for golf enthusiasts. Enjoy easy access to Rolling Meadows Golf & Country Club, Legends on the Niagara, and Whirlpool Golf Course — each offering championship fairways, clubhouses, and social events designed for every skill level.",
      callout: "Live where passion meets lifestyle — tee off anytime, just moments from your new home.",
      highlights: [
        "Rolling Meadows Golf & Country Club — 2 km / 5 mins",
        "Legends on the Niagara — 5 km / 10 mins",
        "Whirlpool Golf Course — 4 km / 8 mins"
      ],
      color: "text-green-600"
    },
    {
      icon: UtensilsCrossed,
      title: "Savor the Finest Dining Experiences Nearby",
      description: "Discover a local culinary scene rich with variety and flavor. From the renowned all-you-can-eat Mandarin Buffet to intimate farm-to-table settings like Weinkeller, there's something for every palate. Whether it's casual breakfasts or elegant dinners, the neighborhood's top-rated restaurants are ready to welcome you.",
      callout: "Taste the best of Niagara — just a short drive from your doorstep.",
      highlights: [
        "Mandarin Buffet — 3 km / 7 mins",
        "Weinkeller — 2.5 km / 6 mins",
        "Farm-to-table dining options nearby"
      ],
      color: "text-orange-600"
    },
    {
      icon: ShoppingBag,
      title: "Everything You Need Within Easy Reach",
      description: "Live close to Niagara Square Shopping Centre and vibrant local markets featuring everything from daily essentials to unique artisan finds. Explore parks, natural green spaces, and entertainment hotspots like Clifton Hill, all conveniently located to offer you a balanced and fulfilling lifestyle.",
      callout: "City conveniences and natural beauty – the best of both worlds await.",
      highlights: [
        "Niagara Square Shopping Centre — 7 km / 12 mins",
        "Food Basics — 1 min walk",
        "Clifton Hill Entertainment — 4 km / 9 mins"
      ],
      color: "text-purple-600"
    }
  ];

  const keyDistances = [
    { label: "Food Basics", distance: "1 min walk", icon: ShoppingBag },
    { label: "Rolling Meadows Golf", distance: "2 km / 5 mins", icon: Trophy },
    { label: "QEW Highway", distance: "2 km / 3 mins", icon: MapPin },
    { label: "South Niagara Hospital", distance: "8 km / 11 mins", icon: Home },
    { label: "Niagara Square Shopping", distance: "7 km / 12 mins", icon: ShoppingBag },
    { label: "Brock University", distance: "13 km / 16 mins", icon: Home }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Lifestyle & Location Benefits
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Live Where{" "}
              <span className="text-primary">Lifestyle Meets Convenience</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover a vibrant community surrounded by world-class golf, exceptional dining, 
              premier shopping, and essential services — all within minutes of your doorstep.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="mb-16">
            <StoneRoseGoogleMap />
          </div>

          {/* Amenity Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {amenityCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 ${category.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {category.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-primary italic">
                      {category.callout}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Key Distances Grid */}
          <Card className="bg-accent/30 border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Distance & Convenience at a Glance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {keyDistances.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {item.label}
                      </p>
                      <p className="text-xs text-primary font-bold">
                        {item.distance}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Experience the Stonerose Lifestyle?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Download our comprehensive Local Amenities Guide to explore everything 
                  this exceptional location has to offer, or schedule a private tour to 
                  see for yourself.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Download Amenities Guide
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={scrollToContact}
                  >
                    Schedule Private Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseAmenitiesSection;
