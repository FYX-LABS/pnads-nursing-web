
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from 'react-intersection-observer';

const programs = [
  {
    title: "Basic B.Sc (N) Nursing",
    duration: "4 Years",
    seats: 50,
    description: "A comprehensive four-year program preparing students for professional nursing practice with a strong foundation in clinical skills.",
    features: ["Hospital Training", "Internship", "Experienced Faculty"],
    popular: true
  },
  {
    title: "GNM (General Nursing & Midwifery)",
    duration: "3 Years",
    seats: 40,
    description: "A three-year diploma program focusing on practical nursing skills and midwifery training for immediate clinical practice.",
    features: ["Practical Focus", "Clinical Rotations", "Career Oriented"],
    popular: false
  },
  {
    title: "ANM (Auxiliary Nursing & Midwifery)",
    duration: "2 Years",
    seats: 30,
    description: "A two-year program that prepares students for basic nursing and midwifery care, especially in community health settings.",
    features: ["Community Focus", "Hands-on Training", "Quick Entry to Field"],
    popular: false
  },
];

export function Programs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="programs" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Our Programs
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-secondary"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer various nursing programs accredited by the Indian Nursing Council (INC) to prepare students for successful careers in healthcare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-all duration-500 border border-border ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <div className="bg-primary p-6">
                  <h3 className="text-xl font-bold text-primary-foreground mb-1">{program.title}</h3>
                  <div className="flex justify-between text-sm text-primary-foreground/80">
                    <span>Duration: {program.duration}</span>
                    <span>Seats: {program.seats}</span>
                  </div>
                </div>
                {program.popular && (
                  <Badge className="absolute top-2 right-2 bg-secondary text-primary">
                    Popular
                  </Badge>
                )}
              </div>
              
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{program.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-primary">Key Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-secondary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-secondary hover:bg-secondary-light text-primary font-medium mt-4 transition-transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
}
