import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Camera, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CelebrateModalProps {
  trigger: React.ReactNode;
}

const CelebrateModal: React.FC<CelebrateModalProps> = ({ trigger }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    removedBlocker: false
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
      setOpen(false);
      setShowSuccess(false);
      setFormData({ title: '', description: '', removedBlocker: false });
      navigate('/nominate');
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center min-h-[500px] relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-20"
        >
          <source src="/celebrate-form-bg.mp4" type="video/mp4" />
        </video>
        <div className="text-center relative z-10">
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
              <div className="absolute inset-4 rounded-full border-2 border-ripple-teal/30 animate-ping" style={{
                animationDelay: '0.5s'
              }} />
              <div className="absolute inset-8 rounded-full border-2 border-peach-glow/60 animate-ping" style={{
                animationDelay: '1s'
              }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative min-h-[600px]">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/celebrate-form-bg.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          
          {/* Content */}
          <div className="relative z-10 p-6">
            <div className="text-center mb-8">
              <h1 className="font-poppins font-bold text-4xl text-foreground mb-4">
                Kind Report
              </h1>
              <p className="text-xl text-muted-foreground">
                Share someone else's act of kindness and build their profile
              </p>
            </div>
            
            <Card className="soft-shadow border-0 bg-background/90 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-center">
                  Drop Your Pebble
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Suggested Profiles Section */}
                <div className="mb-8">
                  <h3 className="font-poppins font-semibold text-lg mb-4">Suggested Profiles</h3>
                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {[{
                       name: 'Sarah M.',
                       img: 33
                     }, {
                       name: 'John D.',
                       img: 45
                     }, {
                       name: 'Maria L.',
                       img: 26
                     }, {
                       name: 'Alex K.',
                       img: 18
                     }].map(person => (
                       <button 
                         key={person.name} 
                         className="w-24 h-24 rounded-full border-2 border-muted hover:border-hope-green hover:bg-hope-green/5 transition-all duration-300 group hover-scale flex flex-col items-center justify-center p-2"
                       >
                         <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-muted group-hover:ring-hope-green transition-all duration-300 group-hover:shadow-lg group-hover:shadow-hope-green/20">
                           <img 
                             src={`https://i.pravatar.cc/150?img=${person.img}`} 
                             alt={person.name} 
                             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                           />
                         </div>
                         <span className="text-xs font-medium group-hover:text-hope-green transition-colors duration-300 mt-1 leading-tight">{person.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* New Waves Section */}
                <div className="mb-6">
                  <h3 className="font-poppins font-semibold text-lg mb-4">New Waves</h3>
                  <div className="relative">
                    <Input 
                      type="text" 
                      placeholder="Search for someone by name or username..." 
                      className="pl-12 text-lg p-4 border-2 border-muted focus:border-hope-green" 
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xs">👤</span>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Who made a kind splash today? *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Select or search for the person..." 
                      value={formData.title} 
                      onChange={e => setFormData({
                        ...formData,
                        title: e.target.value
                      })} 
                      className="text-lg p-4 border-2 border-muted focus:border-hope-green" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tell us the act of kindness *
                    </label>
                    <Textarea 
                      placeholder="Describe the kind act and what happened. How did it impact others?" 
                      value={formData.description} 
                      onChange={e => setFormData({
                        ...formData,
                        description: e.target.value
                      })} 
                      className="min-h-32 text-lg p-4 border-2 border-muted focus:border-hope-green resize-none" 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      People involved
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Tag others who were positively affected (optional)" 
                      className="text-lg p-4 border-2 border-muted focus:border-hope-green" 
                    />
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
                    {isSubmitting ? 'Creating their ripple...' : 'Celebrate Their Kindness'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CelebrateModal;