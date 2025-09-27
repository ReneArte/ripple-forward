import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import InteractiveWorldMap from '@/components/InteractiveWorldMap';
import SplashCarousel from '@/components/SplashCarousel';
import { Heart, Camera, MapPin, Clock } from 'lucide-react';

const Splashes: React.FC = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  // Real world acts of kindness data
  const worldActsOfKindness = [
    {
      id: 1,
      title: "Community Garden Initiative",
      description: "Local residents in Detroit transformed vacant lots into thriving community gardens, providing fresh food for families in need and bringing neighbors together.",
      location: "Detroit, Michigan, USA",
      user: "Sarah Chen",
      username: "@sarahc_garden",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      kinds: 342,
      comments: 28,
      timeAgo: "3h ago"
    },
    {
      id: 2,
      title: "Free Library Project",
      description: "Students in rural Kenya built and stocked little free libraries throughout their community, giving children access to books and fostering a love of reading.",
      location: "Nakuru, Kenya",
      user: "James Kimani",
      username: "@jkimani_reads",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      kinds: 567,
      comments: 45,
      timeAgo: "5h ago"
    },
    {
      id: 3,
      title: "Elderly Care Volunteers",
      description: "Young people in Tokyo started visiting elderly residents weekly, teaching them technology while learning traditional crafts, bridging generational gaps.",
      location: "Tokyo, Japan",
      user: "Yuki Tanaka",
      username: "@yuki_bridges",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      kinds: 289,
      comments: 19,
      timeAgo: "7h ago"
    },
    {
      id: 4,
      title: "Refugee Welcome Program",
      description: "Families in Berlin opened their homes and hearts to refugee families, providing language lessons, job training, and friendship during difficult transitions.",
      location: "Berlin, Germany",
      user: "Anna Mueller",
      username: "@anna_welcome",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
      kinds: 423,
      comments: 67,
      timeAgo: "9h ago"
    },
    {
      id: 5,
      title: "Ocean Cleanup Initiative",
      description: "Marine biology students organized monthly beach cleanups and educated local schools about ocean conservation, removing over 2 tons of plastic waste.",
      location: "Gold Coast, Australia",
      user: "Emma Wilson",
      username: "@ocean_emma",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop",
      kinds: 678,
      comments: 52,
      timeAgo: "11h ago"
    },
    {
      id: 6,
      title: "Street Children Support",
      description: "Local business owners in Mumbai created a program providing meals, education, and safe shelter for street children, helping them build better futures.",
      location: "Mumbai, India",
      user: "Raj Patel",
      username: "@raj_hope",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      kinds: 512,
      comments: 38,
      timeAgo: "13h ago"
    }
  ];

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
              <InteractiveWorldMap />
            </div>
            
            {/* Real world acts of kindness */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {worldActsOfKindness.map((act) => (
                <Card key={act.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={act.image} 
                      alt={act.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/100?u=${act.username}`} 
                          alt={act.user}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{act.user}</h4>
                        <p className="text-xs text-muted-foreground">{act.username}</p>
                      </div>
                    </div>
                    
                    <h5 className="font-semibold text-base mb-2 line-clamp-2">{act.title}</h5>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">{act.description}</p>
                    
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3 h-3" />
                      <span>{act.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-red-500">
                          <Heart className="w-3 h-3 fill-current" />
                          {act.kinds}
                        </span>
                        <span className="text-muted-foreground">{act.comments} comments</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{act.timeAgo}</span>
                      </div>
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