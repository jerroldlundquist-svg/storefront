import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import heroImage from '@/assets/hero-aircraft.jpg';

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      setShowVideo(true);
      // Small delay to ensure smooth loading
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Fallback if autoplay fails
            setShowVideo(false);
          });
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-video-container">
      {/* Video Background */}
      {showVideo ? (
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          poster={heroImage}
          onLoadedData={() => {
            if (videoRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
              videoRef.current.play().catch(() => setShowVideo(false));
            }
          }}
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Optional Eyebrow */}
          <div className="mb-6 opacity-90">
            <span className="text-sm font-medium text-accent tracking-wider uppercase">
              Strategy • Capital • Execution
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
            The Lundquist Group
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Providing strategic advisory services to senior management, private equity, 
            and other investors focused on the Aerospace, Defense, Transportation, 
            and Technology industries.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Schedule a Consultation
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Services
            </Button>
          </div>
        </div>

        {/* Video Control */}
        {showVideo && (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleVideo}
            className="absolute bottom-8 right-8 bg-background/20 backdrop-blur-sm hover:bg-background/30"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default VideoHero;