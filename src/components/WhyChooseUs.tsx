
import { Progress } from "@/components/ui/progress";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const strengths = [
  { name: "Expert Faculty", percentage: 98 },
  { name: "Modern Facilities", percentage: 96 },
  { name: "Industry Connections", percentage: 94 },
  { name: "Job Placement", percentage: 92 },
];

const features = [
  {
    icon: "👨‍🏫",
    title: "Experienced Faculty",
    description: "Learn from nursing professionals with years of industry experience"
  },
  {
    icon: "🏥",
    title: "Modern Facilities",
    description: "Access state-of-the-art simulation labs and equipment"
  },
  {
    icon: "📊",
    title: "High Success Rate",
    description: "Our graduates consistently achieve excellent pass rates"
  },
  {
    icon: "🌐",
    title: "Industry Connections",
    description: "Benefit from our strong network of healthcare partners"
  },
  {
    icon: "📚",
    title: "Comprehensive Curriculum",
    description: "Curriculum aligned with latest healthcare practices"
  },
  {
    icon: "🤝",
    title: "Supportive Environment",
    description: "Dedicated mentorship and guidance throughout your journey"
  },
];

export function WhyChooseUs() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="why-choose" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 relative inline-block">
            Why Choose PNDAS Nursing?
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-secondary"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to excellence in nursing education, providing our students with the skills and knowledge needed to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className={`transition-all duration-700 ${inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Strengths</h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{strength.name}</span>
                    <span className="font-bold text-secondary">{strength.percentage}%</span>
                  </div>
                  <ProgressBar value={strength.percentage} index={index} inView={inView} />
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${inView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Approach</h3>
            <p className="mb-6 text-muted-foreground">
              At PNDAS Nursing, we follow a comprehensive approach to nursing education that combines theoretical knowledge with practical skills training and clinical exposure.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Hands-on clinical experience in various healthcare settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Personalized attention with small class sizes</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Regular workshops and seminars by industry experts</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">✓</span>
                <span>Career guidance and placement assistance</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-border ${
                inView ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressBar({ value, index, inView }: { value: number; index: number; inView: boolean }) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, index * 200);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [inView, value, index]);

  return <Progress value={progress} className="h-2" />;
}
