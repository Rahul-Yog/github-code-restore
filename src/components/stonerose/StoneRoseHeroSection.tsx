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
        <div className="max-w-4xl mx-auto text-center space-y-4">
          {/* Builder Highlight */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/90 to-accent/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-white/40 shadow-lg">
            <span className="text-lg">👑</span>
            <span>Treasure Hill Homes</span>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <div className="inline-flex items-center gap-1.5 bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold border border-white/30 shadow-lg">
              <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">Save up to $74K HST</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-600 to-emerald-600 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold border border-green-300 shadow-lg">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">24 Homes Available</span>
            </div>
          </div>

          {/* Main Headline - Optimized for broad "Homes for Sale Niagara Falls" keyword */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            New Homes in Niagara Falls{" "}
            <span className="text-gradient">from Mid-$500Ks</span>
          </h1>

          {/* Subheadline - Balancing broad appeal with niche positioning */}
          <h2 className="text-base md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md font-semibold">
            Modern 3-5 bed townhomes near South Niagara Hospital
          </h2>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span>11 Min to Hospital</span>
            </div>
            <div className="flex items-center gap-1.5 text-white bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
              <span>3 Min to QEW</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-sm sm:text-base px-6 py-4 sm:py-5 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
              onClick={() => scrollToSection("homes")}
            >
              Download Floor Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/50 hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base px-6 py-4 sm:py-5 border-2 w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Register Now
            </Button>
          </div>

          {/* Healthcare Badge - Smaller, below CTAs */}
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-2.5 py-1.5 rounded-full text-xs font-semibold border border-white/30">
            <Heart className="w-3 h-3 fill-white flex-shrink-0" />
            <span>Healthcare Professionals</span>
          </div>

          {/* Trust Signal */}
          <p className="text-xs sm:text-sm text-white/80">
            Occupancy Spring 2027
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
