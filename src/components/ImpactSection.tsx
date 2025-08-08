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

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Our <span className="text-gradient">Impact</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          The Public Policy and Opinion Cell is the first of its kind in the Delhi University circuit — a pioneering society dedicated entirely to public policy and its many dimensions. We have created a vibrant platform for students to explore governance, law, economics, and civic engagement through events, competitions, expert panels, and research initiatives. By fostering informed debate, evidence-based thinking, and practical problem-solving, we have inspired hundreds of students to critically engage with real-world issues and advocate for meaningful change.
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
          <h3 className="text-3xl font-bold text-center mb-12">Our <span className="text-gradient">Achievements</span></h3>
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