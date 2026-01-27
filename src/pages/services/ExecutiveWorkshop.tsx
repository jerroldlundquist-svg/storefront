import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Users, Target, Lightbulb } from 'lucide-react';

const ExecutiveWorkshop = () => {
  return (
    <>
      <Helmet>
        <title>Executive Workshop (Half Day) | The Lundquist Group</title>
        <meta name="description" content="Half-day executive workshop for A&D leadership teams: strategic alignment, decision frameworks, actionable outcomes. Book today." />
        <meta name="keywords" content="executive workshop, leadership development, aerospace defense, strategic alignment, team workshop" />
        <link rel="canonical" href="/services/executive-workshop" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Executive Workshop
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Align your leadership team and accelerate strategic decisions in half a day
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $7,500
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
                    <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Executive Teams</h3>
                    <p className="text-muted-foreground">Leadership groups needing strategic alignment and clarity</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Board Directors</h3>
                    <p className="text-muted-foreground">Boards requiring focused strategic discussion and decision-making</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Investment Teams</h3>
                    <p className="text-muted-foreground">PE/VC teams evaluating portfolio company strategies</p>
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
                        'Strategic alignment across leadership team',
                        'Clear decision-making framework',
                        'Prioritized action items with owners',
                        'Enhanced stakeholder confidence',
                        'Improved communication and collaboration',
                        'Accelerated strategic execution'
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
                        'Half-day facilitated workshop (4 hours)',
                        'Pre-workshop stakeholder interviews',
                        'Custom workshop agenda and materials',
                        'Real-time decision capture and documentation',
                        'Post-workshop action plan with timelines',
                        'Follow-up session within 30 days'
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
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 1</div>
                        <div>
                          <h3 className="font-semibold">Preparation & Interviews</h3>
                          <p className="text-muted-foreground">Stakeholder interviews and workshop customization</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 2</div>
                        <div>
                          <h3 className="font-semibold">Workshop Delivery</h3>
                          <p className="text-muted-foreground">Half-day facilitated session with your team</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 4</div>
                        <div>
                          <h3 className="font-semibold">Follow-up Session</h3>
                          <p className="text-muted-foreground">Progress review and additional guidance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Workshop objectives and desired outcomes',
                        'Key stakeholders and decision-makers',
                        'Current strategic challenges overview',
                        'Background materials and context',
                        'Dedicated 4-hour time block',
                        'Conference room or virtual meeting setup'
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
                  Trusted by leadership teams at
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
                  {['Fortune 500 Defense', 'Private Equity Firms', 'Aerospace Leaders', 'Tech Innovators'].map((company, i) => (
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
                    <h3 className="text-xl font-semibold mb-3">How many participants can attend?</h3>
                    <p className="text-muted-foreground">Optimal group size is 6-12 executives for effective discussion and decision-making.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can this be conducted virtually?</h3>
                    <p className="text-muted-foreground">Yes, we offer both in-person and virtual workshop options with equal effectiveness.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What if we need more than half a day?</h3>
                    <p className="text-muted-foreground">We can extend to full-day or multi-day formats for complex strategic challenges.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational business strategy guidance only and does not constitute legal, tax, accounting, engineering, investment, or other professional advice. See our Payment Terms & Terms for complete details.
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
                  Ready to Align Your Leadership Team?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Transform strategic discussion into decisive action with our facilitated workshop approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                    Buy Now - $7,500
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

export default ExecutiveWorkshop;