import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    setIsVisible(false);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const handleClosePreferences = () => {
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
        <Card className="max-w-4xl mx-auto bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Cookie className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  We Use Cookies
                </h3>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to run this site, measure performance, and personalize content. 
                  See our <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a> for more details.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" onClick={handleAcceptAll}>
                    Accept All
                  </Button>
                  <Button variant="outline" onClick={handleRejectNonEssential}>
                    Reject Non-Essential
                  </Button>
                  <Button variant="ghost" onClick={handleManagePreferences}>
                    Manage Preferences
                  </Button>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="p-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-serif font-bold text-foreground">Cookie Preferences</h3>
                <Button variant="ghost" size="sm" onClick={handleClosePreferences}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Necessary Cookies</h4>
                    <p className="text-sm text-muted-foreground">Required for site functionality</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Always On</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">Help us improve the site</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4 text-accent border-border rounded focus:ring-accent" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">Personalize your experience</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4 text-accent border-border rounded focus:ring-accent" />
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button variant="primary" onClick={handleAcceptAll} className="flex-1">
                  Save Preferences
                </Button>
                <Button variant="outline" onClick={handleClosePreferences} className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CookieBanner;