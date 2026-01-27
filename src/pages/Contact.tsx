import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@thelundquistgroup.com',
      description: 'Send us a message and we\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (804) 974-2335',
      description: 'Available Monday through Friday, 9 AM - 6 PM EST'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Greater Washington, DC Area',
      description: 'Serving clients globally with local presence'
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: 'Within 24 hours',
      description: 'We prioritize timely communication with all inquiries'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Let's Discuss Your Objectives
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Every successful engagement begins with understanding your specific goals and challenges. 
              We're here to explore how our expertise can help you achieve your strategic objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Smith" className="mt-2" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company Name" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="topic">Topic</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategic-advisory">Strategic Advisory</SelectItem>
                        <SelectItem value="ma-support">M&A / Transaction Support</SelectItem>
                        <SelectItem value="due-diligence">Due Diligence</SelectItem>
                        <SelectItem value="market-intelligence">Market Intelligence</SelectItem>
                        <SelectItem value="private-equity">Private Equity Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your objectives and how we can help..."
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <div className="flex items-start space-x-3 mb-6">
                    <input 
                      type="checkbox" 
                      id="contact-legal-consent" 
                      required 
                      className="mt-1 h-4 w-4 text-accent border-border rounded focus:ring-accent"
                    />
                    <label htmlFor="contact-legal-consent" className="text-sm text-muted-foreground">
                      I agree to the <a href="/terms" className="text-accent hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>. *
                    </label>
                  </div>

                  <Button variant="primary" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <p className="text-sm text-muted-foreground mt-6">
                  All communications are confidential and subject to our privacy policy.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We understand that strategic decisions require careful consideration and expert guidance. 
                  Our team is ready to discuss your specific situation and explore how we can support your objectives.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-background border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium mb-2">
                            {info.details}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Schedule Consultation CTA */}
              <Card className="bg-navy-gradient border-0">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    Prefer to Schedule a Call?
                  </h3>
                  <p className="text-foreground/90 mb-6">
                    Book a 30-minute consultation to discuss your specific needs and objectives.
                  </p>
                  <Button variant="outline" size="lg" className="w-full">
                    Schedule a Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">
              What to Expect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Initial Discussion
                </h3>
                <p className="text-muted-foreground">
                  We'll discuss your objectives, challenges, and how our expertise aligns with your needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Proposal & Approach
                </h3>
                <p className="text-muted-foreground">
                  We'll provide a detailed proposal outlining our recommended approach and expected outcomes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Strategic Execution
                </h3>
                <p className="text-muted-foreground">
                  We'll work closely with your team to implement our recommendations and achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;