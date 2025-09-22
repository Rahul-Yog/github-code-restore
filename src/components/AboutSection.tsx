import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="overview" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-muted rounded-lg shadow-lg p-8">
              <div className="aspect-[4/3] bg-background rounded-lg flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm mb-2">Community Overview</div>
                  <div className="text-xs text-muted-foreground">Aerial View Rendering</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              Discover Crown of Caledon – Your Gateway to the Best of 
              Caledon and Brampton
            </h2>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                <strong>Crown of Caledon</strong> is a great new real estate opportunity located 
                conveniently on the Caledon and Brampton border. This upcoming community is 
                designed with families, professionals and investors in mind who want the best 
                of both worlds, being close to urban amenities while enjoying nature.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Crown of Caledon promises an exemplary lifestyle, a deal on your property, 
                and long-term value in one of Ontario's fastest developing regions whether 
                you want a place to call home in the country or looking for an investment 
                with future potential.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Request Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;