import React from 'react';

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
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Triple Ripple Rings with gradient */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#gradient1)"
          strokeWidth="4"
          fill="none"
          opacity="0.8"
        />
        <circle
          cx="50"
          cy="50"
          r="28"
          stroke="url(#gradient2)"
          strokeWidth="5"
          fill="none"
          opacity="0.9"
        />
        <circle
          cx="50"
          cy="50"
          r="16"
          stroke="url(#gradient3)"
          strokeWidth="6"
          fill="none"
        />
        
        {/* Forward Arrow - larger and more prominent */}
        <path
          d="M 35 50 L 65 50 M 58 43 L 65 50 L 58 57"
          stroke="#FF6B35"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4CAF7D" />
            <stop offset="100%" stopColor="#1AA6A6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1AA6A6" />
            <stop offset="100%" stopColor="#FFC9A6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="100%" stopColor="#4CAF7D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;