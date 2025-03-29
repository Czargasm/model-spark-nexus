
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
    <div className="rounded-xl p-6 mb-8 bg-gradient-to-br from-model-purple/20 to-model-dark border border-model-purple/30 shadow-glow">
      <h3 className="text-xl font-bold text-model-pink mb-2 flex items-center">
        <Sparkles className="h-5 w-5 mr-2" />
        {title}
      </h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <Button 
        asChild
        className="w-full bg-gradient-to-r from-model-purple to-model-pink hover:from-model-pink hover:to-model-purple transition-all duration-500 text-white font-semibold shadow-lg shadow-model-purple/30 hover:shadow-model-pink/40 group relative overflow-hidden"
      >
        <a 
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center justify-center py-3"
        >
          <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">{ctaText}</span>
          <Sparkles className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 animate-pulse" />
        </a>
      </Button>
    </div>
  );
};

export default PromoBanner;
