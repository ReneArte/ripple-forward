import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface KindnessActivity {
  id: string;
  location: string;
  coordinates: [number, number];
  act: string;
  user: string;
  time: string;
  color: string;
}

const InteractiveWorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<KindnessActivity | null>(null);

  // Live kindness activities data
  const kindnessActivities: KindnessActivity[] = [
    {
      id: '1',
      location: 'Tokyo, Japan',
      coordinates: [139.6917, 35.6895],
      act: 'Volunteers cleaning up after typhoon in local community',
      user: 'Yuki Tanaka',
      time: '2 minutes ago',
      color: '#FF6B6B'
    },
    {
      id: '2',
      location: 'New York, USA',
      coordinates: [-74.0060, 40.7128],
      act: 'Free meals distribution to homeless in Central Park',
      user: 'Maria Rodriguez',
      time: '5 minutes ago',
      color: '#4ECDC4'
    },
    {
      id: '3',
      location: 'London, UK',
      coordinates: [-0.1276, 51.5074],
      act: 'Reading stories to elderly at care home',
      user: 'James Wilson',
      time: '8 minutes ago',
      color: '#45B7D1'
    },
    {
      id: '4',
      location: 'Sydney, Australia',
      coordinates: [151.2093, -33.8688],
      act: 'Beach cleanup with local environmental group',
      user: 'Emma Thompson',
      time: '12 minutes ago',
      color: '#96CEB4'
    },
    {
      id: '5',
      location: 'São Paulo, Brazil',
      coordinates: [-46.6333, -23.5505],
      act: 'Teaching kids soccer in favela community center',
      user: 'Carlos Silva',
      time: '15 minutes ago',
      color: '#FECA57'
    },
    {
      id: '6',
      location: 'Mumbai, India',
      coordinates: [72.8777, 19.0760],
      act: 'Distributing water during heat wave',
      user: 'Priya Sharma',
      time: '18 minutes ago',
      color: '#FF9FF3'
    },
    {
      id: '7',
      location: 'Cairo, Egypt',
      coordinates: [31.2357, 30.0444],
      act: 'Helping refugees learn Arabic language',
      user: 'Ahmed Hassan',
      time: '22 minutes ago',
      color: '#54A0FF'
    },
    {
      id: '8',
      location: 'Cape Town, South Africa',
      coordinates: [18.4241, -33.9249],
      act: 'Planting trees in township school',
      user: 'Nomsa Mthembu',
      time: '25 minutes ago',
      color: '#5F27CD'
    }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [20, 20],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    map.current.scrollZoom.disable();

    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });

      // Add kindness activity markers
      kindnessActivities.forEach((activity, index) => {
        // Create ripple effect element
        const rippleEl = document.createElement('div');
        rippleEl.className = 'kindness-ripple';
        rippleEl.style.cssText = `
          width: 20px;
          height: 20px;
          background: ${activity.color};
          border-radius: 50%;
          position: relative;
          cursor: pointer;
          animation: pulseRipple 2s infinite;
          animation-delay: ${index * 0.3}s;
        `;

        // Add ripple rings
        for (let i = 1; i <= 3; i++) {
          const ring = document.createElement('div');
          ring.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: ${20 + i * 15}px;
            height: ${20 + i * 15}px;
            border: 2px solid ${activity.color};
            border-radius: 50%;
            transform: translate(-50%, -50%);
            opacity: ${0.6 - i * 0.15};
            animation: expandingRipple ${2 + i * 0.5}s infinite;
            animation-delay: ${index * 0.3 + i * 0.2}s;
            pointer-events: none;
          `;
          rippleEl.appendChild(ring);
        }

        // Add click handler
        rippleEl.addEventListener('click', () => {
          setSelectedActivity(activity);
        });

        // Create marker
        new mapboxgl.Marker(rippleEl)
          .setLngLat(activity.coordinates)
          .addTo(map.current!);
      });

      setIsMapReady(true);
    });

    // Globe rotation
    const secondsPerRevolution = 300;
    const maxSpinZoom = 4;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current) return;
      
      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        const distancePerSecond = 360 / secondsPerRevolution;
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on('mousedown', () => { userInteracting = true; });
    map.current.on('dragstart', () => { userInteracting = true; });
    map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
    map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
    map.current.on('moveend', () => { spinGlobe(); });

    spinGlobe();
  };

  useEffect(() => {
    if (mapboxToken) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get your free public token from{' '}
              <a 
                href="https://mapbox.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                mapbox.com
              </a>
            </p>
            <div className="space-y-3">
              <Input
                type="password"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <Button 
                onClick={() => mapboxToken && initializeMap()}
                disabled={!mapboxToken}
                className="w-full"
              >
                Load Interactive Map
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      
      {/* Map overlay with activity info */}
      <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span className="font-semibold text-sm">Live Kindness Activity</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {kindnessActivities.length} acts of kindness happening now around the world
        </p>
      </div>

      {/* Selected activity popup */}
      {selectedActivity && (
        <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 max-w-sm">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="font-semibold text-sm">{selectedActivity.location}</span>
            </div>
            <button 
              onClick={() => setSelectedActivity(null)}
              className="text-muted-foreground hover:text-foreground"
            >
              ×
            </button>
          </div>
          <p className="text-sm mb-2">{selectedActivity.act}</p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>by {selectedActivity.user}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {selectedActivity.time}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveWorldMap;