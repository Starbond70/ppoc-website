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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" as const },
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
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Society <span className="text-gradient">Structure</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our organized structure ensures effective leadership and seamless operations across all departments.
          </motion.p>
        </div>

        {/* Hierarchy */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Organizational Hierarchy
          </motion.h3>
          <motion.div 
            className="bg-card p-8 rounded-2xl card-shadow border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
                            className="bg-background p-4 rounded-lg border border-border/30 text-center hover:scale-105 transition-smooth cursor-pointer hover:border-primary/50 hover:shadow-md"
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
        </div>

        {/* Departments */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Departments
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                className="bg-card p-8 rounded-xl card-shadow hover:scale-105 transition-smooth"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h4 className="text-xl font-semibold mb-3 text-primary">{dept.name}</h4>
                <p className="text-muted-foreground">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
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