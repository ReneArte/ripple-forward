import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
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
import CelebrateModal from '@/components/CelebrateModal';
import foodDriveImage from '@/assets/food-drive-community.png';
import heroWaves from '@/assets/hero-waves.png';
import { ArrowRight, Heart, Users, Award, Camera, Star, Trophy, Share2 } from 'lucide-react';
const Landing: React.FC = () => {
  const [showSplash, setShowSplash] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const { theme } = useTheme();

  // Determine if we're in dark mode - reactive to theme changes
  const isDarkMode = React.useMemo(() => {
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    // For system theme, check the media query
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }, [theme]);
  return <div className="min-h-screen bg-background relative overflow-hidden">
      <WaterRipples intensity="light" />
      <Header />
      
      {/* Hero Section - Ocean Video Background */}
      <section className="pt-24 pb-16 dark:pb-32 px-4 relative overflow-hidden bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600">
        {/* Ocean waves video background */}
        <div className="absolute inset-0 overflow-hidden">
          <video key={isDarkMode ? 'dark' : 'light'} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline style={{
          filter: 'brightness(0.8)'
        }}>
            <source src={isDarkMode ? "/ocean-waves-dark.mp4" : "/ocean-waves.mp4"} type="video/mp4" />
          </video>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 pt-6">
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
            <CelebrateModal 
              trigger={
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium gentle-hover shadow-lg">
                  Celebrate Someone
                  <Camera className="ml-2 w-5 h-5" />
                </Button>
              } 
            />
            
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-medium gentle-hover shadow-lg backdrop-blur-sm" asChild>
              <Link to="/splashes">
                Explore Acts of Kindness
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Rock Splash Animation */}
      <RockSplash trigger={showSplash} onComplete={() => setShowSplash(false)} />
      
      {/* How It Works */}
      <section className="py-16 px-4 bg-card dark:bg-black relative">
        <div className="container mx-auto relative z-10">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Camera className="w-12 h-12 text-orange-700" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-transparent"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Celebrate Someone</h3>
              <p className="text-muted-foreground text-sm">Capture and share someone else's act of kindness with photos and their story. <strong>Only YOU can build other people's profiles</strong> (except personal info like pictures).</p>
            </div>
            
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-400 to-yellow-500 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Trophy className="w-12 h-12 text-green-700" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/10 to-yellow-500/10 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Build Their Profile</h3>
              <p className="text-muted-foreground text-sm">Add to their kindness profile with photos, stories, and messages from the community. <strong>Only others can build YOUR profile</strong>.</p>
            </div>
            
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-500 to-blue-600 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Star className="w-12 h-12 text-green-700" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/10 to-blue-600/10 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">Earn Rewards</h3>
              <p className="text-muted-foreground text-sm">Collect pebbles based on acts of kindness received. <strong>You must always nominate at least one person</strong> to keep the kindness flowing.</p>
            </div>
            
            <div className="text-center gentle-hover transform hover:scale-105 transition-all duration-300 relative">
              <div className="relative mb-6 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-800 
                               flex items-center justify-center shadow-lg overflow-hidden
                               hover:shadow-xl transition-all duration-300">
                  <div className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm 
                                 flex items-center justify-center group-hover:scale-110 transition-transform duration-300
                                 group-hover:bg-white">
                    <Share2 className="w-12 h-12 text-blue-600" />
                  </div>
                </div>
                {/* Soft glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-800/10 
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
      <section className="py-16 px-4 bg-card relative overflow-hidden">
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
                  
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer" asChild>
                          <Link to="/kindness">
                            <Heart className="w-5 h-5" />
                            <span className="font-medium">247 kinds</span>
                          </Link>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-2 text-muted-foreground hover:text-foreground cursor-pointer" asChild>
                          <Link to="/comments">
                            <span className="font-medium">32 comments</span>
                          </Link>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-sm text-muted-foreground hover:text-foreground cursor-pointer" asChild>
                        <Link to="/details">2 days ago</Link>
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-sm font-medium text-muted-foreground">Sponsored by</span>
                      <Button variant="ghost" size="sm" className="text-sm font-medium text-primary hover:text-primary/80 cursor-pointer" asChild>
                        <Link to="/sponsor/community-food-bank">Community Food Bank</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center mt-6">
                <Button variant="secondary" asChild>
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
                    World Splashers
                  </h3>
                  
                  <div className="space-y-4">
                    {[{
                    name: "Maria Santos",
                    action: "Donated wedding venue and catering to 500 refugee families",
                    amount: "$285K",
                    supporters: 4700,
                    country: "🇲🇽",
                    location: "Mexico City"
                  }, {
                    name: "David Chen",
                    action: "Built coding bootcamp dormitories for homeless youth",
                    amount: "$1.9M",
                    supporters: 31000,
                    country: "🇸🇬",
                    location: "Singapore"
                  }, {
                    name: "Sarah Williams",
                    action: "Planted fruit trees in food deserts across 50 cities",
                    amount: "$3.2M",
                    supporters: 62000,
                    country: "🇨🇦",
                    location: "Toronto"
                  }, {
                    name: "James Rodriguez",
                    action: "Opened free restaurants feeding 10,000 people daily",
                    amount: "$14M",
                    supporters: 128000,
                    country: "🇪🇸",
                    location: "Barcelona"
                  }, {
                    name: "Aisha Patel",
                    action: "Donated solar panels and WiFi to rural schools",
                    amount: "$4.2M",
                    supporters: 89000,
                    country: "🇮🇳",
                    location: "Mumbai"
                  }].map((person, index) => <Link
                        key={index} 
                        to={`/profile/${person.name.toLowerCase().replace(' ', '-')}`}
                        className="block group"
                      >
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/60 transition-all duration-200 cursor-pointer transform hover:scale-[1.02] hover:shadow-md relative">
                          <div className="absolute top-2 right-2 text-lg">{person.country}</div>
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-primary/30 transition-all duration-200">
                                <img src={`https://i.pravatar.cc/100?img=${
                                  person.name === "Maria Santos" ? "1" :
                                  person.name === "David Chen" ? "3" :
                                  person.name === "Sarah Williams" ? "5" :
                                  person.name === "James Rodriguez" ? "7" :
                                  "9"
                                }`} alt={person.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="absolute -top-1 -right-1 text-base bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm opacity-0"></div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="font-medium text-sm group-hover:text-primary transition-colors duration-200">{person.name}</p>
                              </div>
                              <p className="text-xs text-muted-foreground font-medium">{person.action}</p>
                              <p className="text-xs text-muted-foreground/80">{person.location}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-sm text-primary group-hover:text-primary/80 transition-colors duration-200">{person.amount}</p>
                            <p className="text-xs text-muted-foreground">{person.supporters.toLocaleString()} raised</p>
                          </div>
                        </div>
                      </Link>)}
                  </div>
                  
                  <div className="text-center">
                    <CelebrateModal 
                      trigger={
                        <Button variant="secondary" size="sm">
                          Support Someone Today
                        </Button>
                      } 
                    />
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
      <section className="py-16 px-4 bg-blue-600 text-white relative overflow-hidden">
        <WaterRipples intensity="medium" className="opacity-20" />
        <div className="container mx-auto text-center relative z-10 bg-transparent">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Every act of kindness deserves to be celebrated
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start building someone's kindness profile today. Share their story, capture their moment, and watch the ripples of positivity spread through your community.
          </p>
          <CelebrateModal 
            trigger={
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg font-medium gentle-hover transform hover:scale-105 transition-all duration-300">
                Celebrate Someone Today
                <Award className="ml-2 w-5 h-5" />
              </Button>
            } 
          />
        </div>
      </section>
      
      {/* Splash Carousel */}
      <SplashCarousel isOpen={showCarousel} onClose={() => setShowCarousel(false)} />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 ItForward. Spreading kindness, one ripple at a time.</p>
        </div>
      </footer>
    </div>;
};
export default Landing;