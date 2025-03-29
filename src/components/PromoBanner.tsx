
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface PromoBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ 
  title, 
  description, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <div className="rounded-xl p-6 mb-8 bg-gradient-to-br from-model-lightpurple to-white shadow-glow">
      <h3 className="text-xl font-bold text-model-purple mb-2 flex items-center">
        <Sparkles className="h-5 w-5 mr-2" />
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button 
        asChild
        className="w-full bg-gradient-purple hover:opacity-90 transition-opacity"
      >
        <a 
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {ctaText}
        </a>
      </Button>
    </div>
  );
};

export default PromoBanner;
