import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import WaterRipples from '@/components/WaterRipples';
import { Award, Star, Trophy, Waves, Gift } from 'lucide-react';

const Gamification: React.FC = () => {
  const badges = [
    { id: 1, name: 'Wave Maker', description: 'Created your first ripple', earned: true, icon: Waves },
    { id: 2, name: 'Kind Heart', description: 'Received 50 kinds', earned: true, icon: Star },
    { id: 3, name: 'Community Builder', description: 'Nominated 10 people', earned: true, icon: Trophy },
    { id: 4, name: 'Ripple Master', description: 'Started 100 ripples', earned: false, icon: Award },
    { id: 5, name: 'Ocean Creator', description: 'Helped 1000 people', earned: false, icon: Gift },
  ];

  return (
    <div className="min-h-screen bg-background">
      <WaterRipples intensity="medium" />
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Your Ocean of Kindness
            </h1>
            <p className="text-xl text-muted-foreground">
              Watch your ocean grow as you spread more kindness
            </p>
          </div>

          {/* Ocean Visualization */}
          <Card className="mb-12 soft-shadow border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-to-b from-sand via-peach-glow/30 to-ripple-teal relative">
                {/* Animated waves */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 1200 120" className="w-full h-20 text-ripple-teal">
                    <path
                      d="M0,60 C300,100 600,20 1200,60 L1200,120 L0,120 Z"
                      fill="currentColor"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
                
                {/* Progress indicator */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-poppins font-semibold text-lg text-deep-navy mb-2">
                      Ocean Progress: 47%
                    </h3>
                    <div className="w-full bg-white/30 rounded-full h-3">
                      <div className="bg-hope-green h-3 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                    <p className="text-sm text-deep-navy/80 mt-2">
                      123 more acts of kindness to unlock the next level!
                    </p>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 right-20 w-8 h-8 bg-hope-green/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-16 left-16 w-6 h-6 bg-peach-glow/50 rounded-full animate-pulse"></div>
              </div>
            </CardContent>
          </Card>

          {/* Badges Grid */}
          <div className="mb-12">
            <h2 className="font-poppins font-bold text-2xl mb-6">Your Badges</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {badges.map((badge) => {
                const IconComponent = badge.icon;
                return (
                  <Card 
                    key={badge.id} 
                    className={`soft-shadow border-0 ${badge.earned ? 'bg-gradient-to-br from-hope-green/5 to-ripple-teal/5' : 'bg-muted/30'}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        badge.earned 
                          ? 'bg-gradient-to-br from-hope-green to-ripple-teal' 
                          : 'bg-muted'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${badge.earned ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                      <h3 className="font-poppins font-semibold text-lg mb-2">
                        {badge.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {badge.description}
                      </p>
                      <Badge 
                        variant={badge.earned ? "default" : "secondary"}
                        className={badge.earned ? "bg-hope-green text-white" : ""}
                      >
                        {badge.earned ? 'Earned' : 'Locked'}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Sponsor Rewards */}
          <Card className="soft-shadow border-0">
            <CardContent className="p-6">
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center gap-2">
                <Gift className="w-6 h-6 text-peach-glow" />
                Sponsor Rewards
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-hope-green/20 rounded-lg">
                  <h4 className="font-medium mb-2">Coffee Shop Discount</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    15% off at local coffee shops
                  </p>
                  <Badge className="bg-hope-green text-white">
                    Available with Wave Maker badge
                  </Badge>
                </div>
                
                <div className="p-4 border border-muted rounded-lg opacity-60">
                  <h4 className="font-medium mb-2">Restaurant Voucher</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    $20 voucher at participating restaurants
                  </p>
                  <Badge variant="secondary">
                    Unlock with Kind Heart badge
                  </Badge>
                </div>
                
                <div className="p-4 border border-muted rounded-lg opacity-60">
                  <h4 className="font-medium mb-2">Yoga Class Pass</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Free yoga class at wellness centers
                  </p>
                  <Badge variant="secondary">
                    Unlock with Community Builder badge
                  </Badge>
                </div>
                
                <div className="p-4 border border-muted rounded-lg opacity-60">
                  <h4 className="font-medium mb-2">Charity Donation</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    $50 donation to charity of your choice
                  </p>
                  <Badge variant="secondary">
                    Unlock with Ripple Master badge
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gamification;