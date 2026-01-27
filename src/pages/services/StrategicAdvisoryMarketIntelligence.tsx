import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const StrategicAdvisoryMarketIntelligence = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Strategic Advisory & Market Intelligence', href: '' }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Strategic Advisory & Market Intelligence | The Lundquist Group</title>
        <meta 
          name="description" 
          content="Comprehensive strategic planning and market analysis to identify opportunities and mitigate risks in aerospace, defense, transportation, and technology sectors." 
        />
        <link rel="canonical" href="https://lundquistgroupinc.com/services/strategic-advisory-market-intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  Strategic Advisory & Market Intelligence
                </h1>
                <p className="text-xl text-muted-foreground mt-2">
                  Comprehensive strategic planning and market analysis to identify opportunities and mitigate risks
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                From $5,000
              </Badge>
              <Badge variant="outline">
                2-4 weeks typical timeline
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
                      <span>Clear view of market opportunities and competitive positioning</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Risk-adjusted strategic roadmap with implementation priorities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Actionable intelligence on market dynamics and trends</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Business model optimization and revenue diversification strategies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Market entry strategy for new segments or geographies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span>Board-ready presentation and decision framework</span>
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
                  <h3 className="text-xl font-semibold text-foreground mb-2">Market Analysis Package</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Market sizing and segmentation analysis</li>
                    <li>• Competitive landscape assessment</li>
                    <li>• Customer needs and buying patterns</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Roadmap</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Strategic planning and roadmap development</li>
                    <li>• Business model innovation recommendations</li>
                    <li>• Resource allocation and investment priorities</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Market Entry Strategy</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Entry strategy for new markets</li>
                    <li>• Go-to-market strategy and channel optimization</li>
                    <li>• Partnership and alliance recommendations</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Implementation Support</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 90-day implementation plan</li>
                    <li>• KPI framework and success metrics</li>
                    <li>• Risk mitigation strategies</li>
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
                    <li>• CEOs and senior executives</li>
                    <li>• Private equity and venture capital firms</li>
                    <li>• Board members and investors</li>
                    <li>• Business development leaders</li>
                    <li>• Strategy and corporate development teams</li>
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
                    <li>• Week 1-2: Market research and analysis</li>
                    <li>• Week 3-4: Strategic framework development</li>
                    <li>• Week 5-6: Roadmap creation and validation</li>
                    <li>• Week 7-8: Final presentation and handover</li>
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
                    <p className="font-semibold text-foreground">From $5,000</p>
                    <p>Fixed-fee project pricing based on scope and complexity</p>
                    <p>Retainer options available for ongoing strategic support</p>
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
                  How do you ensure market intelligence is current and relevant?
                  <div className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  We leverage real-time data sources, primary research with industry participants, and our extensive network of aerospace, defense, and technology professionals to ensure all intelligence is current and actionable.
                </div>
              </details>

              <details className="group border border-border rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-foreground group-open:border-b">
                  What makes your strategic approach different?
                  <div className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Our approach combines deep industry expertise with proven frameworks from leading strategy consulting firms. We focus on implementation-ready recommendations rather than theoretical analysis.
                </div>
              </details>

              <details className="group border border-border rounded-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium text-foreground group-open:border-b">
                  Can you support implementation of the strategic plan?
                  <div className="ml-4 shrink-0 transition-transform group-open:rotate-180">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  Yes, we offer ongoing advisory support and can work alongside your team to implement strategic initiatives. This can be structured as a retainer or project-based engagement.
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
                    Market Intelligence Best Practices
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Learn how to build a sustainable competitive intelligence capability within your organization.
                  </p>
                  <Link to="/insights" className="text-accent hover:text-accent/80 text-sm font-medium">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Strategic Planning in Uncertain Markets
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Strategies for maintaining competitive advantage in rapidly changing market conditions.
                  </p>
                  <Link to="/insights" className="text-accent hover:text-accent/80 text-sm font-medium">
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/insights?tag=strategic-advisory" 
                className="text-accent hover:text-accent/80 font-medium"
              >
                View all strategic advisory insights →
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
              Ready to Develop Your Strategic Roadmap?
            </h2>
            <p className="text-xl text-foreground/90 mb-12 max-w-2xl mx-auto">
              Every strategic engagement begins with understanding your unique market position and objectives. 
              Let's discuss how we can help you navigate complex market dynamics.
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

export default StrategicAdvisoryMarketIntelligence;