import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, FileText } from 'lucide-react';

const ExecutiveStrategyCall = () => {
  return (
    <>
      <Helmet>
        <title>Executive Strategy Call (90 min) | The Lundquist Group</title>
        <meta name="description" content="90-minute executive strategy session for A&D leaders: strategic challenges assessment, market positioning review, actionable next steps. Book today." />
        <meta name="keywords" content="executive strategy, aerospace defense consulting, strategic planning, leadership advisory" />
        <link rel="canonical" href="/services/executive-strategy-call" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Executive Strategy Call
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Crystallize your strategic direction in 90 focused minutes with industry veterans
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="tlg-schedule inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8" data-handle="executive-strategy-call-90">
                    Schedule Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="#" className="tlg-buy inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="executive-strategy-call-90">
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
                    <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">CEOs & Presidents</h3>
                    <p className="text-muted-foreground">Making critical strategic decisions in A&D markets</p>
                  </div>
                  <div className="text-center">
                    <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Business Unit Leaders</h3>
                    <p className="text-muted-foreground">Navigating complex market dynamics and competitive pressures</p>
                  </div>
                  <div className="text-center">
                    <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Investment Teams</h3>
                    <p className="text-muted-foreground">Evaluating strategic options and market positioning</p>
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
                        'Clear strategic priorities and next steps',
                        'Market positioning assessment and recommendations',
                        'Competitive landscape insights',
                        'Risk and opportunity identification',
                        'Actionable framework for decision-making'
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
                        '90-minute executive strategy session',
                        'Strategic priorities assessment',
                        'Market positioning analysis',
                        'Next steps action plan',
                        'Follow-up summary and recommendations'
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

          {/* Pricing */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-8">Investment</h2>
                <div className="bg-surface rounded-lg p-8 border-2 border-accent/20">
                  <div className="text-4xl font-bold text-accent mb-4">$2,500</div>
                  <p className="text-muted-foreground mb-4">90-minute executive strategy session</p>
                  <div className="text-sm text-muted-foreground" data-spi-note></div>
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
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold mr-4">1</div>
                        <div>
                          <h3 className="font-semibold">Initial Briefing (15 min)</h3>
                          <p className="text-muted-foreground">Share background materials and context</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold mr-4">2</div>
                        <div>
                          <h3 className="font-semibold">Strategy Session (90 min)</h3>
                          <p className="text-muted-foreground">Deep-dive discussion and analysis</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold mr-4">3</div>
                        <div>
                          <h3 className="font-semibold">Follow-up (48 hours)</h3>
                          <p className="text-muted-foreground">Summary and recommendations delivered</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Current strategic challenges overview',
                        'Market context and competitive landscape',
                        'Key stakeholder perspectives',
                        'Strategic options under consideration',
                        'Decision timeline and constraints'
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
                  {['Fortune 500 Defense Contractors', 'Private Equity Firms', 'Aerospace OEMs', 'Technology Companies'].map((company, i) => (
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
                    <h3 className="text-xl font-semibold mb-3">How quickly can we schedule?</h3>
                    <p className="text-muted-foreground">Typically within 3-5 business days of booking.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What format is the session?</h3>
                    <p className="text-muted-foreground">Video conference with screen sharing for materials review.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can multiple executives participate?</h3>
                    <p className="text-muted-foreground">Yes, up to 4 participants for optimal discussion dynamics.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational business strategy guidance only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. Consult qualified professionals for specialized guidance.
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
                  Ready to Clarify Your Strategy?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Book your executive strategy call today and gain the clarity you need to move forward with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="tlg-schedule inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8" data-handle="executive-strategy-call-90">
                    Schedule Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="#" className="tlg-buy inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="executive-strategy-call-90">
                    Buy on Shopify
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

export default ExecutiveStrategyCall;