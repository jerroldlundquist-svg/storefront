import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import aerospaceImage from '@/assets/business-aviation.jpg';
import defenseImage from '@/assets/defense-aircraft.jpg';
import transportationImage from '@/assets/transportation-tech.jpg';
import technologyImage from '@/assets/technology-innovation.jpg';

const IndustriesPreview = () => {
  const industries = [
    {
      title: 'Aerospace',
      description: 'Commercial aviation, business jets, and space technology advisory.',
      image: aerospaceImage,
      href: '/industries#aerospace'
    },
    {
      title: 'Defense',
      description: 'Military and defense contractor strategic guidance and market intelligence.',
      image: defenseImage,
      href: '/industries#defense'
    },
    {
      title: 'Transportation',
      description: 'Advanced mobility solutions and transportation technology innovation.',
      image: transportationImage,
      href: '/industries#transportation'
    },
    {
      title: 'Technology',
      description: 'Emerging technologies and digital transformation in industrial sectors.',
      image: technologyImage,
      href: '/industries#technology'
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Industry Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep sector knowledge and proven track record across the industries 
            driving innovation in the modern economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="bg-card border-border overflow-hidden group hover:shadow-elegant transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn p-0 h-auto text-accent hover:text-accent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;