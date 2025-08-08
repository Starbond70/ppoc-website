import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);

  // Track scroll progress of hero section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale vertically only for a jelly stretch effect without tilt
  // We scale Y from 1 to 1.08 and back to 1 smoothly
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1]);

  // Optional: very subtle vertical translate to enhance stretch feel
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, 0]);

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring" as const, stiffness: 100 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const pulseGlow = {
    animate: {
      boxShadow: [
        "0 0 30px rgba(59, 130, 246, 0.4)",
        "0 0 60px rgba(59, 130, 246, 0.8)",
        "0 0 30px rgba(59, 130, 246, 0.4)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const, stiffness: 80 }
    }
  };

  return (
    <motion.section
      ref={ref}
      style={{ scaleY, translateY, transformOrigin: "top center" }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div 
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + i * 8}%`,
                }}
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: i * 0.3 }}
              />
            ))}
          </div>

          <motion.div
            className="relative mb-8"
            variants={fadeUpVariants}
          >
                         <motion.div
               className="relative inline-block"
               variants={pulseGlow}
               animate="animate"
             >
               <img
                 src="https://raw.githubusercontent.com/RAVOKERcodes/orbit-club-connect/refs/heads/main/public/favicon.ico"
                 alt="Logo"
                 className="w-90 h-64 blend-lighten relative z-10 bg-transparent"
                 style={{ backgroundColor: 'transparent' }}
               />
               {/* Logo glow effect */}
               <motion.div
                 className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl -z-10"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.5 }}
               />
             </motion.div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            variants={textReveal}
          >
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Public Policy Opinion
            </motion.span> 
            <span className="text-white"> Cell</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            variants={textReveal}
          >
            At PPOC Hansraj, we aim to hold socratic discussions over important
            public issues, analyse the policies circumventing them and draft
            some deeply scrutinised alternatives.
          </motion.p>

          {/* Text glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.2 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
