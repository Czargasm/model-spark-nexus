
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
          className="social-link primary-link group relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-model-purple to-model-pink opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center justify-center">
            <span className="mr-3 transform group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
            <span className="font-semibold text-lg">{link.name}</span>
          </span>
        </a>
      ))}
      
      {regularLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link regular-link group relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-model-dark opacity-70 border border-model-purple/20 group-hover:bg-model-purple/30 transition-all duration-300"></span>
          <span className="relative flex items-center justify-center">
            <span className="text-model-purple mr-3 transform group-hover:scale-110 transition-transform duration-300">{link.icon}</span>
            <span className="font-medium text-white">{link.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
