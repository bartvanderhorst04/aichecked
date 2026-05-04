# AIChecked Homepage Source Export

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/index.html

```html
<!doctype html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Compliance & Data Zekerheid voor websites, e-mail en ads | AIChecked.nl</title>
    <meta name="description" content="AIChecked.nl helpt bedrijven risico's signaleren, fouten oplossen en websites, tracking, e-mail en campagnes beter voorbereid houden op AI-, privacy- en marketingregels." />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <link rel="canonical" href="https://aichecked.nl/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="nl_NL" />
    <meta property="og:site_name" content="AIChecked.nl" />
    <meta property="og:title" content="AI Compliance & Data Zekerheid voor websites, e-mail en ads" />
    <meta property="og:description" content="Wij scannen, fixen en monitoren websites, data en campagnes zodat bedrijven beter voorbereid blijven op veranderende regels." />
    <meta property="og:url" content="https://aichecked.nl/" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AI Compliance & Data Zekerheid voor websites, e-mail en ads" />
    <meta name="twitter:description" content="AIChecked.nl helpt bedrijven risico's signaleren, fouten oplossen en websites, tracking, e-mail en campagnes beter voorbereid houden op AI-, privacy- en marketingregels." />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": "https://aichecked.nl/#organization",
            "name": "AIChecked.nl",
            "url": "https://aichecked.nl/",
            "email": "info@aichecked.nl"
          },
          {
            "@type": "WebSite",
            "@id": "https://aichecked.nl/#website",
            "url": "https://aichecked.nl/",
            "name": "AIChecked.nl",
            "publisher": {
              "@id": "https://aichecked.nl/#organization"
            },
            "inLanguage": "nl-NL"
          },
          {
            "@type": "FAQPage",
            "@id": "https://aichecked.nl/#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Wat is AI marketing compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AI marketing compliance betekent dat je website, tracking, e-mail en campagnes blijven aansluiten op privacy-, data- en AI-regels, zonder dat fouten onzichtbaar blijven staan."
                }
              },
              {
                "@type": "Question",
                "name": "Waarom klopt tracking vaak niet meer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tracking raakt vaak uit lijn door consent-wijzigingen, scripts die zichzelf updaten en tools die zonder controle nieuwe fouten introduceren."
                }
              },
              {
                "@type": "Question",
                "name": "Hoe verbeter je zichtbaarheid in Google en AI?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dat begint met een technische site-audit, keyword-gap analyse, content briefs op zoekintentie en het volgen van welke pagina's door AI-systemen worden geciteerd."
                }
              },
              {
                "@type": "Question",
                "name": "Wanneer is doorlopende monitoring nodig?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Doorlopende monitoring is nodig zodra meerdere tools, scripts, e-mailflows of campagnes tegelijk lopen, omdat wat vandaag klopt morgen opnieuw fout kan zijn."
                }
              }
            ]
          }
        ]
      }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Fraunces:opsz,wght,SOFT@9..144,300..700,0..100&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="styles.v2.css" />
    <link rel="stylesheet" href="subpages.css" />
    <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="tweaks-panel.jsx"></script>
    <script type="text/babel" src="components/Header.jsx"></script>
    <script type="text/babel" src="components/Hero.jsx"></script>
    <script type="text/babel" src="components/Scanner.jsx"></script>
    <script type="text/babel" src="components/Layers.jsx"></script>
    <script type="text/babel" src="components/Services.jsx"></script>
    <script type="text/babel" src="components/Cases.jsx"></script>
    <script type="text/babel" src="components/Footer.jsx"></script>
    <script type="text/babel" src="app.jsx"></script>
  </body>
</html>

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/app.jsx

```jsx
const TWEAKS = /*EDITMODE-BEGIN*/{
  "accentHue": 32,
  "showFloatingCards": true,
  "showMarquee": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweaks] = useTweaks(TWEAKS);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent-h", String(tweaks.accentHue));
  }, [tweaks.accentHue]);

  // reveal-on-scroll
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Layers />
      {tweaks.showMarquee && <Marquee />}
      <Scanner />
      <AboutBart />
      <Services />
      <Cases />
      <HomepageFaq />
      <CtaStrip />
      <Footer />

      <TweaksPanel>
        <TweakSection title="Accent kleur">
          <TweakSlider
            label="Hue"
            value={tweaks.accentHue}
            min={0} max={360} step={1}
            onChange={(v) => setTweaks({ accentHue: v })}
          />
          <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
            {[
              { name: "Amber", h: 32 },
              { name: "Indigo", h: 270 },
              { name: "Forest", h: 152 },
              { name: "Crimson", h: 18 },
              { name: "Cobalt", h: 240 },
            ].map((p) => (
              <button
                key={p.name}
                onClick={() => setTweaks({ accentHue: p.h })}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 10px", border: "1px solid #2a2a2a",
                  background: tweaks.accentHue === p.h ? "#fff" : "transparent",
                  color: tweaks.accentHue === p.h ? "#111" : "#ddd",
                  borderRadius: 999, fontSize: 11, cursor: "pointer", fontFamily: "var(--mono)",
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: `oklch(0.78 0.16 ${p.h})` }} />
                {p.name}
              </button>
            ))}
          </div>
        </TweakSection>
        <TweakSection title="Layout">
          <TweakToggle
            label="Compliance regelgeving marquee"
            checked={tweaks.showMarquee}
            onChange={(v) => setTweaks({ showMarquee: v })}
          />
          <TweakToggle
            label="Floating notification cards"
            checked={tweaks.showFloatingCards}
            onChange={(v) => setTweaks({ showFloatingCards: v })}
          />
        </TweakSection>
      </TweaksPanel>

      <style>{`
        ${!tweaks.showFloatingCards ? ".float-card { display: none; }" : ""}
      `}</style>
    </>
  );
}

function AboutBart() {
  return (
    <section className="about-bart">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow on-dark">Over mij</span>
          <div>
            <h2>
              <span className="hero-line-plain">Geen bureau.</span>
              <span className="hero-line-accent">Een persoon.</span>
            </h2>
          </div>
        </div>

        <div className="about-bart-grid">
          <div className="about-bart-photo">
            <img
              className="about-bart-photo-main"
              src="file:///Users/vanderhorst/Downloads/IMG_9536%20(1).jpg"
              alt="Bart van der Horst"
            />
            <img
              className="about-bart-photo-secondary"
              src="file:///Users/vanderhorst/Downloads/a9dc1f3d-6b55-40a9-a887-dbb98aa2ab7a%20(1).JPG"
              alt="Bart van der Horst bij Hogeschool Utrecht"
            />
            <span className="about-bart-badge">Bart van der Horst</span>
          </div>

          <div className="about-bart-copy">
            <div className="about-bart-stats">
              <article className="about-bart-stat">
                <strong>5+</strong>
                <span>jaar e-commerce ervaring</span>
              </article>
              <article className="about-bart-stat">
                <strong>HBO</strong>
                <span>diploma e-commerce</span>
              </article>
              <article className="about-bart-stat">
                <strong>3+</strong>
                <span>jaar dagelijks met AI</span>
              </article>
              <article className="about-bart-stat">
                <strong>0</strong>
                <span>loze rapporten</span>
              </article>
            </div>

            <p className="about-bart-text">
              Ik ben 22 jaar en werk al jaren dagelijks met AI. Niet omdat het een trend is — maar omdat ik vroeg zag hoe snel het alles verandert. Mijn diploma heb ik gehaald, maar de praktijk heeft me meer geleerd. Ik bouw geen producten. Ik bouw systemen die blijven kloppen.
            </p>

            <div className="about-bart-credentials">
              <div className="about-bart-credential">
                <strong>HBO E-commerce</strong>
                <span>Hogeschool Utrecht · Associate Degree</span>
              </div>
              <div className="about-bart-credential">
                <strong>AI systemen</strong>
                <span>3 jaar dagelijkse praktijk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomepageFaq() {
  const items = [
    {
      q: "Wat is AI marketing compliance?",
      a: "AI marketing compliance betekent dat je website, tracking, e-mail en campagnes blijven aansluiten op privacy-, data- en AI-regels. Het gaat dus niet alleen om juridische pagina's, maar ook om consent, meetbaarheid, claims en hoe AI-output live komt te staan.",
    },
    {
      q: "Waarom klopt tracking vaak niet meer?",
      a: "Tracking raakt meestal uit lijn door consent-wijzigingen, scripts die zichzelf updaten en pixels die technisch nog wel laden maar data verkeerd doorgeven. Daardoor stuur je budget op cijfers die betrouwbaar lijken, maar dat niet zijn.",
    },
    {
      q: "Hoe verbeteren jullie zichtbaarheid in Google en AI?",
      a: "We combineren technische audits, keyword-gap analyse, content briefs op zoekintentie en AI citation tracking. Daarmee verbeteren we niet alleen rankings, maar ook de kans dat pagina's als bron worden gebruikt in ChatGPT, Perplexity en AI Overviews.",
    },
    {
      q: "Wanneer is maandelijkse monitoring nodig?",
      a: "Zodra meerdere tools, e-mailflows, scripts en campagnes tegelijk draaien. Wat vandaag klopt, kan na een update of nieuwe regel morgen opnieuw fout zijn. Monitoring voorkomt dat die fouten maanden onzichtbaar blijven.",
    },
  ];

  return (
    <section className="homepage-faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow on-dark">Veelgestelde vragen</span>
          <div>
            <h2>Wat moet je weten over<br/><span className="serif-italic">AI compliance en SEO?</span></h2>
            <p className="lead" style={{ marginTop: 18, color: "var(--text-on-ink-dim)" }}>
              Het korte antwoord: AI versnelt productie, maar maakt fouten minder zichtbaar. Daarom werken duidelijke antwoorden,
              vraaggestuurde structuur en doorlopende controles beter voor zowel Google als AI-systemen.
            </p>
          </div>
        </div>

        <div className="homepage-faq-grid">
          {items.map((item) => (
            <article key={item.q} className="homepage-faq-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>

        <p className="homepage-faq-foot">
          Wil je dieper gaan op organische groei, keyword gaps en AI-citaties? Bekijk dan <a href="ai-search.html">AI Search</a> of lees verder in de <a href="ai-kennisbank.html">AI Kennisbank</a>.
        </p>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Header.jsx

```jsx
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

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Hero.jsx

```jsx
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

function Hero() {
  const checks = [
    { kind: "bad",  name: "Tracking meet verkeerd",         meta: "Conversies missen in je dashboard" },
    { kind: "bad",  name: "Flow mist opvolging",            meta: "Na winkelwagen geen vervolgstap" },
    { kind: "warn", name: "Instellingen verouderd",         meta: "Consent en privacy moeten opnieuw langs" },
    { kind: "ok",   name: "Realtime overzicht actief",      meta: "Alles live te volgen in je portaal" },
    { kind: "ok",   name: "Team werkt aan fixes",           meta: "Updates lopen direct door in je dashboard" },
  ];

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
              De regels veranderen. Fouten ook. Wij zorgen dat jij dat niet merkt.
            </p>
            <p className="hero-lead">
              AI bouwt snel — en maakt fouten onzichtbaar. Wij scannen, fixen en
              houden alles bij zodat jij je focust op groei, niet op compliance.
            </p>
            <div className="hero-actions">
              <a className="btn btn-on-dark" href="#scanner">Start gratis scan <span className="arrow">→</span></a>
              <a className="btn btn-on-dark btn-secondary" href="cases.html">Bekijk cases</a>
            </div>
            <div className="hero-meta">
              <div><strong>24u</strong><span>eerste scan én fix-richting, geen wachtrij</span></div>
              <div><strong>3 stappen</strong><span>van risico naar rust, in één systeem</span></div>
              <div><strong>Wekelijks</strong><span>zodat fouten verdwijnen voordat jij ze ziet</span></div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="float-card float-1">
              <div className="ico" style={{ background: "oklch(0.78 0.14 152 / 0.18)", color: "oklch(0.4 0.12 152)" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <strong>+18 fixes deze maand</strong>
                <span>Automatisch toegepast</span>
              </div>
            </div>
            <div className="float-card float-2">
              <div className="ico" style={{ background: "oklch(0.7 0.18 25 / 0.14)", color: "oklch(0.55 0.18 25)" }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v6M8 12v.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <strong>3 risico's gedetecteerd</strong>
                <span>Vandaag 09:14 — opgelost</span>
              </div>
            </div>

            <div className="monitor">
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
                </div>
              </div>
              <div className="monitor-checks">
                {checks.map((c, i) => (
                  <div key={i} className={`check-row ${c.kind}`}>
                    <div className="ico"><CheckIcon kind={c.kind} /></div>
                    <div className="name">{c.name}</div>
                    <div className="meta">{c.meta}</div>
                  </div>
                ))}
              </div>
              <div className="monitor-foot">
                <div className="stamp"><span className="live-dot"/>Laatste check · 4 min geleden</div>
                <div>Live klantdashboard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Layers.jsx

```jsx
function Layers({ standalone = false }) {
  const items = [
    {
      label: "E-MAIL →",
      title: "Niemand koopt\neen tweede keer.",
      desc: "Je lijst groeit maar de omzet niet. Flows staan aan maar converteren niet — en niemand weet waarom.",
      href: "email-marketing.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "ADS →",
      title: "Elke week\nbudget verspild.",
      desc: "Campagnes draaien maar de cijfers kloppen niet. Creatives worden afgekeurd zonder duidelijke reden.",
      href: "advertenties.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "SEO →",
      title: "Klanten vinden\nons niet.",
      desc: "Concurrenten scoren op jouw zoekwoorden. Jouw content bestaat maar bereikt niemand.",
      href: "seo.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "WEBSITE →",
      title: "Bezoekers\nklikken weg.",
      desc: "Veel verkeer, weinig conversie. De site ziet er goed uit maar iets klopt niet — je weet alleen niet wat.",
      href: "website-bouwen.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "DATA →",
      title: "Onze data\nklopt niet.",
      desc: "Dashboards zien er betrouwbaar uit. Maar de tracking staat fout en beslissingen zijn gebaseerd op verkeerde cijfers.",
      href: "data-tracking.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "BRANDING →",
      title: "Ons merk\novertuigt niet.",
      desc: "Visuals en copy missen scherpte. Klanten twijfelen — niet aan het product, maar aan het gevoel.",
      href: "branding.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "AI COMPLIANCE →",
      title: "Eén fout en\nwe krijgen een boete.",
      desc: "Cookie banner, tracking consent, privacy statement — ergens klopt het niet. En niemand heeft het door totdat het te laat is.",
      href: "ai-compliance.html",
      extraLink: "Wat kan ik toevoegen →",
    },
    {
      label: "WEBSITE VERBETEREN →",
      title: "Je hebt al een website\nmaar hij werkt niet.",
      desc: "Je hebt hem laten bouwen maar weet niet hoe je hem verder vult, verbetert of vindbaar maakt.",
      href: "website-verbeteren.html",
      special: true,
      extraLink: "Wat ik kan toevoegen →",
    },
  ];

  return (
    <section className={`layers-dominant ${standalone ? "is-standalone" : ""}`} id="aanbod">
      <div className="layers-bg" aria-hidden="true">
        <div className="layers-bg-grid" />
        <div className="layers-bg-glow" />
      </div>
      <div className="container">
        <div className="layers-head">
          <span className="eyebrow on-dark">Overzicht</span>
          <h2>
            <span className="hero-line-plain">Je gebruikt AI.</span>
            <span className="hero-line-accent">Maar benut je het?</span>
          </h2>
          <p className="layers-head-lead">
            De meeste winst zit in wat je niet ziet. Foute instellingen, slechte prompts, gemiste kansen. Wij brengen het boven water.
          </p>
        </div>

        <div className="layers-grid-eight">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`layer-card layer-card--overview ${item.special ? "layer-card--special" : ""}`}
            >
              <span className="layer-card-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p className="layer-card-desc">{item.desc}</p>
              <span className="layer-card-link">{item.extraLink}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Layers = Layers;

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Scanner.jsx

```jsx
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
                <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", fontSize: 14, color: "var(--text-on-paper-dim)", lineHeight: 1.9 }}>
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

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Services.jsx

```jsx
function Services() {
  const tabs = [
    {
      step: "01",
      icon: "🔍",
      label: "Stap 1: We scannen",
      title: "Waar klopt het niet (meer)?",
      promise: "Systemen veranderen zonder dat je het doorhebt.",
      desc: "AI maakt bouwen sneller, maar fouten minder zichtbaar. Tools updaten zichzelf, scripts schuiven door, regels veranderen. Wij brengen feitelijk in kaart waar dat al misgaat — voordat het je iets kost.",
      list: [
        "Website scan op cookies, tracking en data",
        "E-mail en toestemming controle",
        "Analyse van scripts en tools die automatisch veranderen",
        "Inzicht in waar je risico loopt",
      ],
      slot: "Wat vandaag klopt, kan morgen fout zijn — wij laten zien waar dat gebeurt.",
      cta: "Laat je website checken",
    },
    {
      step: "02",
      icon: "🛠",
      label: "Stap 2: We fixen",
      title: "We maken alles weer correct",
      promise: "Automatisering versnelt fouten — wij zetten het terug op de rails.",
      desc: "Alles wat uit de analyse komt lossen we op. Geen losse pleisters, geen half werk. Technisch, juridisch en qua data sluit het weer aan op wat de wet vraagt en wat jij nodig hebt om door te kunnen.",
      list: [
        "Cookie en consent instellingen corrigeren",
        "Tracking en data correct instellen",
        "Fouten in scripts en structuur oplossen",
        "E-mail en data gebruik compliant maken",
      ],
      slot: "Wij zorgen dat alles klopt — technisch, juridisch en qua data.",
      cta: "Laat dit oplossen",
    },
    {
      step: "03",
      icon: "🔁",
      label: "Stap 3: We monitoren",
      title: "We zorgen dat het zo blijft",
      promise: "De rust van weten dat iemand anders het bijhoudt.",
      desc: "Dit is waar het echt om gaat. Regels schuiven, tools updaten, AI past dingen aan zonder dat je het ziet. Wij kijken doorlopend mee, lossen fouten op zodra ze ontstaan en houden je portaal bij — maandelijks, automatisch, zonder gedoe.",
      list: [
        "Automatische checks en foutdetectie",
        "Updates bij veranderende regels en systemen",
        "Directe fixes zonder dat jij iets hoeft te doen",
        "Inzicht via je klantportaal",
      ],
      slot: "Zonder controle ontstaan er opnieuw fouten. Wij zorgen dat alles blijft kloppen.",
      cta: "Ja, ik wil dit",
      featured: true,
    },
  ];

  React.useEffect(() => {
    const tabButtons = Array.from(document.querySelectorAll(".services-section [data-tab]"));
    const tabPanels = Array.from(document.querySelectorAll(".services-section .tab-panel"));

    const setActiveTab = (targetId) => {
      tabButtons.forEach((button) => {
        const isActive = button.dataset.tab === targetId;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      tabPanels.forEach((panel) => {
        panel.classList.toggle("active", panel.id === targetId);
      });
    };

    const cleanups = tabButtons.map((button) => {
      const handleClick = () => setActiveTab(button.dataset.tab);
      button.addEventListener("click", handleClick);
      return () => button.removeEventListener("click", handleClick);
    });

    setActiveTab("stap3");

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return (
    <section className="services-section" id="diensten">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow on-dark">Hoe wij te werk gaan</span>
          <div>
            <h2>Eerst zien wat er fout gaat. Dan oplossen.<br/><span className="serif-italic">Daarna zorgen dat het zo blijft.</span></h2>
            <p className="lead" style={{ marginTop: 18, color: "var(--text-on-ink-dim)" }}>
              Geen losse projectjes — een doorlopend systeem. Klik door om per stap te zien wat we doen.
            </p>
          </div>
        </div>

        <div className="svc-tabs" role="tablist">
          {tabs.map((t, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              data-tab={`stap${i + 1}`}
              aria-selected={i === 2 ? "true" : "false"}
              className={`svc-tab ${i === 2 ? "active" : ""} ${t.featured ? "featured" : ""}`}
            >
              <span className="step-num">{t.step}</span>
              <span>{t.label}</span>
              {t.featured && <span className="tab-badge">Meest gekozen</span>}
            </button>
          ))}
        </div>

        {tabs.map((tab, i) => (
          <div
            key={tab.step}
            id={`stap${i + 1}`}
            className={`svc-panel tab-panel ${i === 2 ? "active" : ""} ${tab.featured ? "is-featured" : ""}`}
          >
            <div className="svc-copy">
              {tab.featured && <span className="featured-badge">★ Meest gekozen — onze core dienst</span>}
              <h3>{tab.title}</h3>
              <p className="promise">{tab.promise}</p>
              <p className="desc">{tab.desc}</p>
              <ul className="svc-checklist">
                {tab.list.map((item) => (
                  <li key={item}>
                    <div className="check"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="svc-slot">{tab.slot}</p>
              <a className="btn btn-on-dark" href="contact.html">
                {tab.cta} <span className="arrow">→</span>
              </a>
            </div>

            <div className="svc-visual">
              <div className="svc-visual-head">
                <div className="label">{tab.label} · live preview</div>
                <span className="live-pill"><span className="dot"/>RUNNING</span>
              </div>
              {i === 0 && <VizAnalyse />}
              {i === 1 && <VizFix />}
              {i === 2 && <VizMonitor />}
            </div>
          </div>
        ))}

        <ConcreteAreas />
      </div>
    </section>
  );
}

function ConcreteAreas() {
  const areas = [
    {
      title: "Data & tracking",
      items: ["Consent mode", "Analytics setup", "Datakwaliteit"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M3 12c3-6 15-6 18 0M3 12c3 6 15 6 18 0M3 12h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
      ),
    },
    {
      title: "Website & techniek",
      items: ["Scripts", "Snelheid", "Structuur"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M9 8l-4 4 4 4M15 8l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
    },
    {
      title: "E-mail & flows",
      items: ["Toestemming", "Automatisering", "Data gebruik"],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20"><rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>
      ),
    },
  ];
  return (
    <div className="concrete-areas">
      <div className="concrete-head">
        <span className="eyebrow on-dark">Onderdelen, geen losse diensten</span>
        <h3>Wat wij concreet aanpassen</h3>
        <p>Drie domeinen, allemaal onderdeel van hetzelfde compliance-werk. Niet apart te boeken — ze hangen samen.</p>
      </div>
      <div className="concrete-grid">
        {areas.map((a) => (
          <div key={a.title} className="concrete-card">
            <div className="concrete-icon">{a.icon}</div>
            <div className="concrete-body">
              <h4>{a.title}</h4>
              <ul>{a.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
      <p className="concrete-foot">
        Dit zijn <em>onderdelen</em> van het compliance werk — geen losse diensten. AI versnelt overal hetzelfde patroon: wat klopte, klopt morgen niet meer.
      </p>
    </div>
  );
}

function VizAnalyse() {
  const items = [
    { k: "bad",  name: "GA4 zonder consent gate",     meta: "/checkout, /producten",   tag: "Risico" },
    { k: "bad",  name: "Meta pixel — orphan",          meta: "Tag manager 4.2.1",       tag: "Risico" },
    { k: "warn", name: "Cookie banner mist functie/marketing split", meta: "WCAG niveau 2.1", tag: "Let op" },
    { k: "bad",  name: "Newsletter dubbele opt-in mist", meta: "Mailchimp lijst #2",     tag: "Risico" },
    { k: "warn", name: "Privacy beleid 14 mnd oud",     meta: "/privacy",                tag: "Let op" },
  ];
  return (
    <div className="viz-analyse">
      {items.map((it, i) => (
        <div key={i} className={`viz-issue ${it.k}`}>
          <div className="dot" />
          <div className="name">{it.name}</div>
          <div className="meta">{it.meta}</div>
          <div className="badge">{it.tag}</div>
        </div>
      ))}
    </div>
  );
}

function VizFix() {
  return (
    <div className="viz-fix">
      <div className="viz-diff">
        <div className="row del"><span className="sign">−</span><span>gtag('config', 'G-XXX', &#123; anonymize_ip: false &#125;)</span></div>
        <div className="row add"><span className="sign">+</span><span>if (consent.analytics) gtag('config', 'G-XXX')</span></div>
        <div className="row del"><span className="sign">−</span><span>fbq('track', 'PageView')</span></div>
        <div className="row add"><span className="sign">+</span><span>if (consent.marketing) fbq('track', 'PageView')</span></div>
      </div>
      <div className="viz-progress">
        <div className="viz-bar"><span className="name">Tracking</span><div className="track"><div className="fill" style={{ width: "100%" }}/></div><span className="pct">100%</span></div>
        <div className="viz-bar"><span className="name">Consent</span><div className="track"><div className="fill" style={{ width: "92%" }}/></div><span className="pct">92%</span></div>
        <div className="viz-bar"><span className="name">Data clean</span><div className="track"><div className="fill" style={{ width: "84%" }}/></div><span className="pct">84%</span></div>
        <div className="viz-bar"><span className="name">Forms</span><div className="track"><div className="fill" style={{ width: "100%" }}/></div><span className="pct">100%</span></div>
      </div>
    </div>
  );
}

function VizMonitor() {
  const pts = [82, 78, 88, 84, 92, 86, 94, 90, 96, 93, 98, 95, 99];
  const w = 100, h = 100;
  const stepX = w / (pts.length - 1);
  const min = 70, max = 100;
  const path = pts.map((p, i) => {
    const x = i * stepX;
    const y = h - ((p - min) / (max - min)) * h;
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <div className="viz-monitor">
      <div className="viz-graph">
        <span className="label-y">Compliance · 30d</span>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <line className="ggrid" x1="0" y1="25" x2={w} y2="25"/>
          <line className="ggrid" x1="0" y1="50" x2={w} y2="50"/>
          <line className="ggrid" x1="0" y1="75" x2={w} y2="75"/>
          <path className="garea" d={area} />
          <path className="gline" d={path} />
        </svg>
      </div>
      <div className="viz-events">
        <div className="viz-event ok"><span className="time">09:14</span><span className="ico"><svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text">Auto-fix toegepast — tracking script</span><span className="badge">Done</span></div>
        <div className="viz-event warn"><span className="time">06:02</span><span className="ico"><svg viewBox="0 0 16 16" fill="none" width="14" height="14"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></span><span className="text">Nieuw cookie domein gedetecteerd</span><span className="badge">Review</span></div>
        <div className="viz-event ok"><span className="time">gisteren</span><span className="ico"><svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span><span className="text">Wekelijkse compliance check geslaagd</span><span className="badge">Auto</span></div>
      </div>
    </div>
  );
}

window.Services = Services;

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Cases.jsx

```jsx
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

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/components/Footer.jsx

```jsx
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
            <a className="btn btn-on-dark" href="#scanner">Start gratis scan <span className="arrow" style={{ color: "var(--accent)" }}>→</span></a>
            <a className="btn btn-on-dark btn-secondary" href="contact.html">Plan 20-min gesprek</a>
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
              <h5>Diensten</h5>
              <ul>
                <li><a href="aanbod.html">Analyse / Check</a></li>
                <li><a href="aanbod.html">Fix &amp; optimalisatie</a></li>
                <li><a href="aanbod.html">Doorlopende monitoring</a></li>
                <li><a href="contact.html">Audit aanvragen</a></li>
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
                <li><a href="tel:+31208081234">+31 (0)20 — 808 12 34</a></li>
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

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/styles.v2.css

```css
:root {
  /* Tweakable accent — overridden by Tweaks panel */
  --accent-h: 32;
  --accent: oklch(0.78 0.16 var(--accent-h));
  --accent-soft: oklch(0.78 0.16 var(--accent-h) / 0.18);
  --accent-strong: oklch(0.7 0.18 var(--accent-h));

  /* Trust signal colors */
  --signal-ok: oklch(0.78 0.14 152);
  --signal-warn: oklch(0.82 0.16 78);
  --signal-bad: oklch(0.7 0.18 25);

  /* Surfaces — warm off-black, paper-warm light */
  --ink-0: oklch(0.16 0.012 60);
  --ink-1: oklch(0.2 0.014 60);
  --ink-2: oklch(0.26 0.014 60);
  --ink-3: oklch(0.36 0.012 60);
  --ink-line: oklch(0.32 0.012 60);
  --paper: oklch(0.97 0.008 80);
  --paper-2: oklch(0.94 0.012 80);
  --text-on-ink: oklch(0.96 0.008 80);
  --text-on-ink-dim: oklch(0.78 0.012 70);
  --text-on-ink-faint: oklch(0.6 0.012 70);
  --text-on-paper: oklch(0.18 0.012 60);
  --text-on-paper-dim: oklch(0.42 0.012 60);

  --r-sm: 6px;
  --r-md: 12px;
  --r-lg: 18px;
  --r-xl: 28px;

  --serif: "Fraunces", "Cormorant Garamond", Georgia, serif;
  --sans: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --mono: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  background: var(--paper);
  color: var(--text-on-paper);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

button, input, textarea, select { font: inherit; color: inherit; }
a { color: inherit; text-decoration: none; }

::selection { background: var(--accent); color: var(--ink-0); }

/* ─────────── Layout ─────────── */
.shell { width: 100%; }

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 720px) {
  .container { padding: 0 20px; }
}

/* ─────────── Type ─────────── */
.eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-paper-dim);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.eyebrow::before {
  content: "";
  width: 18px;
  height: 1px;
  background: currentColor;
  display: inline-block;
}
.eyebrow.on-dark { color: var(--text-on-ink-dim); }
.eyebrow.on-dark::before { background: var(--accent); width: 24px; height: 1px; }

h1, h2, h3, h4 {
  font-family: var(--serif);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.05;
  margin: 0;
  font-variation-settings: "opsz" 144, "SOFT" 30;
}

h1 { font-size: clamp(40px, 6.5vw, 88px); }
h2 { font-size: clamp(32px, 4.4vw, 56px); line-height: 1.04; }
h3 { font-size: clamp(20px, 2vw, 26px); line-height: 1.2; letter-spacing: -0.01em; }

.serif-italic { font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }

p { margin: 0; text-wrap: pretty; }

.lead {
  font-size: clamp(17px, 1.4vw, 19px);
  line-height: 1.55;
  color: var(--text-on-paper-dim);
  max-width: 56ch;
}

/* ─────────── Header ─────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 60;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: oklch(0.97 0.008 80 / 0.78);
  border-bottom: 1px solid oklch(0.85 0.008 80 / 0.6);
}
.site-header .inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 24px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--serif);
  font-size: 22px;
  letter-spacing: -0.01em;
  color: var(--text-on-paper);
}
.brand-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--signal-ok);
  box-shadow: 0 0 0 4px oklch(0.78 0.14 152 / 0.18);
  position: relative;
}
.brand-dot::after {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 1px solid var(--signal-ok);
  opacity: 0.5;
  animation: pulse-ring 2.6s ease-out infinite;
}
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(2.4); opacity: 0; }
}
.brand b { font-weight: 500; }
.brand .tld { color: var(--text-on-paper-dim); font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav a {
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-on-paper-dim);
  border-radius: 999px;
  transition: color 0.2s, background 0.2s;
}
.nav a:hover { color: var(--text-on-paper); background: oklch(0.92 0.008 80); }
.nav .portal {
  margin-left: 6px;
  padding: 8px 16px;
  border: 1px solid oklch(0.78 0.012 70);
  color: var(--text-on-paper);
}
.nav .portal:hover { border-color: var(--text-on-paper); background: transparent; }

.live-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px 6px 10px;
  border-radius: 999px;
  background: oklch(0.78 0.14 152 / 0.14);
  color: oklch(0.4 0.12 152);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
}
.live-pill .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: oklch(0.55 0.16 152);
  animation: blink 1.6s ease-in-out infinite;
}
@keyframes blink { 50% { opacity: 0.3; } }

@media (max-width: 900px) {
  .nav a:not(.portal) { display: none; }
}

/* ─────────── Buttons ─────────── */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform 0.15s, background 0.2s, color 0.2s, border-color 0.2s;
  white-space: nowrap;
}
.btn:hover { transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn-primary {
  background: var(--ink-0);
  color: var(--paper);
}
.btn-primary:hover { background: oklch(0.24 0.014 60); }
.btn-primary .arrow { color: var(--accent); }
.btn-secondary {
  background: transparent;
  color: var(--text-on-paper);
  border-color: oklch(0.78 0.012 70);
}
.btn-secondary:hover { border-color: var(--text-on-paper); }
.btn-ghost {
  background: transparent;
  color: var(--text-on-paper);
  padding: 10px 0;
}
.btn-ghost:hover { color: var(--accent-strong); }
.btn-on-dark {
  background: var(--paper);
  color: var(--ink-0);
}
.btn-on-dark:hover { background: oklch(1 0 0); }
.btn-on-dark.btn-secondary {
  background: transparent;
  color: var(--paper);
  border-color: oklch(1 0 0 / 0.25);
}
.btn-on-dark.btn-secondary:hover { border-color: oklch(1 0 0 / 0.6); }

/* ─────────── Hero ─────────── */
.hero {
  position: relative;
  background: var(--ink-0);
  color: var(--text-on-ink);
  overflow: hidden;
  padding: 56px 0 100px;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 500px at 85% 18%, oklch(0.78 0.16 var(--accent-h) / 0.16), transparent 60%),
    radial-gradient(700px 400px at 10% 80%, oklch(0.78 0.14 152 / 0.08), transparent 60%);
  pointer-events: none;
}
.hero .grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(900px 600px at 30% 40%, black, transparent 80%);
  -webkit-mask-image: radial-gradient(900px 600px at 30% 40%, black, transparent 80%);
  pointer-events: none;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 64px;
  align-items: center;
  padding-top: 56px;
}
@media (max-width: 1024px) {
  .hero-grid { grid-template-columns: 1fr; gap: 48px; }
}

.hero-copy h1 {
  margin-top: 18px;
  color: var(--paper);
}
.hero-copy h1 .accent {
  color: var(--accent);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
}
.hero-statement {
  margin-top: 28px;
  font-family: var(--serif);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  font-size: clamp(20px, 2vw, 24px);
  color: var(--text-on-ink-dim);
  line-height: 1.4;
  max-width: 32ch;
}
.hero-lead {
  margin-top: 20px;
  font-size: 16px;
  color: var(--text-on-ink-dim);
  max-width: 50ch;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 36px;
  flex-wrap: wrap;
}

.hero-meta {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: oklch(1 0 0 / 0.08);
  border-radius: var(--r-md);
  overflow: hidden;
  border: 1px solid oklch(1 0 0 / 0.06);
}
.hero-meta > div {
  background: var(--ink-0);
  padding: 18px 20px;
}
.hero-meta strong {
  display: block;
  font-family: var(--mono);
  font-size: 22px;
  font-weight: 500;
  color: var(--paper);
  letter-spacing: -0.02em;
}
.hero-meta span {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: var(--text-on-ink-faint);
  line-height: 1.4;
}
@media (max-width: 600px) {
  .hero-meta { grid-template-columns: 1fr; }
}

/* Hero monitor card */
.monitor {
  position: relative;
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-xl);
  padding: 24px;
  box-shadow:
    0 40px 80px -20px oklch(0 0 0 / 0.5),
    inset 0 1px 0 oklch(1 0 0 / 0.06);
}
.monitor::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: var(--r-xl);
  padding: 1px;
  background: linear-gradient(140deg, oklch(1 0 0 / 0.18), transparent 40%);
  -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.monitor-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid oklch(1 0 0 / 0.06);
}
.monitor-head .lights {
  display: flex;
  gap: 6px;
}
.monitor-head .lights span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: oklch(1 0 0 / 0.12);
}
.monitor-url {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-on-ink-faint);
  background: var(--ink-0);
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid oklch(1 0 0 / 0.06);
}
.monitor-url .https { color: var(--signal-ok); }

.monitor-body {
  padding-top: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  align-items: center;
}

.score-ring {
  position: relative;
  width: 132px;
  height: 132px;
}
.score-ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.score-ring .track { fill: none; stroke: oklch(1 0 0 / 0.06); stroke-width: 8; }
.score-ring .progress {
  fill: none;
  stroke: var(--accent);
  stroke-width: 8;
  stroke-linecap: round;
  transition: stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1);
}
.score-ring .progress.low { stroke: #E8593C; }
.score-ring .progress.mid { stroke: oklch(0.78 0.16 72); }
.score-ring .progress.high { stroke: oklch(0.72 0.14 152); }
.score-ring .num {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.score-ring .num b {
  font-family: var(--serif);
  font-size: 44px;
  font-weight: 400;
  color: var(--paper);
  letter-spacing: -0.03em;
  line-height: 1;
}
.score-ring .num small {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-on-ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-top: 6px;
}

.monitor-summary .label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.monitor-summary h3 {
  font-family: var(--serif);
  font-size: 22px;
  margin-top: 6px;
  color: var(--paper);
  line-height: 1.2;
}
.monitor-summary p {
  margin-top: 8px;
  font-size: 13px;
  color: var(--text-on-ink-dim);
  line-height: 1.5;
}

.monitor-checks {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.check-row {
  display: grid;
  grid-template-columns: 16px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 10px 14px;
  background: var(--ink-0);
  border: 1px solid oklch(1 0 0 / 0.04);
  border-radius: var(--r-sm);
  font-size: 13px;
  transition: background 0.2s;
}
.check-row:hover { background: var(--ink-2); }
.check-row .ico { width: 16px; height: 16px; display: flex; align-items: center; justify-content: center; }
.check-row .ico svg { width: 100%; height: 100%; }
.check-row.ok .ico { color: var(--signal-ok); }
.check-row.warn .ico { color: var(--signal-warn); }
.check-row.bad .ico { color: var(--signal-bad); }
.check-row .name { color: var(--text-on-ink); }
.check-row .meta {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-on-ink-faint);
}
.check-row.bad .meta { color: var(--signal-bad); }
.check-row.warn .meta { color: var(--signal-warn); }

.monitor-foot {
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid oklch(1 0 0 / 0.06);
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-on-ink-faint);
}
.monitor-foot .stamp { display: flex; align-items: center; gap: 6px; }
.monitor-foot .stamp .live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--signal-ok); animation: blink 1.6s infinite; }

/* Floating mini cards */
.float-card {
  position: absolute;
  background: var(--paper);
  color: var(--text-on-paper);
  border-radius: var(--r-md);
  padding: 12px 14px;
  box-shadow: 0 20px 40px -10px oklch(0 0 0 / 0.4);
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.float-card .ico {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.float-card strong {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-0);
}
.float-card span {
  display: block;
  color: var(--text-on-paper-dim);
  font-size: 11px;
  margin-top: 1px;
}
.float-1 {
  top: -22px;
  left: -32px;
  animation: float 6s ease-in-out infinite;
}
.float-2 {
  bottom: -16px;
  right: -28px;
  animation: float 7s 0.6s ease-in-out infinite reverse;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* ─────────── Scanner section ─────────── */
.scanner-section {
  background: var(--paper-2);
  padding: 100px 0;
  position: relative;
}
.scanner-section .inner {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 64px;
  align-items: start;
}
@media (max-width: 900px) {
  .scanner-section .inner { grid-template-columns: 1fr; }
}
.scanner-section h2 { margin-top: 18px; }
.scanner-section .lead { margin-top: 20px; }

.scanner {
  background: var(--paper);
  border: 1px solid oklch(0.88 0.008 80);
  border-radius: var(--r-lg);
  padding: 6px;
  position: relative;
  box-shadow: 0 30px 60px -30px oklch(0 0 0 / 0.18);
}
.scanner-input {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 10px 10px 16px;
  background: oklch(0.97 0.008 80);
  border-radius: var(--r-md);
}
.scanner-input .https {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--text-on-paper-dim);
}
.scanner-input input {
  flex: 1;
  border: 0;
  background: transparent;
  padding: 12px 4px;
  font-size: 15px;
  outline: none;
  font-family: var(--mono);
}
.scanner-input input::placeholder { color: oklch(0.6 0.012 70); }
.scanner-input button {
  background: var(--ink-0);
  color: var(--paper);
  border: 0;
  border-radius: 8px;
  padding: 12px 22px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;
  white-space: nowrap;
}
.scanner-input button:hover { background: oklch(0.26 0.014 60); }
.scanner-input button:disabled { opacity: 0.6; cursor: progress; }

.scanner-result {
  margin-top: 18px;
  border-radius: var(--r-md);
  background: var(--ink-0);
  color: var(--text-on-ink);
  overflow: hidden;
  min-height: 280px;
}
.scanner-example,
.scanner-success-card {
  padding: 22px;
}
.scanner-state-empty {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 13px;
}
.scanner-state-empty .scan-line {
  width: 200px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
  animation: scan-sweep 2.4s linear infinite;
}
@keyframes scan-sweep {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(50%); }
}

.scanning {
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.scan-step {
  display: grid;
  grid-template-columns: 18px 1fr auto;
  gap: 12px;
  align-items: center;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--text-on-ink-faint);
  opacity: 0.4;
  transition: opacity 0.3s;
}
.scan-step.active { opacity: 1; color: var(--accent); }
.scan-step.done { opacity: 0.85; color: var(--text-on-ink-dim); }
.scan-step.done .ico { color: var(--signal-ok); }
.scan-step .ico { width: 18px; height: 18px; display: flex; align-items: center; justify-content: center; }
.scan-step .ico .spin { animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.scan-step .pct { font-weight: 500; }

.scan-results {
  padding: 22px;
}
.scan-results h4 {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--paper);
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}
.scan-results .summary {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-on-ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 18px;
}

.scan-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 16px;
}
@media (max-width: 540px) { .scan-grid { grid-template-columns: 1fr; } }

.scan-item {
  background: oklch(1 0 0 / 0.03);
  border: 1px solid oklch(1 0 0 / 0.06);
  border-radius: var(--r-sm);
  padding: 12px 14px;
}
.scan-item .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.scan-item .label {
  font-size: 12px;
  color: var(--text-on-ink-dim);
}
.scan-item.bad { border-color: oklch(0.7 0.18 25 / 0.4); background: oklch(0.7 0.18 25 / 0.06); }
.scan-item.warn { border-color: oklch(0.82 0.16 78 / 0.35); background: oklch(0.82 0.16 78 / 0.06); }
.scan-item.ok { border-color: oklch(0.78 0.14 152 / 0.3); background: oklch(0.78 0.14 152 / 0.06); }
.scan-item .badge {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}
.scan-item.bad .badge { color: var(--signal-bad); }
.scan-item.warn .badge { color: var(--signal-warn); }
.scan-item.ok .badge { color: var(--signal-ok); }
.scan-item .value {
  font-family: var(--serif);
  font-size: 28px;
  margin-top: 8px;
  color: var(--paper);
  line-height: 1;
}
.scan-item .note {
  margin-top: 6px;
  font-size: 11px;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
}

.scanner-success-card {
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-sm);
  background: oklch(1 0 0 / 0.03);
  display: grid;
  gap: 10px;
}

.scanner-success-card p {
  color: var(--text-on-ink-dim);
  font-size: 14px;
}

.scanner-success-card strong {
  color: var(--paper);
}

.scan-cta {
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  background: oklch(1 0 0 / 0.04);
  border-radius: var(--r-sm);
  border: 1px solid oklch(1 0 0 / 0.06);
}
.scan-cta p {
  font-size: 13px;
  color: var(--text-on-ink-dim);
}
.scan-cta p strong { color: var(--paper); font-weight: 600; }

.scanner-lead-form {
  margin-top: 14px;
  padding: 16px;
  border-radius: var(--r-sm);
  background: oklch(1 0 0 / 0.03);
  border: 1px solid oklch(1 0 0 / 0.06);
}

.scanner-lead-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.scanner-lead-grid.single {
  grid-template-columns: 1fr;
  margin-bottom: 10px;
}

.scanner-lead-form label {
  display: grid;
  gap: 8px;
}

.scanner-lead-form label span {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-on-ink-faint);
}

.scanner-lead-form input {
  width: 100%;
  border: 1px solid oklch(1 0 0 / 0.1);
  border-radius: 10px;
  background: oklch(1 0 0 / 0.04);
  color: var(--paper);
  padding: 13px 14px;
  outline: none;
}

.scanner-lead-form input::placeholder {
  color: var(--text-on-ink-faint);
}

.scanner-lead-actions {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.scanner-lead-actions p {
  font-size: 12px;
  color: var(--text-on-ink-faint);
  max-width: 42ch;
}

@media (max-width: 680px) {
  .scanner-lead-grid {
    grid-template-columns: 1fr;
  }

  .scanner-lead-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* ─────────── Layers section (3 lagen) ─────────── */
.layers-section {
  padding: 120px 0;
  background: var(--paper);
  position: relative;
}
.section-head {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  margin-bottom: 64px;
  align-items: end;
}
@media (max-width: 800px) {
  .section-head { grid-template-columns: 1fr; gap: 24px; }
}
.section-head h2 { margin-top: 18px; max-width: 16ch; }
.section-head p { color: var(--text-on-paper-dim); max-width: 50ch; }

.layers-stack {
  display: grid;
  gap: 12px;
}
.layer {
  display: grid;
  grid-template-columns: 80px 1fr 1.4fr 220px;
  align-items: center;
  gap: 32px;
  padding: 32px;
  border-radius: var(--r-lg);
  background: var(--paper-2);
  border: 1px solid oklch(0.88 0.008 80);
  transition: background 0.25s, border-color 0.25s, transform 0.25s;
  cursor: pointer;
}
.layer:hover {
  background: var(--ink-0);
  color: var(--text-on-ink);
  border-color: var(--ink-0);
}
.layer:hover .layer-num { color: var(--accent); }
.layer:hover h3 { color: var(--paper); }
.layer:hover p { color: var(--text-on-ink-dim); }
.layer:hover .layer-arrow { background: var(--accent); color: var(--ink-0); transform: translateX(4px); }
.layer:hover .pill { background: oklch(1 0 0 / 0.08); border-color: oklch(1 0 0 / 0.14); color: var(--text-on-ink-dim); }
@media (max-width: 900px) {
  .layer { grid-template-columns: 60px 1fr; gap: 20px; padding: 24px; }
  .layer .layer-desc, .layer .layer-arrow-wrap { grid-column: 1 / -1; }
  .layer .layer-arrow-wrap { justify-self: start; }
}

.layer-num {
  font-family: var(--serif);
  font-size: 56px;
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  color: var(--text-on-paper-dim);
  line-height: 1;
  letter-spacing: -0.04em;
  transition: color 0.25s;
}
.layer h3 { font-size: 28px; transition: color 0.25s; }
.layer .pills {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.layer .pill {
  font-family: var(--mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid oklch(0.88 0.008 80);
  color: var(--text-on-paper-dim);
  background: var(--paper);
  transition: all 0.25s;
}
.layer-desc { color: var(--text-on-paper-dim); transition: color 0.25s; line-height: 1.55; }
.layer-arrow-wrap { display: flex; justify-content: flex-end; }
.layer-arrow {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--paper);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
}

/* ─────────── Services tabs ─────────── */
.services-section {
  padding: 120px 0;
  background: var(--ink-0);
  color: var(--text-on-ink);
  position: relative;
  overflow: hidden;
}
.services-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 1px 1px, oklch(1 0 0 / 0.06) 1px, transparent 0);
  background-size: 28px 28px;
  mask-image: radial-gradient(900px 600px at 80% 30%, black, transparent 70%);
  -webkit-mask-image: radial-gradient(900px 600px at 80% 30%, black, transparent 70%);
  pointer-events: none;
}
.services-section .container { position: relative; }

.services-section .section-head h2 { color: var(--paper); }
.services-section .section-head p { color: var(--text-on-ink-dim); }

.svc-tabs {
  display: flex;
  gap: 4px;
  padding: 6px;
  background: var(--ink-1);
  border-radius: 999px;
  border: 1px solid oklch(1 0 0 / 0.06);
  margin-bottom: 32px;
  width: fit-content;
}
@media (max-width: 700px) { .svc-tabs { width: 100%; overflow-x: auto; } }
.svc-tab {
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-on-ink-dim);
  cursor: pointer;
  transition: all 0.2s;
  border: 0;
  background: transparent;
  font-family: var(--mono);
  letter-spacing: 0.04em;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.svc-tab:hover { color: var(--paper); }
.svc-tab.active {
  background: var(--paper);
  color: var(--ink-0);
}
.svc-tab .step-num { opacity: 0.5; }
.svc-tab.active .step-num { opacity: 1; color: var(--accent-strong); }

.svc-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}
.tab-panel {
  display: none;
}
.tab-panel.active {
  display: grid;
}
@media (max-width: 900px) {
  .svc-panel { grid-template-columns: 1fr; gap: 40px; }
}
.svc-panel h3 {
  font-size: clamp(32px, 3.4vw, 44px);
  color: var(--paper);
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}
.svc-panel .promise {
  font-family: var(--serif);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  font-size: 18px;
  color: var(--accent);
  margin-bottom: 24px;
}
.svc-panel .desc {
  color: var(--text-on-ink-dim);
  line-height: 1.6;
  margin-bottom: 32px;
}

.svc-checklist {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.svc-checklist li {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 12px;
  align-items: start;
  font-size: 15px;
  color: var(--text-on-ink);
  padding-bottom: 12px;
  border-bottom: 1px solid oklch(1 0 0 / 0.06);
}
.svc-checklist li:last-child { border-bottom: 0; }
.svc-checklist .check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}

.svc-visual {
  position: relative;
  border-radius: var(--r-lg);
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.06);
  padding: 28px;
  min-height: 420px;
  overflow: hidden;
}
.svc-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, oklch(0.78 0.16 var(--accent-h) / 0.06), transparent 60%);
}
.svc-visual-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
}
.svc-visual-head .label {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-on-ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}
.svc-visual-head .live-pill {
  background: oklch(0.78 0.14 152 / 0.18);
  color: var(--signal-ok);
}

/* Analyse visual */
.viz-analyse {
  display: grid;
  gap: 10px;
  position: relative;
}
.viz-issue {
  display: grid;
  grid-template-columns: 8px 1fr auto auto;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  background: oklch(1 0 0 / 0.03);
  border-left: 3px solid var(--signal-bad);
  border-radius: 0 var(--r-sm) var(--r-sm) 0;
  font-size: 13px;
  animation: slidein 0.5s ease-out backwards;
}
.viz-issue:nth-child(2) { animation-delay: 0.1s; }
.viz-issue:nth-child(3) { animation-delay: 0.2s; }
.viz-issue:nth-child(4) { animation-delay: 0.3s; }
.viz-issue:nth-child(5) { animation-delay: 0.4s; }
@keyframes slidein {
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
}
.viz-issue.warn { border-left-color: var(--signal-warn); }
.viz-issue .dot { width: 0; }
.viz-issue .name { color: var(--paper); font-weight: 500; }
.viz-issue .meta { font-family: var(--mono); font-size: 11px; color: var(--text-on-ink-faint); }
.viz-issue .badge {
  padding: 3px 8px;
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
  background: oklch(0.7 0.18 25 / 0.16);
  color: var(--signal-bad);
}
.viz-issue.warn .badge { background: oklch(0.82 0.16 78 / 0.16); color: var(--signal-warn); }

/* Fix visual */
.viz-fix {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.viz-diff {
  background: oklch(1 0 0 / 0.03);
  border-radius: var(--r-sm);
  border: 1px solid oklch(1 0 0 / 0.06);
  overflow: hidden;
}
.viz-diff .row {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  padding: 8px 12px;
  font-family: var(--mono);
  font-size: 12px;
  align-items: center;
}
.viz-diff .row.add { background: oklch(0.78 0.14 152 / 0.08); color: oklch(0.85 0.14 152); }
.viz-diff .row.del { background: oklch(0.7 0.18 25 / 0.08); color: oklch(0.85 0.14 25); text-decoration: line-through; opacity: 0.7; }
.viz-diff .row .sign { color: currentColor; opacity: 0.7; }
.viz-progress {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
}
.viz-bar {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 14px;
  align-items: center;
  font-size: 12px;
}
.viz-bar .name { color: var(--text-on-ink-dim); font-family: var(--mono); }
.viz-bar .track {
  height: 6px;
  background: oklch(1 0 0 / 0.05);
  border-radius: 999px;
  overflow: hidden;
  position: relative;
}
.viz-bar .fill {
  height: 100%;
  background: var(--accent);
  border-radius: 999px;
  animation: fill-grow 1.4s ease-out;
}
@keyframes fill-grow {
  from { width: 0 !important; }
}
.viz-bar .pct { font-family: var(--mono); color: var(--paper); min-width: 40px; text-align: right; font-weight: 500; }

/* Monitoring visual */
.viz-monitor {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.viz-graph {
  height: 140px;
  background: oklch(1 0 0 / 0.02);
  border-radius: var(--r-sm);
  border: 1px solid oklch(1 0 0 / 0.06);
  position: relative;
  padding: 12px;
  overflow: hidden;
}
.viz-graph svg { width: 100%; height: 100%; }
.viz-graph .gline { fill: none; stroke: var(--accent); stroke-width: 2; }
.viz-graph .garea { fill: var(--accent-soft); }
.viz-graph .ggrid { stroke: oklch(1 0 0 / 0.04); stroke-width: 1; }
.viz-graph .label-y {
  position: absolute;
  top: 12px;
  right: 14px;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-on-ink-faint);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.viz-events {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.viz-event {
  display: grid;
  grid-template-columns: 60px 18px 1fr auto;
  gap: 12px;
  align-items: center;
  font-size: 12px;
  padding: 10px 14px;
  background: oklch(1 0 0 / 0.03);
  border-radius: var(--r-sm);
}
.viz-event .time { font-family: var(--mono); color: var(--text-on-ink-faint); }
.viz-event .ico { display: flex; align-items: center; justify-content: center; width: 18px; height: 18px; }
.viz-event.ok .ico { color: var(--signal-ok); }
.viz-event.warn .ico { color: var(--signal-warn); }
.viz-event .text { color: var(--text-on-ink); }
.viz-event .badge { font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-on-ink-faint); }

/* ─────────── Cases section ─────────── */
.cases-section { padding: 120px 0; background: var(--paper); }
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
@media (max-width: 900px) { .cases-grid { grid-template-columns: 1fr; } }

.case-card {
  position: relative;
  background: var(--paper-2);
  border: 1px solid oklch(0.88 0.008 80);
  border-radius: var(--r-lg);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: all 0.3s;
  cursor: pointer;
  overflow: hidden;
  min-height: 380px;
}
.case-card::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: var(--r-lg);
  background: linear-gradient(160deg, var(--accent-soft), transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.case-card:hover { transform: translateY(-4px); border-color: var(--ink-0); }
.case-card:hover::after { opacity: 1; }

.case-tag {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-on-paper-dim);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.case-tag::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}
.case-card h3 {
  font-family: var(--serif);
  font-size: 24px;
  letter-spacing: -0.01em;
  line-height: 1.2;
  position: relative;
}
.case-stat {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px dashed oklch(0.78 0.012 70);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.case-stat strong {
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 400;
  color: var(--ink-0);
  letter-spacing: -0.03em;
  display: block;
  line-height: 1;
}
.case-stat span {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--text-on-paper-dim);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-top: 6px;
  line-height: 1.4;
}
.case-card .read {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--ink-0);
  position: relative;
}
.case-card .read .arrow { transition: transform 0.25s; }
.case-card:hover .read .arrow { transform: translateX(4px); color: var(--accent-strong); }

/* ─────────── CTA strip ─────────── */
.cta-strip {
  position: relative;
  background: var(--ink-0);
  color: var(--text-on-ink);
  padding: 100px 0;
  overflow: hidden;
}
.cta-strip::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(800px 400px at 70% 50%, oklch(0.78 0.16 var(--accent-h) / 0.15), transparent 70%);
}
.cta-strip .inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 48px;
  align-items: center;
}
@media (max-width: 800px) { .cta-strip .inner { grid-template-columns: 1fr; gap: 32px; } }
.cta-strip h2 { color: var(--paper); }
.cta-strip h2 .accent { color: var(--accent); font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }
.cta-strip p { color: var(--text-on-ink-dim); margin-top: 18px; max-width: 50ch; }
.cta-strip .actions { display: flex; gap: 12px; flex-wrap: wrap; }
.cta-stat-stack { display: flex; flex-direction: column; gap: 14px; }
.cta-stat {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: center;
  padding: 16px 20px;
  border: 1px solid oklch(1 0 0 / 0.1);
  border-radius: var(--r-md);
  background: oklch(1 0 0 / 0.02);
}
.cta-stat strong {
  font-family: var(--serif);
  font-size: 40px;
  color: var(--paper);
  letter-spacing: -0.03em;
  font-weight: 400;
  line-height: 1;
}
.cta-stat span { font-size: 13px; color: var(--text-on-ink-dim); }

/* ─────────── Footer ─────────── */
.footer {
  background: var(--ink-0);
  color: var(--text-on-ink-dim);
  padding: 60px 0 28px;
  border-top: 1px solid oklch(1 0 0 / 0.06);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, 1fr);
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid oklch(1 0 0 / 0.06);
}
@media (max-width: 800px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
.footer h5 {
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-on-ink-faint);
  margin: 0 0 16px;
}
.footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.footer ul a { font-size: 14px; color: var(--text-on-ink-dim); transition: color 0.2s; }
.footer ul a:hover { color: var(--paper); }
.footer .brand-block .brand { color: var(--paper); }
.footer .brand-block .tagline { font-size: 13px; max-width: 32ch; margin-top: 12px; line-height: 1.5; }
.footer-base {
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--text-on-ink-faint);
  flex-wrap: wrap;
  gap: 12px;
}
.footer-base .legal { display: flex; gap: 18px; }
.footer-base a:hover { color: var(--paper); }

/* Marquee for compliance regulations */
.marquee {
  background: var(--paper-2);
  border-block: 1px solid oklch(0.88 0.008 80);
  padding: 18px 0;
  overflow: hidden;
  white-space: nowrap;
}
.marquee-track {
  display: inline-flex;
  gap: 56px;
  animation: marquee 40s linear infinite;
  font-family: var(--serif);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  font-size: 22px;
  color: var(--text-on-paper-dim);
  align-items: center;
}
.marquee-track .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* Reveal-on-scroll */
.reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.2,.8,.2,1); }
.reveal.in { opacity: 1; transform: translateY(0); }


/* ─────────── Services tabs — featured + new copy elements ─────────── */
.svc-tab.featured { position: relative; }
.svc-tab .tab-badge {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 999px;
  background: var(--accent);
  color: var(--ink-0);
  margin-left: 4px;
  font-weight: 600;
}
.svc-tab.active.featured .tab-badge { background: var(--accent); color: var(--ink-0); }

.svc-panel.is-featured .svc-visual {
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.4);
  box-shadow: 0 0 0 1px oklch(0.78 0.16 var(--accent-h) / 0.15), 0 30px 60px -30px oklch(0.78 0.16 var(--accent-h) / 0.25);
}
.svc-panel.is-featured .svc-visual::before {
  background: linear-gradient(140deg, oklch(0.78 0.16 var(--accent-h) / 0.14), transparent 60%);
}

.featured-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--accent-soft);
  color: var(--accent);
  border: 1px solid oklch(0.78 0.16 var(--accent-h) / 0.3);
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 18px;
}

.svc-slot {
  font-family: var(--serif);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  font-size: 17px;
  line-height: 1.45;
  color: var(--paper);
  margin: 4px 0 26px;
  padding: 16px 18px;
  border-left: 2px solid var(--accent);
  background: oklch(1 0 0 / 0.03);
  border-radius: 0 var(--r-sm) var(--r-sm) 0;
  max-width: 44ch;
}

/* Concrete areas */
.concrete-areas {
  margin-top: 100px;
  padding-top: 60px;
  border-top: 1px solid oklch(1 0 0 / 0.08);
}
.concrete-head {
  max-width: 60ch;
  margin: 0 auto 40px;
  text-align: center;
}
.concrete-head h3 {
  font-family: var(--serif);
  font-size: clamp(28px, 3vw, 36px);
  color: var(--paper);
  margin: 14px 0 12px;
  letter-spacing: -0.02em;
}
.concrete-head .eyebrow { justify-content: center; display: inline-flex; }
.concrete-head p {
  color: var(--text-on-ink-dim);
  font-size: 15px;
  line-height: 1.55;
}

.concrete-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
@media (max-width: 800px) { .concrete-grid { grid-template-columns: 1fr; } }

.concrete-card {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 16px;
  align-items: start;
  padding: 22px 24px;
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.06);
  border-radius: var(--r-md);
  transition: border-color 0.25s, transform 0.25s, background 0.25s;
}
.concrete-card:hover {
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.4);
  background: oklch(0.2 0.014 60);
  transform: translateY(-2px);
}
.concrete-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}
.concrete-body h4 {
  font-family: var(--serif);
  font-size: 20px;
  color: var(--paper);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
  font-weight: 400;
}
.concrete-body ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.concrete-body ul li {
  font-family: var(--mono);
  font-size: 11px;
  padding: 3px 10px;
  background: oklch(1 0 0 / 0.04);
  border: 1px solid oklch(1 0 0 / 0.06);
  border-radius: 999px;
  color: var(--text-on-ink-dim);
  letter-spacing: 0.02em;
}

.concrete-foot {
  margin-top: 32px;
  text-align: center;
  font-size: 13px;
  color: var(--text-on-ink-faint);
  font-family: var(--sans);
  max-width: 60ch;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}
.concrete-foot em {
  color: var(--accent);
  font-style: italic;
  font-family: var(--serif);
  font-variation-settings: "opsz" 144, "SOFT" 80;
}


/* ─────────── Dominant Layers section (the pitch) ─────────── */
.layers-dominant {
  position: relative;
  background: var(--ink-0);
  color: var(--text-on-ink);
  padding: 120px 0 140px;
  overflow: hidden;
}
.layers-dominant.is-standalone { padding-top: 80px; }
.layers-bg { position: absolute; inset: 0; pointer-events: none; }
.layers-bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(1100px 700px at 50% 30%, black, transparent 80%);
  -webkit-mask-image: radial-gradient(1100px 700px at 50% 30%, black, transparent 80%);
}
.layers-bg-glow {
  position: absolute; inset: 0;
  background:
    radial-gradient(700px 400px at 80% 20%, oklch(0.78 0.16 var(--accent-h) / 0.18), transparent 70%),
    radial-gradient(600px 400px at 15% 85%, oklch(0.78 0.14 152 / 0.08), transparent 70%);
}
.layers-dominant .container { position: relative; }

.layers-head {
  max-width: 980px;
  margin: 0 auto 80px;
  text-align: center;
}
.layers-head h2 {
  margin-top: 22px;
  color: var(--paper);
  font-size: clamp(40px, 5.6vw, 76px);
  line-height: 1.05;
  letter-spacing: -0.02em;
}
.layers-head .accent-text { color: var(--accent); font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }
.layers-head .eyebrow { display: inline-flex; }
.layers-head-lead {
  margin: 28px auto 0;
  color: var(--text-on-ink-dim);
  font-size: 17px;
  line-height: 1.6;
  max-width: 56ch;
}

.layers-dominant-stack {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-bottom: 80px;
}
@media (max-width: 1024px) { .layers-dominant-stack { grid-template-columns: 1fr; gap: 20px; } }

.layers-grid-eight {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 1120px) {
  .layers-grid-eight {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .layers-grid-eight {
    grid-template-columns: 1fr;
  }
}

.layer-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 36px 32px;
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-xl);
  color: var(--text-on-ink);
  transition: transform 0.35s cubic-bezier(.2,.8,.2,1), border-color 0.3s, background 0.3s;
  overflow: hidden;
  min-height: 460px;
}
a.layer-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;
}
.layer-card--overview {
  min-height: 320px;
  padding: 34px 30px 28px;
}
.layer-card--special {
  background: #162018;
  border-left: 3px solid #E8593C;
}
.layer-card-label {
  position: absolute;
  top: 22px;
  right: 24px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #E8593C;
  text-decoration: none;
}
.layer-card-link {
  margin-top: auto;
  color: #E8593C;
  font-family: var(--sans);
  font-size: 14px;
  text-decoration: none;
}
.layer-card-link:hover {
  opacity: 0.85;
}
.layer-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 60%, oklch(0.78 0.16 var(--accent-h) / 0.06));
  opacity: 0;
  transition: opacity 0.35s;
  pointer-events: none;
}
.layer-card:hover {
  transform: translateY(-6px);
  border-color: rgba(232,98,42,0.4);
  background: oklch(0.22 0.014 60);
}
.layer-card:hover::before { opacity: 1; }
.layer-card:hover .layer-card-arrow { background: var(--accent); color: var(--ink-0); transform: translateX(6px); }

.layer-card.is-featured {
  background: linear-gradient(180deg, oklch(0.22 0.014 60), var(--ink-1));
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.5);
  box-shadow: 0 30px 80px -40px oklch(0.78 0.16 var(--accent-h) / 0.4);
}
.layer-card.is-featured::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: var(--r-xl);
  padding: 1px;
  background: linear-gradient(160deg, oklch(0.78 0.16 var(--accent-h) / 0.6), transparent 50%);
  -webkit-mask: linear-gradient(#000, #000) content-box, linear-gradient(#000, #000);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.layer-card-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
}
.layer-card-num {
  font-family: var(--serif);
  font-style: italic;
  font-size: 88px;
  font-weight: 400;
  color: var(--accent);
  line-height: 1;
  letter-spacing: -0.04em;
  font-variation-settings: "opsz" 144, "SOFT" 80;
}
.layer-card-flag {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  padding: 6px 12px;
  background: var(--accent);
  color: var(--ink-0);
  border-radius: 999px;
  font-weight: 600;
}
.layer-card-kicker {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 12px;
}
.layer-card h3 {
  font-family: var(--serif);
  font-size: clamp(28px, 2.6vw, 36px);
  color: var(--paper);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
  line-height: 1.1;
  font-weight: 400;
  white-space: pre-line;
}
.layer-card-desc {
  color: var(--text-on-ink-dim);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
}
.layer-card-pills {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.layer-card-pill {
  font-family: var(--mono);
  font-size: 11px;
  padding: 4px 10px;
  background: oklch(1 0 0 / 0.04);
  border: 1px solid oklch(1 0 0 / 0.08);
  color: var(--text-on-ink-dim);
  border-radius: 999px;
}
.layer-card-foot {
  margin-top: auto;
  padding-top: 18px;
  border-top: 1px solid oklch(1 0 0 / 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--sans);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #E8593C;
}
.layer-card:hover .layer-card-foot { color: #E8593C; }
.layer-card-arrow {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #E8593C;
  color: #ffffff;
  border: 1.5px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.layer-card:hover .layer-card-arrow {
  background: #ffffff;
  color: #E8593C;
  border-color: #E8593C;
  transform: none;
}

.layers-closing {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}
.layers-closing p {
  font-family: var(--serif);
  font-size: clamp(28px, 3.2vw, 40px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--paper);
  margin-bottom: 32px;
}
.layers-closing .accent-text { color: var(--accent); font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }

.about-bart {
  padding: 0 0 110px;
  background: var(--ink-0);
}

.about-bart-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 34px;
  align-items: start;
}

.about-bart-photo {
  position: relative;
  background: rgba(255,255,255,0.04);
  border-radius: 8px;
  aspect-ratio: 3 / 4;
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0,0,0,0.18);
}

.about-bart-photo-main {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.about-bart-photo-secondary {
  position: absolute;
  right: 18px;
  bottom: 82px;
  width: 38%;
  max-width: 220px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 18px 34px rgba(0,0,0,0.28);
}

.about-bart-badge {
  position: absolute;
  right: 18px;
  bottom: 18px;
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: #E8622A;
  color: #0d1a0f;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
}

.about-bart-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.about-bart-stat {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 22px 24px;
  box-shadow: 0 16px 34px rgba(0,0,0,0.12);
}

.about-bart-stat strong {
  display: block;
  color: #E8622A;
  font-family: var(--serif);
  font-size: clamp(34px, 4vw, 48px);
  font-weight: 400;
  line-height: 1;
}

.about-bart-stat span {
  display: block;
  margin-top: 8px;
  color: var(--text-on-ink-dim);
  font-family: var(--sans);
  font-size: 14px;
}

.about-bart-text {
  margin: 24px 0;
  color: var(--text-on-ink-dim);
  font-size: 17px;
  line-height: 1.8;
  max-width: 62ch;
}

.about-bart-credentials {
  display: grid;
  gap: 14px;
}

.about-bart-credential {
  background: rgba(255,255,255,0.04);
  border-left: 3px solid #E8622A;
  padding: 16px 20px;
  border-radius: 10px;
  border-top: 1px solid rgba(255,255,255,0.08);
  border-right: 1px solid rgba(255,255,255,0.08);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 16px 34px rgba(0,0,0,0.12);
}

.about-bart-credential strong {
  display: block;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 4px;
}

.about-bart-credential span {
  color: var(--text-on-ink-dim);
  font-family: var(--sans);
  font-size: 14px;
}

@media (max-width: 980px) {
  .about-bart-grid {
    grid-template-columns: 1fr;
  }

  .about-bart-photo-secondary {
    width: 34%;
    bottom: 78px;
  }
}

/* ─────────── Dark-first consistency override ─────────── */
:root {
  --accent: #E8593C;
  --accent-soft: rgba(232, 89, 60, 0.16);
  --accent-strong: #E8593C;
  --ink-0: #0F0D0B;
  --ink-1: #151210;
  --ink-2: #1C1814;
  --ink-3: #2A241F;
  --ink-line: rgba(255,255,255,0.1);
  --text-on-ink: rgba(255,255,255,0.96);
  --text-on-ink-dim: rgba(255,255,255,0.72);
  --text-on-ink-faint: rgba(255,255,255,0.42);
}

html, body {
  background: var(--ink-0);
  color: var(--text-on-ink);
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.7;
}

body,
body.page-dark {
  background:
    radial-gradient(900px 500px at 85% 8%, rgba(232, 89, 60, 0.10), transparent 60%),
    radial-gradient(800px 420px at 10% 72%, rgba(95, 212, 140, 0.06), transparent 58%),
    var(--ink-0);
}

.eyebrow,
.eyebrow.on-dark {
  font-family: var(--sans);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.eyebrow::before,
.eyebrow.on-dark::before {
  width: 18px;
  height: 1px;
  background: rgba(255,255,255,0.4);
}

h1 { font-size: clamp(52px, 7vw, 96px); }
h2 { font-size: clamp(32px, 4vw, 52px); line-height: 1.06; }
h3 { font-size: 24px; }

p,
.lead,
.hero-lead,
.hero-statement,
.section-head p,
.layer-desc,
.monitor-summary p {
  font-family: var(--sans);
  font-size: 16px;
  line-height: 1.7;
}

.lead,
.hero-lead,
.hero-statement,
.section-head p {
  color: var(--text-on-ink-dim);
}

.site-header {
  background: rgba(15,13,11,0.85);
  border-bottom: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.brand { color: var(--paper); }
.brand .tld { color: var(--text-on-ink-faint); }

.nav a {
  color: var(--text-on-ink-dim);
}

.nav a:hover {
  color: var(--paper);
  background: transparent;
  opacity: 0.7;
}

.nav .portal {
  border-color: rgba(255,255,255,0.35);
  color: var(--paper);
}

.nav .portal:hover {
  border-color: rgba(255,255,255,0.7);
  background: transparent;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 56px;
  background: rgba(15,13,11,0.85);
  border-bottom: 0.5px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.site-header .inner {
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0;
  flex-wrap: nowrap;
}

.brand {
  flex: 0 0 auto;
  white-space: nowrap;
  color: #fff;
  font-family: var(--sans);
  font-size: 15px;
  line-height: 1;
}

.brand b {
  font-weight: 700;
}

.brand .tld {
  color: rgba(255,255,255,0.58);
}

.hero-line-plain {
  display: block;
  color: #ffffff;
  font-style: normal;
}

.hero-line-accent {
  display: block;
  color: #E8593C;
  font-style: italic;
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  flex: 1 1 auto;
  min-width: 0;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.nav > a,
.nav-dropdown > a {
  display: inline-flex;
  align-items: center;
  height: 56px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  color: rgba(255,255,255,0.75);
  font: 500 15px/1 var(--sans);
  opacity: 1;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.nav > a:hover,
.nav-dropdown > a:hover {
  color: rgba(255,255,255,1);
  background: transparent;
  opacity: 0.7;
}

.nav > a.active,
.nav-dropdown > a.active {
  color: #E8593C;
}

.nav .portal {
  flex: 0 0 auto;
  height: auto;
  padding: 8px 18px;
  border: 1px solid rgba(255,255,255,0.35);
  border-radius: 999px;
  color: #fff;
  font: 500 15px/1 var(--sans);
  background: transparent;
  transition: border-color 0.2s ease, transform 0.2s ease, color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.nav .portal:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(232,98,42,0.06);
  box-shadow: 0 0 0 1px rgba(232,98,42,0.08);
  opacity: 1;
}

.nav-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.nav-dropdown-menu {
  position: absolute;
  top: 56px;
  left: 0;
  min-width: 200px;
  padding: 8px 0;
  background: #1A1714;
  border: 0.5px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-6px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0s linear 0.25s;
}

.nav-dropdown.open .nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0s linear 0s;
}

.nav-dropdown-menu a {
  display: block;
  height: auto;
  padding: 12px 20px;
  color: rgba(255,255,255,0.75);
  font: 500 15px/1.35 var(--sans);
  background: transparent;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-dropdown-menu a:hover {
  background: rgba(255,255,255,0.06);
  color: #fff;
  opacity: 1;
}

.nav-dropdown-menu .nav-dropdown-flagship {
  margin-top: 4px;
  padding-top: 20px;
  border-top: 0.5px solid rgba(255,255,255,0.08);
  color: #ffffff;
  font-weight: 500;
}

.nav-flagship-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 10px;
  border-radius: 50%;
  background: #E8593C;
  vertical-align: middle;
}

.btn,
.btn-primary,
.btn-secondary,
.btn-on-dark,
.btn-on-dark.btn-secondary {
  border-radius: 999px;
  padding: 12px 24px;
  font-family: var(--sans);
  font-size: 15px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary,
.btn-on-dark {
  background: #fff;
  color: var(--ink-0);
  border: 1px solid transparent;
}

.btn-primary:hover,
.btn-on-dark:hover {
  background: #E8EAE6;
  transform: scale(1.02);
}

.btn-secondary,
.btn-on-dark.btn-secondary {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.35);
  color: #fff;
}

.btn-secondary:hover,
.btn-on-dark.btn-secondary:hover {
  border-color: rgba(255,255,255,0.7);
  background: transparent;
  transform: scale(1.02);
}

.hero,
.services-section,
.cases-section,
.cta-strip,
.footer,
.scanner-section {
  background: var(--ink-0);
  color: var(--text-on-ink);
}

.layers-section {
  background: linear-gradient(to bottom, #0F0D0B 0%, #1C1814 40%, #0F0D0B 100%);
  color: var(--text-on-ink);
}

.scanner,
.layer,
.layer-card,
.case-card,
.case-metric,
.scanner-input,
.scan-cta,
.scanner-success-card,
.scanner-lead-form {
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
}

.layer:hover,
.layer-card:hover,
.case-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.18);
}

.layer .pill,
.layer-card-pill {
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
  color: var(--text-on-ink-dim);
}

.scanner-input input,
.scanner-input .https {
  color: var(--text-on-ink-faint);
}

.scanner-input input {
  color: var(--paper);
}

.scanner-input button {
  background: #fff;
  color: var(--ink-0);
  border-radius: 999px;
}

.scanner-input button:hover {
  background: #E8EAE6;
}

.hero-copy h1 .accent,
.hero-copy h1 .accent-text,
.subpage-hero h1 .accent-text,
.cta-strip h2 .accent,
.layers-head .accent-text,
.layers-closing .accent-text {
  color: var(--accent);
}

.footer,
.footer .brand-block .brand,
.footer h5,
.footer-base,
.footer ul a {
  color: var(--text-on-ink-dim);
}

.footer ul a:hover,
.footer-base a:hover {
  color: var(--accent);
}

```

## /Users/vanderhorst/Documents/Codex/2026-04-24-ik-zou-graag-een-dienst-willen/Aicompliant-work/subpages.css

```css
/* Subpages — shared chrome, page-dark variant, subpage hero */

body.page-dark {
  background:
    radial-gradient(900px 500px at 85% 8%, oklch(0.78 0.16 var(--accent-h) / 0.14), transparent 60%),
    radial-gradient(800px 420px at 10% 72%, oklch(0.78 0.14 152 / 0.1), transparent 58%),
    var(--ink-0);
  color: var(--text-on-ink);
}
body.page-dark .site-header {
  background: oklch(0.16 0.012 60 / 0.78);
  border-bottom: 1px solid oklch(1 0 0 / 0.06);
}
body.page-dark .site-header .brand { color: var(--paper); }
body.page-dark .site-header .brand .tld { color: var(--text-on-ink-faint); }
body.page-dark .site-header .nav a {
  color: var(--text-on-ink-dim);
}
body.page-dark .site-header .nav a:hover {
  background: oklch(1 0 0 / 0.06);
  color: var(--paper);
}
body.page-dark .site-header .nav .portal {
  border-color: oklch(1 0 0 / 0.18);
  color: var(--paper);
}
body.page-dark .site-header .nav .portal:hover {
  border-color: var(--paper);
  background: oklch(1 0 0 / 0.04);
}

/* ─────────── Subpage hero ─────────── */
.subpage-hero {
  position: relative;
  background: var(--ink-0);
  color: var(--text-on-ink);
  padding: 120px 0 80px;
  overflow: hidden;
}
.subpage-hero.compact { padding: 100px 0 60px; }
.subpage-hero.light {
  background: var(--paper);
  color: var(--text-on-paper);
}
.subpage-hero h1 {
  margin-top: 18px;
  color: var(--paper);
  max-width: 14ch;
  line-height: 1.12;
}
.subpage-hero.light h1 { color: var(--text-on-paper); }
.subpage-hero h1 .accent-text { color: var(--accent); }
.subpage-hero .lead-on-dark {
  margin-top: 44px;
  font-size: 16px;
  color: var(--text-on-ink-dim);
  max-width: 50ch;
  line-height: 1.6;
}
.subpage-hero .grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(900px 600px at 30% 40%, black, transparent 80%);
  -webkit-mask-image: radial-gradient(900px 600px at 30% 40%, black, transparent 80%);
  pointer-events: none;
}
.subpage-hero .container { position: relative; }

/* ─────────── AI Kennisbank ─────────── */
.kb-grid-section {
  background: var(--ink-0);
  padding: 40px 0 120px;
}
.kb-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
@media (max-width: 900px) { .kb-grid { grid-template-columns: 1fr; } }

.article-card {
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.06);
  border-radius: var(--r-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, border-color 0.25s;
  cursor: pointer;
}
.article-card:hover {
  transform: translateY(-4px);
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.4);
}
.article-thumb {
  position: relative;
  height: 180px;
  background: var(--ink-0);
  overflow: hidden;
}
.article-thumb .thumb-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(400px 200px at 30% 60%, oklch(0.78 0.14 152 / 0.3), transparent 70%);
}
.article-card.tone-amber .thumb-glow { background: radial-gradient(400px 200px at 60% 40%, oklch(0.78 0.16 32 / 0.32), transparent 70%); }
.article-card.tone-cobalt .thumb-glow { background: radial-gradient(400px 200px at 40% 50%, oklch(0.7 0.16 240 / 0.32), transparent 70%); }
.article-card.tone-crimson .thumb-glow { background: radial-gradient(400px 200px at 50% 50%, oklch(0.7 0.18 18 / 0.28), transparent 70%); }
.article-thumb .thumb-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px),
    linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(300px 200px at 50% 50%, black, transparent 80%);
}
.article-body { padding: 24px 26px 28px; }
.article-tag {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-on-ink-faint);
}
.article-body h3 {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--paper);
  margin: 12px 0 12px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  font-weight: 400;
}
.article-body p {
  font-size: 14px;
  color: var(--text-on-ink-dim);
  line-height: 1.55;
  margin-bottom: 18px;
}
.read-link {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s;
}
.article-card:hover .read-link { gap: 12px; }

.article-page-section {
  background:
    radial-gradient(760px 420px at 92% 0%, oklch(0.78 0.16 var(--accent-h) / 0.12), transparent 60%),
    radial-gradient(760px 420px at 8% 36%, oklch(0.78 0.14 152 / 0.08), transparent 60%),
    var(--ink-0);
  padding: 48px 0 110px;
}

.article-layout {
  display: grid;
  grid-template-columns: 1.7fr 0.8fr;
  gap: 28px;
  align-items: start;
}
@media (max-width: 980px) { .article-layout { grid-template-columns: 1fr; } }

.article-main,
.article-side {
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-lg);
  padding: 28px;
}

.article-main h2 {
  color: var(--paper);
  margin: 18px 0 12px;
  font-size: clamp(26px, 2.5vw, 34px);
}

.article-main p,
.article-main li {
  color: var(--text-on-ink-dim);
  line-height: 1.8;
  font-size: 15px;
}

.article-main ul {
  margin: 14px 0 0;
  padding-left: 18px;
}

.article-divider {
  height: 1px;
  margin: 24px 0;
  background: oklch(1 0 0 / 0.08);
}

.article-side h3 {
  color: var(--paper);
  font-size: 24px;
  margin-bottom: 12px;
}

.article-side p {
  color: var(--text-on-ink-dim);
  line-height: 1.7;
  font-size: 14px;
}

.article-side .side-block {
  padding: 18px 0;
  border-top: 1px solid oklch(1 0 0 / 0.08);
}

.article-side .side-block:first-of-type {
  border-top: 0;
  padding-top: 0;
}

/* ─────────── Cases page ─────────── */
.cases-page-section {
  background:
    radial-gradient(760px 420px at 92% 0%, oklch(0.78 0.16 var(--accent-h) / 0.12), transparent 60%),
    radial-gradient(760px 420px at 8% 36%, oklch(0.78 0.14 152 / 0.08), transparent 60%),
    var(--ink-0);
  padding: 56px 0 120px;
}
.cases-filter-bar {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.cases-filter-pill {
  background: rgba(255,255,255,0.05);
  border: 0.5px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  padding: 8px 18px;
  color: rgba(255,255,255,0.6);
  font: 400 13px/1 var(--sans);
  cursor: pointer;
  transition: all 0.2s ease;
}
.cases-filter-pill:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.3);
  color: #ffffff;
}
.cases-filter-pill.active {
  background: rgba(232,89,60,0.12);
  border-color: #E8593C;
  color: #ffffff;
  font-weight: 500;
}
.cases-offer-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-bottom: 48px;
}
@media (max-width: 900px) { .cases-offer-strip { grid-template-columns: 1fr; } }
.cases-offer-card {
  position: relative;
  display: grid;
  gap: 14px;
  padding: 26px;
  border-radius: var(--r-lg);
  border: 1px solid oklch(1 0 0 / 0.1);
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.04), oklch(1 0 0 / 0.02)),
    var(--ink-1);
  color: var(--paper);
  box-shadow: 0 26px 60px -30px oklch(0 0 0 / 0.45);
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.cases-offer-card:hover {
  transform: translateY(-4px);
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.45);
}
.cases-offer-card.active {
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.55);
  box-shadow:
    0 0 0 1px oklch(0.78 0.16 var(--accent-h) / 0.18),
    0 30px 80px -34px oklch(0.78 0.16 var(--accent-h) / 0.45);
}
.cases-offer-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.cases-offer-tags span {
  padding: 7px 12px;
  border-radius: 999px;
  border: 1px solid oklch(1 0 0 / 0.1);
  color: var(--text-on-ink-dim);
  font-family: var(--mono);
  font-size: 11px;
}
.cases-offer-card strong {
  font-family: var(--serif);
  font-size: 28px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.08;
}
.cases-offer-card p {
  color: var(--text-on-ink-dim);
  font-size: 14px;
  line-height: 1.6;
}
.cases-offer-link {
  margin-top: 6px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-ink-faint);
}
.case-row {
  display: grid;
  grid-template-columns: 80px 1.6fr 1fr;
  gap: 40px;
  padding: 56px 0;
  border-top: 1px solid oklch(1 0 0 / 0.08);
  align-items: start;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.case-row:last-child { border-bottom: 1px solid oklch(1 0 0 / 0.08); }
.case-row.is-exiting {
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition-duration: 150ms;
}
.case-row.is-hidden {
  display: none;
}
@media (max-width: 900px) {
  .case-row { grid-template-columns: 1fr; gap: 24px; padding: 40px 0; }
}
.cases-empty-state {
  padding: 48px 0;
  text-align: center;
  color: rgba(255,255,255,0.4);
  font: 400 15px/1.7 var(--sans);
}
.case-row-num span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 82px;
  height: 36px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid oklch(1 0 0 / 0.1);
  background: oklch(1 0 0 / 0.04);
  font-family: var(--mono);
  font-size: 11px;
  color: var(--accent);
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

/* ─────────── Offer overview ─────────── */
.offer-overview-section {
  background:
    radial-gradient(760px 420px at 88% 0%, oklch(0.78 0.16 var(--accent-h) / 0.12), transparent 60%),
    radial-gradient(760px 420px at 12% 44%, oklch(0.78 0.14 152 / 0.08), transparent 60%),
    var(--ink-0);
  padding: 44px 0 116px;
}

.offer-overview-head {
  margin-bottom: 34px;
}

.offer-overview-head h2,
.service-template-head h2 {
  color: var(--paper);
}

.offer-overview-head p,
.service-template-head p {
  margin-top: 16px;
  max-width: 58ch;
  color: var(--text-on-ink-dim);
  line-height: 1.72;
}

.offer-overview-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-lg);
  overflow: hidden;
  background: oklch(0.14 0.012 60);
  box-shadow: 0 26px 70px -40px oklch(0 0 0 / 0.7);
}

@media (max-width: 900px) {
  .offer-overview-grid {
    grid-template-columns: 1fr;
  }
}

.offer-overview-grid .offer-grid-card.is-core {
  grid-column: 1 / -1;
  max-width: 560px;
  width: 100%;
  justify-self: center;
  border-right: 0;
  border-bottom: 0;
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.45);
  box-shadow:
    inset 0 0 0 1px oklch(0.78 0.16 var(--accent-h) / 0.22),
    0 26px 70px -40px oklch(0 0 0 / 0.7);
}

@media (max-width: 900px) {
  .offer-overview-grid .offer-grid-card.is-core {
    max-width: none;
    justify-self: stretch;
    border-bottom: 0;
  }
}

.offer-grid-card {
  position: relative;
  min-height: 188px;
  padding: 28px 24px;
  display: block;
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.018), oklch(1 0 0 / 0.01)),
    var(--ink-1);
  border-right: 1px solid oklch(1 0 0 / 0.08);
  border-bottom: 1px solid oklch(1 0 0 / 0.08);
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
}

.offer-grid-card:nth-child(2n) {
  border-right: 0;
}

@media (max-width: 900px) {
  .offer-grid-card {
    border-right: 0;
  }

  .offer-grid-card:not(:last-child) {
    border-bottom: 1px solid oklch(1 0 0 / 0.08);
  }

  .offer-grid-card:last-child {
    border-bottom: 0;
  }
}

.offer-grid-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(320px 140px at 84% 0%, oklch(0.78 0.16 var(--accent-h) / 0.14), transparent 65%);
  opacity: 0;
  transition: opacity 0.22s ease;
  pointer-events: none;
}

.offer-grid-card:hover {
  transform: scale(1.01);
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.36);
  box-shadow: inset 0 0 0 1px oklch(0.78 0.16 var(--accent-h) / 0.28);
  cursor: pointer;
}

.offer-grid-card:hover::after {
  opacity: 1;
}

.offer-grid-card__content {
  position: relative;
  z-index: 1;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.offer-grid-card h3 {
  color: var(--paper);
  font-size: clamp(26px, 2.6vw, 38px);
  font-family: var(--serif);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -0.03em;
  max-width: 11ch;
  white-space: pre-line;
}

.offer-grid-card p {
  margin-top: 16px;
  color: var(--text-on-ink-dim);
  line-height: 1.72;
  max-width: 38ch;
}

.offer-grid-card__tag {
  align-self: center;
  white-space: nowrap;
  color: var(--accent);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.offer-overview-pitch {
  padding: 56px 0 0;
  text-align: center;
}

.offer-overview-pitch p {
  max-width: 24ch;
  margin: 0 auto;
  color: var(--paper);
  font-family: var(--serif);
  font-size: clamp(34px, 4vw, 58px);
  line-height: 1.02;
  letter-spacing: -0.04em;
}

.pricing-services-section {
  background:
    radial-gradient(760px 420px at 90% 0%, oklch(0.78 0.16 var(--accent-h) / 0.1), transparent 60%),
    radial-gradient(760px 420px at 10% 88%, oklch(0.78 0.14 152 / 0.08), transparent 60%),
    var(--ink-0);
  padding: 10px 0 110px;
}

.pricing-services-grid {
  display: grid;
  gap: 18px;
}

.pricing-category {
  border-radius: var(--r-lg);
  border: 1px solid oklch(1 0 0 / 0.08);
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.03), oklch(1 0 0 / 0.01)),
    var(--ink-1);
  padding: 24px;
  box-shadow: 0 26px 70px -40px oklch(0 0 0 / 0.68);
}

.pricing-category-head {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 20px;
}

@media (max-width: 720px) {
  .pricing-category-head {
    flex-direction: column;
  }
}

.pricing-category-title {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.pricing-icon {
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background: oklch(1 0 0 / 0.05);
  border: 1px solid oklch(1 0 0 / 0.1);
  font-size: 18px;
}

.pricing-category h3 {
  color: var(--paper);
  font-family: var(--serif);
  font-size: 30px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.pricing-category-title p {
  margin-top: 8px;
  color: var(--text-on-ink-dim);
  line-height: 1.65;
}

.pricing-tier-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

@media (max-width: 980px) {
  .pricing-tier-grid {
    grid-template-columns: 1fr;
  }
}

.pricing-tier-card {
  min-height: 100%;
  border-radius: 20px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
  padding: 18px;
}

.pricing-tier-card.highlight {
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.4);
  box-shadow:
    inset 0 0 0 1px oklch(0.78 0.16 var(--accent-h) / 0.2),
    0 20px 50px -32px oklch(0.78 0.16 var(--accent-h) / 0.35);
  background:
    radial-gradient(260px 120px at 80% 0%, oklch(0.78 0.16 var(--accent-h) / 0.12), transparent 70%),
    oklch(1 0 0 / 0.04);
}

.pricing-tier-top strong {
  display: block;
  color: var(--paper);
  font-size: 20px;
  line-height: 1.15;
}

.pricing-tier-top p {
  margin-top: 10px;
  color: var(--text-on-ink-dim);
  line-height: 1.6;
}

.pricing-tier-badge {
  color: var(--accent);
}

.pricing-tier-list {
  margin: 16px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 8px;
}

.pricing-tier-list li {
  color: var(--text-on-ink-dim);
  line-height: 1.6;
}

.pricing-tier-list li.feature-portal {
  color: var(--paper);
}

.pricing-tier-list li.feature-portal::marker {
  color: oklch(0.78 0.14 152);
}

.pricing-note {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid oklch(1 0 0 / 0.08);
}

.pricing-note span {
  display: block;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.pricing-note p {
  margin-top: 8px;
  color: var(--text-on-ink-dim);
  line-height: 1.65;
}

/* ─────────── Service detail pages ─────────── */
.service-template-section {
  background:
    radial-gradient(760px 420px at 92% 0%, oklch(0.78 0.16 var(--accent-h) / 0.12), transparent 60%),
    radial-gradient(760px 420px at 8% 44%, oklch(0.78 0.14 152 / 0.08), transparent 60%),
    var(--ink-0);
  padding: 52px 0 120px;
}

.service-template-head {
  margin-bottom: 34px;
}

.service-template-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
}

@media (max-width: 960px) {
  .service-template-grid {
    grid-template-columns: 1fr;
  }
}

.service-panel,
.service-visual,
.service-cta-block {
  border-radius: var(--r-lg);
  border: 1px solid oklch(1 0 0 / 0.08);
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.03), oklch(1 0 0 / 0.01)),
    var(--ink-1);
  box-shadow: 0 24px 60px -34px oklch(0 0 0 / 0.62);
}

.service-panel {
  padding: 28px;
}

.service-panel h3 {
  color: var(--paper);
  font-size: 24px;
  margin-bottom: 14px;
}

.service-panel p,
.service-panel li {
  color: var(--text-on-ink-dim);
  line-height: 1.72;
}

.service-panel ul {
  margin: 0;
  padding-left: 18px;
}

.service-stack {
  display: grid;
  gap: 18px;
}

.service-visual {
  padding: 24px;
  display: grid;
  gap: 16px;
}

.service-visual-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: end;
}

.service-visual-header strong {
  color: var(--paper);
  font-size: 20px;
  font-weight: 600;
}

.service-visual-header span {
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.service-metric-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.service-metric {
  min-height: 124px;
  padding: 18px;
  border-radius: 18px;
  border: 1px solid oklch(0.78 0.16 var(--accent-h) / 0.34);
  background: oklch(0.18 0.02 55);
}

.service-metric strong {
  display: block;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.1;
}

.service-metric span {
  display: block;
  margin-top: 8px;
  color: var(--text-on-ink-dim);
  font-size: 13px;
  line-height: 1.55;
}

.service-check-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 640px) {
  .service-metric-grid,
  .service-check-grid {
    grid-template-columns: 1fr;
  }
}

.service-check-card {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
}

.service-check-card strong {
  display: block;
  color: var(--paper);
  font-size: 16px;
  margin-bottom: 8px;
}

.service-check-card span {
  color: var(--text-on-ink-dim);
  line-height: 1.6;
  font-size: 13px;
}

.service-cross-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

@media (max-width: 840px) {
  .service-cross-links {
    grid-template-columns: 1fr;
  }
}

.service-cross-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 18px 20px;
  border-radius: 18px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
  color: var(--paper);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.service-cross-link:hover {
  transform: translateY(-2px);
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.36);
}

.service-cross-link span {
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.service-cta-block {
  padding: 26px;
}

.service-cta-block strong {
  display: block;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.service-cta-block p {
  margin-top: 14px;
  color: var(--text-on-ink-dim);
  line-height: 1.7;
}
.case-row-meta h2 {
  font-family: var(--serif);
  font-size: clamp(28px, 3vw, 36px);
  margin: 12px 0 18px;
  letter-spacing: -0.02em;
  line-height: 1.15;
  font-weight: 400;
}
.case-tag {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-ink-dim);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.case-tag::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}
.case-row-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 16px 0;
  border-block: 1px dashed oklch(1 0 0 / 0.12);
  margin-bottom: 20px;
}
.case-row-info span {
  display: block;
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-on-ink-faint);
  margin-bottom: 4px;
}
.case-row-info b {
  font-weight: 500;
  font-size: 14px;
  color: var(--paper);
}
.case-row-summary {
  color: var(--text-on-ink-dim);
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 16px;
}
.case-quote {
  margin: 0;
  padding: 20px 24px;
  background: oklch(1 0 0 / 0.04);
  border-left: 2px solid var(--accent);
  border-radius: 0 var(--r-md) var(--r-md) 0;
}
.case-quote p {
  font-family: var(--serif);
  font-style: italic;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  font-size: 18px;
  color: var(--paper);
  line-height: 1.45;
  margin: 0;
}
.case-quote cite {
  display: block;
  margin-top: 10px;
  font-style: normal;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--text-on-ink-faint);
}
.case-row-stats {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.case-row-stat {
  padding: 18px 22px;
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-md);
  background: oklch(1 0 0 / 0.04);
}
.case-row-stat strong {
  font-family: var(--serif);
  font-size: 40px;
  font-weight: 400;
  color: var(--paper);
  letter-spacing: -0.03em;
  display: block;
  line-height: 1;
}
.case-row-stat span {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-on-ink-faint);
  display: block;
  margin-top: 8px;
  line-height: 1.4;
}

/* ─────────── Klantportaal ─────────── */
.portal-section {
  background: var(--ink-0);
  padding: 0 0 100px;
}
.portal-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 28px;
}
@media (max-width: 900px) { .portal-grid { grid-template-columns: 1fr; } }

.portal-feed, .portal-aside {
  background: var(--ink-1);
  border: 1px solid oklch(1 0 0 / 0.06);
  border-radius: var(--r-lg);
  padding: 28px 30px;
}
.portal-feed-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;
}
.feed-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--text-on-ink-faint);
}
.portal-feed-head h3 {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--paper);
  margin: 8px 0 0;
  font-weight: 400;
  letter-spacing: -0.01em;
  max-width: 24ch;
  line-height: 1.25;
}
.notif-pill {
  border: 1px solid oklch(1 0 0 / 0.14);
  background: transparent;
  color: var(--text-on-ink-dim);
  padding: 8px 16px;
  border-radius: 999px;
  font-family: var(--mono);
  font-size: 11px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}
.notif-pill.on {
  background: oklch(0.78 0.14 152 / 0.18);
  color: oklch(0.85 0.14 152);
  border-color: oklch(0.78 0.14 152 / 0.3);
}

.portal-filters {
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.filter-chip {
  background: oklch(1 0 0 / 0.04);
  border: 1px solid oklch(1 0 0 / 0.08);
  color: var(--text-on-ink-dim);
  font-size: 12px;
  padding: 7px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s;
}
.filter-chip:hover { background: oklch(1 0 0 / 0.08); color: var(--paper); }
.filter-chip.active {
  background: oklch(0.78 0.14 152 / 0.2);
  color: oklch(0.85 0.14 152);
  border-color: oklch(0.78 0.14 152 / 0.4);
}

.feed-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.feed-item {
  background: oklch(1 0 0 / 0.03);
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: var(--r-md);
  padding: 18px 20px;
  transition: border-color 0.2s;
}
.feed-item:hover { border-color: oklch(1 0 0 / 0.16); }
.feed-item-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.feed-item-meta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.feed-item-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--paper);
}
.feed-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.feed-status {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 10px;
  border-radius: 999px;
  background: oklch(1 0 0 / 0.06);
  color: var(--text-on-ink-dim);
}
.feed-status.status-actie { background: oklch(0.7 0.18 25 / 0.16); color: oklch(0.85 0.14 25); }
.feed-status.status-uitgevoerd { background: oklch(0.78 0.14 152 / 0.16); color: oklch(0.85 0.14 152); }
.feed-status.status-inzicht { background: oklch(0.7 0.16 240 / 0.16); color: oklch(0.85 0.14 240); }
.feed-status.status-voorstel { background: oklch(0.82 0.16 78 / 0.16); color: oklch(0.85 0.16 78); }
.feed-item p {
  font-size: 13px;
  color: var(--text-on-ink-dim);
  line-height: 1.55;
  margin: 0 0 12px;
}
.feed-time {
  color: var(--text-on-ink-faint);
  font-size: 12px;
}
.feed-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.feed-tag {
  font-family: var(--mono);
  font-size: 10px;
  padding: 3px 9px;
  border-radius: 999px;
  background: oklch(1 0 0 / 0.04);
  border: 1px solid oklch(1 0 0 / 0.08);
  color: var(--text-on-ink-faint);
  letter-spacing: 0.04em;
}
.feed-cta {
  background: oklch(0.78 0.14 152 / 0.22);
  color: oklch(0.92 0.14 152);
  border: 1px solid oklch(0.78 0.14 152 / 0.4);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
.feed-cta:hover { background: oklch(0.78 0.14 152 / 0.32); }
.feed-cta--custom {
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.34);
  background: oklch(0.78 0.16 var(--accent-h) / 0.16);
  color: var(--paper);
}
.feed-cta--custom:hover { background: oklch(0.78 0.16 var(--accent-h) / 0.28); }

.portal-aside h3 {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--paper);
  margin: 0 0 24px;
  font-weight: 400;
  letter-spacing: -0.01em;
}
.aside-block {
  padding: 16px 0;
  border-top: 1px solid oklch(1 0 0 / 0.06);
}
.aside-block:first-of-type { border-top: 0; padding-top: 0; }
.aside-block h5 {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--paper);
  margin: 0 0 8px;
  font-weight: 500;
}
.aside-block p {
  font-size: 13px;
  color: var(--text-on-ink-dim);
  line-height: 1.55;
  margin: 0;
}

/* ─────────── Portal v2 ─────────── */
.portal-topbar {
  border-bottom: 1px solid oklch(1 0 0 / 0.06);
  background: oklch(0.13 0.012 60 / 0.85);
}

.portal-topbar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 14px 0;
}

.portal-mini-label {
  display: block;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-on-ink-faint);
  margin-bottom: 5px;
}

.portal-topbar strong {
  color: var(--paper);
  font-size: 15px;
}

.role-switch {
  display: inline-flex;
  gap: 8px;
  background: oklch(1 0 0 / 0.04);
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: 999px;
  padding: 4px;
}

.role-switch button {
  border: 0;
  background: transparent;
  color: var(--text-on-ink-dim);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 12px;
  cursor: pointer;
}

.role-switch button.active {
  background: oklch(1 0 0 / 0.08);
  color: var(--paper);
}

.portal-button {
  font: inherit;
  cursor: pointer;
  background: transparent;
}

.portal-admin-link {
  color: var(--paper);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.portal-v2-section {
  background:
    radial-gradient(760px 420px at 92% 0%, oklch(0.78 0.16 var(--accent-h) / 0.1), transparent 60%),
    radial-gradient(760px 420px at 6% 84%, oklch(0.78 0.14 152 / 0.08), transparent 60%),
    var(--ink-0);
  padding: 0 0 100px;
}

.portal-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr) 320px;
  gap: 20px;
  align-items: start;
}

.portal-shell--client {
  grid-template-columns: 260px minmax(0, 1fr);
}

.portal-shell--admin-only {
  grid-template-columns: 360px minmax(0, 1fr);
}

@media (max-width: 1180px) {
  .portal-shell {
    grid-template-columns: 240px minmax(0, 1fr);
  }

  .portal-admin {
    grid-column: 1 / -1;
  }

  .portal-shell--client,
  .portal-shell--admin-only {
    grid-template-columns: 240px minmax(0, 1fr);
  }
}

@media (max-width: 860px) {
  .portal-shell {
    grid-template-columns: 1fr;
  }

  .portal-shell--client,
  .portal-shell--admin-only {
    grid-template-columns: 1fr;
  }
}

.portal-sidebar,
.portal-main > .portal-card,
.portal-admin > .portal-card,
.portal-main-head,
.portal-card,
.portal-admin {
  min-width: 0;
}

.portal-sidebar,
.portal-main,
.portal-admin {
  display: grid;
  gap: 18px;
}

.portal-sidebar {
  position: sticky;
  top: 110px;
}

@media (max-width: 860px) {
  .portal-sidebar {
    position: static;
  }
}

.portal-sidebar__head,
.portal-card,
.portal-admin > .portal-card,
.portal-main-head {
  border-radius: var(--r-lg);
  border: 1px solid oklch(1 0 0 / 0.06);
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.03), oklch(1 0 0 / 0.01)),
    var(--ink-1);
  box-shadow: 0 24px 60px -34px oklch(0 0 0 / 0.6);
}

.portal-sidebar__head,
.portal-main-head,
.portal-card,
.portal-admin > .portal-card {
  padding: 22px;
}

.portal-sidebar__head h3,
.portal-main-head h2,
.portal-card h3,
.portal-admin h3 {
  color: var(--paper);
}

.portal-sidebar__head h3,
.portal-card h3,
.portal-admin h3 {
  font-family: var(--serif);
  font-size: 24px;
  margin-top: 8px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.portal-main-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
}

.portal-main-head h2 {
  margin-top: 8px;
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

.portal-main-head p,
.portal-card p,
.portal-admin p {
  margin-top: 12px;
  color: var(--text-on-ink-dim);
  line-height: 1.7;
}

.portal-sidebar__nav {
  display: grid;
  gap: 10px;
}

.portal-nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
  padding: 14px 16px;
  border-radius: 18px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
  color: var(--text-on-ink-dim);
  cursor: pointer;
  transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}

.portal-nav-item:hover {
  transform: translateY(-1px);
  color: var(--paper);
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.32);
}

.portal-nav-item.active {
  color: var(--paper);
  border-color: oklch(0.78 0.16 var(--accent-h) / 0.36);
  box-shadow: inset 0 0 0 1px oklch(0.78 0.16 var(--accent-h) / 0.22);
}

.portal-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.portal-metrics-empty {
  padding: 22px 24px;
  border-radius: 18px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
  color: var(--text-on-ink-dim);
  font-size: 15px;
}

@media (max-width: 1080px) {
  .portal-metrics {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

@media (max-width: 560px) {
  .portal-metrics {
    grid-template-columns: 1fr;
  }
}

.portal-metric-card {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
}

.portal-metric-card span {
  display: block;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.portal-metric-card strong {
  display: block;
  margin-top: 10px;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: -0.04em;
}

.portal-metric-config {
  display: grid;
  gap: 14px;
  margin: 18px 0;
}

.portal-metric-groups {
  display: grid;
  gap: 14px;
}

.portal-metric-group {
  border: 1px solid oklch(1 0 0 / 0.08);
  border-radius: 16px;
  background: oklch(1 0 0 / 0.03);
  overflow: hidden;
}

.portal-metric-group-head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  background: transparent;
  border: 0;
  color: var(--paper);
  cursor: pointer;
}

.portal-metric-group-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.portal-metric-group-title strong {
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}

.portal-metric-group-body {
  padding: 0 20px 20px;
}

.portal-primary-toggle {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-on-ink-dim);
  font-size: 13px;
}

.portal-primary-toggle input {
  accent-color: var(--accent);
}

.portal-metric-slot {
  padding: 18px;
  border-radius: 16px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
}

.portal-metric-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.homepage-faq {
  padding: 0 0 96px;
  background: linear-gradient(to bottom, #0F0D0B 0%, #17120f 50%, #0F0D0B 100%);
}

.homepage-faq-grid,
.seo-os-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.homepage-faq-card,
.seo-os-card {
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 28px 32px;
}

.homepage-faq-card h3,
.seo-os-card h3 {
  margin: 0 0 12px;
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  color: var(--paper);
}

.homepage-faq-card p,
.seo-os-card p,
.homepage-faq-foot {
  color: var(--text-on-ink-dim);
  line-height: 1.7;
}

.homepage-faq-foot {
  margin-top: 22px;
}

.homepage-faq-foot a {
  color: var(--paper);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.seo-os-head {
  margin-bottom: 28px;
}

.service-faq {
  margin-top: 8px;
}

@media (max-width: 980px) {
  .homepage-faq-grid,
  .seo-os-grid {
    grid-template-columns: 1fr;
  }
}

.portal-content-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

@media (max-width: 920px) {
  .portal-content-grid {
    grid-template-columns: 1fr;
  }
}

.portal-card__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 18px;
}

.compliance-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

@media (max-width: 640px) {
  .compliance-grid {
    grid-template-columns: 1fr;
  }
}

.compliance-card {
  padding: 16px;
  border-radius: 16px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
}

.compliance-card strong {
  display: block;
  color: var(--paper);
  line-height: 1.45;
}

.compliance-card span {
  display: block;
  margin-top: 8px;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-list {
  display: grid;
  gap: 12px;
}

.project-item {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
}

@media (max-width: 640px) {
  .project-item {
    flex-direction: column;
    align-items: flex-start;
  }
}

.project-item strong {
  display: block;
  color: var(--paper);
}

.project-item span {
  display: block;
  margin-top: 6px;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-item select,
.portal-field select,
.portal-field input,
.portal-create-client input,
.portal-textarea {
  width: 100%;
  border-radius: 14px;
  border: 1px solid oklch(1 0 0 / 0.1);
  background: oklch(1 0 0 / 0.04);
  color: var(--paper);
  padding: 12px 14px;
}

.project-item select {
  width: 180px;
}

.portal-field {
  display: grid;
  gap: 8px;
  margin-top: 14px;
}
.portal-admin-section {
  margin-top: 8px;
}
.portal-admin-section--spaced {
  margin-top: 22px;
}
.portal-section-note {
  margin: 8px 0 0;
  color: var(--text-on-ink-dim);
  font-size: 14px;
  line-height: 1.55;
}

.portal-field span {
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.portal-create-client {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-top: 14px;
}

@media (max-width: 540px) {
  .portal-create-client {
    grid-template-columns: 1fr;
  }
}

.portal-create-client button,
.portal-save-btn,
.portal-upload {
  border: 1px solid oklch(0.78 0.16 var(--accent-h) / 0.34);
  background: oklch(0.78 0.16 var(--accent-h) / 0.16);
  color: var(--paper);
  border-radius: 14px;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 600;
}
.portal-primary-btn {
  margin-top: 12px;
  border: 1px solid oklch(0.78 0.16 var(--accent-h) / 0.4);
  background: oklch(0.78 0.16 var(--accent-h) / 0.2);
  color: var(--paper);
  border-radius: 14px;
  padding: 12px 16px;
  cursor: pointer;
  font-weight: 600;
}
.portal-primary-btn--full {
  width: 100%;
}
.portal-inline-feedback {
  margin-top: 12px;
  font-size: 13px;
  line-height: 1.5;
}
.portal-inline-feedback.success {
  color: oklch(0.85 0.14 152);
}
.portal-inline-feedback.error {
  color: oklch(0.78 0.16 25);
}
.portal-password-wrap {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
}
.portal-toggle-btn {
  border: 1px solid oklch(1 0 0 / 0.12);
  background: oklch(1 0 0 / 0.04);
  color: var(--paper);
  border-radius: 12px;
  padding: 12px 14px;
  cursor: pointer;
  white-space: nowrap;
}

.admin-module-list {
  display: grid;
  gap: 10px;
  margin-top: 18px;
}

.admin-module-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
  color: var(--paper);
}

.admin-module-toggle input {
  accent-color: oklch(0.78 0.16 var(--accent-h));
}

.portal-textarea {
  min-height: 120px;
  resize: vertical;
}
.portal-textarea--compact {
  min-height: 96px;
}

.portal-save-btn {
  margin-top: 12px;
}

.portal-login-shell {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.portal-login-shell--single {
  grid-template-columns: minmax(0, 560px);
  justify-content: center;
}

@media (max-width: 840px) {
  .portal-login-shell {
    grid-template-columns: 1fr;
  }
}

.portal-login-card {
  min-height: 280px;
}

.auth-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.auth-brand::before {
  content: "";
  width: 14px;
  height: 14px;
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  background: oklch(0.78 0.16 152);
  box-shadow:
    0 0 0 5px oklch(0.78 0.16 152 / 0.12),
    0 0 22px oklch(0.78 0.16 152 / 0.45);
  animation: authPulse 2.6s ease-in-out infinite;
}

@keyframes authPulse {
  0%, 100% {
    transform: scale(1);
    box-shadow:
      0 0 0 5px oklch(0.78 0.16 152 / 0.12),
      0 0 22px oklch(0.78 0.16 152 / 0.45);
  }
  50% {
    transform: scale(1.08);
    box-shadow:
      0 0 0 8px oklch(0.78 0.16 152 / 0.08),
      0 0 30px oklch(0.78 0.16 152 / 0.6);
  }
}

.auth-form {
  display: grid;
  gap: 14px;
}

.auth-field {
  display: grid;
  gap: 8px;
}

.auth-field span {
  color: var(--accent);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.auth-field input,
.auth-field select {
  width: 100%;
  border-radius: 0;
  border: 1px solid oklch(1 0 0 / 0.12);
  background: oklch(1 0 0 / 0.02);
  color: var(--paper);
  padding: 14px 16px;
  min-height: 52px;
}

.auth-field input::placeholder {
  color: var(--text-on-ink-faint);
}

.auth-submit {
  margin-top: 4px;
  border: 0;
  background: #ffffff;
  color: #0F0D0B;
  border-radius: 999px;
  padding: 14px 28px;
  min-height: 52px;
  width: 100%;
  font: 500 15px/1 var(--sans);
  letter-spacing: 0;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

.auth-submit:hover {
  background: #E8EAE6;
  transform: translateY(-1px);
}

.auth-error {
  color: oklch(0.78 0.16 25);
  font-size: 13px;
  line-height: 1.5;
}

.note-list,
.file-list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}
.notification-history {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}
.notification-history-item {
  padding: 14px;
  border-radius: 14px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
}
.notification-history-head,
.notification-history-meta,
.notification-history-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.notification-history-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.notification-history-meta {
  margin-top: 10px;
  color: var(--text-on-ink-faint);
  font-size: 12px;
}
.notification-history-controls {
  margin-top: 12px;
}
.notification-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}
.notification-dot.actie { background: var(--signal-bad); }
.notification-dot.voorstel { background: var(--signal-warn); }
.notification-dot.uitgevoerd { background: var(--signal-ok); }
.notification-dot.inzicht { background: oklch(0.7 0.15 240); }
.notification-status {
  padding: 4px 10px;
  border-radius: 999px;
  background: oklch(1 0 0 / 0.05);
  border: 1px solid oklch(1 0 0 / 0.08);
}
.notification-status.done {
  color: oklch(0.85 0.14 152);
}
.notification-delete,
.notification-toggle {
  border: 1px solid oklch(1 0 0 / 0.1);
  background: oklch(1 0 0 / 0.04);
  color: var(--paper);
  border-radius: 12px;
  padding: 8px 12px;
  cursor: pointer;
}
.notification-delete {
  width: 36px;
  padding-inline: 0;
}

.note-item,
.file-pill {
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid oklch(1 0 0 / 0.08);
  background: oklch(1 0 0 / 0.03);
  color: var(--text-on-ink-dim);
  line-height: 1.55;
}

.empty-copy {
  color: var(--text-on-ink-faint);
  margin: 0;
}


/* ─────────── Over ons ─────────── */
.about-section { background: var(--paper); padding: 80px 0 100px; }
.about-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 60px; align-items: start; }
@media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; gap: 40px; } }
.about-block h2 { margin: 14px 0 22px; }
.about-block p { color: var(--text-on-paper-dim); line-height: 1.65; margin-bottom: 16px; max-width: 56ch; }
.about-block .serif-italic { font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }
.about-pillars { display: flex; flex-direction: column; gap: 12px; }
.about-pillar {
  padding: 22px 24px;
  background: var(--paper-2);
  border: 1px solid oklch(0.85 0.008 80);
  border-radius: var(--r-md);
}
.about-pillar strong {
  display: block;
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  color: var(--text-on-paper);
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}
.about-pillar span { font-size: 14px; color: var(--text-on-paper-dim); line-height: 1.5; }

.principles-section { background: var(--paper-2); padding: 100px 0; }
.principles-section h2 { margin: 14px 0 48px; }
.principles-section .serif-italic { font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 80; }
.principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
@media (max-width: 900px) { .principles-grid { grid-template-columns: 1fr; } }
.principle-card {
  background: var(--paper);
  border: 1px solid oklch(0.85 0.008 80);
  border-radius: var(--r-lg);
  padding: 32px 28px;
  transition: border-color 0.25s, transform 0.25s;
}
.principle-card:hover { border-color: var(--ink-0); transform: translateY(-3px); }
.principle-num {
  font-family: var(--serif); font-style: italic;
  font-size: 56px; color: var(--accent);
  line-height: 1; margin-bottom: 18px;
  font-variation-settings: "opsz" 144, "SOFT" 80;
  letter-spacing: -0.04em;
}
.principle-card h3 {
  font-family: var(--serif); font-size: 22px;
  margin: 0 0 12px; letter-spacing: -0.01em; line-height: 1.25;
  font-weight: 400;
}
.principle-card p { color: var(--text-on-paper-dim); font-size: 14px; line-height: 1.55; margin: 0; }

/* ─────────── Contact ─────────── */
.contact-section { background: var(--paper); padding: 80px 0 120px; }
.contact-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 48px; align-items: start; }
@media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
.contact-form-wrap {
  background: var(--paper-2);
  border: 1px solid oklch(0.85 0.008 80);
  border-radius: var(--r-lg);
  padding: 36px;
}
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-label, .contact-form label > span {
  font-family: var(--mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--text-on-paper-dim); display: block; margin-bottom: 8px;
}
.intent-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.intent-chip {
  background: var(--paper); border: 1px solid oklch(0.85 0.008 80);
  padding: 9px 16px; border-radius: 999px;
  font-size: 13px; cursor: pointer;
  color: var(--text-on-paper-dim);
  transition: all 0.15s;
}
.intent-chip:hover { border-color: var(--ink-0); color: var(--text-on-paper); }
.intent-chip.active {
  background: var(--ink-0); color: var(--paper); border-color: var(--ink-0);
}
.contact-form input, .contact-form textarea {
  width: 100%; box-sizing: border-box;
  padding: 12px 14px; border: 1px solid oklch(0.85 0.008 80);
  border-radius: var(--r-sm); background: var(--paper);
  font-size: 14px; color: var(--text-on-paper);
  font-family: var(--sans); resize: vertical;
  transition: border-color 0.15s;
}
.contact-form input:focus, .contact-form textarea:focus {
  outline: none; border-color: var(--ink-0);
}
.form-row.two { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
@media (max-width: 600px) { .form-row.two { grid-template-columns: 1fr; } }
.contact-form .btn-primary { align-self: flex-start; }
.form-foot { font-size: 12px; color: var(--text-on-paper-dim); margin: 0; }
.contact-success {
  text-align: center; padding: 60px 20px;
}
.success-mark {
  width: 56px; height: 56px; margin: 0 auto 20px;
  background: oklch(0.78 0.14 152 / 0.18);
  color: oklch(0.4 0.12 152);
  border-radius: 50%; display: flex; align-items: center;
  justify-content: center; font-size: 28px;
}
.contact-success h3 {
  font-family: var(--serif); font-size: 28px; margin: 0 0 8px;
  letter-spacing: -0.02em; font-weight: 400;
}
.contact-success p { color: var(--text-on-paper-dim); margin: 0; }

.contact-aside { display: flex; flex-direction: column; gap: 20px; }
.contact-block {
  padding: 22px 24px;
  background: var(--paper-2);
  border: 1px solid oklch(0.85 0.008 80);
  border-radius: var(--r-md);
}
.contact-block h5 {
  font-family: var(--mono); font-size: 11px;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: var(--text-on-paper-dim); margin: 0 0 10px;
  font-weight: 500;
}
.contact-block p { font-size: 14px; color: var(--text-on-paper); margin: 0 0 12px; line-height: 1.55; }
.contact-block p:last-child { margin-bottom: 0; }
.contact-link {
  display: block; font-size: 16px; color: var(--text-on-paper);
  font-weight: 500; margin-bottom: 6px;
  transition: color 0.15s;
}
.contact-link:hover { color: var(--accent-strong); }
.contact-block .btn-secondary { padding: 10px 18px; font-size: 13px; }

/* ─────────── Global dark subpage override ─────────── */
body,
body.page-dark {
  background:
    radial-gradient(900px 500px at 85% 8%, rgba(232, 89, 60, 0.10), transparent 60%),
    radial-gradient(800px 420px at 10% 72%, rgba(95, 212, 140, 0.06), transparent 58%),
    var(--ink-0);
  color: var(--text-on-ink);
}

body.page-dark .site-header,
.site-header {
  background: rgba(15,13,11,0.85);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.subpage-hero,
.subpage-hero.light,
.kb-grid-section,
.article-page-section,
.cases-page-section,
.offer-overview-section,
.pricing-services-section,
.service-template-section,
.about-section,
.principles-section,
.contact-section,
.portal-section,
.portal-v2-section {
  background:
    radial-gradient(760px 420px at 92% 0%, rgba(232, 89, 60, 0.10), transparent 60%),
    radial-gradient(760px 420px at 8% 44%, rgba(95, 212, 140, 0.08), transparent 60%),
    var(--ink-0);
  color: var(--text-on-ink);
}

.subpage-hero.light h1,
.subpage-hero h1,
.about-block h2,
.principles-section h2,
.contact-success h3,
.contact-block p,
.article-main h2,
.article-side h3,
.case-row-meta h2,
.offer-overview-head h2,
.service-template-head h2 {
  color: var(--paper);
}

.subpage-hero .lead,
.subpage-hero .lead-on-dark,
.about-block p,
.principle-card p,
.contact-block p,
.contact-success p,
.contact-form .form-foot,
.article-main p,
.article-main li,
.article-side p {
  color: var(--text-on-ink-dim);
}

.about-pillar,
.principle-card,
.contact-form-wrap,
.contact-block,
.article-main,
.article-side,
.cases-offer-card,
.case-row-stat,
.portal-feed,
.portal-aside {
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
}

.about-pillar:hover,
.principle-card:hover,
.cases-offer-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.18);
}

.about-pillar strong,
.principle-card h3,
.contact-link,
.contact-block h5,
.about-pillar span,
.principle-card p,
.contact-block p,
.contact-form label > span,
.form-label,
.article-tag,
.article-side .side-block p {
  color: var(--text-on-ink-dim);
}

.contact-form input,
.contact-form textarea,
.intent-chip {
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
  color: var(--paper);
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--text-on-ink-faint);
}

.contact-form input:focus,
.contact-form textarea:focus,
.intent-chip:hover {
  border-color: rgba(255,255,255,0.18);
}

.intent-chip.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.contact-block .btn-secondary,
.cta-strip .btn-secondary {
  color: #fff;
}

/* ─────────── Nav dropdown ─────────── */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 240px;
  padding: 10px;
  border-radius: 16px;
  border: 0.5px solid rgba(255,255,255,0.1);
  background: rgba(15,13,11,0.96);
  box-shadow: 0 24px 60px -30px rgba(0,0,0,0.7);
  display: grid;
  gap: 4px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.nav-dropdown:hover .nav-dropdown-menu,
.nav-dropdown:focus-within .nav-dropdown-menu {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.nav-dropdown-menu a {
  padding: 10px 12px;
  border-radius: 12px;
  color: var(--text-on-ink-dim);
}

.nav-dropdown-menu a:hover {
  color: var(--paper);
  background: rgba(255,255,255,0.05);
  opacity: 1;
}

@media (max-width: 900px) {
  .nav-dropdown-menu {
    display: none;
  }
}

/* ─────────── Service detail pages ─────────── */
.service-detail-section,
.how-system-section {
  background:
    radial-gradient(760px 420px at 92% 0%, rgba(232, 89, 60, 0.10), transparent 60%),
    radial-gradient(760px 420px at 8% 44%, rgba(95, 212, 140, 0.08), transparent 60%),
    var(--ink-0);
  padding: 22px 0 110px;
}

.service-stat-strip,
.service-steps-row,
.system-compare,
.service-case-card,
.step-detail-shell,
.before-after-card {
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
  border-radius: 16px;
}

.service-stat-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  margin-top: 34px;
  background: rgba(255,255,255,0.08);
}

.service-stat-strip > div {
  background: var(--ink-1);
  padding: 18px 20px;
}

.service-stat-strip strong {
  display: block;
  font-family: var(--serif);
  font-size: 34px;
  font-weight: 400;
  color: var(--paper);
}

.service-stat-strip span {
  display: block;
  margin-top: 6px;
  color: var(--text-on-ink-faint);
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 700px) {
  .service-stat-strip {
    grid-template-columns: 1fr;
  }
}

.service-tier-section {
  padding: 52px 0 0;
}

.service-symptom-grid,
.service-results-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (max-width: 980px) {
  .service-symptom-grid,
  .service-results-grid {
    grid-template-columns: 1fr;
  }
}

.service-symptom-card,
.service-result-card,
.service-cta-panel {
  border-radius: var(--r-lg);
  border: 1px solid oklch(1 0 0 / 0.08);
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.03), oklch(1 0 0 / 0.01)),
    var(--ink-1);
  box-shadow: 0 24px 60px -34px oklch(0 0 0 / 0.62);
}

.service-symptom-card,
.service-result-card {
  padding: 34px;
  min-height: 228px;
}

.service-symptom-card strong,
.service-result-card strong {
  display: block;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.02em;
}

.service-symptom-card p,
.service-result-card p {
  margin-top: 16px;
  color: var(--text-on-ink-dim);
  line-height: 1.8;
}

.service-cta-panel {
  max-width: 980px;
  margin: 10px auto 0;
  padding: 42px 44px;
}

.service-cta-panel p {
  margin-top: 16px;
  max-width: 42ch;
  color: var(--text-on-ink-dim);
  line-height: 1.8;
}

.service-cta-panel .actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.pricing-tier-card.highlight {
  border-color: rgba(232,89,60,0.5);
  background: rgba(232,89,60,0.05);
}

.pricing-tier-list li.feature-portal {
  color: oklch(0.82 0.14 152);
}

.service-price-note {
  margin-top: 16px;
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.service-price-note p {
  margin-top: 8px;
  text-transform: none;
  letter-spacing: 0;
  font-family: var(--sans);
  font-size: 14px;
  color: var(--text-on-ink-dim);
}

.service-inline-cta {
  margin-top: 32px;
  padding: 40px 48px;
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
  border-radius: 16px;
}

.service-inline-cta-grid {
  display: grid;
  grid-template-columns: minmax(0, 0.4fr) minmax(0, 0.6fr);
  gap: 48px;
  align-items: start;
}

.service-inline-copy h3 {
  margin-top: 16px;
  font-size: 28px;
  color: var(--paper);
}

.service-inline-copy p {
  margin-top: 16px;
  max-width: 34ch;
  color: var(--text-on-ink-dim);
}

.service-inline-form,
.service-inline-success {
  min-width: 0;
}

.service-inline-form {
  display: grid;
  gap: 16px;
}

.service-inline-form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.service-inline-form label {
  display: grid;
  gap: 8px;
}

.service-inline-form label > span {
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.service-inline-form input,
.service-inline-form textarea {
  width: 100%;
  background: rgba(255,255,255,0.06);
  border: 0.5px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  padding: 12px 16px;
  color: #fff;
  font: 500 15px/1.5 var(--sans);
  outline: none;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.service-inline-form input::placeholder,
.service-inline-form textarea::placeholder {
  color: rgba(255,255,255,0.4);
}

.service-inline-form input:focus,
.service-inline-form textarea:focus {
  border-color: rgba(255,255,255,0.4);
}

.service-inline-form textarea {
  resize: vertical;
  min-height: 92px;
}

.service-inline-submit {
  width: 100%;
  justify-content: center;
}

.service-inline-success {
  margin: 0;
}

@media (max-width: 768px) {
  .service-inline-cta {
    padding: 28px 24px;
  }

  .service-inline-cta-grid,
  .service-inline-form-grid {
    grid-template-columns: 1fr;
  }
}

.service-steps-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  margin-top: 22px;
  background: transparent;
}

.service-step {
  border-radius: var(--r-lg);
  border: 1px solid oklch(1 0 0 / 0.08);
  background:
    linear-gradient(180deg, oklch(1 0 0 / 0.03), oklch(1 0 0 / 0.01)),
    var(--ink-1);
  box-shadow: 0 24px 60px -34px oklch(0 0 0 / 0.62);
  padding: 32px;
}

.service-step-num {
  display: block;
  color: var(--accent);
  font-family: var(--serif);
  font-size: 48px;
  font-style: italic;
  line-height: 1;
  letter-spacing: -0.04em;
}

.service-step h3 {
  margin-top: 16px;
  color: var(--paper);
}

.service-step p {
  margin-top: 14px;
  color: var(--text-on-ink-dim);
  line-height: 1.8;
}

@media (max-width: 980px) {
  .service-steps-row {
    grid-template-columns: 1fr;
  }
}

.service-case-card {
  padding: 28px 32px;
  display: grid;
  grid-template-columns: 1.35fr 0.9fr;
  gap: 24px;
}

@media (max-width: 900px) {
  .service-case-card {
    grid-template-columns: 1fr;
  }
}

.service-case-card .case-tagline {
  color: var(--text-on-ink-faint);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.service-case-quote {
  margin-top: 18px;
  color: var(--paper);
  font-family: var(--serif);
  font-size: clamp(26px, 3vw, 40px);
  font-style: italic;
  line-height: 1.16;
  letter-spacing: -0.03em;
}

.service-case-card .case-link {
  display: inline-flex;
  margin-top: 22px;
  color: var(--accent);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.service-case-stats {
  display: grid;
  gap: 12px;
}

.service-case-stat {
  padding: 16px 18px;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  border: 0.5px solid rgba(255,255,255,0.08);
}

.service-case-stat strong {
  display: block;
  color: var(--paper);
  font-family: var(--serif);
  font-size: 32px;
  font-weight: 400;
}

.service-case-stat span {
  display: block;
  margin-top: 6px;
  color: var(--text-on-ink-faint);
  font-size: 12px;
  line-height: 1.5;
}

.step-detail-shell {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px;
  padding: 30px 32px;
}

.step-detail-shell.reverse .step-detail-copy {
  order: 2;
}

.step-detail-shell.reverse .step-detail-visual {
  order: 1;
}

@media (max-width: 920px) {
  .step-detail-shell,
  .step-detail-shell.reverse {
    grid-template-columns: 1fr;
  }

  .step-detail-shell.reverse .step-detail-copy,
  .step-detail-shell.reverse .step-detail-visual {
    order: initial;
  }
}

.step-detail-copy .detail-num {
  display: block;
  color: var(--accent);
  font-family: var(--serif);
  font-size: 72px;
  font-style: italic;
  line-height: 1;
  letter-spacing: -0.05em;
}

.step-detail-copy h2 {
  margin-top: 12px;
  color: var(--paper);
}

.step-detail-copy p,
.step-detail-copy li,
.step-detail-copy blockquote {
  color: var(--text-on-ink-dim);
}

.step-detail-copy ul {
  margin: 18px 0 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
}

.step-detail-copy blockquote {
  margin: 24px 0 0;
  padding-left: 18px;
  border-left: 2px solid rgba(232,89,60,0.4);
  font-family: var(--serif);
  font-size: 26px;
  font-style: italic;
  line-height: 1.25;
  color: var(--paper);
}

.before-after-card {
  padding: 24px;
}

.before-after-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

@media (max-width: 640px) {
  .before-after-grid {
    grid-template-columns: 1fr;
  }
}

.before-card,
.after-card {
  padding: 18px;
  border-radius: 14px;
  background: rgba(255,255,255,0.03);
  border: 0.5px solid rgba(255,255,255,0.08);
}

.before-card strong,
.after-card strong {
  display: block;
  color: var(--paper);
  margin-bottom: 10px;
}

.before-card p,
.after-card p {
  color: var(--text-on-ink-dim);
}

.system-compare {
  overflow: hidden;
  margin-top: 26px;
}

.system-compare table {
  width: 100%;
  border-collapse: collapse;
}

.system-compare th,
.system-compare td {
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  text-align: left;
}

.system-compare th {
  color: var(--paper);
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 400;
}

.system-compare td {
  color: var(--text-on-ink-dim);
  font-size: 14px;
  line-height: 1.6;
}

.system-compare tr:last-child td {
  border-bottom: 0;
}

.booking-section {
  background: rgba(255,255,255,0.03);
  border-top: 0.5px solid rgba(255,255,255,0.08);
  border-bottom: 0.5px solid rgba(255,255,255,0.08);
  padding: 80px 0;
}

.booking-inner {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.4fr) minmax(0, 0.6fr);
  gap: 64px;
  align-items: start;
}

.booking-copy p {
  margin-top: 18px;
  color: rgba(255,255,255,0.8);
  line-height: 1.8;
  max-width: 30ch;
}

.booking-trust {
  display: grid;
  gap: 10px;
  margin-top: 24px;
}

.booking-trust div {
  display: flex;
  gap: 10px;
  align-items: center;
  color: rgba(255,255,255,0.8);
  font: 400 14px/1.6 var(--sans);
}

.booking-trust div span:first-child {
  color: var(--accent);
  font-weight: 600;
}

.booking-signoff {
  margin-top: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.7);
  font: 400 15px/1.7 var(--sans);
}

.booking-signoff span {
  color: var(--accent);
  font-weight: 600;
}

.booking-signoff-dot {
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  border-radius: 50%;
  background: #7ef5a7;
  box-shadow: 0 0 0 4px rgba(126,245,167,0.12);
}

.booking-embed-shell {
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  overflow: hidden;
  padding: 0;
}

.booking-loading {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 32px;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  z-index: 2;
}

.booking-loading-card {
  width: min(100%, 360px);
  padding: 28px;
  border-radius: 16px;
  text-align: center;
  background: rgba(255,255,255,0.04);
  border: 0.5px solid rgba(255,255,255,0.1);
}

.booking-loading-card strong {
  display: block;
  color: var(--paper);
  font: 500 18px/1.4 var(--sans);
}

.booking-loading-card p {
  margin: 10px 0 20px;
  color: rgba(255,255,255,0.65);
  font: 400 14px/1.7 var(--sans);
}

.booking-fallback {
  min-height: 600px;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 32px;
}

.booking-fallback p {
  margin-top: 12px;
  color: rgba(255,255,255,0.5);
  font: 400 12px/1.6 var(--sans);
}

.sticky-contact-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1200;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  background: #fff;
  color: #0F0D0B;
  text-decoration: none;
  font: 500 15px/1 var(--sans);
  box-shadow: 0 16px 34px rgba(0,0,0,0.28);
  transition: transform 0.15s ease, background 0.2s ease, color 0.2s ease;
}

.sticky-contact-btn:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .booking-section {
    padding: 48px 24px;
  }

  .booking-inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .booking-copy p {
    max-width: none;
  }

  .sticky-contact-btn {
    right: 16px;
    bottom: 16px;
    left: 16px;
    padding: 0 18px;
  }
}

```

