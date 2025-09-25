import React from 'react';
import Header from '@/components/Header';
import RadarRipples from '@/components/RadarRipples';

const MyRipples: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <RadarRipples />
      </div>
    </div>
  );
};

export default MyRipples;