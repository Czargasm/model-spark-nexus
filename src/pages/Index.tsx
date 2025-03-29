
import React from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import SocialLinks from '@/components/SocialLinks';
import PromoBanner from '@/components/PromoBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-model-lightpurple/30 py-12">
      <div className="profile-container">
        <ProfileHeader 
          name="Sophia Stars"
          tagline="Digital creator & model sharing exclusive content, lifestyle, and behind-the-scenes moments"
          profileImageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        />
        
        <PromoBanner 
          title="50% OFF this month only!"
          description="Subscribe now to get exclusive access to premium content and personal messages"
          ctaText="Unlock Premium Content"
          ctaLink="https://onlyfans.com/username"
        />
        
        <SocialLinks />
        
        <footer className="text-center text-sm text-muted-foreground pt-4 pb-10">
          <p>© 2023 Sophia Stars • All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
