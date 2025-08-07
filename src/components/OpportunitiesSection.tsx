import { Button } from '@/components/ui/button';

const OpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Leadership Positions",
      description: "Take charge and develop your leadership skills by heading departments or organizing events.",
      benefits: ["Leadership experience", "Network building", "Skill development"],
    },
    {
      title: "Project Collaboration",
      description: "Work on real-world projects with fellow members and industry mentors.",
      benefits: ["Technical skills", "Portfolio building", "Industry exposure"],
    },
    {
      title: "Mentorship Programs",
      description: "Guide junior members and receive mentorship from experienced alumni.",
      benefits: ["Teaching experience", "Personal growth", "Career guidance"],
    },
    {
      title: "Volunteer Initiatives",
      description: "Contribute to community outreach and social impact programs.",
      benefits: ["Social impact", "Community service", "Personal fulfillment"],
    },
  ];

  const futurePlans = [
    "Expansion to multiple university campuses",
    "Industry partnership programs",
    "International collaboration initiatives",
    "Innovation incubator for student startups",
    "Alumni mentorship network",
    "Advanced certification programs",
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient">Opportunities</span> & Future Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the many ways you can grow, contribute, and shape your future with Orbit Club.
          </p>
        </div>
        
        {/* Opportunities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Growth Opportunities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl card-shadow hover:scale-105 transition-smooth animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h4 className="text-xl font-semibold mb-4 text-primary">{opportunity.title}</h4>
                <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Benefits:</div>
                  <ul className="space-y-1">
                    {opportunity.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Future Plans */}
        <div className="bg-card p-8 rounded-xl card-shadow">
          <h3 className="text-3xl font-bold text-center mb-8">Future Prospects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futurePlans.map((plan, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground">{plan}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="cta" size="lg">
              Be Part of Our Future
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;