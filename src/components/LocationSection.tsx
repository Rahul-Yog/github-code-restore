import React from 'react';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  return (
    <section id="location" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Prime Location – The Best of Two Worlds
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Caledon is known for its quiet, picturesque lands, hilly terrain and great community. 
              In contrast, Brampton is a dynamic, multicultural city with access to modern amenities, 
              excellent schools and accessibility. At Crown of Caledon, you have the best of both worlds!
            </p>
            
            {/* Location Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-primary mb-4">Caledon Benefits</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quiet, picturesque countryside</li>
                  <li>• Beautiful hilly terrain</li>
                  <li>• Strong community atmosphere</li>
                  <li>• Natural beauty and open spaces</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-primary mb-4">Brampton Access</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Modern urban amenities</li>
                  <li>• Excellent school systems</li>
                  <li>• Transit accessibility</li>
                  <li>• Multicultural community</li>
                </ul>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              Learn More About Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;