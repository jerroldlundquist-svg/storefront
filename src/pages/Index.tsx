import React from 'react';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero with live jet video background */}
      <section className="section section--dark" style={{padding: 0, position: 'relative', minHeight: '70vh', display: 'grid', placeItems: 'center', overflow: 'hidden'}}>
        {/* Background video */}
        <div id="yt-bg" style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'}}>
          <iframe
            id="yt-hero"
            src="https://www.youtube.com/embed/k8FabAlf0kI?autoplay=1&mute=1&controls=0&loop=1&playlist=k8FabAlf0kI&modestbranding=1&playsinline=1&rel=0"
            title="Aviation montage"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture"
            style={{width: '120%', height: '120%', border: 0, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', filter: 'brightness(.55) saturate(1.2)'}}
          />
        </div>

        {/* Overlay copy */}
        <div className="shell" style={{position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '980px'}}>
          <div className="h-eyebrow">The Lundquist Group</div>
          <h1 className="h1" style={{color: 'var(--lg-white)'}}>Strategic Advisory across Aerospace, Defense, Transportation & Technology</h1>
          <p className="lead" style={{color: '#cfd9e3'}}>
            We guide senior leadership, private equity, and institutional investors through high‑stakes decisions—M&A, operational transformation, market entry, and government programs.
          </p>
          <div className="stack" style={{marginTop: '18px'}}>
            <a className="btn btn--primary" href="https://www.lundquistgroupinc.com/pages/book/strategy-call">Schedule 30‑Minute Strategy Call</a>
            <a className="btn btn--ghost" href="/services">Explore Services</a>
          </div>
          <div className="stack" style={{marginTop: '24px'}}>
            <span className="badge">Typical response &lt; 24 hours</span>
            <span className="badge">Security‑cleared team</span>
          </div>
        </div>
      </section>

      {/* Trust & KPIs strip */}
      <section className="section" style={{background: 'var(--lg-sand)'}}>
        <div className="shell">
          <div className="grid grid--3">
            <div className="card">
              <div className="kpi">$2.3B+</div>
              <div className="kpi-sub">in transactions advised</div>
            </div>
            <div className="card">
              <div className="kpi">50+</div>
              <div className="kpi-sub">companies engaged</div>
            </div>
            <div className="card">
              <div className="kpi">15+ yrs</div>
              <div className="kpi-sub">average leadership experience</div>
            </div>
          </div>
        </div>
      </section>


      {/* How we work */}
      <section className="section section--dark">
        <div className="shell">
          <div className="h-eyebrow">Methodology</div>
          <h2 className="h2" style={{color: 'var(--lg-white)'}}>Clear phases, tangible outputs</h2>

          <div className="grid grid--2" style={{marginTop: '20px'}}>
            <div className="card--dark card">
              <div className="h3">1) Rapid Assessment (1–2 weeks)</div>
              <ul className="stack">
                <li>Discovery sessions, KPI baseline, stakeholder mapping</li>
                <li>Hypothesis‑driven analysis; top‑3 risks & opportunities</li>
                <li><strong>Deliverables:</strong> Diagnostic brief & 90‑day plan</li>
              </ul>
            </div>

            <div className="card--dark card">
              <div className="h3">2) Options & Business Case (2–4 weeks)</div>
              <ul className="stack">
                <li>Scenario design, sensitivity analysis, resourcing plan</li>
                <li><strong>Deliverables:</strong> Options memo & board‑ready deck</li>
              </ul>
            </div>

            <div className="card--dark card">
              <div className="h3">3) Execution Support (ongoing)</div>
              <ul className="stack">
                <li>Workstream leadership, vendor coordination, tracking</li>
                <li><strong>Deliverables:</strong> Weekly progress reports & KPI roll‑ups</li>
              </ul>
            </div>

            <div className="card--dark card">
              <div className="h3">4) Transition & Training (1–2 weeks)</div>
              <ul className="stack">
                <li>Knowledge transfer, playbooks, handover workshop</li>
                <li><strong>Deliverables:</strong> SOPs, dashboards, close‑out brief</li>
              </ul>
            </div>
          </div>

          <div className="stack" style={{marginTop: '18px'}}>
            <a className="btn btn--primary" href="/pages/book/strategy-call">Start with a 30‑Minute Strategy Call</a>
          </div>
        </div>
      </section>

      {/* About / Leadership */}
      <section id="about" className="section">
        <div className="shell">
          <div className="h-eyebrow">About</div>
          <h2 className="h2">The Lundquist Group, Inc</h2>

          <div className="grid grid--2" style={{alignItems: 'start', marginTop: '16px'}}>
            <div>
              <img src="/lovable-uploads/1d13de1f-0089-4774-8cfa-48391ee0b47d.png" alt="Professional headshot of company leadership" style={{width: '100%', maxWidth: '420px', borderRadius: '14px', border: '1px solid #e4e6ea'}} />
            </div>

            <div className="stack">
              <p className="lead">
                We advise leadership teams, private equity, and institutional investors across aerospace, defense, transportation, and technology—combining transactional expertise with deep operating experience.
              </p>
              <ul className="stack">
                <li><strong>Selected experience:</strong> $2.3B+ in transactions; 50+ engagements</li>
                <li><strong>Specialties:</strong> M&A, turnaround, government capture, digital transformation</li>
                <li><strong>Credentials:</strong> Security clearances, professional certifications, industry awards</li>
              </ul>
              <div className="hr"></div>
              <div className="stack">
                <div className="h3">What sets us apart</div>
                <ul className="stack">
                  <li>Operator‑led advisory—board‑ready, decision‑useful deliverables</li>
                  <li>Access to real industry practitioners & SME network</li>
                  <li>Speed + signal: fast diagnostics, no fluff</li>
                </ul>
              </div>
              <div className="stack" style={{marginTop: '10px'}}>
                <a className="btn btn--primary" href="/pages/book/strategy-call">Talk with an advisor</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client success snippets */}
      <section className="section" style={{background: '#f8f9fb'}}>
        <div className="shell">
          <div className="h-eyebrow">Client Outcomes</div>
          <h2 className="h2">Representative results</h2>
          <div className="grid grid--3" style={{marginTop: '18px'}}>
            <div className="card">
              <div className="h3">Defense prime (Buy‑side)</div>
              <p className="lead">Led diligence for avionics acquisition; identified $34M synergy case & risk mitigation plan. Closed on time.</p>
            </div>
            <div className="card">
              <div className="h3">PE platform (Ops)</div>
              <p className="lead">Stabilized supply chain; 11‑point margin recovery in 90 days; cash conversion +18% within 2 quarters.</p>
            </div>
            <div className="card">
              <div className="h3">Dual‑use startup (Go‑to‑market)</div>
              <p className="lead">Won first government program; built partner ecosystem; $12M pipeline in 6 months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA bar */}
      <section className="section section--dark" style={{textAlign: 'center'}}>
        <div className="shell">
          <h2 className="h2" style={{color: 'var(--lg-white)'}}>Unsure where to start?</h2>
          <p className="lead" style={{color: '#cfd9e3'}}>Begin with a 30‑minute strategy call. If we're not the right fit, we'll refer you to someone who is.</p>
          <a className="btn btn--primary" href="/pages/book/strategy-call">Schedule now</a>
        </div>
      </section>


      {/* Footer */}
      <footer className="section section--dark">
        <div className="shell grid grid--3">
          <div>
            <div className="h3">The Lundquist Group, Inc</div>
            <p>1645 Gannett Road<br />Jackson, WY 83002 USA</p>
            <p><a href="mailto:info@lundquistgroupinc.com" style={{color: '#cfe6ff'}}>info@lundquistgroupinc.com</a></p>
          </div>
          <div>
            <div className="h3">Company</div>
            <ul className="stack">
              <li><a href="/about" style={{color: '#cfe6ff'}}>About</a></li>
              <li><a href="/services" style={{color: '#cfe6ff'}}>Services</a></li>
              <li><a href="/insights" style={{color: '#cfe6ff'}}>Insights</a></li>
              <li><a href="/contact" style={{color: '#cfe6ff'}}>Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="h3">Legal</div>
            <ul className="stack">
              <li><a href="/legal/terms" style={{color: '#cfe6ff'}}>Terms & Conditions</a></li>
              <li><a href="/legal/privacy" style={{color: '#cfe6ff'}}>Privacy Policy</a></li>
              <li><a href="/legal/cookies" style={{color: '#cfe6ff'}}>Cookie Notice</a></li>
              <li><a href="/legal/dmca" style={{color: '#cfe6ff'}}>DMCA</a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* SEO Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Lundquist Group, Inc",
          "url": "https://www.lundquistgroupinc.com",
          "logo": "https://www.lundquistgroupinc.com/assets/logo.png",
          "email": "info@lundquistgroupinc.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1645 Gannett Road",
            "addressLocality": "Jackson",
            "addressRegion": "WY",
            "postalCode": "83002",
            "addressCountry": "US"
          }
        })
      }} />
    </Layout>
  );
};

export default Index;
