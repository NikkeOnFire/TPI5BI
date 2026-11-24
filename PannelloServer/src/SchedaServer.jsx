import BadgeStato from './BadgeStato.jsx'
import { statoServer } from './calcoli.js'

function SchedaServer({server}) {
    const stato = statoServer(server)

    return (
        <div className={`scheda scheda-${stato}`}>
            <h3>{server.nome} <BadgeStato stato={stato} /></h3>
            <p className="ruolo">{server.ruolo} · {server.sede} · {server.ip}</p>

            <p>CPU: {server.cpu === null ? "—" : `${server.cpu}%`}</p>
            <p>Latenza: {server.latenza === null ? "—" : `${server.latenza} ms`}</p>
            <p>Servizi: {server.servizi.length === 0 ? "nessuno" : server.servizi.join(", ")}</p>
            <p>
                Manutenzione: {server.manutenzione
                    ? `${server.manutenzione.data}, ${server.manutenzione.motivo}`
                    : "nessuna in programma"}
            </p>
        </div>
    )
}

export default SchedaServer