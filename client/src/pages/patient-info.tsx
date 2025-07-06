import { Card, CardContent } from "@/components/ui/card";
import { Info, Heart, AlertTriangle, Shield, CalendarX, Check } from "lucide-react";

export default function PatientInfo() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pasientinformasjon</h1>
          <p className="text-xl text-gray-600">Viktig informasjon for din behandling</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Before Your Visit */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Info className="text-brand-pink mr-3" size={24} />
                  Før ditt besøk
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Møt opp 15 minutter før avtalt tid</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Ta med gyldig legitimasjon og helsekort</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Opplys om medisinbruk og allergier</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Spis lett måltid før behandling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* After Treatment */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="text-brand-pink mr-3" size={24} />
                  Etter behandling
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Følg instruksjonene du får fra tannlegen</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Unngå for varmt/kaldt de første timene</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Kontakt oss ved spørsmål eller problemer</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                    <span>Book kontrolltime som anbefalt</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            {/* Emergency Info */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <AlertTriangle className="text-red-600 mr-3" size={24} />
                  Akutt tannverk?
                </h2>
                <div className="space-y-3">
                  <p className="text-red-800">
                    Ring oss på <strong>22 46 80 86</strong> for akutt time
                  </p>
                  <p className="text-red-700 text-sm">
                    Utenfor åpningstider: Kontakt legevakt 116 117
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Insurance Info */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="text-brand-green mr-3" size={24} />
                  Trygderefusjon
                </h2>
                <div className="space-y-3 text-gray-600">
                  <p>Vi tilbyr trygderefusjon for kvalifiserte behandlinger:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span>Implantatbehandling (med henvisning)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span>Nødvendig tannbehandling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-brand-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                      <span>Forebyggende behandling for risikogrupper</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            {/* Cancellation Policy */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CalendarX className="text-brand-pink mr-3" size={24} />
                  Avbestilling
                </h2>
                <p className="text-gray-600">
                  Avbestill minst 24 timer før avtalt tid. 
                  Ved for sen avbestilling kan det påløpe gebyr på 500 kr.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Viktige retningslinjer</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hygiene og sikkerhet</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Vi følger strenge hygieneregler og smittevernrutiner</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Alt utstyr steriliseres mellom hver pasient</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Kom ikke hvis du er syk eller har symptomer</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Hånddesinfeksjon tilgjengelig ved ankomst</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Betaling og forsikring</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Vi tar imot kontant, kort og Vipps</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Avtalegiro tilgjengelig for større behandlinger</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Hjelp med forsikringskrav og dokumentasjon</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-brand-green mr-3 mt-1 flex-shrink-0" size={16} />
                  <span>Transparent prising uten skjulte kostnader</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
