import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Target, 
  TrendingUp,
  MessageSquare,
  FileText,
  Clock
} from 'lucide-react';

const BoardLeadershipAdvisory = () => {
  const benefits = [
    "Board composition & governance upgrades",
    "Operator‑friendly KPI rhythms and materials", 
    "CEO coaching and succession planning"
  ];

  const whoItsFor = [
    "Chairs & lead directors",
    "Founders professionalizing governance",
    "Investors strengthening portfolio boards"
  ];

  const outcomes = [
    "High‑leverage boards and CEO alignment",
    "Decision‑ready materials and KPIs",
    "Succession clarity & continuity"
  ];

  const packages = [
    {
      title: "Board Diagnostic",
      price: "$7,500",
      description: "Effectiveness review & governance roadmap.",
      icon: FileText
    },
    {
      title: "KPI Cadence", 
      price: "$9,000",
      description: "Metrics, materials, and operating rhythm.",
      icon: TrendingUp
    },
    {
      title: "Executive Counsel",
      price: "Retainer",
      description: "Confidential monthly counsel for CEOs/Chairs.",
      icon: MessageSquare
    }
  ];

  const faqs = [
    {
      question: "How do we start?",
      answer: "Begin with a short discovery call. If there's a fit, we propose a crisp scope with deliverables, owners, and timeline."
    },
    {
      question: "Do you work remotely or on‑site?",
      answer: "Mostly remote with purposeful on‑sites at key moments (kickoff, workshops, stakeholder sessions)."
    },
    {
      question: "Do you take equity or success fees?",
      answer: "Sometimes, when incentives are aligned. We'll outline options during scoping."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Board & Leadership Advisory — The Lundquist Group</title>
        <meta name="description" content="Board composition, governance, KPI cadences, CEO counsel. Expert advisory services for chairs, directors, and executive leadership teams." />
        <meta name="keywords" content="board advisory, governance, CEO counsel, leadership development, KPI cadence, succession planning" />
        <link rel="canonical" href="https://www.lundquistgroupinc.com/services/board-leadership-advisory" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Board & Leadership Advisory",
            "description": "Board composition, governance, KPI cadences, CEO counsel.",
            "provider": {
              "@type": "Organization",
              "name": "The Lundquist Group"
            },
            "areaServed": "Global",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "7500",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "7500",
                "description": "Retainer-based engagement starting from $7,500"
              }
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Breadcrumbs */}
        <section className="bg-muted/30 py-4">
          <div className="container mx-auto px-6">
            <Breadcrumbs items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Board & Leadership Advisory' }
            ]} />
          </div>
        </section>

        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-6">
                Retainers available
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Board & Leadership Advisory
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Board composition, governance, KPI cadences, CEO counsel.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="/services">Browse all services</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-16">
              {/* Overview */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Board composition, governance, KPI cadences, CEO counsel.
                </p>
                <ul className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-foreground">
                    We believe in <strong>educational selling</strong>—so these pages go deep. 
                    Take your time, compare approaches, and only then decide if we're the right partner.
                  </p>
                </div>
              </section>

              {/* Who it's for */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  Who it's for
                </h2>
                <ul className="space-y-3">
                  {whoItsFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Outcomes */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  What you'll walk away with
                </h2>
                <ul className="space-y-3">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Pricing */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Pricing & Packages</h2>
                <p className="text-muted-foreground mb-8">
                  Transparent starting points. Fixed‑fee where possible; otherwise a clear, milestone‑based fee tied to outcomes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => (
                    <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <pkg.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{pkg.title}</h3>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-3">{pkg.price}</div>
                        <p className="text-muted-foreground mb-6">{pkg.description}</p>
                        <Button className="w-full" asChild>
                          <a href="#contact">Discuss this package</a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Case snapshot */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Case snapshot</h2>
                <p className="text-muted-foreground mb-4">
                  <em>Representative example</em> (details anonymized):
                </p>
                <p className="text-foreground">
                  We helped a client execute this service, achieving measurable results within 90 days. 
                  On the call, we're happy to share more specifics where appropriate under NDA.
                </p>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">FAQs</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group border border-border rounded-lg">
                      <summary className="p-6 cursor-pointer font-semibold text-foreground hover:bg-muted/50 transition-colors">
                        {faq.question}
                      </summary>
                      <div className="px-6 pb-6 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Contact CTA */}
              <section id="contact" className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Ready to explore?</h2>
                <p className="text-muted-foreground mb-6">
                  No pressure. Send a note with context, and we'll reply with a quick POV and suggested next steps.
                </p>
                <Button size="lg" asChild>
                  <a href="/contact" className="inline-flex items-center gap-2">
                    Contact us
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </section>
            </div>

            {/* Table of contents sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">On this page</h4>
                    <nav className="space-y-2">
                      <a href="#overview" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Overview
                      </a>
                      <a href="#who" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Who it's for
                      </a>
                      <a href="#outcomes" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Outcomes
                      </a>
                      <a href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Pricing
                      </a>
                      <a href="#case" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Case snapshot
                      </a>
                      <a href="#faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        FAQs
                      </a>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BoardLeadershipAdvisory;