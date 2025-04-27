
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
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "State-of-the-Art Facilities",
    description: "Learn in modern facilities with cutting-edge technology and simulation labs.",
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Expert Faculty",
    description: "Learn from experienced healthcare professionals dedicated to your success.",
  },
];

export function HeroSlideshow() {
  return (
    <section className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-primary/60 dark:bg-primary-dark/70" />
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 max-w-2xl animate-fade-in">
                    {slide.description}
                  </p>
                  <Button className="bg-secondary hover:bg-secondary-light text-primary text-lg px-8 py-6 animate-fade-in">
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
