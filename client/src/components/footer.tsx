import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useKontaktInfo } from "@/hooks/useGoogleSheets";

export default function Footer() {
  const { kontaktInfo, loading } = useKontaktInfo();

  // Verdier fra Sheets med trygge fallbacks
  const adresse = kontaktInfo?.adresse || "Stortingsgata 30, 0161 Oslo";
  const telefon = kontaktInfo?.telefon || "22 83 41 73";
  const epost   = kontaktInfo?.epost   || "tannlegeslattebrekk@gmail.com";

  const telHref  = `tel:${telefon.replace(/\s/g, "") || "22834173"}`;
  const mapsHref = `https://maps.google.com?q=${encodeURIComponent(adresse)}`;
  const mailHref = `mailto:${epost}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Om oss / SoMe */}
          <div>
            <h3 className="text-2xl font-bold text-brand-pink mb-4">Tannlege Slåttebrekk</h3>
            <p className="text-gray-300 mb-4">
              Profesjonell tannlegebehandling i Oslo siden 1993.
            </p>
            <a
              href="https://www.facebook.com/TannlegeSlattebrekk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-[#1877F2] text-white text-sm font-medium rounded-lg shadow hover:bg-[#145DBF] transition-all duration-300"
            >
              <Facebook size={16} />
              Følg oss på Facebook
            </a>
          </div>

          {/* Hurtiglenker */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("om-oss")}
                  className="text-left text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("behandlinger")}
                  className="text-left text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Behandlinger og priser
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="text-left text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("kontakt")}
                  className="text-left text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Bestill time
                </button>
              </li>
            </ul>
          </div>

          {/* Kontakt (drives av Google Sheets) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>

            {loading ? (
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  <span className="h-4 w-56 bg-gray-700 rounded animate-pulse" />
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  <span className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  <span className="h-4 w-64 bg-gray-700 rounded animate-pulse" />
                </p>
              </div>
            ) : (
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {adresse}
                  </a>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-2" size={16} />
                  <a href={telHref} className="hover:underline">
                    {telefon}
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-2" size={16} />
                  <a href={mailHref} className="hover:underline">
                    {epost}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Tannlege Slåttebrekk. Alle rettigheter
            reservert.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Design og utvikling: Fartein Orestad
          </p>
        </div>
      </div>
    </footer>
  );
}
