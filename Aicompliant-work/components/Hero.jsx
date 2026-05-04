function CheckIcon({ kind }) {
  if (kind === "ok") return (
    <svg viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
  if (kind === "warn") return (
    <svg viewBox="0 0 16 16" fill="none"><path d="M8 3v6M8 12v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/></svg>
  );
  return (
    <svg viewBox="0 0 16 16" fill="none"><path d="M5 5l6 6M11 5l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  );
}

function ScoreRing({ value }) {
  const r = 58;
  const c = 2 * Math.PI * r;
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1500;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  const offset = c - (shown / 100) * c;
  const tone = shown <= 33 ? "low" : shown <= 66 ? "mid" : "high";
  return (
    <div className="score-ring">
      <svg viewBox="0 0 132 132">
        <circle className="track" cx="66" cy="66" r={r} />
        <circle className={`progress ${tone}`} cx="66" cy="66" r={r} strokeDasharray={c} strokeDashoffset={offset} />
      </svg>
      <div className="num"><b>{shown}</b><small>Compliance</small></div>
    </div>
  );
}

function HeroScanItem({ label, note }) {
  return (
    <div className="scan-item warn">
      <div className="top">
        <div className="label">{label}</div>
        <div className="badge">Let op</div>
      </div>
      <div className="value">Controle</div>
      <div className="note">{note}</div>
    </div>
  );
}

function Hero() {
  const [url, setUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!url.trim() || !email.trim() || !phone.trim()) return;
    e.currentTarget.submit();
  };

  return (
    <section className="hero">
      <div className="grid-bg" />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow on-dark">AI Compliance &amp; Data Zekerheid</span>
            <h1>
              <span className="hero-line-plain">Je gebruikt AI.</span>
              <span className="hero-line-plain">Maar <span className="accent-text">levert het iets op?</span></span>
            </h1>
            <p className="hero-statement">
              Nieuwe AI-regelgeving komt snel dichterbij.
              <br />
              Voorkom <span className="accent-text">torenhoge boetes</span> voordat kleine fouten grote gevolgen krijgen.
            </p>
            <p className="hero-lead">
              Start met een gratis scan. Wij laten direct zien waar tracking,
              consent en instellingen niet kloppen en wat er als eerste moet
              worden gefixt.
            </p>
            <div className="hero-actions">
              <a className="btn btn-on-dark" href="index.html#scanner">Start gratis scan <span className="arrow">→</span></a>
              <a className="btn btn-on-dark btn-secondary" href="cases.html">Bekijk cases</a>
            </div>
            <div className="hero-meta">
              <div><strong>24u</strong><span>eerste scan én fix-richting, geen wachtrij</span></div>
              <div><strong>3 stappen</strong><span>van risico naar rust, in één systeem</span></div>
              <div><strong>Wekelijks</strong><span>zodat fouten verdwijnen voordat jij ze ziet</span></div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="monitor">
              <div className="scanner-result">
                <div className="monitor-head">
                  <div className="lights"><span/><span/><span/></div>
                  <div className="monitor-url"><span className="https">https://</span>klant-shop.nl</div>
                  <span className="live-pill"><span className="dot"/>LIVE</span>
                </div>
                <div className="monitor-body">
                  <ScoreRing value={34} />
                  <div className="monitor-summary">
                    <div className="label">Live klantdashboard</div>
                    <h3>Live inzicht in wat niet klopt</h3>
                    <p>Tracking klopt niet, flows missen stappen en instellingen zijn verouderd. Je ziet direct wat er misgaat — en wat we verbeteren.</p>
                    <p>Toegang tot je live klantdashboard, waarin je alles realtime kunt volgen.</p>
                    <p>
                      <strong className="monitor-signoff">
                        <span className="brand-dot" aria-hidden="true"></span>
                        <span>AIChecked.nl fixt het voor je.</span>
                      </strong>{" "}
                      Jij ziet wat er speelt, wij zorgen dat het weer klopt.
                    </p>
                  </div>
                </div>
                <div className="monitor-foot">
                  <div className="stamp"><span className="live-dot"/>Laatste check · 4 min geleden</div>
                  <div>Live klantdashboard</div>
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
                    <button type="submit" className="btn btn-on-dark hero-audit-btn">
                      Vraag gratis eerste audit aan <span>→</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
