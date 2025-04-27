import Navbar from "@/components/Navbar";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <HeroSlideshow />

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Our Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">Bachelor of Science in Nursing</h3>
              <p className="text-gray-600 mb-4">Comprehensive four-year program preparing students for professional nursing practice.</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">Master of Science in Nursing</h3>
              <p className="text-gray-600 mb-4">Advanced program for registered nurses seeking leadership positions.</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-4">Nursing Certificate Programs</h3>
              <p className="text-gray-600 mb-4">Specialized certificates for specific areas of nursing practice.</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About PNDAS Nursing</h2>
              <p className="text-gray-600 mb-4">
                Since 2021, PNDAS Nursing has been at the forefront of nursing education,
                committed to developing skilled, compassionate healthcare professionals.
                Our state-of-the-art facilities and experienced faculty ensure students
                receive the highest quality education.
              </p>
              <p className="text-gray-600 mb-6">
                We pride ourselves on maintaining high academic standards while providing
                a supportive learning environment that promotes both personal and
                professional growth.
              </p>
              <Button className="bg-primary hover:bg-primary-light text-white">
                Learn More About Us
              </Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg">
              {/* Placeholder for about section image */}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose PNDAS Nursing?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from experienced healthcare professionals and educators.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Modern Facilities</h3>
              <p className="text-gray-600">Access to state-of-the-art simulation labs and equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Career Support</h3>
              <p className="text-gray-600">Comprehensive career services and placement assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-2">Email: info@pndasnursing.org</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#programs" className="hover:text-secondary-light">Programs</a></li>
                <li><a href="#about" className="hover:text-secondary-light">About Us</a></li>
                <li><a href="#contact" className="hover:text-secondary-light">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-secondary-light">Facebook</a>
                <a href="#" className="hover:text-secondary-light">Twitter</a>
                <a href="#" className="hover:text-secondary-light">LinkedIn</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Location</h3>
              <p>123 Education Street</p>
              <p>Nursing City, NC 12345</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p>&copy; 2024 PNDAS Nursing College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
