import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import stoneroseLogo from "@/assets/stonerose-logo-black.png";

const StoneRoseNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/niagara-falls-homes-near-hospital" className="flex items-center">
              <img src={stoneroseLogo} alt="Stonerose by Treasure Hill" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("healthcare")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Healthcare Benefits
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("site-plan")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Site Plan
            </button>
            <button
              onClick={() => scrollToSection("homes")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Homes & Floor Plans
            </button>
            <button
              onClick={() => scrollToSection("relocation-guide")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Relocation Guide
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90"
            >
              Schedule Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("overview")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("healthcare")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              Healthcare Benefits
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              Location
            </button>
            <button
              onClick={() => scrollToSection("site-plan")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              Site Plan
            </button>
            <button
              onClick={() => scrollToSection("homes")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              Homes & Floor Plans
            </button>
            <button
              onClick={() => scrollToSection("relocation-guide")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md"
            >
              Relocation Guide
            </button>
            <div className="px-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Schedule Tour
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StoneRoseNavigation;
