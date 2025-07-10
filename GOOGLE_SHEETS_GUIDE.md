# Google Sheets Oppsett Guide

## Oversikt
Denne guiden viser hvordan du setter opp Google Sheets for å administrere innholdet på nettsiden din. Når du endrer innholdet i Google Sheets, oppdateres nettsiden automatisk uten at du trenger å deploye på nytt.

## Trinn 1: Opprett Google Sheet

1. Gå til [Google Sheets](https://sheets.google.com)
2. Lag et nytt spreadsheet
3. Gi det et navn som "Tannlege Slåttebrekk - Innhold"

## Trinn 2: Opprett ark (tabs) for ulike typer innhold

### Ark 1: Behandlinger (Tab-navn: "Behandlinger")
**Kolonner:**
- A: Navn (behandlingsnavn)
- B: Pris 
- C: Beskrivelse (valgfritt)
- D: Kategori (valgfritt)

**Eksempel-data:**
```
Navn                               | Pris            | Beskrivelse | Kategori
Undersøkelse + puss og røntgen     | fra 1390 kr     |             | Forebyggende
Studentundersøkelse               | fra 790 kr*     |             | Forebyggende
Komposittfylling (1 flate)        | fra 980 kr**    |             | Fyllinger
Komposittfylling (2 flater)       | 1490–1890 kr**  |             | Fyllinger
Komposittfylling (3 flater)       | 1890–2190 kr**  |             | Fyllinger
Bedriftsundersøkelse              | 980 kr          |             | Forebyggende
Smitteforebyggende tiltak         | 100 kr          |             | Tillegg
Lokalbedøvelse pr. område         | 230 kr          |             | Tillegg
Bleking (1 kjeve)                 | 2500 kr         |             | Kosmetisk
Bleking (2 kjever)                | 4000 kr         |             | Kosmetisk
Refill bleking                    | 250 kr          |             | Kosmetisk
Mk-krone                          | 7500 kr**       |             | Protetikk
Helkeramisk krone                 | 7900 kr**       |             | Protetikk
Ekstraksjon                       | 980–1900 kr**   |             | Kirurgi
Rotfylling                        | Timepris 2990 kr |             | Endodonti
```

### Ark 2: Åpningstider (Tab-navn: "Apningstider")
**Kolonner:**
- A: Dag
- B: Tid
- C: Stengt (la stå tom eller skriv "stengt")

**Eksempel-data:**
```
Dag      | Tid           | Stengt
Mandag   | 10.00 – 17.00 |
Tirsdag  | 09.00 – 15.00 |
Onsdag   | 08.30 – 15.00 |
Torsdag  | 08.30 – 15.00 |
Fredag   | 09.00 – 15.00 |
```

### Ark 3: Kontaktinfo (Tab-navn: "Kontaktinfo")
**Kolonner:**
- A: Adresse
- B: Telefon
- C: E-post
- D: Beskrivelse (valgfritt)

**Eksempel-data:**
```
Adresse                  | Telefon      | E-post                        | Beskrivelse
Stortingsgata 30, 0161 Oslo | 22 83 41 73 | tannlegeslattebrekk@gmail.com |
```

## Trinn 3: Gjør arket offentlig tilgjengelig

1. Klikk på "Del" (Share) øverst til høyre
2. Klikk på "Endre til alle som har lenken"
3. Velg "Viewer" (ikke "Editor")
4. Klikk "Ferdig"

## Trinn 4: Finn Sheet ID

1. Se på URL-en til Google Sheet
2. URL-en ser slik ut: `https://docs.google.com/spreadsheets/d/SHEET_ID_HER/edit`
3. Kopier det lange ID-et mellom `/d/` og `/edit`

**Eksempel:**
- URL: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
- Sheet ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Trinn 5: Finn GID for hvert ark

1. Klikk på det aktuelle arket (tab) nederst
2. Se på URL-en - den endrer seg til å inkludere `gid=NUMMER`
3. Kopier dette nummeret

**Eksempel:**
- Behandlinger: `gid=0` (standard for første ark)
- Åpningstider: `gid=123456789`  
- Kontaktinfo: `gid=987654321`

## Trinn 6: Oppdater konfigurasjon

Åpne filen `client/src/config/googleSheets.ts` og erstatt med dine egne ID-er:

```typescript
export const GOOGLE_SHEETS_CONFIG = {
  BEHANDLINGER_SHEET_ID: "DIN_SHEET_ID_HER",
  APNINGSTIDER_SHEET_ID: "DIN_SHEET_ID_HER", 
  KONTAKTINFO_SHEET_ID: "DIN_SHEET_ID_HER",
};
```

I `client/src/hooks/useGoogleSheets.ts`, oppdater GID-ene i URL-ene:

```typescript
// For åpningstider
const url = getGoogleSheetsCSVUrl(GOOGLE_SHEETS_CONFIG.APNINGSTIDER_SHEET_ID, "DIN_APNINGSTIDER_GID");

// For kontaktinfo  
const url = getGoogleSheetsCSVUrl(GOOGLE_SHEETS_CONFIG.KONTAKTINFO_SHEET_ID, "DIN_KONTAKTINFO_GID");
```

## Automatisk oppdatering

Når du nå endrer innholdet i Google Sheets:

1. Åpne Google Sheets
2. Endre verdiene direkte i cellene
3. Siden oppdateres automatisk neste gang noen besøker den
4. Ingen ny deployment er nødvendig

## Tips for enkle oppdateringer

- **Priser**: Endre kun i kolonne B i "Behandlinger"-arket
- **Åpningstider**: Endre kun i kolonne B i "Åpningstider"-arket  
- **Kontaktinfo**: Endre telefonnummer, e-post eller adresse i "Kontaktinfo"-arket
- **Nye behandlinger**: Legg til nye rader i "Behandlinger"-arket

## Feilsøking

Hvis data ikke oppdateres:
1. Sjekk at arket er delt offentlig
2. Kontroller at Sheet ID og GID er riktige
3. Sjekk at kolonnene har riktig overskrift
4. Vvent noen minutter - endringer kan ta tid å vise seg