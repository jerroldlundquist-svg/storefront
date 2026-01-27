import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-12">
              Effective date: August 31, 2025
            </p>

            <Card className="bg-surface border-border">
              <CardContent className="p-8 prose prose-slate dark:prose-invert max-w-none">
                <div className="space-y-8 text-foreground">
                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By using this website (the "Site") operated by The Lundquist Group, Inc ("The Lundquist Group," "we," "us"), you agree to these Terms & Conditions (the "Terms"). If you do not agree, do not use the Site.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">2. Who We Are</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Lundquist Group provides strategic advisory services to senior management, private equity, and other investors in the Aerospace, Defense, Transportation, and Technology industries. The Site is for informational and marketing purposes only.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">3. Changes</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update these Terms at any time. The Effective date above shows the latest version. Continued use means you accept any changes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">4. Eligibility & Compliance</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You must be at least 18 and authorized to bind your organization. You agree to comply with applicable laws, including U.S. export controls and sanctions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">5. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content on the Site—text, images, video, logos, and layouts—is owned by The Lundquist Group or its licensors and protected by law. We grant a limited, non‑exclusive, non‑transferable license to access the Site for your internal business use. No scraping, framing, reverse engineering, or derivative works without our written consent.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">6. Feedback & Submissions</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you send comments or materials, you grant us a perpetual, worldwide, royalty‑free license to use them. Do not submit confidential, classified, or export‑controlled information through the Site. For confidential matters we will execute a mutual NDA.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">7. Third‑Party Services</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The Site integrates third‑party services (e.g., YouTube for media, Shopify for payments, analytics providers). Their terms and privacy practices apply to those components.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">8. Payments</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you pay retainers or invoices through our Site, you agree to our <a href="/payment-terms" className="text-accent hover:underline">Payment Terms & Refunds</a>, incorporated here by reference.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">9. No Professional Advice</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Site content and blog posts are informational only and not legal, tax, accounting, engineering, investment, or other professional advice. No client relationship is formed by using the Site.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">10. Acceptable Use</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You will not misuse the Site, attempt to breach security, transmit malware, infringe IP rights, or engage in unlawful or harmful conduct. See our <a href="/aup" className="text-accent hover:underline">Acceptable Use Policy</a>.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">11. Export Controls & Sanctions</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Do not upload or share ITAR/EAR‑controlled technical data, classified information, or other restricted content via the Site. We do not provide services to sanctioned parties or embargoed jurisdictions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">12. Disclaimers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON‑INFRINGEMENT.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">13. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE LUNDQUIST GROUP WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM RELATING TO THE SITE WILL NOT EXCEED THE GREATER OF USD $100 OR THE FEES YOU PAID TO US FOR THE RELEVANT SERVICES IN THE SIX (6) MONTHS BEFORE THE CLAIM.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">14. Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to defend, indemnify, and hold The Lundquist Group harmless from claims arising out of your misuse of the Site or violation of these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">15. Governing Law; Dispute Resolution</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      These Terms are governed by the laws of Wyoming, without regard to conflicts rules.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Binding arbitration:</strong> Any dispute will be resolved by confidential, individual arbitration under the rules of the American Arbitration Association (AAA) in Jackson, WY, USA, in English. You and The Lundquist Group waive jury trial and class actions. Either party may seek injunctive relief in court for IP or confidentiality matters.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">16. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may suspend or terminate access to the Site at any time. Sections intended to survive (IP, Disclaimers, Liability limits, Arbitration, etc.) will survive.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">17. Entire Agreement</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms, together with the pages referenced (Privacy, Cookies, Payment Terms, AUP, DMCA, Disclaimer), form the entire agreement regarding your Site use.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">18. Contact</h2>
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

export default Terms;