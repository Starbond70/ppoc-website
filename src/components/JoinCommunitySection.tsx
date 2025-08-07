import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const JoinCommunitySection = () => {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/your-number",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/orbitclub",
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/orbitclub",
      color: "bg-blue-600 hover:bg-blue-700",
    },
  ];

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Ready to be part of something extraordinary? Connect with us and start your journey 
            toward innovation, leadership, and meaningful impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-smooth hover:scale-105 glow-effect`}
              >
                <social.icon className="h-6 w-6" />
                <span className="font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="space-y-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Become a Member
            </Button>
            <p className="text-white/70">
              Or email us at: <span className="text-white font-semibold">contact@orbitclub.edu</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunitySection;