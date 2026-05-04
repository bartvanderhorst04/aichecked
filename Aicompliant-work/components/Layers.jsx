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
