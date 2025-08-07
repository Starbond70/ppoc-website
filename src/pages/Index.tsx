import { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StructureSection from '@/components/StructureSection';
import ActivitiesCarousel from '@/components/ActivitiesCarousel';
import ImpactSection from '@/components/ImpactSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';
import JoinCommunitySection from '@/components/JoinCommunitySection';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen">
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      
      <main className={`transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection />
        <AboutSection />
        <StructureSection />
        <ActivitiesCarousel />
        <ImpactSection />
        <OpportunitiesSection />
        <JoinCommunitySection />
      </main>
    </div>
  );
};

export default Index;
