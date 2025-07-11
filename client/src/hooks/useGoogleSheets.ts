import { useState, useEffect } from 'react';
import {
  GOOGLE_SHEETS_CONFIG,
  getGoogleSheetsJSONUrl,
  BehandlingItem,
  ApningstiderItem,
  KontaktInfo
} from '@/config/googleSheets';

// Henter behandlinger fra "Behandlinger" (kolonner A og B)
export const useBehandlinger = () => {
  const [behandlinger, setBehandlinger] = useState<BehandlingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = getGoogleSheetsJSONUrl(
          GOOGLE_SHEETS_CONFIG.SHEET_ID,
          GOOGLE_SHEETS_CONFIG.BEHANDLINGER_RANGE
        );
        const response = await fetch(url);
        const json = await response.json();
        const rows = json.values;

        if (!rows || rows.length < 2) throw new Error('Ingen data funnet');

        const data = rows.slice(1).map((row: string[]) => ({
          navn: row[0] || '',
          pris: row[1] || '',
        }));

        setBehandlinger(data);
        setError(null);
      } catch (err) {
        console.error("Feil ved henting av behandlinger:", err);
        setError("Kunne ikke hente behandlingsdata");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { behandlinger, loading, error };
};

// Henter åpningstider fra "Åpningstider" (kolonner A og B)
export const useApningstider = () => {
  const [apningstider, setApningstider] = useState<ApningstiderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = getGoogleSheetsJSONUrl(
          GOOGLE_SHEETS_CONFIG.SHEET_ID,
          GOOGLE_SHEETS_CONFIG.APNINGSTIDER_RANGE
        );
        const response = await fetch(url);
        const json = await response.json();
        const rows = json.values;

        if (!rows || rows.length < 2) throw new Error('Ingen data funnet');

        const data = rows.slice(1).map((row: string[]) => ({
          dag: row[0] || '',
          tid: row[1] || '',
        }));

        setApningstider(data);
        setError(null);
      } catch (err) {
        console.error("Feil ved henting av åpningstider:", err);
        setError("Kunne ikke hente åpningstider");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { apningstider, loading, error };
};

// Henter kontaktinfo fra "Kontaktinfo" (kolonner A, B og C)
export const useKontaktInfo = () => {
  const [kontaktInfo, setKontaktInfo] = useState<KontaktInfo>({
    adresse: '',
    telefon: '',
    epost: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = getGoogleSheetsJSONUrl(
          GOOGLE_SHEETS_CONFIG.SHEET_ID,
          GOOGLE_SHEETS_CONFIG.KONTAKTINFO_RANGE
        );
        const response = await fetch(url);
        const json = await response.json();
        const rows = json.values;

        if (!rows || rows.length < 2) throw new Error('Ingen data funnet');

        const row = rows[1];
        setKontaktInfo({
          adresse: row[0] || '',
          telefon: row[1] || '',
          epost: row[2] || '',
        });
        setError(null);
      } catch (err) {
        console.error("Feil ved henting av kontaktinfo:", err);
        setError("Kunne ikke hente kontaktinfo");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { kontaktInfo, loading, error };
};
