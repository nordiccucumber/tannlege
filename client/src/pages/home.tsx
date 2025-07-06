
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and minimalistic exactly like the reference image */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-gray-700 text-lg font-medium mb-2 tracking-[0.3em] uppercase">
            VELKOMMEN TIL
          </h1>
          <h2 className="text-7xl md:text-8xl font-bold text-brand-pink mb-3 leading-none">
            Tannlege<br />
            Slåttebrekk
          </h2>
          <h3 className="text-3xl md:text-4xl text-gray-800 font-semibold mb-6 leading-tight">
            Din tannlege ved Nationaltheatret
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser – for hele familien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/bestill-time">
              <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 px-10 py-4 rounded-xl font-medium text-lg">
                <Calendar className="mr-2" size={20} />
                Bestill time
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-10 py-4 rounded-xl font-medium text-lg"
              onClick={() => window.open('tel:22834173')}
            >
              <Phone className="mr-2" size={20} />
              Ring oss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
