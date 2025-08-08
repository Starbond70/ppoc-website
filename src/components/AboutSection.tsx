import { BookCheck, Eye, ChartCandlestick } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
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

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            variants={fadeUpVariants}
          >
            About <span className="text-gradient">Public Policy Opinion Cell</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={fadeUpVariants}
          >
            One of the only societies at Hansraj exclusively dedicated to the cause of Public Policy and related affairs.
            We excel at policy case competitions, offer resources to publish articles and interact with policy experts and analyse various public issues.
          </motion.p>
        </motion.div>

        {/* Cards with Framer Motion */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          {/* Left Card */}
          <motion.div
            className="bg-card p-8 rounded-xl card-shadow relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: i * 0.5 }}
                />
              ))}
            </div>

            <motion.div 
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
              <BookCheck className="w-8 h-8 text-white relative z-10" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-4"
              variants={fadeUpVariants}
            >
              Our Mission
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              variants={fadeUpVariants}
            >
              To create a vibrant platform where members can dive into the world of public policy, engage in dynamic discussions, and build informed perspectives on critical issues that matter.
            </motion.p>
          </motion.div>

          {/* Center Card */}
          <motion.div
            className="bg-card p-8 rounded-xl card-shadow relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: i * 0.5 }}
                />
              ))}
            </div>

            <motion.div 
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
              <Eye className="w-8 h-8 text-white relative z-10" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-4"
              variants={fadeUpVariants}
            >
              Our Vision
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              variants={fadeUpVariants}
            >
              To nurture a community of passionate, socially-conscious individuals who are equipped to influence change and drive impactful solutions through thoughtful debate, innovation, and collaboration.
            </motion.p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="bg-card p-8 rounded-xl card-shadow relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${30 + i * 20}%`,
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: i * 0.5 }}
                />
              ))}
            </div>

            <motion.div 
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 relative z-10"
              variants={iconVariants}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
              <ChartCandlestick className="w-8 h-8 text-white relative z-10" />
            </motion.div>
            <motion.h3 
              className="text-xl font-semibold mb-4"
              variants={fadeUpVariants}
            >
              Our Values
            </motion.h3>
            <motion.p 
              className="text-muted-foreground"
              variants={fadeUpVariants}
            >
              At PPOC, we strive to provide a platform to students to
              study public policies and deepen their understanding
              of social issues. PPOC seeks to create opportunities that empower its
              members and widen their perspectives.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Publications Section */}
        <motion.div 
          className="mt-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Floating particles for publications */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                style={{
                  left: `${15 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
                variants={floatingVariants}
                animate="animate"
                transition={{ delay: i * 0.2 }}
              />
            ))}
          </div>

          <motion.h3 
            className="text-3xl font-bold mb-8 relative z-10"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            Our <span className="text-gradient">Publications</span>
          </motion.h3>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            Explore our latest newsletters and research publications
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-6 justify-center relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/10Sfd4767To6pnmeLwOdA986FDRtrjdf-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
              
              {/* Floating particles inside button */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: i * 0.3 }}
                  />
                ))}
              </div>

              <span className="relative z-10 flex items-center gap-2">
                📄 PPOC Newsletter ED.1 Vol.1
                <motion.span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1uLh3dJgPXDg6NeXssDpNrXDh2UX_34BJ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl"
                variants={pulseGlow}
                animate="animate"
              />
              
              {/* Floating particles inside button */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 25}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    variants={floatingVariants}
                    animate="animate"
                    transition={{ delay: i * 0.3 }}
                  />
                ))}
              </div>

              <span className="relative z-10 flex items-center gap-2">
                📄 PPOC Newsletter ED.1 Vol.2
                <motion.span
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
