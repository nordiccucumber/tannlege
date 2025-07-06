import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInOutSection } from "@/components/FadeInOutSection";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOutSection delay={0.1} translateY={10} threshold={0.1}>
            <h1 className="text-gray-700 text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
              VELKOMMEN TIL
            </h1>
          </FadeInOutSection>
          
          <FadeInOutSection delay={0.3} translateY={15} threshold={0.1}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-pink mb-3 sm:mb-4 leading-none">
              Tannlege<br />
              Slåttebrekk
            </h2>
          </FadeInOutSection>
          
          <FadeInOutSection delay={0.5} translateY={12} threshold={0.1}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-normal mb-4 sm:mb-6 leading-tight sm:leading-snug">
              Din tannlege ved Nationaltheatret
            </h3>
          </FadeInOutSection>
          
          <FadeInOutSection delay={0.7} translateY={12} threshold={0.1}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser<br />
              – for hele familien.
            </p>
          </FadeInOutSection>
          
          <FadeInOutSection delay={0.9} translateY={15} threshold={0.1}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
              <Link href="/bestill-time" className="w-full sm:w-auto">
                <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 px-8 sm:px-12 lg:px-14 py-4 sm:py-5 rounded-xl font-medium text-lg sm:text-xl w-full sm:w-auto">
                  <Calendar className="mr-2" size={18} />
                  Bestill time
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-8 sm:px-12 lg:px-14 py-4 sm:py-5 rounded-xl font-medium text-lg sm:text-xl w-full sm:w-auto"
                onClick={() => window.open("tel:22834173")}
              >
                <Phone className="mr-2" size={18} />
                Ring oss
              </Button>
            </div>
          </FadeInOutSection>
        </div>
      </section>

      {/* Clinic Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOutSection delay={0.2} translateY={30}>
            <div className="mb-16">
              <img 
                src="attached_assets/image_1751838218963.png" 
                alt="Dr. Mai Solgunn Glasø Slåttebrekk og Malin Pousette i klinikkens moderne lokaler" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Moderne og lyse lokaler
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Klinikken holder til i 8. etasje i Stortingsgata 30, med vakre lokaler 
                og utsikt over Oslo sentrum. Her møter du vårt erfarne team i trygge 
                og komfortable omgivelser.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vi har investert i moderne utstyr og teknologi for å gi deg den beste 
                tannbehandlingen, samtidig som vi setter pasientens komfort i høysetet.
              </p>
            </div>
          </FadeInOutSection>
        </div>
      </section>
    </div>
  );
}
