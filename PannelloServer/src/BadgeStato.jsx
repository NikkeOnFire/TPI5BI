function BadgeStato({stato}) {
    return (
        <span className={`badge badge-${stato}`}>
            {stato === "ok" ? "OK" : stato === "attenzione" ? "Attenzione" : stato === "critico" ? "Critico" : stato === "offline" ? "Offline" : stato}
        </span>
    )
}

export default BadgeStato