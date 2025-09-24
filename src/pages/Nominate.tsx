import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import { ArrowRight, Copy, Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Nominate: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [nominations, setNominations] = useState([
    { name: '', email: '' },
    { name: '', email: '' },
    { name: '', email: '' },
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateNomination = (index: number, field: 'name' | 'email', value: string) => {
    const updated = [...nominations];
    updated[index][field] = value;
    setNominations(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validNominations = nominations.filter(n => n.name && n.email);
    
    if (validNominations.length === 0) {
      toast({
        title: "Add at least one nomination",
        description: "You need to nominate at least one person to continue the ripple.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Invitations sent!",
      description: `${validNominations.length} people have been invited to join your ripple.`,
    });
    
    setIsSubmitting(false);
    navigate('/ripple/demo-ripple-1');
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText('https://itforward.app/invite/abc123');
    toast({
      title: "Link copied!",
      description: "Share this link with anyone to invite them to your ripple.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Nominate Three Friends
            </h1>
            <p className="text-xl text-muted-foreground">
              Invite others to continue your ripple of kindness
            </p>
          </div>
          
          {/* Visual: One becomes Three */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-8">
              <div className="w-16 h-16 bg-hope-green rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 bg-ripple-teal/20 border-2 border-ripple-teal rounded-full" />
                ))}
              </div>
            </div>
          </div>
          
          <Card className="soft-shadow border-0">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-center">
                Spread the Ripple
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {nominations.map((nomination, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-medium text-foreground">
                      Person {index + 1} {index === 0 && '(required)'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <Input
                        type="text"
                        placeholder="Full name"
                        value={nomination.name}
                        onChange={(e) => updateNomination(index, 'name', e.target.value)}
                        className="border-2 border-muted focus:border-hope-green"
                        required={index === 0}
                      />
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={nomination.email}
                        onChange={(e) => updateNomination(index, 'email', e.target.value)}
                        className="border-2 border-muted focus:border-hope-green"
                        required={index === 0}
                      />
                    </div>
                  </div>
                ))}
                
                <div className="bg-peach-glow/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Share invite link</p>
                      <p className="text-sm text-muted-foreground">Copy and share manually</p>
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={copyInviteLink}
                      className="border-hope-green text-hope-green hover:bg-hope-green hover:text-white"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="flex-1 bg-hope-green hover:bg-hope-green-dark text-white py-4 text-lg font-medium gentle-hover"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending invites...' : 'Send Invitations'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => navigate('/ripple/demo-ripple-1')}
                    className="border-ripple-teal text-ripple-teal hover:bg-ripple-teal hover:text-white py-4 px-6"
                  >
                    Skip for Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Nominate;