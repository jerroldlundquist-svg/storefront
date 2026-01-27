import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Executive Strategy Consultation', href: '/services#executive-strategy-consultation' },
    { name: 'Capital Markets & M&A Advisory', href: '/services#capital-markets-mna-advisory' },
    { name: 'Operational Turnaround & Restructuring', href: '/services#operational-turnaround-restructuring' },
    { name: 'Market Intelligence & Competitive Analysis', href: '/services#market-intelligence-competitive-analysis' },
    { name: 'Government & Defense Programs', href: '/services#government-defense-programs' },
    { name: 'Digital Transformation & Technology', href: '/services#digital-transformation-technology' },
    { name: 'Supply Chain Risk & Resilience', href: '/services#supply-chain-risk-resilience' },
    { name: 'Board & Leadership Advisory', href: '/services#board-leadership-advisory' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-semibold text-foreground">
              The Lundquist Group
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent focus-ring ${
                  location.pathname === item.href ? 'text-accent' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-accent focus-ring text-foreground">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80 bg-background border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} className="p-0">
                    <a
                      href={service.href}
                      className="block w-full px-4 py-3 text-sm hover:bg-surface transition-colors"
                    >
                      {service.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors duration-200 hover:text-accent focus-ring ${
                    location.pathname === item.href ? 'text-accent' : 'text-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Links */}
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-medium text-foreground mb-2">Services</div>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href={service.href}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors py-1 pl-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Schedule Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;