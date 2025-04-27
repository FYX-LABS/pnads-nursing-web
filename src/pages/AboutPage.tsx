
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Principal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300",
      bio: "Dr. Kumar has over 15 years of experience in nursing education and healthcare administration."
    },
    {
      name: "Dr. Priya Sharma",
      role: "Vice Principal",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300",
      bio: "With a PhD in Nursing Education, Dr. Sharma brings extensive experience in curriculum development."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Us</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Learn more about PNDAS Nursing College's history, mission, and commitment to nursing education excellence.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our History</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Established in 2021, PNDAS Nursing College was founded with a vision to create a center of excellence in nursing education. Named after the renowned healthcare advocate Pramoth Nath Das, our institution has quickly emerged as a leader in nursing education in the region.
                </p>
                <p>
                  Despite being relatively new, our college has rapidly developed a reputation for academic excellence, practical training, and producing graduates who are well-prepared for the healthcare industry's challenges. Our founding team of experienced healthcare professionals and educators established the institution with a commitment to quality education and ethical practice.
                </p>
                <p>
                  Over the years, we have expanded our programs, enhanced our facilities, and strengthened our industry connections to provide the best possible education to our students. Today, PNDAS Nursing College stands as a testament to our founders' vision and dedication to advancing nursing education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="py-16 bg-muted/30" ref={visionRef}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className={`bg-background p-8 rounded-lg shadow-sm border border-border transition-all duration-700 ${visionInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-center">
                  To be a premier institution in nursing education, recognized for excellence in teaching, research, and community service, producing compassionate and skilled healthcare professionals who make a positive impact on society.
                </p>
              </div>
              
              <div className={`bg-background p-8 rounded-lg shadow-sm border border-border transition-all duration-700 delay-300 ${visionInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <div className="text-center mb-6">
                  <div className="inline-block p-3 bg-secondary/10 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-center">
                  To provide high-quality nursing education through innovative teaching methodologies, state-of-the-art infrastructure, and industry exposure, nurturing students to become competent, ethical, and compassionate healthcare professionals ready to meet the challenges of the evolving healthcare landscape.
                </p>
              </div>
            </div>
            
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Core Values</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Excellence", "Compassion", "Integrity", "Innovation", "Teamwork", "Respect", "Accountability", "Service"].map((value, index) => (
                  <div 
                    key={index} 
                    className={`bg-background p-4 text-center rounded-lg border border-border shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${visionInView ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                  >
                    <p className="font-medium text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16" ref={teamRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Leadership</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {directors.map((director, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center md:items-start gap-6 bg-background p-6 rounded-lg shadow-sm border border-border transition-all duration-700 ${
                    teamInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary">
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-primary">{director.name}</h3>
                    <p className="text-secondary font-medium mb-2">{director.role}</p>
                    <p className="text-muted-foreground">{director.bio}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-primary hover:bg-primary-light text-white transition-transform hover:scale-105">
                View Full Team
              </Button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Achievements</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">Accreditation Excellence</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Recognized by the Indian Nursing Council (INC) for maintaining high standards of nursing education and training facilities.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">Placement Success</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Achieved a remarkable 98% placement record, with our graduates working in prestigious hospitals and healthcare facilities across the country.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm border border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary">Community Impact</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Conducted over 50 health awareness camps and community service initiatives, benefiting thousands of people in surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
