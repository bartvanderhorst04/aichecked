function Header() {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  const aanbodPages = [
    "aanbod.html",
    "email-marketing.html",
    "advertenties.html",
    "seo.html",
    "website-bouwen.html",
    "website-verbeteren.html",
    "branding.html",
    "data-tracking.html",
    "ai-compliance.html",
  ];

  const isActive = (href) => {
    if (href === "aanbod.html") return aanbodPages.includes(path);
    return path === href.toLowerCase();
  };

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 300);
  };

  React.useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <header className="site-header">
      <div className="container inner">
        <a className="brand" href="index.html">
          <span className="brand-dot" aria-hidden="true"></span>
          <span><b>AIChecked</b><span className="tld">.nl</span></span>
        </a>
        <nav className="nav">
          <div
            className={`nav-dropdown ${open ? "open" : ""}`}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
          >
            <a href="aanbod.html" className={isActive("aanbod.html") ? "active" : ""}>Aanbod</a>
            <div className="nav-dropdown-menu">
              <a href="email-marketing.html">Email marketing</a>
              <a href="advertenties.html">Advertenties</a>
              <a href="seo.html">AI Search (SEO)</a>
              <a href="website-bouwen.html">Website bouwen</a>
              <a href="website-verbeteren.html">Website verbeteren</a>
              <a href="branding.html">Branding</a>
              <a href="data-tracking.html">Data &amp; Tracking</a>
              <a href="ai-compliance.html" className="nav-dropdown-flagship"><span className="nav-flagship-dot" aria-hidden="true"></span>AI Compliance</a>
            </div>
          </div>
          <a href="cases.html" className={isActive("cases.html") ? "active" : ""}>Cases</a>
          <a href="ai-kennisbank.html" className={isActive("ai-kennisbank.html") ? "active" : ""}>AI Kennisbank</a>
          <a href="over-ons.html" className={isActive("over-ons.html") ? "active" : ""}>Over ons</a>
          <a href="contact.html" className={isActive("contact.html") ? "active" : ""}>Contact</a>
          <a href="klantportaal.html" className="portal">Klantportaal →</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <>
      <StickyContactButton />
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="brand-block">
              <a className="brand" href="index.html">
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
                <li><a href="ai-kennisbank.html">AI Kennisbank</a></li>
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

function CalendarBookingBlock({ eyebrow = "PLAN EEN GESPREK" }) {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!loaded) setFailed(true);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [loaded]);

  return (
    <section className="booking-section">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-copy">
            <span className="eyebrow on-dark">{eyebrow}</span>
            <h2>
              <span className="hero-line-plain">20 minuten.</span>
              <span className="hero-line-accent">Geen verkooppraatje.</span>
            </h2>
            <p>
              Vertel waar je tegenaan loopt. Wij komen met een concreet voorstel
              — geen standaard sales-pitch, geen verplichtingen.
            </p>
            <div className="booking-trust">
              <div><span>✓</span><span>Binnen 24u bevestiging</span></div>
              <div><span>✓</span><span>Geen verplichtingen</span></div>
              <div><span>✓</span><span>Concreet advies, geen pitch</span></div>
            </div>
            <p className="booking-signoff">
              <span className="booking-signoff-dot" aria-hidden="true"></span>
              Wees ook <span>AIChecked.</span>
            </p>
          </div>

          <div className="booking-embed-shell">
            {!failed && !loaded && (
              <div className="booking-loading">
                <div className="booking-loading-card">
                  <strong>Agenda wordt geladen</strong>
                  <p>Je kunt ook direct doorklikken als je niet wilt wachten.</p>
                  <a
                    className="btn btn-primary"
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SPBgmZQ1XSYWQRkGAxUaSpRVhIIaFPBxq1EmTwHjVCdk_vOJT3Lloz3YUtpWrLd0rG-HTEPMS"
                  >
                    Plan een gesprek in →
                  </a>
                </div>
              </div>
            )}
            {!failed ? (
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SPBgmZQ1XSYWQRkGAxUaSpRVhIIaFPBxq1EmTwHjVCdk_vOJT3Lloz3YUtpWrLd0rG-HTEPMS"
                style={{
                  width: "100%",
                  height: "600px",
                  border: "none",
                  opacity: loaded ? 1 : 0.01,
                  transition: "opacity 0.2s ease"
                }}
                frameBorder="0"
                onLoad={() => setLoaded(true)}
                title="Plan een gesprek"
              ></iframe>
            ) : (
              <div className="booking-fallback">
                <a
                  className="btn btn-primary"
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SPBgmZQ1XSYWQRkGAxUaSpRVhIIaFPBxq1EmTwHjVCdk_vOJT3Lloz3YUtpWrLd0rG-HTEPMS"
                >
                  Plan een gesprek in →
                </a>
                <p>Opent Google Calendar — gratis, geen account vereist</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyContactButton() {
  const path = (window.location.pathname.split("/").pop() || "").toLowerCase();
  const excludedPages = [
    "klantportaal.html",
    "adminportaal.html",
    "preview.html",
  ];

  if (excludedPages.includes(path)) return null;

  return (
    <a className="sticky-contact-btn" href="contact.html">
      Contact opnemen →
    </a>
  );
}

window.SharedHeader = Header;
window.SharedFooter = Footer;
window.CalendarBookingBlock = CalendarBookingBlock;
window.StickyContactButton = StickyContactButton;
