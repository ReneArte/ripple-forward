import React from 'react';
import { Heart, DollarSign, Gift, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Connection {
  id: string;
  name: string;
  initials: string;
  level: number;
  angle: number;
  distance: number;
  paymentApps?: string[];
}

const RadarRipples: React.FC = () => {
  const connections: Connection[] = [
    { id: '1', name: 'Sarah Chen', initials: 'SC', level: 1, angle: 45, distance: 80, paymentApps: ['venmo', 'gofundme'] },
    { id: '2', name: 'Mike Rodriguez', initials: 'MR', level: 1, angle: 135, distance: 90, paymentApps: ['venmo', 'paypal'] },
    { id: '3', name: 'Emma Thompson', initials: 'ET', level: 1, angle: 225, distance: 85, paymentApps: ['gofundme'] },
    { id: '4', name: 'James Park', initials: 'JP', level: 2, angle: 30, distance: 140, paymentApps: ['venmo'] },
    { id: '5', name: 'Lisa Wang', initials: 'LW', level: 2, angle: 90, distance: 150, paymentApps: ['paypal', 'cashapp'] },
    { id: '6', name: 'David Kim', initials: 'DK', level: 2, angle: 180, distance: 135, paymentApps: ['venmo', 'gofundme'] },
    { id: '7', name: 'Ana Silva', initials: 'AS', level: 2, angle: 270, distance: 145, paymentApps: ['cashapp'] },
    { id: '8', name: 'Tom Brown', initials: 'TB', level: 3, angle: 60, distance: 200, paymentApps: ['paypal'] },
    { id: '9', name: 'Maya Patel', initials: 'MP', level: 3, angle: 150, distance: 210, paymentApps: ['venmo', 'gofundme'] },
  ];

  const [selectedConnection, setSelectedConnection] = React.useState<Connection | null>(null);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1: return 'from-hope-green to-hope-green-dark';
      case 2: return 'from-ripple-teal to-blue-600';
      case 3: return 'from-peach-glow to-orange-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getPaymentIcon = (app: string) => {
    switch (app) {
      case 'venmo': return <DollarSign className="w-4 h-4" />;
      case 'gofundme': return <Heart className="w-4 h-4" />;
      case 'paypal': return <CreditCard className="w-4 h-4" />;
      case 'cashapp': return <Gift className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
          My Ripples Network
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Radar Visualization */}
          <div className="flex-1">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Radar Rings */}
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             rounded-full border border-primary/20 animate-pulse`}
                  style={{
                    width: `${ring * 33.33}%`,
                    height: `${ring * 33.33}%`,
                    animationDelay: `${ring * 0.5}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
              
              {/* Center - You */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                             w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full 
                             flex items-center justify-center border-4 border-white shadow-lg z-10">
                <span className="text-white font-bold text-lg">You</span>
              </div>
              
              {/* Connections */}
              {connections.map((connection) => {
                const x = Math.cos((connection.angle - 90) * Math.PI / 180) * (connection.distance / 2);
                const y = Math.sin((connection.angle - 90) * Math.PI / 180) * (connection.distance / 2);
                
                return (
                  <button
                    key={connection.id}
                    onClick={() => setSelectedConnection(connection)}
                    className={`absolute w-10 h-10 bg-gradient-to-br ${getLevelColor(connection.level)} 
                               rounded-full flex items-center justify-center text-white font-medium text-sm
                               hover:scale-110 transition-all duration-200 shadow-lg cursor-pointer
                               ${selectedConnection?.id === connection.id ? 'ring-4 ring-primary/50' : ''}`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {connection.initials}
                  </button>
                );
              })}
              
              {/* Scanning Line */}
              <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-transparent
                             origin-left animate-[spin_6s_linear_infinite]" 
                   style={{ transformOrigin: '0 50%' }} />
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-hope-green to-hope-green-dark rounded-full"></div>
                <span className="text-sm text-muted-foreground">Direct connections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-ripple-teal to-blue-600 rounded-full"></div>
                <span className="text-sm text-muted-foreground">2nd degree</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-peach-glow to-orange-500 rounded-full"></div>
                <span className="text-sm text-muted-foreground">3rd degree</span>
              </div>
            </div>
          </div>
          
          {/* Connection Details */}
          <div className="w-full lg:w-80">
            {selectedConnection ? (
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getLevelColor(selectedConnection.level)} 
                                   rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3`}>
                      {selectedConnection.initials}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg">{selectedConnection.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedConnection.level === 1 ? 'Direct connection' : 
                       selectedConnection.level === 2 ? '2nd degree connection' : '3rd degree connection'}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm text-muted-foreground mb-3">Support this person:</h4>
                    {selectedConnection.paymentApps?.map((app) => (
                      <Button
                        key={app}
                        variant="outline"
                        className="w-full justify-start capitalize hover:bg-primary/5"
                        onClick={() => {
                          // In a real app, this would integrate with the actual payment apps
                          alert(`Opening ${app} integration...`);
                        }}
                      >
                        {getPaymentIcon(app)}
                        <span className="ml-2">Send via {app}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button 
                      className="w-full bg-hope-green hover:bg-hope-green-dark text-white"
                      onClick={() => {
                        alert(`Viewing ${selectedConnection.name}'s acts of kindness...`);
                      }}
                    >
                      View Their Acts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted-foreground/20 
                                 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-muted-foreground">?</span>
                  </div>
                  <h3 className="font-medium text-lg mb-2">Select a Connection</h3>
                  <p className="text-sm text-muted-foreground">
                    Click on any dot in the radar to see their details and support options.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadarRipples;