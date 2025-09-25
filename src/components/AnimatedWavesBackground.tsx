import React from 'react';

const AnimatedWavesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sun/Moon element */}
      <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-yellow-300 dark:bg-gray-300 shadow-lg dark:shadow-gray-400/50 transition-colors duration-500">
        {/* Sun rays for light mode */}
        <div className="absolute inset-0 dark:opacity-0 opacity-100 transition-opacity duration-500">
          <div className="absolute w-1 h-4 bg-yellow-300 -top-6 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-1 h-4 bg-yellow-300 -bottom-6 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute w-4 h-1 bg-yellow-300 -left-6 top-1/2 transform -translate-y-1/2"></div>
          <div className="absolute w-4 h-1 bg-yellow-300 -right-6 top-1/2 transform -translate-y-1/2"></div>
        </div>
        {/* Moon craters for dark mode */}
        <div className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full top-3 left-4"></div>
          <div className="absolute w-1 h-1 bg-gray-400 rounded-full top-6 left-8"></div>
          <div className="absolute w-1.5 h-1.5 bg-gray-400 rounded-full top-8 left-5"></div>
        </div>
      </div>

      {/* Wave Layer 1 - Light Blue */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C300,150 600,250 900,180 C1050,130 1150,160 1200,140 L1200,400 L0,400 Z"
          fill="rgba(147, 197, 253, 0.4)"
          className="animate-[wave1_20s_ease-in-out_infinite] dark:fill-blue-900/40"
        />
      </svg>

      {/* Wave Layer 2 - Medium Blue */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,250 C200,200 400,280 700,220 C900,170 1100,190 1200,160 L1200,400 L0,400 Z"
          fill="rgba(96, 165, 250, 0.35)"
          className="animate-[wave2_25s_ease-in-out_infinite_reverse] dark:fill-blue-800/35"
        />
      </svg>

      {/* Wave Layer 3 - Dark Blue */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1200 400"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C150,260 350,320 550,280 C750,240 950,270 1200,230 L1200,400 L0,400 Z"
          fill="rgba(59, 130, 246, 0.3)"
          className="animate-[wave3_30s_ease-in-out_infinite] dark:fill-blue-700/30"
        />
      </svg>
    </div>
  );
};

export default AnimatedWavesBackground;