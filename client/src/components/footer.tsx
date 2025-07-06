import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-brand-pink mb-4">Tannlege Slåttebrekk</h3>
            <p className="text-gray-300 mb-4">
              Profesjonell tannlegebehandling i Oslo siden 1993. 
              Vi tilbyr trygg og moderne tannpleie for hele familien.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Forside
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/tjenester" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Tjenester
                </Link>
              </li>
              <li>
                <Link href="/bestill-time" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Bestill time
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                Majorstuveien 36, 0367 Oslo
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                22 46 80 86
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={16} />
                post@tannlegeslaattebrekk.no
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tannlege Slåttebrekk. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
}
