
import Navbar from "@/components/Navbar";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { AboutSection } from "@/components/AboutSection";
import { Programs } from "@/components/Programs";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main>
        <HeroSlideshow />
        <AboutSection />
        <Programs />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
