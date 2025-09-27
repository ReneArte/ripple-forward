import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import WaterRipples from '@/components/WaterRipples';
import NetworkRipples from '@/components/NetworkRipples';
import { Camera, Heart, MessageCircle, Users, Award, ChevronDown } from 'lucide-react';
const Profile: React.FC = () => {
  return <div className="min-h-screen profile-gradient">
      <WaterRipples intensity="light" />
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Profile Header */}
          <div className="text-center mb-8">
            <div className="w-48 h-48 rounded-full mx-auto mb-6 shadow-2xl ring-8 ring-white dark:ring-gray-800 overflow-hidden glow-effect">
              <img src="https://i.pravatar.cc/300?img=12" alt="Alex Johnson" className="w-full h-full object-cover" />
            </div>
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-2">Alex Sanchez</h1>
            <p className="text-xl text-muted-foreground mb-4">@alexjohnson</p>
            <p className="text-lg max-w-2xl mx-auto text-gray-200">
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
            
            {/* Acts of Kindness Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[{
              id: 1,
              title: "Organized community food drive",
              description: "Alex spent their weekend organizing a community food drive that provided meals for 200 families in need. They coordinated with local businesses and volunteers to make it happen.",
              image: "/src/assets/food-drive-community.png",
              kinds: 247,
              comments: 32,
              timeAgo: "2 days ago"
            }, {
              id: 2,
              title: "Helped elderly neighbor with groceries",
              description: "Every week, Alex helps Mrs. Chen with her grocery shopping and carries her bags up three flights of stairs. A small act that makes a huge difference in her daily life.",
              image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
              kinds: 89,
              comments: 15,
              timeAgo: "5 days ago"
            }, {
              id: 3,
              title: "Volunteered at local animal shelter",
              description: "Spent the entire Saturday helping at the animal shelter, walking dogs, cleaning kennels, and helping with adoption events. The animals needed extra love and care.",
              image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
              kinds: 156,
              comments: 28,
              timeAgo: "1 week ago"
            }, {
              id: 4,
              title: "Donated birthday money to charity",
              description: "Instead of buying personal gifts, Alex asked friends and family to donate to a local homeless shelter. Raised over $500 for those in need during their birthday celebration.",
              image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
              kinds: 198,
              comments: 45,
              timeAgo: "2 weeks ago"
            }, {
              id: 5,
              title: "Tutored kids at community center",
              description: "Volunteered as a tutor for underprivileged kids at the local community center, helping them with homework and building their confidence in learning.",
              image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
              kinds: 134,
              comments: 22,
              timeAgo: "3 weeks ago"
            }, {
              id: 6,
              title: "Planted trees in neighborhood park",
              description: "Organized a tree-planting event in the local park with community members. Planted 50 new trees to help improve air quality and create a greener environment for everyone.",
              image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
              kinds: 176,
              comments: 38,
              timeAgo: "1 month ago"
            }].map(act => <Card key={act.id} className="soft-shadow border-0 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img src={act.image} alt={act.title} className="w-full h-full object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img src="https://i.pravatar.cc/100?img=12" alt="Alex Sanchez" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-poppins font-medium text-sm">Alex Sanchez</h3>
                        <p className="text-muted-foreground text-xs">@alexjohnson</p>
                      </div>
                    </div>
                    
                    <h4 className="font-poppins font-semibold text-lg mb-2">
                      {act.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {act.description}
                    </p>
                    
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm font-medium">{act.kinds} kinds</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">{act.comments} comments</span>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{act.timeAgo}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Ripple Effect Network */}
          <Card className="soft-shadow border-0">
            <CardContent className="p-6">
              <h3 className="font-poppins font-semibold text-xl mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-ripple-teal" />
                Kindness Ripple Network
              </h3>
              
              <NetworkRipples
                centerPerson={{
                  id: 'alex',
                  name: 'Alex Sanchez',
                  username: '@alexjohnson',
                  avatar: 'https://i.pravatar.cc/300?img=12',
                  level: 0
                }}
                connections={[
                  // Level 1 - Direct connections
                  { id: '1', name: 'Maria Lopez', username: '@maria', avatar: 'https://i.pravatar.cc/100?img=26', level: 1 },
                  { id: '2', name: 'Sarah Mitchell', username: '@sarah', avatar: 'https://i.pravatar.cc/100?img=33', level: 1 },
                  { id: '3', name: 'John Davis', username: '@john', avatar: 'https://i.pravatar.cc/100?img=45', level: 1 },
                  { id: '4', name: 'Kate Roberts', username: '@kate', avatar: 'https://i.pravatar.cc/100?img=18', level: 1 },
                  { id: '5', name: 'Mike Chen', username: '@mike', avatar: 'https://i.pravatar.cc/100?img=52', level: 1 },
                  
                  // Level 2 - Connections of connections
                  { id: '6', name: 'Emma Wilson', username: '@emma', avatar: 'https://i.pravatar.cc/100?img=22', level: 2 },
                  { id: '7', name: 'David Kim', username: '@david', avatar: 'https://i.pravatar.cc/100?img=68', level: 2 },
                  { id: '8', name: 'Lisa Zhang', username: '@lisa', avatar: 'https://i.pravatar.cc/100?img=15', level: 2 },
                  { id: '9', name: 'James Miller', username: '@james', avatar: 'https://i.pravatar.cc/100?img=71', level: 2 },
                  { id: '10', name: 'Ana Garcia', username: '@ana', avatar: 'https://i.pravatar.cc/100?img=40', level: 2 },
                  { id: '11', name: 'Tom Brown', username: '@tom', avatar: 'https://i.pravatar.cc/100?img=58', level: 2 },
                  { id: '12', name: 'Sophie Lee', username: '@sophie', avatar: 'https://i.pravatar.cc/100?img=31', level: 2 },
                  
                  // Level 3 - Extended network
                  { id: '13', name: 'Ryan Taylor', username: '@ryan', avatar: 'https://i.pravatar.cc/100?img=19', level: 3 },
                  { id: '14', name: 'Nina Patel', username: '@nina', avatar: 'https://i.pravatar.cc/100?img=47', level: 3 },
                  { id: '15', name: 'Alex Cooper', username: '@acooper', avatar: 'https://i.pravatar.cc/100?img=61', level: 3 },
                  { id: '16', name: 'Zoe Adams', username: '@zoe', avatar: 'https://i.pravatar.cc/100?img=29', level: 3 },
                  { id: '17', name: 'Mark Jones', username: '@mark', avatar: 'https://i.pravatar.cc/100?img=73', level: 3 },
                  { id: '18', name: 'Lily Wang', username: '@lily', avatar: 'https://i.pravatar.cc/100?img=44', level: 3 },
                ]}
              />
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Your acts of kindness have created ripples reaching <span className="font-semibold text-primary">18 people</span> across 3 degrees of connection
                </p>
                <p className="text-xs text-muted-foreground">
                  Click on any profile to see their kindness story and connection path
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Profile;