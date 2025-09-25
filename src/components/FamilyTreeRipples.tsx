import React from 'react';
import { Heart, DollarSign, Gift, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedTree from './AnimatedTree';

interface Person {
  id: string;
  name: string;
  initials: string;
  level: number;
  paymentApps?: string[];
}

interface TreePerson extends Person {
  x: number;
  y: number;
}

const FamilyTreeRipples: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = React.useState<TreePerson | null>(null);

  const familyTree: Person[] = [
    { id: 'nominator', name: 'Sarah Chen', initials: 'SC', level: 0, paymentApps: ['venmo', 'gofundme'] },
    { id: 'you', name: 'You', initials: 'ME', level: 1, paymentApps: [] },
    { id: 'friend1', name: 'Mike Rodriguez', initials: 'MR', level: 2, paymentApps: ['venmo', 'paypal'] },
    { id: 'friend2', name: 'Emma Thompson', initials: 'ET', level: 2, paymentApps: ['gofundme'] },
    { id: 'friend3', name: 'James Park', initials: 'JP', level: 2, paymentApps: ['venmo'] },
    { id: 'f1c1', name: 'Lisa Wang', initials: 'LW', level: 3, paymentApps: ['paypal', 'cashapp'] },
    { id: 'f1c2', name: 'David Kim', initials: 'DK', level: 3, paymentApps: ['venmo', 'gofundme'] },
    { id: 'f1c3', name: 'Ana Silva', initials: 'AS', level: 3, paymentApps: ['cashapp'] },
    { id: 'f2c1', name: 'Tom Brown', initials: 'TB', level: 3, paymentApps: ['paypal'] },
    { id: 'f2c2', name: 'Maya Patel', initials: 'MP', level: 3, paymentApps: ['venmo', 'gofundme'] },
    { id: 'f2c3', name: 'Alex Chen', initials: 'AC', level: 3, paymentApps: ['cashapp'] },
    { id: 'f3c1', name: 'Sophie Lee', initials: 'SL', level: 3, paymentApps: ['venmo'] },
    { id: 'f3c2', name: 'Ryan Taylor', initials: 'RT', level: 3, paymentApps: ['paypal', 'gofundme'] },
    { id: 'f3c3', name: 'Nina Patel', initials: 'NP', level: 3, paymentApps: ['cashapp', 'venmo'] },
  ];

  const getLevelColor = (level: number, isYou: boolean = false) => {
    if (isYou) return 'from-primary to-primary-dark';
    switch (level) {
      case 0: return 'from-purple-500 to-purple-600';
      case 2: return 'from-hope-green to-hope-green-dark';
      case 3: return 'from-ripple-teal to-blue-600';
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

  // Map people to tree positions
  const treePositions: TreePerson[] = [
    { ...familyTree[0], x: 400, y: 80 },   // Nominator (top)
    { ...familyTree[1], x: 400, y: 180 },  // You (center)
    { ...familyTree[2], x: 280, y: 280 },  // Friend 1 (left)
    { ...familyTree[3], x: 400, y: 280 },  // Friend 2 (center)
    { ...familyTree[4], x: 520, y: 280 },  // Friend 3 (right)
    // Level 3 connections
    { ...familyTree[5], x: 220, y: 350 },  // F1C1
    { ...familyTree[6], x: 280, y: 350 },  // F1C2
    { ...familyTree[7], x: 340, y: 350 },  // F1C3
    { ...familyTree[8], x: 380, y: 350 },  // F2C1
    { ...familyTree[9], x: 420, y: 350 },  // F2C2
    { ...familyTree[10], x: 460, y: 350 }, // F2C3
    { ...familyTree[11], x: 500, y: 350 }, // F3C1
    { ...familyTree[12], x: 540, y: 350 }, // F3C2
    { ...familyTree[13], x: 580, y: 350 }, // F3C3
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-indigo-900">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
          My Kindness Family Tree
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Family Tree Visualization */}
          <div className="flex-1">
            <AnimatedTree 
              people={treePositions}
              selectedPerson={selectedPerson}
              onPersonSelect={setSelectedPerson}
            />
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full"></div>
                <span className="text-sm text-muted-foreground">Nominator</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-hope-green to-hope-green-dark rounded-full"></div>
                <span className="text-sm text-muted-foreground">Direct connections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-ripple-teal to-blue-600 rounded-full"></div>
                <span className="text-sm text-muted-foreground">2nd degree</span>
              </div>
            </div>
          </div>
          
          {/* Person Details */}
          <div className="w-full lg:w-80">
            {selectedPerson ? (
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getLevelColor(selectedPerson.level, selectedPerson.id === 'you')} 
                                   rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3`}>
                      {selectedPerson.initials}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg">{selectedPerson.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedPerson.level === 0 ? 'Your nominator' :
                       selectedPerson.level === 1 ? 'You' :
                       selectedPerson.level === 2 ? 'Direct connection' : '2nd degree connection'}
                    </p>
                  </div>
                  
                  {selectedPerson.id !== 'you' && selectedPerson.paymentApps && selectedPerson.paymentApps.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-muted-foreground mb-3">Support this person:</h4>
                      {selectedPerson.paymentApps.map((app) => (
                        <Button
                          key={app}
                          variant="outline"
                          className="w-full justify-start capitalize hover:bg-primary/5"
                          onClick={() => {
                            alert(`Opening ${app} integration...`);
                          }}
                        >
                          {getPaymentIcon(app)}
                          <span className="ml-2">Send via {app}</span>
                        </Button>
                      ))}
                    </div>
                  )}
                  
                  {selectedPerson.id !== 'you' && (
                    <div className="mt-6 pt-4 border-t border-border">
                      <Button 
                        className="w-full bg-hope-green hover:bg-hope-green-dark text-white"
                        onClick={() => {
                          alert(`Viewing ${selectedPerson.name}'s acts of kindness...`);
                        }}
                      >
                        View Their Acts
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted-foreground/20 
                                 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-muted-foreground">?</span>
                  </div>
                  <h3 className="font-medium text-lg mb-2">Select a Person</h3>
                  <p className="text-sm text-muted-foreground">
                    Click on any person in the tree to see their details and support options.
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

export default FamilyTreeRipples;