// ─── Shared Header ───────────────────────────────────────────────────────────
function SharedHeader() {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const aanbodPages = ["aanbod.html","email-marketing.html","advertenties.html","seo.html","website-bouwen.html","website-verbeteren.html","branding.html","data-tracking.html","ai-compliance.html"];
  const isActive = (href) => {
    if (href === "aanbod.html") return aanbodPages.includes(path);
    return path === href.toLowerCase();
  };
  const openMenu = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpen(true); };
  const closeMenu = () => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setOpen(false), 300); };
  React.useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);
  return (
    <header className="site-header">
      <div className="container inner">
        <a className="brand" href="index.html">
          <span className="brand-dot" aria-hidden="true"></span>
          <span><b>AIChecked</b><span className="tld">.nl</span></span>
        </a>
        <nav className="nav">
          <div className={`nav-dropdown ${open ? "open" : ""}`} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <a href="aanbod.html" className={isActive("aanbod.html") ? "active" : ""}>Aanbod</a>
            <div className="nav-dropdown-menu">
              <a href="email-marketing.html">Email marketing</a>
              <a href="advertenties.html">Advertenties</a>
              <a href="seo.html">AI Search (SEO)</a>
              <a href="website-bouwen.html">Website bouwen</a>
              <a href="website-verbeteren.html">Website verbeteren</a>
              <a href="branding.html">Branding</a>
              <a href="data-tracking.html">Data &amp; Tracking</a>
              <a href="ai-compliance.html">AI Compliance</a>
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
window.SharedHeader = SharedHeader;

// ─── Shared Footer ───────────────────────────────────────────────────────────
function SharedFooter() {
  return (
    <>
      <a className="sticky-contact-btn" href="contact.html">Contact opnemen →</a>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="brand-block">
              <a className="brand" href="index.html">
                <span className="brand-dot" aria-hidden="true"></span>
                <span><b>AIChecked</b><span className="tld">.nl</span></span>
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
              <a href="contact.html">Privacy</a>
              <a href="contact.html">Cookies</a>
              <a href="contact.html">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
window.SharedFooter = SharedFooter;

// ─── Calendar Booking Block ───────────────────────────────────────────────────
function CalendarBookingBlock({ eyebrow = "PLAN EEN GESPREK" }) {
  return (
    <section className="calendar-booking-section">
      <div className="container">
        <div className="calendar-booking-inner">
          <div className="calendar-booking-text">
            <span className="eyebrow on-dark">— {eyebrow}</span>
            <h2>
              <span style={{display:"block",color:"#fff"}}>20 minuten.</span>
              <span style={{display:"block",color:"var(--accent)",fontStyle:"italic"}}>Geen verkooppraatje.</span>
            </h2>
            <p style={{marginTop:16,color:"var(--text-on-ink-dim)",fontSize:17,lineHeight:1.7}}>Vertel waar je tegenaan loopt. Wij komen met een concreet voorstel — geen standaard sales-pitch, geen verplichtingen.</p>
            <div style={{marginTop:24,display:"flex",flexDirection:"column",gap:10}}>
              <div style={{display:"flex",alignItems:"center",gap:10,color:"var(--text-on-ink-dim)",fontSize:14}}><span style={{color:"var(--accent)"}}>✓</span> Binnen 24u bevestiging</div>
              <div style={{display:"flex",alignItems:"center",gap:10,color:"var(--text-on-ink-dim)",fontSize:14}}><span style={{color:"var(--accent)"}}>✓</span> Geen verplichtingen</div>
              <div style={{display:"flex",alignItems:"center",gap:10,color:"var(--text-on-ink-dim)",fontSize:14}}><span style={{color:"var(--accent)"}}>✓</span> Concreet advies, geen pitch</div>
            </div>
          </div>
          <div className="calendar-booking-embed">
            <a className="btn btn-on-dark" style={{width:"100%",justifyContent:"center",marginTop:0}} href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SPBgmZQ1XSYWQRkGAxUaSpRVhIIaFPBxq1EmTwHjVCdk_vOJT3Lloz3YUtpWrLd0rG-HTEPMS" target="_blank" rel="noopener noreferrer">
              Plan een gesprek in →
            </a>
            <p style={{marginTop:12,fontSize:12,color:"var(--text-on-ink-faint)",textAlign:"center"}}>Opent Google Calendar — gratis, geen account vereist</p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CalendarBookingBlock = CalendarBookingBlock;
