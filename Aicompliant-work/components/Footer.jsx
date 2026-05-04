function CtaStrip() {
  return (
    <section className="cta-strip" id="contact">
      <div className="container inner">
        <div>
          <span className="eyebrow on-dark">Volgende stap</span>
          <h2 style={{ marginTop: 18 }}>
            Begin met een <span className="accent">gratis scan</span>.<br/>
            Geen verplichting, wel duidelijkheid.
          </h2>
          <p>
            Binnen 24 uur ligt er een rapport: wat klopt, wat niet, en wat het kost om het op te lossen.
            Daarna beslis je zelf of je losse fix of doorlopende monitoring wilt.
          </p>
          <div className="actions" style={{ marginTop: 28 }}>
            <a className="btn btn-on-dark" href="index.html#scanner">Start gratis scan <span className="arrow" style={{ color: "var(--accent)" }}>→</span></a>
            <a
              className="btn btn-on-dark btn-secondary"
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SPBgmZQ1XSYWQRkGAxUaSpRVhIIaFPBxq1EmTwHjVCdk_vOJT3Lloz3YUtpWrLd0rG-HTEPMS"
            >
              Plan 20-min gesprek
            </a>
          </div>
        </div>
        <div className="cta-stat-stack">
          <div className="cta-stat"><strong>24u</strong><span>Reactietijd op je gratis scan-aanvraag</span></div>
          <div className="cta-stat"><strong>0,–</strong><span>Geen kosten voor de eerste doorlichting</span></div>
          <div className="cta-stat"><strong>NL</strong><span>Persoonlijk team — geen tickets, geen bots</span></div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["AVG / GDPR", "ePrivacy", "DSA", "EU AI Act", "DMA", "ACM richtlijnen", "Cookiewet", "DPIA"];
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((x, i) => <React.Fragment key={i}><span>{x}</span><span className="dot"/></React.Fragment>)}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <>
      <a className="sticky-contact-btn" href="contact.html">Contact opnemen →</a>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="brand-block">
              <a className="brand" href="#">
                <span className="brand-dot" aria-hidden="true"></span>
                <span style={{ color: "var(--paper)" }}><b>AIChecked</b><span className="tld" style={{ color: "var(--text-on-ink-faint)" }}>.nl</span></span>
              </a>
              <p className="tagline">Wij zorgen dat alles klopt — en passen alles aan wat daarvoor nodig is. Maandelijks, doorlopend, zonder gedoe.</p>
            </div>
            <div>
              <h5>Aanbod</h5>
              <ul>
                <li><a href="email-marketing.html">Email marketing</a></li>
                <li><a href="advertenties.html">Advertenties</a></li>
                <li><a href="seo.html">AI Search (SEO)</a></li>
                <li><a href="website-bouwen.html">Website bouwen</a></li>
                <li><a href="website-verbeteren.html">Website verbeteren</a></li>
                <li><a href="branding.html">Branding</a></li>
                <li><a href="data-tracking.html">Data &amp; Tracking</a></li>
                <li><a href="ai-compliance.html">AI Compliance</a></li>
              </ul>
            </div>
            <div>
              <h5>Bedrijf</h5>
              <ul>
                <li><a href="aanbod.html">Aanbod</a></li>
                <li><a href="cases.html">Cases</a></li>
                <li><a href="ai-kennisbank.html">Kennisbank</a></li>
                <li><a href="over-ons.html">Over ons</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:info@aichecked.nl">info@aichecked.nl</a></li>
                <li><a href="tel:+31619678372">+31 6 19678372</a></li>
                <li><a href="klantportaal.html">Klantportaal →</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <div>© 2026 AIChecked.nl · KvK 92.041.227</div>
            <div className="legal">
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
              <a href="#">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
window.Footer = Footer;
window.CtaStrip = CtaStrip;
window.Marquee = Marquee;
