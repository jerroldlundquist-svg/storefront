import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Industries', href: '/industries' },
      { name: 'Case Studies', href: '/case-studies' }
    ],
    resources: [
      { name: 'Insights', href: '/insights' },
      { name: 'Contact', href: '/contact' },
      { name: 'Payments', href: '/payments' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Payment Terms', href: '/payment-terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  return (
    <footer className="bg-navy-gradient border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-xl font-serif font-semibold text-foreground">
                The Lundquist Group
              </h3>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Strategic advisory services for senior management, private equity, and investors 
              in Aerospace, Defense, Transportation, and Technology industries.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Stay Informed</h4>
              <div className="flex space-x-2 max-w-sm">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-surface border-border"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <nav className="space-y-3">
              {navigation.company.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <nav className="space-y-3">
              {navigation.resources.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} The Lundquist Group, Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xs text-muted-foreground hover:text-accent transition-colors duration-200 focus-ring"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" aria-label="Email">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;