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
    initial: { opacity: 0, scale: 0.5, rotate: -180 },
    animate: {
      opacity: 1,
      scale: 0.9,
      rotate: -5,
      x: -60,
      transition: { 
        duration: 1.2, 
        type: "spring" as const, 
        stiffness: 100
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: 80, scale: 0.9 },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, type: "spring" as const, stiffness: 80 },
    },
  };

  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatingParticles = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const pulseGlow = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.3)",
        "0 0 40px rgba(59, 130, 246, 0.6)",
        "0 0 20px rgba(59, 130, 246, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-auto"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            variants={floatingParticles}
            animate="animate"
            transition={{ delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center h-full relative">
        <AnimatePresence>
          <motion.div
            className="flex items-center relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.img
              key="logo"
              src={logo}
              alt="Logo"
              className="w-32 h-32 mr-6 relative z-10"
              variants={logoVariants}
              initial="initial"
              animate={showContent ? "animate" : "initial"}
            />
            
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
              style={{ left: '0px', top: '0px' }}
              variants={pulseGlow}
              animate="animate"
            />
            
            {showContent && (
              <motion.div
                key="text-container"
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  key="text"
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white relative z-10"
                  style={{ whiteSpace: 'nowrap' }}
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  <motion.span 
                    className="text-gradient"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Public Policy
                  </motion.span> 
                  <span className="text-white"> And </span>
                  <motion.span 
                    className="text-gradient"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    Opinion
                  </motion.span> 
                  <span className="text-white"> Cell</span>
                </motion.h1>
                
                {/* Text glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;