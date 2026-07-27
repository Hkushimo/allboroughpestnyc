const services = [
  "General Pest Control",
  "Termite Control",
  "Rodent Control",
  "Bed Bug Treatment",
  "Mosquito Control",
  "Cockroach Control",
  "Ant Control",
  "Commercial Pest Control",
  "Pest Exclusion",
  "Pest Inspections",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="All Borough Pest Control home">
            <img src="/allborough-logo.png" alt="All Borough Pest Control" />
          </a>
          <div className="navLinks">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroContent">
          <div className="heroCopy">
            <p className="eyebrow">Residential and commercial pest solutions</p>
            <h1>Reliable pest control for every borough.</h1>
            <p className="lead">
              All Borough Pest Control handles inspections, treatments, and
              prevention for homes and businesses with straightforward service
              and fast scheduling.
            </p>
            <div className="heroActions">
              <a className="button primary" href="tel:2012923456">
                Call 201-292-3456
              </a>
              <a className="button secondary" href="mailto:allboroughpestcontrol@gmail.com">
                Email us
              </a>
            </div>
          </div>

          <div className="heroPanel" aria-label="Service highlights">
            <div>
              <span className="panelLabel">Covered Services</span>
              <strong>10</strong>
            </div>
            <p>
              From active infestations to exclusion work, get a practical plan
              for the pest problem in front of you.
            </p>
          </div>
        </div>
      </section>

      <section className="servicesSection" id="services">
        <div className="sectionHeader">
          <p className="eyebrow">Services</p>
          <h2>Pest control without the runaround.</h2>
          <p>
            Choose the service you need or request an inspection if you are not
            sure what is causing the issue.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service}>
              <span aria-hidden="true" />
              <h3>{service}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="contactBand" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Schedule service with All Borough Pest Control.</h2>
        </div>
        <div className="contactActions">
          <a href="tel:2012923456">201-292-3456</a>
          <a href="mailto:allboroughpestcontrol@gmail.com">
            allboroughpestcontrol@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
