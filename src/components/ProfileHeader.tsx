
import React from 'react';

interface ProfileHeaderProps {
  name: string;
  tagline: string;
  profileImageUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, tagline, profileImageUrl }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative mb-4">
        <div className="absolute inset-0 bg-gradient-purple rounded-full blur-md opacity-70 animate-pulse-subtle" />
        <img 
          src={profileImageUrl} 
          alt={`${name}'s profile`} 
          className="relative w-32 h-32 rounded-full object-cover border-4 border-model-purple/30 shadow-glow"
        />
      </div>
      
      <h1 className="text-3xl font-bold bg-gradient-purple bg-clip-text text-transparent mb-2">
        {name}
      </h1>
      
      <p className="text-gray-300 text-center mb-4 max-w-xs">
        {tagline}
      </p>
    </div>
  );
};

export default ProfileHeader;
