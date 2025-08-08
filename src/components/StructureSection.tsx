import { motion } from "framer-motion";

const StructureSection = () => {
  const hierarchy = [
    {
      level: "Core",
      positions: ["President", "Vice President", "General Secretary", "Joint Secretary"],
      color: "bg-primary text-white", // Distinct color for Core
    },
    {
      level: "Cabinet",
      positions: ["Departmental Head", "Senior Member", "Junior Member", "Assistant"],
      color: "bg-accent text-white", // Distinct color for Cabinet
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

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" as const },
    }),
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
          <div className="space-y-8">
            {hierarchy.map((level, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`px-8 py-4 rounded-xl font-semibold text-lg mb-4 ${level.color}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {level.level}
                  </motion.div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
                    {level.positions.map((position, posIndex) => (
                      <motion.div
                        key={posIndex}
                        custom={posIndex}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.5 }}
                        className="bg-card p-4 rounded-lg card-shadow text-center hover:scale-105 transition-smooth"
                      >
                        <span className="font-medium">{position}</span>
                      </motion.div>
                    ))}
                  </div>
                  {index < hierarchy.length - 1 && (
                    <div className="w-px h-8 bg-border mt-4"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
    </section>
  );
};

export default StructureSection;