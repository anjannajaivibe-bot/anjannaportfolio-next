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
    text: "SEO, paid campaigns, landing pages, content strategy and conversion-focused websites.",
  },
  {
    title: "Business Leadership",
    text: "Team building, vendor negotiation, client relationships and practical business execution.",
  },
];

const timeline = [
  {
    years: "Present",
    role: "Marketing Manager, Supraja Group",
    detail:
      "Leading digital marketing, brand visibility, lead generation and growth initiatives across real estate and hospitality.",
  },
  {
    years: "2020 - Present",
    role: "Founder, JaiVibe",
    detail:
      "Building performance-focused websites and digital marketing systems for growing Indian businesses.",
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
    role: "Merchandise Planning Manager, Beside Group",
    detail:
      "Managed planning, stock flow and commercial performance for global fashion brands across six Gulf markets.",
  },
  {
    years: "2005 - 2015",
    role: "Inventory & Planning, Landmark Group",
    detail:
      "Progressed through retail operations and planning while supporting the expansion of Max stores in Saudi Arabia.",
  },
  {
    years: "1997 - 2005",
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
  sameAs: ["https://www.linkedin.com/in/anjanna-margam"],
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
                href="https://www.linkedin.com/in/anjanna-margam"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn profile
              </a>
            </div>
            <dl className="hero-stats">
              <div><dt>20+</dt><dd>Years of experience</dd></div>
              <div><dt>6</dt><dd>Gulf markets</dd></div>
              <div><dt>4</dt><dd>Growth domains</dd></div>
            </dl>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="/images/anjanna-margam.jpg"
                alt="Anjanna Margam, retail strategist and digital growth leader"
                width={1080}
                height={1477}
                priority
                sizes="(max-width: 800px) 82vw, 38vw"
              />
            </div>
            <div className="role-card">
              <span>Current focus</span>
              <strong>Marketing Manager, Supraja Group</strong>
            </div>
          </div>
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
            <Image
              src="/images/anjanna-career-journey.webp"
              alt="Visual summary of Anjanna Margam's professional career journey"
              width={2048}
              height={2048}
              sizes="(max-width: 900px) 100vw, 34vw"
            />
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
            For business partnerships, strategic marketing, retail planning or
            growth conversations, reach me directly.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="https://wa.me/919640753929" target="_blank" rel="noreferrer">WhatsApp</a>
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
            <a href="#expertise">Expertise</a>
            <a href="#journey">Career journey</a>
            <a href="#ventures">Ventures</a>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <a href="tel:+919640753929">+91 96407 53929</a>
            <a href="mailto:anjumargams@gmail.com">anjumargams@gmail.com</a>
            <a href="https://www.linkedin.com/in/anjanna-margam" target="_blank" rel="noreferrer">LinkedIn</a>
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
