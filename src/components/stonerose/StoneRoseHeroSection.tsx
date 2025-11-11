import { Button } from "@/components/ui/button";
import { MapPin, Heart, Home, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/stonerose-hero-lifestyle.jpg";
import heroImageMobile from "@/assets/stonerose-hero-lifestyle-mobile.jpg";

const StoneRoseHeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10" />
          <picture>
            {/* Mobile image - loads on screens smaller than 768px */}
            <source 
              media="(max-width: 767px)" 
              srcSet={heroImageMobile}
            />
            {/* Desktop image - default for larger screens */}
            <img
              src={heroImage}
              alt="Stonerose Niagara Falls - Modern family-friendly townhomes in wine country near South Niagara Hospital"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </picture>
        </div>

        {/* Trust Badges - Positioned at top of image */}
        <div className="absolute top-20 sm:top-24 left-0 right-0 z-20 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-2 justify-center items-center">
              {/* Builder Highlight */}
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-accent/95 to-accent/85 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border border-white/40 shadow-lg">
                <span className="text-sm sm:text-lg">👑</span>
                <span>Treasure Hill Homes</span>
              </div>
              
              {/* HST Badge */}
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-primary/95 backdrop-blur-md text-white px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border border-white/30 shadow-lg">
                <BadgeCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Save up to $74K</span>
              </div>
              
              {/* Phase Badge */}
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-gradient-to-r from-green-600 to-emerald-600 backdrop-blur-md text-white px-2.5 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-bold border border-green-300 shadow-lg">
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                <span className="whitespace-nowrap">Selling Phase 2 Now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1 h-2 sm:h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Content Bar Below Hero */}
      <section className="bg-background py-8 sm:py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              New Homes in Niagara Falls{" "}
              <span className="text-gradient">from Mid-$500Ks</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              Modern 3-5 bed townhomes near South Niagara Hospital
            </h2>

            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm pt-2">
              <div className="flex items-center gap-1 sm:gap-1.5 text-foreground bg-muted px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-accent" />
                <span>11 Min to Hospital</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 text-foreground bg-muted px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-accent" />
                <span>3 Min to QEW</span>
              </div>
              <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-muted text-foreground px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-accent text-accent flex-shrink-0" />
                <span>Healthcare Pros</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center pt-3 sm:pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm md:text-base px-5 py-3.5 sm:px-6 sm:py-4 md:py-5 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                onClick={() => scrollToSection("homes")}
              >
                Download Floor Plans
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-xs sm:text-sm md:text-base px-5 py-3.5 sm:px-6 sm:py-4 md:py-5 border-2 w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
              >
                Register Now
              </Button>
            </div>

            {/* Trust Signal */}
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground pt-2">
              Occupancy Spring 2027
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoneRoseHeroSection;
