import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const ExportCompliance = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Export Compliance Notice
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-6 text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    We support compliance with U.S. export controls and sanctions (including ITAR/EAR). Do not upload or share export‑controlled, classified, or otherwise restricted technical data via this Site. We do not provide services to embargoed countries or sanctioned parties and may screen inquiries. For controlled projects, contact us to establish appropriate controls and agreements.
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

export default ExportCompliance;