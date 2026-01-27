import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import aerospaceImage from '@/assets/business-aviation.jpg';
import defenseImage from '@/assets/defense-aircraft.jpg';
import transportationImage from '@/assets/transportation-tech.jpg';
import technologyImage from '@/assets/technology-innovation.jpg';

const Industries = () => {
  const industries = [
    {
      id: 'aerospace',
      title: 'Aerospace',
      subtitle: 'Commercial, Business Aviation & Space',
      description: 'Deep expertise across the full aerospace value chain, from commercial aviation and business jets to emerging space technologies and advanced air mobility solutions.',
      image: aerospaceImage,
      challenges: [
        'Post-pandemic recovery and demand uncertainty',
        'Supply chain disruption and vendor management',
        'Sustainable aviation technology adoption',
        'Regulatory compliance and certification'
      ],
      services: [
        'Market entry strategy for new aerospace segments',
        'Supply chain optimization and risk mitigation',
        'Technology assessment and investment prioritization',
        'M&A strategy and target identification'
      ]
    },
    {
      id: 'defense',
      title: 'Defense',
      subtitle: 'Military & Defense Contractors',
      description: 'Strategic guidance for defense contractors and military technology companies navigating complex procurement cycles, modernization programs, and international markets.',
      image: defenseImage,
      challenges: [
        'Defense budget cycles and funding uncertainty',
        'Technology modernization requirements',
        'International market expansion',
        'Cybersecurity and data protection'
      ],
      services: [
        'Defense program capture strategy',
        'International business development',
        'Technology transition from R&D to production',
        'Portfolio optimization and divestiture'
      ]
    },
    {
      id: 'transportation',
      title: 'Transportation',
      subtitle: 'Advanced Mobility & Infrastructure',
      description: 'Advisory services for companies developing next-generation transportation solutions, from autonomous vehicles to smart infrastructure and sustainable mobility platforms.',
      image: transportationImage,
      challenges: [
        'Autonomous vehicle technology development',
        'Infrastructure modernization investment',
        'Regulatory framework evolution',
        'Sustainable transportation solutions'
      ],
      services: [
        'Technology roadmap development',
        'Partnership and ecosystem strategy',
        'Regulatory strategy and stakeholder engagement',
        'Investment prioritization and capital allocation'
      ]
    },
    {
      id: 'technology',
      title: 'Technology',
      subtitle: 'Industrial Technology & Innovation',
      description: 'Strategic guidance for technology companies serving industrial markets, including IoT, AI, automation, and digital transformation solutions for traditional industries.',
      image: technologyImage,
      challenges: [
        'Digital transformation acceleration',
        'AI and automation integration',
        'Cybersecurity and data governance',
        'Platform and ecosystem development'
      ],
      services: [
        'Digital strategy and technology assessment',
        'Platform business model development',
        'Innovation portfolio management',
        'Strategic partnership and alliance strategy'
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
              Industry Expertise
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Deep Sector Knowledge
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Our specialized focus on aerospace, defense, transportation, and technology 
              enables us to deliver insights and strategic guidance that drive meaningful 
              business outcomes in complex, rapidly evolving markets.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Sections */}
      {industries.map((industry, index) => (
        <section 
          key={industry.id} 
          id={industry.id}
          className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-surface'}`}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-96 object-cover rounded-lg shadow-elegant"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Badge variant="secondary" className="mb-4">
                  {industry.subtitle}
                </Badge>
                <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                  {industry.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {industry.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Key Challenges
                    </h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      How We Help
                    </h3>
                    <ul className="space-y-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline">
                  Discuss {industry.title} Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-navy-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-foreground/90 mb-12 max-w-2xl mx-auto">
              Our deep sector knowledge and extensive network enable us to identify 
              opportunities and navigate challenges specific to your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Related Insights
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;