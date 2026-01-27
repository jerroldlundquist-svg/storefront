import React from 'react';

const MarketIntelligenceCompetitiveAnalysis = () => {
  return (
    <div>
      {/* Service Hero */}
      <section className="section section--dark" style={{padding: '64px 20px 44px'}}>
        <div className="shell">
          <div className="h-eyebrow">Service</div>
          <h1 className="h1" style={{color: 'var(--lg-white)'}}>Market Intelligence & Competitive Analysis</h1>
          <p className="lead" style={{color: '#cfd9e3'}}>Voice‑of‑customer, TAM/SAM/SOM, win‑loss patterns, threat mapping.</p>
        </div>
      </section>

      {/* What & Who */}
      <section className="section">
        <div className="shell grid grid--2">
          <div className="card">
            <div className="h3">Best for</div>
            <ul className="stack">
              <li>Product managers & strategists</li>
              <li>Business development teams</li>
              <li>Companies entering new markets</li>
            </ul>
          </div>
          <div className="card">
            <div className="h3">You'll get</div>
            <ul className="stack">
              <li>Market sizing & segmentation analysis</li>
              <li>Competitive landscape mapping</li>
              <li>Customer interview insights & win‑loss analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline & Pricing */}
      <section className="section" style={{background: '#f8f9fb'}}>
        <div className="shell grid grid--3">
          <div className="card">
            <div className="h3">Timeline</div>
            <p className="lead">3–6 weeks</p>
          </div>
          <div className="card">
            <div className="h3">Engagement</div>
            <p className="lead">Fixed‑fee</p>
          </div>
          <div className="card">
            <div className="h3">Pricing</div>
            <p className="lead"><strong>From $5,000</strong></p>
          </div>
        </div>
        
        <div className="shell" style={{textAlign: 'center', marginTop: '18px'}}>
          <a className="btn btn--primary" href="https://www.lundquistgroupinc.com/products/market-intelligence-competitive-analysis">Start research</a>
          <a className="btn" style={{marginLeft: '10px', border: '1px solid #d6d8de'}} href="/pages/book/strategy-call">Define scope</a>
        </div>
      </section>
    </div>
  );
};

export default MarketIntelligenceCompetitiveAnalysis;