import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const AcceptableUse = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Acceptable Use Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">You agree not to:</h2>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                      <li>Use the Site unlawfully or violate others' rights or privacy.</li>
                      <li>Upload malware, attempt to breach security, or disrupt the network.</li>
                      <li>Infringe IP rights or misrepresent your affiliation.</li>
                      <li>Send spam or automated messages through forms.</li>
                      <li>Submit confidential, classified, or export‑controlled information via the Site.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Enforcement</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may audit, suspend, or terminate access for violations and report unlawful activity to authorities.
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

export default AcceptableUse;