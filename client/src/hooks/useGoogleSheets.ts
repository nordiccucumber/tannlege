import { useState, useEffect } from 'react';
import {
  GOOGLE_SHEETS_CONFIG,
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
        const url = getGoogleSheetsCSVUrl(GOOGLE_SHEETS_CONFIG.BEHANDLINGER_SHEET_ID, "0");
        const response = await fetch(url, { redirect: 'follow' });

        if (!response.ok) throw new Error('Failed to fetch data');

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
        setBehandlinger([
          { navn: 'Undersøkelse + puss og røntgen', pris: 'fra 1390 kr' },
          { navn: 'Studentundersøkelse', pris: 'fra 790 kr*' },
          { navn: 'Komposittfylling (1 flate)', pris: 'fra 980 kr**' },
          { navn: 'Komposittfylling (2 flater)', pris: '1490–1890 kr**' },
          { navn: 'Komposittfylling (3 flater)', pris: '1890–2190 kr**' },
          { navn: 'Bedriftsundersøkelse', pris: '980kr' },
          { navn: 'Smitteforebyggende tiltak', pris: '100kr' },
          { navn: 'Lokalbedøvelse pr. område', pris: '230kr' },
          { navn: 'Bleking (1 kjeve)', pris: '2 500kr' },
          { navn: 'Bleking (2 kjever)', pris: '4 000kr' },
          { navn: 'Refill bleking', pris: '250kr' },
          { navn: 'Mk-krone', pris: '7500 kr**' },
          { navn: 'Helkeramisk krone', pris: '7900 kr**' },
          { navn: 'Ekstraksjon', pris: '980–1900 kr**' },
          { navn: 'Rotfylling', pris: 'Timepris 2990 kr' }
        ]);
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
        const url = getGoogleSheetsCSVUrl(GOOGLE_SHEETS_CONFIG.APNINGSTIDER_SHEET_ID, "77335414");
        const response = await fetch(url, { redirect: 'follow' });

        if (!response.ok) throw new Error('Failed to fetch data');

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
        setApningstider([
          { dag: 'Mandag', tid: '10.00 – 17.00' },
          { dag: 'Tirsdag', tid: '09.00 – 15.00' },
          { dag: 'Onsdag', tid: '08.30 – 15.00' },
          { dag: 'Torsdag', tid: '08.30 – 15.00' },
          { dag: 'Fredag', tid: '09.00 – 15.00' },
        ]);
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
        const url = getGoogleSheetsCSVUrl(GOOGLE_SHEETS_CONFIG.KONTAKTINFO_SHEET_ID, "1346966102");
        const response = await fetch(url, { redirect: 'follow' });

        if (!response.ok) throw new Error('Failed to fetch data');

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data = rows.slice(1)[0];
        if (data) {
          setKontaktInfo({
            adresse: data[0] || 'Stortingsgata 30, 0161 Oslo',
            telefon: data[1] || '22 83 41 73',
            epost: data[2] || 'tannlegeslattebrekk@gmail.com',
            beskrivelse: data[3] || ''
          });
        }

        setError(null);
      } catch (err) {
        console.error('Error fetching kontaktinfo:', err);
        setError('Kunne ikke hente kontaktinfo');
        setKontaktInfo({
          adresse: 'Stortingsgata 30, 0161 Oslo',
          telefon: '22 83 41 73',
          epost: 'tannlegeslattebrekk@gmail.com'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { kontaktInfo, loading, error };
};