import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import golfBackground from "@/assets/golf-course-background.jpg";

const StoneRoseGoogleMap = () => {
  const propertyAddress = "3770 Montrose Rd, Niagara Falls, ON";
  const encodedAddress = encodeURIComponent(propertyAddress);
  const lat = 43.0896;
  const lon = -79.0849;
  
  // Using static map image from OpenStreetMap
  const staticMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.05},${lat-0.05},${lon+0.05},${lat+0.05}&layer=mapnik&marker=${lat},${lon}`;
  const openMapUrl = `https://www.google.com/maps/place/${encodedAddress}`;
  const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  const nearbyAmenities = [
    { name: "Golf Courses", icon: "⛳", distance: "2-5 km" },
    { name: "Dining & Shopping", icon: "🍽️", distance: "1-7 km" },
    { name: "Healthcare", icon: "🏥", distance: "8 km" },
    { name: "Parks & Recreation", icon: "🌳", distance: "< 5 km" },
  ];

  return (
    <div className="space-y-4">
      <Card className="border-2 overflow-hidden">
        <CardContent className="p-0">
          <div 
            className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center cursor-pointer group"
            onClick={() => window.open(openMapUrl, '_blank')}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40" 
              style={{ backgroundImage: `url(${golfBackground})` }}
            />
            
            <div className="relative z-10 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  3770 Montrose Rd, Niagara Falls
                </h3>
                <p className="text-muted-foreground">
                  Click to view interactive map
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Navigation className="w-5 h-5 mr-2" />
                Open in Google Maps
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg border border-border">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Nearby Amenities</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {nearbyAmenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-background rounded-md border border-border text-sm"
              >
                <span className="text-lg">{amenity.icon}</span>
                <span className="font-medium">{amenity.name}</span>
                <span className="text-xs text-muted-foreground">({amenity.distance})</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="shrink-0"
          onClick={() => window.open(mapDirectionsUrl, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Get Directions
        </Button>
      </div>
    </div>
  );
};

export default StoneRoseGoogleMap;
