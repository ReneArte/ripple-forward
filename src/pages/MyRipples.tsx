import React from 'react';
import Header from '@/components/Header';
import FamilyTreeRipples from '@/components/FamilyTreeRipples';

const MyRipples: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <FamilyTreeRipples />
      </div>
    </div>
  );
};

export default MyRipples;