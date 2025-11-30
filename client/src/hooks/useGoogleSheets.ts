import { useState, useEffect } from "react";
import {
  GOOGLE_SHEETS_CONFIG,
  getGoogleSheetsCSVUrl,
  parseCSV,
  BehandlingItem,
  ApningstiderItem,
  KontaktInfo,
  AnsattItem,
} from "@/config/googleSheets";

// Henter behandlinger fra Google Sheets
export const useBehandlinger = () => {
  const [behandlinger, setBehandlinger] = useState<BehandlingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = getGoogleSheetsCSVUrl(
          GOOGLE_SHEETS_CONFIG.BEHANDLINGER_GID
        );
        const response = await fetch(url, { redirect: "follow" });

        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data: BehandlingItem[] = rows.slice(1).map((row) => ({
          navn: row[0] || "",
          pris: row[1] || "",
          beskrivelse: row[2] || "",
          kategori: row[3] || "",
        }));

        setBehandlinger(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching behandlinger:", err);
        // Fallback – vis prislisten selv om Sheets feiler
        setBehandlinger([
          { navn: "Undersøkelse + puss og røntgen", pris: "fra 1390 kr" },
          { navn: "Studentundersøkelse", pris: "fra 790 kr*" },
          { navn: "Komposittfylling (1 flate)", pris: "fra 980 kr**" },
          { navn: "Komposittfylling (2 flater)", pris: "1490–1890 kr**" },
          { navn: "Komposittfylling (3 flater)", pris: "1890–2190 kr**" },
          { navn: "Bedriftsundersøkelse", pris: "980 kr" },
          { navn: "Smitteforebyggende tiltak", pris: "100 kr" },
          { navn: "Lokalbedøvelse pr. område", pris: "230 kr" },
          { navn: "Bleking (1 kjeve)", pris: "2500 kr" },
          { navn: "Bleking (2 kjever)", pris: "4000 kr" },
          { navn: "Refill bleking", pris: "250 kr" },
          { navn: "Mk-krone", pris: "7500 kr**" },
          { navn: "Helkeramisk krone", pris: "7900 kr**" },
          { navn: "Ekstraksjon", pris: "980–1900 kr**" },
          { navn: "Rotfylling", pris: "Timepris 2990 kr" },
        ]);
        setError(null);
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
        const url = getGoogleSheetsCSVUrl(
          GOOGLE_SHEETS_CONFIG.APNINGSTIDER_GID
        );
        const response = await fetch(url, { redirect: "follow" });

        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data: ApningstiderItem[] = rows.slice(1).map((row) => ({
          dag: row[0] || "",
          tid: row[1] || "",
          stengt: row[2]?.toLowerCase() === "stengt",
        }));

        setApningstider(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching åpningstider:", err);
        setError("Kunne ikke hente åpningstider");
        setApningstider([
          { dag: "Mandag", tid: "10.00 – 17.00" },
          { dag: "Tirsdag", tid: "09.00 – 15.00" },
          { dag: "Onsdag", tid: "08.30 – 15.00" },
          { dag: "Torsdag", tid: "08.30 – 15.00" },
          { dag: "Fredag", tid: "09.00 – 15.00" },
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
        const url = getGoogleSheetsCSVUrl(
          GOOGLE_SHEETS_CONFIG.KONTAKTINFO_GID
        );
        const response = await fetch(url, { redirect: "follow" });

        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data = rows.slice(1)[0];
        if (data) {
          setKontaktInfo({
            adresse: data[0] || "Stortingsgata 30, 0161 Oslo",
            telefon: data[1] || "22 83 41 73",
            epost: data[2] || "tannlegeslattebrekk@gmail.com",
            beskrivelse: data[3] || "",
          });
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching kontaktinfo:", err);
        setError("Kunne ikke hente kontaktinfo");
        setKontaktInfo({
          adresse: "Stortingsgata 30, 0161 Oslo",
          telefon: "22 83 41 73",
          epost: "tannlegeslattebrekk@gmail.com",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { kontaktInfo, loading, error };
};

// Henter ansatte fra Google Sheets (Navn, Rolle, Tekst1, Tekst2, Punkt1–7)
export const useAnsatte = () => {
  const [ansatte, setAnsatte] = useState<AnsattItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = getGoogleSheetsCSVUrl(GOOGLE_SHEETS_CONFIG.ANSATTE_GID);
        const response = await fetch(url, { redirect: "follow" });

        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        const data: AnsattItem[] = rows.slice(1).map((row) => ({
          navn: row[0] || "",
          rolle: row[1] || "",
          tekst1: row[2] || "",
          tekst2: row[3] || "",
          punkter: row
            .slice(4)
            .map((cell) => (cell || "").trim())
            .filter((cell) => cell.length > 0),
        }));

        setAnsatte(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching ansatte:", err);
        setError("Kunne ikke hente ansattdata");
        // Fallback – speiler dagens tekst på siden
        setAnsatte([
          {
            navn: "Mai Solgunn Glasø Slåttebrekk",
            rolle: "Tannlege M.N.T.F.",
            tekst1:
              "Mai Solgunn ble ferdigutdannet tannlege i 1993 etter studier ved Odontologisk fakultet i Oslo, og har drevet privat praksis siden. Med over 30 års erfaring tilbyr hun trygg og profesjonell tannpleie for alle.",
            tekst2:
              "Hun har spesialkompetanse i implantatprotetikk og samarbeider tett med oralkirurg og andre spesialister ved behov for avanserte behandlinger.",
            punkter: [
              "Generell tannbehandling",
              "Forebyggende behandling",
              "Konserverende behandling",
              "Kosmetisk tannpleie",
              "Implantatprotetikk",
              "Periodontittbehandling",
              "Krone- og brobehandling",
            ],
          },
          {
            navn: "Malin Pousette",
            rolle: "Tannhelsesekretær",
            tekst1:
              "Malin har jobbet hos Tannlege Slåttebrekk siden 2016 og er en viktig del av teamet. Hun sørger for at alt går smidig og at pasientene føler seg velkomne fra det øyeblikket de kommer inn døra.",
            tekst2:
              "Med sin varme og profesjonelle tilnærming hjelper Malin pasientene med timebestilling, behandlingsinformasjon og praktiske spørsmål.",
            punkter: [
              "Timebestilling og koordinering",
              "Pasientmottak og veiledning",
              "Administrasjon og oppfølging",
              "Praktisk informasjon og støtte",
            ],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { ansatte, loading, error };
};

// Henter avbestillingsgebyr fra samme fane som behandlinger
// Leser header-raden og finner kolonnen som heter noe med "AVBESTILLING"
export const useAvbestillingsgebyr = () => {
  const [gebyr, setGebyr] = useState<string>("790 kr"); // standardverdi
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = getGoogleSheetsCSVUrl(
          GOOGLE_SHEETS_CONFIG.BEHANDLINGER_GID
        );
        const response = await fetch(url, { redirect: "follow" });

        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = parseCSV(csvText);

        if (!rows.length) return;

        const headerRow = rows[0] || [];
        const avbIndex = headerRow.findIndex((col) =>
          (col || "").toLowerCase().includes("avbestilling")
        );

        if (avbIndex === -1) {
          return; // fant ikke kolonne – behold default
        }

        const firstDataRow = rows[1] || [];
        const value = (firstDataRow[avbIndex] || "").trim();

        if (value) {
          setGebyr(value);
        }

        setError(null);
      } catch (err) {
        console.error("Error fetching avbestillingsgebyr:", err);
        setError("Kunne ikke hente avbestillingsgebyr");
        // beholder standard "790 kr"
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { gebyr, loading, error };
};
