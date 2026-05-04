function Scanner() {
  const [url, setUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!url.trim() || !email.trim() || !phone.trim()) return;
    e.currentTarget.submit();
    setSubmitted(true);
  };

  return (
    <section className="scanner-section" id="scanner">
      <div className="container">
        <div className="inner">
          <div>
            <span className="eyebrow">Live scanner · gratis</span>
            <h2>Doe een snelle intake.<br/><span className="serif-italic">Ontvang daarna een handmatige compliance-audit.</span></h2>
            <p className="lead">
              Laat je website achter voor een eerste beoordeling. Wij controleren je website
              handmatig op cookies, tracking, privacypagina's en datarisico's en sturen daarna
              de eerste audit naar je op.
            </p>
            <div style={{ marginTop: 24, display: "flex", gap: 18, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-on-paper-dim)" }}>Wat we controleren</div>
                <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", fontSize: 14, color: "#ffffff", lineHeight: 1.9 }}>
                  <li>· Cookies, consent &amp; categorieën</li>
                  <li>· Tracking pixels &amp; tag setup</li>
                  <li>· Datakwaliteit &amp; opslag</li>
                  <li>· Privacy &amp; algemene voorwaarden</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="scanner">
            <div className="scanner-result">
              {!submitted ? (
                <>
                  <div className="scanner-example">
                    <div className="summary">Voorbeeld van wat we in een audit controleren</div>
                    <h4>Geen automatische uitslag, wel een duidelijke eerste beoordeling.</h4>
                    <div className="scan-grid" style={{ marginTop: 18 }}>
                      <Item label="Cookies & consent" v="Controle" status="warn" note="Cookiebanner, categorieen en scriptgedrag" />
                      <Item label="Tracking & tags" v="Controle" status="warn" note="GA4, Meta, pixels en events" />
                      <Item label="Privacy pagina's" v="Controle" status="warn" note="Privacy, cookies en voorwaarden" />
                      <Item label="Data & scripts" v="Controle" status="warn" note="Datakwaliteit, opslag en scriptgebruik" />
                    </div>
                  </div>
                  <div className="scan-cta">
                    <p><strong>Vul je gegevens in.</strong> Wij beoordelen je website handmatig en sturen de eerste audit binnen 24 uur.</p>
                  </div>
                  <form
                    className="scanner-lead-form"
                    action="https://formsubmit.co/info@aichecked.nl"
                    method="POST"
                    target="_blank"
                    onSubmit={submit}
                  >
                    <input type="hidden" name="_subject" value="Nieuwe audit aanvraag via AIChecked.nl" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <div className="scanner-lead-grid single">
                      <label>
                        <span>Website URL</span>
                        <input
                          type="url"
                          name="website_url"
                          placeholder="https://jouw-website.nl"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="scanner-lead-grid">
                      <label>
                        <span>E-mail</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="naam@bedrijf.nl"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </label>
                      <label>
                        <span>Telefoonnummer</span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+31 6 12 34 56 78"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <input type="hidden" name="audit_type" value="Eerste handmatige compliance-audit" />
                    <div className="scanner-lead-actions">
                      <p>Deze intake is geen automatisch juridisch oordeel. De definitieve beoordeling gebeurt handmatig op basis van je website en instellingen.</p>
                      <button type="submit" className="btn btn-on-dark">
                        Vraag gratis eerste audit aan <span>→</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="scan-results">
                  <div className="summary">Aanvraag ontvangen</div>
                  <h4>Bedankt. Wij gaan je website handmatig beoordelen.</h4>
                  <div className="scanner-success-card">
                    <p>
                      We controleren je website handmatig op cookies, tracking,
                      privacypagina's en datarisico's.
                    </p>
                    <p>
                      Je ontvangt de eerste audit binnen 24 uur op <strong>{email}</strong>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ label, v, status, note }) {
  return (
    <div className={`scan-item ${status}`}>
      <div className="top">
        <div className="label">{label}</div>
        <div className="badge">{status === "bad" ? "Risico" : status === "warn" ? "Let op" : "OK"}</div>
      </div>
      <div className="value">{v}</div>
      <div className="note">{note}</div>
    </div>
  );
}
window.Scanner = Scanner;
