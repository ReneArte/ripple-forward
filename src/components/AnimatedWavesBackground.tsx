import React from 'react';

const AnimatedWavesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wave Layer 1 - Teal */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z"
            fill="hsl(var(--ripple-teal))"
            className="animate-[wave1_8s_ease-in-out_infinite]"
          />
          {/* Smiley face on first wave */}
          <g className="animate-[wave1_8s_ease-in-out_infinite]" transform="translate(200,350)">
            {/* Closed eyes */}
            <path d="M-15,-10 Q-10,-15 -5,-10" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M5,-10 Q10,-15 15,-10" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Smile */}
            <path d="M-20,5 Q0,25 20,5" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Wave Layer 2 - Light Teal */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z"
            fill="hsl(173 50% 60%)"
            className="animate-[wave2_10s_ease-in-out_infinite]"
          />
          {/* Smiley face on second wave */}
          <g className="animate-[wave2_10s_ease-in-out_infinite]" transform="translate(500,450)">
            {/* Closed eyes */}
            <path d="M-15,-10 Q-10,-15 -5,-10" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M5,-10 Q10,-15 15,-10" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Smile */}
            <path d="M-20,5 Q0,25 20,5" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </g>
        </svg>
      </div>

      {/* Wave Layer 3 - Light Blue */}
      <div className="absolute inset-0">
        <svg 
          viewBox="0 0 1200 800" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0,600 C350,400 750,800 1200,500 L1200,800 L0,800 Z"
            fill="hsl(200 70% 65%)"
            className="animate-[wave3_12s_ease-in-out_infinite]"
          />
          {/* Smiley face on third wave */}
          <g className="animate-[wave3_12s_ease-in-out_infinite]" transform="translate(800,550)">
            {/* Closed eyes */}
            <path d="M-15,-10 Q-10,-15 -5,-10" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M5,-10 Q10,-15 15,-10" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* Smile */}
            <path d="M-20,5 Q0,25 20,5" stroke="hsl(var(--deep-navy))" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedWavesBackground;