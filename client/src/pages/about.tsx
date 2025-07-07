import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { FadeInOutSection } from "@/components/FadeInOutSection";

export default function About() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Om oss</h1>
          <p className="text-xl text-gray-600">Møt vårt erfarne team</p>
        </div>

        {/* Dr. Mai Solgunn Glasø Slåttebrekk */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <FadeInOutSection delay={0.2}>
            <img 
              src="/maisolgunn.webp" 
              alt="Dr. Mai Solgunn Glasø Slåttebrekk, erfaren tannlege" 
              className="rounded-2xl shadow-lg w-full" 
            />
          </FadeInOutSection>

          <FadeInOutSection delay={0.4}>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dr. Mai Solgunn Glasø Slåttebrekk</h2>
              <p className="text-xl text-brand-pink font-semibold mb-4">Tannlege M.N.T.F.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dr. Mai Solgunn Glasø Slåttebrekk ble ferdigutdannet tannlege i 1993 etter studier ved Odontologisk fakultet i Oslo, og har drevet privat praksis siden. Med over 30 års erfaring tilbyr hun trygg og profesjonell tannpleie for hele familien.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hun har spesialkompetanse i implantatprotetikk og samarbeider tett med oralkirurg ved behov for avanserte behandlinger.
              </p>

              <Card className="bg-[#F5FAF6] border-brand-green/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Spesialområder</h3>
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
                    <li className="flex items-center text-gray-600">
                      <Check className="text-[#6B8E23] mr-3" size={16} />
                      Forebyggende behandling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </FadeInOutSection>
        </div>

        {/* Malin Pousette */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInOutSection delay={0.2}>
            <div className="lg:order-2">
              <img 
                src="/malin.webp" 
                alt="Malin Pousette, erfaren tannhelsesekretær" 
                className="rounded-2xl shadow-lg w-full" 
              />
            </div>
          </FadeInOutSection>

          <FadeInOutSection delay={0.4}>
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Malin Pousette</h2>
              <p className="text-xl text-brand-pink font-semibold mb-4">Tannhelsesekretær</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Malin har jobbet hos Tannlege Slåttebrekk siden 2016 og er en viktig del av teamet. 
                Hun sørger for at alt går smidig og at pasientene føler seg velkommen fra det øyeblikket de kommer inn døra.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Med sin varme og profesjonelle tilnærming hjelper Malin pasientene med timebestilling, 
                behandlingsinformasjon og praktiske spørsmål.
              </p>

              <Card className="bg-[#F5FAF6] border-brand-pink/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ansvar</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-600">
                      <Check className="text-brand-pink mr-3" size={16} />
                      Timebestilling og koordinering
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="text-brand-pink mr-3" size={16} />
                      Pasientmottak og veiledning
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="text-brand-pink mr-3" size={16} />
                      Administrasjon og oppfølging
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="text-brand-pink mr-3" size={16} />
                      Praktisk informasjon og støtte
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </FadeInOutSection>
        </div>

        {/* Clinic Information */}
        <FadeInOutSection delay={0.2}>
          <div className="mt-20 bg-[#C3E26E]/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Våre lokaler</h2>
              <p className="text-lg text-gray-600">Moderne og komfortable omgivelser</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Moderne tannlegekontor med avansert utstyr" 
                  className="rounded-xl shadow-lg w-full" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fine og lyse lokaler</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Vi holder til i fine og lyse lokaler i Stortingsgata 30, 8. etasje i Oslo sentrum.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Klinikken er utstyrt med moderne teknologi og designet for å gi pasientene en komfortabel og trygg opplevelse.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Vår beliggenhet midt i Oslo sentrum gjør det enkelt å komme til oss med offentlig transport.
                </p>
              </div>
            </div>
          </div>
        </FadeInOutSection>
      </div>
    </div>
  );
}
