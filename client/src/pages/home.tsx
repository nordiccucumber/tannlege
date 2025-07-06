import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-gray-700 text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            VELKOMMEN TIL
          </h1>
          <motion.h2 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-brand-pink mb-3 sm:mb-4 leading-none"
          >
            Tannlege<br />
            Slåttebrekk
          </motion.h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-normal mb-4 sm:mb-6 leading-tight sm:leading-snug">
            Din tannlege ved Nationaltheatret
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser<br />
            – for hele familien.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto"
          >
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
