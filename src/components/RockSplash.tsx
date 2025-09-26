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
    </div>
  );
};

export default RockSplash;