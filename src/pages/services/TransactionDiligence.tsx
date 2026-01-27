import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, FileSearch, Shield, Target, AlertTriangle } from 'lucide-react';

const TransactionDiligence = () => {
  return (
    <>
      <Helmet>
        <title>Transaction Diligence (4 Weeks) | The Lundquist Group</title>
        <meta name="description" content="Comprehensive transaction diligence for A&D deals: commercial, strategic, and operational assessment. 4-week deep dive analysis." />
        <meta name="keywords" content="transaction diligence, due diligence, aerospace defense, M&A advisory, deal support" />
        <link rel="canonical" href="/services/transaction-diligence" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Transaction Diligence
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Comprehensive commercial and strategic assessment for critical A&D transactions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $45,000
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
                    <FileSearch className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Private Equity</h3>
                    <p className="text-muted-foreground">Investment teams conducting buy-side diligence on A&D targets</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Acquirers</h3>
                    <p className="text-muted-foreground">Corporations evaluating M&A opportunities and synergies</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Investment Banks</h3>
                    <p className="text-muted-foreground">Advisory teams supporting client transactions and valuations</p>
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
                        'Comprehensive commercial assessment',
                        'Strategic rationale validation',
                        'Market position and competitive dynamics',
                        'Technology and capability evaluation',
                        'Regulatory and compliance risk assessment',
                        'Value creation opportunity identification',
                        'Integration risk and synergy analysis'
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
                        'Executive summary (5-7 slides)',
                        'Detailed diligence report (25-30 pages)',
                        'Market and competitive analysis',
                        'Technology and IP assessment',
                        'Commercial due diligence findings',
                        'Risk matrix and mitigation strategies',
                        'Management presentation session',
                        'Post-close value creation plan'
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
                    <h2 className="text-3xl font-serif font-bold mb-8">4-Week Timeline</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 1</div>
                        <div>
                          <h3 className="font-semibold">Data Room Review & Planning</h3>
                          <p className="text-muted-foreground">Document analysis and diligence workstream setup</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 2</div>
                        <div>
                          <h3 className="font-semibold">Market & Competitive Analysis</h3>
                          <p className="text-muted-foreground">External market research and competitive positioning</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 3</div>
                        <div>
                          <h3 className="font-semibold">Management Interviews</h3>
                          <p className="text-muted-foreground">Executive interviews and operational assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 4</div>
                        <div>
                          <h3 className="font-semibold">Synthesis & Presentation</h3>
                          <p className="text-muted-foreground">Report finalization and management readout</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Access to data room and documents',
                        'Investment thesis and key questions',
                        'Management team availability for interviews',
                        'Customer and partner contact facilitation',
                        'Competitive intelligence and concerns',
                        'Post-close strategic objectives',
                        'Integration planning requirements'
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
                  Trusted by deal teams at
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                  {['Top-Tier PE Firms', 'Strategic Acquirers', 'Investment Banks', 'Defense Contractors'].map((company, i) => (
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
                    <h3 className="text-xl font-semibold mb-3">What transaction sizes do you typically support?</h3>
                    <p className="text-muted-foreground">We focus on transactions ranging from $50M to $5B+ in A&D and adjacent markets.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Do you provide valuation opinions?</h3>
                    <p className="text-muted-foreground">We provide market-based valuation context and benchmarking, but not formal valuation opinions.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can you work under tight deal timelines?</h3>
                    <p className="text-muted-foreground">Yes, we can accelerate to 2-3 weeks for expedited processes with additional resources.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational transaction analysis only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. See our Payment Terms & Terms for complete details.
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
                  Mitigate Transaction Risk
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get comprehensive diligence support from industry experts who understand A&D deal complexity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $45,000
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

export default TransactionDiligence;