import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Handshake, Search, Rocket, Building, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Strategic Advisory & Market Intelligence',
      description: 'Comprehensive strategic planning and market analysis to identify opportunities and mitigate risks in dynamic market environments.',
      deliverables: [
        'Market sizing and segmentation analysis',
        'Competitive landscape assessment',
        'Strategic planning and roadmap development',
        'Business model innovation',
        'Entry strategy for new markets'
      ]
    },
    {
      icon: Handshake,
      title: 'M&A / Transaction Support',
      description: 'Expert guidance through complex transactions including buy-side and sell-side advisory, carve-outs, and strategic partnerships.',
      deliverables: [
        'Target identification and screening',
        'Valuation analysis and modeling',
        'Due diligence management',
        'Transaction structuring and negotiation support',
        'Post-merger integration planning'
      ]
    },
    {
      icon: Building,
      title: 'Private Equity Portfolio Support',
      description: 'Specialized advisory services for private equity firms and their portfolio companies to drive value creation and operational excellence.',
      deliverables: [
        'Portfolio company assessment',
        'Value creation planning',
        'Operational improvement initiatives',
        'Exit strategy development',
        'Board advisory services'
      ]
    },
    {
      icon: Rocket,
      title: 'Go-to-Market & Growth Strategy',
      description: 'Strategic guidance for launching new products, entering new markets, and accelerating profitable growth.',
      deliverables: [
        'Market entry strategy',
        'Customer segmentation and targeting',
        'Pricing strategy optimization',
        'Sales channel development',
        'Partnership strategy'
      ]
    },
    {
      icon: Users,
      title: 'Operating Improvement & Transformation',
      description: 'Operational excellence initiatives to improve efficiency, reduce costs, and enhance competitive positioning.',
      deliverables: [
        'Operational assessment and benchmarking',
        'Process optimization',
        'Cost reduction initiatives',
        'Digital transformation planning',
        'Performance improvement programs'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Strategic Advisory Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Comprehensive Strategic Advisory
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We deliver specialized expertise across the full spectrum of strategic advisory services, 
              tailored to the unique challenges and opportunities in aerospace, defense, transportation, 
              and technology sectors.
            </p>
            <Button variant="primary" size="lg">
              Discuss Your Needs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => {
              const serviceSlug = service.title.toLowerCase()
                .replace(/&/g, '')
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '');
              
              return (
                <Card key={index} id={serviceSlug} className="bg-card border-border overflow-hidden scroll-mt-24">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Service Info */}
                      <div className="lg:col-span-2 p-12">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <service.icon className="h-8 w-8 text-accent" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                              {service.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-background p-12 border-l border-border">
                        <h3 className="text-lg font-semibold text-foreground mb-6">
                          Key Deliverables
                        </h3>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="outline" className="mt-8 w-full" asChild>
                          <Link to={`/services/${serviceSlug}`}>
                            Discuss This Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-foreground/90 mb-12 max-w-2xl mx-auto">
              Every engagement begins with understanding your specific objectives and challenges. 
              Let's discuss how we can help you achieve your strategic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;