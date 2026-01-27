import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Clock, Shield, FileCheck, AlertTriangle } from 'lucide-react';
import TrustIndicators from '@/components/sections/TrustIndicators';

const CertificationCompliance = () => {
  return (
    <>
      <Helmet>
        <title>Certification & Compliance Roadmap | The Lundquist Group</title>
        <meta name="description" content="A&D certification roadmap: DO-178C, DO-254, ISO 26262, regulatory pathway analysis, compliance timeline. Expert guidance." />
        <meta name="keywords" content="aerospace certification, DO-178C, DO-254, ISO 26262, compliance roadmap, regulatory approval" />
        <link rel="canonical" href="/services/certification-compliance" />
      </Helmet>
      
      <Layout>
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="bg-navy-gradient py-24 text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
                  Certification & Compliance Roadmap
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  Navigate complex A&D certification requirements with confidence and clarity
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#" className="buy-now inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="certification-compliance-roadmap">
                    Buy Now - $12,500
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Who This Is For</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Product Teams</h3>
                    <p className="text-muted-foreground">Engineering teams developing safety-critical A&D systems</p>
                  </div>
                  <div className="text-center">
                    <FileCheck className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Program Managers</h3>
                    <p className="text-muted-foreground">Leaders planning certification strategy and timeline</p>
                  </div>
                  <div className="text-center">
                    <AlertTriangle className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Compliance Officers</h3>
                    <p className="text-muted-foreground">Teams ensuring regulatory adherence and risk management</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outcomes & Deliverables */}
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Key Outcomes</h2>
                    <ul className="space-y-4">
                      {[
                        'Clear certification pathway and requirements',
                        'Realistic timeline and resource estimates',
                        'Risk identification and mitigation strategies',
                        'Regulatory authority engagement plan',
                        'Cost optimization opportunities',
                        'Compliance process documentation'
                      ].map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What You'll Receive</h2>
                    <ul className="space-y-4">
                      {[
                        'Comprehensive certification roadmap document',
                        'Standards analysis (DO-178C, DO-254, ISO 26262)',
                        'Timeline with critical milestones',
                        'Resource requirements and cost estimates',
                        'Risk assessment and mitigation plan',
                        'Authority engagement strategy'
                      ].map((deliverable, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-lg">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline & Inputs */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">Timeline</h2>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 1</div>
                        <div>
                          <h3 className="font-semibold">Requirements Analysis</h3>
                          <p className="text-muted-foreground">Product scope and certification standards assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-accent text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 2</div>
                        <div>
                          <h3 className="font-semibold">Pathway Development</h3>
                          <p className="text-muted-foreground">Roadmap creation and timeline planning</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-8 bg-secondary text-white rounded flex items-center justify-center font-semibold mr-4 text-sm">Week 3</div>
                        <div>
                          <h3 className="font-semibold">Review & Delivery</h3>
                          <p className="text-muted-foreground">Final roadmap presentation and handoff</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-serif font-bold mb-8">What We'll Need From You</h2>
                    <ul className="space-y-4">
                      {[
                        'Product specifications and intended use',
                        'Target markets and regulatory jurisdictions',
                        'Current development status and timeline',
                        'Existing compliance documentation',
                        'Resource constraints and priorities',
                        'Key stakeholder contact information'
                      ].map((input, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-3 flex-shrink-0" />
                          <span className="text-lg">{input}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <TrustIndicators />

          {/* FAQ */}
          <section className="py-16 bg-surface">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Which certification standards do you cover?</h3>
                    <p className="text-muted-foreground">We specialize in DO-178C, DO-254, DO-160, ISO 26262, and MIL-STD requirements for aerospace and defense applications.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">How detailed is the timeline estimate?</h3>
                    <p className="text-muted-foreground">We provide milestone-level timelines with critical path analysis and resource loading estimates based on industry benchmarks.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Do you provide ongoing support during certification?</h3>
                    <p className="text-muted-foreground">The roadmap includes recommendations for ongoing support. We offer additional services for certification execution and authority engagement.</p>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Notice:</strong> This service provides informational guidance only and does not constitute legal, engineering, or regulatory advice. See our <a href="/payment-terms" className="text-accent hover:underline">Payment Terms</a> & <a href="/terms" className="text-accent hover:underline">Terms</a> for complete details.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 bg-navy-gradient text-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Ready to Plan Your Certification Journey?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Get the roadmap you need to navigate complex A&D certification requirements successfully.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Book Intro Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <a href="#" className="buy-now inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-navy h-11 px-8" data-handle="certification-compliance-roadmap">
                    Buy Now - $12,500
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default CertificationCompliance;