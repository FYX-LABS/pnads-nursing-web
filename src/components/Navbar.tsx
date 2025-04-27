
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/06f357d6-ad3a-4110-95ea-ea1299aa8e2d.png"
              alt="PNDAS Nursing College"
              className="h-16"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary">Home</a>
            <a href="#about" className="text-foreground hover:text-primary">About Us</a>
            <a href="#programs" className="text-foreground hover:text-primary">Programs</a>
            <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary-light text-white">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary">Home</a>
              <a href="#about" className="text-foreground hover:text-primary">About Us</a>
              <a href="#programs" className="text-foreground hover:text-primary">Programs</a>
              <a href="#contact" className="text-foreground hover:text-primary">Contact</a>
              <Button className="bg-primary hover:bg-primary-light text-white w-full">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
