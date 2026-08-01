import Image from "next/image";

const markets = ["Saudi Arabia", "UAE", "Kuwait", "Bahrain", "Qatar", "Egypt"];

const capabilities = [
  ["01", "Merchandise Intelligence", "OTB, forecasting, allocation, replenishment, pricing, margins and ageing control."],
  ["02", "Commercial Strategy", "P&L thinking, buying budgets, market profiling, expansion and performance planning."],
  ["03", "Digital Growth Systems", "Next.js, SEO, campaigns, CRM workflows, lead intelligence and analytics."],
  ["04", "Business Leadership", "Teams, vendors, client relationships and practical execution across sectors."],
];

const chapters = [
  ["1997", "The beginning", "A government classroom in Telangana. The first chapter in a career built through persistence."],
  ["2004–15", "Scale", "Landmark Group and Max Fashion. SAR 0.6 billion in sales and buying budgets. A region growing from 5 to 22 stores."],
  ["2015–20", "Multinational range", "Beside Group, Dubai. Multi-brand commercial planning across six markets and a portfolio representing 119 store operations."],
  ["2020–Now", "Reinvention", "Entrepreneurship, digital platforms and growth systems across real estate, hospitality, healthcare and local services."],
];

const cases = [
  {
    id: "A",
    label: "Retail network",
    title: "Expansion without losing control.",
    text: "Merchandise planning, OTB, allocation and replenishment supported Max Fashion’s Eastern Region growth from 5 to 22 stores.",
    proof: "SAR 0.6B managed",
  },
  {
    id: "B",
    label: "Multi-brand portfolio",
    title: "Complexity turned into commercial rhythm.",
    text: "Sales forecasts, assortment, promotions, stock balancing and performance reviews across international fashion brands and six markets.",
    proof: "119 store operations represented",
  },
  {
    id: "C",
    label: "Digital transformation",
    title: "Disconnected activity turned into a system.",
    text: "Websites, SEO, lead tracking, Supabase CRM workflows and performance dashboards built into practical growth foundations.",
    proof: "Four sectors connected",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anjanna Margam",
  url: "https://anjannaportfolio.jaivibe.com",
  image: "https://anjannaportfolio.jaivibe.com/images/anjanna-margam.jpg",
  jobTitle: "Marketing Manager and Digital Growth Strategist",
  worksFor: { "@type": "Organization", name: "Supraja Group" },
  sameAs: ["https://www.linkedin.com/in/anjanna-margam-b8076241"],
  knowsAbout: ["Retail merchandise planning", "Digital growth", "SEO", "Real estate marketing", "Business strategy"],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <header className="topbar">
        <a className="monogram" href="#top" aria-label="Anjanna Margam home">AM<span>.</span></a>
        <p>Global commerce intelligence</p>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="#work">Work</a>
          <a href="#contact">Connect</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orbit" aria-hidden="true"><span>20+</span><i>years</i></div>
          <div className="hero-index" aria-hidden="true">01 / 06</div>
          <div className="hero-content">
            <p className="kicker"><span /> Retail strategy · Digital growth · Leadership</p>
            <h1><span>Global retail</span><span>intelligence.</span><em>Strategic growth.</em></h1>
            <div className="hero-lower">
              <p>Anjanna Margam transforms commercial complexity into practical momentum, combining multinational retail planning with modern digital execution.</p>
              <div className="hero-actions">
                <a className="action action-light" href="#story">Enter the story <Arrow /></a>
                <a className="action action-line" href="/Anjanna_Margam_Consulting_Resume.pdf" download>Resume ↓</a>
              </div>
            </div>
          </div>
          <div className="portrait-slice">
            <Image src="/images/anjanna-margam.jpg" alt="Anjanna Margam, retail strategist and digital growth leader" fill priority sizes="(max-width: 760px) 42vw, 28vw" />
            <p><span>Based in</span> Hyderabad, India</p>
          </div>
          <div className="hero-footer"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="manifesto" id="story">
          <p className="vertical-label">A point of view</p>
          <div>
            <p className="chapter-no">02</p>
            <h2>Numbers reveal the pattern.<br /><span>Judgement changes the outcome.</span></h2>
            <div className="manifesto-copy">
              <p>More than two decades across retail, entrepreneurship and digital growth have shaped one operating belief.</p>
              <p>Understand the numbers. Respect the customer. Build systems people can actually use. Then execute with clarity.</p>
            </div>
          </div>
        </section>

        <section className="data-stage" id="impact">
          <div className="data-heading">
            <p className="chapter-no">03 · Evidence</p>
            <h2>Scale, not slogans.</h2>
          </div>
          <div className="data-grid">
            <article className="data-primary"><span>SAR</span><strong>0.6B</strong><p>Sales and buying budgets managed at Max Fashion, Eastern Region.</p></article>
            <article><strong>5 → 22</strong><p>Stores supported through regional expansion.</p></article>
            <article><strong>119</strong><p>Store operations represented across the Beside Group portfolio.</p></article>
            <article><strong>6</strong><p>International markets connected by planning experience.</p></article>
          </div>
          <p className="evidence-note">119 represents the store operations listed across the multi-brand portfolio, not direct ownership of every store.</p>
        </section>

        <section className="world-stage" aria-label="International market experience">
          <div className="world-copy">
            <p className="chapter-no">04 · Across markets</p>
            <h2>One commercial language.<br />Six market realities.</h2>
            <p>Planning decisions travelled across borders, brands, seasons and customer behaviours.</p>
          </div>
          <div className="constellation" aria-label="Markets: Saudi Arabia, UAE, Kuwait, Bahrain, Qatar and Egypt">
            <div className="rings" aria-hidden="true"><i /><i /><i /></div>
            {markets.map((market, index) => <span className={`market market-${index + 1}`} key={market}><b>{String(index + 1).padStart(2, "0")}</b>{market}</span>)}
            <div className="constellation-core"><span>International</span><strong>6</strong><i>markets</i></div>
          </div>
        </section>

        <section className="chapters" id="journey">
          <div className="chapters-head"><p className="chapter-no">05 · The journey</p><h2>Four chapters.<br />One continuous reinvention.</h2></div>
          <div className="chapter-list">
            {chapters.map(([year, title, text], index) => (
              <article key={year}><span>{String(index + 1).padStart(2, "0")}</span><time>{year}</time><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="capabilities" id="expertise">
          <div className="capability-title"><p className="chapter-no">06 · Capabilities</p><h2>Strategy that remains close to the work.</h2></div>
          <div className="capability-list">
            {capabilities.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i></article>)}
          </div>
        </section>

        <section className="work" id="work">
          <div className="work-visual">
            <Image src="/images/global-commerce-editorial.webp" alt="Conceptual premium retail environment representing merchandise intelligence" fill sizes="100vw" />
            <div><p className="chapter-no">07 · Selected work</p><h2>Commercial discipline.<br />Digital velocity.</h2></div>
          </div>
          <div className="case-list">
            {cases.map((item) => <article key={item.id}><span className="case-id">{item.id}</span><div><p>{item.label}</p><h3>{item.title}</h3><span>{item.text}</span></div><strong>{item.proof}</strong></article>)}
          </div>
        </section>

        <section className="ventures" id="ventures">
          <div className="ventures-head"><p className="chapter-no">08 · Built, not imagined</p><h2>Ideas moved into the real world.</h2></div>
          <div className="venture-strip">
            <a href="https://jaivibe.com" target="_blank" rel="noreferrer"><span>Digital growth</span><strong>JaiVibe</strong><p>Web · SEO · Performance</p><Arrow /></a>
            <a href="https://biomedicalservices.jaivibe.com" target="_blank" rel="noreferrer"><span>Healthcare technology</span><strong>Biomedical<br />Services</strong><p>Equipment · Rental · Support</p><Arrow /></a>
            <a href="https://safemove.jaivibe.com" target="_blank" rel="noreferrer"><span>Relocation services</span><strong>Safe<span>Move</span></strong><p>Fast · Safe · Local</p><Arrow /></a>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="chapter-no">09 · The next chapter</p>
          <h2>Let’s make complexity<br /><em>useful.</em></h2>
          <p className="contact-copy">Available for senior consulting, advisory and leadership conversations in retail planning, digital growth and business transformation.</p>
          <div className="contact-links">
            <a href="https://wa.me/919640753929" target="_blank" rel="noreferrer">Start a conversation <Arrow /></a>
            <a href="mailto:anjumargams@gmail.com">anjumargams@gmail.com <Arrow /></a>
            <a href="https://www.linkedin.com/in/anjanna-margam-b8076241" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </section>
      </main>

      <footer><a className="monogram" href="#top">AM<span>.</span></a><p>© {new Date().getFullYear()} Anjanna Margam</p><span>Hyderabad · India</span></footer>
      <a className="floating-contact" href="https://wa.me/919640753929" target="_blank" rel="noreferrer" aria-label="Chat with Anjanna Margam on WhatsApp">Let&apos;s talk <Arrow /></a>
    </>
  );
}
