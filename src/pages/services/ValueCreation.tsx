import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Target, DollarSign } from 'lucide-react';
import TrustIndicators from '@/components/sections/TrustIndicators';

const ValueCreation = () => {
  return (
    <>
      <Helmet>
        <title>Value Creation Playbook | The Lundquist Group</title>
        <meta name="description" content="PE/VC value creation playbook for A&D portfolio companies: growth levers, operational improvements, exit strategies. 100-day plan." />
        <meta name="keywords" content="value creation, private equity, aerospace defense, portfolio optimization, growth strategy" />
        <link rel="canonical" href="/services/value-creation" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Value Creation Playbook
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Accelerate portfolio company performance with targeted A&D value creation strategies
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#" className="buy-now inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="value-creation-playbook">
                    Buy Now - $25,000
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
                    <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Private Equity Firms</h3>
                    <p className="text-muted-foreground">PE teams maximizing A&D portfolio company value</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Portfolio CEOs</h3>
                    <p className="text-muted-foreground">Leadership teams executing growth strategies</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Board Directors</h3>
                    <p className="text-muted-foreground">Directors overseeing value creation initiatives</p>
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
                        'Prioritized value creation opportunities',
                        'Revenue growth acceleration strategies',
                        'Operational efficiency improvements',
                        'Market expansion roadmap',
                        'Exit value optimization plan',
                        'Clear 100-day implementation priorities'
                      ].map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What You'll Receive</h2>
                    <ul className="space-y-4">
                      {[
                        'Comprehensive value creation playbook',
                        'Growth opportunity assessment',
                        'Operational improvement analysis',
                        '100-day action plan with milestones',
                        'KPI dashboard and tracking framework',
                        'Executive presentation materials'
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
                    <h2 className="text-3xl font-serif font-bold mb-8">Timeline</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 1-2</div>
                        <div>
                          <h3 className="font-semibold">Discovery & Assessment</h3>
                          <p className="text-muted-foreground">Data gathering and stakeholder interviews</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 3-4</div>
                        <div>
                          <h3 className="font-semibold">Analysis & Strategy</h3>
                          <p className="text-muted-foreground">Value driver identification and prioritization</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 5-6</div>
                        <div>
                          <h3 className="font-semibold">Playbook Development</h3>
                          <p className="text-muted-foreground">Action plan creation and presentation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Portfolio company financials (3 years)',
                        'Strategic plan and growth objectives',
                        'Market position and competitive analysis',
                        'Operational metrics and KPIs',
                        'Management team structure and capabilities',
                        'Investment thesis and exit timeline'
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
          <TrustIndicators />

          {/* FAQ */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What's the typical value uplift potential?</h3>
                    <p className="text-muted-foreground">Our playbooks typically identify 15-30% EBITDA improvement opportunities through a combination of revenue growth and operational efficiency measures.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">How industry-specific is the analysis?</h3>
                    <p className="text-muted-foreground">Highly specialized for A&D markets, including defense contracting, commercial aerospace, and dual-use technology considerations.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Do you provide implementation support?</h3>
                    <p className="text-muted-foreground">The playbook includes detailed implementation guidance. We offer additional services for hands-on execution support and progress monitoring.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational business strategy guidance only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. See our <a href="/payment-terms" className="text-accent hover:underline">Payment Terms</a> & <a href="/terms" className="text-accent hover:underline">Terms</a> for complete details.
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
                  Ready to Maximize Portfolio Value?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get the strategic playbook to unlock your A&D portfolio company's full potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#" className="buy-now inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="value-creation-playbook">
                    Buy Now - $25,000
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ValueCreation;