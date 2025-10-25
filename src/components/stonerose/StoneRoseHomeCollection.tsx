import { Bed, Square, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StoneRoseHomeCollection = () => {
  const homes = [
    {
      name: "The Heritage",
      type: "Townhome",
      sqft: "1,850",
      bedrooms: "3",
      price: "From $520,000",
      features: [
        "Open-concept main floor",
        "Modern kitchen with island",
        "Primary suite with ensuite",
        "Finished basement potential"
      ]
    },
    {
      name: "The Legacy",
      type: "Townhome",
      sqft: "2,100",
      bedrooms: "3+1",
      price: "From $560,000",
      features: [
        "Spacious family room",
        "Upgraded finishes",
        "Walk-out to backyard",
        "Double-car garage"
      ]
    },
    {
      name: "The Estate",
      type: "End Unit Townhome",
      sqft: "2,350",
      bedrooms: "4",
      price: "From $595,000",
      features: [
        "Corner lot with extra windows",
        "Luxury master retreat",
        "Gourmet kitchen",
        "Premium lot location"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="homes" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Explore Our Modern{" "}
              <span className="text-primary">Floor Plans</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stonerose offers thoughtfully designed townhomes with flexible layouts perfect for 
              healthcare professionals and growing families. All homes feature quality construction 
              and modern finishes.
            </p>
          </div>

          {/* Homes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {homes.map((home, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-0">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-accent flex items-center justify-center border-b">
                    <div className="text-center space-y-2">
                      <Square className="w-12 h-12 text-primary mx-auto" />
                      <p className="text-sm font-medium text-muted-foreground">Floor Plan Preview</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {home.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{home.type}</p>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{home.sqft} sq ft</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{home.bedrooms} bed</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2 py-3 border-y">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="text-xl font-bold text-primary">{home.price}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {home.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button 
                      className="w-full"
                      onClick={scrollToContact}
                    >
                      Request Floor Plans
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Deposit Info */}
          <Card className="bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Flexible Deposit Options
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">5% on Signing:</strong> Initial deposit to secure your home
                    </p>
                    <p>
                      <strong className="text-foreground">5% at 30 Days:</strong> Second deposit milestone
                    </p>
                    <p>
                      <strong className="text-foreground">5% at 180 Days:</strong> Third deposit milestone
                    </p>
                    <p>
                      <strong className="text-foreground">5% at 365 Days:</strong> Final deposit before occupancy
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why Pre-Construction?
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      ✓ Lock in today's pricing before market appreciation
                    </p>
                    <p>
                      ✓ Time to save for closing costs during construction
                    </p>
                    <p>
                      ✓ Potential for equity growth before occupancy
                    </p>
                    <p>
                      ✓ Customize selections and finishes
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseHomeCollection;
