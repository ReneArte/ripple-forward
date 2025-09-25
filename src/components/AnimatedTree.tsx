import React, { useEffect, useState } from 'react';

interface TreePerson {
  id: string;
  name: string;
  initials: string;
  level: number;
  x: number;
  y: number;
  paymentApps?: string[];
}

interface TreeConnection {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
}

interface AnimatedTreeProps {
  people: TreePerson[];
  selectedPerson: TreePerson | null;
  onPersonSelect: (person: TreePerson) => void;
}

const AnimatedTree: React.FC<AnimatedTreeProps> = ({ people, selectedPerson, onPersonSelect }) => {
  const [animatedConnections, setAnimatedConnections] = useState<TreeConnection[]>([]);
  const [visiblePeople, setVisiblePeople] = useState<string[]>([]);

  // Tree trunk and branches
  const trunkPath = "M400,400 L400,300 M400,300 L350,250 M400,300 L450,250 M400,300 L400,200";
  const branchPaths = [
    "M350,250 L320,200 M350,250 L330,220 M350,250 L370,220", // Left branch
    "M450,250 L480,200 M450,250 L470,220 M450,250 L430,220", // Right branch
    "M400,200 L380,150 M400,200 L400,170 M400,200 L420,150", // Center branch
  ];

  useEffect(() => {
    // Animate tree growth
    const timer = setTimeout(() => {
      setVisiblePeople(people.map(p => p.id));
    }, 500);

    return () => clearTimeout(timer);
  }, [people]);

  const getLevelColor = (level: number, isYou: boolean = false) => {
    if (isYou) return 'from-primary to-primary-foreground';
    switch (level) {
      case 0: return 'from-purple-500 to-purple-600';
      case 2: return 'from-hope-green to-hope-green-dark';
      case 3: return 'from-ripple-teal to-blue-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-sky-100 to-green-100 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden">
      {/* Tree SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        <defs>
          {/* Tree gradient */}
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#654321" stopOpacity="1" />
          </linearGradient>
          
          {/* Leaves gradient */}
          <radialGradient id="leavesGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#90EE90" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#228B22" stopOpacity="0.9" />
          </radialGradient>
        </defs>
        
        {/* Tree trunk */}
        <g className="animate-[grow_2s_ease-out]">
          <path
            d={trunkPath}
            stroke="url(#treeGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Branches */}
          {branchPaths.map((path, index) => (
            <path
              key={index}
              d={path}
              stroke="url(#treeGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-[grow_2s_ease-out]"
              style={{ animationDelay: `${index * 0.5 + 1}s` }}
            />
          ))}
        </g>
        
        {/* Leaves clusters */}
        <g className="animate-[fade-in_1s_ease-out]" style={{ animationDelay: '2s' }}>
          <circle cx="320" cy="180" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" />
          <circle cx="370" cy="200" r="20" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
          <circle cx="430" cy="200" r="20" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <circle cx="480" cy="180" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
          <circle cx="380" cy="130" r="22" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
          <circle cx="420" cy="130" r="22" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
        </g>
        
        {/* Connection lines for people */}
        {people.map((person, index) => {
          if (person.level === 0) return null; // Skip nominator connections
          
          const parent = people.find(p => 
            (person.level === 1 && p.level === 0) || 
            (person.level === 2 && p.id === 'you') ||
            (person.level === 3 && p.level === 2)
          );
          
          if (!parent) return null;
          
          return (
            <line
              key={`connection-${person.id}`}
              x1={parent.x}
              y1={parent.y}
              x2={person.x}
              y2={person.y}
              stroke="hsl(var(--hope-green))"
              strokeWidth="2"
              strokeOpacity="0.6"
              className="animate-[draw-line_1s_ease-out]"
              style={{ animationDelay: `${index * 0.2 + 2.5}s` }}
            />
          );
        })}
      </svg>
      
      {/* People nodes */}
      {people.map((person, index) => (
        <button
          key={person.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 z-10
                     ${visiblePeople.includes(person.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                     ${selectedPerson?.id === person.id ? 'ring-4 ring-primary/50' : ''}`}
          style={{
            left: `${(person.x / 800) * 100}%`,
            top: `${(person.y / 400) * 100}%`,
            transitionDelay: `${index * 0.2 + 3}s`,
          }}
          onClick={() => onPersonSelect(person)}
        >
          <div className={`w-${person.level === 1 ? '16' : person.level === 0 ? '14' : '12'} h-${person.level === 1 ? '16' : person.level === 0 ? '14' : '12'} 
                         bg-gradient-to-br ${getLevelColor(person.level, person.id === 'you')} 
                         rounded-full flex items-center justify-center shadow-lg border-4 border-white
                         ${person.id === 'you' ? 'animate-pulse' : ''}`}>
            <span className="text-white font-bold text-sm">{person.initials}</span>
          </div>
          
          {/* Name label */}
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                         bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-sm whitespace-nowrap">
            {person.name}
          </div>
        </button>
      ))}
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-hope-green/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTree;