import React from 'react';

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
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${animated ? 'ripple-animation' : ''}`}
      >
        {/* Triple Ripple Rings */}
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <circle
          cx="32"
          cy="32"
          r="20"
          stroke="url(#gradient2)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        <circle
          cx="32"
          cy="32"
          r="12"
          stroke="url(#gradient3)"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Forward Arrow */}
        <path
          d="M26 32L34 24M34 24L34 32M34 24L26 24"
          stroke="hsl(var(--hope-green))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(4, 4)"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--hope-green))" />
            <stop offset="100%" stopColor="hsl(var(--ripple-teal))" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--ripple-teal))" />
            <stop offset="100%" stopColor="hsl(var(--peach-glow))" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--hope-green))" />
            <stop offset="100%" stopColor="hsl(var(--hope-green-light))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;