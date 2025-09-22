import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign } from 'lucide-react';
import heroImage from '@/assets/hero-union-village-new.jpg';

const HeroSection = () => {
  console.log('HeroSection rendering...');
  
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <MapPin className="w-4 h-4 mr-1" />
            16th & Kennedy
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <DollarSign className="w-4 h-4 mr-1" />
            $1.4M+
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <Clock className="w-4 h-4 mr-1" />
            2026
          </Badge>
          <Badge variant="secondary" className="bg-accent/90 text-primary border-accent">
            Phase 2
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to<br />
          <span className="text-accent">Union Village</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-white/90">
          Premium Unionville Houses For Sale
        </p>
        
        <p className="text-lg mb-8 max-w-3xl mx-auto text-white/80 leading-relaxed">
          Discover luxury Unionville homes for sale in Markham's most sought-after master-planned community. 
          Where modern design meets small-town charm, crafted by award-winning developers.
        </p>

        {/* Developer Info */}
        <div className="mb-8">
          <p className="text-white/70 mb-2">Developed by</p>
          <p className="text-accent font-semibold text-lg">
            The Minto Group • Metropia
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8">
            Get Exclusive Floor Plans
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10">
            Explore Community
          </Button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            Pre-construction pricing available now
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            Floor plans & pricing sheets sent instantly
          </div>
          <div className="flex items-center">
            <span className="text-green-400 mr-2">✓</span>
            No obligation consultation
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;