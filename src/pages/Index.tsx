
import React from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import SocialLinks from '@/components/SocialLinks';
import PromoBanner from '@/components/PromoBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-model-dark to-black py-12">
      <div className="profile-container">
        <ProfileHeader 
          name="Vanta Bee"
          tagline="Digital creator & model sharing exclusive content, lifestyle, and behind-the-scenes moments"
          profileImageUrl="/lovable-uploads/7a09763e-5383-45b9-bb51-7c6d7dfcd5a3.png"
        />
        
        <PromoBanner 
          title="50% OFF this month only!"
          description="Subscribe now to get exclusive access to premium content and personal messages"
          ctaText="Unlock Premium Content"
          ctaLink="https://onlyfans.com/vantabee"
        />
        
        <SocialLinks />
        
        <footer className="text-center text-sm text-muted-foreground pt-4 pb-10">
          <p>© 2023 Vanta Bee • All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
