import React from 'react';
import Layout from '@/components/layout/Layout';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author?: string;
  slug: string;
  tags?: string[];
  relatedPosts?: {
    title: string;
    slug: string;
    category: string;
    readTime: string;
  }[];
}

const BlogPost = ({ 
  title, 
  excerpt, 
  content, 
  category, 
  readTime, 
  date, 
  author = "The Lundquist Group",
  slug,
  tags = [],
  relatedPosts = []
}: BlogPostProps) => {
  return (
    <Layout>
      {/* Header with Breadcrumbs */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="container mx-auto px-6">
          <Breadcrumbs items={[
            { label: 'Home', href: '/' },
            { label: 'Insights', href: '/insights' },
            { label: title }
          ]} />
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <a href="/insights" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Insights
                </a>
              </Button>
              <div className="flex items-center gap-2 ml-auto">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Badge variant="secondary" className="mb-6">
              {category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-slate dark:prose-invert max-w-none
                         prose-headings:font-serif prose-headings:text-foreground
                         prose-p:text-muted-foreground prose-p:leading-relaxed
                         prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                         prose-strong:text-foreground prose-code:text-accent
                         prose-blockquote:border-l-accent prose-blockquote:bg-surface/50
                         prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Related Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post, index) => (
                  <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 group">
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-200">
                        <a href={`/blog/${post.slug}`}>
                          {post.title}
                        </a>
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-navy-gradient">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Ready to Discuss Your Strategic Challenges?
            </h2>
            <p className="text-lg text-foreground/90 mb-8">
              Connect with our team to explore how these insights apply to your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <a href="/contact">Schedule Strategy Call</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/insights">More Insights</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;