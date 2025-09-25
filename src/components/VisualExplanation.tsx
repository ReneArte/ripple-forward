import React from 'react';
import { Users, Heart, Coins, ArrowRight, UserPlus, Gift } from 'lucide-react';

const VisualExplanation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-300 to-yellow-400">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-16 text-gray-800">
          How Kindness Ripples
        </h2>
        
        <div className="flex justify-center items-center max-w-4xl mx-auto">
          <div className="relative w-96 h-96 mx-auto">
            {/* Circular flow diagram */}
            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin" style={{animationDuration: '30s'}}></div>
            <div className="absolute inset-4 rounded-full border-2 border-white/20 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
            
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-12 h-12 text-red-500 animate-pulse" />
            </div>
            
            {/* Step 1: Friend nominates */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-800 max-w-20">Friend nominates you</p>
            </div>
            
            {/* Step 2: Do act of kindness */}
            <div className="absolute top-1/4 right-4 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Gift className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-800 max-w-20">Do honest act of kindness</p>
            </div>
            
            {/* Step 3: Earn pebbles */}
            <div className="absolute bottom-1/4 right-4 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Coins className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-sm font-medium text-gray-800 max-w-20">Earn pebble coins</p>
            </div>
            
            {/* Step 4: Nominate others */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <UserPlus className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-gray-800 max-w-20">Nominate others</p>
            </div>
            
            {/* Step 5: Kindness spreads */}
            <div className="absolute bottom-1/4 left-4 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <ArrowRight className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-sm font-medium text-gray-800 max-w-20">Kindness spreads</p>
            </div>
            
            {/* Step 6: Pay it forward */}
            <div className="absolute top-1/4 left-4 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-2">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <p className="text-sm font-medium text-gray-800 max-w-20">Pay it forward</p>
            </div>
            
            {/* Connecting arrows */}
            <div className="absolute inset-0 pointer-events-none">
              <svg viewBox="0 0 384 384" className="w-full h-full">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                  </marker>
                </defs>
                <path d="M 192 48 A 144 144 0 0 1 336 192" stroke="#fff" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.7" />
                <path d="M 336 192 A 144 144 0 0 1 192 336" stroke="#fff" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.7" />
                <path d="M 192 336 A 144 144 0 0 1 48 192" stroke="#fff" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.7" />
                <path d="M 48 192 A 144 144 0 0 1 192 48" stroke="#fff" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualExplanation;