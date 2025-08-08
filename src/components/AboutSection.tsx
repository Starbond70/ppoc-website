import { BookCheck, Eye, ChartCandlestick } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-gradient">Public Policy Opinion Cell</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            One of the only societies at Hansraj exclusively dedicated to the cause of Public Policy and related affairs.
            We excel at policy case competitions, offer resources to publish articles and interact with policy experts and analyse various public issues.
          </p>
        </div>

        {/* Cards with Framer Motion */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.2 }} // animate every time in view
            className="bg-card p-8 rounded-xl card-shadow"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 glow-effect on-hover hover:scale-105 transition-smooth">
              <BookCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To create a vibrant platform where members can dive into the world of public policy, engage in dynamic discussions, and build informed perspectives on critical issues that matter.
            </p>
          </motion.div>

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ amount: 0.2 }}
            className="bg-card p-8 rounded-xl card-shadow"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 glow-effect on-hover hover:scale-105 transition-smooth">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To nurture a community of passionate, socially-conscious individuals who are equipped to influence change and drive impactful solutions through thoughtful debate, innovation, and collaboration.
            </p>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.2 }}
            className="bg-card p-8 rounded-xl card-shadow"
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 glow-effect on-hover hover:scale-105 transition-smooth">
              <ChartCandlestick className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              At PPOC, we strive to provide a platform to students to
              study public policies and deepen their understanding
              of social issues. PPOC seeks to create opportunities that empower its
              members and widen their perspectives.
            </p>
          </motion.div>
        </div>

        {/* Publications Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Our Publications</h3>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/10Sfd4767To6pnmeLwOdA986FDRtrjdf-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary/80 transition-smooth"
            >
              PPOC Newsletter ED.1 Vol.1
            </a>
            <a
              href="https://drive.google.com/file/d/1uLh3dJgPXDg6NeXssDpNrXDh2UX_34BJ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-primary/80 transition-smooth"
            >
              PPOC Newsletter ED.1 Vol.2
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
