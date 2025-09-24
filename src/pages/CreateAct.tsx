import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Header from '@/components/Header';
import { Camera, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateAct: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    removedBlocker: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Show success animation
    setTimeout(() => {
      navigate('/nominate');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-hope-green rounded-full flex items-center justify-center mx-auto mb-6 pebble-drop">
            <Check className="w-16 h-16 text-white" />
          </div>
          <h2 className="font-poppins font-bold text-3xl text-foreground mb-4">
            Your pebble has dropped!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Now let's nominate three friends to continue the ripple.
          </p>
          <div className="flex justify-center">
            <div className="w-48 h-48 relative">
              <div className="absolute inset-0 rounded-full border-2 border-hope-green/30 animate-ping" />
              <div className="absolute inset-4 rounded-full border-2 border-ripple-teal/30 animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-peach-glow/60 animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="font-poppins font-bold text-4xl text-foreground mb-4">
              Record Your Act of Kindness
            </h1>
            <p className="text-xl text-muted-foreground">
              Share a moment when you made someone's day better
            </p>
          </div>
          
          <Card className="soft-shadow border-0">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-center">
                Drop Your Pebble
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What did you do?
                  </label>
                  <Input
                    type="text"
                    placeholder="e.g., Helped a neighbor carry groceries"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="text-lg p-4 border-2 border-muted focus:border-hope-green"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell us more about it
                  </label>
                  <Textarea
                    placeholder="Share the story of your act of kindness. How did it make them feel? What was their reaction?"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="min-h-32 text-lg p-4 border-2 border-muted focus:border-hope-green resize-none"
                    required
                  />
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-peach-glow/20 rounded-lg">
                  <Checkbox
                    id="blocker"
                    checked={formData.removedBlocker}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, removedBlocker: checked as boolean })
                    }
                    className="data-[state=checked]:bg-hope-green data-[state=checked]:border-hope-green"
                  />
                  <label htmlFor="blocker" className="text-sm font-medium text-foreground">
                    I removed a blocker for someone
                  </label>
                </div>
                
                <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center gentle-hover cursor-pointer">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Add a photo (optional)
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click to upload or drag and drop
                  </p>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.title || !formData.description}
                  className="w-full bg-hope-green hover:bg-hope-green-dark text-white py-4 text-lg font-medium gentle-hover"
                >
                  {isSubmitting ? 'Creating your ripple...' : 'Create Act'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CreateAct;