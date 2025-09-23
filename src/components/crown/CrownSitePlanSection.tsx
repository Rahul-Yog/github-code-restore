import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import crownNeighborhoodMap from '@/assets/crown-neighborhood-map.jpg';

const CrownSitePlanSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Crown of Caledon Site Plan
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our thoughtfully designed community layout featuring City Townhomes, 
              Freehold Townhomes, and 38' Detached Homes. Our site plan ensures optimal 
              privacy and convenience for all residents in this premium Caledon location.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">City Townhomes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Freehold Townhomes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">38' Single Detached Homes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Open Space & Walkways</span>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View Full Site Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle>Crown of Caledon Master Site Plan</DialogTitle>
                </DialogHeader>
                <div className="w-full">
                  <img 
                    src={crownNeighborhoodMap} 
                    alt="Crown of Caledon Master Site Plan - City Townhomes, Freehold Townhomes, and 38' Detached Homes Layout"
                    className="w-full h-auto rounded-lg border"
                  />
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    This is a preliminary site plan subject to governmental approval. 
                    Dimensions & specifications are subject to change without notice.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden border border-border">
                  <img 
                    src={crownNeighborhoodMap} 
                    alt="Crown of Caledon Site Plan Preview - Caledon Community Layout"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:from-yellow-500 hover:to-yellow-700 shadow-lg px-6 py-3 rounded-lg text-lg">
                      Get Detailed Site Plan
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>Crown of Caledon Master Site Plan</DialogTitle>
              </DialogHeader>
              <div className="w-full">
                <img 
                  src={crownNeighborhoodMap} 
                  alt="Crown of Caledon Master Site Plan - City Townhomes, Freehold Townhomes, and 38' Detached Homes Layout"
                  className="w-full h-auto rounded-lg border"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  This is a preliminary site plan subject to governmental approval. 
                  Dimensions & specifications are subject to change without notice.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CrownSitePlanSection;