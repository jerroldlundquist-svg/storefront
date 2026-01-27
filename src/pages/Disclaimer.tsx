import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Disclaimer = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Website Disclaimer
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-6 text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    The Site and blog are informational and do not constitute legal, tax, accounting, engineering, investment, or other professional advice.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    No client‑advisor relationship is created by reading the Site or contacting us. Engagements proceed only under a written agreement.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Past performance is not indicative of future results. Examples and case studies are illustrative.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    External links are provided for convenience; we are not responsible for their content or practices.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    For advice, consult qualified professionals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;