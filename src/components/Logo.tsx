import React from 'react';
import logoImage from '@/assets/itforward-logo-new.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', animated = false }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
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