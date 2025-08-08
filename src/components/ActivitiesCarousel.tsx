import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import activities1 from '@/assets/activities-1.jpg';
import activities2 from '@/assets/activities-2.jpg';
import activities3 from '@/assets/activities-3.jpg';
import activities4 from '@/assets/activities-4.jpg';
import activities5 from '@/assets/activities-5.jpg';


const activities = [
  {
    id: 1,
    title: "The Policy Colloquium",
    description: "The annual policy case competition organised by the society, spanning across three stages, where participants delve into the depths of societal problems and come up with unique solutions.",
    image: activities1,
  },
  {
    id: 2,
    title: "OPCLAVE",
    description: "The PubliCon (Panel Discussion) and The Policy Concours (Case Competition) organised under Opclave are one of it’s kind on the college campus.",
    image: activities2,
  },
  {
    id: 3,
    title: "Janhit Mein Jaari",
    description: "This is a regular intra-society conducted by the KnD Department of the society that analyses and enhances the understanding of various social issues and policy developments.",
    image: activities3,
  },
  {
    id: 4,
    title: "Element se Elegant Tak",
    description: "The workshop conducted by the Tech and Creative Department of the society lets you master your technical skills and brush up your creative visions.",
    image: activities4,
  },
  {
    id: 5,
    title: "From Data to Decisions",
    description: "The workshop conducted by the PnR department of the society offers you the necessary guidance to explore and realise your research interests.",
    image: activities5,
  },
];

const ActivitiesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageRatios, setImageRatios] = useState({}); // store image width/height ratio

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  // Preload images to check aspect ratio
  useEffect(() => {
    activities.forEach((activity) => {
      const img = new Image();
      img.src = activity.image;
      img.onload = () => {
        setImageRatios((prev) => ({
          ...prev,
          [activity.id]: img.width / img.height,
        }));
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From workshops to conferences, we provide diverse opportunities for learning and growth.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activities.map((activity) => {
                const ratio = imageRatios[activity.id];
                const isSquare = ratio && Math.abs(ratio - 1) < 0.05; // ~square detection

                return (
                  <div key={activity.id} className="w-full flex-shrink-0">
                    {/* Keep a fixed aspect ratio container for consistency */}
                    <div className="relative aspect-[16/9] bg-black">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className={`w-full h-full ${
                          isSquare ? 'object-contain' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">{activity.title}</h3>
                        <p className="text-lg text-white/90 max-w-2xl">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {activities.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-white/30'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesCarousel;
