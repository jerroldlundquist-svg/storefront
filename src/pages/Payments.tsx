import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CreditCard, DollarSign, FileText, Shield, Check } from 'lucide-react';

const Payments = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [paymentType, setPaymentType] = useState<'invoice' | 'retainer' | null>(null);

  const retainerAmounts = ['$5,000', '$10,000', '$25,000', '$50,000'];

  const features = [
    'Secure SSL encryption',
    'PCI DSS compliant processing',
    'Instant payment confirmation',
    'Email receipt delivery'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Client Portal
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Secure Payments
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Pay invoices and retainers securely online. All transactions are encrypted 
              and processed through our secure payment system.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {!paymentType ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pay Invoice */}
                <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300 cursor-pointer group" onClick={() => setPaymentType('invoice')}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <FileText className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-serif">Pay Invoice</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Pay an existing invoice by entering your invoice number and amount.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Enter invoice number</li>
                      <li>• Verify amount due</li>
                      <li>• Secure payment processing</li>
                      <li>• Instant confirmation</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Pay Retainer */}
                <Card className="bg-card border-border hover:shadow-elegant transition-all duration-300 cursor-pointer group" onClick={() => setPaymentType('retainer')}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <DollarSign className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl font-serif">Pay Retainer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Pay a retainer fee to begin your engagement with our advisory services.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Standard retainer amounts</li>
                      <li>• Custom amount option</li>
                      <li>• Secure payment processing</li>
                      <li>• Service activation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <Button 
                  variant="ghost" 
                  onClick={() => setPaymentType(null)}
                  className="mb-6"
                >
                  ← Back to Payment Options
                </Button>

                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif flex items-center">
                      {paymentType === 'invoice' ? (
                        <>
                          <FileText className="h-6 w-6 mr-3 text-accent" />
                          Pay Invoice
                        </>
                      ) : (
                        <>
                          <DollarSign className="h-6 w-6 mr-3 text-accent" />
                          Pay Retainer
                        </>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {paymentType === 'invoice' ? (
                      <>
                        <div>
                          <Label htmlFor="invoiceNumber">Invoice Number</Label>
                          <Input
                            id="invoiceNumber"
                            placeholder="Enter invoice number"
                            value={invoiceNumber}
                            onChange={(e) => setInvoiceNumber(e.target.value)}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="invoiceAmount">Amount Due</Label>
                          <Input
                            id="invoiceAmount"
                            placeholder="$0.00"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="mt-2"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Label>Select Retainer Amount</Label>
                          <div className="grid grid-cols-2 gap-3 mt-2">
                            {retainerAmounts.map((amount) => (
                              <Button
                                key={amount}
                                variant={selectedAmount === amount ? 'default' : 'outline'}
                                onClick={() => setSelectedAmount(amount)}
                                className="h-12"
                              >
                                {amount}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="customRetainer">Custom Amount</Label>
                          <Input
                            id="customRetainer"
                            placeholder="$0.00"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value);
                              setSelectedAmount('');
                            }}
                            className="mt-2"
                          />
                        </div>
                      </>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Company Name"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border space-y-4">
                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          id="payment-terms-consent" 
                          required 
                          className="mt-1 h-4 w-4 text-accent border-border rounded focus:ring-accent"
                        />
                        <label htmlFor="payment-terms-consent" className="text-sm text-muted-foreground">
                          By proceeding, you agree to our <a href="/payment-terms" className="text-accent hover:underline">Payment Terms & Refunds</a> and <a href="/terms" className="text-accent hover:underline">Terms & Conditions</a>. *
                        </label>
                      </div>
                      
                      <Button variant="primary" size="lg" className="w-full">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Proceed to Secure Payment
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Security & Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Secure & Reliable
              </h2>
              <p className="text-muted-foreground">
                Your payment information is protected with bank-level security and encryption.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-surface rounded-lg">
                  <Check className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-surface rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Payment Information
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• All payments are processed securely through Shopify</p>
                <p>• We accept all major credit cards and ACH transfers</p>
                <p>• Receipt and confirmation emails are sent to <a href="mailto:billing@lundquistgroupinc.com" className="text-accent hover:underline">billing@lundquistgroupinc.com</a></p>
                <p>• For questions about refunds, please contact <a href="mailto:billing@lundquistgroupinc.com" className="text-accent hover:underline">billing@lundquistgroupinc.com</a></p>
                <p>• All transactions are subject to our <a href="/terms" className="text-accent hover:underline">Terms & Conditions</a></p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Need help with payment or have questions?
              </p>
              <Button variant="outline">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payments;