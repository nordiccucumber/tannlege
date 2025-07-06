import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Compact and centered */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-gray-700 text-sm font-medium mb-4 tracking-[0.2em] uppercase">
            VELKOMMEN TIL
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-brand-pink mb-6 leading-tight">
            Tannlege<br />
            Slåttebrekk
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-800 font-medium mb-6">
            Din tannlege ved Nationaltheatret
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser – for hele familien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/bestill-time">
              <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 px-8 py-3 rounded-lg font-medium">
                <Calendar className="mr-2" size={18} />
                Bestill time
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-8 py-3 rounded-lg font-medium"
              onClick={() => window.open('tel:22834173')}
            >
              <Phone className="mr-2" size={18} />
              Ring oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}