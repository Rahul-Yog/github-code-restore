import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-xs font-medium opacity-80">FIELDGATE</div>
              <div className="h-4 w-px bg-primary-foreground/30"></div>
              <div className="text-lg font-bold">Crown of Caledon</div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Where Caledon meets Brampton. Luxury freehold townhomes and 
              single-family homes in one of Ontario's most desirable locations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#overview" className="hover:text-primary-foreground transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-primary-foreground transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Sales Centre Coming Soon</p>
              <p>Caledon, Ontario</p>
              <p className="pt-2">
                <a href="mailto:info@crownofcaledon.com" className="hover:text-primary-foreground transition-colors">
                  info@crownofcaledon.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/60">
            © 2024 Crown of Caledon by Fieldgate Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;