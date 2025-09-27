import React from 'react';
import logoImage from '@/assets/itforward-logo-new.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-28 h-28',
    lg: 'w-20 h-20',
    xl: 'w-26 h-26',
  };

  return (
    <div className={`${sizeClasses[size]} ${className} ${animated ? 'animate-pulse' : ''}`}>
      <img 
        src={logoImage} 
        alt="ItForward Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;