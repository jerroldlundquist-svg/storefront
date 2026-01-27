import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const ESign = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              E‑Sign Consent
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-6 text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    By completing transactions electronically, you consent to receive disclosures, agreements, and receipts electronically. You can withdraw consent by emailing <a href="mailto:legal@lundquistgroupinc.com" className="text-accent hover:underline">legal@lundquistgroupinc.com</a>; doing so may delay or prevent online transactions. To access records, you need a current browser and PDF reader. We retain electronic records as required by law.
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

export default ESign;