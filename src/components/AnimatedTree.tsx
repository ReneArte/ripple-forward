import React, { useEffect, useState } from 'react';

interface TreePerson {
  id: string;
  name: string;
  initials: string;
  avatar: string;
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
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);

  useEffect(() => {
    // Animate tree growth
    const timer = setTimeout(() => {
      setVisiblePeople(people.map(p => p.id));
    }, 1000);

    return () => clearTimeout(timer);
  }, [people]);

  const getBranchPath = (person: TreePerson, parent: TreePerson | undefined) => {
    if (!parent) return '';
    
    // Create curved branch paths that look more natural
    const midX = (parent.x + person.x) / 2;
    const midY = parent.y + (person.y - parent.y) * 0.3;
    
    return `M${parent.x},${parent.y} Q${midX},${midY} ${person.x},${person.y}`;
  };

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
    <div className="relative w-full h-96 bg-gradient-to-b from-sky-100 via-green-50 to-green-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 rounded-lg overflow-hidden">
      {/* Realistic Tree SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400">
        <defs>
          {/* Tree trunk gradient */}
          <linearGradient id="trunkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>
          
          {/* Branch gradient */}
          <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#654321" />
            <stop offset="100%" stopColor="#8B4513" />
          </linearGradient>
          
          {/* Illuminated branch gradient */}
          <linearGradient id="illuminatedBranch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
          
          {/* Leaves gradient */}
          <radialGradient id="leavesGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#90EE90" />
            <stop offset="70%" stopColor="#32CD32" />
            <stop offset="100%" stopColor="#228B22" />
          </radialGradient>
          
          {/* Glowing leaves */}
          <radialGradient id="glowingLeaves" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ADFF2F" />
            <stop offset="70%" stopColor="#7FFF00" />
            <stop offset="100%" stopColor="#32CD32" />
          </radialGradient>
        </defs>
        
        {/* Main trunk */}
        <path
          d="M400,400 Q398,350 400,300 Q402,250 400,200"
          stroke="url(#trunkGradient)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          className="animate-[drawTrunk_2s_ease-out]"
        />
        
        {/* Root system */}
        <g className="animate-[fade-in_1s_ease-out]" style={{ animationDelay: '0.5s' }}>
          <path d="M400,400 Q380,410 360,415" stroke="url(#branchGradient)" strokeWidth="4" fill="none" opacity="0.6" />
          <path d="M400,400 Q420,410 440,415" stroke="url(#branchGradient)" strokeWidth="4" fill="none" opacity="0.6" />
          <path d="M400,400 Q390,420 370,430" stroke="url(#branchGradient)" strokeWidth="3" fill="none" opacity="0.4" />
          <path d="M400,400 Q410,420 430,430" stroke="url(#branchGradient)" strokeWidth="3" fill="none" opacity="0.4" />
        </g>

        {/* Dynamic branches for each person */}
        {people.map((person, index) => {
          if (person.level === 0) return null; // Skip nominator connections
          
          const parent = people.find(p => 
            (person.level === 1 && p.level === 0) || 
            (person.level === 2 && p.id === 'you') ||
            (person.level === 3 && p.level === 2 && Math.abs(p.x - person.x) < 100)
          );
          
          if (!parent) return null;
          
          const branchId = `branch-${person.id}`;
          const isHovered = hoveredBranch === branchId;
          const strokeWidth = person.level === 1 ? 8 : person.level === 2 ? 6 : 4;
          
          return (
            <g key={branchId}>
              {/* Main branch */}
              <path
                d={getBranchPath(person, parent)}
                stroke={isHovered ? "url(#illuminatedBranch)" : "url(#branchGradient)"}
                strokeWidth={isHovered ? strokeWidth + 2 : strokeWidth}
                fill="none"
                strokeLinecap="round"
                className="animate-[drawBranch_1.5s_ease-out] transition-all duration-300 cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.3 + 1.5}s`,
                  filter: isHovered ? 'drop-shadow(0 0 8px #FFD700)' : 'none'
                }}
                onMouseEnter={() => setHoveredBranch(branchId)}
                onMouseLeave={() => setHoveredBranch(null)}
              />
              
              {/* Small sub-branches */}
              <g className="animate-[fade-in_0.5s_ease-out]" style={{ animationDelay: `${index * 0.3 + 2}s` }}>
                <path 
                  d={`M${person.x-10},${person.y-5} L${person.x-5},${person.y-10}`} 
                  stroke={isHovered ? "url(#illuminatedBranch)" : "url(#branchGradient)"} 
                  strokeWidth="2" 
                  fill="none"
                  className="transition-all duration-300"
                />
                <path 
                  d={`M${person.x+10},${person.y-5} L${person.x+5},${person.y-10}`} 
                  stroke={isHovered ? "url(#illuminatedBranch)" : "url(#branchGradient)"} 
                  strokeWidth="2" 
                  fill="none"
                  className="transition-all duration-300"
                />
              </g>
              
              {/* Leaves clusters along branches */}
              <g className="animate-[fade-in_0.8s_ease-out]" style={{ animationDelay: `${index * 0.3 + 2.5}s` }}>
                <circle 
                  cx={person.x - 15} 
                  cy={person.y - 15} 
                  r="8" 
                  fill={isHovered ? "url(#glowingLeaves)" : "url(#leavesGradient)"} 
                  className="animate-[gentle-sway_3s_ease-in-out_infinite] transition-all duration-300" 
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    filter: isHovered ? 'drop-shadow(0 0 6px #7FFF00)' : 'none'
                  }}
                />
                <circle 
                  cx={person.x + 15} 
                  cy={person.y - 15} 
                  r="6" 
                  fill={isHovered ? "url(#glowingLeaves)" : "url(#leavesGradient)"} 
                  className="animate-[gentle-sway_3s_ease-in-out_infinite] transition-all duration-300" 
                  style={{ 
                    animationDelay: `${index * 0.2 + 0.5}s`,
                    filter: isHovered ? 'drop-shadow(0 0 6px #7FFF00)' : 'none'
                  }}
                />
              </g>
            </g>
          );
        })}
        
        {/* Crown leaves */}
        <g className="animate-[fade-in_1s_ease-out]" style={{ animationDelay: '3s' }}>
          <circle cx="380" cy="120" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" />
          <circle cx="420" cy="115" r="28" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
          <circle cx="400" cy="95" r="22" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <circle cx="360" cy="140" r="20" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
          <circle cx="440" cy="135" r="24" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
        </g>
      </svg>
      
      {/* People nodes */}
      {people.map((person, index) => (
        <button
          key={person.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:scale-125 z-10
                     ${visiblePeople.includes(person.id) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                     ${selectedPerson?.id === person.id ? 'ring-4 ring-primary/50' : ''}
                     ${hoveredBranch === `branch-${person.id}` ? 'scale-110 brightness-110' : ''}`}
          style={{
            left: `${(person.x / 800) * 100}%`,
            top: `${(person.y / 400) * 100}%`,
            transitionDelay: `${index * 0.2 + 3.5}s`,
            filter: hoveredBranch === `branch-${person.id}` ? 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))' : 'none'
          }}
          onClick={() => onPersonSelect(person)}
          onMouseEnter={() => setHoveredBranch(`branch-${person.id}`)}
          onMouseLeave={() => setHoveredBranch(null)}
        >
          <div className={`w-${person.level === 1 ? '16' : person.level === 0 ? '14' : '12'} h-${person.level === 1 ? '16' : person.level === 0 ? '14' : '12'} 
                         rounded-full overflow-hidden shadow-xl border-4 border-white
                         ${person.id === 'you' ? 'ring-4 ring-primary/50 animate-pulse' : ''}
                         transition-all duration-300`}>
            <img 
              src={person.avatar} 
              alt={person.name} 
              className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
            />
          </div>
          
          {/* Enhanced name label */}
          <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
                          bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium shadow-lg whitespace-nowrap
                          transition-all duration-300 border border-white/20
                          ${hoveredBranch === `branch-${person.id}` ? 'bg-yellow-50/95 dark:bg-yellow-900/95 border-yellow-300/50' : ''}`}>
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