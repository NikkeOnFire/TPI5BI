function Riepilogo({ok, attenzione, critici, offline, mediaCpu, lento}) {
    return (
        <section className="riepilogo">
            <div className="casella">
                <span className="numero">{ok}</span>
                <span className="etichetta">OK</span>
            </div>

            <div className="casella">
                <span className="numero">{attenzione}</span>
                <span className="etichetta">Attenzione</span>
            </div>

            <div className="casella">
                <span className="numero">{critici}</span>
                <span className="etichetta">Critici</span>
            </div>

            <div className="casella">
                <span className="numero">{offline}</span>
                <span className="etichetta">Offline</span>
            </div>

            <div className="casella">
                <span className="numero">{mediaCpu === null ? "-" : mediaCpu.toFixed(1)}%</span>
                <span className="etichetta">CPU media (server online)</span>
            </div>

            <div className="casella">
                <span className="numero">{lento === null ? "-" : `${lento.latenza} ms`}</span>
                <span className="etichetta">Più lento: {lento === null ? "nessuno" : lento.nome}</span>
            </div>
        </section>
    )
}

export default Riepilogo