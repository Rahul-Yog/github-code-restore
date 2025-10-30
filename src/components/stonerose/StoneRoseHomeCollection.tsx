import { Bed, Square, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import townhomeInt from "@/assets/stonerose-townhome-int.jpg";
import townhomeEnd from "@/assets/stonerose-townhome-end.jpg";
import townhomeCor from "@/assets/stonerose-townhome-cor.jpg";

const StoneRoseHomeCollection = () => {
  const homes = [
    {
      name: "The Rothwell R2",
      type: "Interior Townhome",
      sqft: "1,750",
      bedrooms: "Up to 5",
      price: "$569,900",
      hstRebate: "$74,087",
      effectivePrice: "$495,813",
      image: townhomeInt,
      features: [
        "Kitchen appliance package (plus washer & dryer)",
        "Quartz countertops throughout",
        "9 ft. smooth ceilings on main floor",
        "Napoleon Electric Fireplace",
        "Air Conditioning included",
        "2-car garage"
      ]
    },
    {
      name: "The Rothwell R2",
      type: "End Unit Townhome",
      sqft: "1,800",
      bedrooms: "Up to 5",
      price: "$589,900",
      hstRebate: "$76,687",
      effectivePrice: "$513,213",
      image: townhomeEnd,
      features: [
        "Extra windows with end unit location",
        "Kitchen appliance package (plus washer & dryer)",
        "Quartz countertops throughout",
        "9 ft. smooth ceilings on main floor",
        "Napoleon Electric Fireplace",
        "2-car garage"
      ]
    },
    {
      name: "The Rothwell R2",
      type: "Corner Unit Townhome",
      sqft: "1,800",
      bedrooms: "Up to 5",
      price: "$599,900",
      hstRebate: "$77,987",
      effectivePrice: "$521,913",
      image: townhomeCor,
      features: [
        "Premium corner lot location",
        "Kitchen appliance package (plus washer & dryer)",
        "Quartz countertops throughout",
        "9 ft. smooth ceilings on main floor",
        "Napoleon Electric Fireplace",
        "2-car garage"
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
                  {/* Townhome Image */}
                  <div className="h-64 border-b overflow-hidden">
                    <img 
                      src={home.image} 
                      alt={`${home.type} pre-construction homes Niagara Falls - ${home.name} townhome for sale near hospital from ${home.price}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
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

                    {/* HST Rebate Pricing */}
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">List Price:</span>
                        <span className="font-semibold">{home.price}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-primary font-semibold">HST Rebate:</span>
                        <span className="text-primary font-bold">-{home.hstRebate}</span>
                      </div>
                      <div className="pt-2 border-t border-primary/20 flex justify-between">
                        <span className="font-bold">Effective Price:</span>
                        <span className="text-xl font-bold text-primary">{home.effectivePrice}</span>
                      </div>
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
                    Flexible Deposit Structure
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">$10,000</strong> upon signing
                    </p>
                    <p>
                      <strong className="text-foreground">$5,000</strong> every 30 days for 10 payments
                    </p>
                    <div className="pl-4 pt-2 text-sm space-y-1">
                      <p>• At 30, 60, 90, 120, 150 days</p>
                      <p>• At 180, 210, 240, 270, 300 days</p>
                    </div>
                    <p className="pt-3 text-lg">
                      <strong className="text-foreground">Total Deposit: $60,000</strong>
                    </p>
                    <p className="pt-2 text-sm">
                      <strong className="text-primary">Bonus:</strong> Zero Development Charges
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Why Pre-Construction?
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      ✓ Lock in pre-construction pricing before hospital opens
                    </p>
                    <p>
                      ✓ Spread $60K deposit over 300 days (10 months)
                    </p>
                    <p>
                      ✓ POTL fee waived for 2 years (save $2,160)
                    </p>
                    <p>
                      ✓ Potential for equity growth before 2027 occupancy
                    </p>
                    <p>
                      ✓ Choose from 3 designer curated packages
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
