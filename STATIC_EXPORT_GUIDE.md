# Statisk HTML Export Guide

## Oversikt
Denne guiden viser hvordan du konverterer prosjektet til statisk HTML som kan lastes opp til One.com eller andre webhoteller.

## Trinn 1: Forbered for statisk export

Prosjektet er nå konfigurert for statisk HTML-export med:
- Google Sheets integrasjon for dynamisk innhold
- Statisk HTML-generering via Vite
- Alle avhengigheter av backend-server fjernet

## Trinn 2: Konfigurer Google Sheets

Følg instruksjonene i `GOOGLE_SHEETS_GUIDE.md` for å sette opp Google Sheets med ditt eget innhold.

## Trinn 3: Bygg statisk HTML

Kjør build-kommandoen for å generere statisk HTML:

```bash
npm run build
```

Dette generer:
- `dist/public/index.html` - hovedfilen
- `dist/public/assets/` - CSS, JavaScript og andre filer
- `dist/public/` - alle nødvendige filer for hosting

## Trinn 4: Test lokalt

For å teste den statiske versjonen lokalt:

```bash
# Installer en enkel webserver
npm install -g serve

# Kjør fra dist/public mappen
serve dist/public
```

## Trinn 5: Last opp til One.com

1. **Logg inn på One.com**
   - Gå til ditt kontrollpanel
   - Velg "Filbehandling" eller "File Manager"

2. **Naviger til web-mappen**
   - Finn mappen som heter `public_html` eller `htdocs`
   - Dette er rotmappen for nettsiden din

3. **Last opp filer**
   - Last opp ALLE filer fra `dist/public/` mappen
   - Sørg for at `index.html` er i rotmappen
   - Last opp `assets/` mappen med alle undermapper

4. **Filstruktur på One.com**
   ```
   public_html/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].css
   │   ├── index-[hash].js
   │   └── ...
   └── [andre filer]
   ```

## Trinn 6: Konfigurer domene

1. **Sjekk at domenet peker til riktig mappe**
   - Nettsiden bør være tilgjengelig på ditt domene
   - Hvis ikke, kontakt One.com support

2. **Test alle funksjoner**
   - Kontroller at alle seksjoner vises korrekt
   - Test at Google Sheets-data lastes inn
   - Sjekk at kontaktskjema fungerer

## Fordeler med statisk HTML

✅ **Rask lasting** - Ingen server-processing
✅ **Billig hosting** - Fungerer med alle webhoteller  
✅ **Enkelt vedlikehold** - Oppdater kun Google Sheets
✅ **Høy pålitelighet** - Ingen database eller server som kan krasje
✅ **SEO-vennlig** - Alle data er tilgjengelig for søkemotorer

## Oppdatering av innhold

For å endre innhold på nettsiden:

1. **Behandlinger/priser** - Rediger Google Sheets (ingen ny deployment nødvendig)
2. **Åpningstider** - Rediger Google Sheets (ingen ny deployment nødvendig)  
3. **Kontaktinfo** - Rediger Google Sheets (ingen ny deployment nødvendig)
4. **Design/layout** - Krever ny build og upload

## Automatisering (valgfritt)

For å automatisere oppdateringer:

1. **GitHub Actions** - Automatisk build og deploy når du endrer kode
2. **Netlify/Vercel** - Direkte deployment fra GitHub
3. **Webhooks** - Automatisk rebuild når Google Sheets endres

## Feilsøking

**Problem**: Siden viser ikke Google Sheets-data
- **Løsning**: Sjekk at Google Sheets er delt offentlig og URL-ene er riktige

**Problem**: CSS/JavaScript fungerer ikke
- **Løsning**: Sjekk at alle filer i `assets/` mappen er lastet opp

**Problem**: Kontaktskjema fungerer ikke
- **Løsning**: Sjekk at FormSubmit.co er konfigurert riktig

**Problem**: Siden laster ikke
- **Løsning**: Sjekk at `index.html` er i rotmappen til webhotellet

## Ytterligere optimalisering

For beste ytelse:
1. **Komprimer bilder** - Bruk WebP format hvis mulig
2. **Minimer CSS/JS** - Vite gjør dette automatisk
3. **Aktiver caching** - Konfigurer i webhotell
4. **CDN** - Bruk Cloudflare for global hastighet