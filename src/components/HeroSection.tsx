import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <center>
          <img src="public/favicon.ico" alt="Logo" className="w-90 h-64 mb-6 blend-lighten" />
          </center>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="text-gradient">Public Policy Opinion</span> Cell
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          At PPOC Hansraj, we aim to hold socratic discussions over important public issues, analyse the policies circumventing them and draft some deeply scrutinised alternatives.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg" onClick={() => window.scrollTo({ top: document.getElementById("join-community")!.offsetTop, behavior: "smooth" })}>
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-primary">
              Explore Activities
            </Button>
          </div> */}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;