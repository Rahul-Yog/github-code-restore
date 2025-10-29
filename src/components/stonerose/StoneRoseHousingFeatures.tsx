import { Moon, Wifi, Home, DollarSign, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StoneRoseHousingFeatures = () => {
  const shiftWorkerFeatures = [
    {
      icon: Moon,
      title: "Soundproofing",
      description: "Modern construction for better rest between shifts"
    },
    {
      icon: Moon,
      title: "Light Control",
      description: "Window coverings can support daytime sleep needs"
    },
    {
      icon: Home,
      title: "Quality Construction",
      description: "Built with attention to comfort and livability"
    },
    {
      icon: Clock,
      title: "Climate Control",
      description: "Modern HVAC systems for personalized comfort"
    }
  ];

  const telehealthFeatures = [
    {
      icon: Wifi,
      title: "Internet Connectivity",
      description: "Area offers high-speed internet options for telehealth"
    },
    {
      icon: Home,
      title: "Flexible Layouts",
      description: "Versatile spaces that can adapt to work-from-home needs"
    },
    {
      icon: Moon,
      title: "Quiet Community",
      description: "Peaceful neighborhood ideal for professional calls"
    }
  ];

  const specialPrograms = [
    {
      icon: DollarSign,
      title: "Professional Financing",
      description: "Explore mortgage options tailored for healthcare professionals"
    },
    {
      icon: Shield,
      title: "Pre-Construction Benefits",
      description: "Extended deposit structure during the construction period"
    },
    {
      icon: Clock,
      title: "Flexible Timeline",
      description: "Pre-construction allows planning around your career transition"
    }
  ];

  return (
    <section id="housing-features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Considerations for Healthcare Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What healthcare professionals look for when choosing a home near the new South Niagara Hospital. 
              Modern features and flexible options for your unique lifestyle.
            </p>
          </div>

          {/* Shift Worker Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Moon className="w-6 h-6 text-primary" />
              Considerations for Shift Workers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {shiftWorkerFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Telehealth Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Wifi className="w-6 h-6 text-primary" />
              Telehealth & Remote Work Ready
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {telehealthFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Special Programs */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              Potential Benefits to Explore
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {specialPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <Card key={index} className="border-2 border-primary/30 hover:border-primary transition-all bg-primary/5">
                    <CardContent className="p-6">
                      <Icon className="w-10 h-10 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{program.title}</h4>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Questions About Features and Options?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to learn more about available features, floor plans, and financing options that may benefit healthcare professionals.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Our Relocation Specialist
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseHousingFeatures;
