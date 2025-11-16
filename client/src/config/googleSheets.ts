// Google Sheets Configuration
// For å oppdatere innhold, endre kun Google Sheets ID-ene her

export const GOOGLE_SHEETS_CONFIG = {
  // Google Sheets ID - erstatt med ditt eget
  BEHANDLINGER_SHEET_ID: "1G_ojqNMWd9pO1ixnu2eA-nq7cGBvYMUzX09uDtXsQLA",
  APNINGSTIDER_SHEET_ID: "1G_ojqNMWd9pO1ixnu2eA-nq7cGBvYMUzX09uDtXsQLA", 
  KONTAKTINFO_SHEET_ID: "1G_ojqNMWd9pO1ixnu2eA-nq7cGBvYMUzX09uDtXsQLA",
};

// Google Sheets API URLs for CSV export
export const getGoogleSheetsCSVUrl = (sheetId: string, gid: string = "0") => {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
};

// Utility function to parse CSV data
export const parseCSV = (csvText: string): string[][] => {
  const lines = csvText.trim().split('\n');
  return lines.map(line => {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"' && (i === 0 || line[i-1] === ',')) {
        inQuotes = true;
      } else if (char === '"' && inQuotes) {
        inQuotes = false;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    
    result.push(current.trim());
    return result;
  });
};

// Data types for different sheets
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
