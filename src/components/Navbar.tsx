
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/courses", label: "Courses" },
    { path: "/gallery", label: "Gallery" },
    { path: "/faculty", label: "Faculty" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img
              src="/lovable-uploads/06f357d6-ad3a-4110-95ea-ea1299aa8e2d.png"
              alt="PNDAS Nursing College"
              className="h-16 animate-pulse"
            />
            <h1 className="text-[#FFD700] font-bold text-lg md:text-xl lg:text-2xl">
              PRAMOTH NATH DAS ACADEMY OF NURSING
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-md transition-all duration-300 hover:bg-primary-light ${
                    isActive ? "text-secondary font-bold" : "text-primary-foreground"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-secondary hover:bg-secondary-light text-primary font-bold transition-transform hover:scale-105">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `px-4 py-2 rounded-md transition-all duration-300 ${
                      isActive ? "bg-primary-light text-secondary font-bold" : "text-primary-foreground"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button className="bg-secondary hover:bg-secondary-light text-primary font-bold mt-2 transition-transform hover:scale-105">
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
