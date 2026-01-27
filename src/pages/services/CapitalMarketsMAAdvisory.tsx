import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CapitalMarketsMAAdvisory = () => {
  return (
    <Layout>
      <Helmet>
        <title>Capital Markets & M&A Advisory | The Lundquist Group</title>
        <meta name="description" content="Expert buy-side/sell-side guidance, diligence, valuation, and synergy modeling for aerospace, defense, and technology transactions." />
        <link rel="canonical" href="https://www.lundquistgroupinc.com/services/capital-markets-ma-advisory" />
      </Helmet>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Capital Markets & M&A Advisory
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Buy-side/sell-side guidance, diligence, valuation, synergy modeling for aerospace, defense, and technology transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-surface border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Best for</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Private equity firms evaluating acquisition targets</li>
                    <li>• Strategic buyers seeking synergy validation</li>
                    <li>• Portfolio companies preparing for exit</li>
                    <li>• Investment banks needing sector expertise</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-surface border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">You'll get</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Commercial due diligence reports</li>
                    <li>• Market position & competitive analysis</li>
                    <li>• Synergy identification & quantification</li>
                    <li>• Risk assessment & mitigation plans</li>
                    <li>• Post-close integration roadmaps</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-surface border-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-foreground">Timeline</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">Week 1-2: Discovery & Analysis</h4>
                      <p className="text-sm text-muted-foreground">Management interviews, data review, market assessment</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Week 3-4: Diligence & Modeling</h4>
                      <p className="text-sm text-muted-foreground">Financial analysis, synergy modeling, risk evaluation</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Week 5-6: Reporting & Strategy</h4>
                      <p className="text-sm text-muted-foreground">Final reports, recommendations, integration planning</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Investment</h3>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-accent">From $7,500</div>
                    <p className="text-muted-foreground">6-week engagement</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Commercial due diligence</li>
                      <li>• Market & competitive analysis</li>
                      <li>• Synergy modeling</li>
                      <li>• Executive summary & board deck</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="space-y-4 mb-8">
                <Button 
                  size="lg" 
                  className="tlg-schedule" 
                  data-handle="capital-markets-ma-advisory"
                >
                  Start M&A Advisory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  or <a href="/contact" className="text-accent hover:underline">discuss your specific transaction</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CapitalMarketsMAAdvisory;