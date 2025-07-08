import React from "react";
import { CheckCircle, AlertTriangle, HeartPulse, Shield, Calendar, Info } from "lucide-react";
import { FadeInOutSection } from "@/components/FadeInOutSection";
import { Button } from "@/components/ui/button";

export default function Behandling() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-20 text-center px-4 sm:px-6 lg:px-8">
        <FadeInOutSection delay={0.1} translateY={10}>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Behandling og priser</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Komplett oversikt over våre behandlinger og praktisk informasjon.
          </p>
        </FadeInOutSection>
      </section>

      {/* Pris-seksjon */}
      <section className="py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <FadeInOutSection delay={0.2} translateY={20}>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-brand-pink mb-4 flex items-center">
                <HeartPulse className="mr-2" /> Undersøkelser og rens
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>Undersøkelse + røntgen + puss</span>
                  <span>1390,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Studentundersøkelse*</span>
                  <span>790,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Bedriftsundersøkelse</span>
                  <span>980,-</span>
                </li>
              </ul>
            </div>
          </FadeInOutSection>

          <FadeInOutSection delay={0.3} translateY={20}>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                <Shield className="mr-2" /> Fylling og behandling
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>Kompositt fylling, 1 flate</span>
                  <span>980–1470,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Kompositt fylling, 2 flater</span>
                  <span>1490–1890,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Kompositt fylling, 3 flater</span>
                  <span>1890–2190,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Rotfylling (timepris)</span>
                  <span>2990,-</span>
                </li>
              </ul>
            </div>
          </FadeInOutSection>

          <FadeInOutSection delay={0.4} translateY={20}>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-brand-pink mb-4 flex items-center">
                <HeartPulse className="mr-2" /> Kosmetisk og protese
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>Hjemmebleking (1 kjeve)</span>
                  <span>2500,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Hjemmebleking (2 kjever)</span>
                  <span>4000,-</span>
                </li>
                <li className="flex justify-between">
                  <span>MK-krone</span>
                  <span>7500,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Helkeramisk krone</span>
                  <span>7900,-</span>
                </li>
              </ul>
            </div>
          </FadeInOutSection>

          <FadeInOutSection delay={0.5} translateY={20}>
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center">
                <Shield className="mr-2" /> Kirurgi og annet
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>Ekstraksjon</span>
                  <span>980–1900,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Lokalbedøvelse (per område)</span>
                  <span>230,-</span>
                </li>
                <li className="flex justify-between">
                  <span>Refill bleking (pr. sprøyte)</span>
                  <span>250,-</span>
                </li>
              </ul>
            </div>
          </FadeInOutSection>
        </div>
      </section>

      {/* Pasientinformasjon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <FadeInOutSection delay={0.6} translateY={20}>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Viktig informasjon</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="mr-2" /> Før ditt besøk
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Møt opp 15 min før timen</li>
                <li>Ta med legitimasjon og helsekort</li>
                <li>Opplys om medisiner og allergier</li>
                <li>Spis lett før behandling</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Info className="mr-2" /> Etter behandling
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Følg instruksjonene du får</li>
                <li>Unngå varmt/kaldt første timene</li>
                <li>Kontakt oss ved spørsmål</li>
                <li>Book ny time ved behov</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="mr-2 text-red-600" /> Akutt tannverk?
              </h3>
              <p className="text-gray-700">
                Ring oss på <a href="tel:22468086" className="text-brand-pink font-semibold">22 46 80 86</a> for akutt hjelp. Utenfor åpningstid: kontakt legevakt 116 117.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="mr-2 text-green-600" /> Trygderefusjon
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Implantatbehandling (med henvisning)</li>
                <li>Nødvendig behandling ved sykdom</li>
                <li>Forebygging for risikogrupper</li>
              </ul>
            </div>
          </div>
        </FadeInOutSection>
      </section>
    </div>
  );
}
