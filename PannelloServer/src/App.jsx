import './App.css'
import { sistema, servers, avvisi } from './dati.js'
import { contaPerStato, cpuMedia, piuLento } from './calcoli.js'
import Intestazione from './Intestazione.jsx'
import Riepilogo from './Riepilogo.jsx'
import SchedaServer from './SchedaServer.jsx'
import GrigliaServer from './GrigliaServer.jsx'
import ServerInEvidenza from './ServerInEvidenza.jsx'
import Avvisi from './Avvisi.jsx'

export default function App() {
  const ok = contaPerStato(servers, "ok")
  const attenzione = contaPerStato(servers, "attenzione")
  const critici = contaPerStato(servers, "critico")
  const offline = contaPerStato(servers, "offline")
  const serverOnline = ok + attenzione + critici
  const mediaCpu = cpuMedia(servers)
  const lento = piuLento(servers)
  const cercato = "db-01"

  return (
    <div className="pannello">
      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={serverOnline}
        totale={servers.length}
      />
      <Riepilogo
        ok={ok}
        attenzione={attenzione}
        critici={critici}
        offline={offline}
        mediaCpu={mediaCpu}
        lento={lento}
      />
      <GrigliaServer servers={servers} />
      <ServerInEvidenza cercato={cercato} server={servers.find(s => s.nome === cercato)} />
      <Avvisi elenco={avvisi} />
    </div>
  )
}