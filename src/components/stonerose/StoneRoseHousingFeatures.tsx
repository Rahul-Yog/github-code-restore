import { Moon, Wifi, Home, DollarSign, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StoneRoseHousingFeatures = () => {
  const shiftWorkerFeatures = [
    {
      icon: Moon,
      title: "Soundproofing",
      description: "Sleep soundly between shifts with enhanced wall insulation"
    },
    {
      icon: Moon,
      title: "Blackout Features",
      description: "Blackout blinds included for daytime rest after night shifts"
    },
    {
      icon: Home,
      title: "Quiet-Close Doors",
      description: "Soft-close technology throughout to minimize noise"
    },
    {
      icon: Clock,
      title: "Zoned HVAC",
      description: "Individual climate control for personalized comfort"
    }
  ];

  const telehealthFeatures = [
    {
      icon: Wifi,
      title: "Pre-Wired Internet",
      description: "High-speed fiber-ready for telehealth consultations"
    },
    {
      icon: Home,
      title: "Home Office Ready",
      description: "Flexible spaces perfect for virtual appointments"
    },
    {
      icon: Moon,
      title: "Acoustic Design",
      description: "Noise reduction features for professional video calls"
    }
  ];

  const specialPrograms = [
    {
      icon: DollarSign,
      title: "Healthcare Professional Rates",
      description: "Special mortgage rates for doctors, nurses, and medical staff"
    },
    {
      icon: Shield,
      title: "Reduced Down Payment",
      description: "Lower down payment options for healthcare workers"
    },
    {
      icon: Clock,
      title: "Flexible Closing",
      description: "Closing dates that work with your hospital start date"
    }
  ];

  return (
    <section id="housing-features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare-Specific Housing Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Designed with the unique needs of healthcare professionals in mind. 
              From shift work to telehealth, we've thought of everything.
            </p>
          </div>

          {/* Shift Worker Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Moon className="w-6 h-6 text-primary" />
              Features for Shift Workers
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
              Exclusive Healthcare Professional Programs
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
                Ready to Learn More About Healthcare Benefits?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to discover all the exclusive features and programs available for healthcare professionals at Stonerose.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Our Healthcare Specialist
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseHousingFeatures;
