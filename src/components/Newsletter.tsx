
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would connect to your backend
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
      variant: "default"
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-agrogreen-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Newsletter</h2>
          <p className="text-white/90 text-lg mb-8">
            Stay updated with the latest farming tips, sustainable practices, and special offers.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button 
              type="submit"
              className="bg-white hover:bg-gray-100 text-agrogreen-700 font-medium py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors"
            >
              Subscribe
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
          
          <p className="text-white/80 mt-4 text-sm">
            We respect your privacy. Your information will not be shared with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
