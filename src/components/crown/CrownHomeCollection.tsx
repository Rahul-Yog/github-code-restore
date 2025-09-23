import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Home, Star, Filter, ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useState } from 'react';
import ContactModal from '@/components/crown/CrownContactModal';

// Import elevation images
import estateHome1ElevA from '@/assets/estate-home-1-elev-a.png';
import estateHome1ElevB from '@/assets/estate-home-1-elev-b.png';
import estateHome1ElevC from '@/assets/estate-home-1-elev-c.png';
import endUnitElevA from '@/assets/abbey-elev-a.png';
import endUnitElevB from '@/assets/abbey-elev-b.png';
import endUnitElevC from '@/assets/abbey-elev-c.png';
import freeholdCorner from '@/assets/freehold-corner.png';
import freeholdElevB from '@/assets/freehold-elev-b.png';
import freeholdElevC from '@/assets/freehold-elev-c.png';
import cityHomeElevA from '@/assets/town-elev-a.png';
import cityHomeElevB from '@/assets/town-elev-b.png';
import cityHomeElevC from '@/assets/town-elev-c.png';
import floorPlanTeaser from '@/assets/floor-plan-teaser.jpg';

// Import new crown-free compact home elevation images
import compactHome1ElevC from '@/assets/compact-home-1-elev-c.png';
import compactHome2ElevA from '@/assets/compact-home-2-elev-a.png';
import compactHome2ElevB from '@/assets/compact-home-2-elev-b.png';
import compactHome3ElevB from '@/assets/compact-home-3-elev-b.png';
import compactHome3ElevC from '@/assets/compact-home-3-elev-c.png';

// Import new executive home elevation images
import estateHome2ElevA from '@/assets/estate-home-2-elev-a.png';
import estateHome2ElevB from '@/assets/estate-home-2-elev-b.png';
import estateHome2ElevC from '@/assets/estate-home-2-elev-c.png';
import estateHome3ElevA from '@/assets/estate-home-3-elev-a.png';
import estateHome3ElevB from '@/assets/estate-home-3-elev-b.png';
import estateHome3ElevC from '@/assets/estate-home-3-elev-c.png';
import estateHome4ElevA from '@/assets/estate-home-4-elev-a.png';
import estateHome4ElevB from '@/assets/estate-home-4-elev-b.png';

// Import luxury estate home elevation images
import luxuryEstate1ElevA from '@/assets/luxury-estate-1-elev-a.png';
import luxuryEstate1ElevB from '@/assets/luxury-estate-1-elev-b.png';
import luxuryEstate1ElevC from '@/assets/luxury-estate-1-elev-c.png';

// Import new first carousel detached home images
import jubileeElevC from '@/assets/jubilee-elev-c.png';
import monarchElevA from '@/assets/monarch-elev-a.png';
import monarchElevB from '@/assets/monarch-elev-b.png';
import tiaraElevA from '@/assets/tiara-elev-a.png';
import tiaraElevB from '@/assets/tiara-elev-b.png';
import tiaraElevC from '@/assets/tiara-elev-c.png';
import traditionElevA from '@/assets/tradition-elev-a.png';
import traditionElevB from '@/assets/tradition-elev-b.png';
import traditionElevC from '@/assets/tradition-elev-c.png';

// Import new second carousel executive home images
import castleElevA from '@/assets/castle-elev-a.png';
import castleElevC from '@/assets/castle-elev-c.png';
import dominionElevA from '@/assets/dominion-elev-a.png';
import dominionElevB from '@/assets/dominion-elev-b.png';
import dominionElevC from '@/assets/dominion-elev-c.png';
import regalElevA from '@/assets/regal-elev-a.png';
import regalElevB from '@/assets/regal-elev-b.png';
import regalElevC from '@/assets/regal-elev-c.png';
import throneElevB from '@/assets/throne-elev-b.png';
import throneElevC from '@/assets/throne-elev-c.png';

// Import new third carousel luxury estate home images
import dominionElevC2 from '@/assets/dominion-elev-c-2.png';
import grandElev from '@/assets/grand-elev.png';
import majestyElev from '@/assets/majesty-elev.png';
import royalElev from '@/assets/royal-elev.png';

const CrownHomeCollection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('townhomes');
  const [showAllCollections, setShowAllCollections] = useState(false);
  const [showQuickMatch, setShowQuickMatch] = useState(false);

  // Reorganized collections with categories and tiers
  const featuredCollections = [
    'premium-estate', // Placeholder for Premium Estate
    'freehold-townhomes',
    'compact-home-2', 
    'compact-home-3'
  ];

  const townhomeCollections = [
    {
      id: 'city-townhomes',
      title: 'City Townhomes',
      subtitle: 'Urban Living Collection',
      description: 'Modern townhome designs featuring multiple architectural elevations in the heart of the community.',
      category: 'townhome',
      tier: 'starter',
      elevations: 4,
      images: [cityHomeElevA, cityHomeElevB, cityHomeElevC],
      features: ['3 Bedrooms', '2.5-3 Bathrooms', '1 Car Garage', '1,602-1,620 sq ft'],
      priceRange: 'Starting from $730K',
      badge: 'Most Popular',
      available: true,
      units: 'Multiple units available'
    },
    {
      id: 'end-units-city-townhomes',
      title: 'End Unit Townhomes',
      subtitle: 'Premium End Units',
      description: 'Premium end unit townhomes with enhanced privacy and additional windows.',
      category: 'townhome',
      tier: 'starter',
      elevations: 3,
      images: [endUnitElevA, endUnitElevB, endUnitElevC],
      features: ['3 Bedrooms', '2.5-3 Bathrooms', '1 Car Garage', '1,620+ sq ft'],
      priceRange: 'Starting from $830K',
      badge: 'End Unit Premium',
      available: true,
      units: 'Limited availability'
    },
    {
      id: 'freehold-townhomes',
      title: 'Freehold Townhomes',
      subtitle: 'Premium Ownership Collection',
      description: 'Spacious freehold townhomes with multiple elevation designs and corner units available.',
      category: 'townhome',
      tier: 'premium',
      elevations: 5,
      images: [freeholdCorner, freeholdElevB, freeholdElevC],
      features: ['3-4 Bedrooms', '3-4 Bathrooms', '2 Car Garage', '1,800+ sq ft'],
      priceRange: 'Starting from $780K',
      badge: 'Freehold Ownership',
      available: true,
      units: 'Phase 1 pricing'
    }
  ];

  const detachedCollections = [
    {
      id: 'premium-estate',
      title: 'Crown Luxury Estate Collection',
      subtitle: 'Ultra-Premium Estate Homes',
      description: 'Exclusive luxury estate homes featuring Grand, Majesty, Royal, and Premium Dominion architectural designs on premier lots.',
      category: 'detached',
      tier: 'luxury',
      elevations: 4,
      images: [grandElev, majestyElev, royalElev, dominionElevC2],
      features: ['5-6 Bedrooms', '4-5 Bathrooms', '3 Car Garage', '3,500+ sq ft'],
      priceRange: 'Starting from $1.65M',
      badge: 'Luxury Estate',
      available: true,
      featured: true,
      units: 'Exclusive estate lots'
    },
    {
      id: 'compact-home-2',
      title: 'Crown Signature Collection',
      subtitle: 'Featured Detached Homes',
      description: 'Premium detached homes showcasing multiple architectural styles including Jubilee, Monarch, Tiara, and Tradition models.',
      category: 'detached',
      tier: 'starter',
      elevations: 9,
      images: [jubileeElevC, monarchElevA, monarchElevB, tiaraElevA, tiaraElevB, tiaraElevC, traditionElevA, traditionElevB, traditionElevC],
      features: ['3-5 Bedrooms', '2.5-4 Bathrooms', '2 Car Garage', '1,800-2,400 sq ft'],
      priceRange: 'Starting from $899K',
      badge: 'New Collection',
      available: true,
      units: 'Multiple designs available'
    },
    {
      id: 'compact-home-1',
      title: 'Classic Compact Homes',
      subtitle: 'Compact Living Collection',
      description: 'Traditional detached homes featuring timeless elevation styles with classic architectural details.',
      category: 'detached',
      tier: 'starter',
      elevations: 3,
      images: [estateHome1ElevA, estateHome1ElevB, estateHome1ElevC],
      features: ['3-4 Bedrooms', '2.5-3 Bathrooms', '2 Car Garage', '1,500-1,700 sq ft'],
      priceRange: 'Starting from $750K',
      badge: 'Family Favorite',
      available: true,
      units: 'Multiple lots available'
    },
    {
      id: 'compact-home-4',
      title: 'Executive Compact Homes',
      subtitle: 'Compact Living Collection',
      description: 'Sophisticated detached homes featuring distinctive elevation designs with contemporary styling.',
      category: 'detached',
      tier: 'starter',
      elevations: 1,
      images: [compactHome1ElevC],
      features: ['3-4 Bedrooms', '2.5-3 Bathrooms', '2 Car Garage', '1,600-1,800 sq ft'],
      priceRange: 'Starting from $780K',
      badge: 'Executive Style',
      available: true,
      units: '12 lots available'
    },
    {
      id: 'compact-home-3',
      title: 'Luxury Compact Homes',
      subtitle: 'Compact Living Collection',
      description: 'Premium detached homes with luxury elevation designs and high-end finishes throughout.',
      category: 'detached',
      tier: 'starter',
      elevations: 2,
      images: [compactHome3ElevB, compactHome3ElevC],
      features: ['4 Bedrooms', '3-3.5 Bathrooms', '2 Car Garage', '1,800-2,000 sq ft'],
      priceRange: 'Starting from $820K',
      badge: 'Luxury Features',
      available: true,
      units: '6 lots remaining'
    },
    {
      id: 'family-home-1',
      title: 'Crown Executive Collection',
      subtitle: 'Premium Executive Homes',
      description: 'Sophisticated executive homes featuring Castle, Dominion, Regal, and Throne architectural designs with luxury finishes.',
      category: 'detached',
      tier: 'premium',
      elevations: 10,
      images: [castleElevA, castleElevC, dominionElevA, dominionElevB, dominionElevC, regalElevA, regalElevB, regalElevC, throneElevB, throneElevC],
      features: ['4-5 Bedrooms', '3.5-4 Bathrooms', '2-3 Car Garage', '2,400-2,800 sq ft'],
      priceRange: 'Starting from $1.15M',
      badge: 'Executive Collection',
      available: true,
      units: 'Premium lots available'
    },
    {
      id: 'family-home-2',
      title: 'Premium Executive Homes',
      subtitle: 'Executive Homes Collection',
      description: 'Premium executive homes featuring distinctive architectural designs with open-concept layouts.',
      category: 'detached',
      tier: 'premium',
      elevations: 4,
      images: [estateHome3ElevA, estateHome3ElevB, estateHome3ElevC, estateHome4ElevA],
      features: ['4-5 Bedrooms', '4-4.5 Bathrooms', '2-3 Car Garage', '2,400-2,800 sq ft'],
      priceRange: 'Starting from $1.05M',
      badge: 'Premium Features',
      available: true,
      units: '15 lots available'
    }
  ];

  // Size-based categories for detached homes based on floor plan brochure
  const sizeCategories = [
    {
      id: 'compact',
      title: 'Compact Living',
      subtitle: '1,200 - 2,000 sq ft',
      description: 'Perfect for young professionals, couples, or downsizers',
      priceRange: 'Starting from $1,049,990',
      collections: detachedCollections.filter(c => 
        ['compact-home-1', 'compact-home-2', 'compact-home-3', 'compact-home-4'].includes(c.id)
      )
    },
    {
      id: 'family',
      title: 'Executive Homes', 
      subtitle: '2,000 - 3,000 sq ft',
      description: 'Sophisticated homes for executives and established families',
      priceRange: 'Starting from $1,179,990',
      collections: detachedCollections.filter(c => 
        ['family-home-1', 'family-home-2'].includes(c.id)
      )
    },
    {
      id: 'estate',
      title: 'Estate Collection',
      subtitle: '3,000 - 3,500 sq ft',
      description: 'Luxury homes with premium finishes and locations',
      priceRange: 'Starting from $1,299,900',
      collections: detachedCollections.filter(c => 
        ['premium-estate'].includes(c.id)
      )
    }
  ];

  const allCollections = [...townhomeCollections, ...detachedCollections];

  const getFeaturedCollections = () => {
    return allCollections.filter(collection => 
      featuredCollections.includes(collection.id) || (collection as any).featured
    );
  };

  const getCollectionsByCategory = (category: string) => {
    if (category === 'featured') return getFeaturedCollections();
    if (category === 'townhomes') return townhomeCollections;
    if (category === 'detached') return detachedCollections;
    return allCollections;
  };

  const handleViewFloorPlans = (collectionId: string) => {
    setSelectedCollection(collectionId);
    setIsContactModalOpen(true);
  };

  const handleQuickMatch = () => {
    setShowQuickMatch(true);
    setSelectedCollection('quick-match');
    setIsContactModalOpen(true);
  };

  const CollectionCard = ({ collection }: { collection: any }) => (
    <Card key={collection.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Image Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {collection.images.map((image: string, imgIndex: number) => (
              <CarouselItem key={imgIndex}>
                <div className="relative h-64 overflow-hidden bg-muted/20">
                  <img 
                    src={image} 
                    alt={`${collection.title} - Elevation ${imgIndex + 1}`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {collection.images.length > 1 && (
            <>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </>
          )}
        </Carousel>
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <Badge className={`${collection.available ? 'bg-accent' : 'bg-muted'} text-white font-semibold`}>
            {collection.badge}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="font-semibold text-foreground text-sm">{collection.priceRange}</span>
          </div>
        </div>
        {collection.id === 'premium-estate' && (
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold">
              <Star className="w-3 h-3 mr-1" />
              Featured Launch
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">
              {collection.title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {collection.subtitle}
            </p>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm">
            {collection.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-2">
            {collection.features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Availability & Elevations Info */}
          <div className="flex justify-between items-center">
            {collection.elevations > 0 && (
              <div className="flex items-center gap-2 text-sm text-accent">
                <Home className="h-4 w-4" />
                <span>{collection.elevations} Elevation{collection.elevations > 1 ? 's' : ''}</span>
              </div>
            )}
            <span className="text-xs text-muted-foreground font-medium">
              {collection.units}
            </span>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => handleViewFloorPlans(collection.id)}
            className={`w-full ${collection.available 
              ? collection.id === 'premium-estate' 
                ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white' 
                : 'bg-accent hover:bg-accent/90 text-white'
              : 'bg-muted text-muted-foreground cursor-not-allowed'
            } transition-all duration-300`}
            disabled={!collection.available && collection.id !== 'premium-estate'}
          >
            {collection.available 
              ? 'View Floor Plans & Pricing' 
              : collection.id === 'premium-estate'
                ? 'Join VIP Preview List'
                : 'Register Interest'}
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="home-collection" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Home Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Discover our diverse collection of townhomes and detached homes, each designed with premium finishes 
            and thoughtful layouts. Find your perfect match with our smart filtering system.
          </p>
        </div>


        {/* Category Navigation */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-xl mx-auto">
            <TabsTrigger value="townhomes">Townhomes</TabsTrigger>
            <TabsTrigger value="detached">Detached</TabsTrigger>
          </TabsList>

          {/* Townhomes */}
          <TabsContent value="townhomes" className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Urban Townhomes</h3>
              <p className="text-muted-foreground">Modern townhome living with premium finishes</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {townhomeCollections.map((collection) => (
                <CollectionCard key={collection.id} collection={collection} />
              ))}
            </div>
          </TabsContent>

          {/* Detached Homes with Size-Based Carousels */}
          <TabsContent value="detached" className="space-y-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Detached Homes by Size</h3>
              <p className="text-muted-foreground">Choose your ideal home size and browse available elevations</p>
            </div>
            
            {sizeCategories.map((category) => (
              <div key={category.id} className="bg-muted/30 rounded-2xl p-8 space-y-6">
                <div className="text-center">
                  <h4 className="text-2xl font-bold text-foreground">{category.title}</h4>
                  <p className="text-accent font-semibold text-lg">{category.subtitle}</p>
                  <p className="text-muted-foreground mt-2">{category.description}</p>
                  <p className="text-lg font-bold text-foreground mt-2">{category.priceRange}</p>
                </div>

                {/* Category-specific information */}
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {category.id === 'compact' && (
                    <>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Perfect For</div>
                        <p className="text-sm text-muted-foreground">Young professionals, couples, or those downsizing without compromising on quality</p>
                      </div>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Key Features</div>
                        <p className="text-sm text-muted-foreground">Open-concept layouts, premium finishes, efficient use of space</p>
                      </div>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Lifestyle</div>
                        <p className="text-sm text-muted-foreground">Low-maintenance living with luxury amenities and modern conveniences</p>
                      </div>
                    </>
                  )}
                  
                  {category.id === 'family' && (
                    <>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Perfect For</div>
                        <p className="text-sm text-muted-foreground">Growing families needing space for children, guests, and entertaining</p>
                      </div>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Key Features</div>
                        <p className="text-sm text-muted-foreground">Spacious bedrooms, multiple bathrooms, family rooms, and large kitchens</p>
                      </div>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Lifestyle</div>
                        <p className="text-sm text-muted-foreground">Room to grow with flexible spaces that adapt to your family's changing needs</p>
                      </div>
                    </>
                  )}
                  
                  {category.id === 'estate' && (
                    <>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Perfect For</div>
                        <p className="text-sm text-muted-foreground">Luxury seekers wanting premium corner lots with enhanced privacy and prestige</p>
                      </div>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Key Features</div>
                        <p className="text-sm text-muted-foreground">Premium finishes, corner lot positioning, larger outdoor spaces, luxury amenities</p>
                      </div>
                      <div className="text-center bg-background/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-accent mb-2">Lifestyle</div>
                        <p className="text-sm text-muted-foreground">Executive living with impressive entertaining spaces and ultimate comfort</p>
                      </div>
                    </>
                  )}
                </div>
                
                <Carousel className="w-full">
                  <CarouselContent>
                    {/* Elevation Images */}
                    {category.collections.flatMap((collection) => 
                      collection.images.map((image, imageIndex) => (
                        <CarouselItem key={`${collection.id}-${imageIndex}`}>
                          <div className="relative h-96 overflow-hidden bg-background rounded-lg shadow-lg">
                            <img 
                              src={image} 
                              alt={`${category.title} - Elevation`}
                              className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            
                            <div className="absolute top-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                <span className="font-semibold text-foreground text-sm">{category.priceRange}</span>
                              </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4">
                              <Button 
                                onClick={() => handleViewFloorPlans(`${category.id}-elevation`)}
                                className="w-full bg-accent hover:bg-accent/90 text-white transition-all duration-300"
                              >
                                View Floor Plans & Pricing
                              </Button>
                            </div>
                          </div>
                        </CarouselItem>
                      ))
                    )}
                    
                    {/* Floor Plan Teaser - After all elevations */}
                    <CarouselItem key={`${category.id}-floorplan-teaser`}>
                      <div className="relative group/teaser bg-background rounded-lg shadow-lg overflow-hidden h-96 cursor-pointer">
                        <img 
                          src={floorPlanTeaser} 
                          alt="Floor Plan Preview"
                          className="w-full h-full object-cover filter blur-sm group-hover/teaser:blur-none transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/20 rounded-lg flex items-center justify-center group-hover/teaser:bg-primary/10 transition-all duration-300">
                          <div className="text-center">
                            <Eye className="h-8 w-8 text-white mx-auto mb-2" />
                            <h5 className="font-bold text-lg text-white mb-1">Floor Plans</h5>
                            <p className="text-sm text-white/90">View detailed layouts</p>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <Button 
                            onClick={() => handleViewFloorPlans(`${category.id}-floorplans`)}
                            className="w-full bg-white/90 hover:bg-white text-foreground hover:text-foreground transition-all duration-300"
                          >
                            View All Floor Plans
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-accent/5 via-primary/5 to-secondary/5 border-accent/20 max-w-2xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Still Deciding? Let Our Experts Help
              </h3>
              <p className="text-muted-foreground mb-6">
                Our real estate specialists will help you compare options, understand pricing, 
                and find the perfect home that matches your lifestyle and budget.
              </p>
              <div className="flex justify-center">
                <Button 
                  onClick={() => {
                    setSelectedCollection('consultation');
                    setIsContactModalOpen(true);
                  }}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-6"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        formType={selectedCollection === 'quick-match' ? 'general' : 'floorplans'}
      />
    </section>
  );
};

export default CrownHomeCollection;