import { useEffect, useState } from "react";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://chat.whatsapp.com/IlrbgROyOvRFq55urEspeJ",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/ppochansraj/",
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://in.linkedin.com/company/public-policy-opinion-cell-hansraj-college",
    color: "bg-blue-600 hover:bg-blue-700",
  },
];

// Enhanced animation variants
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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" as const, stiffness: 80 }
  },
  hover: {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3 }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, type: "spring" as const, stiffness: 100 }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.4 }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { stiffness: 100, damping: 15 },
  },
};

const JoinCommunitySection = () => {
  const [scrollTick, setScrollTick] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const onScroll = () => {
      // Debounce rapid scroll events to avoid flooding state updates
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrollTick((tick) => tick + 1);
      }, 100);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-20 hero-gradient relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
          className="animate-fade-in"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            variants={fadeUpVariants}
          >
            Join Our <span className="text-gradient">Community</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            variants={fadeUpVariants}
          >
            Ready to be part of something extraordinary? Connect with us and
            start your journey toward innovation, leadership, and meaningful
            impact.
          </motion.p>

          <motion.div
            key={scrollTick} // Re-mounts container on scroll, restarting animation
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white px-8 py-4 rounded-xl flex items-center gap-3 relative overflow-hidden`}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Floating particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/30 rounded-full"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        variants={floatingVariants}
                        animate="animate"
                        transition={{ delay: i * 0.3 }}
                      />
                    ))}
                  </div>

                  <motion.div
                    className="relative z-10"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full blur-xl"
                      variants={pulseGlow}
                      animate="animate"
                    />
                    <Icon className="h-6 w-6 relative z-10" />
                  </motion.div>
                  <motion.span 
                    className="font-semibold relative z-10"
                    variants={fadeUpVariants}
                  >
                    {social.name}
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={fadeUpVariants}
          >
            {/* <Button variant="hero" size="lg" className="text-lg px-8">
              Become a Member
            </Button> */}
            <motion.p 
              className="text-white/70"
              variants={fadeUpVariants}
            >
              Or email us at:{" "}
              <span className="text-white font-semibold">
                <a href="mailto:ppochansraj@gmail.com">ppochansraj@gmail.com</a>
              </span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
