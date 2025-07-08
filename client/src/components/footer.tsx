import { Link } from "wouter";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";

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
              <a
                href="https://www.facebook.com/TannlegeSlattebrekk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#om-oss" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Om oss
                </a>
              </li>
              <li>
                <a href="/#behandlinger" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Behandlinger og priser
                </a>
              </li>
              <li>
                <a href="/#kontakt" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/#kontakt" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Bestill time
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="mr-2" size={16} />
                <a
                  href="https://maps.google.com?q=Stortingsgata+30,+0161+Oslo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Stortingsgata 30, 0161 Oslo
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2" size={16} />
                <a href="tel:22834173" className="hover:underline">
                  22 83 41 73
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={16} />
                <a href="mailto:tannlegeslattebrekk@gmail.com" className="hover:underline">
                  tannlegeslattebrekk@gmail.com
                </a>
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
