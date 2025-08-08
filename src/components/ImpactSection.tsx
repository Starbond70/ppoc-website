import { motion } from 'framer-motion';

const ImpactSection = () => {
  // const stats = [
  //   { number: "500+", label: "Active Members" },
  //   { number: "50+", label: "Projects Completed" },
  //   { number: "25+", label: "Industry Partners" },
  //   { number: "10+", label: "Awards Won" },
  // ];

  const achievements = [
    {
      title: "Policy Colloquium 2022 & 2023: Inter-College Policy Challenge",
      description: "Organised Policy Colloquium in 2022 and 2023 — an inter-college case study competition that brought together bright policy enthusiasts from across institutions. Participants analysed real-world socio-economic and political issues, applied evidence-based reasoning, and crafted strategic policy solutions. The event encouraged research, critical thinking, and debates, fostering collaboration and nurturing future policy leaders.",
    },
    {
      title: "Flagship Policy & Public Affairs Events",
      description: "Hosted impactful events including PUBLICON 2023 — a unique panel discussion series with experts, policymakers, and thought leaders debating key issues. Organised Policy Concours, a competitive policy case competition testing analytical and strategic skills, and curated multiple Speaker Sessions featuring influential voices. Together, these initiatives fostered policy dialogue, collaborative learning, and leadership development within the student community.",
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" as const },
    }),
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
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring" as const },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const },
    },
  };

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Our <span className="text-gradient">Impact</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Public Policy and Opinion Cell is the first of its kind in the Delhi University circuit — a pioneering society dedicated entirely to public policy and its many dimensions. We have created a vibrant platform for students to explore governance, law, economics, and civic engagement through events, competitions, expert panels, and research initiatives. By fostering informed debate, evidence-based thinking, and practical problem-solving, we have inspired hundreds of students to critically engage with real-world issues and advocate for meaningful change.
          </motion.p>
        </motion.div>
        
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div> */}
        
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Our <span className="text-gradient">Achievements</span>
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl card-shadow"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.h4 
                  className="text-xl font-semibold mb-3 text-primary"
                  variants={textReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {achievement.title}
                </motion.h4>
                <motion.p 
                  className="text-muted-foreground"
                  variants={textReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;