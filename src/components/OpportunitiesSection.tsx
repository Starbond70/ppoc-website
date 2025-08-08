import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const OpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Expert Talks",
      description: "Hear from leading public policy professionals about current trends and key issues.",
      // benefits: ["Leadership experience", "Network building", "Skill development"],
    },
    {
      title: "Workshops on Key Topics",
      description: "Attend workshops that focus on important and timely issues in public policy.",
      // benefits: ["Technical skills", "Portfolio building", "Industry exposure"],
    },
    {
      title: "Policy Insight Sessions",
      description: "Explore major policy issues and potential solutions through focused discussions.",
      // benefits: ["Teaching experience", "Personal growth", "Career guidance"],
    },
    {
      title: "Collaborations with Institutions",
      description: "Participate in workshops organized with national and international public policy institutions",
      // benefits: ["Social impact", "Community service", "Personal fulfillment"],
    },
  ];

  const futurePlans = [
    "Expanding Policy Case Competitions",
    "Enhancing Research and Publications",
    "Broader Engagement with Policy Experts",
    "Workshops and Skill-building Initiatives",
    "Encouraging Diversity and Inclusion",
    "Community Engagement and Social Impact",
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const planItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, type: "spring" as const },
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
            <span className="text-gradient">Opportunities</span> & Future Plans
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Learning and Development initiatives include
          </motion.p>
        </motion.div>
        
        {/* Opportunities */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Growth Opportunities
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            {opportunities.map((opportunity, index) => (
              <motion.div 
                key={index}
                className="bg-card p-8 rounded-xl card-shadow"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <motion.h4 
                  className="text-xl font-semibold mb-4 text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {opportunity.title}
                </motion.h4>
                <motion.p 
                  className="text-muted-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                >
                  {opportunity.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Future Plans */}
        <motion.div 
          className="bg-card p-8 rounded-xl card-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            Future Plans
          </motion.h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            {futurePlans.map((plan, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-3"
                variants={planItemVariants}
                custom={index}
              >
                <motion.div 
                  className="w-3 h-3 bg-primary rounded-full flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                />
                <motion.span 
                  className="text-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                >
                  {plan}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;