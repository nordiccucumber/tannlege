
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Calendar, Phone, Activity, Settings, Gem, Shield, Star, User, Check } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    if (heroImageRef.current) observer.observe(heroImageRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen initially */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-medium mb-6 tracking-wide">
            VELKOMMEN TIL
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-pink mb-8 leading-tight">
            Tannlege<br />
            Slåttebrekk
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 font-medium mb-8">
            Din tannlege ved Nationaltheatret
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser – for hele familien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bestill-time">
              <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 text-lg px-8 py-4 rounded-full">
                <Calendar className="mr-2" size={20} />
                Bestill time
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-brand-pink text-brand-pink hover:bg-brand-pink-light text-lg px-8 py-4 rounded-full"
              onClick={() => window.open('tel:22834173')}
            >
              <Phone className="mr-2" size={20} />
              Ring oss
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image Section - Appears on scroll */}
      <section ref={heroImageRef} className="py-16 bg-white opacity-0 translate-y-8 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img 
              src="/attached_assets/image_1751824287638.png" 
              alt="Moderne tannlegepraksis med lyse og innbydende lokaler" 
              className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto" 
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="py-16 bg-[#F5FAF6] opacity-0 translate-y-8 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Våre tjenester</h2>
            <p className="text-lg text-gray-600">Komplett tannpleie for hele familien</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-100 hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#C3E26E]/40 rounded-full flex items-center justify-center mb-4">
                  <Activity className="text-[#6B8E23]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Generell tannpleie</h3>
                <p className="text-gray-600">Undersøkelse, rens og forebyggende behandling</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mb-4">
                  <Settings className="text-brand-pink" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implantatbehandling</h3>
                <p className="text-gray-600">Spesialkompetanse i implantatprotetikk</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#C3E26E]/40 rounded-full flex items-center justify-center mb-4">
                  <Gem className="text-[#6B8E23]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kosmetisk tannpleie</h3>
                <p className="text-gray-600">Tannbleking og estetiske behandlinger</p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:shadow-md transition-all duration-300 bg-white transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-brand-pink" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Akuttbehandling</h3>
                <p className="text-gray-600">Rask hjelp ved tannverk og skader</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-gray-50 opacity-0 translate-y-8 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hva pasientene sier</h2>
            <p className="text-lg text-gray-600">Tilbakemeldinger fra fornøyde pasienter</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Dr. Slåttebrekk er fantastisk! Jeg har aldri hatt en så behagelig opplevelse hos tannlegen. Klinikken er moderne og personalet er utrolig vennlig."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center mr-3">
                    <User className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Anna K.</p>
                    <p className="text-sm text-gray-500">Pasient siden 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Jeg fikk implantat hos Dr. Slåttebrekk og hele prosessen var profesjonell og smertefri. Resultatet er perfekt!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#F5FAF6] rounded-full flex items-center justify-center mr-3">
                    <User className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lars M.</p>
                    <p className="text-sm text-gray-500">Pasient siden 2018</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Malin i resepsjonen er alltid hjelpsom og vennlig. Lokalet er lyst og rent, og behandlingen er topp kvalitet."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-pink-light rounded-full flex items-center justify-center mr-3">
                    <User className="text-brand-pink" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Silje R.</p>
                    <p className="text-sm text-gray-500">Pasient siden 2019</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-16 bg-white opacity-0 translate-y-8 transition-all duration-1000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kort om klinikken</h2>
            <p className="text-lg text-gray-600">Erfaren tannlege i Oslo siden 1993</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Mai Solgunn Glasø Slåttebrekk</h3>
              <p className="text-lg text-brand-pink font-semibold mb-4">Tannlege M.N.T.F.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Med over 30 års erfaring tilbyr Dr. Slåttebrekk trygg og profesjonell tannpleie. 
                Hun har spesialkompetanse i implantatprotetikk og kan utføre implantat-behandling 
                med trygderefusjon i samarbeid med oralkirurg.
              </p>
              <div className="bg-[#F5FAF6] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Spesialområder</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Check className="text-[#6B8E23] mr-3" size={16} />
                    Implantatprotetikk
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="text-[#6B8E23] mr-3" size={16} />
                    Generell tannpleie
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="text-[#6B8E23] mr-3" size={16} />
                    Kosmetisk tannpleie
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="/attached_assets/image_1751814806978.png" 
                alt="Dr. Mai Solgunn Glasø Slåttebrekk, erfaren tannlege" 
                className="rounded-2xl shadow-lg w-full" 
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/om-oss">
              <Button className="bg-brand-pink text-white hover:bg-brand-pink/90">
                Les mer om oss
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
