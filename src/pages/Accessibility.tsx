import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Accessibility = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Accessibility Statement
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Lundquist Group aims to conform to WCAG 2.1 AA. Our efforts include semantic HTML, keyboard navigation, sufficient color contrast, alt text, and honoring prefers‑reduced‑motion (we provide a non‑video hero fallback).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Need Help?</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you experience difficulty using our Site, email <a href="mailto:legal@lundquistgroupinc.com" className="text-accent hover:underline">legal@lundquistgroupinc.com</a> with "Accessibility" in the subject. Include the page URL and a description of the issue. We will make reasonable efforts to address it.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accessibility;