
import { Button } from "@/components/ui/button";
import { useInView } from 'react-intersection-observer';

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="bg-primary rounded-lg w-full h-80 md:h-96 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Nursing students in a classroom" 
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary p-4 rounded-lg shadow-lg w-48 md:w-64 animate-pulse">
                <div className="text-center">
                  <h3 className="font-bold text-primary text-2xl md:text-3xl">Since</h3>
                  <p className="text-primary text-4xl md:text-5xl font-bold">2021</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
                About PNDAS Nursing
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Since 2021, PNDAS Nursing has been at the forefront of nursing education,
                committed to developing skilled, compassionate healthcare professionals.
                Our state-of-the-art facilities and experienced faculty ensure students
                receive the highest quality education.
              </p>
              <p className="text-muted-foreground mb-6">
                We pride ourselves on maintaining high academic standards while providing
                a supportive learning environment that promotes both personal and
                professional growth. Our nursing programs are recognized nationally for their excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Expert Faculty</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">98%</h3>
                <p className="text-muted-foreground">Placement Rate</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">3</h3>
                <p className="text-muted-foreground">Nursing Programs</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Successful Graduates</p>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary-light text-white transition-transform hover:scale-105">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
