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
    <section className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Ready to be part of something extraordinary? Connect with us and
            start your journey toward innovation, leadership, and meaningful
            impact.
          </p>

          <motion.div
            key={scrollTick} // Re-mounts container on scroll, restarting animation
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-smooth hover:scale-105 glow-effect`}
                  variants={itemVariants}
                >
                  <Icon className="h-6 w-6" />
                  <span className="font-semibold">{social.name}</span>
                </motion.a>
              );
            })}
          </motion.div>

          <div className="space-y-4">
            {/* <Button variant="hero" size="lg" className="text-lg px-8">
              Become a Member
            </Button> */}
            <p className="text-white/70">
              Or email us at:{" "}
              <span className="text-white font-semibold">
                <a href="mailto:ppochansraj@gmail.com">ppochansraj@gmail.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;
