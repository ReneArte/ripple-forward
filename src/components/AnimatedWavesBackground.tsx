import React from 'react';

const AnimatedWavesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sun for light mode */}
      <div className="absolute top-8 left-12 w-24 h-24 opacity-100 dark:opacity-0 transition-opacity duration-500">
        {/* Sun glow */}
        <div className="absolute -inset-4 bg-yellow-300/30 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute -inset-2 bg-yellow-300/40 rounded-full animate-pulse blur-lg animation-delay-500"></div>
        
        {/* Sun body */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 shadow-2xl animate-[sunFloat_6s_ease-in-out_infinite]">
          {/* Sun face - happier */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Eyes - closer together and happier */}
            <div className="absolute top-6 left-8 w-2 h-2 bg-orange-600 rounded-full"></div>
            <div className="absolute top-6 right-8 w-2 h-2 bg-orange-600 rounded-full"></div>
            {/* Bigger smile */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-3 border-orange-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Rotating sun rays */}
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
          <div className="absolute w-1 h-8 bg-yellow-400 -top-10 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          <div className="absolute w-1 h-8 bg-yellow-400 -bottom-10 left-1/2 transform -translate-x-1/2 rounded-full"></div>
          <div className="absolute w-8 h-1 bg-yellow-400 -left-10 top-1/2 transform -translate-y-1/2 rounded-full"></div>
          <div className="absolute w-8 h-1 bg-yellow-400 -right-10 top-1/2 transform -translate-y-1/2 rounded-full"></div>
          <div className="absolute w-1 h-6 bg-yellow-400 -top-8 -left-6 transform rotate-45 rounded-full"></div>
          <div className="absolute w-1 h-6 bg-yellow-400 -top-8 -right-6 transform -rotate-45 rounded-full"></div>
          <div className="absolute w-1 h-6 bg-yellow-400 -bottom-8 -left-6 transform -rotate-45 rounded-full"></div>
          <div className="absolute w-1 h-6 bg-yellow-400 -bottom-8 -right-6 transform rotate-45 rounded-full"></div>
        </div>
      </div>

      {/* Starry night background for dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none">
        {/* Stars */}
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-16 left-40 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute top-8 left-60 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute top-20 left-80 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-500"></div>
        <div className="absolute top-12 left-96 w-1 h-1 bg-white/70 rounded-full animate-pulse animation-delay-1500"></div>
        <div className="absolute top-24 right-20 w-1.5 h-1.5 bg-white/90 rounded-full animate-pulse animation-delay-3000"></div>
        <div className="absolute top-8 right-40 w-1 h-1 bg-white/50 rounded-full animate-pulse animation-delay-2500"></div>
        <div className="absolute top-18 right-60 w-1 h-1 bg-white/80 rounded-full animate-pulse animation-delay-4000"></div>
        <div className="absolute top-14 right-80 w-2 h-2 bg-white/60 rounded-full animate-pulse animation-delay-3500"></div>
        <div className="absolute top-6 right-96 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-1000"></div>
        
        {/* More scattered stars */}
        <div className="absolute top-32 left-32 w-1 h-1 bg-white/40 rounded-full animate-pulse animation-delay-6000"></div>
        <div className="absolute top-28 left-72 w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse animation-delay-4500"></div>
        <div className="absolute top-36 right-32 w-1 h-1 bg-white/90 rounded-full animate-pulse animation-delay-5000"></div>
        <div className="absolute top-40 right-72 w-1 h-1 bg-white/60 rounded-full animate-pulse animation-delay-5500"></div>
      </div>

      {/* Moon for dark mode */}
      <div className="absolute top-8 left-12 w-24 h-24 opacity-0 dark:opacity-100 transition-opacity duration-500">
        {/* Moon glow */}
        <div className="absolute -inset-4 bg-gray-300/20 rounded-full animate-pulse blur-xl"></div>
        
        {/* Moon body */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl shadow-gray-600/50 animate-[moonFloat_8s_ease-in-out_infinite]">
          {/* Moon craters */}
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full top-6 left-7"></div>
          <div className="absolute w-2 h-2 bg-gray-500 rounded-full top-10 left-16"></div>
          <div className="absolute w-2.5 h-2.5 bg-gray-500 rounded-full top-14 left-9"></div>
          
          {/* Moon face - happier */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Eyes - closer together and happier */}
            <div className="absolute top-6 left-8 w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="absolute top-6 right-8 w-2 h-2 bg-gray-600 rounded-full"></div>
            {/* Bigger smile */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-3 border-gray-600 rounded-full"></div>
          </div>
        </div>
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
        <use href="#wave1" fill="hsl(180, 70%, 50%)" className="animate-[wave1_60s_ease-in-out_infinite] dark:fill-blue-400/60" />
        
        {/* Happy face on wave 1 */}
        <g className="animate-[wave1_60s_ease-in-out_infinite]" transform="translate(300, 140)">
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
        <use href="#wave2" fill="hsl(200, 80%, 60%)" className="animate-[wave2_75s_ease-in-out_infinite_reverse] dark:fill-blue-600/50" />
        
        {/* Happy face on wave 2 */}
        <g className="animate-[wave2_75s_ease-in-out_infinite_reverse]" transform="translate(600, 210)">
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
        <use href="#wave3" fill="hsl(220, 80%, 50%)" className="animate-[wave3_90s_ease-in-out_infinite] dark:fill-blue-800/40" />
        
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