import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import WorldMap from '@/components/WorldMap';
import SplashCarousel from '@/components/SplashCarousel';
import { Heart, Camera } from 'lucide-react';

const Splashes: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <div className="container mx-auto">
            <h1 className="font-poppins font-semibold text-4xl md:text-5xl text-center mb-4">
              Explore Splashes
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              See where kindness is happening around the world
            </p>
            
            <div className="max-w-4xl mx-auto mb-12">
              <WorldMap />
            </div>
            
            {/* Featured splashes grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white/70" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">U</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">User {i}</h4>
                        <p className="text-xs text-muted-foreground">@user{i}</p>
                      </div>
                    </div>
                    
                    <h5 className="font-medium text-sm mb-2">Act of kindness #{i}</h5>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-red-500">
                          <Heart className="w-3 h-3" />
                          {Math.floor(Math.random() * 200) + 50}
                        </span>
                        <span className="text-muted-foreground">{Math.floor(Math.random() * 30) + 5} comments</span>
                      </div>
                      <span className="text-muted-foreground">{i}h ago</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-hope-green text-hope-green hover:bg-hope-green hover:text-white"
                onClick={() => setShowCarousel(true)}
              >
                View More Splashes
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      {/* Splash Carousel */}
      <SplashCarousel isOpen={showCarousel} onClose={() => setShowCarousel(false)} />
    </div>
  );
};

export default Splashes;