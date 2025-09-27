import React from 'react';
import { Heart, Gift, DollarSign, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const PayItForward: React.FC = () => {
  const paymentOptions = [{
    name: 'Venmo',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    description: 'Send money directly'
  }, {
    name: 'GoFundMe',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    description: 'Support their causes'
  }, {
    name: 'Gift Cards',
    icon: <Gift className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    description: 'Amazon, Starbucks & more'
  }, {
    name: 'PayPal',
    icon: <CreditCard className="w-6 h-6" />,
    color: 'from-blue-600 to-indigo-600',
    description: 'Secure payments'
  }];
  return <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
      <div className="container mx-auto">
        <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-center mb-6">
          Pay It Forward
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          Connect with your favorite acts of kindness and show them appreciation. 
          Support the people making a difference with donations, gift cards, or simply treat them 
          the way they deserve for spreading good in this world.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {paymentOptions.map(option => <Card key={option.name} className="hover:shadow-lg transition-shadow duration-200 border-0">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-full 
                               flex items-center justify-center text-white mx-auto mb-4`}>
                  {option.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{option.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Button variant="outline" className="w-full hover:bg-primary/5" onClick={() => {
              alert(`Connecting to ${option.name}...`);
            }}>
                  Connect
                </Button>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="text-center">
          <Card className="brand-gradient text-white border-0 max-w-2xl mx-auto">
            <CardContent className="p-8 bg-orange-500">
              <Heart className="w-12 h-12 text-white/80 mx-auto mb-4" />
              <h3 className="font-poppins font-bold text-2xl mb-4">
                Every Kind Act Deserves Recognition
              </h3>
              <p className="text-lg opacity-90 mb-6">
                When you support someone's kindness, you're not just helping them – 
                you're encouraging more acts of good in your community.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-medium" onClick={() => {
              alert('Exploring featured acts of kindness...');
            }}>
                Explore Featured Acts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default PayItForward;