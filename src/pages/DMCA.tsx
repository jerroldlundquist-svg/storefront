import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const DMCA = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              DMCA Copyright Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">DMCA Agent Contact</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      If you believe content on our Site infringes your copyright, send a notice to our DMCA Agent:
                    </p>
                    <div className="bg-surface p-6 rounded-lg">
                      <p className="text-foreground font-semibold mb-2">DMCA Agent: Legal Department, The Lundquist Group, Inc</p>
                      <p className="text-muted-foreground">Email: <a href="mailto:dmca@lundquistgroupinc.com" className="text-accent hover:underline">dmca@lundquistgroupinc.com</a></p>
                      <p className="text-muted-foreground">Address: 1645 Gannett Road, Jackson, WY 83002, USA</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Notice Requirements</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Your notice must include:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                      <li>The work claimed to be infringed</li>
                      <li>The infringing material's URL or description</li>
                      <li>Your contact info</li>
                      <li>A statement of good‑faith belief</li>
                      <li>A statement, under penalty of perjury, that the information is accurate and you are the owner or authorized agent</li>
                      <li>Your physical or electronic signature</li>
                    </ol>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Process</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may remove or disable access to the material and notify the user. If we receive a valid counter‑notice, we may restore the material per the DMCA.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Administrative Note</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      When ready, register this agent with the U.S. Copyright Office's online DMCA directory.
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

export default DMCA;