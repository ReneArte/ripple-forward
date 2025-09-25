import React from 'react';

const AnimatedWavesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sun for light mode */}
      <div className="absolute top-12 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 shadow-2xl opacity-100 dark:opacity-0 transition-opacity duration-500">
        {/* Sun rays */}
        <div className="absolute inset-0">
          <div className="absolute w-1 h-6 bg-yellow-400 -top-8 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          <div className="absolute w-1 h-6 bg-yellow-400 -bottom-8 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          <div className="absolute w-6 h-1 bg-yellow-400 -left-8 top-1/2 transform -translate-y-1/2 rounded-full"></div>
          <div className="absolute w-6 h-1 bg-yellow-400 -right-8 top-1/2 transform -translate-y-1/2 rounded-full"></div>
          <div className="absolute w-1 h-5 bg-yellow-400 -top-6 -left-4 transform rotate-45 rounded-full"></div>
          <div className="absolute w-1 h-5 bg-yellow-400 -top-6 -right-4 transform -rotate-45 rounded-full"></div>
          <div className="absolute w-1 h-5 bg-yellow-400 -bottom-6 -left-4 transform -rotate-45 rounded-full"></div>
          <div className="absolute w-1 h-5 bg-yellow-400 -bottom-6 -right-4 transform rotate-45 rounded-full"></div>
        </div>
      </div>

      {/* Moon for dark mode */}
      <div className="absolute top-12 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl shadow-gray-600/50 opacity-0 dark:opacity-100 transition-opacity duration-500">
        {/* Moon craters */}
        <div className="absolute inset-0">
          <div className="absolute w-3 h-3 bg-gray-400 rounded-full top-4 left-5"></div>
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-8 left-12"></div>
          <div className="absolute w-2.5 h-2.5 bg-gray-400 rounded-full top-12 left-7"></div>
        </div>
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-white/20 rounded-full blur-sm"></div>
      </div>

      {/* Wave Layer 1 - Teal/Turquoise with happy face */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave1" d="M0,180 C200,120 400,220 600,160 C800,100 1000,140 1200,120 L1200,400 L0,400 Z" />
        </defs>
        <use href="#wave1" fill="hsl(180, 70%, 50%)" className="animate-[wave1_25s_ease-in-out_infinite] dark:fill-blue-400/60" />
        
        {/* Happy face on wave 1 */}
        <g className="animate-[wave1_25s_ease-in-out_infinite]" transform="translate(300, 140)">
          {/* Eyes */}
          <circle cx="0" cy="0" r="3" fill="hsl(220, 90%, 20%)" />
          <circle cx="20" cy="0" r="3" fill="hsl(220, 90%, 20%)" />
          {/* Smile */}
          <path d="M -5,8 Q 10,18 25,8" stroke="hsl(220, 90%, 20%)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      </svg>

      {/* Wave Layer 2 - Medium Blue with happy face */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave2" d="M0,240 C150,190 350,270 550,220 C750,170 950,200 1200,180 L1200,400 L0,400 Z" />
        </defs>
        <use href="#wave2" fill="hsl(200, 80%, 60%)" className="animate-[wave2_30s_ease-in-out_infinite_reverse] dark:fill-blue-600/50" />
        
        {/* Happy face on wave 2 */}
        <g className="animate-[wave2_30s_ease-in-out_infinite_reverse]" transform="translate(600, 210)">
          {/* Eyes */}
          <circle cx="0" cy="0" r="3" fill="hsl(220, 90%, 20%)" />
          <circle cx="20" cy="0" r="3" fill="hsl(220, 90%, 20%)" />
          {/* Smile */}
          <path d="M -5,8 Q 10,18 25,8" stroke="hsl(220, 90%, 20%)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      </svg>

      {/* Wave Layer 3 - Dark Blue with happy face */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave3" d="M0,300 C100,260 300,330 500,290 C700,250 900,280 1200,260 L1200,400 L0,400 Z" />
        </defs>
        <use href="#wave3" fill="hsl(220, 80%, 50%)" className="animate-[wave3_35s_ease-in-out_infinite] dark:fill-blue-800/40" />
        
        {/* Happy face on wave 3 */}
        <g className="animate-[wave3_35s_ease-in-out_infinite]" transform="translate(400, 280)">
          {/* Eyes */}
          <circle cx="0" cy="0" r="3" fill="hsl(220, 90%, 20%)" />
          <circle cx="20" cy="0" r="3" fill="hsl(220, 90%, 20%)" />
          {/* Smile */}
          <path d="M -5,8 Q 10,18 25,8" stroke="hsl(220, 90%, 20%)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedWavesBackground;