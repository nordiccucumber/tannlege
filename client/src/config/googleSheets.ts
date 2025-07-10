// Google Sheets Configuration
// For å oppdatere innhold, endre kun Google Sheets ID-ene her

export const GOOGLE_SHEETS_CONFIG = {
  // Eksempel Google Sheets ID - erstatt med ditt eget
  BEHANDLINGER_SHEET_ID: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
  APNINGSTIDER_SHEET_ID: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", 
  KONTAKTINFO_SHEET_ID: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
};

// Google Sheets API URLs for CSV export
export const getGoogleSheetsCSVUrl = (sheetId: string, gid: string = "0") => {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
};

// Google Sheets API URLs for JSON export (requires public sharing)
export const getGoogleSheetsJSONUrl = (sheetId: string, range: string = "A1:Z1000") => {
  return `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=AIzaSyBHNaKvwvFDqfwJxw7QGKIBaG3mKNa3_6c`;
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