import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { FadeInOutSection } from "@/components/FadeInOutSection";
import { useBehandlinger, useApningstider, useKontaktInfo } from "@/hooks/useGoogleSheets";

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const { behandlinger, loading: behandlingerLoading, error: behandlingerError } = useBehandlinger();
  const { apningstider, loading: apningstiderLoading } = useApningstider();
  const { kontaktInfo, loading: kontaktLoading } = useKontaktInfo();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-[calc(100svh-4rem)] grid place-items-center px-4 sm:px-6 lg:px-8 scroll-mt-[4rem]"
      >
        {/* Løft hero litt opp ved første visning */}
        <div className="max-w-4xl mx-auto text-center -translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-5">
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
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              Vi tilbyr moderne og skånsom tannbehandling i behagelige omgivelser
            </p>
          </FadeInOutSection>

          <FadeInOutSection delay={0.9} translateY={15} threshold={0.1}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              {/* Bestill time */}
              <Button
                onClick={() => {
                  const element = document.getElementById('kontakt');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-[220px] sm:w-[200px] px-5 sm:px-8 py-[14px] bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-lg font-medium flex items-center justify-center transition-all duration-300 ease-in-out h-[52px]"
              >
                <Calendar className="mr-2" size={17} strokeWidth={2} />
                Bestill time
              </Button>

              {/* Ring oss */}
              <Button
                variant="outline"
                onClick={() => window.open('tel:22834173')}
                className="w-[220px] sm:w-[200px] px-5 sm:px-8 py-[14px] border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-lg font-medium flex items-center justify-center transition-all duration-300 ease-in-out h-[52px]"
              >
                <Phone className="mr-2" size={17} strokeWidth={2} />
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
                Klinikken holder til i 8. etasje i{" "}
                <a
                  href="https://maps.google.com?q=Stortingsgata+30,+0161+Oslo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:opacity-80 transition-opacity"
                >
                  Stortingsgata 30
                </a>{" "}
                ved Nationaltheatret, i lyse og innbydende lokaler med utsikt over
                Slottsparken. Her møter du vårt erfarne team i komfortable omgivelser.
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
                  til spørsmål, forklaring og tett oppfølging. Hos oss får våre pasienter best mulig tannbevarende behandling.
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
      <section id="behandlinger" className="scroll-mt-[96px] py-16 px-4 md:px-12 max-w-4xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-2">Behandlinger og priser</h2>
        <p className="text-center text-gray-600 mb-6">
          Vi tilbyr alle typer tannbehandling (unntatt kjeveortopedi), i samarbeid med spesialister.
          Her er noen eksempler – klikk for å se hele prislisten og mer informasjon.
        </p>

        {behandlingerLoading ? (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-pink"></div>
            <p className="mt-2 text-gray-600">Henter behandlinger...</p>
          </div>
        ) : (
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
        )}

        {showAll && (
          <div className="mt-10">
            <div className="bg-gray-50 py-10 px-8 rounded-xl">
              <h2 className="text-2xl font-bold text-center mb-10">Generell info</h2>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
                {/* Før ditt besøk */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg text-brand-pink">Før ditt besøk</h3>
                  <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                    <li>Møt opp i god tid før avtalt time</li>
                    <li>Puss gjerne tenner før ditt besøk</li>
                    <li>Opplys om medisinbruk og allergier</li>
                    <li>Spis gjerne et lett måltid før behandling</li>
                  </ul>
                </div>

                {/* Etter behandling */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg text-brand-pink">Etter behandling</h3>
                  <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                    <li>Følg instruksjonene fra tannlegen</li>
                    <li>Kontakt oss ved spørsmål</li>
                  </ul>
                </div>

                {/* Fint å vite */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg text-brand-pink">Fint å vite</h3>
                  <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                    <li>Vi har god erfaring med pasienter som har tannlegeskrekk</li>
                    <li>Vi hjelper deg å finne ut om du har rett til trygderefusjon</li>
                    <li>Bedrifter kan få egne avtaler – ta kontakt for mer info</li>
                    <li>Vi kan tilby prisoverslag etter første konsultasjon</li>
                  </ul>
                </div>

                {/* Praktisk informasjon */}
                <div>
                  <h3 className="font-semibold mb-4 text-lg text-brand-pink">Praktisk informasjon</h3>
                  <ul className="list-disc list-outside pl-4 space-y-2 leading-snug">
                    <li>Vi tar imot kontant, kort og Vipps</li>
                    <li>Avtalegiro mulig ved større behandlinger</li>
                    <li>Hjelp med forsikringskrav og dokumentasjon</li>
                    <li>Forutsigbar prising uten skjulte kostnader</li>
                    <li>Avbestilling senere enn 48t = 790 kr gebyr</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {!behandlingerLoading && !behandlingerError && behandlinger.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-brand-pink text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg"
            >
              {showAll ? "Vis mindre" : "Se alle behandlinger og priser"}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Mai Solgunn Glasø Slåttebrekk</h3>
                <p className="text-sm font-medium text-gray-600 mb-4">Tannlege M.N.T.F.</p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Mai Solgunn ble ferdigutdannet tannlege i 1993 etter studier ved Odontologisk fakultet i Oslo, og har drevet privat praksis siden. Med over 30 års erfaring tilbyr hun trygg og profesjonell tannpleie for alle.
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Hun har spesialkompetanse i implantatprotetikk og samarbeider tett med oralkirurg og andre spesialister ved behov for avanserte behandlinger.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li className="text-brand-pink font-medium">Generell tannbehandling</li>
                  <li className="text-brand-pink font-medium">Forebyggende behandling</li>
                  <li className="text-brand-pink font-medium">Konserverende behandling</li>
                  <li className="text-brand-pink font-medium">Kosmetisk tannpleie</li>
                  <li className="text-brand-pink font-medium">Implantatprotetikk</li>
                  <li className="text-brand-pink font-medium">Periodontittbehandling</li>
                  <li className="text-brand-pink font-medium">Krone- og brobehandling</li>
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
                  Malin har jobbet hos Tannlege Slåttebrekk siden 2016 og er en viktig del av teamet. Hun sørger for at alt går smidig og at pasientene føler seg velkomne fra det øyeblikket de kommer inn døra.
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
              <div className="flex mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Jeg har aldri blitt bedre ivaretatt enn hos tannlege Mai Solgunn Slåttebrekk. Hun har en kombinasjon av
                profesjonalitet og genuin varme som gjør henne unik."
              </p>
              <p className="text-sm font-semibold text-gray-800">– Anne</p>
            </div>

            {/* Omtale 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Beste tannlegekontoret i Oslo! Her er du garantert i gode hender – i tillegg til det utrolig fine kontoret,
                med den utsikten."
              </p>
              <p className="text-sm font-semibold text-gray-800">– Niels-Arne</p>
            </div>

            {/* Omtale 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.048 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.285-3.974z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Jeg anbefaler alltid tannlege Slåttebrekk til de av mine venner som vurderer å bytte tannlege. Her blir vi værende."
              </p>
              <p className="text-sm font-semibold text-gray-800">– Gunvor</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontakt</h2>
              <p className="text-lg text-gray-700 mb-6">
                Har du spørsmål angående tannbehandling, ledige timer, bytte av timer eller noe annet, hører vi gjerne fra deg.
              </p>

              <div className="space-y-4 text-gray-700 text-base">
                {kontaktLoading ? (
                  <div className="text-center py-4">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-brand-pink"></div>
                  </div>
                ) : kontaktInfo ? (
                  <>
                    <div>
                      <strong>Adresse:</strong>
                      <br />
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
                      <strong>Telefon:</strong>
                      <br />
                      <a href={`tel:${kontaktInfo.telefon.replace(/\s/g, "")}`} className="text-brand-pink hover:underline">
                        {kontaktInfo.telefon}
                      </a>
                    </div>

                    <div>
                      <strong>E-post:</strong>
                      <br />
                      <a href={`mailto:${kontaktInfo.epost}`} className="text-brand-pink hover:underline">
                        {kontaktInfo.epost}
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <strong>Adresse:</strong>
                      <br />
                      <a
                        href="https://maps.google.com?q=Stortingsgata%2030%2C%200161%20Oslo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-pink hover:underline"
                      >
                        Stortingsgata 30, 0161 Oslo
                      </a>
                    </div>

                    <div>
                      <strong>Telefon:</strong>
                      <br />
                      <a href="tel:22834173" className="text-brand-pink hover:underline">
                        22 83 41 73
                      </a>
                    </div>

                    <div>
                      <strong>E-post:</strong>
                      <br />
                      <a href="mailto:tannlegeslattebrekk@gmail.com" className="text-brand-pink hover:underline">
                        tannlegeslattebrekk@gmail.com
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* Åpningstider */}
              <div className="mt-8 text-base text-gray-700">
                <h3 className="text-lg font-semibold mb-2">Våre åpningstider:</h3>
                {apningstiderLoading ? (
                  <div className="text-center py-4">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-brand-pink"></div>
                  </div>
                ) : (
                  <ul className="space-y-1">
                    {apningstider.map((tid, index) => {
                      const tekst = (tid.tid || "").toString().trim();
                      const isClosed =
                        !!tid.stengt || tekst.toLowerCase().includes("stengt");

                      return (
                        <li key={index} className="flex items-baseline">
                          {/* bredde justert for å matche “Mandag: 10.00 …” mest mulig */}
                          <span className="font-semibold inline-block w-[4.6rem]">
                            {tid.dag}:
                          </span>
                          {isClosed ? (
                            <span className="text-brand-pink font-semibold ml-[0.25rem]">
                              Stengt
                            </span>
                          ) : (
                            <span className="tabular-nums ml-[0.25rem]">
                              {tekst || "-"}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>


              <div className="mt-8">
                <iframe
                  title="Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    kontaktInfo?.adresse || "Stortingsgata 30, 0161 Oslo"
                  )}&output=embed`}
                  width="100%"
                  height="240"
                  className="rounded-xl border"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Høyre kolonne – kontaktskjema */}
            <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
              <Button
                variant="outline"
                onClick={() => window.open(`tel:${kontaktInfo?.telefon?.replace(/\s/g, "") || "22834173"}`)}
                className="w-[240px] sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 hover:text-black hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-xl font-medium flex items-center justify-center transition-all duration-300 ease-in-out mb-6"
              >
                <Phone className="mr-2" size={18} />
                Ring oss
              </Button>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send en melding</h2>
              <p className="text-lg text-gray-700 mb-6">Vi ser frem til å høre fra deg!</p>

              <form action="https://formspree.io/f/xdkdnekz" method="POST" className="space-y-5">
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
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-brand-pink text-white hover:bg-brand-pink/90 hover:scale-105 hover:shadow-lg rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ease-in-out"
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
