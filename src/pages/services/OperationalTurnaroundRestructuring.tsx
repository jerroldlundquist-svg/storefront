import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const OperationalTurnaroundRestructuring = () => {
  return (
    <Layout>
      <Helmet>
        <title>Operational Turnaround & Restructuring | The Lundquist Group</title>
        <meta name="description" content="Stabilize cash flow, focus on unit economics, and execute a 90-day turnaround plan for distressed aerospace and defense companies." />
        <link rel="canonical" href="https://www.lundquistgroupinc.com/services/operational-turnaround-restructuring" />
      </Helmet>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Operational Turnaround & Restructuring
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stabilize cash flow, focus on unit economics, and execute a 90-day plan to restore operational performance.
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
                    <li>• Companies with declining cash flow</li>
                    <li>• Portfolio companies underperforming</li>
                    <li>• Businesses facing operational challenges</li>
                    <li>• Organizations needing rapid stabilization</li>
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
                    <li>• 90-day stabilization plan</li>
                    <li>• Cash flow improvement roadmap</li>
                    <li>• Cost reduction opportunities</li>
                    <li>• Operational efficiency gains</li>
                    <li>• Performance monitoring dashboard</li>
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
                      <h4 className="font-medium text-foreground">Week 1-2: Crisis Assessment</h4>
                      <p className="text-sm text-muted-foreground">Cash position, critical issues, immediate actions</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Week 3-6: Stabilization</h4>
                      <p className="text-sm text-muted-foreground">Cost reduction, process optimization, quick wins</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Week 7-12: Recovery Plan</h4>
                      <p className="text-sm text-muted-foreground">Long-term strategy, performance monitoring</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Investment</h3>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-accent">From $9,500</div>
                    <p className="text-muted-foreground">12-week engagement</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Crisis assessment & stabilization</li>
                      <li>• 90-day turnaround plan</li>
                      <li>• Weekly progress monitoring</li>
                      <li>• Recovery roadmap</li>
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
                  data-handle="operational-turnaround-restructuring"
                >
                  Start Turnaround
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <div className="text-sm text-muted-foreground">
                  or <a href="/contact" className="text-accent hover:underline">discuss your urgent situation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OperationalTurnaroundRestructuring;