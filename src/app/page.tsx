import Image from "next/image";

const markets = ["Saudi Arabia", "UAE", "Kuwait", "Bahrain", "Qatar", "Egypt"];

const capabilities = [
  ["01", "Retail Merchandise Planning", "Sales and buying budgets, open-to-buy, forecasting, assortment planning, allocation and replenishment."],
  ["02", "Commercial Performance", "Margin and P&L analysis, sell-through, inventory ageing, pricing, markdowns and trading reviews."],
  ["03", "Digital Marketing & Websites", "WordPress, Divi, Next.js, SEO, paid campaigns, content, analytics and lead-generation journeys."],
  ["04", "CRM & Business Systems", "Enquiry workflows, sales dashboards, reporting, follow-up processes and cross-functional coordination."],
];

const chapters = [
  ["1997–2004", "Early career", "Began as a teacher in Telangana, followed by early work in Saudi Arabia before moving into merchandise and inventory planning."],
  ["2004–2015", "Max Fashion · Saudi Arabia", "Merchandise and inventory planning in Landmark Group’s Eastern Province operations, including approximately SAR 600 million in sales and buying budgets, and support for regional store expansion."],
  ["2015–2020", "Beside Group · Dubai", "Retail merchandise planning for international fashion brands across six markets, with responsibility for budgets, OTB, assortments, allocation and trading analysis."],
  ["2020–present", "JaiVibe & real estate marketing", "Founded JaiVibe in 2020, expanding into websites, SEO, lead-generation and CRM workflows. Since 2026, also supporting real estate marketing at Sri Supraja Infracon."],
];

const cases = [
  {
    id: "A",
    label: "Max Fashion · Saudi Arabia",
    title: "Planning for regional store expansion.",
    text: "Managed sales and buying budgets, OTB, allocation, replenishment, pricing and markdown planning. Supported the network’s growth from 5 to 22 stores and planning readiness for 21 store launches.",
    proof: "Approx. SAR 600M budget scope",
  },
  {
    id: "B",
    label: "Beside Group · Dubai",
    title: "Merchandise planning across six markets.",
    text: "Planned sales, buying, assortments, margins and inventory for international fashion brands including Diesel, Fred Perry, Scotch & Soda and Pinko across six markets.",
    proof: "Six markets · Multi-brand portfolio",
  },
  {
    id: "C",
    label: "JaiVibe · India",
    title: "Commercial thinking applied to digital systems.",
    text: "Developed websites, search content, lead-generation journeys, CRM workflows and reporting dashboards for businesses across real estate, hospitality, healthcare and local services.",
    proof: "Websites · SEO · CRM workflows",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
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
          <div className="hero-orbit" aria-hidden="true"><span>1997</span><i>career began</i></div>
          <div className="hero-index" aria-hidden="true">01 / 10</div>
          <div className="hero-content">
            <p className="kicker"><span /> Merchandise planning · Commercial strategy · Digital growth</p>
            <h1><span>Merchandise planning.</span><span>Commercial strategy.</span><em>Digital growth.</em></h1>
            <div className="hero-lower">
              <p>Anjanna Margam brings merchandise planning experience from Landmark Group’s Max Fashion and Beside Group into business strategy, websites, SEO, marketing and CRM-enabled lead generation in India.</p>
              <div className="hero-actions">
                <a className="action action-light" href="#story">Enter the story <Arrow /></a>
                <a className="action action-line" href="/Anjanna_Margam_Consulting_Resume.pdf" download>Resume ↓</a>
              </div>
            </div>
          </div>
          <div className="portrait-slice">
            <Image src="/images/anjanna-margam.jpg" alt="Anjanna Margam, retail merchandise planning and digital growth professional" fill priority sizes="(max-width: 760px) 42vw, 28vw" />
            <p><span>Based in</span> Hyderabad, India</p>
          </div>
          <div className="hero-footer"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="manifesto" id="story">
          <p className="vertical-label">Executive profile</p>
          <div>
            <p className="chapter-no">02</p>
            <h2>Numbers reveal the pattern.<br /><span>Judgement changes the outcome.</span></h2>
            <div className="manifesto-copy">
              <p>His career began in teaching in Telangana in 1997, continued through retail merchandise planning in Saudi Arabia and Dubai, and expanded into business consulting and digital marketing in India after 2020.</p>
              <p>His strengths include sales and buying budgets, OTB, forecasting, inventory planning and commercial analysis, complemented by hands-on website, marketing and CRM work.</p>
            </div>
          </div>
        </section>

        <section className="current-role" id="current-role">
          <div className="current-role__intro">
            <p className="chapter-no">03 · Current professional focus</p>
            <h2>Commercial planning meets digital execution.</h2>
          </div>
          <article className="current-role__card">
            <span>JaiVibe since 2020 · Sri Supraja Infracon since 2026</span>
            <h3>Founder & Digital Growth Strategist</h3>
            <p>Founded JaiVibe to develop business websites, search visibility, digital campaigns and CRM-based lead workflows. Since January 2026, also working on real estate and digital marketing strategy with Sri Supraja Infracon, connecting project information, online enquiries and sales follow-up.</p>
            <ul className="current-role__points">
              <li>Website planning, WordPress and Next.js</li>
              <li>SEO, local search and digital campaigns</li>
              <li>Real estate project positioning</li>
              <li>CRM, enquiry and follow-up workflows</li>
              <li>Performance analytics and reporting</li>
              <li>Sales support and channel coordination</li>
            </ul>
          </article>
        </section>

        <section className="data-stage" id="impact">
          <div className="data-heading">
            <p className="chapter-no">04 · Evidence</p>
            <h2>Numbers behind the retail career.</h2>
          </div>
          <div className="data-grid">
            <article className="data-primary"><span>SAR</span><strong>600M</strong><p>Approximate sales and buying budgets managed for Max Fashion’s Eastern Province portfolio.</p></article>
            <article><strong>5 → 22</strong><p>Max Fashion Eastern Province store network expansion supported.</p></article>
            <article><strong>21</strong><p>Max Fashion store launches supported through planning and stock readiness.</p></article>
            <article><strong>6</strong><p>Markets covered through Beside Group merchandise planning.</p></article>
          </div>
          <p className="evidence-note">These figures describe planning responsibilities and contributions documented in the professional resume, not personal ownership of stores or sales revenue.</p>
        </section>

        <section className="world-stage" aria-label="International market experience">
          <div className="world-copy">
            <p className="chapter-no">05 · Across markets</p>
            <h2>Retail merchandise planning.<br />Six markets.</h2>
            <p>Sales and buying plans, assortment decisions and inventory reviews for fashion brands across six Middle Eastern and North African markets.</p>
          </div>
          <div className="constellation" aria-label="Markets: Saudi Arabia, UAE, Kuwait, Bahrain, Qatar and Egypt">
            <div className="rings" aria-hidden="true"><i /><i /><i /></div>
            {markets.map((market, index) => <span className={`market market-${index + 1}`} key={market}><b>{String(index + 1).padStart(2, "0")}</b>{market}</span>)}
            <div className="constellation-core"><span>International</span><strong>6</strong><i>markets</i></div>
          </div>
        </section>

        <section className="chapters" id="journey">
          <div className="chapters-head"><p className="chapter-no">06 · The journey</p><h2>Four career chapters.<br />A practical progression.</h2></div>
          <div className="chapter-list">
            {chapters.map(([year, title, text], index) => (
              <article key={year}><span>{String(index + 1).padStart(2, "0")}</span><time>{year}</time><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section className="capabilities" id="expertise">
          <div className="capability-title"><p className="chapter-no">07 · Capabilities</p><h2>Planning expertise and hands-on delivery.</h2></div>
          <div className="capability-list">
            {capabilities.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i></article>)}
          </div>
        </section>

        <section className="work" id="work">
          <div className="work-visual">
            <Image src="/images/global-commerce-editorial.webp" alt="Conceptual premium retail environment representing merchandise intelligence" fill sizes="100vw" />
            <div><p className="chapter-no">08 · Selected work</p><h2>Merchandise discipline.<br />Practical digital systems.</h2></div>
          </div>
          <div className="case-list">
            {cases.map((item) => <article key={item.id}><span className="case-id">{item.id}</span><div><p>{item.label}</p><h3>{item.title}</h3><span>{item.text}</span></div><strong>{item.proof}</strong></article>)}
          </div>
        </section>

        <section className="ventures" id="ventures">
          <div className="ventures-head"><p className="chapter-no">09 · Built, not imagined</p><h2>Businesses built.<br />Projects supported.</h2></div>
          <div className="venture-strip">
            <a href="https://jaivibe.com" target="_blank" rel="noreferrer"><span>Founded · Digital marketing</span><strong>JaiVibe</strong><p>Websites · SEO · Campaigns</p><Arrow /></a>
            <a href="https://biomedicalservices.jaivibe.com" target="_blank" rel="noreferrer"><span>Business initiative · Healthcare services</span><strong>Biomedical<br />Services</strong><p>Biomedical equipment · Services</p><Arrow /></a>
            <a href="https://safemove.jaivibe.com" target="_blank" rel="noreferrer"><span>Business initiative · Relocation</span><strong>Safe<span>Move</span></strong><p>Packing · Moving services</p><Arrow /></a>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="chapter-no">10 · The next chapter</p>
          <h2>Let’s make complexity<br /><em>useful.</em></h2>
          <p className="contact-copy">Open to senior retail and merchandise planning opportunities, commercial analysis, business strategy, digital marketing consulting and website or CRM system engagements.</p>
          <div className="contact-links">
            <a href="https://wa.me/919640753929" target="_blank" rel="noreferrer">Discuss business growth <Arrow /></a>
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
