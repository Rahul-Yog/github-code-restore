import { Phone, Mail, MapPin } from "lucide-react";

const StoneRoseFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-accent border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">Stonerose</h3>
              <p className="text-sm text-muted-foreground">by Treasure Hill Homes</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium pre-construction townhomes near South Niagara Hospital. 
              Your healthcare relocation specialists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("overview")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("healthcare")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Healthcare Benefits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("homes")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Homes & Floor Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("relocation-guide")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Relocation Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+14169009788"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    416-900-9788
                  </a>
                  <a
                    href="tel:+14378752260"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    437-875-2260
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <a
                  href="mailto:stonerose@treasurehill.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  stonerose@treasurehill.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  3770 Montrose Road<br />
                  Niagara Falls, ON
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Stonerose by Treasure Hill Homes. All rights reserved.
            </p>
            <p className="text-center">
              Healthcare Relocation Specialist | Niagara Falls Pre-Construction Homes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StoneRoseFooter;
