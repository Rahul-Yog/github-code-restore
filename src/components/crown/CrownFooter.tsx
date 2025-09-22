import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CrownFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Crown of Caledon</h3>
            <p className="text-primary-foreground/80">
              Luxury homes in beautiful Caledon, Ontario.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-accent">Home</a></li>
              <li><a href="#properties" className="hover:text-accent">Properties</a></li>
              <li><a href="#amenities" className="hover:text-accent">Amenities</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Phone: 647-555-0199</li>
              <li>Email: info@crownofcaledon.com</li>
              <li>Caledon, Ontario</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary-foreground/80 hover:text-accent"
                  onClick={() => navigate('/privacy-policy')}
                >
                  Privacy Policy
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Crown of Caledon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CrownFooter;