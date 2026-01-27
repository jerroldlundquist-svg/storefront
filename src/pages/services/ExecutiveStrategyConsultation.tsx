import React from 'react';

const ExecutiveStrategyConsultation = () => {
  return (
    <div>
      {/* Service Hero */}
      <section className="section section--dark" style={{padding: '64px 20px 44px'}}>
        <div className="shell">
          <div className="h-eyebrow">Service</div>
          <h1 className="h1" style={{color: 'var(--lg-white)'}}>Executive Strategy Consultation</h1>
          <p className="lead" style={{color: '#cfd9e3'}}>High‑signal counsel for time‑compressed decisions.</p>
        </div>
      </section>

      {/* What & Who */}
      <section className="section">
        <div className="shell grid grid--2">
          <div className="card">
            <div className="h3">Best for</div>
            <ul className="stack">
              <li>CEOs & Boards under deadline</li>
              <li>PE deal teams mid‑diligence</li>
              <li>Operators planning a pivot</li>
            </ul>
          </div>
          <div className="card">
            <div className="h3">You'll get</div>
            <ul className="stack">
              <li>90‑minute deep dive + follow‑up brief</li>
              <li>Top‑3 risks & opportunities</li>
              <li>Immediate next steps & intros (as needed)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline & Pricing */}
      <section className="section" style={{background: '#f8f9fb'}}>
        <div className="shell grid grid--3">
          <div className="card">
            <div className="h3">Timeline</div>
            <p className="lead">48–72 hours</p>
          </div>
          <div className="card">
            <div className="h3">Engagement</div>
            <p className="lead">Fixed‑fee</p>
          </div>
          <div className="card">
            <div className="h3">Pricing</div>
            <p className="lead"><strong>From $1,500</strong></p>
          </div>
        </div>
        
        <div className="shell" style={{textAlign: 'center', marginTop: '18px'}}>
          <a className="btn btn--primary" href="https://www.lundquistgroupinc.com/products/executive-strategy-consultation">Purchase / Start</a>
          <a className="btn" style={{marginLeft: '10px', border: '1px solid #d6d8de'}} href="/pages/book/strategy-call">Schedule a call</a>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveStrategyConsultation;