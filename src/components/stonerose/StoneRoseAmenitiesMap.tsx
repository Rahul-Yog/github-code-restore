import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Property location: 3770 Montrose Rd, Niagara Falls
const PROPERTY_LOCATION: [number, number] = [-79.0847, 43.0896];

const amenities = [
  {
    name: "Stonerose at 3770 Montrose Rd",
    category: "property",
    coordinates: [-79.0847, 43.0896],
    description: "Your New Home Community",
    distance: "",
    icon: "🏘️"
  },
  {
    name: "Rolling Meadows Golf & Country Club",
    category: "golf",
    coordinates: [-79.0965, 43.0912],
    description: "Championship 18-hole golf course with driving range and clubhouse facilities",
    distance: "2 km / 5 mins",
    icon: "⛳",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400"
  },
  {
    name: "Legends on the Niagara",
    category: "golf",
    coordinates: [-79.0523, 43.1245],
    description: "Two championship courses with spectacular views",
    distance: "5 km / 10 mins",
    icon: "⛳",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=400"
  },
  {
    name: "Whirlpool Golf Course",
    category: "golf",
    coordinates: [-79.0712, 43.1089],
    description: "Scenic public golf course along the Niagara River",
    distance: "4 km / 8 mins",
    icon: "⛳",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?w=400"
  },
  {
    name: "Mandarin Buffet",
    category: "dining",
    coordinates: [-79.0889, 43.0823],
    description: "Renowned all-you-can-eat buffet with Asian cuisine",
    distance: "3 km / 7 mins",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400"
  },
  {
    name: "Weinkeller",
    category: "dining",
    coordinates: [-79.0678, 43.0945],
    description: "Intimate farm-to-table dining experience",
    distance: "2.5 km / 6 mins",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
  },
  {
    name: "Niagara Square Shopping Centre",
    category: "shopping",
    coordinates: [-79.0623, 43.0645],
    description: "Major shopping center with retail stores and services",
    distance: "7 km / 12 mins",
    icon: "🛍️",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400"
  },
  {
    name: "Food Basics",
    category: "shopping",
    coordinates: [-79.0834, 43.0889],
    description: "Convenient grocery shopping for daily essentials",
    distance: "1 min walk",
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400"
  },
  {
    name: "South Niagara Hospital",
    category: "healthcare",
    coordinates: [-79.1234, 43.0523],
    description: "$3.6 billion state-of-the-art hospital opening 2028",
    distance: "8 km / 11 mins",
    icon: "🏥",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400"
  },
  {
    name: "Clifton Hill Entertainment",
    category: "entertainment",
    coordinates: [-79.0789, 43.0912],
    description: "Family entertainment district with attractions and dining",
    distance: "4 km / 9 mins",
    icon: "🎡",
    image: "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?w=400"
  }
];

const categoryColors = {
  property: "#D4AF37",
  golf: "#22c55e",
  dining: "#f97316",
  shopping: "#8b5cf6",
  healthcare: "#ef4444",
  entertainment: "#06b6d4"
};

const StoneRoseAmenitiesMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only initialize if map doesn't already exist
    if (map.current) {
      console.log('Map already initialized, skipping');
      return;
    }

    const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;
    console.log('=== MAPBOX DEBUG ===');
    console.log('Token present:', !!MAPBOX_TOKEN);
    console.log('Token value:', MAPBOX_TOKEN);
    console.log('Token starts with pk.:', MAPBOX_TOKEN?.startsWith('pk.'));
    console.log('===================');
    
    if (!MAPBOX_TOKEN) {
      console.error('❌ Mapbox token is missing from environment');
      setError('Mapbox token is missing. Please restart your development server after updating .env file.');
      setIsLoading(false);
      return;
    }

    if (!MAPBOX_TOKEN.startsWith('pk.')) {
      console.error('❌ Invalid Mapbox token format:', MAPBOX_TOKEN.substring(0, 10));
      setError('Invalid Mapbox token format. Token should start with "pk."');
      setIsLoading(false);
      return;
    }

    // Validate token by making a test request
    const validateToken = async () => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/test.json?access_token=${MAPBOX_TOKEN}`
        );
        
        if (!response.ok) {
          console.error('Token validation failed:', response.status, response.statusText);
          setError(`Invalid Mapbox token. Please check your VITE_MAPBOX_TOKEN. Status: ${response.status}`);
          setIsLoading(false);
          return false;
        }
        
        console.log('Token validated successfully');
        return true;
      } catch (err) {
        console.error('Token validation error:', err);
        setError('Failed to validate Mapbox token. Please check your internet connection.');
        setIsLoading(false);
        return false;
      }
    };

    let retryCount = 0;
    const maxRetries = 20;

    const initMap = async () => {
      // Validate token first
      const isValid = await validateToken();
      if (!isValid) return;

      if (!mapContainer.current) {
        console.log('Map container not ready');
        return;
      }

      const containerWidth = mapContainer.current.offsetWidth;
      const containerHeight = mapContainer.current.offsetHeight;
      
      console.log('Container dimensions:', { containerWidth, containerHeight, retryCount });
      
      if (containerWidth === 0 || containerHeight === 0) {
        retryCount++;
        if (retryCount < maxRetries) {
          setTimeout(initMap, 100);
        } else {
          console.error('Max retries reached - container has no dimensions');
          setError('Failed to initialize map container. Please refresh the page.');
          setIsLoading(false);
        }
        return;
      }

      try {
        console.log('Initializing map with validated token');
        mapboxgl.accessToken = MAPBOX_TOKEN;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: PROPERTY_LOCATION,
          zoom: 12
        });

        console.log('Map instance created');

        map.current.addControl(
          new mapboxgl.NavigationControl({
            visualizePitch: true,
          }),
          'top-right'
        );

        map.current.on('load', () => {
          console.log('Map loaded successfully');
          setIsLoading(false);
          
          amenities.forEach((amenity) => {
            try {
              const el = document.createElement('div');
              el.className = 'marker';
              el.style.width = '40px';
              el.style.height = '40px';
              el.style.borderRadius = '50%';
              el.style.backgroundColor = categoryColors[amenity.category as keyof typeof categoryColors];
              el.style.display = 'flex';
              el.style.alignItems = 'center';
              el.style.justifyContent = 'center';
              el.style.fontSize = '20px';
              el.style.cursor = 'pointer';
              el.style.border = '3px solid white';
              el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
              el.textContent = amenity.icon;

              const popupContent = document.createElement('div');
              popupContent.style.padding = '8px';
              popupContent.style.maxWidth = '250px';
              
              if (amenity.image) {
                const img = document.createElement('img');
                img.src = amenity.image;
                img.alt = amenity.name;
                img.style.width = '100%';
                img.style.height = '120px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '4px';
                img.style.marginBottom = '8px';
                popupContent.appendChild(img);
              }
              
              const title = document.createElement('h3');
              title.style.fontSize = '14px';
              title.style.fontWeight = 'bold';
              title.style.margin = '0 0 4px 0';
              title.style.color = '#1a1a1a';
              title.textContent = amenity.name;
              popupContent.appendChild(title);
              
              const desc = document.createElement('p');
              desc.style.fontSize = '12px';
              desc.style.margin = '0 0 4px 0';
              desc.style.color = '#666';
              desc.textContent = amenity.description;
              popupContent.appendChild(desc);
              
              if (amenity.distance) {
                const dist = document.createElement('p');
                dist.style.fontSize = '12px';
                dist.style.fontWeight = '600';
                dist.style.margin = '0';
                dist.style.color = categoryColors[amenity.category as keyof typeof categoryColors];
                dist.textContent = amenity.distance;
                popupContent.appendChild(dist);
              }

              const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
                .setDOMContent(popupContent);

              new mapboxgl.Marker(el)
                .setLngLat(amenity.coordinates as [number, number])
                .setPopup(popup)
                .addTo(map.current!);

              el.addEventListener('mouseenter', () => popup.addTo(map.current!));
              el.addEventListener('mouseleave', () => popup.remove());
            } catch (markerError) {
              console.error(`Error adding marker for ${amenity.name}:`, markerError);
            }
          });
        });

        map.current.on('error', (e: any) => {
          console.error('Mapbox error event:', e);
          console.error('Error type:', e.error?.message || 'Unknown error');
          
          let errorMessage = 'Failed to load map.';
          if (e.error?.message) {
            errorMessage += ` ${e.error.message}`;
          }
          if (e.error?.message?.includes('token')) {
            errorMessage = 'Invalid Mapbox token. Please check your VITE_MAPBOX_TOKEN in .env file.';
          }
          
          setError(errorMessage);
          setIsLoading(false);
        });

      } catch (error) {
        console.error('Error initializing map:', error);
        setError('Failed to initialize map. Please try refreshing the page.');
        setIsLoading(false);
      }
    };

    // Use a small delay to ensure container is rendered
    const timeoutId = setTimeout(initMap, 50);

    return () => {
      clearTimeout(timeoutId);
      if (map.current) {
        console.log('Cleaning up map');
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl bg-muted flex items-center justify-center">
        <div className="text-center p-8">
          <p className="text-destructive font-semibold mb-2">Map Error</p>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-sm text-muted-foreground">Loading interactive map...</p>
          </div>
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <h4 className="text-sm font-semibold mb-2">Legend</h4>
        <div className="space-y-1 text-xs">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border-2 border-white shadow"
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoneRoseAmenitiesMap;
