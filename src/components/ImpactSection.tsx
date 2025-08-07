const ImpactSection = () => {
  // const stats = [
  //   { number: "500+", label: "Active Members" },
  //   { number: "50+", label: "Projects Completed" },
  //   { number: "25+", label: "Industry Partners" },
  //   { number: "10+", label: "Awards Won" },
  // ];

  const achievements = [
    {
      title: "1.",
      description: "Organised POLICY COLLOQUIUM, 2022 and 2023 an inter-college level case study competition designed for policy enthusiasts to strategically formulate and deliberate on major issues",
    },
    {
      title: "2.",
      description: "Hosted several events such as PUBLICON 2023, a one of its kind panel discussions, POLICY CONCOURS which was a highly competitive Policy Case Competitions, SPEAKER SESSIONS and many more",
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Impact</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Public Policy and Opinion
Cell is the very first of its
kind in the Delhi University
circuit. A society solely
devoted to public policy
and its aspects.
          </p>
        </div>
        
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
        
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-12">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl card-shadow hover:scale-105 transition-smooth animate-slide-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <h4 className="text-xl font-semibold mb-3 text-primary">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;