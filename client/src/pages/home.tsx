import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { FadeInOutSection } from "@/components/FadeInOutSection";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  
  // Static data for now - Google Sheets integration will be set up later
  const behandlinger = [
    { navn: 'Undersøkelse + puss og røntgen', pris: 'fra 1390 kr' },
    { navn: 'Studentundersøkelse', pris: 'fra 790 kr*' },
    { navn: 'Komposittfylling (1 flate)', pris: 'fra 980 kr**' },
    { navn: 'Komposittfylling (2 flater)', pris: 'fra 1180 kr**' },
    { navn: 'Komposittfylling (3 flater)', pris: 'fra 1380 kr**' },
    { navn: 'Kronehette (metall)', pris: 'fra 4490 kr' },
    { navn: 'Kronehette (porselen)', pris: 'fra 5290 kr' },
    { navn: 'Broleddet (metall)', pris: 'fra 4490 kr' },
    { navn: 'Broleddet (porselen)', pris: 'fra 5290 kr' },
    { navn: 'Delbro (3 ledd)', pris: 'fra 13470 kr' },
    { navn: 'Helprotese', pris: 'fra 8990 kr' },
    { navn: 'Delprotese', pris: 'fra 4990 kr' },
    { navn: 'Implantat inkl. krone', pris: 'fra 16000 kr' },
    { navn: 'Tannbleking (hjemme)', pris: 'fra 2990 kr' },
    { navn: 'Tannbleking (klinikk)', pris: 'fra 3990 kr' },
    { navn: 'Rotbehandling (fortann)', pris: 'fra 3490 kr' },
    { navn: 'Rotbehandling (jeksel)', pris: 'fra 4490 kr' },
    { navn: 'Rotbehandling (fortann revisjon)', pris: 'fra 4490 kr' },
    { navn: 'Rotbehandling (jeksel revisjon)', pris: 'fra 5490 kr' },
    { navn: 'Tanntrekking (enkel)', pris: 'fra 890 kr' },
    { navn: 'Tanntrekking (vanskelig)', pris: 'fra 1490 kr' },
    { navn: 'Visdomstanntrekking', pris: 'fra 1990 kr' },
    { navn: 'Tannskade (akutt)', pris: 'fra 1490 kr' },
    { navn: 'Bittskjenne (snorkeskjenne)', pris: 'fra 2990 kr' },
    { navn: 'Bittskjenne (tannkjøtning)', pris: 'fra 3990 kr' }
  ];

  const apningstider = [
    { dag: 'Mandag', tid: '10.00 – 17.00' },
    { dag: 'Tirsdag', tid: '09.00 – 15.00' },
    { dag: 'Onsdag', tid: '08.30 – 15.00' },
    { dag: 'Torsdag', tid: '08.30 – 15.00' },
    { dag: 'Fredag', tid: '09.00 – 15.00' },
  ];

  const kontaktInfo = {
    adresse: 'Stortingsgata 30, 0161 Oslo',
    telefon: '22 83 41 73',
    epost: 'tannlegeslattebrekk@gmail.com'
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
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
              <Button 
                onClick={() => {
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-[240px] sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-xl font-medium flex items-center justify-center transition-all duration-300 ease-in-out"
              >
                <Calendar className="mr-2" size={18} />
                Bestill time
              </Button>
              <Button
                variant="outline"
                className="w-[240px] sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-xl font-medium flex items-center justify-center transition-all duration-300 ease-in-out"
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
                Sentralt i Oslo
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Klinikken holder til i 8. etasje i{' '}
                <a
                  href="https://maps.google.com?q=Stortingsgata+30,+0161+Oslo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors"
                >
                  Stortingsgata 30
                </a>{' '}
                ved Nationaltheatret, i lyse og innbydende lokaler
                med utsikt over slottsparken. Her møter du vårt erfarne team i trygge
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
      <section id="behandlinger" className="scroll-mt-12 py-16 px-4 md:px-12 max-w-4xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-2">Behandlinger og priser</h2>
        <p className="text-center text-gray-600 mb-6">
          Vi tilbyr alle typer tannbehandling (unntatt kjeveortopedi), i samarbeid med spesialister.
          Her er noen eksempler – klikk for å se hele prislisten og mer informasjon.
        </p>

        <div className="space-y-4 text-sm md:text-base">
          {behandlinger.slice(0, showAll ? behandlinger.length : 3).map((behandling, index) => (
            <div key={index} className="flex justify-between border-b pb-2">
              <span>{behandling.navn}</span>
              <span>{behandling.pris}</span>
            </div>
          ))}

          <div className="text-sm text-center text-gray-500 mt-2">
            <p>* Gjelder fulltidsstudenter</p>
            <p>** Pris avhenger av størrelse og område. Røntgen og bedøvelse kan komme i tillegg</p>
          </div>
        </div>

        {showAll && (
          <div className="mt-10">
            <div className="bg-gray-50 py-10 px-8 rounded-xl">
              <h2 className="text-2xl font-bold text-center mb-10">Generell info</h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-brand-pink">Før ditt besøk</h3>
                      <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                      <li>Møt opp 15 minutter før avtalt tid</li>
                      <li>Ta med gyldig legitimasjon og helsekort</li>
                      <li>Opplys om medisinbruk og allergier</li>
                      <li>Spis lett måltid før behandling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-brand-pink">Etter behandling</h3>
                    <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                      <li>Følg instruksjonene fra tannlegen</li>
                      <li>Unngå for varmt/kaldt de første timene</li>
                      <li>Kontakt oss ved spørsmål</li>
                      <li>Bestill kontrolltime som anbefalt</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-brand-pink">Fint å vite</h3>
                    <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                      <li>Vi har god erfaring med pasienter som har tannlegeskrekk</li>
                      <li>Vi hjelper deg å finne ut om du har rett til trygderefusjon</li>
                      <li>Bedrifter kan få egne avtaler – ta kontakt for mer info</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4 text-lg text-brand-pink">Praktisk informasjon</h3>
                    <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                      <li>Vi tar imot kontant, kort og Vipps</li>
                      <li>Avtalegiro mulig ved større behandlinger</li>
                      <li>Hjelp med forsikringskrav og dokumentasjon</li>
                      <li>Gjennomsiktig prising uten skjulte kostnader</li>
                      <li>Avbestilling senere enn 24t = 500 kr gebyr</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {behandlinger.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand-pink text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg"
            >
              {showAll ? "Vis færre behandlinger" : "Se alle behandlinger og priser"}
            </button>
          </div>
        )}
      </section>

      {/* Om oss Section */}
      <section id="om-oss" className="scroll-mt-12 py-16 bg-white">
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

      {/* Kundeomtaler */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fine ord fra våre pasienter</h2>
            <p className="text-lg text-gray-600 mt-4">Vi setter stor pris på tilbakemeldinger – her er noen av dem</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Omtale 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-700 italic mb-4">"Utrolig hyggelig og profesjonell tannlege! Følte meg trygg hele veien."</p>
              <p className="text-sm font-semibold text-gray-800">– Kari M.</p>
            </div>

            {/* Omtale 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-700 italic mb-4">"Effektiv behandling og god forklaring. Anbefales på det varmeste!"</p>
              <p className="text-sm font-semibold text-gray-800">– Jens L.</p>
            </div>

            {/* Omtale 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-700 italic mb-4">"Super service og flotte lokaler. Hele familien går hit."</p>
              <p className="text-sm font-semibold text-gray-800">– Camilla H.</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Kontakt Section */}
      <section id="kontakt" className="scroll-mt-12 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Venstre kolonne – kontaktinfo + åpningstider + kart */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontaktinformasjon</h2>
              <p className="text-lg text-gray-700 mb-6">
                Har du spørsmål angående tannbehandling, ledige timer, bytte av timer eller noe helt annet, hører vi gjerne fra deg.
              </p>

              <div className="space-y-4 text-gray-700 text-base">
                <div>
                  <strong>Adresse:</strong><br />
                  <a
                    href={`https://maps.google.com?q=${encodeURIComponent(kontaktInfo.adresse)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-pink hover:underline"
                  >
                    {kontaktInfo.adresse}
                  </a>
                </div>

                <div>
                  <strong>Telefon:</strong><br />
                  <a href={`tel:${kontaktInfo.telefon.replace(/\s/g, '')}`} className="text-brand-pink hover:underline">
                    {kontaktInfo.telefon}
                  </a>
                </div>

                <div>
                  <strong>E-post:</strong><br />
                  <a href={`mailto:${kontaktInfo.epost}`} className="text-brand-pink hover:underline">
                    {kontaktInfo.epost}
                  </a>
                </div>
              </div>

              <div className="mt-8 text-base text-gray-700">
                <h3 className="text-lg font-semibold mb-2">Våre åpningstider</h3>
                <ul className="space-y-1">
                  {apningstider.map((tid, index) => (
                    <li key={index}>
                      <strong>{tid.dag}:</strong> {tid.stengt ? 'Stengt' : tid.tid}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <iframe
                  title="Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(kontaktInfo.adresse)}&output=embed`}
                  width="100%"
                  height="240"
                  className="rounded-xl border"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Høyre kolonne – kontaktskjema i fremhevet boks */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <Button
                variant="outline"
                onClick={() => window.open(`tel:${kontaktInfo.telefon.replace(/\s/g, '')}`)}
                className="w-[240px] sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:text-black hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-xl font-medium flex items-center justify-center transition-all duration-300 ease-in-out mb-6"
              >
                <Phone className="mr-2" size={18} />
                Ring oss
              </Button>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send en melding</h2>
              <p className="text-lg text-gray-700 mb-6">Vi ser frem til å høre fra deg!</p>

              <form
                action={`https://formsubmit.co/${kontaktInfo.epost}`}
                method="POST"
                className="space-y-5"
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

                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-xl font-medium transition-all duration-300 ease-in-out"
                  >
                    Send melding
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}