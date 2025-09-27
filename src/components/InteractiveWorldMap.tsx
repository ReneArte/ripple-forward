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

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg overflow-hidden">
      {/* Heat Map Visualization */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        <defs>
          {/* Heat map gradients */}
          <radialGradient id="heatHigh" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF4444" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FF6B6B" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF8E8E" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="heatMedium" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFA500" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#FFB84D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFCC80" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="heatLow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#66BB6A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A5D6A7" stopOpacity="0.2" />
          </radialGradient>
        </defs>
        
        {/* World continents outline */}
        <g className="opacity-30">
          {/* North America */}
          <path d="M50 120 Q120 100 200 130 Q250 140 280 120 L280 180 Q250 200 200 190 Q120 180 50 160 Z" 
                fill="#E3F2FD" stroke="#2196F3" strokeWidth="1"/>
          {/* South America */}
          <path d="M180 220 Q220 210 240 240 Q250 300 230 350 Q210 360 190 340 Q170 280 180 220 Z" 
                fill="#E8F5E8" stroke="#4CAF50" strokeWidth="1"/>
          {/* Europe */}
          <path d="M380 100 Q420 90 450 110 Q460 130 440 140 Q400 135 380 120 Z" 
                fill="#FFF3E0" stroke="#FF9800" strokeWidth="1"/>
          {/* Africa */}
          <path d="M420 150 Q460 140 480 170 Q490 220 470 270 Q450 280 430 260 Q410 200 420 150 Z" 
                fill="#FFEBEE" stroke="#F44336" strokeWidth="1"/>
          {/* Asia */}
          <path d="M500 80 Q580 70 650 100 Q680 120 660 150 Q600 160 540 140 Q510 110 500 80 Z" 
                fill="#E1F5FE" stroke="#03A9F4" strokeWidth="1"/>
          {/* Australia */}
          <path d="M620 280 Q670 270 690 290 Q685 310 660 315 Q630 305 620 280 Z" 
                fill="#F3E5F5" stroke="#9C27B0" strokeWidth="1"/>
        </g>
        
        {/* Heat map zones - High activity areas */}
        <circle cx="150" cy="140" r="45" fill="url(#heatHigh)" className="animate-pulse">
          <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="450" cy="120" r="35" fill="url(#heatHigh)" className="animate-pulse" style={{animationDelay: '0.5s'}}>
          <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="580" cy="110" r="40" fill="url(#heatHigh)" className="animate-pulse" style={{animationDelay: '1s'}}>
          <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite"/>
        </circle>
        
        {/* Medium activity areas */}
        <circle cx="220" cy="280" r="35" fill="url(#heatMedium)" className="animate-pulse" style={{animationDelay: '1.5s'}}>
          <animate attributeName="r" values="30;40;30" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="460" cy="200" r="40" fill="url(#heatMedium)" className="animate-pulse" style={{animationDelay: '2s'}}>
          <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="650" cy="300" r="30" fill="url(#heatMedium)" className="animate-pulse" style={{animationDelay: '2.5s'}}>
          <animate attributeName="r" values="25;35;25" dur="4s" repeatCount="indefinite"/>
        </circle>
        
        {/* Low activity areas */}
        <circle cx="100" cy="200" r="25" fill="url(#heatLow)" className="animate-pulse" style={{animationDelay: '3s'}}>
          <animate attributeName="r" values="20;30;20" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="520" cy="160" r="28" fill="url(#heatLow)" className="animate-pulse" style={{animationDelay: '3.5s'}}>
          <animate attributeName="r" values="23;33;23" dur="5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="380" cy="160" r="22" fill="url(#heatLow)" className="animate-pulse" style={{animationDelay: '4s'}}>
          <animate attributeName="r" values="18;28;18" dur="5s" repeatCount="indefinite"/>
        </circle>
        
        {/* Dynamic activity indicators */}
        <g className="animate-pulse">
          {kindnessActivities.map((activity, index) => {
            const intensity = ['high', 'medium', 'low'][index % 3];
            const size = intensity === 'high' ? 8 : intensity === 'medium' ? 6 : 4;
            const x = (activity.coordinates[0] + 180) * (800 / 360);
            const y = (90 - activity.coordinates[1]) * (400 / 180);
            
            return (
              <circle
                key={activity.id}
                cx={x}
                cy={y}
                r={size}
                fill={activity.color}
                className="animate-pulse cursor-pointer"
                style={{
                  animationDelay: `${index * 0.3}s`,
                  filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'
                }}
                onClick={() => setSelectedActivity(activity)}
              >
                <animate attributeName="r" values={`${size};${size + 3};${size}`} dur="2s" repeatCount="indefinite"/>
              </circle>
            );
          })}
        </g>
      </svg>
      
      {/* Heat map legend */}
      <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 min-w-48">
        <h4 className="font-semibold text-sm mb-3 text-gray-700 dark:text-gray-300">Kindness Activity Heat Map</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">High Activity (50+ acts)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Medium Activity (20-49 acts)</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Low Activity (1-19 acts)</span>
          </div>
        </div>
        <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {kindnessActivities.length} active regions worldwide
          </p>
        </div>
      </div>
      
      {/* Live activity counter */}
      <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">Live Activity</span>
        </div>
        <div className="text-2xl font-bold text-red-500">247</div>
        <p className="text-xs text-gray-500 dark:text-gray-500">acts in last hour</p>
      </div>
      
      {/* Regional stats overlay */}
      <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 max-w-xs">
        <h4 className="font-semibold text-sm mb-2 text-gray-700 dark:text-gray-300">Top Regions Today</h4>
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">North America</span>
            <span className="font-medium text-red-500">142 acts</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Europe</span>
            <span className="font-medium text-orange-500">89 acts</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Asia</span>
            <span className="font-medium text-red-500">156 acts</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Others</span>
            <span className="font-medium text-green-500">67 acts</span>
          </div>
        </div>
      </div>

      {/* Selected activity popup */}
      {selectedActivity && (
        <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-4 max-w-sm">
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