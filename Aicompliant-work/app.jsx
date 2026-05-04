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

  React.useEffect(() => {
    const scrollToHashTarget = () => {
      if (window.location.hash !== "#scanner") return;
      const el = document.getElementById("scanner");
      if (!el) return;
      window.requestAnimationFrame(() => {
        const top = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: "auto" });
      });
    };

    const timer = window.setTimeout(scrollToHashTarget, 60);
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHashTarget);
    };
  }, []);

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
