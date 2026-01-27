import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ArrowRight, Clock, Search, Filter } from 'lucide-react';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Aerospace', 'Defense', 'Transportation', 'Technology', 'Private Equity', 'Strategy'];

  const insights = [
    {
      title: 'The Future of Commercial Aviation: Post-Pandemic Recovery Strategies',
      excerpt: 'Analyzing market dynamics and strategic opportunities in the evolving commercial aviation landscape as the industry navigates recovery challenges.',
      category: 'Aerospace',
      readTime: '8 min read',
      date: '2024-01-15',
      slug: 'commercial-aviation-recovery',
      featured: true
    },
    {
      title: 'Defense Technology Modernization: Investment Priorities for the Next Decade',
      excerpt: 'Key investment areas and strategic considerations for defense contractors navigating technological transformation and emerging threats.',
      category: 'Defense',
      readTime: '6 min read',
      date: '2024-01-10',
      slug: 'defense-tech-modernization',
      featured: true
    },
    {
      title: 'Private Equity in Transportation: Opportunities in Sustainable Mobility',
      excerpt: 'Emerging investment themes and value creation strategies in the sustainable transportation sector, from EVs to autonomous systems.',
      category: 'Transportation',
      readTime: '7 min read',
      date: '2024-01-05',
      slug: 'private-equity-transportation',
      featured: true
    },
    {
      title: 'AI Integration in Industrial Technology: Strategic Implementation Framework',
      excerpt: 'Best practices for technology companies implementing AI solutions across industrial applications and manufacturing processes.',
      category: 'Technology',
      readTime: '9 min read',
      date: '2023-12-28',
      slug: 'ai-industrial-integration',
      featured: false
    },
    {
      title: 'Supply Chain Resilience in Aerospace: Lessons from Recent Disruptions',
      excerpt: 'Strategic approaches to building robust supply chains in the aerospace industry, addressing vendor management and risk mitigation.',
      category: 'Aerospace',
      readTime: '5 min read',
      date: '2023-12-20',
      slug: 'aerospace-supply-chain-resilience',
      featured: false
    },
    {
      title: 'Private Equity Due Diligence in Defense: Key Considerations and Red Flags',
      excerpt: 'Critical factors for private equity firms evaluating defense contractor investments, including regulatory and security considerations.',
      category: 'Private Equity',
      readTime: '10 min read',
      date: '2023-12-15',
      slug: 'defense-pe-due-diligence',
      featured: false
    },
    {
      title: 'Digital Transformation in Transportation: Infrastructure Investment Strategies',
      excerpt: 'Strategic frameworks for modernizing transportation infrastructure through digital technology integration and smart systems.',
      category: 'Transportation',
      readTime: '8 min read',
      date: '2023-12-10',
      slug: 'transportation-digital-transformation',
      featured: false
    },
    {
      title: 'Space Technology Commercialization: Market Entry Strategies for New Players',
      excerpt: 'Navigating the complex space technology market, from satellite communications to launch services and space manufacturing.',
      category: 'Aerospace',
      readTime: '6 min read',
      date: '2023-12-05',
      slug: 'space-tech-commercialization',
      featured: false
    }
  ];

  const filteredInsights = insights.filter(insight => {
    const matchesCategory = selectedCategory === 'All' || insight.category === selectedCategory;
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredInsights = insights.filter(insight => insight.featured);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <Breadcrumbs />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Market Intelligence
            </Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Strategic Insights & Market Intelligence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              In-depth analysis and strategic perspectives on the industries driving 
              innovation in aerospace, defense, transportation, and technology. Stay ahead 
              of market trends with expert insights that inform critical business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4">
                    {insight.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <time>{insight.date}</time>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>

                  <a
                    href={`/blog/${insight.slug}`}
                    className="group/btn p-0 h-auto inline-flex items-center text-accent hover:text-accent"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights with Filters */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">All Insights</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <Card key={index} className="bg-surface border-border hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-8">
                  <Badge variant="secondary" className="mb-4">
                    {insight.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <time>{insight.date}</time>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>

                  <a
                    href={`/blog/${insight.slug}`}
                    className="group/btn p-0 h-auto inline-flex items-center text-accent hover:text-accent"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No insights found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

    </Layout>
  );
};

export default Insights;