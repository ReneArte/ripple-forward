import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Camera } from 'lucide-react';

interface SplashCarouselProps {
  isOpen: boolean;
  onClose: () => void;
}

const SplashCarousel: React.FC<SplashCarouselProps> = ({ isOpen, onClose }) => {
  const splashes = [
    {
      id: 1,
      name: "Sarah Chen",
      username: "@sarahc",
      title: "Helped elderly cross street",
      kinds: 89,
      comments: 12,
      timeAgo: "3h ago"
    },
    {
      id: 2,
      name: "Mike Johnson",
      username: "@mikej",
      title: "Donated books to library",
      kinds: 156,
      comments: 24,
      timeAgo: "5h ago"
    },
    {
      id: 3,
      name: "Emma Davis",
      username: "@emmad",
      title: "Cooked for neighbor",
      kinds: 203,
      comments: 31,
      timeAgo: "1d ago"
    },
    {
      id: 4,
      name: "John Smith",
      username: "@johns",
      title: "Picked up litter in park",
      kinds: 127,
      comments: 18,
      timeAgo: "2d ago"
    },
    {
      id: 5,
      name: "Lisa Wong",
      username: "@lisaw",
      title: "Tutored struggling student",
      kinds: 284,
      comments: 45,
      timeAgo: "3d ago"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-poppins font-semibold text-2xl">More Splashes</h3>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[60vh]">
          {splashes.map((splash) => (
            <Card key={splash.id} className="hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white/70" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {splash.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{splash.name}</h4>
                    <p className="text-xs text-muted-foreground">{splash.username}</p>
                  </div>
                </div>
                
                <h5 className="font-medium text-sm mb-2">{splash.title}</h5>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-red-500">
                      <Heart className="w-3 h-3" />
                      {splash.kinds}
                    </span>
                    <span className="text-muted-foreground">{splash.comments} comments</span>
                  </div>
                  <span className="text-muted-foreground">{splash.timeAgo}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashCarousel;