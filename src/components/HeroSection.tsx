import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="bg-muted relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">
              WHERE CALEDON MEETS BRAMPTON
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              FREEHOLD TOWNHOMES<br />
              38' & 60' SINGLES
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Crown of Caledon is a great new real estate opportunity located conveniently on the 
              Caledon and Brampton border. This upcoming community is designed with families, 
              professionals and investors in mind.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Request Info
            </Button>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-background rounded-lg shadow-lg p-8">
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm mb-2">Crown of Caledon</div>
                  <div className="text-xs text-muted-foreground">Luxury Home Rendering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;