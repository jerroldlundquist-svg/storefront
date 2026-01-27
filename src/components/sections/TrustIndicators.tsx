import React from 'react';

const TrustIndicators = () => {
  return (
    <section className="py-16 bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-8">
            Trusted by leaders in Aerospace, Defense, Transportation & Technology
          </p>
          
          {/* Placeholder for client logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-muted/20 rounded flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-medium">
                  CLIENT LOGO {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;