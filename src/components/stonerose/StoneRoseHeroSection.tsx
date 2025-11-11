import { Button } from "@/components/ui/button";
import { MapPin, Heart, Home, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/stonerose-hero-lifestyle.jpg";

const StoneRoseHeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 stonerose-hero-gradient z-10" />
        <img
          src={heroImage}
          alt="Stonerose Niagara Falls - Modern family-friendly townhomes in wine country near South Niagara Hospital"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Builder Highlight */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/90 to-accent/80 backdrop-blur-md text-white px-6 py-3 rounded-full text-base sm:text-lg lg:text-xl font-bold border-2 border-white/40 shadow-2xl">
            <span className="text-2xl">👑</span>
            <span>Built by Treasure Hill Homes - Award-Winning Builder</span>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 bg-primary/90 backdrop-blur-md text-white px-4 py-2.5 sm:px-5 sm:py-2.5 lg:px-8 lg:py-4 rounded-full text-xs sm:text-sm lg:text-base xl:text-lg font-bold border-2 border-white/30 shadow-2xl">
              <BadgeCheck className="w-4 h-4 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex-shrink-0" />
              <span className="whitespace-nowrap">First-Time Buyers Save up to $74K HST</span>
            </div>
            <div className="inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 bg-gradient-to-r from-green-600 to-emerald-600 backdrop-blur-md text-white px-4 py-2.5 sm:px-5 sm:py-2.5 lg:px-8 lg:py-4 rounded-full text-xs sm:text-sm lg:text-base xl:text-lg font-bold border-2 border-green-300 shadow-2xl">
              <Home className="w-4 h-4 sm:w-4 sm:h-4 lg:w-6 lg:h-6 flex-shrink-0" />
              <span className="whitespace-nowrap">Phase 1 - 24 Homes Available</span>
            </div>
          </div>

          {/* Main Headline - Optimized for broad "Homes for Sale Niagara Falls" keyword */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            New Homes for Sale in Niagara Falls:{" "}
            <span className="text-gradient">Pre-Construction from Mid-$500Ks</span>
          </h1>

          {/* Subheadline - Balancing broad appeal with niche positioning */}
          <h2 className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md font-semibold">
            Modern 3-5 bedroom townhomes near South Niagara Hospital. 
            Perfect for healthcare professionals, families, and investors.
          </h2>

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
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              onClick={() => scrollToSection("homes")}
            >
              Download Floor Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Register Now
            </Button>
          </div>

          {/* Healthcare Badge - Smaller, below CTAs */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-3 py-2 rounded-full text-xs sm:text-sm font-semibold border border-white/30">
            <Heart className="w-3 h-3 fill-white flex-shrink-0" />
            <span>Preferred by Healthcare Professionals</span>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-white/80 pt-2">
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
