import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { ArrowRight, Handshake, Clock, DollarSign, Users } from 'lucide-react';

const MATransactionSupport = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'M&A / Transaction Support', href: '' }
  ];

  return (
    <Layout>
      <Helmet>
        <title>M&A / Transaction Support | The Lundquist Group</title>
        <meta 
          name="description" 
          content="Expert guidance through complex M&A transactions including buy-side and sell-side advisory, carve-outs, and strategic partnerships in aerospace, defense, and technology." 
        />
        <link rel="canonical" href="https://lundquistgroupinc.com/services/ma-transaction-support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                <Handshake className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  M&A / Transaction Support
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Expert guidance through complex transactions including buy-side and sell-side advisory
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                From $7,500
              </Badge>
              <Badge variant="outline">
                3-6 months typical timeline
              </Badge>
            </div>

            <Button variant="primary" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Clear view of target fit, valuation, and key risks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Deal process management and faster close</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Integration plan aligned to value creation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Comprehensive due diligence and risk assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Synergy identification and value capture strategies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Post-merger integration roadmap and execution support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Key Deliverables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Target Identification & Screening</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comprehensive market mapping and target universe</li>
                    <li>• Strategic fit assessment and prioritization</li>
                    <li>• Initial outreach and management presentations</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Valuation & Financial Modeling</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comprehensive valuation analysis and modeling</li>
                    <li>• Scenario planning and sensitivity analysis</li>
                    <li>• Cost of capital and financing structure optimization</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Due Diligence Management</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Comprehensive due diligence workstream coordination</li>
                    <li>• Risk assessment and mitigation strategies</li>
                    <li>• Management interview coordination and analysis</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Integration Planning</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Transaction structuring and negotiation support</li>
                    <li>• Post-merger integration planning and execution</li>
                    <li>• Synergy roadmap and value capture plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-accent" />
                    <CardTitle className="text-lg">Who It's For</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Corporate development teams</li>
                    <li>• Private equity and growth capital firms</li>
                    <li>• Investment banks and advisory firms</li>
                    <li>• Strategic acquirers and consolidators</li>
                    <li>• Family offices and institutional investors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <CardTitle className="text-lg">Timeline</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Phase 1: Target identification (2-4 weeks)</li>
                    <li>• Phase 2: Due diligence (4-8 weeks)</li>
                    <li>• Phase 3: Valuation and structuring (2-4 weeks)</li>
                    <li>• Phase 4: Integration planning (2-6 weeks)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-accent" />
                    <CardTitle className="text-lg">Investment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">From $7,500</p>
                    <p>Fixed-fee phases with success fee options</p>
                    <p>Scope determined during intake consultation</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <details className="group border border-border rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-foreground group-open:border-b">
                  How do you price M&A transactions?
                  <div className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  We structure engagements with fixed-fee phases and optional success components. Pricing is determined during intake based on transaction complexity, timeline, and scope of services required.
                </div>
              </details>

              <details className="group border border-border rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-foreground group-open:border-b">
                  How fast can we start a transaction process?
                  <div className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Intake and kick-off can usually happen within one week. Our team maintains readiness to deploy quickly on time-sensitive opportunities while ensuring thorough preparation.
                </div>
              </details>

              <details className="group border border-border rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-foreground group-open:border-b">
                  Do you work with both buy-side and sell-side mandates?
                  <div className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Yes, we support both buy-side and sell-side transactions, as well as carve-outs, joint ventures, and strategic partnerships. Our approach is tailored to each client's specific objectives and constraints.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    M&A Due Diligence Best Practices
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Key considerations for conducting thorough due diligence in aerospace and defense transactions.
                  </p>
                  <Link to="/insights" className="text-accent hover:text-accent/80 text-sm font-medium">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Post-Merger Integration Success Factors
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Strategies for capturing synergies and ensuring successful integration in technology deals.
                  </p>
                  <Link to="/insights" className="text-accent hover:text-accent/80 text-sm font-medium">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/insights?tag=mna" 
                className="text-accent hover:text-accent/80 font-medium"
              >
                View all M&A insights →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Ready to Explore M&A Opportunities?
            </h2>
            <p className="text-xl text-foreground/90 mb-12 max-w-2xl mx-auto">
              Every transaction starts with understanding your strategic objectives and market position. 
              Let's discuss how we can help you navigate complex deal processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:info@lundquistgroupinc.com">
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MATransactionSupport;