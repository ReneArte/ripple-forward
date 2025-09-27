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
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
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
      setSelectedPerson(null);
      navigate('/nominate');
    }, 2000);
  };

  const people = [
    {
      name: 'Sarah Mitchell',
      username: '@sarah_helps',
      img: 33,
      location: 'New York, NY'
    }, {
      name: 'John Davis',
      username: '@john_volunteer',
      img: 45,
      location: 'Los Angeles, CA'
    }, {
      name: 'Maria Lopez',
      username: '@maria_kindness',
      img: 26,
      location: 'Miami, FL'
    }, {
      name: 'Alex Kim',
      username: '@alex_community',
      img: 18,
      location: 'Seattle, WA'
    }, {
      name: 'Emma Wilson',
      username: '@emma_ocean',
      img: 12,
      location: 'San Diego, CA'
    }, {
      name: 'Mike Rodriguez',
      username: '@mike_mentor',
      img: 25,
      location: 'Chicago, IL'
    }, {
      name: 'Lisa Thompson',
      username: '@lisa_learns',
      img: 38,
      location: 'Austin, TX'
    }, {
      name: 'David Lee',
      username: '@david_builds',
      img: 22,
      location: 'Denver, CO'
    }, {
      name: 'Ana Silva',
      username: '@ana_supports',
      img: 41,
      location: 'Phoenix, AZ'
    }, {
      name: 'Chris Peterson',
      username: '@chris_teaches',
      img: 29,
      location: 'Portland, OR'
    }, {
      name: 'Nina Hassan',
      username: '@nina_nurtures',
      img: 15,
      location: 'Boston, MA'
    }, {
      name: 'Tom Brown',
      username: '@tom_treasures',
      img: 36,
      location: 'Atlanta, GA'
    }, {
      name: 'Sophie Lee',
      username: '@sophie_shares',
      img: 31,
      location: 'Nashville, TN'
    }, {
      name: 'Ryan Taylor',
      username: '@ryan_reaches',
      img: 19,
      location: 'Dallas, TX'
    }, {
      name: 'Zoe Adams',
      username: '@zoe_spreads',
      img: 47,
      location: 'Orlando, FL'
    }, {
      name: 'Mark Jones',
      username: '@mark_motivates',
      img: 73,
      location: 'Las Vegas, NV'
    }, {
      name: 'Lily Wang',
      username: '@lily_lifts',
      img: 44,
      location: 'San Francisco, CA'
    }, {
      name: 'James Miller',
      username: '@james_journey',
      img: 68,
      location: 'Minneapolis, MN'
    }
  ];

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
            Now let&apos;s nominate three friends to continue the ripple.
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
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0 bg-white/95 backdrop-blur-lg border-0">
        <div className="relative h-[95vh] overflow-y-auto">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source src="/celebrate-form-bg.mp4" type="video/mp4" />
          </video>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="text-center mb-8">
              <h1 className="font-poppins font-bold text-4xl text-foreground mb-4">
                Kind Report
              </h1>
              <p className="text-xl text-muted-foreground">
                Share someone else&apos;s act of kindness and build their profile
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Profiles */}
              <div>
                <Card className="soft-shadow border-0 bg-white/95 backdrop-blur h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-poppins text-xl text-center">
                      Select Person to Celebrate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Profiles Grid */}
                    <div>
                      <h3 className="font-poppins font-semibold text-lg mb-4 text-hope-green">Available Profiles</h3>
                      <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                        {people.map(person => (
                          <button 
                            key={person.name}
                            onClick={() => setSelectedPerson(person.name)}
                            className={`bg-white border-2 transition-all duration-300 rounded-xl p-3 text-left w-full ${
                              selectedPerson === person.name 
                                ? 'border-hope-green bg-hope-green/10' 
                                : 'border-gray-200 hover:border-hope-green hover:bg-hope-green/5'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-16 h-16 rounded-full overflow-hidden ring-2 transition-all duration-300 flex-shrink-0 ${
                                selectedPerson === person.name
                                  ? 'ring-hope-green'
                                  : 'ring-gray-200'
                              }`}>
                                <img 
                                  src={`https://i.pravatar.cc/150?img=${person.img}`} 
                                  alt={person.name} 
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className={`font-semibold text-sm transition-colors truncate ${
                                  selectedPerson === person.name ? 'text-hope-green' : 'text-foreground'
                                }`}>
                                  {person.name}
                                </h4>
                                <p className="text-xs text-muted-foreground truncate">{person.username}</p>
                                <p className="text-xs text-muted-foreground truncate">{person.location}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Search Section */}
                    <div>
                      <h3 className="font-poppins font-semibold text-lg mb-3 text-ripple-teal">Find New People</h3>
                      <div className="relative">
                        <Input 
                          type="text" 
                          placeholder="Search by name or username..." 
                          className="pl-12 text-base p-3 border-2 border-muted focus:border-ripple-teal bg-white" 
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center">
                            <span className="text-xs">👤</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Form */}
              <div>
                <Card className="soft-shadow border-0 bg-white/95 backdrop-blur h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="font-poppins text-xl text-center">
                      Share Their Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {selectedPerson && (
                        <div className="bg-hope-green/10 border border-hope-green/30 rounded-lg p-4 mb-4">
                          <p className="text-sm text-hope-green font-medium">
                            ✓ Celebrating: {selectedPerson}
                          </p>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          What act of kindness did they do? *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Brief title of the kind act..." 
                          value={formData.title} 
                          onChange={e => setFormData({
                            ...formData,
                            title: e.target.value
                          })} 
                          className="text-base p-3 border-2 border-muted focus:border-hope-green bg-white" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Tell us the full story *
                        </label>
                        <Textarea 
                          placeholder="Describe what happened, how it helped others, and the impact it made..." 
                          value={formData.description} 
                          onChange={e => setFormData({
                            ...formData,
                            description: e.target.value
                          })} 
                          className="min-h-32 text-base p-3 border-2 border-muted focus:border-hope-green resize-none bg-white" 
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
                          className="text-base p-3 border-2 border-muted focus:border-hope-green bg-white" 
                        />
                      </div>
                      
                      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:border-hope-green hover:bg-hope-green/5 transition-all cursor-pointer bg-white/50">
                        <Camera className="w-10 h-10 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground font-medium">
                          Add a photo (optional)
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click to upload or drag and drop
                        </p>
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting || !formData.title || !formData.description || !selectedPerson} 
                        className="w-full bg-hope-green hover:bg-hope-green-dark text-white py-4 text-lg font-medium"
                      >
                        {isSubmitting ? 'Creating their ripple...' : 'Celebrate Their Kindness'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CelebrateModal;