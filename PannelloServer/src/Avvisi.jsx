function Avvisi({ elenco }) {
    return (
        <section className={`avvisi ${elenco.length > 0 ? "" : "avvisi-vuoto"}`}>
            <h2>Avvisi ({elenco.length})</h2>
            <p>{elenco ? elenco.join(" · ") : "Nessun avviso"}</p>
        </section>
    )
}

export default Avvisi