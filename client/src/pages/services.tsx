import { Card, CardContent } from "@/components/ui/card";
import { Activity, Settings, Gem, Shield, Info } from "lucide-react";
import { FadeInOutSection } from "@/components/FadeInOutSection";

export default function Services() {
  const services = [
    {
      icon: <Activity className="text-brand-pink" size={32} />,
      title: "Undersøkelser og rens",
      bgColor: "bg-brand-pink-light",
      items: [
        { name: "Undersøkelse, 2 røntgenbilder, puss og rens", price: "1390:-" },
        { name: "Studentundersøkelse*", price: "790:-" },
        { name: "Bedriftsundersøkelse", price: "980:-" },
        { name: "Smitteforbyggende tiltak pr. besøk", price: "100:-" },
      ]
    },
    {
      icon: <Settings className="text-brand-green" size={32} />,
      title: "Fylling og behandling",
      bgColor: "bg-brand-green-light",
      items: [
        { name: "Kompositt fylling, 1 flate**", price: "980-1470:-" },
        { name: "Kompositt fylling, 2 flater**", price: "1490-1890:-" },
        { name: "Kompositt fylling, 3 flater**", price: "1890-2190:-" },
        { name: "Rotfylling Timepris", price: "2990:-" },
      ]
    },
    {
      icon: <Gem className="text-brand-pink" size={32} />,
      title: "Kosmetisk og proteser",
      bgColor: "bg-brand-pink-light",
      items: [
        { name: "Bleking (hjemme) 1 kjeve", price: "2500:-" },
        { name: "Bleking (hjemme) 2 kjever", price: "4000:-" },
        { name: "Mk-krone**", price: "7500:-" },
        { name: "Helkeramisk krone**", price: "7900:-" },
      ]
    },
    {
      icon: <Shield className="text-brand-green" size={32} />,
      title: "Kirurgi og annet",
      bgColor: "bg-brand-green-light",
      items: [
        { name: "Ekstraksjon**", price: "980-1900:-" },
        { name: "Lokalbedøvelse pr. område", price: "230:-" },
        { name: "Refill bleking pr. sprøyte", price: "250:-" },
      ]
    },
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tjenester og priser</h1>
          <p className="text-xl text-gray-600">Komplett oversikt over våre behandlinger</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center mr-4`}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-semibold text-gray-900">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">STUDENTTILBUD</h3>
                <p className="text-blue-800 text-sm">* Tilbudet gjelder fulltidsstudenter med betalt semesteravgift. På behandlinger utover dette gir vi -50% rabatt.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5FAF6] border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-green-900 mb-2">TANNLEGESKREKK?</h3>
                <p className="text-green-800 text-sm">Vi har god og lang erfaring med pasienter som er engstelige for å gå til tannlegen.</p>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">BEDRIFTER?</h3>
                <p className="text-purple-800 text-sm">Vi gir tilbud til enkelte bedrifter, ring oss for nærmere informasjon og eventuell avtale.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">** Anestesi og røntgen kommer i tillegg. Pris kan variere, hvert enkelt kasus må vurderes.</p>
            <Card className="bg-brand-green-light border-brand-green/20 inline-block">
              <CardContent className="p-6">
                <p className="text-gray-700 font-semibold flex items-center">
                  <Info className="text-brand-green mr-2" size={20} />
                  Vi tilbyr alle typer tannbehandling unntatt kjeveortopedi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Service Information */}
        <div className="mt-16 bg-[#F5FAF6] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Detaljert behandlingsinformasjon</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implantatbehandling</h3>
              <p className="text-gray-600 mb-4">
                Dr. Slåttebrekk har spesialkompetanse i implantatprotetikk og kan utføre implantat-behandling 
                med trygderefusjon i samarbeid med oralkirurg. Implantater er en trygg og langsiktig løsning 
                for å erstatte manglende tenner.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Grundig undersøkelse og planlegging</li>
                <li>Moderne 3D-røntgen for presise målinger</li>
                <li>Kirurgisk innsetting av implantat</li>
                <li>Tilpasset protetikk av høy kvalitet</li>
                <li>Regelmessig oppfølging og kontroll</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Generell tannpleie</h3>
              <p className="text-gray-600 mb-4">
                Forebyggende behandling er grunnlaget for god tannhelse. Vi anbefaler regelmessige 
                kontroller hver 6. måned for å oppdage og behandle problemer tidlig.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Grundig undersøkelse med røntgen ved behov</li>
                <li>Profesjonell tannrens og polering</li>
                <li>Fluorbehandling for styrking av tannemaljen</li>
                <li>Ernærings- og hygienerådgivning</li>
                <li>Tidlig oppdagelse av tannproblemer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kosmetisk tannpleie</h3>
              <p className="text-gray-600 mb-4">
                Et vakkert smil øker selvtilliten. Vi tilbyr ulike kosmetiske behandlinger 
                for å gi deg det smilet du drømmer om.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Profesjonell tannbleking i klinikken</li>
                <li>Hjemmebleking med tilpassede skinner</li>
                <li>Porselen fasader for perfekte tenner</li>
                <li>Komposittfyllinger i tannfarget materiale</li>
                <li>Estetisk gjenoppbygging av skadde tenner</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}