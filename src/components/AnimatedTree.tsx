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
    <div className="relative w-full h-[600px] bg-gradient-to-b from-sky-200 via-sky-100 to-green-200 dark:from-slate-900 dark:via-slate-800 dark:to-green-900 rounded-lg overflow-hidden">
      {/* Realistic Tree SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
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
        
        {/* Realistic vertical tree trunk */}
        <path
          d="M400,600 Q398,550 400,500 Q402,450 400,400 Q398,350 400,300 Q402,250 400,200 Q398,150 400,100"
          stroke="url(#trunkGradient)"
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
          className="animate-[drawTrunk_3s_ease-out]"
        />
        
        {/* Thick lower trunk base */}
        <path
          d="M400,600 Q395,580 400,560 Q405,540 400,520"
          stroke="url(#trunkGradient)"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          className="animate-[drawTrunk_3s_ease-out]"
        />

        {/* Root system spreading underground */}
        <g className="animate-[fade-in_1s_ease-out]" style={{ animationDelay: '0.5s' }}>
          <path d="M400,600 Q360,610 320,620" stroke="url(#branchGradient)" strokeWidth="6" fill="none" opacity="0.7" />
          <path d="M400,600 Q440,610 480,620" stroke="url(#branchGradient)" strokeWidth="6" fill="none" opacity="0.7" />
          <path d="M400,600 Q350,620 300,635" stroke="url(#branchGradient)" strokeWidth="4" fill="none" opacity="0.5" />
          <path d="M400,600 Q450,620 500,635" stroke="url(#branchGradient)" strokeWidth="4" fill="none" opacity="0.5" />
        </g>

        {/* Major branches at different levels */}
        <g className="animate-[fade-in_1s_ease-out]" style={{ animationDelay: '1.5s' }}>
          {/* Level 1 branches (nominator area) */}
          <path d="M400,150 Q350,120 320,100" stroke="url(#branchGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M400,150 Q450,120 480,100" stroke="url(#branchGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
          
          {/* Level 2 branches (your level) */}
          <path d="M400,250 Q340,220 280,200" stroke="url(#branchGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M400,250 Q460,220 520,200" stroke="url(#branchGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M400,250 Q380,220 360,190" stroke="url(#branchGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M400,250 Q420,220 440,190" stroke="url(#branchGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
          
          {/* Level 3 branches (friends level) */}
          <path d="M400,350 Q320,320 250,300" stroke="url(#branchGradient)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M400,350 Q480,320 550,300" stroke="url(#branchGradient)" strokeWidth="14" fill="none" strokeLinecap="round" />
          <path d="M400,350 Q360,330 320,310" stroke="url(#branchGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M400,350 Q440,330 480,310" stroke="url(#branchGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
          
          {/* Level 4 branches (extended network) */}
          <path d="M400,450 Q300,420 200,400" stroke="url(#branchGradient)" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M400,450 Q500,420 600,400" stroke="url(#branchGradient)" strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M400,450 Q340,430 280,410" stroke="url(#branchGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M400,450 Q460,430 520,410" stroke="url(#branchGradient)" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M400,450 Q380,440 360,430" stroke="url(#branchGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M400,450 Q420,440 440,430" stroke="url(#branchGradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
        </g>

        {/* Dynamic person-specific branches */}
        {people.map((person, index) => {
          if (person.level === 0) return null;
          
          const parent = people.find(p => 
            (person.level === 1 && p.level === 0) || 
            (person.level === 2 && p.id === 'you') ||
            (person.level === 3 && p.level === 2 && Math.abs(p.x - person.x) < 100)
          );
          
          if (!parent) return null;
          
          const branchId = `branch-${person.id}`;
          const isHovered = hoveredBranch === branchId;
          const strokeWidth = person.level === 1 ? 6 : person.level === 2 ? 8 : 10;
          
          return (
            <g key={branchId}>
              <path
                d={getBranchPath(person, parent)}
                stroke={isHovered ? "url(#illuminatedBranch)" : "url(#branchGradient)"}
                strokeWidth={isHovered ? strokeWidth + 3 : strokeWidth}
                fill="none"
                strokeLinecap="round"
                className="animate-[drawBranch_2s_ease-out] transition-all duration-300 cursor-pointer"
                style={{ 
                  animationDelay: `${index * 0.4 + 2}s`,
                  filter: isHovered ? 'drop-shadow(0 0 10px #FFD700)' : 'none'
                }}
                onMouseEnter={() => setHoveredBranch(branchId)}
                onMouseLeave={() => setHoveredBranch(null)}
              />
            </g>
          );
        })}
        
        {/* Realistic foliage canopy */}
        <g className="animate-[fade-in_1.5s_ease-out]" style={{ animationDelay: '3s' }}>
          {/* Top canopy */}
          <circle cx="400" cy="80" r="35" fill="url(#leavesGradient)" className="animate-[gentle-sway_5s_ease-in-out_infinite]" />
          <circle cx="360" cy="95" r="30" fill="url(#leavesGradient)" className="animate-[gentle-sway_5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
          <circle cx="440" cy="95" r="30" fill="url(#leavesGradient)" className="animate-[gentle-sway_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <circle cx="330" cy="115" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_5s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
          <circle cx="470" cy="115" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
          
          {/* Mid-level foliage */}
          <circle cx="320" cy="140" r="28" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" />
          <circle cx="480" cy="140" r="28" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '0.7s' }} />
          <circle cx="280" cy="170" r="22" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '1.2s' }} />
          <circle cx="520" cy="170" r="22" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '1.8s' }} />
          
          {/* Lower branches foliage */}
          <circle cx="250" cy="220" r="32" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }} />
          <circle cx="550" cy="220" r="32" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }} />
          <circle cx="320" cy="250" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '2.2s' }} />
          <circle cx="480" cy="250" r="25" fill="url(#leavesGradient)" className="animate-[gentle-sway_4s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }} />
          
          {/* Dense lower foliage */}
          <circle cx="200" cy="320" r="35" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" />
          <circle cx="600" cy="320" r="35" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
          <circle cx="280" cy="350" r="28" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '1.7s' }} />
          <circle cx="520" cy="350" r="28" fill="url(#leavesGradient)" className="animate-[gentle-sway_3s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
        </g>
      </svg>
      
      {/* Ground level with grass */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-300 to-transparent dark:from-green-800 dark:to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-400 to-green-300 dark:from-green-900 dark:to-green-800"></div>
      </div>
      
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
            top: `${(person.y / 600) * 100}%`,
            transitionDelay: `${index * 0.2 + 4}s`,
            filter: hoveredBranch === `branch-${person.id}` ? 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.9))' : 'none'
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