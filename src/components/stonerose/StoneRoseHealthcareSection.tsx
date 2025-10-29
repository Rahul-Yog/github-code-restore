import { Clock, Heart, Home, MapPin, TrendingUp, Users, Calculator, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StoneRoseHealthcareComparison from "./StoneRoseHealthcareComparison";

const StoneRoseHealthcareSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    {
      icon: MapPin,
      title: "Unbeatable Proximity",
      description: "Just 11 minutes from $3.6B South Niagara Hospital. Quick, easy commute means more time for what matters most."
    },
    {
      icon: Clock,
      title: "Shift-Friendly Living",
      description: "Perfect for healthcare workers:\n• Easy QEW access\n• Quick commute for any shift\n• Minimal travel stress"
    },
    {
      icon: Home,
      title: "Affordable Ownership",
      description: "Key benefits:\n• Starting mid-$500Ks\n• Up to 5 bedrooms + garage\n• Save $200K-$300K vs GTA"
    },
    {
      icon: Users,
      title: "Healthcare Community",
      description: "Join 27+ healthcare professionals who've already secured homes at Stonerose."
    },
    {
      icon: TrendingUp,
      title: "Investment Potential",
      description: "Hospital opens 2028:\n• Property values rising\n• Pre-construction pricing\n• Strong ROI projected"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Niagara lifestyle:\n• Natural beauty nearby\n• Recreation & amenities\n• Family-friendly community"
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
              South Niagara Hospital Homes:{" "}
              <span className="text-primary">Your Smart Investment</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Live 11 minutes from Ontario's newest healthcare facility. Secure your home now before the hospital opens in 2028.
            </p>
          </div>

          {/* Hospital Development Details - NEW SECTION */}
          <Card className="mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                About South Niagara Hospital Development
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary mb-3">Facility Specifications</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>1.3 million square feet</strong> of state-of-the-art healthcare space</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>469 private patient beds</strong> for optimal care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>40+ specialized departments</strong> and clinical services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>$3.6 billion investment</strong> in healthcare infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span><strong>3,500+ new jobs</strong> created for healthcare professionals</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary mb-3">Construction Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">2023: Construction Began</p>
                        <p className="text-sm text-muted-foreground">Groundbreaking and foundation work started</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground">2024-2027: Active Construction</p>
                        <p className="text-sm text-muted-foreground">Major building phases and infrastructure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full mt-1.5 flex-shrink-0 animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-foreground">Summer 2028: Grand Opening</p>
                        <p className="text-sm text-muted-foreground">Hospital opens to serve the community</p>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold text-primary mb-3 mt-6">Key Departments</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Emergency Care", "Cancer Treatment", "Surgical Services", "Mental Health", "Imaging & Diagnostics", "Maternal Care", "Pediatrics", "Intensive Care"].map((dept) => (
                      <span key={dept} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Choose Stonerose */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Healthcare Workers Choose Stonerose
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Smart location. Affordable pricing. Quality lifestyle. Join 27+ healthcare professionals already living here.
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
                    <p className="text-muted-foreground whitespace-pre-line">
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
                <div className="text-2xl md:text-4xl font-bold text-primary mb-2">Mid-$500K</div>
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

          {/* Comparison Table */}
          <StoneRoseHealthcareComparison />

          {/* Healthcare-Specific CTAs */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Calculate Your Commute Savings
                </h3>
                <p className="text-muted-foreground mb-4">
                  See how much you'll save on gas, time, and vehicle maintenance living 11 minutes from the hospital
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Savings Report
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Healthcare Professional Incentives
                </h3>
                <p className="text-muted-foreground mb-4">
                  Exclusive benefits for doctors, nurses, and healthcare workers relocating to Niagara
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("contact")}
                >
                  See Healthcare Incentives
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof & Testimonial */}
          <Card className="mt-12 bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Users className="w-4 h-4" />
                  Join 27 Healthcare Professionals Who've Already Secured Their Homes
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-foreground italic mb-4">
                    "I secured my home at Stonerose during pre-construction. With the hospital opening in 2028, the 11-minute commute will be perfect. Locking in early pricing was the smartest investment decision."
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    — Registered Nurse, Future Resident
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
