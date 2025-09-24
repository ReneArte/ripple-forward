import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { Share2, Copy, Users, Layers, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Demo data
const demoRipple = {
  id: 'demo-ripple-1',
  slug: 'helping-neighbor-groceries',
  originAct: {
    title: 'Helped neighbor carry groceries',
    description: 'My elderly neighbor was struggling with heavy bags from the store. I offered to help carry them up to her apartment. She was so grateful and we ended up having a lovely chat about her garden.',
    author: 'Sarah Chen',
    createdAt: '2024-01-15',
  },
  stats: {
    totalPeople: 12,
    depth: 3,
    branches: 8,
  },
  acts: [
    {
      id: 1,
      title: 'Helped neighbor carry groceries',
      description: 'My elderly neighbor was struggling with heavy bags from the store...',
      author: 'Sarah Chen',
      level: 0,
      createdAt: '2024-01-15',
    },
    {
      id: 2,
      title: 'Brought coffee to a stressed coworker',
      description: 'Noticed my colleague was having a rough day and brought them their favorite coffee.',
      author: 'Mike Rodriguez',
      level: 1,
      createdAt: '2024-01-16',
    },
    {
      id: 3,
      title: 'Let someone go ahead in line',
      description: 'Person behind me had just one item while I had a full cart.',
      author: 'Emma Thompson',
      level: 1,
      createdAt: '2024-01-17',
    },
    {
      id: 4,
      title: 'Helped lost tourist find their way',
      description: 'Tourist was looking confused with a map. Walked them to their destination.',
      author: 'James Park',
      level: 1,
      createdAt: '2024-01-18',
    },
  ],
};

const RipplePage: React.FC = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  
  const shareRipple = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Share this ripple with others to inspire more kindness.",
    });
  };

  const getLevelColor = (level: number) => {
    const colors = ['hope-green', 'ripple-teal', 'peach-glow'];
    return colors[level % colors.length];
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Ripple Header */}
          <div className="text-center mb-12">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-foreground mb-4">
              {demoRipple.originAct.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Started by {demoRipple.originAct.author} on {new Date(demoRipple.originAct.createdAt).toLocaleDateString()}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-hope-green">{demoRipple.stats.totalPeople}</div>
                <div className="text-sm text-muted-foreground">People Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-ripple-teal">{demoRipple.stats.depth}</div>
                <div className="text-sm text-muted-foreground">Levels Deep</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-peach-glow">{demoRipple.stats.branches}</div>
                <div className="text-sm text-muted-foreground">Branches</div>
              </div>
            </div>
            
            <Button 
              onClick={shareRipple}
              className="bg-hope-green hover:bg-hope-green-dark text-white gentle-hover"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share This Ripple
            </Button>
          </div>
          
          {/* Origin Act */}
          <Card className="soft-shadow border-0 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-hope-green rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-xl mb-2">
                    {demoRipple.originAct.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {demoRipple.originAct.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>by {demoRipple.originAct.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(demoRipple.originAct.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Ripple Chain */}
          <div className="space-y-6">
            <h2 className="font-poppins font-semibold text-2xl text-center mb-8">
              The Ripple Effect
            </h2>
            
            {demoRipple.acts.slice(1).map((act, index) => (
              <div key={act.id} className="relative">
                {/* Connection Line */}
                {index > 0 && (
                  <div className="absolute -top-3 left-6 w-0.5 h-6 bg-muted"></div>
                )}
                
                <Card className="soft-shadow border-0 ml-8">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 bg-${getLevelColor(act.level)} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-medium text-sm">{index + 2}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-lg mb-2">
                          {act.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {act.description}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>by {act.author}</span>
                          <span className="mx-2">•</span>
                          <span>{new Date(act.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="brand-gradient text-white border-0">
              <CardContent className="p-8">
                <h3 className="font-poppins font-bold text-2xl mb-4">
                  Continue This Ripple
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Inspired by this chain of kindness? Add your own act and keep the ripple growing.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-hope-green hover:bg-white/90 px-8 py-4 text-lg font-medium gentle-hover"
                  asChild
                >
                  <Link to="/create">
                    Add Your Act
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RipplePage;