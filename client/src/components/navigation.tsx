import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/tjenester", label: "Tjenester" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/pasientinformasjon", label: "Pasientinfo" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-xl font-bold text-brand-pink cursor-pointer">
                  Tannlege Slåttebrekk
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-700 hover:text-brand-pink transition-colors duration-200 font-medium ${
                  location === item.href ? "text-brand-pink" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3 ml-8">
              <Link href="/bestill-time">
                <Button className="bg-brand-pink text-white hover:bg-brand-pink/90">
                  Bestill time
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="icon"
                className="border-brand-pink text-brand-pink hover:bg-brand-pink-light"
                onClick={() => window.open('tel:22834173')}
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
              {navItems.map((item) => (
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
              ))}
              <div className="border-t border-gray-100 pt-3 space-y-2">
                <Link href="/bestill-time">
                  <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 w-full mb-2">
                    Bestill time
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-brand-pink text-brand-pink hover:bg-brand-pink-light w-full"
                  onClick={() => window.open('tel:22834173')}
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
