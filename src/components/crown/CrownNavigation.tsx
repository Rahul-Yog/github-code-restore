import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import crownLogo from "@/assets/crown-logo-updated-v2.png";

const CrownNavigation = () => {
  console.log('CrownNavigation component rendering...');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={crownLogo} 
              alt="Crown of Caledon" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#new-homes-caledon"
                onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                title="New Homes in Caledon - Crown Development Overview"
              >
                New Homes Caledon
              </a>
              <a 
                href="#caledon-location"
                onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                title="Caledon Location and Neighbourhood Information"
              >
                Caledon Location
              </a>
              <a 
                href="#caledon-homes-for-sale"
                onClick={(e) => { e.preventDefault(); scrollToSection('homes'); }}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                title="Caledon Homes for Sale - Floor Plans and Pricing"
              >
                Caledon Homes for Sale
              </a>
              <a 
                href="#community-amenities"
                onClick={(e) => { e.preventDefault(); scrollToSection('amenities'); }}
                className="text-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                title="Community Amenities and Features"
              >
                Community Amenities
              </a>
            </div>
          </div>

          {/* Call Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
              asChild
            >
              <a href="#floor-plans" title="Get Exclusive Floor Plans for Crown of Caledon Homes">
                Get Floor Plans
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a
              href="#new-homes-caledon"
              onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
              title="New Homes in Caledon - Crown Development Overview"
            >
              New Homes Caledon
            </a>
            <a
              href="#caledon-location"
              onClick={(e) => { e.preventDefault(); scrollToSection('location'); }}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
              title="Caledon Location and Neighbourhood Information"
            >
              Caledon Location
            </a>
            <a
              href="#caledon-homes-for-sale"
              onClick={(e) => { e.preventDefault(); scrollToSection('homes'); }}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
              title="Caledon Homes for Sale - Floor Plans and Pricing"
            >
              Caledon Homes for Sale
            </a>
            <a
              href="#community-amenities"
              onClick={(e) => { e.preventDefault(); scrollToSection('amenities'); }}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md w-full text-left"
              title="Community Amenities and Features"
            >
              Community Amenities
            </a>
            <div className="px-3 py-2">
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get Floor Plans
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CrownNavigation;