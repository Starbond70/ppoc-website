const AboutSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">About <span className="text-gradient">Orbit Club</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Established to foster innovation and leadership among college students, Orbit Club serves as a 
            dynamic platform for learning, networking, and creating meaningful impact in our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl card-shadow animate-slide-up">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 glow-effect">
              <span className="text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower students with cutting-edge skills, foster innovation, and build a community 
              of future leaders who will shape tomorrow's world.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl card-shadow animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 glow-effect">
              <span className="text-2xl text-white">👁️</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the premier student organization that bridges the gap between academic learning 
              and real-world application through innovation and collaboration.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-xl card-shadow animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 glow-effect">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, integrity, collaboration, and continuous learning form the foundation 
              of everything we do at Orbit Club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;