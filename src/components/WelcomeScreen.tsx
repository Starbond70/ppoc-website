import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 500);
    const timer2 = setTimeout(() => setShowButton(true), 1500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 hero-gradient flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className={`transition-all duration-1000 ${showMessage ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-gradient">Orbit Club</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Connecting minds, innovating futures, and building the next generation of leaders
          </p>
        </div>
        
        {showButton && (
          <div className="animate-scale-in">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onComplete}
              className="text-lg px-8 py-6"
            >
              Enter Orbit Club
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeScreen;