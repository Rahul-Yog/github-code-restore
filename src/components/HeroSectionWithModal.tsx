import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const HeroSectionWithModal = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Column - Content */}
          <div className="max-w-xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide">
              UNION VILLAGE HOMES
            </p>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Premium Living<br />
              Exceptional Value
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Discover your dream home in Union Village, where modern design meets 
              comfortable living. Our thoughtfully planned community offers the perfect 
              blend of convenience and luxury.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                  >
                    Request Info
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Request Information</h3>
                    <p className="text-muted-foreground">
                      Get in touch with our sales team to learn more about Union Village Homes.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-3"
              >
                View Floor Plans
              </Button>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative">
            <div className="bg-background rounded-lg shadow-lg p-8">
              <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-muted-foreground text-sm mb-2">Union Village Homes</div>
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

export default HeroSectionWithModal;