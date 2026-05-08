// Stub for useTweaks - not needed in production
function useTweaks(defaults) {
  const [tweaks] = React.useState(defaults);
  return [tweaks, () => {}];
}

// Stub TweaksPanel components - hidden in production
function TweaksPanel({ children }) { return null; }
function TweakSection({ children }) { return null; }
function TweakSlider() { return null; }
function TweakToggle() { return null; }

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
            <span className="about-bart-badge">Bart van der Horst</span>
          </div>
          <div className="about-bart-copy">
            <div className="about-bart-stats">
              <article className="about-bart-stat"><strong>5+</strong><span>jaar e-commerce ervaring</span></article>
              <article className="about-bart-stat"><strong>HBO</strong><span>diploma e-commerce</span></article>
              <article className="about-bart-stat"><strong>3+</strong><span>jaar dagelijks met AI</span></article>
              <article className="about-bart-stat"><strong>0</strong><span>loze rapporten</span></article>
            </div>
            <p className="about-bart-text">
              Ik ben 22 jaar en werk al jaren dagelijks met AI. Niet omdat het een trend is — maar omdat ik vroeg zag hoe snel het alles verandert. Mijn diploma heb ik gehaald, maar de praktijk heeft me meer geleerd. Ik bouw geen producten. Ik bouw systemen die blijven kloppen.
            </p>
            <div className="about-bart-credentials">
              <div className="about-bart-credential"><strong>HBO E-commerce</strong><span>Hogeschool Utrecht · Associate Degree</span></div>
              <div className="about-bart-credential"><strong>AI systemen</strong><span>3 jaar dagelijkse praktijk</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value }) {
  const r = 58, c = 2 * Math.PI * r;
  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now(), dur = 1500;
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
  const [url, setUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const submit = (e) => {
    if (!url.trim() || !email.trim() || !phone.trim()) { e.preventDefault(); }
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
            <p className="hero-statement">Nieuwe AI-regelgeving komt snel dichterbij.<br/>Voorkom <span className="accent-text">torenhoge boetes</span> voordat kleine fouten grote gevolgen krijgen.</p>
            <p className="hero-lead">Start met een gratis scan. Wij laten direct zien waar tracking, consent en instellingen niet kloppen en wat er als eerste moet worden gefixt.</p>
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
          <div style={{position:"relative"}}>
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
                    <p><strong className="monitor-signoff"><span className="brand-dot" aria-hidden="true"></span><span>AIChecked.nl fixt het voor je.</span></strong>{" "}Jij ziet wat er speelt, wij zorgen dat het weer klopt.</p>
                  </div>
                </div>
                <div className="monitor-foot">
                  <div className="stamp"><span className="live-dot"/>Laatste check · 4 min geleden</div>
                  <div>Live klantdashboard</div>
                </div>
                <div className="scan-cta"><p><strong>Vul je gegevens in.</strong> Wij beoordelen je website handmatig en sturen de eerste audit binnen 24 uur.</p></div>
                <form className="scanner-lead-form" action="https://formsubmit.co/info@aichecked.nl" method="POST" target="_blank" onSubmit={submit}>
                  <input type="hidden" name="_subject" value="Nieuwe audit aanvraag via AIChecked.nl" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="audit_type" value="Eerste handmatige compliance-audit" />
                  <div className="scanner-lead-grid single">
                    <label><span>Website URL</span><input type="url" name="website_url" placeholder="https://jouw-website.nl" value={url} onChange={e=>setUrl(e.target.value)} required /></label>
                  </div>
                  <div className="scanner-lead-grid">
                    <label><span>E-mail</span><input type="email" name="email" placeholder="naam@bedrijf.nl" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
                    <label><span>Telefoonnummer</span><input type="tel" name="phone" placeholder="+31 6 12 34 56 78" value={phone} onChange={e=>setPhone(e.target.value)} required /></label>
                  </div>
                  <div className="scanner-lead-actions">
                    <p>Deze intake is geen automatisch juridisch oordeel. De definitieve beoordeling gebeurt handmatig op basis van je website en instellingen.</p>
                    <button type="submit" className="btn btn-on-dark hero-audit-btn">Vraag gratis eerste audit aan <span>→</span></button>
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

function Layers() {
  const items = [
    {label:"E-MAIL →",title:"Niemand koopt\neen tweede keer.",desc:"Je lijst groeit maar de omzet niet. Flows staan aan maar converteren niet — en niemand weet waarom.",href:"email-marketing.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"ADS →",title:"Elke week\nbudget verspild.",desc:"Campagnes draaien maar de cijfers kloppen niet. Creatives worden afgekeurd zonder duidelijke reden.",href:"advertenties.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"SEO →",title:"Klanten vinden\nons niet.",desc:"Concurrenten scoren op jouw zoekwoorden. Jouw content bestaat maar bereikt niemand.",href:"seo.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"WEBSITE →",title:"Bezoekers\nklikken weg.",desc:"Veel verkeer, weinig conversie. De site ziet er goed uit maar iets klopt niet — je weet alleen niet wat.",href:"website-bouwen.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"DATA →",title:"Onze data\nklopt niet.",desc:"Dashboards zien er betrouwbaar uit. Maar de tracking staat fout en beslissingen zijn gebaseerd op verkeerde cijfers.",href:"data-tracking.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"BRANDING →",title:"Ons merk\novertuigt niet.",desc:"Visuals en copy missen scherpte. Klanten twijfelen — niet aan het product, maar aan het gevoel.",href:"branding.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"AI COMPLIANCE →",title:"Eén fout en\nwe krijgen een boete.",desc:"Cookie banner, tracking consent, privacy statement — ergens klopt het niet. En niemand heeft het door totdat het te laat is.",href:"ai-compliance.html",extraLink:"Wat kan ik toevoegen →"},
    {label:"WEBSITE VERBETEREN →",title:"Je hebt al een website\nmaar hij werkt niet.",desc:"Je hebt hem laten bouwen maar weet niet hoe je hem verder vult, verbetert of vindbaar maakt.",href:"website-verbeteren.html",special:true,extraLink:"Wat ik kan toevoegen →"},
  ];
  return (
    <section className="layers-dominant" id="aanbod">
      <div className="layers-bg" aria-hidden="true"><div className="layers-bg-grid"/><div className="layers-bg-glow"/></div>
      <div className="container">
        <div className="layers-head">
          <span className="eyebrow on-dark">Overzicht</span>
          <h2><span className="hero-line-plain">Je gebruikt AI.</span><span className="hero-line-accent">Maar benut je het?</span></h2>
          <p className="layers-head-lead">De meeste winst zit in wat je niet ziet. Foute instellingen, slechte prompts, gemiste kansen. Wij brengen het boven water.</p>
        </div>
        <div className="layers-grid-eight">
          {items.map((item) => (
            <a key={item.title} href={item.href} className={`layer-card layer-card--overview ${item.special ? "layer-card--special" : ""}`}>
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

function Marquee() {
  const items = ["AVG / GDPR","ePrivacy","DSA","EU AI Act","DMA","ACM richtlijnen","Cookiewet","DPIA"];
  const all = [...items,...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map((x,i) => <React.Fragment key={i}><span>{x}</span><span className="dot"/></React.Fragment>)}
      </div>
    </div>
  );
}

function Scanner() {
  return (
    <section className="scanner-section" id="scanner">
      <div className="container">
        <div className="inner">
          <div>
            <span className="eyebrow on-dark">Live scanner · gratis</span>
            <h2>Doe een snelle intake.<br/><span className="serif-italic">Ontvang daarna een handmatige compliance-audit.</span></h2>
            <p className="lead" style={{marginTop:24,color:"var(--text-on-ink-dim)"}}>Laat je website achter voor een eerste beoordeling. Wij controleren je website handmatig op cookies, tracking, privacypagina's en datarisico's en sturen daarna de eerste audit naar je op.</p>
            <div style={{marginTop:24}}>
              <div style={{fontFamily:"var(--mono)",fontSize:11,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--text-on-ink-faint)"}}>Wat we controleren</div>
              <ul style={{margin:"10px 0 0",padding:0,listStyle:"none",fontSize:14,color:"var(--text-on-ink)",lineHeight:1.9}}>
                <li>· Cookies, consent &amp; categorieën</li>
                <li>· Tracking pixels &amp; tag setup</li>
                <li>· Datakwaliteit &amp; opslag</li>
                <li>· Privacy &amp; algemene voorwaarden</li>
              </ul>
            </div>
          </div>
          <div className="scanner">
            <div className="scanner-result">
              <div className="scanner-example">
                <div className="summary">Voorbeeld van wat we in een audit controleren</div>
                <h4>Geen automatische uitslag, wel een duidelijke eerste beoordeling.</h4>
                <div className="scan-grid">
                  <div className="scan-item warn"><div className="top"><div className="label">Cookies &amp; consent</div><div className="badge">LET OP</div></div><div className="value">Controle</div><div className="note">Cookiebanner, categorieën en scriptgedrag</div></div>
                  <div className="scan-item warn"><div className="top"><div className="label">Tracking &amp; tags</div><div className="badge">LET OP</div></div><div className="value">Controle</div><div className="note">GA4, Meta, pixels en events</div></div>
                  <div className="scan-item warn"><div className="top"><div className="label">Privacy pagina's</div><div className="badge">LET OP</div></div><div className="value">Controle</div><div className="note">Privacy, cookies en voorwaarden</div></div>
                  <div className="scan-item warn"><div className="top"><div className="label">Data &amp; scripts</div><div className="badge">LET OP</div></div><div className="value">Controle</div><div className="note">Datakwaliteit, opslag en scriptgebruik</div></div>
                </div>
              </div>
              <div className="scan-cta"><p><strong>Vul je gegevens in.</strong> Wij beoordelen je website handmatig en sturen de eerste audit binnen 24 uur.</p></div>
              <form className="scanner-lead-form" action="https://formsubmit.co/info@aichecked.nl" method="POST" target="_blank">
                <input type="hidden" name="_subject" value="Nieuwe audit aanvraag via AIChecked.nl" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="audit_type" value="Eerste handmatige compliance-audit" />
                <div className="scanner-lead-grid single"><label><span>Website URL</span><input type="url" name="website_url" placeholder="https://jouw-website.nl" required /></label></div>
                <div className="scanner-lead-grid">
                  <label><span>E-mail</span><input type="email" name="email" placeholder="naam@bedrijf.nl" required /></label>
                  <label><span>Telefoonnummer</span><input type="tel" name="phone" placeholder="+31 6 12 34 56 78" required /></label>
                </div>
                <div className="scanner-lead-actions">
                  <p>Deze intake is geen automatisch juridisch oordeel. De definitieve beoordeling gebeurt handmatig op basis van je website en instellingen.</p>
                  <button type="submit" className="btn btn-on-dark hero-audit-btn">Vraag gratis eerste audit aan <span>→</span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VizAnalyse() {
  const items = [
    {k:"bad",name:"GA4 zonder consent gate",meta:"/checkout, /producten",tag:"Risico"},
    {k:"bad",name:"Meta pixel — orphan",meta:"Tag manager 4.2.1",tag:"Risico"},
    {k:"warn",name:"Cookie banner mist functie/marketing split",meta:"WCAG niveau 2.1",tag:"Let op"},
    {k:"bad",name:"Newsletter dubbele opt-in mist",meta:"Mailchimp lijst #2",tag:"Risico"},
    {k:"warn",name:"Privacy beleid 14 mnd oud",meta:"/privacy",tag:"Let op"},
  ];
  return (
    <div className="viz-analyse">
      {items.map((it,i) => (
        <div key={i} className={`viz-issue ${it.k}`}>
          <div className="dot"/><div className="name">{it.name}</div>
          <div className="meta">{it.meta}</div><div className="badge">{it.tag}</div>
        </div>
      ))}
    </div>
  );
}

function VizFix() {
  return (
    <div className="viz-fix">
      <div className="viz-diff">
        <div className="row del"><span className="sign">−</span><span>gtag('config', 'G-XXX', {'{ anonymize_ip: false }'})</span></div>
        <div className="row add"><span className="sign">+</span><span>if (consent.analytics) gtag('config', 'G-XXX')</span></div>
        <div className="row del"><span className="sign">−</span><span>fbq('track', 'PageView')</span></div>
        <div className="row add"><span className="sign">+</span><span>if (consent.marketing) fbq('track', 'PageView')</span></div>
      </div>
      <div className="viz-progress">
        <div className="viz-bar"><span className="name">Tracking</span><div className="track"><div className="fill" style={{width:"100%"}}/></div><span className="pct">100%</span></div>
        <div className="viz-bar"><span className="name">Consent</span><div className="track"><div className="fill" style={{width:"92%"}}/></div><span className="pct">92%</span></div>
        <div className="viz-bar"><span className="name">Data clean</span><div className="track"><div className="fill" style={{width:"84%"}}/></div><span className="pct">84%</span></div>
        <div className="viz-bar"><span className="name">Forms</span><div className="track"><div className="fill" style={{width:"100%"}}/></div><span className="pct">100%</span></div>
      </div>
    </div>
  );
}

function VizMonitor() {
  const pts = [82,78,88,84,92,86,94,90,96,93,98,95,99];
  const w=100,h=100,stepX=w/(pts.length-1),min=70,max=100;
  const path = pts.map((p,i) => { const x=i*stepX,y=h-((p-min)/(max-min))*h; return `${i===0?"M":"L"}${x.toFixed(2)},${y.toFixed(2)}`; }).join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;
  return (
    <div className="viz-monitor">
      <div className="viz-graph">
        <span className="label-y">Compliance · 30d</span>
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
          <line className="ggrid" x1="0" y1="25" x2={w} y2="25"/>
          <line className="ggrid" x1="0" y1="50" x2={w} y2="50"/>
          <line className="ggrid" x1="0" y1="75" x2={w} y2="75"/>
          <path className="garea" d={area}/><path className="gline" d={path}/>
        </svg>
      </div>
      <div className="viz-events">
        <div className="viz-event ok"><span className="time">09:14</span><span className="text">Auto-fix toegepast — tracking script</span><span className="badge">Done</span></div>
        <div className="viz-event warn"><span className="time">06:02</span><span className="text">Nieuw cookie domein gedetecteerd</span><span className="badge">Review</span></div>
        <div className="viz-event ok"><span className="time">gisteren</span><span className="text">Wekelijkse compliance check geslaagd</span><span className="badge">Auto</span></div>
      </div>
    </div>
  );
}

function Services() {
  const tabs = [
    {step:"01",label:"Stap 1: We scannen",title:"Waar klopt het niet (meer)?",promise:"Systemen veranderen zonder dat je het doorhebt.",desc:"AI maakt bouwen sneller, maar fouten minder zichtbaar. Tools updaten zichzelf, scripts schuiven door, regels veranderen. Wij brengen feitelijk in kaart waar dat al misgaat — voordat het je iets kost.",list:["Website scan op cookies, tracking en data","E-mail en toestemming controle","Analyse van scripts en tools die automatisch veranderen","Inzicht in waar je risico loopt"],slot:"Wat vandaag klopt, kan morgen fout zijn — wij laten zien waar dat gebeurt.",cta:"Laat je website checken"},
    {step:"02",label:"Stap 2: We fixen",title:"We maken alles weer correct",promise:"Automatisering versnelt fouten — wij zetten het terug op de rails.",desc:"Alles wat uit de analyse komt lossen we op. Geen losse pleisters, geen half werk. Technisch, juridisch en qua data sluit het weer aan op wat de wet vraagt en wat jij nodig hebt om door te kunnen.",list:["Cookie en consent instellingen corrigeren","Tracking en data correct instellen","Fouten in scripts en structuur oplossen","E-mail en data gebruik compliant maken"],slot:"Wij zorgen dat alles klopt — technisch, juridisch en qua data.",cta:"Laat dit oplossen"},
    {step:"03",label:"Stap 3: We monitoren",title:"We zorgen dat het zo blijft",promise:"De rust van weten dat iemand anders het bijhoudt.",desc:"Dit is waar het echt om gaat. Regels schuiven, tools updaten, AI past dingen aan zonder dat je het ziet. Wij kijken doorlopend mee, lossen fouten op zodra ze ontstaan en houden je portaal bij — maandelijks, automatisch, zonder gedoe.",list:["Automatische checks en foutdetectie","Updates bij veranderende regels en systemen","Directe fixes zonder dat jij iets hoeft te doen","Inzicht via je klantportaal"],slot:"Zonder controle ontstaan er opnieuw fouten. Wij zorgen dat alles blijft kloppen.",cta:"Ja, ik wil dit",featured:true},
  ];
  const [active,setActive] = React.useState("stap3");
  return (
    <section className="services-section" id="diensten">
      <div className="container">
        <div className="section-head"><span className="eyebrow on-dark">Hoe wij te werk gaan</span></div>
        <div className="svc-tabs" role="tablist">
          {tabs.map((t,i) => (
            <button key={i} type="button" role="tab" aria-selected={active===`stap${i+1}`?"true":"false"} className={`svc-tab ${active===`stap${i+1}`?"active":""} ${t.featured?"featured":""}`} onClick={()=>setActive(`stap${i+1}`)}>
              <span className="step-num">{t.step}</span><span>{t.label}</span>
              {t.featured && <span className="tab-badge">Meest gekozen</span>}
            </button>
          ))}
        </div>
        {tabs.map((tab,i) => (
          <div key={tab.step} id={`stap${i+1}`} className={`svc-panel tab-panel ${active===`stap${i+1}`?"active":""} ${tab.featured?"is-featured":""}`}>
            <div className="svc-copy">
              {tab.featured && <span className="featured-badge">★ Meest gekozen — onze core dienst</span>}
              <h3>{tab.title}</h3>
              <p className="promise">{tab.promise}</p>
              <p className="desc">{tab.desc}</p>
              <ul className="svc-checklist">
                {tab.list.map(item => (<li key={item}><div className="check"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span>{item}</span></li>))}
              </ul>
              <p className="svc-slot">{tab.slot}</p>
              <a className="btn btn-on-dark" href="contact.html">{tab.cta} <span className="arrow">→</span></a>
            </div>
            <div className="svc-visual">
              <div className="svc-visual-head">
                <div className="label">{tab.label} · live preview</div>
                <span className="live-pill"><span className="dot"/>RUNNING</span>
              </div>
              {i===0 && <VizAnalyse/>}{i===1 && <VizFix/>}{i===2 && <VizMonitor/>}
            </div>
          </div>
        ))}
        <div className="concrete-areas">
          <div className="concrete-head">
            <span className="eyebrow on-dark">Onderdelen, geen losse diensten</span>
            <h3>Wat wij concreet aanpassen</h3>
            <p>Drie domeinen, allemaal onderdeel van hetzelfde compliance-werk. Niet apart te boeken — ze hangen samen.</p>
          </div>
          <div className="concrete-grid">
            {[{title:"Data & tracking",items:["Consent mode","Analytics setup","Datakwaliteit"]},{title:"Website & techniek",items:["Scripts","Snelheid","Structuur"]},{title:"E-mail & flows",items:["Toestemming","Automatisering","Data gebruik"]}].map(a=>(
              <div key={a.title} className="concrete-card">
                <div className="concrete-icon">◎</div>
                <div className="concrete-body"><h4>{a.title}</h4><ul>{a.items.map(i=><li key={i}>{i}</li>)}</ul></div>
              </div>
            ))}
          </div>
          <p className="concrete-foot">Dit zijn <em>onderdelen</em> van het compliance werk — geen losse diensten.</p>
        </div>
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="cta-strip" id="contact">
      <div className="container inner">
        <div>
          <span className="eyebrow on-dark">Volgende stap</span>
          <h2 style={{marginTop:18}}>Begin met een <span className="accent">gratis scan</span>.<br/>Geen verplichting, wel duidelijkheid.</h2>
          <p>Binnen 24 uur ligt er een rapport: wat klopt, wat niet, en wat het kost om het op te lossen. Daarna beslis je zelf of je losse fix of doorlopende monitoring wilt.</p>
          <div className="actions" style={{marginTop:28}}>
            <a className="btn btn-on-dark" href="index.html#scanner">Start gratis scan <span className="arrow" style={{color:"var(--accent)"}}>→</span></a>
            <a className="btn btn-on-dark btn-secondary" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1SPBgmZQ1XSYWQRkGAxUaSpRVhIIaFPBxq1EmTwHjVCdk_vOJT3Lloz3YUtpWrLd0rG-HTEPMS">Plan 20-min gesprek</a>
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

function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent-h", "170");
  }, []);
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
    const timer = setTimeout(scrollToHashTarget, 60);
    window.addEventListener("hashchange", scrollToHashTarget);
    return () => { clearTimeout(timer); window.removeEventListener("hashchange", scrollToHashTarget); };
  }, []);
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }); }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <SharedHeader/>
      <Hero/>
      <Layers/>
      <Marquee/>
      <Scanner/>
      <AboutBart/>
      <Services/>
      <CtaStrip/>
      <SharedFooter/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
