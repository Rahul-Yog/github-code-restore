import { Clock, Heart, Home, MapPin, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StoneRoseHealthcareSection = () => {
  const benefits = [
    {
      icon: MapPin,
      title: "Unbeatable Proximity",
      description: "Just 11 minutes from $3.6 billion South Niagara Hospital. Your commute will be quick and easy, giving you more time for what matters."
    },
    {
      icon: Clock,
      title: "Shift-Friendly Living",
      description: "Quick access to QEW and major routes. Perfect for early morning or late-night shifts with minimal commute stress."
    },
    {
      icon: Home,
      title: "Affordable Ownership",
      description: "Starting mid-$500Ks for up to 5 bedrooms with 2-car garage. Save $200K-$300K compared to similar GTA homes."
    },
    {
      icon: Users,
      title: "Healthcare Community",
      description: "Join fellow doctors, nurses, and healthcare professionals who've chosen Niagara for its lifestyle and affordability."
    },
    {
      icon: TrendingUp,
      title: "Investment Potential",
      description: "Hospital infrastructure drives long-term property appreciation. Secure your home now before prices increase."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Niagara offers natural beauty, recreation, and family-friendly amenities just minutes from your doorstep."
    }
  ];

  return (
    <section id="healthcare" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Healthcare Professionals' Top Choice
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Healthcare Professionals Choose{" "}
              <span className="text-primary">Stonerose</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand the unique needs of healthcare workers. Stonerose offers the perfect 
              combination of proximity, affordability, and lifestyle for those relocating to Niagara's 
              growing healthcare corridor.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">11min</div>
                <div className="text-sm text-muted-foreground">to South Niagara Hospital</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">$3.6B</div>
                <div className="text-sm text-muted-foreground">Hospital Investment</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">Mid-$500K</div>
                <div className="text-sm text-muted-foreground">Starting Price</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">2027</div>
                <div className="text-sm text-muted-foreground">First Occupancy</div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Placeholder */}
          <Card className="mt-12 bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-foreground italic mb-4">
                    "I'm securing my home at Stonerose now, ahead of my position at the new South Niagara Hospital. 
                    The 11-minute commute will be perfect, and I'm locking in pre-construction pricing before the hospital 
                    opens in 2028 and the market appreciates."
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    — Future Resident, Healthcare Professional
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

export default StoneRoseHealthcareSection;
