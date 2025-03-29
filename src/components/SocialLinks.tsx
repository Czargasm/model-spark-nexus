
import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Twitch, 
  Youtube, 
  Facebook, 
  Heart,
  MessageCircle,
  Music
} from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  primary?: boolean;
}

const SocialLinks: React.FC = () => {
  const links: SocialLink[] = [
    {
      name: "OnlyFans",
      url: "https://onlyfans.com/username",
      icon: <Heart className="social-icon" />,
      primary: true
    },
    {
      name: "Instagram",
      url: "https://instagram.com/username",
      icon: <Instagram className="social-icon" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/username",
      icon: <Twitter className="social-icon" />,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@username",
      icon: <Music className="social-icon" />,
    },
    {
      name: "MyFreeCams",
      url: "https://myfreecams.com/username",
      icon: <MessageCircle className="social-icon" />,
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/username",
      icon: <Twitch className="social-icon" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/channel/username",
      icon: <Youtube className="social-icon" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com/username",
      icon: <Facebook className="social-icon" />,
    }
  ];

  // Split links into primary and regular
  const primaryLinks = links.filter(link => link.primary);
  const regularLinks = links.filter(link => !link.primary);

  return (
    <div className="w-full mb-8">
      {primaryLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link bg-gradient-purple animate-float scale-105"
        >
          {link.icon}
          {link.name}
        </a>
      ))}
      
      {regularLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link bg-white/90 text-model-purple hover:bg-model-lightpurple"
        >
          {link.icon}
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
