# Tannlege Slåttebrekk - Statisk HTML Website

En moderne norsk tannlegepraksis-nettside som kan lastes opp til One.com med Google Sheets-integrasjon for enkelt innholdsadministrasjon.

## 🚀 Rask start

### 1. Bygg statisk HTML
```bash
node static-build.js
```

### 2. Konfigurer Google Sheets
Se `GOOGLE_SHEETS_GUIDE.md` for komplett oppsett.

### 3. Deploy til One.com
Last opp alle filer fra `upload-to-one-com/` mappen til din `public_html` mappe.

## 📋 Innholdsadministrasjon

All dynamisk innhold administreres via Google Sheets:

- **Behandlinger og priser** → Google Sheets ark "Behandlinger"
- **Åpningstider** → Google Sheets ark "Apningstider" 
- **Kontaktinformasjon** → Google Sheets ark "Kontaktinfo"

Endringer i Google Sheets vises på nettsiden uten ny deployment!

## 📁 Viktige filer

- `GOOGLE_SHEETS_GUIDE.md` - Komplett guide for Google Sheets oppsett
- `STATIC_EXPORT_GUIDE.md` - Guide for deployment til One.com
- `KOMPLETT_OPPSUMMERING.md` - Detaljert oversikt over alt som er gjort
- `static-build.js` - Build-script for statisk HTML
- `client/src/config/googleSheets.ts` - Konfigurasjons-fil (oppdater med ditt Sheet ID)

## ✅ Fordeler

- **Billig hosting** - Fungerer med alle webhoteller
- **Enkel oppdatering** - Endre kun Google Sheets
- **Ingen backend** - Pure statisk HTML
- **Rask loading** - Optimalisert for hastighet
- **SEO-vennlig** - Alt innhold tilgjengelig for søkemotorer

## 🔧 Teknisk stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Data**: Google Sheets CSV export
- **Hosting**: Statisk HTML (One.com)
- **Kontaktskjema**: FormSubmit.co
- **Build**: Vite

## 📞 Support

Se dokumentasjonsfilene for detaljerte instruksjoner og feilsøking.