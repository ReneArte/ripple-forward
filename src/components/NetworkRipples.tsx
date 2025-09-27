import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

interface Person {
  id: string;
  name: string;
  username: string;
  avatar: string;
  level: number;
}

interface NetworkRipplesProps {
  centerPerson: Person;
  connections: Person[];
}

const NetworkRipples: React.FC<NetworkRipplesProps> = ({ centerPerson, connections }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Group connections by level (distance from center)
  const level1 = connections.filter(p => p.level === 1);
  const level2 = connections.filter(p => p.level === 2);
  const level3 = connections.filter(p => p.level === 3);

  const getRippleStyle = (level: number) => {
    const baseSize = level === 1 ? 200 : level === 2 ? 280 : 360;
    const animationDelay = level * 0.5;
    
    return {
      width: `${baseSize}px`,
      height: `${baseSize}px`,
      animationDelay: `${animationDelay}s`,
    };
  };

  const getPersonPosition = (index: number, total: number, level: number) => {
    const radius = level === 1 ? 100 : level === 2 ? 140 : 180;
    const angle = (index * 360 / total) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    return {
      transform: `translate(${x}px, ${y}px)`,
      animationDelay: `${level * 0.3 + index * 0.1}s`,
    };
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Enhanced water ripple effects with blue gradients */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3, 4, 5].map((ripple) => (
          <div
            key={ripple}
            className="absolute rounded-full border-2 animate-expandingRipple"
            style={{
              width: `${ripple * 60}px`,
              height: `${ripple * 60}px`,
              borderImage: `linear-gradient(45deg, 
                rgba(59, 130, 246, ${0.8 - ripple * 0.15}), 
                rgba(147, 197, 253, ${0.6 - ripple * 0.1}), 
                rgba(191, 219, 254, ${0.4 - ripple * 0.08}),
                transparent
              ) 1`,
              animationDuration: '4s',
              animationDelay: `${ripple * 0.8}s`,
              animationIterationCount: 'infinite',
              background: `radial-gradient(circle, 
                rgba(59, 130, 246, ${0.15 - ripple * 0.02}) 0%, 
                rgba(147, 197, 253, ${0.1 - ripple * 0.015}) 40%, 
                rgba(191, 219, 254, ${0.05 - ripple * 0.01}) 70%, 
                transparent 100%
              )`,
            }}
          />
        ))}
      </div>

      {/* Pulsing center ripples */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((pulse) => (
          <div
            key={`pulse-${pulse}`}
            className="absolute rounded-full animate-pulseRipple"
            style={{
              width: `${pulse * 40}px`,
              height: `${pulse * 40}px`,
              background: `radial-gradient(circle, 
                rgba(59, 130, 246, ${0.3 - pulse * 0.08}) 0%, 
                rgba(147, 197, 253, ${0.2 - pulse * 0.05}) 60%, 
                transparent 100%
              )`,
              animationDuration: '3s',
              animationDelay: `${pulse * 0.5}s`,
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      {/* Level rings with enhanced gradients */}
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className="absolute rounded-full border animate-levelRing hover:animate-expandLevel cursor-pointer transition-all duration-500"
          style={{
            ...getRippleStyle(level),
            borderImage: `linear-gradient(135deg, 
              rgba(59, 130, 246, 0.4), 
              rgba(147, 197, 253, 0.3), 
              rgba(191, 219, 254, 0.2), 
              rgba(59, 130, 246, 0.1)
            ) 1`,
            background: `radial-gradient(circle, 
              rgba(59, 130, 246, 0.05) 0%, 
              rgba(147, 197, 253, 0.03) 50%, 
              transparent 100%
            )`,
            boxShadow: `inset 0 0 20px rgba(59, 130, 246, 0.1), 
                       0 0 30px rgba(147, 197, 253, 0.15)`,
          }}
        />
      ))}

      {/* Center person with enhanced glow */}
      <div className="absolute z-20 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 ring-4 ring-blue-300/40 shadow-2xl glow-effect-blue hover:ring-blue-400/60 transition-all duration-300">
          <img
            src={centerPerson.avatar}
            alt={centerPerson.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white/95 dark:bg-gray-800/95 rounded-lg px-3 py-1 backdrop-blur-md border border-blue-200/30 shadow-lg">
          <p className="text-sm font-semibold">{centerPerson.name}</p>
          <p className="text-xs text-muted-foreground">{centerPerson.username}</p>
        </div>
      </div>

      {/* Level 1 connections with enhanced styling */}
      {level1.map((person, index) => (
        <div
          key={person.id}
          className="absolute z-10 text-center animate-fade-in group cursor-pointer"
          style={getPersonPosition(index, level1.length, 1)}
        >
          <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-1 ring-2 ring-blue-400/40 hover:ring-blue-500/60 transition-all hover:scale-125 shadow-lg hover:shadow-blue-300/50">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
          </div>
          <div className="bg-white/90 dark:bg-gray-800/90 rounded px-2 py-0.5 backdrop-blur-md border border-blue-200/30 shadow-md group-hover:bg-blue-50/90 dark:group-hover:bg-blue-900/90 transition-all">
            <p className="text-xs font-medium">{person.name}</p>
          </div>
          
          {/* Enhanced connection lines with gradient */}
          <div 
            className="absolute top-1/2 left-1/2 w-0.5 h-20 origin-bottom transform -translate-x-1/2 -translate-y-full"
            style={{ 
              background: `linear-gradient(to top, 
                rgba(59, 130, 246, 0.6), 
                rgba(147, 197, 253, 0.4), 
                transparent
              )`,
              transform: `translate(-50%, -100%) rotate(${(index * 360 / level1.length) + 180}deg)`,
              transformOrigin: 'bottom center',
              filter: 'drop-shadow(0 0 3px rgba(59, 130, 246, 0.3))'
            }} 
          />
        </div>
      ))}

      {/* Level 2 connections with subtle blue glow */}
      {level2.map((person, index) => (
        <div
          key={person.id}
          className="absolute z-5 text-center animate-fade-in group cursor-pointer"
          style={getPersonPosition(index, level2.length, 2)}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden mx-auto mb-1 ring-1 ring-blue-300/30 hover:ring-blue-400/50 transition-all hover:scale-110 shadow-md hover:shadow-blue-200/40">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 rounded px-1.5 py-0.5 backdrop-blur-md border border-blue-100/30 shadow-sm group-hover:bg-blue-50/80 dark:group-hover:bg-blue-900/80 transition-all">
            <p className="text-xs">{person.name}</p>
          </div>
        </div>
      ))}

      {/* Level 3 connections with faint blue shimmer */}
      {level3.map((person, index) => (
        <div
          key={person.id}
          className="absolute z-0 text-center animate-fade-in opacity-80 group cursor-pointer"
          style={getPersonPosition(index, level3.length, 3)}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden mx-auto mb-1 ring-1 ring-blue-200/20 hover:ring-blue-300/40 transition-all hover:scale-110 shadow-sm hover:shadow-blue-100/30">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded px-1 py-0.5 backdrop-blur-md border border-blue-50/20 shadow-sm group-hover:bg-blue-25/70 dark:group-hover:bg-blue-950/70 transition-all">
            <p className="text-xs">{person.name}</p>
          </div>
        </div>
      ))}

      {/* Floating blue water droplets with shimmer */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-floatingDroplet"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${15 + (i * 6)}%`,
            top: `${25 + (i * 4)}%`,
            background: `radial-gradient(circle, 
              rgba(59, 130, 246, ${0.6 - i * 0.04}), 
              rgba(147, 197, 253, ${0.4 - i * 0.03}), 
              transparent
            )`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i * 0.3}s`,
            boxShadow: `0 0 ${4 + i}px rgba(59, 130, 246, 0.3)`,
          }}
        />
      ))}
    </div>
  );
};

export default NetworkRipples;