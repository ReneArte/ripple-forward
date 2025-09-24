import React, { useState, useEffect } from 'react';

interface RockSplashProps {
  trigger?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onComplete?: () => void;
}

const RockSplash: React.FC<RockSplashProps> = ({ 
  trigger = false, 
  size = 'md',
  onComplete 
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
        onComplete?.();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [trigger, onComplete]);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  };

  return (
    <div className="relative flex items-center justify-center py-16">
      {/* Water Surface */}
      <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Rock */}
      <div
        className={`relative ${sizeClasses[size]} transition-all duration-1000 ${
          isActive ? 'animate-bounce' : ''
        }`}
      >
        <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-300 dark:to-gray-500 rounded-full mx-auto mb-2 
                       shadow-lg transform transition-all duration-500"
             style={{
               transform: isActive ? 'translateY(20px) scale(1.2)' : 'translateY(0) scale(1)',
             }}
        />
        
        {/* Splash Effect */}
        {isActive && (
          <>
            {/* Main Splash */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-8 bg-primary/40 rounded-full animate-ping"
                  style={{
                    transform: `rotate(${i * 45}deg) translateY(-20px)`,
                    animationDuration: '0.8s',
                    animationDelay: '0.2s',
                  }}
                />
              ))}
            </div>
            
            {/* Ripple Circles */}
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          rounded-full border-2 border-primary/30 animate-ping"
                style={{
                  width: `${ring * 60}px`,
                  height: `${ring * 60}px`,
                  animationDelay: `${0.3 + ring * 0.2}s`,
                  animationDuration: '1.5s',
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RockSplash;