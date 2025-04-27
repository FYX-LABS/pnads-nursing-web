
import { Separator } from "@/components/ui/separator";
import { useInView } from 'react-intersection-observer';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "B.Sc Nursing Graduate, 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The education and clinical experience I received at PNDAS Nursing College prepared me exceptionally well for my career. The faculty was supportive and knowledgeable, making my learning journey smooth and enriching."
  },
  {
    name: "Rahul Patel",
    role: "GNM Graduate, 2022",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "My time at PNDAS shaped me into a confident healthcare professional. The hands-on training and personalized attention helped me develop critical skills needed in the nursing profession."
  },
  {
    name: "Anjali Desai",
    role: "ANM Graduate, 2023",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    quote: "PNDAS Nursing College focuses not just on academics but on holistic development. The practical exposure and emphasis on ethics and compassion have been invaluable in my career."
  },
  {
    name: "Vikram Singh",
    role: "B.Sc Nursing Graduate, 2022",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "The state-of-the-art facilities and highly qualified faculty at PNDAS make it the best nursing college in the region. I'm proud to be an alumnus of this prestigious institution."
  }
];

export function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Student Testimonials
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-secondary"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our graduates about their experiences at PNDAS Nursing College
          </p>
        </div>

        <div className={`transition-all duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <Carousel
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="bg-background border border-border rounded-lg p-6 shadow-sm h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-secondary">
                          <img 
                            src={`${testimonial.image}?w=100&h=100&fit=crop&crop=faces&auto=format&q=60`} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <Separator className="mb-4" />
                      
                      <div className="flex-1">
                        <p className="italic text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      
                      <div className="flex justify-end mt-4">
                        <div className="text-secondary text-2xl">❝</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
