import { Button } from "@/components/ui/button";
import { MapPin, Heart, Home } from "lucide-react";

const StoneRoseHeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <img
          src="/placeholder.svg"
          alt="Stonerose Niagara Falls Townhomes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="w-4 h-4" />
            Preferred by Healthcare Heroes
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Find Your New Home Minutes from{" "}
            <span className="text-primary">Niagara's New Hospital</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Modern Townhomes from <span className="font-bold text-primary">$500Ks</span> | 
            8km to South Niagara Hospital | 
            Perfect for Healthcare Professionals
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>8km to Hospital</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Home className="w-5 h-5 text-primary" />
              <span>Pre-Construction Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Heart className="w-5 h-5 text-primary" />
              <span>Healthcare Relocation Specialist</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              onClick={() => scrollToSection("relocation-guide")}
            >
              Download Free Relocation Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2"
              onClick={() => scrollToSection("contact")}
            >
              Schedule Private Tour
            </Button>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-muted-foreground pt-4">
            Built by <span className="font-semibold text-foreground">Treasure Hill Homes</span> | 
            Opening 2026 | South Niagara Hospital Opening 2028
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseHeroSection;
