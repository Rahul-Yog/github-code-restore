import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const SitePlanSectionWithModal = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Master Site Plan
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our thoughtfully designed community layout featuring green spaces, 
              walking trails, and strategically placed amenities. Our master site plan 
              ensures optimal privacy and convenience for all residents.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">120+ Home Sites</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Central Park & Playground</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Walking Trails</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Community Center</span>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Full Site Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle>Union Village Master Site Plan</DialogTitle>
                </DialogHeader>
                <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border">
                  <div className="text-center">
                    <div className="text-muted-foreground">Interactive Site Plan</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Detailed community layout with all amenities
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="text-muted-foreground text-sm mb-2">Site Plan Preview</div>
                <div className="text-xs text-muted-foreground">Click to view detailed plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SitePlanSectionWithModal;