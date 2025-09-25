import React from 'react';
import kindnessFlowImage from '@/assets/kindness-flow.png';

const VisualExplanation: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-300 to-yellow-400">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-16 text-gray-800">
          How Kindness Ripples
        </h2>
        
        <div className="flex justify-center items-center max-w-6xl mx-auto">
          <img 
            src={kindnessFlowImage} 
            alt="How kindness ripples: Your friend nominates you, you do an honest act of kindness, earn pebble coins and nominate others to do an act of kindness, kindness spreads to others, some can literally pay it forward to the ones who truly deserve it"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualExplanation;