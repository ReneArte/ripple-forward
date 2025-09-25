import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import WaterRipples from '@/components/WaterRipples';
import { Camera, Heart, MessageCircle, Users, Award, ChevronDown } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <WaterRipples intensity="light" />
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-hope-green to-ripple-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl font-bold">A</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-2">
              Alex Johnson
            </h1>
            <p className="text-xl text-muted-foreground mb-4">@alexjohnson</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Community organizer spreading kindness one act at a time. Believer in the ripple effect of good deeds.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <Card className="text-center soft-shadow border-0">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-hope-green mb-1">247</div>
                <div className="text-sm text-muted-foreground">Acts Celebrated</div>
              </CardContent>
            </Card>
            <Card className="text-center soft-shadow border-0">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-ripple-teal mb-1">1.2K</div>
                <div className="text-sm text-muted-foreground">Kinds Received</div>
              </CardContent>
            </Card>
            <Card className="text-center soft-shadow border-0">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-peach-glow mb-1">156</div>
                <div className="text-sm text-muted-foreground">People Helped</div>
              </CardContent>
            </Card>
          </div>

          {/* Earned Nominations */}
          <Card className="mb-8 soft-shadow border-0">
            <CardContent className="p-6">
              <h3 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-hope-green" />
                Ripple Nominations Available: 3
              </h3>
              <p className="text-muted-foreground mb-4">
                You've earned nomination tokens to invite 3 people to join your ripple network!
              </p>
              <Button className="bg-hope-green hover:bg-hope-green-dark text-white">
                Nominate Friends
              </Button>
            </CardContent>
          </Card>

          {/* Kindness Wall */}
          <div className="mb-8">
            <h2 className="font-poppins font-bold text-2xl mb-6">Kindness Wall</h2>
            
            {/* Polaroid-style photo grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="soft-shadow border-0 transform rotate-1 hover:rotate-0 transition-transform duration-300 bg-white">
                  <div className="p-4 pb-2">
                    <div className="aspect-square bg-gradient-to-br from-hope-green to-ripple-teal rounded-lg mb-3 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-white/70" />
                    </div>
                    <p className="text-sm font-medium text-center mb-2">
                      Organized community food drive
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>32</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>8</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Ripple Effect Diagram */}
          <Card className="soft-shadow border-0">
            <CardContent className="p-6">
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-ripple-teal" />
                Ripple Effect Network
              </h3>
              
              <div className="text-center">
                {/* Nominated by */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-4">Nominated by</p>
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <span className="text-sm font-medium">M</span>
                  </div>
                  <p className="text-sm font-medium mt-2">Maria Lopez</p>
                </div>

                {/* Current user */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-hope-green to-ripple-teal rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-lg font-bold">A</span>
                  </div>
                  <p className="text-lg font-semibold mt-2">Alex Johnson</p>
                </div>

                {/* Nominated others */}
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Nominated</p>
                  <div className="flex justify-center gap-4">
                    {['S', 'J', 'K'].map((initial, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium">{initial}</span>
                        </div>
                        <p className="text-sm font-medium mt-2">
                          {initial === 'S' ? 'Sarah M.' : initial === 'J' ? 'John D.' : 'Kate R.'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;