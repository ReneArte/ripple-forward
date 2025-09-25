import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

const VisualExplanation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-16">
          How Kindness Ripples
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
          {/* Step 1: Nomination */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative mb-6">
              {/* Wave character with legs */}
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center animate-bounce">
                {/* Happy face */}
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute -top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-full"></div>
                </div>
              </div>
              {/* Legs */}
              <div className="flex justify-center gap-2 -mt-2">
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-[walk_2s_ease-in-out_infinite]"></div>
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-[walk_2s_ease-in-out_infinite] animation-delay-500"></div>
              </div>
              {/* Heart in hand */}
              <div className="absolute -top-2 -right-2">
                <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />
              </div>
            </div>
            <p className="text-sm font-medium text-center">Your friend nominates you</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-8 h-8 text-blue-500 hidden md:block" />

          {/* Step 2: Act of Kindness */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative mb-6">
              {/* You character helping older character */}
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  {/* Happy face */}
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute -top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-white rounded-full"></div>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                  {/* Older character happy face */}
                  <div className="relative">
                    <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute -top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-1.5 border-b-2 border-white rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Heart being given */}
              <div className="absolute top-4 left-8">
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              </div>
            </div>
            <p className="text-sm font-medium text-center">You do an honest act of kindness</p>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-8 h-8 text-blue-500 hidden md:block" />

          {/* Step 3: Kind Pebbles */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative mb-6">
              {/* Shiny pebbles */}
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse animation-delay-500 shadow-lg"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-pulse animation-delay-1000 shadow-lg"></div>
              </div>
              {/* Sparkles */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute -top-1 right-0 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-1000"></div>
              <div className="absolute bottom-0 left-2 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping animation-delay-500"></div>
            </div>
            <p className="text-sm font-medium text-center">Kind Pebbles Tokens</p>
          </div>

          {/* Three arrows branching out */}
          <div className="flex flex-col items-center gap-4 hidden lg:block">
            <ArrowRight className="w-6 h-6 text-blue-500 transform -rotate-45" />
            <ArrowRight className="w-6 h-6 text-blue-500" />
            <ArrowRight className="w-6 h-6 text-blue-500 transform rotate-45" />
          </div>

          {/* Step 4: Three new characters */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <div className="relative mb-6">
              <div className="flex gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-center">Kindness spreads to others</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualExplanation;