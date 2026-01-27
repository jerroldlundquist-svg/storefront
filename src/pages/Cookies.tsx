import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Cookies = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to run this Site, measure performance, and personalize content. Manage your choices anytime via "Cookie Settings."
                  </p>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Categories:</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Necessary (always on):</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Security, load balancing, consent storage (examples: consent cookies, session IDs, checkout cookies from Shopify).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Analytics:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Usage metrics (e.g., Google Analytics).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Functional/Media:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Video embeds (e.g., YouTube privacy‑enhanced mode).
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Marketing:</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          If enabled in the future.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">How to Control Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Use our banner, your browser settings, or platform opt‑outs. Rejecting non‑essential cookies may affect features.
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

export default Cookies;