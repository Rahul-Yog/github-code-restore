import { useEffect, useRef } from 'react';
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
  const MAPBOX_TOKEN = 'pk.eyJ1IjoicmFodWxqaW5kYWwiLCJhIjoiY21oNnB3NzF5MGpkZTJsb2F4cHExNmU0aiJ9.bIpRazr2WSjmPPHJA8ZF4Q';

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: PROPERTY_LOCATION,
      zoom: 12,
      pitch: 45
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add markers with popups
    amenities.forEach((amenity) => {
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
      el.innerHTML = amenity.icon;

      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setHTML(`
          <div style="padding: 8px; max-width: 250px;">
            ${amenity.image ? `<img src="${amenity.image}" alt="${amenity.name}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;" />` : ''}
            <h3 style="font-size: 14px; font-weight: bold; margin: 0 0 4px 0; color: #1a1a1a;">${amenity.name}</h3>
            <p style="font-size: 12px; margin: 0 0 4px 0; color: #666;">${amenity.description}</p>
            ${amenity.distance ? `<p style="font-size: 12px; font-weight: 600; margin: 0; color: ${categoryColors[amenity.category as keyof typeof categoryColors]};">${amenity.distance}</p>` : ''}
          </div>
        `);

      new mapboxgl.Marker(el)
        .setLngLat(amenity.coordinates as [number, number])
        .setPopup(popup)
        .addTo(map.current!);

      // Show popup on hover
      el.addEventListener('mouseenter', () => popup.addTo(map.current!));
      el.addEventListener('mouseleave', () => popup.remove());
    });
  };

  useEffect(() => {
    initializeMap(MAPBOX_TOKEN);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
      <div ref={mapContainer} className="absolute inset-0" />
      
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
