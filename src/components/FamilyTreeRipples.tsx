import React from 'react';
import { Heart, DollarSign, Gift, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Person {
  id: string;
  name: string;
  initials: string;
  level: number;
  paymentApps?: string[];
}

const FamilyTreeRipples: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(null);

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

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-12">
          My Kindness Family Tree
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Family Tree Visualization */}
          <div className="flex-1">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-lg overflow-hidden">
              
              {/* Level 0 - Nominator */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => setSelectedPerson(familyTree.find(p => p.id === 'nominator') || null)}
                  className={`w-12 h-12 bg-gradient-to-br ${getLevelColor(0)} rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-200 ${selectedPerson?.id === 'nominator' ? 'ring-4 ring-primary/50' : ''}`}
                >
                  <span className="text-white font-bold text-xs">SC</span>
                </button>
                <div className="text-xs text-center mt-1 text-muted-foreground">Nominator</div>
              </div>
              
              {/* Connection line from nominator to you */}
              <div className="absolute top-20 left-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-400 to-primary transform -translate-x-1/2"></div>
              
              {/* Level 1 - You */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => setSelectedPerson(familyTree.find(p => p.id === 'you') || null)}
                  className={`w-16 h-16 bg-gradient-to-br ${getLevelColor(1, true)} rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-pulse hover:scale-110 transition-all duration-200 ${selectedPerson?.id === 'you' ? 'ring-4 ring-primary/50' : ''}`}
                >
                  <span className="text-white font-bold text-sm">You</span>
                </button>
                <div className="text-sm text-center mt-1 font-medium">Your Profile</div>
              </div>
              
              {/* Connection lines from you to your three branches */}
              <div className="absolute top-48 left-1/2 transform -translate-x-1/2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-green-400"></div>
                <div className="absolute top-8 left-0 w-32 h-0.5 bg-gradient-to-r from-green-400 to-green-500 transform -translate-x-16"></div>
                <div className="absolute top-8 right-0 w-32 h-0.5 bg-gradient-to-l from-green-400 to-green-500 transform translate-x-16"></div>
              </div>
              
              {/* Level 2 - Your three direct connections */}
              <div className="absolute top-56 left-1/4 transform -translate-x-1/2">
                <button
                  onClick={() => setSelectedPerson(familyTree.find(p => p.id === 'friend1') || null)}
                  className={`w-10 h-10 bg-gradient-to-br ${getLevelColor(2)} rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-200 ${selectedPerson?.id === 'friend1' ? 'ring-4 ring-primary/50' : ''}`}
                >
                  <span className="text-white font-bold text-xs">MR</span>
                </button>
                <div className="text-xs text-center mt-1 text-muted-foreground">Friend 1</div>
              </div>
              
              <div className="absolute top-56 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={() => setSelectedPerson(familyTree.find(p => p.id === 'friend2') || null)}
                  className={`w-10 h-10 bg-gradient-to-br ${getLevelColor(2)} rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-200 ${selectedPerson?.id === 'friend2' ? 'ring-4 ring-primary/50' : ''}`}
                >
                  <span className="text-white font-bold text-xs">ET</span>
                </button>
                <div className="text-xs text-center mt-1 text-muted-foreground">Friend 2</div>
              </div>
              
              <div className="absolute top-56 left-3/4 transform -translate-x-1/2">
                <button
                  onClick={() => setSelectedPerson(familyTree.find(p => p.id === 'friend3') || null)}
                  className={`w-10 h-10 bg-gradient-to-br ${getLevelColor(2)} rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:scale-110 transition-all duration-200 ${selectedPerson?.id === 'friend3' ? 'ring-4 ring-primary/50' : ''}`}
                >
                  <span className="text-white font-bold text-xs">JP</span>
                </button>
                <div className="text-xs text-center mt-1 text-muted-foreground">Friend 3</div>
              </div>
              
              {/* Level 3 - Each friend's connections */}
              {/* Friend 1's connections */}
              <div className="absolute top-80 left-16">
                <div className="flex gap-2">
                  {['f1c1', 'f1c2', 'f1c3'].map((id, index) => {
                    const person = familyTree.find(p => p.id === id);
                    return (
                      <button
                        key={id}
                        onClick={() => setSelectedPerson(person || null)}
                        className={`w-6 h-6 bg-gradient-to-br ${getLevelColor(3)} rounded-full flex items-center justify-center shadow hover:scale-110 transition-all duration-200 ${selectedPerson?.id === id ? 'ring-2 ring-primary/50' : ''}`}
                      >
                        <span className="text-white text-xs">•</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Friend 2's connections */}
              <div className="absolute top-80 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-2">
                  {['f2c1', 'f2c2', 'f2c3'].map((id, index) => {
                    const person = familyTree.find(p => p.id === id);
                    return (
                      <button
                        key={id}
                        onClick={() => setSelectedPerson(person || null)}
                        className={`w-6 h-6 bg-gradient-to-br ${getLevelColor(3)} rounded-full flex items-center justify-center shadow hover:scale-110 transition-all duration-200 ${selectedPerson?.id === id ? 'ring-2 ring-primary/50' : ''}`}
                      >
                        <span className="text-white text-xs">•</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Friend 3's connections */}
              <div className="absolute top-80 right-16">
                <div className="flex gap-2">
                  {['f3c1', 'f3c2', 'f3c3'].map((id, index) => {
                    const person = familyTree.find(p => p.id === id);
                    return (
                      <button
                        key={id}
                        onClick={() => setSelectedPerson(person || null)}
                        className={`w-6 h-6 bg-gradient-to-br ${getLevelColor(3)} rounded-full flex items-center justify-center shadow hover:scale-110 transition-all duration-200 ${selectedPerson?.id === id ? 'ring-2 ring-primary/50' : ''}`}
                      >
                        <span className="text-white text-xs">•</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Connection lines to third level */}
              <div className="absolute top-66 left-1/4 w-0.5 h-6 bg-gradient-to-b from-green-500 to-blue-400 transform -translate-x-1/2"></div>
              <div className="absolute top-66 left-1/2 w-0.5 h-6 bg-gradient-to-b from-green-500 to-blue-400 transform -translate-x-1/2"></div>
              <div className="absolute top-66 left-3/4 w-0.5 h-6 bg-gradient-to-b from-green-500 to-blue-400 transform -translate-x-1/2"></div>
              
              {/* Subtle ripple effect overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border border-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-0 w-48 h-48 border border-primary/10 rounded-full animate-ping transform -translate-x-8 -translate-y-8" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
            
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