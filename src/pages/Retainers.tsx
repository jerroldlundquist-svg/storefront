import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, Zap, Crown } from 'lucide-react';

const Retainers = () => {
  const retainerPlans = [
    {
      name: "Strategic Advisory",
      price: "$10,000/month",
      icon: Star,
      description: "Ongoing strategic guidance for critical decisions",
      features: [
        "4 hours monthly strategic consultation",
        "Email and phone support",
        "Market intelligence updates",
        "Strategic planning sessions",
        "Executive briefings"
      ],
      ideal: "Business units and mid-market companies"
    },
    {
      name: "Executive Partnership", 
      price: "$25,000/month",
      icon: Zap,
      description: "Comprehensive advisory for complex challenges",
      features: [
        "10 hours monthly consultation",
        "Priority response (4-hour SLA)",
        "Board presentation support",
        "Due diligence assistance",
        "Strategic initiative guidance",
        "Quarterly business reviews"
      ],
      ideal: "Large corporations and PE portfolio companies"
    },
    {
      name: "Strategic Board Advisor",
      price: "$50,000/month", 
      icon: Crown,
      description: "Board-level strategic partnership",
      features: [
        "20 hours monthly consultation",
        "Same-day response guarantee",
        "Board meeting attendance",
        "Transaction advisory",
        "Crisis management support", 
        "Custom research and analysis",
        "Executive coaching"
      ],
      ideal: "Enterprise companies and investment firms"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Strategic Advisory Retainers | The Lundquist Group</title>
        <meta name="description" content="Ongoing strategic advisory services for Aerospace, Defense, Transportation & Technology companies. Monthly retainer partnerships from $10K-$50K." />
        <meta name="keywords" content="strategic advisory, retainer consulting, aerospace defense, ongoing advisory, executive partnership" />
        <link rel="canonical" href="/retainers" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Strategic Advisory Retainers
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Ongoing strategic partnership for complex challenges and critical decisions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#" className="tlg-schedule inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8" data-handle="retainer-access-5">
                    Schedule Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a href="#" className="tlg-buy inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visibility-ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="retainer-access-5">
                    Buy on Shopify
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold mb-12">Built for Organizations That Need</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Continuous Guidance</h3>
                    <p className="text-muted-foreground">Regular strategic input for evolving challenges</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Rapid Response</h3>
                    <p className="text-muted-foreground">Quick access to expertise when decisions can't wait</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Crown className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Deep Partnership</h3>
                    <p className="text-muted-foreground">Strategic advisors who understand your business</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Retainer Plans */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Choose Your Strategic Partnership Level</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {retainerPlans.map((plan, index) => {
                    const IconComponent = plan.icon;
                    return (
                      <Card key={index} className="border-2 hover:border-accent/50 transition-colors">
                        <CardHeader className="text-center pb-4">
                          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-8 w-8 text-accent" />
                          </div>
                          <CardTitle className="text-2xl font-serif">{plan.name}</CardTitle>
                          <div className="text-3xl font-bold text-accent">{plan.price}</div>
                          <p className="text-muted-foreground">{plan.description}</p>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mb-6">
                            <p className="text-sm font-medium text-muted-foreground">Ideal for:</p>
                            <p className="text-sm">{plan.ideal}</p>
                          </div>
                          <Button variant="outline" className="w-full">
                            Start Partnership
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">What You Can Expect</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Strategic Outcomes</h3>
                    <ul className="space-y-4">
                      {[
                        'Accelerated decision-making with expert input',
                        'Risk mitigation through experienced guidance',
                        'Enhanced strategic clarity and focus',
                        'Improved stakeholder confidence',
                        'Access to deep industry networks'
                      ].map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Support Areas</h3>
                    <ul className="space-y-4">
                      {[
                        'Strategic planning and execution',
                        'Market analysis and competitive intelligence',
                        'Due diligence and transaction support',
                        'Board presentation and investor relations',
                        'Crisis management and contingency planning'
                      ].map((area, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">How It Works</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
                      <p className="text-muted-foreground">We'll discuss your strategic challenges, objectives, and preferred working style to determine the best retainer fit.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Onboarding & Planning</h3>
                      <p className="text-muted-foreground">Deep dive into your business, stakeholders, and strategic priorities to establish our advisory framework.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ongoing Partnership</h3>
                      <p className="text-muted-foreground">Regular strategic sessions, responsive support, and proactive insights tailored to your evolving needs.</p>
                    </div>
                  </div>
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
                    <h3 className="text-xl font-semibold mb-3">What's the minimum commitment?</h3>
                    <p className="text-muted-foreground">6 months for Strategic Advisory, 12 months for Executive Partnership and Strategic Board Advisor levels.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Can hours roll over month to month?</h3>
                    <p className="text-muted-foreground">Yes, up to 50% of unused hours can roll to the following month.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Do you offer custom retainer arrangements?</h3>
                    <p className="text-muted-foreground">Absolutely. We can tailor scope, hours, and terms to match your specific requirements.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> Retainer services provide strategic business guidance only and do not constitute legal, tax, accounting, engineering, investment, or other professional advice. Consult qualified professionals for specialized guidance.
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
                  Ready for Strategic Partnership?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Let's discuss how ongoing advisory support can accelerate your strategic objectives.
                </p>
                <Button variant="primary" size="lg">
                  Schedule Strategy Discussion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Retainers;