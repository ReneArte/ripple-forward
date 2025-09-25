import React, { useEffect, useState } from 'react';

interface RippleProps {
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent';
}

const RippleVisualization: React.FC<RippleProps> = ({ 
  delay = 0, 
  size = 'md', 
  color = 'primary' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  const colorClasses = {
    primary: 'border-hope-green/30',
    secondary: 'border-ripple-teal/30',
    accent: 'border-peach-glow/60',
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto`}>
      {/* Central Pebble */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   w-4 h-4 bg-hope-green rounded-full z-10 transition-all duration-500
                   ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      />
      
      {/* Ripple Rings */}
      {[1, 2, 3].map((ring) => (
        <div
          key={ring}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     rounded-full border-2 ${colorClasses[color]}
                     transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${ring * 30}px` : '0px',
            height: isVisible ? `${ring * 30}px` : '0px',
            opacity: isVisible ? Math.max(0.1, 0.6 - ring * 0.15) : 0,
            animationDelay: `${ring * 0.3}s`,
          }}
        />
      ))}
      
      {/* Forward Arrows */}
      {[0, 120, 240].map((angle, index) => (
        <div
          key={angle}
          className={`absolute w-6 h-6 transition-all duration-700 ease-out`}
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${isVisible ? '-80px' : '-40px'})`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${1 + index * 0.2}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="hsl(var(--hope-green))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default RippleVisualization;