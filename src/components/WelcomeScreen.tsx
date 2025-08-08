import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowContent(true);
    }, 700);
    const timer2 = setTimeout(() => onComplete(), 5000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const logoVariants = {
    initial: { opacity: 1, scale: 1, x: 0 },
    animate: {
      x: -60,
      scale: 0.9,
      rotate: -5,
      opacity: 1,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1], type: "spring", stiffness: 100 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: 80, scale: 0.9 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1], type: "spring", stiffness: 80 },
    },
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-auto">
      <div className="flex items-center justify-center h-full">
        <AnimatePresence>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.img
              key="logo"
              src={logo}
              alt="Logo"
              className="w-32 h-32 mr-6"
              variants={logoVariants}
              initial="initial"
              animate={showContent ? "animate" : "initial"}
            />
            {showContent && (
              <motion.h1
                key="text"
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
                style={{ whiteSpace: 'nowrap' }}
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                Public Policy And Opinion Cell
              </motion.h1>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WelcomeScreen;