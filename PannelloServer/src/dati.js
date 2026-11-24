// src/dati.js — NON MODIFICARE: i risultati attesi dipendono da questi valori.
// Dati inventati per l'esercizio.

export const sistema = {
    nome: "Piattaforma Ordini",
    aggiornato: "11/11/2026 alle 10:15"
}

export const servers = [
    {
        nome: "web-01",
        ruolo: "Server web",
        sede: "Milano",
        ip: "10.0.1.11",
        online: true,
        cpu: 34,
        latenza: 42,
        servizi: ["nginx", "api-ordini"]
    },
    {
        nome: "web-02",
        ruolo: "Server web",
        sede: "Milano",
        ip: "10.0.1.12",
        online: true,
        cpu: 78,
        latenza: 95,
        servizi: ["nginx", "api-ordini"]
    },
    {
        nome: "db-01",
        ruolo: "Database",
        sede: "Milano",
        ip: "10.0.2.21",
        online: true,
        cpu: 93,
        latenza: 12,
        servizi: ["postgresql"],
        manutenzione: { data: "14/11", motivo: "aggiunta di memoria RAM" }
    },
    {
        nome: "db-02",
        ruolo: "Database",
        sede: "Francoforte",
        ip: "10.1.2.22",
        online: true,
        cpu: 70,
        latenza: 58,
        servizi: ["postgresql"]
    },
    {
        nome: "cache-01",
        ruolo: "Cache",
        sede: "Francoforte",
        ip: "10.1.3.31",
        online: false,
        cpu: null,
        latenza: null,
        servizi: ["redis"],
        manutenzione: { data: "12/11", motivo: "sostituzione del disco" }
    },
    {
        nome: "backup-01",
        ruolo: "Backup",
        sede: "Francoforte",
        ip: "10.1.4.41",
        online: true,
        cpu: 0,
        latenza: 120,
        servizi: []
    }
]

export const avvisi = [
    "cache-01 non risponde dalle 07:42",
    "db-01 sopra il 90% di CPU da 20 minuti"
]