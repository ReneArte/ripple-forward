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
      {/* Water ripple effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3, 4].map((ripple) => (
          <div
            key={ripple}
            className="absolute rounded-full border-2 border-primary/20 animate-ping"
            style={{
              width: `${ripple * 80}px`,
              height: `${ripple * 80}px`,
              animationDuration: '3s',
              animationDelay: `${ripple * 0.5}s`,
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>

      {/* Level rings with gradient backgrounds */}
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className="absolute rounded-full border border-primary/10 bg-gradient-to-r from-primary/5 to-transparent"
          style={getRippleStyle(level)}
        />
      ))}

      {/* Center person */}
      <div className="absolute z-20 text-center animate-fade-in">
        <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-2 ring-4 ring-primary/20 shadow-lg glow-effect">
          <img
            src={centerPerson.avatar}
            alt={centerPerson.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg px-3 py-1 backdrop-blur-sm">
          <p className="text-sm font-semibold">{centerPerson.name}</p>
          <p className="text-xs text-muted-foreground">{centerPerson.username}</p>
        </div>
      </div>

      {/* Level 1 connections */}
      {level1.map((person, index) => (
        <div
          key={person.id}
          className="absolute z-10 text-center animate-fade-in"
          style={getPersonPosition(index, level1.length, 1)}
        >
          <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-1 ring-2 ring-primary/30 hover:ring-primary/50 transition-all hover:scale-110 cursor-pointer">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 rounded px-2 py-0.5 backdrop-blur-sm">
            <p className="text-xs font-medium">{person.name}</p>
          </div>
          
          {/* Connection lines */}
          <div className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-b from-primary/30 to-transparent origin-bottom transform -translate-x-1/2 -translate-y-full rotate-0" 
               style={{ 
                 transform: `translate(-50%, -100%) rotate(${(index * 360 / level1.length) + 180}deg)`,
                 transformOrigin: 'bottom center'
               }} 
          />
        </div>
      ))}

      {/* Level 2 connections */}
      {level2.map((person, index) => (
        <div
          key={person.id}
          className="absolute z-5 text-center animate-fade-in"
          style={getPersonPosition(index, level2.length, 2)}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden mx-auto mb-1 ring-1 ring-primary/20 hover:ring-primary/40 transition-all hover:scale-110 cursor-pointer">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded px-1.5 py-0.5 backdrop-blur-sm">
            <p className="text-xs">{person.name}</p>
          </div>
        </div>
      ))}

      {/* Level 3 connections */}
      {level3.map((person, index) => (
        <div
          key={person.id}
          className="absolute z-0 text-center animate-fade-in opacity-70"
          style={getPersonPosition(index, level3.length, 3)}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden mx-auto mb-1 ring-1 ring-primary/10 hover:ring-primary/30 transition-all hover:scale-110 cursor-pointer">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/60 dark:bg-gray-800/60 rounded px-1 py-0.5 backdrop-blur-sm">
            <p className="text-xs">{person.name}</p>
          </div>
        </div>
      ))}

      {/* Floating water droplets */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-ping"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i * 5)}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: '4s',
          }}
        />
      ))}
    </div>
  );
};

export default NetworkRipples;