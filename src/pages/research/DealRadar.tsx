import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Radar, TrendingUp, Bell, Clock } from 'lucide-react';

const DealRadar = () => {
  return (
    <>
      <Helmet>
        <title>Deal Radar Subscription | The Lundquist Group</title>
        <meta name="description" content="Monthly A&D deal intelligence: transaction tracking, market trends, valuation insights, strategic implications. Stay ahead of the market." />
        <meta name="keywords" content="deal radar, M&A intelligence, aerospace defense deals, transaction tracking, market intelligence" />
        <link rel="canonical" href="/research/deal-radar" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Deal Radar Subscription
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Stay ahead of A&D market activity with expert transaction intelligence and analysis
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Subscribe Now - $2,500/month
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
                    <h3 className="text-xl font-semibold mb-3">Investment Professionals</h3>
                    <p className="text-muted-foreground">PE/VC teams tracking A&D deal flow and market dynamics</p>
                  </div>
                  <div className="text-center">
                    <Radar className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Corporate Development</h3>
                    <p className="text-muted-foreground">Teams monitoring competitive M&A activity and opportunities</p>
                  </div>
                  <div className="text-center">
                    <Bell className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Advisors</h3>
                    <p className="text-muted-foreground">Consultants and bankers serving A&D clients and deals</p>
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
                    <h2 className="text-3xl font-serif font-bold mb-8">What You'll Get</h2>
                    <ul className="space-y-4">
                      {[
                        'Monthly deal tracking and analysis report',
                        'Transaction commentary and implications',
                        'Valuation trends and benchmarking',
                        'Strategic rationale and buyer insights',
                        'Market consolidation patterns',
                        'Emerging opportunity identification',
                        'Quarterly trend analysis webinar'
                      ].map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Monthly Deliverables</h2>
                    <ul className="space-y-4">
                      {[
                        'Deal Radar Report (15-20 pages)',
                        'Transaction database update',
                        'Executive summary dashboard',
                        'Sector-specific deal insights',
                        'Valuation multiple analysis',
                        'Strategic buyer activity tracking',
                        'Market outlook and implications'
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

          {/* Timeline & Coverage */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Delivery Schedule</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-20 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Monthly</div>
                        <div>
                          <h3 className="font-semibold">Deal Radar Report</h3>
                          <p className="text-muted-foreground">Comprehensive analysis delivered by 5th business day</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-20 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Quarterly</div>
                        <div>
                          <h3 className="font-semibold">Trend Analysis Webinar</h3>
                          <p className="text-muted-foreground">Interactive session with our research team</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-20 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Ad Hoc</div>
                        <div>
                          <h3 className="font-semibold">Breaking Deal Alerts</h3>
                          <p className="text-muted-foreground">Major transaction announcements and analysis</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Market Coverage</h2>
                    <ul className="space-y-4">
                      {[
                        'Commercial aerospace (OEMs, suppliers, MRO)',
                        'Defense contractors (primes and subs)',
                        'Space and satellite technology',
                        'Transportation technology and logistics',
                        'Adjacent technology sectors',
                        'Cross-border and international deals'
                      ].map((area, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-3 flex-shrink-0" />
                          <span className="text-lg">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sample Content */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Sample Analysis Topics</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-surface p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Transaction Spotlight</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Strategic rationale and buyer motivations</li>
                      <li>• Valuation analysis and market benchmarks</li>
                      <li>• Integration challenges and synergies</li>
                      <li>• Competitive implications</li>
                    </ul>
                  </div>
                  <div className="bg-surface p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Market Trends</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Consolidation patterns by sector</li>
                      <li>• Valuation multiple evolution</li>
                      <li>• Strategic vs. financial buyer activity</li>
                      <li>• Technology acquisition themes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">
                  Trusted by deal professionals at
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                  {['Global PE Firms', 'Strategic Acquirers', 'Investment Banks', 'Corporate Dev Teams'].map((company, i) => (
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
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What size deals do you track?</h3>
                    <p className="text-muted-foreground">We focus on transactions $25M+ with comprehensive analysis on deals $100M+ in our coverage sectors.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">How quickly do you report on new deals?</h3>
                    <p className="text-muted-foreground">Breaking deal alerts within 24-48 hours, with full analysis in the next monthly report.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can I access historical deal data?</h3>
                    <p className="text-muted-foreground">Yes, subscribers get access to our 5-year transaction database with search and filtering capabilities.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This research provides informational market intelligence only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. See our Payment Terms & Terms for complete details.
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
                  Stay Ahead of the Market
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get the deal intelligence you need to identify opportunities and track competitive activity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Subscribe Now - $2,500/month
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

export default DealRadar;