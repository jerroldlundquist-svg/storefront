import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, BarChart3, TrendingUp, Calendar } from 'lucide-react';
import TrustIndicators from '@/components/sections/TrustIndicators';

const QuarterlyOutlook = () => {
  return (
    <>
      <Helmet>
        <title>Quarterly Sector Outlook | The Lundquist Group</title>
        <meta name="description" content="A&D quarterly outlook: market trends, defense spending, commercial aerospace forecasts, investment opportunities. Expert analysis." />
        <meta name="keywords" content="aerospace outlook, defense forecast, quarterly analysis, market trends, sector report" />
        <link rel="canonical" href="/research/quarterly-outlook" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Quarterly Sector Outlook
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Stay ahead of A&D market trends with expert quarterly analysis and forecasts
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#" className="buy-now inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="quarterly-sector-outlook">
                    Subscribe - $2,500/Quarter
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
                    <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Investment Teams</h3>
                    <p className="text-muted-foreground">PE/VC teams tracking A&D market opportunities</p>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Planners</h3>
                    <p className="text-muted-foreground">Corporate strategy teams planning market entry</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Business Development</h3>
                    <p className="text-muted-foreground">BD teams identifying partnership opportunities</p>
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
                    <h2 className="text-3xl font-serif font-bold mb-8">Key Insights</h2>
                    <ul className="space-y-4">
                      {[
                        'Defense budget trends and implications',
                        'Commercial aerospace market dynamics',
                        'Technology disruption analysis',
                        'M&A activity and valuation trends',
                        'Supply chain and geopolitical impacts',
                        'Investment opportunity identification'
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
                        'Quarterly sector outlook report (25-30 pages)',
                        'Executive summary and key takeaways',
                        'Market data and trend analysis',
                        'Company spotlight and case studies',
                        'Investment thesis updates',
                        'Quarterly briefing call with analysts'
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
                    <h2 className="text-3xl font-serif font-bold mb-8">Delivery Schedule</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Q1</div>
                        <div>
                          <h3 className="font-semibold">January Report</h3>
                          <p className="text-muted-foreground">Year-ahead outlook and priority themes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Q2</div>
                        <div>
                          <h3 className="font-semibold">April Report</h3>
                          <p className="text-muted-foreground">Mid-year trends and emerging opportunities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Q3</div>
                        <div>
                          <h3 className="font-semibold">July Report</h3>
                          <p className="text-muted-foreground">Budget cycle analysis and policy impacts</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Q4</div>
                        <div>
                          <h3 className="font-semibold">October Report</h3>
                          <p className="text-muted-foreground">Year-end wrap-up and next year preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Coverage Areas</h2>
                    <ul className="space-y-4">
                      {[
                        'Defense prime contractors and suppliers',
                        'Commercial aerospace OEMs and tier 1s',
                        'Space and satellite technology',
                        'Emerging technologies (AI, autonomy, cyber)',
                        'Transportation and mobility solutions',
                        'Policy and regulatory developments'
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
                    <h3 className="text-xl font-semibold mb-3">What markets are covered in detail?</h3>
                    <p className="text-muted-foreground">Defense (all services), commercial aviation, space, and dual-use technology markets with global perspective and regional insights.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">How current is the data and analysis?</h3>
                    <p className="text-muted-foreground">Reports are published within 30 days of quarter-end with the most recent earnings, contract awards, and policy developments included.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can I get customized analysis?</h3>
                    <p className="text-muted-foreground">The quarterly briefing call includes Q&A time for specific questions. We also offer custom research services for deeper dives.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational market analysis only and does not constitute investment, legal, tax, accounting, engineering, or other professional advice. See our <a href="/payment-terms" className="text-accent hover:underline">Payment Terms</a> & <a href="/terms" className="text-accent hover:underline">Terms</a> for complete details.
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
                  Stay Ahead of A&D Market Trends
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get quarterly insights that inform better investment and strategic decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#" className="buy-now inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="quarterly-sector-outlook">
                    Subscribe - $2,500/Quarter
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

export default QuarterlyOutlook;