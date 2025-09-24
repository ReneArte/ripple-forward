import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import RippleVisualization from '@/components/RippleVisualization';
import { ArrowRight, Heart, Users, Share2 } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Logo size="lg" animated className="mx-auto mb-8" />
          
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight">
            Change starts when you{' '}
            <span className="brand-gradient bg-clip-text text-transparent">
              forward it
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Record one helpful act, nominate three friends. Watch kindness ripple through your community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-hope-green hover:bg-hope-green-dark text-white px-8 py-4 text-lg font-medium gentle-hover"
              asChild
            >
              <Link to="/create">
                Start a Ripple
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-hope-green text-hope-green hover:bg-hope-green hover:text-white px-8 py-4 text-lg font-medium gentle-hover"
              asChild
            >
              <Link to="/ripples">
                Explore Ripples
              </Link>
            </Button>
          </div>
          
          {/* Ripple Preview */}
          <div className="mb-16">
            <RippleVisualization size="lg" delay={500} />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center gentle-hover soft-shadow border-0">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-hope-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-hope-green" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Record Your Act</h3>
                <p className="text-muted-foreground">Share a moment when you helped someone or made their day better.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gentle-hover soft-shadow border-0">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-ripple-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-ripple-teal" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Nominate Three</h3>
                <p className="text-muted-foreground">Invite three people to continue the chain of kindness.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center gentle-hover soft-shadow border-0">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-peach-glow/60 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-deep-navy" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Watch It Spread</h3>
                <p className="text-muted-foreground">See your ripple grow as kindness spreads through the community.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 brand-gradient text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Every ripple starts with a pebble
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-xl mx-auto">
            Your small act of kindness could be the beginning of something beautiful.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-hope-green hover:bg-white/90 px-8 py-4 text-lg font-medium gentle-hover"
            asChild
          >
            <Link to="/create">
              Drop Your Pebble
              <ArrowRight className="ml-2 w-5 h-5" />
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