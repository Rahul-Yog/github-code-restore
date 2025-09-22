import React from 'react';
import { Separator } from '@/components/ui/separator';

const UnionVillageFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Crown of Caledon</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Building exceptional communities where natural beauty meets modern luxury. 
              Your dream home awaits in Crown of Caledon.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#overview" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#homes" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home Collection
                </a>
              </li>
              <li>
                <a href="#location" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>
                  <div className="font-medium">Sales Information</div>
                  <div>Monday - Saturday: 10am - 6pm</div>
                  <div>Sunday: 12pm - 5pm</div>
                </div>
                <div className="mt-3">
                  <div>Phone: (905) 270-8880</div>
                  <div>Email: info@crownofcaledon.ca</div>
                </div>
              </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4">Visit Us</h4>
            <div className="text-sm text-primary-foreground/80">
              <div className="mb-2">
                Crown of Caledon<br />
                Gateway of Caledon<br />
                Caledon, ON
              </div>
              <div className="text-xs">
                Coming Soon - Register for Updates
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
            <div className="mb-4 md:mb-0">
              © 2024 Crown of Caledon. All rights reserved. Developed by Fieldgate Homes.
            </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UnionVillageFooter;