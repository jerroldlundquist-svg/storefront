import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Search, TrendingUp, Eye, BarChart } from 'lucide-react';

const MarketDiligence = () => {
  return (
    <>
      <Helmet>
        <title>Market Diligence Quick Look | The Lundquist Group</title>
        <meta name="description" content="Rapid market assessment for A&D opportunities: competitive landscape, market sizing, key risks, strategic implications. 1-week delivery." />
        <meta name="keywords" content="market diligence, due diligence, aerospace defense, market assessment, competitive analysis" />
        <link rel="canonical" href="/services/market-diligence" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Market Diligence Quick Look
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Rapid market intelligence for time-sensitive investment and strategic decisions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $8,500
                  </Button>
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
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Investment Teams</h3>
                    <p className="text-muted-foreground">PE/VC firms conducting rapid market assessment for deals</p>
                  </div>
                  <div className="text-center">
                    <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Corporate Development</h3>
                    <p className="text-muted-foreground">Teams evaluating acquisition targets and market opportunities</p>
                  </div>
                  <div className="text-center">
                    <Search className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Planners</h3>
                    <p className="text-muted-foreground">Leaders needing quick market intelligence for strategic decisions</p>
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
                        'Market size and growth trajectory assessment',
                        'Competitive landscape and positioning analysis',
                        'Key risk and opportunity identification',
                        'Regulatory and compliance considerations',
                        'Strategic implications and recommendations',
                        'Investment thesis validation or challenge'
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
                        '8-10 slide executive summary',
                        'Market sizing and segmentation analysis',
                        'Competitive positioning assessment',
                        'Risk and opportunity matrix',
                        'Key findings and strategic implications',
                        '45-minute readout session'
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
                    <h2 className="text-3xl font-serif font-bold mb-8">1-Week Timeline</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Days 1-2</div>
                        <div>
                          <h3 className="font-semibold">Research & Analysis</h3>
                          <p className="text-muted-foreground">Market data collection and competitive intelligence</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Days 3-4</div>
                        <div>
                          <h3 className="font-semibold">Synthesis & Assessment</h3>
                          <p className="text-muted-foreground">Analysis integration and risk/opportunity evaluation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Day 5</div>
                        <div>
                          <h3 className="font-semibold">Presentation & Readout</h3>
                          <p className="text-muted-foreground">Executive summary delivery and discussion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Target market or company definition',
                        'Key questions and hypotheses to test',
                        'Investment thesis or strategic rationale',
                        'Competitive concerns and focus areas',
                        'Decision timeline and criteria',
                        'Access to any proprietary data sources'
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
                  Trusted by investment professionals at
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                  {['Global PE Firms', 'Strategic Acquirers', 'Investment Banks', 'Family Offices'].map((company, i) => (
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
                    <p className="text-muted-foreground">Aerospace, Defense, Transportation, and adjacent Technology sectors with deep domain expertise.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">How detailed is the competitive analysis?</h3>
                    <p className="text-muted-foreground">Company-level analysis focusing on key players, their positioning, and competitive dynamics.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can you expedite the timeline?</h3>
                    <p className="text-muted-foreground">Yes, we can deliver in 3-4 days for urgent decisions with a 25% expedite fee.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational market analysis only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. See our Payment Terms & Terms for complete details.
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
                  Get Rapid Market Intelligence
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Make informed decisions with expert market assessment delivered in just one week.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $8,500
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

export default MarketDiligence;