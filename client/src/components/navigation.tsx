import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useNavigateToSection } from "@/utils/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const navigateToSection = useNavigateToSection();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { section: "om-oss", label: "Om oss", isExternal: false },
    { section: "behandlinger", label: "Behandlinger og priser", isExternal: false },
    { section: "kontakt", label: "Kontakt", isExternal: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 
                className="text-lg sm:text-xl font-bold text-brand-pink cursor-pointer whitespace-nowrap"
                onClick={() => navigateToSection("hero")}
              >
                Tannlege Slåttebrekk
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) =>
              item.isExternal ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm lg:text-base text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium ${
                    location === item.href ? "text-brand-pink" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.section}
                  onClick={() => navigateToSection(item.section)}
                  className="text-sm lg:text-base text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              )
            )}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 ml-4">
              <Button 
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-sm sm:text-base font-medium flex items-center justify-center transition-all duration-300 ease-in-out"
                onClick={() => navigateToSection("kontakt")}
              >
                Bestill time
              </Button>
              <Button 
                variant="outline"
                size="icon"
                className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:text-black hover:scale-105 hover:shadow-lg rounded-xl transition-all duration-300 ease-in-out"
                onClick={() => window.open("tel:22834173")}
              >
                <Phone size={18} />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={`text-gray-700 hover:bg-transparent focus:outline-none focus:ring-0 focus:bg-transparent ${
                isMenuOpen ? "text-brand-pink" : ""
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) =>
                item.isExternal ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-gray-700 hover:text-brand-pink ${
                      location === item.href ? "text-brand-pink" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.section}
                    onClick={() => {
                      navigateToSection(item.section);
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-gray-700 hover:text-brand-pink w-full text-left"
                  >
                    {item.label}
                  </button>
                )
              )}
              <div className="border-t border-gray-100 pt-3 space-y-2">
                <Button 
                  className="w-full px-6 py-4 bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-base font-medium flex items-center justify-center transition-all duration-300 ease-in-out"
                  onClick={() => {
                    navigateToSection("kontakt");
                    setIsMenuOpen(false);
                  }}
                >
                  Bestill time
                </Button>
                <Button 
                  variant="outline"
                  className="w-full px-6 py-4 border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:text-black hover:scale-105 hover:shadow-lg rounded-xl text-base font-medium flex items-center justify-center transition-all duration-300 ease-in-out"
                  onClick={() => window.open("tel:22834173")}
                >
                  <Phone className="mr-2" size={16} />
                  Ring oss
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
