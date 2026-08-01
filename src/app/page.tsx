import Image from "next/image";

const skills = [
  {
    title: "Merchandise Planning",
    text: "OTB, forecasting, allocation, replenishment, pricing, margins and ageing control.",
  },
  {
    title: "Retail Strategy",
    text: "P&L ownership, buying budgets, market profiling, store expansion and performance planning.",
  },
  {
    title: "Digital Growth",
    text: "Next.js, WordPress, SEO, paid campaigns, landing pages, CRM workflows and performance analytics.",
  },
  {
    title: "Business Leadership",
    text: "Team building, vendor negotiation, client relationships and practical business execution.",
  },
];

const impact = [
  {
    value: "SAR 0.6B",
    label: "Sales and buying budgets managed",
    context: "Max Fashion, Eastern Region, Saudi Arabia",
  },
  {
    value: "5 to 22",
    label: "Stores supported through regional expansion",
    context: "Planning, allocation and replenishment",
  },
  {
    value: "119",
    label: "Store operations represented in the portfolio",
    context: "Multi-brand planning exposure at Beside Group",
  },
  {
    value: "6",
    label: "Middle Eastern markets",
    context: "Saudi Arabia, UAE, Kuwait, Bahrain, Qatar and Egypt",
  },
];

const caseStudies = [
  {
    number: "01",
    title: "Regional retail expansion",
    organisation: "Max Fashion, Saudi Arabia",
    challenge:
      "Support a rapidly growing regional store network while maintaining disciplined buying, allocation and inventory control.",
    action:
      "Managed merchandise planning, OTB, forecasting, pricing, margin, replenishment and ageing control across the Eastern Region.",
    outcome:
      "Managed sales and buying budgets of SAR 0.6 billion and supported expansion from 5 to 22 stores.",
  },
  {
    number: "02",
    title: "Multi-brand commercial planning",
    organisation: "Beside Group, Dubai",
    challenge:
      "Balance stock, margin and seasonal performance across an international fashion portfolio operating in six markets.",
    action:
      "Led sales and buying forecasts, P&L support, OTB, assortment planning, promotions, stock balancing and performance reviews.",
    outcome:
      "Planning exposure across a portfolio representing 119 store operations in Saudi Arabia, UAE, Kuwait, Bahrain, Qatar and Egypt.",
  },
  {
    number: "03",
    title: "Digital growth systems",
    organisation: "JaiVibe and Sri Supraja Infracon",
    challenge:
      "Turn fragmented websites, campaigns and lead follow-up into practical, measurable digital workflows for growing businesses.",
    action:
      "Built and improved Next.js websites, SEO programs, landing pages, Supabase-backed CRM processes, lead tracking and performance dashboards.",
    outcome:
      "Created integrated digital foundations supporting visibility, lead management and day-to-day marketing decisions across real estate, hospitality, healthcare and local services.",
  },
];

const timeline = [
  {
    years: "Present",
    role: "Marketing Manager & Digital Growth Strategist, Supraja Group",
    detail:
      "Leading investor-focused marketing, brand visibility, SEO, lead generation, CRM improvement and growth initiatives across real estate and hospitality.",
  },
  {
    years: "2020 - Present",
    role: "Founder & Digital Growth Strategist, JaiVibe",
    detail:
      "Building performance-focused websites, SEO programs, campaign funnels and lead-management systems for growing Indian businesses.",
  },
  {
    years: "2022 - Present",
    role: "Founder, BiomedicalServices",
    detail:
      "Supporting hospitals and diagnostic centres with biomedical equipment and service solutions.",
  },
  {
    years: "2023 - Present",
    role: "Founder, SafeMove",
    detail:
      "Developing a digitally enabled relocation-services brand for Hyderabad.",
  },
  {
    years: "2015 - 2020",
    role: "Retail & Merchandise Planner, Beside Group",
    detail:
      "Managed P&L support, OTB, assortment planning, stock flow and commercial performance for global fashion brands across six Middle Eastern markets.",
  },
  {
    years: "2004 - 2015",
    role: "Senior Merchandise Planner & Inventory Controller, Landmark Group",
    detail:
      "Managed SAR 0.6 billion in sales and buying budgets while supporting Max Fashion's Eastern Region expansion from 5 to 22 stores.",
  },
  {
    years: "1997 - 2004",
    role: "Teacher to Overseas Professional",
    detail:
      "Began as a government teacher in Telangana, then moved to Saudi Arabia and built a career through persistence.",
  },
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anjanna Margam",
  url: "https://anjannaportfolio.jaivibe.com",
  image:
    "https://anjannaportfolio.jaivibe.com/images/anjanna-margam.jpg",
  jobTitle: "Marketing Manager and Digital Growth Strategist",
  worksFor: { "@type": "Organization", name: "Supraja Group" },
  sameAs: ["https://www.linkedin.com/in/anjanna-margam-b8076241"],
  knowsAbout: [
    "Retail merchandise planning",
    "Digital marketing",
    "SEO",
    "Real estate marketing",
    "Business strategy",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Anjanna Margam home">
          <span>AM</span>
          <strong>Anjanna Margam</strong>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#impact">Impact</a>
          <a href="#expertise">Expertise</a>
          <a href="#journey">Journey</a>
          <a href="#ventures">Ventures</a>
          <a className="nav-cta" href="#contact">Connect</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Retail Strategy • Digital Growth • Leadership</p>
            <h1>
              Experience shaped by the Gulf.
              <span> Vision focused on India.</span>
            </h1>
            <p className="hero-lead">
              I am Anjanna Margam, a retail strategist, digital growth
              professional and entrepreneur with more than two decades of
              experience turning operational insight into business momentum.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#journey">
                Explore my journey
              </a>
              <a
                className="button button-secondary"
                href="/Anjanna_Margam_Consulting_Resume.pdf"
                download
              >
                Download resume
              </a>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/anjanna-margam-b8076241"
                target="_blank"
                rel="noreferrer"
              >
                View LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
            <dl className="hero-stats">
              <div><dt>20+</dt><dd>Years of experience</dd></div>
              <div><dt>6</dt><dd>Gulf markets</dd></div>
              <div><dt>22</dt><dd>Stores in expanded region</dd></div>
            </dl>
          </div>
          <aside className="executive-brief" aria-label="Professional profile summary">
            <p>Executive profile</p>
            <h2>Commercial discipline. Practical digital execution.</h2>
            <dl>
              <div><dt>Current focus</dt><dd>Marketing Manager, Supraja Group</dd></div>
              <div><dt>International scope</dt><dd>India and six Middle Eastern markets</dd></div>
              <div><dt>Consulting areas</dt><dd>Retail planning, digital growth and business transformation</dd></div>
            </dl>
            <a href="#impact">View selected impact <span aria-hidden="true">↓</span></a>
          </aside>
        </section>

        <section className="impact section-shell" id="impact">
          <p className="section-label">Selected professional impact</p>
          <div className="section-heading">
            <h2>Experience measured by scale and responsibility</h2>
            <p>Verified career evidence from international retail planning and business growth.</p>
          </div>
          <div className="impact-grid">
            {impact.map((item) => (
              <article className="impact-card" key={item.value}>
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.context}</p>
              </article>
            ))}
          </div>
          <p className="impact-note">
            The 119 figure represents the store operations listed across the multi-brand portfolio, not a claim of direct ownership of every store.
          </p>
        </section>

        <section className="about section-shell" id="about">
          <div>
            <p className="section-label">About me</p>
            <h2>Built through resilience. Driven by practical strategy.</h2>
          </div>
          <div className="about-copy">
            <p>
              My professional story began in a rural classroom in Telangana.
              It continued through demanding early years in Saudi Arabia,
              senior retail-planning responsibilities across the Gulf, and a
              return to India to build businesses and brands.
            </p>
            <p>
              Today, I combine merchandise planning discipline, commercial
              judgement and digital-first execution. I work across real estate,
              hospitality, digital services and entrepreneurship with one
              consistent principle: understand the numbers, respect the
              customer and execute with clarity.
            </p>
          </div>
        </section>

        <section className="expertise section-shell" id="expertise">
          <p className="section-label">Core expertise</p>
          <div className="section-heading">
            <h2>Strategy grounded in hands-on execution</h2>
            <p>Commercial thinking supported by deep operational experience.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <article className="skill-card" key={skill.title}>
                <span>0{index + 1}</span>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey section-shell" id="journey">
          <div className="journey-intro">
            <p className="section-label">Career journey</p>
            <h2>A career defined by continuous reinvention</h2>
            <p className="journey-summary">
              From teaching in Telangana to merchandise leadership in the Gulf,
              followed by entrepreneurship and digital growth work in India.
            </p>
          </div>
          <ol className="timeline">
            {timeline.map((item) => (
              <li key={`${item.years}-${item.role}`}>
                <p>{item.years}</p>
                <div>
                  <h3>{item.role}</h3>
                  <span>{item.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-studies section-shell" id="case-studies">
          <p className="section-label">Selected case studies</p>
          <div className="section-heading">
            <h2>From complex challenges to practical execution</h2>
            <p>Three examples connecting commercial judgement, hands-on action and evidence.</p>
          </div>
          <div className="case-study-list">
            {caseStudies.map((item) => (
              <article className="case-study" key={item.number}>
                <div className="case-title">
                  <span>{item.number}</span>
                  <div>
                    <p>{item.organisation}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
                <dl>
                  <div><dt>Challenge</dt><dd>{item.challenge}</dd></div>
                  <div><dt>Action</dt><dd>{item.action}</dd></div>
                  <div><dt>Evidence</dt><dd>{item.outcome}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="ventures section-shell" id="ventures">
          <p className="section-label">Entrepreneurial ventures</p>
          <div className="section-heading">
            <h2>Ideas developed into working businesses</h2>
            <p>Each venture solves a practical problem with a digital edge.</p>
          </div>
          <div className="venture-grid">
            <article className="venture-card venture-jaivibe">
              <div className="venture-visual visual-jaivibe">
                <Image src="/images/jaivibe-logo.png" alt="JaiVibe logo" width={207} height={93} />
                <span>Digital growth studio</span>
              </div>
              <div><h3>JaiVibe</h3><p>Web development, SEO and performance marketing for ambitious businesses.</p></div>
              <a href="https://jaivibe.com" target="_blank" rel="noreferrer">Visit JaiVibe</a>
            </article>
            <article className="venture-card">
              <div className="venture-visual visual-biomed">
                <span>Healthcare technology</span>
                <strong>Biomedical<br />Services</strong>
                <i>Equipment • Rental • Support</i>
              </div>
              <div><h3>BiomedicalServices</h3><p>Equipment sales, rental and technical support for healthcare providers.</p></div>
              <a href="https://biomedicalservices.jaivibe.com" target="_blank" rel="noreferrer">Explore services</a>
            </article>
            <article className="venture-card">
              <div className="venture-visual visual-safemove">
                <span>Relocation made simple</span>
                <strong>Safe<span>Move</span></strong>
                <i>Fast • Safe • Local</i>
              </div>
              <div><h3>SafeMove</h3><p>Customer-focused home and office relocation services in Hyderabad.</p></div>
              <a href="https://safemove.jaivibe.com" target="_blank" rel="noreferrer">Visit SafeMove</a>
            </article>
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <p className="section-label">Let&apos;s connect</p>
          <h2>Ready for the next meaningful collaboration.</h2>
          <p>
            Available for senior consulting, advisory and leadership conversations
            in retail planning, digital growth, real estate marketing and business transformation.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://wa.me/919640753929" target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="button button-secondary" href="/Anjanna_Margam_Consulting_Resume.pdf" download>Download resume</a>
            <a className="button button-secondary" href="mailto:anjumargams@gmail.com">Email me</a>
          </div>
          <div className="contact-meta">
            <a href="tel:+919640753929">+91 96407 53929</a>
            <a href="mailto:anjumargams@gmail.com">anjumargams@gmail.com</a>
            <span>Hyderabad, Telangana, India</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-intro">
            <a className="brand footer-brand" href="#top" aria-label="Anjanna Margam home">
              <span>AM</span>
              <strong>Anjanna Margam</strong>
            </a>
            <p>
              Retail strategy, digital growth, entrepreneurship and practical
              leadership built across India and the Gulf.
            </p>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#about">About</a>
            <a href="#impact">Selected impact</a>
            <a href="#expertise">Expertise</a>
            <a href="#journey">Career journey</a>
            <a href="#case-studies">Case studies</a>
            <a href="#ventures">Ventures</a>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <a href="tel:+919640753929">+91 96407 53929</a>
            <a href="mailto:anjumargams@gmail.com">anjumargams@gmail.com</a>
            <a href="https://www.linkedin.com/in/anjanna-margam-b8076241" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Anjanna Margam. All rights reserved.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-cta"
        href="https://wa.me/919640753929"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Anjanna Margam on WhatsApp"
      >
        <span>W</span>
        <strong>WhatsApp</strong>
      </a>
    </>
  );
}
