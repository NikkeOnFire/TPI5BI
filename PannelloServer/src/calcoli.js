const SOGLIE = {attenzione: 70, critico: 90}

function statoServer(server) {
    if (!server.online) {
        return "offline"
    } else if (server.cpu >= SOGLIE.critico) {
        return "critico"
    } else if (server.cpu >= SOGLIE.attenzione) {
        return "attenzione"
    } else {
        return "ok"
    }
}

function contaPerStato(servers, stato) {
    return servers.filter(server => statoServer(server) === stato).length
}

function cpuMedia(servers) {
    const serverOnline = servers.filter(server => server.online)
    if (serverOnline.length === 0) {
        return null
    }
    const somma = serverOnline.reduce((acc, server) => acc + server.cpu, 0)
    return somma / serverOnline.length
}

function piuLento(servers) {
    const serverOnline = servers.filter(server => server.online)
    if (serverOnline.length === 0) {
        return null
    }
    return serverOnline.reduce((serverAttuale, server) =>
        server.latenza > serverAttuale.latenza ? server : serverAttuale
    )
}

function trovaServer(servers, nome) {
    return servers.find(server => server.nome === nome) || undefined
}

export { SOGLIE, statoServer, contaPerStato, cpuMedia, piuLento, trovaServer }