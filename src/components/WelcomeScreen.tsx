import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onComplete: () => void;
  backgroundGradientClass?: string;
}

const WelcomeScreen = ({ onComplete, backgroundGradientClass }: WelcomeScreenProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 500);
    const timer2 = setTimeout(() => onComplete(), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const gradientClass = backgroundGradientClass || "hero-gradient";

  return (
    <div className={`fixed inset-0 ${gradientClass} flex items-center justify-center z-50 overflow-auto`}>
      <div className="text-center space-y-6 p-4">
        <div className={`transition-all duration-1000 ${showMessage ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-gradient">Public Policy Opinion Cell</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
            Connecting minds, innovating futures, and building the next generation of leaders
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;