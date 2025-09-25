import React from 'react';
import logoImage from '@/assets/itforward-logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = false }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
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