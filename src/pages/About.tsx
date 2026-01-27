import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Target, Award, Shield, Globe, TrendingUp, MessageCircle, Calendar, ArrowRight, Star, Quote } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We concentrate exclusively on aerospace, defense, transportation, and technology sectors.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'Collaborative relationships built on trust, transparency, and shared objectives.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Track record of successful outcomes across complex strategic initiatives.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity First',
      description: 'Uncompromising commitment to ethical conduct and client confidentiality.'
    }
  ];

  const metrics = [
    { number: '$15B+', label: 'Transactions Advised', icon: TrendingUp },
    { number: '200+', label: 'Strategic Engagements', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '25+', label: 'Years Combined Experience', icon: Award }
  ];

  const credentials = [
    { category: 'Security Clearances', items: ['Secret', 'Top Secret', 'TS/SCI'] },
    { category: 'Certifications', items: ['PMI-PMP', 'CFA', 'Series 7 & 63'] },
    { category: 'Memberships', items: ['AIA', 'NDIA', 'SAE International'] },
    { category: 'Education', items: ['MIT', 'Wharton', 'Naval War College'] }
  ];

  const testimonials = [
    {
      quote: "The Lundquist Group's deep industry knowledge and strategic insight were instrumental in navigating our complex acquisition. Their team understood the nuances of defense contracting better than any advisor we've worked with.",
      author: "CEO, Defense Technology Company",
      company: "Fortune 500 Aerospace Firm",
      rating: 5
    },
    {
      quote: "Working with TLG transformed our approach to market entry. Their tactical execution combined with strategic vision delivered results that exceeded our projections by 40%.",
      author: "Managing Partner",
      company: "Private Equity Firm",
      rating: 5
    },
    {
      quote: "The team's operational background in aerospace gives them credibility that pure consultants simply can't match. They've been there, done that.",
      author: "Chief Strategy Officer",
      company: "Transportation Technology Leader",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What makes The Lundquist Group different from other consulting firms?",
      answer: "Unlike generalist consultants, we focus exclusively on aerospace, defense, transportation, and technology. Our principals have held senior executive positions in these industries, giving us insider perspective on market dynamics, regulatory requirements, and competitive landscapes."
    },
    {
      question: "What types of clients do you typically work with?",
      answer: "We serve three primary client types: senior management teams at mid-to-large industrial companies, private equity firms investing in our sectors, and institutional investors evaluating strategic opportunities. Our engagements range from $50M to multi-billion dollar transactions."
    },
    {
      question: "How do you ensure confidentiality given the sensitive nature of defense work?",
      answer: "Our team maintains active security clearances and follows strict protocols for classified information. We've successfully supported numerous classified programs and understand the unique requirements of defense contracting."
    },
    {
      question: "What is your typical engagement timeline?",
      answer: "Engagement timelines vary by scope: Quick-look market assessments (2-4 weeks), comprehensive due diligence (6-8 weeks), and strategic transformation initiatives (3-6 months). We always provide clear timelines and milestones upfront."
    },
    {
      question: "Do you work internationally?",
      answer: "Yes, we regularly advise on international transactions and market entry strategies. Our team has experience with ITAR/EAR compliance, foreign investment regulations, and cross-border M&A in our focus sectors."
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Assess',
      description: 'Comprehensive analysis of market dynamics, competitive landscape, and strategic options.',
      cta: 'Market Assessment',
      link: '/services/market-diligence'
    },
    {
      number: '02',
      title: 'Advise',
      description: 'Tailored strategic recommendations based on deep industry expertise and market intelligence.',
      cta: 'Strategy Session',
      link: '/services/executive-strategy-call'
    },
    {
      number: '03',
      title: 'Execute',
      description: 'Hands-on support throughout implementation to ensure successful outcomes.',
      cta: 'Strategy Sprint',
      link: '/services/strategy-sprint'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8">
              About The Lundquist Group
            </h1>
            <p className="text-xl text-primary/80 leading-relaxed mb-12">
              Founded on the principle that specialized expertise drives superior outcomes, 
              The Lundquist Group serves as a trusted strategic advisor to senior management, 
              private equity firms, and institutional investors across high-growth industrial sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                className="tlg-schedule"
                data-handle="executive-strategy-call-90"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Strategy Call
              </Button>
              <Button variant="outline" size="lg" asChild className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Our Team
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-primary mb-8">
                Leadership & Experience
              </h2>
              <div className="space-y-6 text-primary/80 leading-relaxed">
                <p>
                  Our team combines decades of industry experience with deep functional expertise 
                  in strategy, corporate development, and investment management. We have advised 
                  on billions of dollars in transactions and strategic initiatives across our 
                  core sectors.
                </p>
                <p>
                  The firm's principals have held senior executive positions at leading aerospace 
                  and defense companies, providing us with insider perspectives on industry 
                  dynamics, competitive landscapes, and emerging opportunities.
                </p>
                <p>
                  This unique combination of operational experience and advisory expertise enables 
                  us to deliver actionable insights that drive meaningful business outcomes for our clients.
                </p>
              </div>
            </div>
            <div className="bg-white border border-primary/20 rounded-lg p-8">
              <div className="aspect-square rounded-lg mb-6 overflow-hidden">
                <img 
                  src="/lovable-uploads/309602fc-8415-43a3-a617-30ef68167b83.png" 
                  alt="Professional headshot of company leadership" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Executive Leadership Team
                </h3>
                <p className="text-primary/80">
                  Combined 50+ years in aerospace, defense, and technology sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              These principles guide every engagement and define our approach to client service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-primary/20 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-primary/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white border-y border-primary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                <p className="text-sm text-primary/80 font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Credentials & Expertise
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Our team maintains the highest levels of professional certifications and security clearances required for complex engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {credentials.map((cred, index) => (
              <Card key={index} className="bg-white border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    {cred.category}
                  </h3>
                  <div className="space-y-2">
                    {cred.items.map((item, i) => (
                      <Badge key={i} variant="outline" className="mr-2 mb-2 border-primary text-primary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Trusted by leaders across aerospace, defense, transportation, and technology sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-primary/20">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <blockquote className="text-primary/80 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-primary/80">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Get answers to common questions about our services, approach, and expertise.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-primary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary/80">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary/80 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-primary/80 mb-6">
                Have a question that's not answered here?
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-navy-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              Our proven methodology ensures consistent delivery of strategic value across every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">{step.number}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {step.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="border-accent/30 text-accent hover:bg-accent/10"
                >
                  <a href={step.link}>
                    {step.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;