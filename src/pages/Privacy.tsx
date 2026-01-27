import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Who We Are</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Lundquist Group, Inc ("The Lundquist Group") controls personal information collected via this Site. Contact: <a href="mailto:legal@lundquistgroupinc.com" className="text-accent hover:underline">legal@lundquistgroupinc.com</a>, 1645 Gannett Road, Jackson, WY 83002, USA.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>You provide:</strong> name, email, phone, company, role, messages; for payments, payer details (invoice/retainer info). Card data is processed by Shopify; we do not store full card numbers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Automatic:</strong> IP address, device/browser data, pages viewed, timestamps, referring URLs, approximate location, cookie identifiers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>From third parties:</strong> scheduling tools, CRM/marketing platforms, analytics, and public/professional sources.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. How We Use Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Provide and improve the Site and services; respond to inquiries; process payments; operate the blog and newsletter; personalize content; ensure security/fraud prevention; and comply with law.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Legal Bases (EEA/UK, if applicable)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Contract, Legitimate Interests (e.g., site security, B2B marketing), Consent (e.g., non‑essential cookies, newsletters), and Legal Obligation (e.g., tax/records).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Sharing</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong>Processors:</strong> hosting/CDN, email and CRM tools, analytics, Shopify for payments and transactional emails, video platforms (YouTube), scheduling, and support vendors—each under contract.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Legal/Compliance</strong> and <strong>Business Transfers</strong> if we restructure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. International Transfers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may transfer data to countries without the same level of protection (e.g., U.S.). Where required, we use appropriate safeguards (e.g., Standard Contractual Clauses).
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain data as needed:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                      <li>Inquiries/leads: 24 months from last interaction.</li>
                      <li>Contract/payment records: 7 years.</li>
                      <li>Cookie/analytics data: per cookie duration or until you withdraw consent.</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Where applicable (e.g., EEA/UK/CA/US states), you may request access, correction, deletion, portability, restriction, or opt‑out of targeted advertising/sale ("Do Not Sell or Share"). We honor Global Privacy Control (GPC) signals. Contact <a href="mailto:legal@lundquistgroupinc.com" className="text-accent hover:underline">legal@lundquistgroupinc.com</a> to exercise rights.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. Cookies & Tracking</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      See our <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a> and manage preferences via the cookie banner.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Marketing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Unsubscribe from marketing at any time (link in emails). Transactional messages (like receipts) may still be sent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">11. Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use reasonable technical and organizational measures to protect data. No method is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">12. Children</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Site is not for children under 16. We do not knowingly collect children's data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">13. Changes</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We will post updates here and adjust the Effective date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">14. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      <a href="mailto:legal@lundquistgroupinc.com" className="text-accent hover:underline">legal@lundquistgroupinc.com</a> • 1645 Gannett Road, Jackson, WY 83002, USA
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

export default Privacy;