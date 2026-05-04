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
