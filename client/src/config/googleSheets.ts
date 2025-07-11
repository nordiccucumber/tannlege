// googleSheets.ts

// API-nøkkel (ikke eksponer om sensitiv data)
const API_KEY = "AIzaSyC1cQ-u-of-jssttsSQr-jR8el8kKzUh6k";

// Konfig: Sheet-ID og områder
export const GOOGLE_SHEETS_CONFIG = {
  SHEET_ID: "1B5CI89IJoBDmpP3mYI99ec-xDpPLd9DY4mOQJ95566s",
  BEHANDLINGER_RANGE: "Behandlinger!A:B",
  APNINGSTIDER_RANGE: "Åpningstider!A:B",
  KONTAKTINFO_RANGE: "Kontaktinfo!A:C"
};

// Dynamisk URL-bygger
export const getGoogleSheetsJSONUrl = (sheetId: string, range: string) => {
  return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${API_KEY}`;
};

// Typer
export interface BehandlingItem {
  navn: string;
  pris: string;
}

export interface ApningstiderItem {
  dag: string;
  tid: string;
}

export interface KontaktInfo {
  adresse: string;
  telefon: string;
  epost: string;
}
