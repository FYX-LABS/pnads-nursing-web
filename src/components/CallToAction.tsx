
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Begin Your Nursing Journey Today</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Take the first step towards a fulfilling career in healthcare. Apply now for our upcoming academic session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-secondary hover:bg-secondary-light text-primary font-bold text-lg px-8 py-6 transition-transform hover:scale-105">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6">
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
