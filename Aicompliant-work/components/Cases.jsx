function Cases() {
  const cases = [
    {
      tag: "Compliance herstel",
      title: "DTC webshop — tracking gefikst, data weer betrouwbaar",
      summary: "Tracking werkte niet, cookies stonden fout en data was onbetrouwbaar. Hersteld en sindsdien maandelijks bijgehouden.",
      stats: [
        { v: "94", k: "Compliance score na fix" },
        { v: "0", k: "Incidenten in 6 mnd" },
      ],
    },
    {
      tag: "Website build",
      title: "Vanaf de basis goed gebouwd — geen herstel achteraf",
      summary: "Direct opgezet volgens compliance-eerst principe. Tracking, consent en datastructuur kloppen vanaf dag één.",
      stats: [
        { v: "100", k: "Score bij oplevering" },
        { v: "−40%", k: "Herstelkosten vermeden" },
      ],
    },
    {
      tag: "Doorlopende monitoring",
      title: "Marketingbureau — controle terug bij veel wijzigingen",
      summary: "Veel campagnes, weinig grip. Monitoring bracht overzicht en rust terug — fouten opgelost vóór ze schade aanrichten.",
      stats: [
        { v: "47", k: "Auto-fixes per kwartaal" },
        { v: "12", k: "Klanten zonder zorgen" },
      ],
    },
  ];

  return (
    <section className="cases-section" id="cases">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Bewijs</span>
          <div>
            <h2>We laten niet alleen zien <span className="serif-italic">wat fout gaat</span>. We laten zien wat werkt.</h2>
            <p className="lead" style={{ marginTop: 18 }}>
              Drie verhalen — één patroon. Eerst inzicht, dan fix, dan rust.
            </p>
          </div>
        </div>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <article key={i} className="case-card">
              <span className="case-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p style={{ color: "var(--text-on-paper-dim)", fontSize: 14, lineHeight: 1.55 }}>{c.summary}</p>
              <div className="case-stat">
                {c.stats.map((s, j) => (
                  <div key={j}>
                    <strong>{s.v}</strong>
                    <span>{s.k}</span>
                  </div>
                ))}
              </div>
              <a className="read" href="cases.html">
                Bekijk de case <span className="arrow">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Cases = Cases;
