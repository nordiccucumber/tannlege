import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

export default function Tips() {
  const blogPosts = [
    {
      title: "5 Tips for Optimal Tannhelse",
      excerpt: "Lær de viktigste tipsene for å holde tennene dine friske og sunne hver dag.",
      date: "2024-01-15",
      readTime: "5 min",
      author: "Dr. Mai Solgunn Glasø Slåttebrekk",
      category: "Forebyggende tannpleie",
      content: [
        "God tannhelse starter med riktig daglig rutine. Her er våre beste tips:",
        "1. Bruk fluortannkrem og børst tennene i minst 2 minutter",
        "2. Bruk tanntråd daglig for å fjerne plakk mellom tennene",
        "3. Unngå snacks med mye sukker, spesielt mellom måltider",
        "4. Drikk vann gjennom dagen for å skylle bort bakterier",
        "5. Besøk tannlegen regelmessig for kontroll og rens"
      ]
    },
    {
      title: "Alt du Trenger å Vite om Implantater",
      excerpt: "Grundig guide til tannimplantater - prosess, fordeler og hva du kan forvente.",
      date: "2024-01-10",
      readTime: "8 min",
      author: "Dr. Mai Solgunn Glasø Slåttebrekk",
      category: "Implantatbehandling",
      content: [
        "Tannimplantater er en moderne og effektiv løsning for å erstatte manglende tenner.",
        "Et implantat består av en titanskrue som plasseres i kjeven, og en krone som festes på toppen.",
        "Prosessen tar normalt 3-6 måneder, avhengig av helingsforløpet.",
        "Implantater kan vare livet ut med riktig stell og regelmessige kontroller.",
        "Vi tilbyr implantatbehandling med mulighet for trygderefusjon."
      ]
    },
    {
      title: "Forberedelser før Tannlegebesøket",
      excerpt: "Hva du bør vite og gjøre før du kommer til tannlegen for optimal behandling.",
      date: "2024-01-05",
      readTime: "3 min",
      author: "Malin Pousette",
      category: "Pasientinformasjon",
      content: [
        "God forberedelse gjør tannlegebesøket mer effektivt og behagelig.",
        "Husk å ta med legitimasjon og helsekort til alle konsultasjoner.",
        "Informer oss om eventuelle medisiner du bruker eller endringer i helsen.",
        "Kom i god tid, helst 15 minutter før avtalt tid.",
        "Ikke nøl med å stille spørsmål - vi er her for å hjelpe deg."
      ]
    },
    {
      title: "Tannbleking - Muligheter og Metoder",
      excerpt: "Utforsk ulike metoder for tannbleking og finn den som passer best for deg.",
      date: "2023-12-20",
      readTime: "6 min",
      author: "Dr. Mai Solgunn Glasø Slåttebrekk",
      category: "Kosmetisk tannpleie",
      content: [
        "Tannbleking er en populær og sikker metode for å få hvitere tenner.",
        "Vi tilbyr både profesjonell bleking i klinikken og hjemmebleking.",
        "Behandlingen kan gjøre tennene 2-8 nyanser lysere.",
        "Resultatet holder normalt i 1-3 år, avhengig av kosthold og livsstil.",
        "Konsultasjon er alltid første steg for å vurdere egnethet."
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tips og Råd</h1>
          <p className="text-xl text-gray-600">Nyttige artikler om tannhelse og behandling</p>
        </div>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-brand-pink bg-brand-pink-light px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(post.date).toLocaleDateString('no-NO')}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 hover:text-brand-pink transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
                <p className="text-gray-600 text-lg">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <User size={16} className="mr-1" />
                  Av {post.author}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {post.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">
                    Publisert {new Date(post.date).toLocaleDateString('no-NO')}
                  </p>
                  <button className="flex items-center text-brand-pink hover:text-brand-pink/80 transition-colors">
                    Les mer <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 bg-gradient-to-r from-brand-pink-light to-brand-green-light">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hold deg oppdatert</h2>
            <p className="text-gray-600 mb-6">
              Meld deg på vårt nyhetsbrev for å motta de nyeste tipsene og rådene om tannhelse.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadresse"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-pink"
              />
              <button className="bg-brand-pink text-white px-6 py-2 rounded-r-lg hover:bg-brand-pink/90 transition-colors">
                Meld deg på
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
