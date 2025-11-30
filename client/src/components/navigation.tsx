import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Scroll med hensyn til sticky navbar (id="top-nav")
  const scrollToSection = (sectionId: string) => {
    if (typeof document === "undefined") return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    const navBar = document.getElementById("top-nav") as HTMLElement | null;
    const navHeight = navBar?.offsetHeight ?? 80;

    const offset = 8; // litt luft
    const targetY = rect.top + scrollTop - navHeight - offset;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "om-oss", label: "Om oss" },
    { id: "behandlinger", label: "Behandlinger og priser" },
    { id: "kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      id="top-nav"
      className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / navn */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection("hero")}>
                <h1 className="text-xl font-bold text-brand-pink cursor-pointer">
                  Tannlege Slåttebrekk
                </h1>
              </button>
            </div>
          </div>

          {/* Desktop Navigation (fra 1100px og opp) */}
          <div className="hidden [@media(min-width:1100px)]:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-3 ml-8">
              <Button
                onClick={() => scrollToSection("kontakt")}
                className="bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Bestill time
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-brand-pink text-brand-pink hover:bg-brand-pink-light hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                onClick={() => window.open("tel:22834173")}
              >
                <Phone size={18} />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="[@media(min-width:1100px)]:hidden">
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
          <div className="[@media(min-width:1100px)]:hidden">
            <div className="px-4 pt-4 pb-6 bg-white border-t border-gray-100 flex flex-col items-center gap-4">
              {/* Midtstilte menylenker */}
              <div className="w-full max-w-xs space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-3 text-center text-gray-800 hover:text-brand-pink rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* CTA-knapper – samme visuelle bredde som andre knapper */}
              <div className="w-full max-w-xs flex flex-col gap-3 pt-2">
                <Button
                  onClick={() => {
                    scrollToSection("kontakt");
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-5 py-[14px] bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-base font-medium transition-all duration-300 ease-in-out"
                >
                  Bestill time
                </Button>
                <Button
                  variant="outline"
                  className="w-full px-5 py-[14px] border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:scale-105 hover:shadow-lg rounded-xl text-base font-medium flex items-center justify-center transition-all duration-300 ease-in-out"
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
