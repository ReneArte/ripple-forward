import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import RippleVisualization from '@/components/RippleVisualization';
import WaterRipples from '@/components/WaterRipples';
import RockSplash from '@/components/RockSplash';
import { ArrowRight, Heart, Users, Award, Camera, Star, Trophy, Share2 } from 'lucide-react';

const Landing: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <WaterRipples intensity="light" />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative">
        <WaterRipples intensity="medium" className="opacity-30" />
        <div className="container mx-auto text-center relative z-10">
          <Logo size="lg" animated className="mx-auto mb-8" />
          
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-foreground mb-4 leading-tight">
            ItForward
          </h1>
          
          <h2 className="font-poppins font-semibold text-2xl md:text-4xl text-foreground mb-6">
            It pays to be Kind
          </h2>
          
          <div className="text-xl md:text-2xl text-foreground mb-8">
            <span className="brand-gradient bg-clip-text text-transparent font-semibold">
              "Change starts when you forward it"
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            You can finally start Paying it Forward! Celebrate people's acts of kindness, share their stories with photos and messages. 
            See kindness ripple through your community and get rewarded for being kind. Earn your Kind stickers and nominate others to keep the chain going.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-hope-green hover:bg-hope-green-dark text-white px-8 py-4 text-lg font-medium gentle-hover"
              onClick={() => setShowSplash(true)}
              asChild
            >
              <Link to="/create">
                Celebrate Someone
                <Camera className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-hope-green text-hope-green hover:bg-hope-green hover:text-white px-8 py-4 text-lg font-medium gentle-hover"
              asChild
            >
              <Link to="/ripples">
                Explore Acts of Kindness
              </Link>
            </Button>
          </div>
          
          {/* Ripple Preview */}
          <div className="mb-16">
            <RippleVisualization size="lg" delay={500} />
          </div>
        </div>
      </section>
      
      {/* Rock Splash Animation */}
      <RockSplash trigger={showSplash} onComplete={() => setShowSplash(false)} />
      
      {/* How It Works */}
      <section className="py-16 px-4 bg-card relative">
        <WaterRipples intensity="light" className="opacity-20" />
        <div className="container mx-auto relative z-10">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center gentle-hover soft-shadow border-0 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-hope-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-hope-green" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Celebrate Someone</h3>
                <p className="text-muted-foreground text-sm">Capture and share someone else's act of kindness with photos and their story.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gentle-hover soft-shadow border-0 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ripple-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-ripple-teal" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Build Their Profile</h3>
                <p className="text-muted-foreground text-sm">Add to their kindness profile with photos, stories, and messages from the community.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gentle-hover soft-shadow border-0 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-peach-glow/60 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Earn Rewards</h3>
                <p className="text-muted-foreground text-sm">Collect Kind stickers and badges for celebrating others and spreading positivity.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gentle-hover soft-shadow border-0 transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-hope-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-hope-green" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">Watch It Ripple</h3>
                <p className="text-muted-foreground text-sm">See kindness spread as more people celebrate and nominate others in the chain.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* The Biggest Wave Section */}
      <section className="py-16 px-4 relative">
        <WaterRipples intensity="medium" className="opacity-30" />
        <div className="container mx-auto relative z-10">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-center mb-4">
            🌊 The Biggest Wave
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            This week's most inspiring act of kindness
          </p>
          
          <div className="max-w-2xl mx-auto">
            <Card className="soft-shadow border-0 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-hope-green to-ripple-teal flex items-center justify-center">
                <Camera className="w-24 h-24 text-white/70" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-hope-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg">Alex Johnson</h3>
                    <p className="text-muted-foreground text-sm">@alexjohnson</p>
                  </div>
                </div>
                
                <h4 className="font-poppins font-semibold text-xl mb-3">
                  Organized food drive for 200 families
                </h4>
                <p className="text-muted-foreground mb-4">
                  Alex spent their weekend organizing a community food drive that provided meals for 200 families in need. 
                  They coordinated with local businesses and volunteers to make it happen. The smile on every family's face was priceless.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-hope-green hover:text-hope-green-dark transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">247 kinds</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="font-medium">32 comments</span>
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-hope-green text-hope-green hover:bg-hope-green hover:text-white"
            >
              Explore More Ripples
            </Button>
          </div>
        </div>
      </section>
      
      {/* Rock Splash Animation */}
      <RockSplash trigger={false} size="sm" />
      
      {/* CTA Section */}
      <section className="py-16 px-4 brand-gradient text-white relative overflow-hidden">
        <WaterRipples intensity="medium" className="opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Every act of kindness deserves to be celebrated
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start building someone's kindness profile today. Share their story, capture their moment, and watch the ripples of positivity spread through your community.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-hope-green hover:bg-white/90 px-8 py-4 text-lg font-medium gentle-hover transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/create">
              Celebrate Someone Today
              <Award className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ItForward. Spreading kindness, one ripple at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;