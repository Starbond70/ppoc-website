import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const positionPhotos: Record<string, string> = {
  President: "/images/president.jpg",
  "Vice President": "/images/vice-president.jpg",
  "General Secretary": "/images/general-secretary.jpg",
  "Joint Secretary": "/images/joint-secretary.jpg",
  "Departmental Head": "/images/departmental-head.jpg",
  "Senior Member": "/images/senior-member.jpg",
  "Junior Member": "/images/junior-member.jpg",
  Assistant: "/images/assistant.jpg",
};

const StructureSection = () => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  const hierarchy = [
    {
      level: "Core",
      positions: ["President", "Vice President", "General Secretary", "Joint Secretary"],
      color: "bg-primary text-white",
    },
    {
      level: "Cabinet",
      positions: ["Departmental Head", "Senior Member", "Junior Member", "Assistant"],
      color: "bg-accent text-white",
    },
  ];

  const departments = [
    {
      name: "Knowledge and Development",
      description: "Building innovative solutions and technical projects",
      icon: "💻",
    },
    {
      name: "Project and Research",
      description: "Organizing educational events and skill-building workshops",
      icon: "🎯",
    },
    {
      name: "Technical and Creative",
      description: "Promoting club activities and building community presence",
      icon: "📢",
    },
    {
      name: "Organizational and Sponsorship",
      description: "Managing day-to-day activities and administrative tasks",
      icon: "⚙️",
    },
    {
      name: "Editorial and Marketing",
      description: "Managing day-to-day activities and administrative tasks",
      icon: "⚙️",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" as const }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
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

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
    }),
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, type: "spring" as const } },
    exit: { opacity: 0, scale: 0.8, y: 40, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
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
            Society <span className="text-gradient">Structure</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={fadeUpVariants}
          >
            Our organized structure ensures effective leadership and seamless operations across all departments.
          </motion.p>
        </motion.div>

        {/* Hierarchy */}
        <motion.div 
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            variants={fadeUpVariants}
          >
            Organizational Hierarchy
          </motion.h3>
          <motion.div 
            className="bg-card p-8 rounded-2xl card-shadow border border-border/50 relative overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + i * 12}%`,
                  }}
                  variants={floatingVariants}
                  animate="animate"
                  transition={{ delay: i * 0.3 }}
                />
              ))}
            </div>
            <div className="space-y-6">
              {hierarchy.map((level, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.5 }}
                  className="border border-border/30 rounded-xl overflow-hidden"
                >
                  {/* Category Header */}
                  <motion.div
                    className={`px-6 py-4 ${level.color} cursor-pointer transition-all duration-300 hover:brightness-110`}
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => {
                      const content = document.getElementById(`hierarchy-${index}`);
                      if (content) {
                        content.classList.toggle('max-h-0');
                        content.classList.toggle('max-h-96');
                      }
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-semibold">{level.level}</h4>
                      <motion.div
                        className="text-2xl transition-transform duration-300"
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 180 }}
                      >
                        ▼
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Category Content */}
                  <div 
                    id={`hierarchy-${index}`}
                    className="max-h-96 overflow-hidden transition-all duration-500 ease-in-out bg-background/50"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {level.positions.map((position, posIndex) => (
                                                     <motion.div
                             key={posIndex}
                             custom={posIndex}
                             variants={fadeUp}
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ amount: 0.5 }}
                             className="bg-gray-800 p-4 rounded-lg border border-border/30 text-center hover:scale-102 transition-smooth cursor-pointer hover:border-primary/50 hover:shadow-md"
                             onClick={() => setSelectedPosition(position)}
                             onMouseEnter={() => setSelectedPosition(position)}
                             onMouseLeave={() => setSelectedPosition(null)}
                           >
                             <div className="flex flex-col items-center space-y-2">
                               <span className="font-medium text-sm">{position}</span>
                             </div>
                           </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Departments */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            variants={fadeUpVariants}
          >
            Departments
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-xl card-shadow relative overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                                 <motion.div 
                   className="text-4xl mb-4"
                   variants={iconVariants}
                   whileHover="hover"
                 >
                   {dept.icon}
                 </motion.div>
                                 <motion.h4 
                   className="text-xl font-semibold mb-3 text-primary"
                   variants={fadeUpVariants}
                 >
                   {dept.name}
                 </motion.h4>
                 <motion.p 
                   className="text-muted-foreground"
                   variants={fadeUpVariants}
                 >
                   {dept.description}
                 </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Popup for position photo */}
      <AnimatePresence>
        {selectedPosition && positionPhotos[selectedPosition] && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedPosition(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 shadow-xl relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={positionPhotos[selectedPosition]}
                alt={selectedPosition}
                className="w-64 h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center font-bold text-lg">{selectedPosition}</div>
              <button
                className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedPosition(null)}
                aria-label="Close"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StructureSection;