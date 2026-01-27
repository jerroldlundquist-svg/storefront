import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';

const FeaturedInsights = () => {
  const insights = [
    {
      title: 'The Future of Commercial Aviation: Post-Pandemic Recovery Strategies',
      excerpt: 'Analyzing market dynamics and strategic opportunities in the evolving commercial aviation landscape.',
      category: 'Aerospace',
      readTime: '8 min read',
      date: '2024-01-15',
      slug: 'commercial-aviation-recovery'
    },
    {
      title: 'Defense Technology Modernization: Investment Priorities for the Next Decade',
      excerpt: 'Key investment areas and strategic considerations for defense contractors navigating technological transformation.',
      category: 'Defense',
      readTime: '6 min read',
      date: '2024-01-10',
      slug: 'defense-tech-modernization'
    },
    {
      title: 'Private Equity in Transportation: Opportunities in Sustainable Mobility',
      excerpt: 'Emerging investment themes and value creation strategies in the sustainable transportation sector.',
      category: 'Transportation',
      readTime: '7 min read',
      date: '2024-01-05',
      slug: 'private-equity-transportation'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Strategic analysis and market intelligence from our industry experts.
            </p>
          </div>
          <Button variant="outline" className="mt-6 md:mt-0">
            View All Insights
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className="bg-surface border-border hover:shadow-elegant transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">
                    {insight.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <time>{insight.date}</time>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {insight.readTime}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="group/btn p-0 h-auto text-accent hover:text-accent"
                >
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights;