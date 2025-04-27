
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Excellence in Nursing Education",
    description: "Empowering the next generation of healthcare professionals through quality education and hands-on experience.",
    buttonText: "Apply Now",
    buttonLink: "/apply",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "State-of-the-Art Facilities",
    description: "Learn in modern facilities with cutting-edge technology and simulation labs.",
    buttonText: "View Facilities",
    buttonLink: "/about",
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Expert Faculty",
    description: "Learn from experienced healthcare professionals dedicated to your success.",
    buttonText: "Meet Our Faculty",
    buttonLink: "/faculty",
  },
];

export function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animate-fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("opacity-0");
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setAnimationClass("animate-fade-in");
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-5000 hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                    transition: "transform 8s ease-in-out",
                  }}
                >
                  <div className="absolute inset-0 bg-primary/60 dark:bg-primary-dark/70" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
                  <h1 
                    className={`text-4xl md:text-6xl font-bold mb-6 ${animationClass}`}
                    style={{animationDelay: "0.2s"}}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className={`text-xl mb-8 max-w-2xl ${animationClass}`}
                    style={{animationDelay: "0.4s"}}
                  >
                    {slide.description}
                  </p>
                  <Button 
                    className={`bg-secondary hover:bg-secondary-light text-primary text-lg px-8 py-6 ${animationClass} transition-transform hover:scale-110`}
                    style={{animationDelay: "0.6s"}}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/40 border-none" />
        <CarouselNext className="right-4 bg-white/20 hover:bg-white/40 border-none" />
      </Carousel>
    </section>
  );
}
