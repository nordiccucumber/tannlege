import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-gray-700 text-lg font-medium mb-3 tracking-[0.3em] uppercase">
            VELKOMMEN TIL
          </h1>
          <h2 className="text-7xl md:text-8xl font-bold text-brand-pink mb-4 leading-none">
            Tannlege<br />
            Slåttebrekk
          </h2>
          <h3 className="text-3xl md:text-4xl text-gray-800 font-normal mb-6 leading-snug">
            Din tannlege ved Nationaltheatret
          </h3>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser
            <br className="hidden md:block" />
            – for hele familien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/bestill-time">
              <Button className="bg-brand-pink text-white hover:bg-brand-pink/90 px-14 py-5 rounded-xl font-medium text-xl">
                <Calendar className="mr-2" size={20} />
                Bestill time
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 px-14 py-5 rounded-xl font-medium text-xl"
              onClick={() => window.open("tel:22834173")}
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
