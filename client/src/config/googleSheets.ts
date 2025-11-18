// Google Sheets Configuration
// For å oppdatere innhold, endre kun Google Sheets ID-ene her

export const GOOGLE_SHEETS_CONFIG = {
  // Hele oppsettet (alle faner) ligger i samme Google Sheet:
  // Behandlinger, Åpningstider, Kontaktinfo, Ansatte
  SHEET_ID: "1G_ojqNMWd9pO1ixnu2eA-nq7cGBvYMUzX09uDtXsQLA",

  // Egen GID per fane
  BEHANDLINGER_GID: "0",
  APNINGSTIDER_GID: "1916901892",
  KONTAKTINFO_GID: "1824223222",
  ANSATTE_GID: "329801477",
};

// Google Sheets API URLs for CSV export
export const getGoogleSheetsCSVUrl = (gid: string) => {
  return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_CONFIG.SHEET_ID}/export?format=csv&gid=${gid}`;
};

// Utility function to parse CSV data
export const parseCSV = (csvText: string): string[][] => {
  const lines = csvText.trim().split("\n");
  return lines.map((line) => {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const char = line[i];

      if (char === '"' && (i === 0 || line[i - 1] === ",")) {
        inQuotes = true;
      } else if (char === '"' && inQuotes) {
        inQuotes = false;
      } else if (char === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }

    result.push(current.trim());
    return result;
  });
};

// Data types for forskjellige faner

export interface BehandlingItem {
  navn: string;
  pris: string;
  beskrivelse?: string;
  kategori?: string;
}

export interface ApningstiderItem {
  dag: string;
  tid: string;
  stengt?: boolean;
}

export interface KontaktInfo {
  adresse: string;
  telefon: string;
  epost: string;
  beskrivelse?: string;
}

export interface AnsattItem {
  navn: string;
  stilling: string;
  beskrivelse: string;
}
