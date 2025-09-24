import React, { useEffect, useState } from 'react';

interface WaterRipplesProps {
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
}

const WaterRipples: React.FC<WaterRipplesProps> = ({ 
  intensity = 'light', 
  className = '' 
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const rippleCount = intensity === 'light' ? 3 : intensity === 'medium' ? 5 : 8;
    const newRipples = Array.from({ length: rippleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3000,
    }));
    setRipples(newRipples);
  }, [intensity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute animate-ping"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            animationDelay: `${ripple.delay}ms`,
            animationDuration: '4s',
            animationIterationCount: 'infinite',
          }}
        >
          <div className="w-8 h-8 bg-primary/5 dark:bg-primary/10 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-16 h-16 -ml-4 -mt-4 bg-primary/3 dark:bg-primary/8 rounded-full animate-ping" 
               style={{ animationDelay: '0.5s', animationDuration: '4s' }} />
          <div className="absolute inset-0 w-24 h-24 -ml-8 -mt-8 bg-primary/2 dark:bg-primary/6 rounded-full animate-ping" 
               style={{ animationDelay: '1s', animationDuration: '4s' }} />
        </div>
      ))}
    </div>
  );
};

export default WaterRipples;