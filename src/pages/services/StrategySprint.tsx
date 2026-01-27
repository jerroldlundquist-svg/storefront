import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, Target } from 'lucide-react';

const StrategySprint = () => {
  return (
    <>
      <Helmet>
        <title>A&D Strategy Sprint (2 Weeks) | The Lundquist Group</title>
        <meta name="description" content="Two-week strategic sprint for Aerospace & Defense: market scan, competitive posture, 10-12 slide roadmap, executive readout. Book today." />
        <meta name="keywords" content="strategy sprint, aerospace defense, market analysis, competitive intelligence, strategic planning" />
        <link rel="canonical" href="/services/strategy-sprint" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Strategy Sprint
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Accelerate your strategic planning with a focused 2-week market and competitive analysis
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="tlg-schedule inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8" data-handle="strategy-sprint-2w">
                    Schedule Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="#" className="tlg-buy inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="strategy-sprint-2w">
                    Buy on Shopify
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Who This Is For</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Business Development</h3>
                    <p className="text-muted-foreground">Teams seeking rapid market intelligence for new opportunities</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Planning</h3>
                    <p className="text-muted-foreground">Leaders preparing for board presentations or investor meetings</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Private Equity</h3>
                    <p className="text-muted-foreground">Investment teams evaluating A&D market opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes & Deliverables */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Key Outcomes</h2>
                    <ul className="space-y-4">
                      {[
                        'Comprehensive market landscape analysis',
                        'Competitive positioning assessment',
                        'Strategic opportunity identification',
                        'Risk and challenge mapping',
                        'Actionable strategic roadmap',
                        'Executive-ready presentation materials'
                      ].map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Deliverables</h2>
                    <ul className="space-y-4">
                      {[
                        '10-12 slide strategic presentation',
                        'Market sizing and dynamics analysis',
                        'Competitive landscape mapping',
                        'Strategic options assessment',
                        '60-minute executive readout session',
                        'Follow-up Q&A and recommendations'
                      ].map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline & Inputs */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">2-Week Timeline</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 1</div>
                        <div>
                          <h3 className="font-semibold">Research & Analysis</h3>
                          <p className="text-muted-foreground">Market scan, competitive intelligence, industry dynamics</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 2</div>
                        <div>
                          <h3 className="font-semibold">Synthesis & Presentation</h3>
                          <p className="text-muted-foreground">Strategic framework development, slide creation, readout prep</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Day 15</div>
                        <div>
                          <h3 className="font-semibold">Executive Readout</h3>
                          <p className="text-muted-foreground">60-minute presentation and strategic discussion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Strategic question or opportunity definition',
                        'Current market understanding and assumptions',
                        'Key competitors and market players',
                        'Internal capabilities and constraints',
                        'Timeline and decision criteria',
                        'Stakeholder access for brief interviews'
                      ].map((input, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-3 flex-shrink-0" />
                          <span className="text-lg">{input}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">
                  Trusted by leaders at
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                  {['Defense Primes', 'PE Portfolio Companies', 'Technology Innovators', 'A&D Supply Chain'].map((company, i) => (
                    <div key={i} className="h-12 bg-muted/20 rounded flex items-center justify-center">
                      <span className="text-muted-foreground text-xs font-medium text-center px-2">
                        {company}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What markets do you cover?</h3>
                    <p className="text-muted-foreground">Aerospace, Defense, Transportation, and adjacent Technology sectors.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">How detailed is the competitive analysis?</h3>
                    <p className="text-muted-foreground">Company-level analysis including positioning, capabilities, and strategic direction for key players.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can you accommodate urgent timelines?</h3>
                    <p className="text-muted-foreground">Yes, we can expedite to 1 week for an additional 50% fee.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational market analysis only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. Consult qualified professionals for specialized guidance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 bg-navy-gradient text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Accelerate Your Strategic Planning
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get the market intelligence you need to make confident strategic decisions in just 2 weeks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $15,000
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default StrategySprint;