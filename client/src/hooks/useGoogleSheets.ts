import { useState, useEffect } from 'react';
import {
  getGoogleSheetsCSVUrl,
  parseCSV,
  BehandlingItem,
  ApningstiderItem,
  KontaktInfo
} from '@/config/googleSheets';

// Henter behandlinger fra Google Sheets
export const useBehandlinger = () => {
  const [behandlinger, setBehandlinger] = useState<BehandlingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = getGoogleSheetsCSVUrl("behandlinger");
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch behandlinger');

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data = rows.slice(1).map(row => ({
          navn: row[0] || '',
          pris: row[1] || '',
          beskrivelse: row[2] || '',
          kategori: row[3] || ''
        }));

        setBehandlinger(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching behandlinger:', err);
        setError('Kunne ikke hente behandlingsdata');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { behandlinger, loading, error };
};

// Henter åpningstider fra Google Sheets
export const useApningstider = () => {
  const [apningstider, setApningstider] = useState<ApningstiderItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = getGoogleSheetsCSVUrl("apningstider");
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch åpningstider');

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data = rows.slice(1).map(row => ({
          dag: row[0] || '',
          tid: row[1] || '',
          stengt: row[2]?.toLowerCase() === 'stengt'
        }));

        setApningstider(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching åpningstider:', err);
        setError('Kunne ikke hente åpningstider');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { apningstider, loading, error };
};

// Henter kontaktinfo fra Google Sheets
export const useKontaktInfo = () => {
  const [kontaktInfo, setKontaktInfo] = useState<KontaktInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = getGoogleSheetsCSVUrl("kontaktinfo");
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch kontaktinfo');

        const csvText = await response.text();
        const rows = parseCSV(csvText);
        const data = rows.slice(1)[0];

        if (data) {
          setKontaktInfo({
            adresse: data[0] || '',
            telefon: data[1] || '',
            epost: data[2] || '',
            beskrivelse: data[3] || ''
          });
        }

        setError(null);
      } catch (err) {
        console.error('Error fetching kontaktinfo:', err);
        setError('Kunne ikke hente kontaktinfo');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { kontaktInfo, loading, error };
};
