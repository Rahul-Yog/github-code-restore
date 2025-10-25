import { Button } from "@/components/ui/button";
import { MapPin, Heart, Home } from "lucide-react";
import heroImage from "@/assets/stonerose-hero-niagara.jpg";

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
        <div className="absolute inset-0 stonerose-hero-gradient z-10" />
        <img
          src={heroImage}
          alt="Stonerose Niagara Falls Townhomes - Panoramic view of Niagara Falls with cityscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="inline-flex items-center gap-3 bg-accent/90 backdrop-blur-md text-white px-8 py-4 rounded-full text-base md:text-lg font-bold border-2 border-white/30 shadow-2xl animate-pulse">
              <Heart className="w-6 h-6 fill-white" />
              Preferred by Healthcare Professionals
            </div>
            <div className="inline-flex items-center gap-3 bg-primary/90 backdrop-blur-md text-white px-8 py-4 rounded-full text-base md:text-lg font-bold border-2 border-white/30 shadow-2xl">
              <Home className="w-6 h-6" />
              Phase 1 - 24 Homes
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Find Your New Home Minutes from{" "}
            <span className="text-gradient">Niagara's New Hospital</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            Modern Townhomes Starting Mid <span className="font-bold text-accent">$500Ks</span> | 
            11 Minutes to South Niagara Hospital | 
            Up to 5 Bedrooms with 2-Car Garage
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-accent" />
              <span>11 Min to Hospital</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Home className="w-5 h-5 text-accent" />
              <span>3 Min to QEW</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-5 h-5 text-accent" />
              <span>Award-Winning Builder</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={() => scrollToSection("relocation-guide")}
            >
              Download Free Relocation Guide
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 border-2"
              onClick={() => scrollToSection("contact")}
            >
              Schedule Private Tour
            </Button>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-white/80 pt-4">
            Built by <span className="font-semibold text-white">Treasure Hill Homes</span> | 
            First Occupancy Spring 2027 | South Niagara Hospital Opening Summer 2028
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default StoneRoseHeroSection;
