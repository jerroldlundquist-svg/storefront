import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const PaymentTerms = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Payment Terms & Refunds
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Methods & Processor</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Payments are processed by Shopify via secure checkout. By paying, you authorize Shopify to charge your selected method and share payment data with us for reconciliation. We do not store full card numbers.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Invoices & Retainers</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Pay Invoice:</strong> You enter or receive an invoice number and amount due; payment is applied to that invoice.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Pay Retainer:</strong> Choose a preset or custom amount. Unless we agree otherwise in writing, retainers are applied against future advisory work at our standard rates.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Refunds</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Invoices:</strong> Non‑refundable once paid, except for billing errors.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Retainers:</strong> Refundable less time and expenses already incurred, billed at our standard rates, plus any non‑recoverable third‑party costs. Refunds go to the original payment method.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Chargebacks</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Please contact <a href="mailto:billing@lundquistgroupinc.com" className="text-accent hover:underline">billing@lundquistgroupinc.com</a> first to resolve disputes. Unauthorized chargebacks may result in suspension of services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Taxes & Currency</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All amounts are in USD unless stated otherwise. You are responsible for applicable taxes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Scheduling & Cancellations</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If a prepaid session is canceled with less than 24 hours notice, we may charge up to one hour at the applicable rate.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. No Guarantees</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Consulting outcomes are not guaranteed. Results vary.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Billing Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      <a href="mailto:billing@lundquistgroupinc.com" className="text-accent hover:underline">billing@lundquistgroupinc.com</a>
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

export default PaymentTerms;