import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import RippleVisualization from '@/components/RippleVisualization';
import WaterRipples from '@/components/WaterRipples';
import RockSplash from '@/components/RockSplash';
import AnimatedWavesBackground from '@/components/AnimatedWavesBackground';
import VisualExplanation from '@/components/VisualExplanation';
import PayItForward from '@/components/PayItForward';
import SplashCarousel from '@/components/SplashCarousel';
import foodDriveImage from '@/assets/food-drive-community.png';
import heroWaves from '@/assets/hero-waves.png';
import { ArrowRight, Heart, Users, Award, Camera, Star, Trophy, Share2 } from 'lucide-react';
const Landing: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <WaterRipples intensity="light" />
      <Header />
      
      {/* Hero Section - Ocean Video Background */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
        {/* Ocean waves video background */}
        <div className="absolute inset-0 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline style={{
          filter: 'brightness(0.8)'
        }}>
            <source src="/ocean-waves.mp4" type="video/mp4" />
          </video>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <Logo size="hero" animated className="mx-auto mb-8" />
          
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-white mb-4 leading-tight drop-shadow-lg">
            ItForward
          </h1>
          
          <h2 className="font-poppins font-semibold text-2xl md:text-4xl text-white/90 mb-6 drop-shadow-md">
            It pays to be Kind
          </h2>
          
          <div className="text-xl md:text-2xl text-white/80 mb-8 drop-shadow-sm">
            <span className="font-semibold">
              "Change starts when you forward it"
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            You can finally start Paying it Forward! Celebrate people's acts of kindness, share their stories with photos and messages. 
            See kindness ripple through your community and get rewarded for being kind. Earn your Kind stickers and nominate others to keep the chain going.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-deep-navy hover:bg-white/90 px-8 py-4 text-lg font-medium gentle-hover shadow-lg" asChild>
              <Link to="/create">
                Celebrate Someone
                <Camera className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-deep-navy px-8 py-4 text-lg font-medium gentle-hover shadow-lg backdrop-blur-sm" asChild>
              <Link to="/ripples">
                Explore Acts of Kindness
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Rock Splash Animation */}
      <RockSplash trigger={showSplash} onComplete={() => setShowSplash(false)} />
      
      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-br from-background via-card to-muted relative">
        <div className="container mx-auto relative z-10">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-stone-400 to-stone-600 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Camera className="w-12 h-12 text-stone-700" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stone-400/10 to-stone-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-transparent"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Celebrate Someone</h3>
              <p className="text-muted-foreground text-sm">Capture and share someone else's act of kindness with photos and their story. <strong>Only YOU can build other people's profiles</strong> (except personal info like pictures).</p>
            </div>
            
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-blue-600 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Trophy className="w-12 h-12 text-blue-700" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-600/10 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Build Their Profile</h3>
              <p className="text-muted-foreground text-sm">Add to their kindness profile with photos, stories, and messages from the community. <strong>Only others can build YOUR profile</strong>.</p>
            </div>
            
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-orange-600 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Star className="w-12 h-12 text-orange-600" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/10 to-orange-600/10 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Earn Rewards</h3>
              <p className="text-muted-foreground text-sm">Collect pebbles based on acts of kindness received. <strong>You must always nominate at least one person</strong> to keep the kindness flowing.</p>
            </div>
            
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Share2 className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-600/10 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Watch It Ripple</h3>
              <p className="text-muted-foreground text-sm">See kindness spread as more people celebrate and nominate others in the chain.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Explanation Section */}
      <VisualExplanation />
      
      {/* The Biggest Wave Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/biggest-wave-video.mp4" type="video/mp4" />
          </video>
          
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h2 className="font-poppins font-bold text-3xl text-center mb-4 text-slate-50 md:text-5xl">
            The Biggest Wave
          </h2>
          <p className="text-xl text-center mb-12 text-zinc-50">
            This week's most inspiring act of kindness
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Main Featured Story */}
            <div>
              <Card className="soft-shadow border-0 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img src={foodDriveImage} alt="Community food drive with people receiving food from mobile truck" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src="https://i.pravatar.cc/100?img=12" alt="Alex Perez" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">Alex Perez</h3>
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
                      <Button variant="ghost" size="sm" className="flex items-center gap-2 text-hope-green hover:text-hope-green-dark hover:bg-hope-green/10" onClick={() => alert('Liked! Feature coming soon.')}>
                        <Heart className="w-5 h-5" />
                        <span className="font-medium">247 kinds</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground" onClick={() => alert('Comments feature coming soon.')}>
                        <span className="font-medium">32 comments</span>
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-6">
                <Button variant="outline" className="border-hope-green text-deep-navy font-bold hover:bg-hope-green hover:text-white" asChild>
                  <Link to="/splashes">
                    Explore More Splashes
                  </Link>
                </Button>
              </div>
            </div>

            {/* Splashers That Deserve Support */}
            <div>
              <Card className="soft-shadow border-0 h-full">
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl mb-6 text-center">
                    Splashers that deserve to be paid for their kindness
                  </h3>
                  
                  <div className="space-y-4">
                    {[{
                    name: "Maria Santos",
                    action: "Built wheelchair ramps",
                    amount: "$2,847",
                    supporters: 47
                  }, {
                    name: "David Chen",
                    action: "Free coding classes",
                    amount: "$1,923",
                    supporters: 31
                  }, {
                    name: "Sarah Williams",
                    action: "Community garden",
                    amount: "$3,156",
                    supporters: 62
                  }, {
                    name: "James Rodriguez",
                    action: "Youth mentoring",
                    amount: "$1,445",
                    supporters: 28
                  }].map((person, index) => <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${50 + index}`} alt={person.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{person.name}</p>
                            <p className="text-xs text-muted-foreground">{person.action}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-sm text-hope-green">{person.amount}</p>
                          <p className="text-xs text-muted-foreground">{person.supporters} supporters</p>
                        </div>
                      </div>)}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="outline" size="sm" onClick={() => alert('Support feature coming soon!')} className="border-ripple-teal text-ripple-teal hover:bg-ripple-teal font-bold text-gray-950">
                      Support Someone Today
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rock Splash Animation */}
      <RockSplash trigger={false} size="sm" />
      
      {/* Pay It Forward Section */}
      <PayItForward />
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <WaterRipples intensity="medium" className="opacity-20" />
        <div className="container mx-auto text-center relative z-10 bg-transparent">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Every act of kindness deserves to be celebrated
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start building someone's kindness profile today. Share their story, capture their moment, and watch the ripples of positivity spread through your community.
          </p>
          <Button size="lg" className="bg-white text-hope-green hover:bg-white/90 px-8 py-4 text-lg font-medium gentle-hover transform hover:scale-105 transition-all duration-300" asChild>
            <Link to="/create">
              Celebrate Someone Today
              <Award className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Splash Carousel */}
      <SplashCarousel isOpen={showCarousel} onClose={() => setShowCarousel(false)} />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ItForward. Spreading kindness, one ripple at a time.</p>
        </div>
      </footer>
    </div>;
};
export default Landing;