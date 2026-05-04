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
window.Header = Header;
