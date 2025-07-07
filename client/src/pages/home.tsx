import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Phone } from "lucide-react";
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
              Vi tilbyr moderne og skånsom tannbehandling i trygge omgivelser
              <span className="whitespace-nowrap"> – for hele familien.</span>
            </p>
          </FadeInOutSection>

          <FadeInOutSection delay={0.9} translateY={15} threshold={0.1}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/bestill-time">
                <Button className="w-[240px] sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-brand-pink text-white hover:bg-brand-pink/90 rounded-xl text-base sm:text-xl font-medium flex items-center justify-center">
                  <Calendar className="mr-2" size={18} />
                  Bestill time
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-[240px] sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 rounded-xl text-base sm:text-xl font-medium flex items-center justify-center"
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
                src="/tannlegeslattebrekk-team.webp"
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
                og utsikt over slottsparken i Oslo sentrum. Her møter du vårt erfarne team i trygge
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

      {/* Erfaring Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOutSection delay={0.2} translateY={30}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Trygghet og erfaring
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Over 30 års erfaring med tannbehandling for hele familien – alltid med tid
                  til spørsmål, forklaring og trygg oppfølging.
                </p>
              </div>
              <div>
                <img
                  src="/tannlegeslattebrekk-prat.webp"
                  alt="Tannlege i samtale med pasient"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </FadeInOutSection>
        </div>
      </section>

      {/* Behandlinger Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <FadeInOutSection delay={0.2} translateY={30}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Behandlinger og priser
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vi tilbyr alle typer tannbehandling (unntatt kjeveortopedi), i samarbeid med spesialister. Her er noen eksempler – se hele listen under.
            </p>
            <div className="grid gap-4 text-left text-gray-700 mb-10">
              <div className="flex justify-between border-b pb-2">
                <span>Undersøkelse + puss og røntgen</span>
                <span className="font-medium">fra 1390 kr</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Studentundersøkelse</span>
                <span className="font-medium">fra 790 kr*</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Komposittfylling (1 flate)</span>
                <span className="font-medium">fra 980 kr**</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Hjemmebleking (2 kjever)</span>
                <span className="font-medium">fra 4000 kr</span>
              </div>
            </div>
            <div className="text-sm text-gray-500 mb-6">
              * Gjelder fulltidsstudenter <br />
              ** Pris avhenger av størrelse og område. Røntgen og bedøvelse kan komme i tillegg
            </div>
            <Link href="/behandlinger">
              <Button className="px-8 py-4 bg-brand-pink text-white hover:bg-brand-pink/90 rounded-xl text-lg font-medium">
                Se alle behandlinger og priser
              </Button>
            </Link>
          </FadeInOutSection>
        </div>
      </section>

      {/* Om oss Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOutSection delay={0.2} translateY={30}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Om oss
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="/maisolgunn-slattebrekk.webp"
                  alt="Dr. Mai Solgunn Glasø Slåttebrekk"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Dr. Mai Solgunn Glasø Slåttebrekk</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">Tannlege M.N.T.F.</p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Dr. Slåttebrekk ble ferdigutdannet tannlege i 1993 etter studier ved Odontologisk fakultet i Oslo, og har drevet privat praksis siden. Med over 30 års erfaring tilbyr hun trygg og profesjonell tannpleie for hele familien.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Hun har spesialkompetanse i implantatprotetikk og samarbeider tett med oralkirurg ved behov for avanserte behandlinger.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li className="text-brand-pink font-medium">Implantatprotetikk</li>
                  <li className="text-brand-pink font-medium">Generell tannpleie</li>
                  <li className="text-brand-pink font-medium">Kosmetisk tannpleie</li>
                  <li className="text-brand-pink font-medium">Forebyggende behandling</li>
                </ul>
              </div>

              <div>
                <img
                  src="/malin-pousette.webp"
                  alt="Malin Pousette"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Malin Pousette</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">Tannhelsesekretær</p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Malin har jobbet hos Tannlege Slåttebrekk siden 2016 og er en viktig del av teamet. Hun sørger for at alt går smidig og at pasientene føler seg velkommen fra det øyeblikket de kommer inn døra.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                Med sin varme og profesjonelle tilnærming hjelper Malin pasientene med timebestilling, behandlingsinformasjon og praktiske spørsmål.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li className="text-brand-pink font-medium">Timebestilling og koordinering</li>
                    <li className="text-brand-pink font-medium">Pasientmottak og veiledning</li>
                    <li className="text-brand-pink font-medium">Administrasjon og oppfølging</li>
                    <li className="text-brand-pink font-medium">Praktisk informasjon og støtte</li>
                  </ul>
              </div>
            </div>
          </FadeInOutSection>
        </div>
      </section>


      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOutSection delay={0.2} translateY={30}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">
              Kontakt oss
            </h2>

            <div className="flex flex-col gap-6 items-center text-center">
              <Button
                onClick={() => window.open("tel:22834173")}
                className="bg-brand-pink text-white hover:bg-brand-pink/90 px-8 py-4 text-lg sm:text-xl rounded-xl font-medium flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Ring oss
              </Button>
              <p className="text-lg text-gray-700">– eller send oss en melding nedenfor:</p>
            </div>

            <form
              action="https://formsubmit.co/post@tannlegeslattebrekk.no"
              method="POST"
              className="mt-10 space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label htmlFor="navn" className="block text-sm font-medium text-gray-700">
                  Navn
                </label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-brand-pink focus:border-brand-pink px-4 py-3"
                />
              </div>
              <div>
                <label htmlFor="epost" className="block text-sm font-medium text-gray-700">
                  E-post
                </label>
                <input
                  type="email"
                  id="epost"
                  name="epost"
                  required
                  className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-brand-pink focus:border-brand-pink px-4 py-3"
                />
              </div>
              <div>
                <label htmlFor="melding" className="block text-sm font-medium text-gray-700">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={5}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-xl shadow-sm focus:ring-brand-pink focus:border-brand-pink px-4 py-3"
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-brand-pink text-white hover:bg-brand-pink/90 px-6 py-3 rounded-xl text-base font-medium"
                >
                  Send melding
                </Button>
              </div>
            </form>
          </FadeInOutSection>
        </div>
      </section>
    </div>
  );
}