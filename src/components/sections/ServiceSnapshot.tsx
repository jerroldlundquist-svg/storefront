import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Handshake, Search, Rocket } from 'lucide-react';

const ServiceSnapshot = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategy & Market Intelligence',
      description: 'Comprehensive market analysis and strategic planning for complex industry dynamics.'
    },
    {
      icon: Handshake,
      title: 'M&A / Transaction Support',
      description: 'Expert guidance through mergers, acquisitions, and strategic transactions.'
    },
    {
      icon: Search,
      title: 'Due Diligence',
      description: 'Thorough assessment and risk analysis for informed investment decisions.'
    },
    {
      icon: Rocket,
      title: 'Growth & Operating Advisory',
      description: 'Operational excellence and growth acceleration strategies for portfolio companies.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Strategic Advisory Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver specialized expertise across the full spectrum of strategic advisory services, 
            tailored to the unique challenges of aerospace, defense, transportation, and technology sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-surface border-border hover:bg-surface/80 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSnapshot;