import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Let's talk about your objectives
          </h2>
          <p className="text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you're exploring strategic opportunities, evaluating transactions, 
            or seeking operational guidance, we're here to help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="primary" size="lg" className="min-w-[220px]">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[220px]">
              Email Us
            </Button>
          </div>
          
          <p className="text-sm text-foreground/70 mt-8">
            Confidential discussions • No obligation • Strategic focus
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;