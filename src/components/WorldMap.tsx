import React from 'react';
import { Heart } from 'lucide-react';

const WorldMap: React.FC = () => {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl overflow-hidden">
      {/* Simplified world map outline */}
      <svg 
        viewBox="0 0 800 400" 
        className="absolute inset-0 w-full h-full"
        fill="none"
      >
        {/* Continents simplified */}
        <path 
          d="M100 200 Q150 180 200 200 Q250 220 300 200 Q350 180 400 200 Q450 220 500 200 Q550 180 600 200 Q650 220 700 200"
          stroke="hsl(var(--primary))" 
          strokeWidth="3" 
          fill="none"
          className="opacity-30"
        />
        <path 
          d="M120 250 Q170 230 220 250 Q270 270 320 250 Q370 230 420 250"
          stroke="hsl(var(--primary))" 
          strokeWidth="2" 
          fill="none"
          className="opacity-20"
        />
        <path 
          d="M500 280 Q550 260 600 280 Q650 300 700 280"
          stroke="hsl(var(--primary))" 
          strokeWidth="2" 
          fill="none"
          className="opacity-20"
        />
      </svg>

      {/* Kindness activity markers */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <Heart className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse animation-delay-500">
            <Heart className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping animation-delay-500"></div>
        </div>
      </div>

      <div className="absolute top-2/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse animation-delay-1000">
            <Heart className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </div>

      <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-pulse animation-delay-1500">
            <Heart className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping animation-delay-1500"></div>
        </div>
      </div>

      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse animation-delay-2000">
            <Heart className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>

      {/* Activity legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3">
        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Live Kindness Activity</p>
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span>Recent Acts</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;