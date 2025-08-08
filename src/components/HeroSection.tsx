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
        <div className="animate-fade-in">
          <center>
            <img
              src="https://raw.githubusercontent.com/RAVOKERcodes/orbit-club-connect/refs/heads/main/public/favicon.ico"
              alt="Logo"
              className="w-90 h-64 mb-6 blend-lighten"
            />
          </center>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="text-gradient">Public Policy Opinion</span> Cell
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            At PPOC Hansraj, we aim to hold socratic discussions over important
            public issues, analyse the policies circumventing them and draft
            some deeply scrutinised alternatives.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
