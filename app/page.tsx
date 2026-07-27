import Link from "next/link";
import { CTA, Footer, Header } from "./components";
import { business, commercialSegments, coreServices, featuredServices, plans } from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Licensed pest solutions in Jersey City</p>
            <h1>Fast, practical pest control for homes and businesses.</h1>
            <p>
              All Borough Pest Control handles inspections, targeted treatments,
              prevention plans, and recurring service from {business.address}.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={business.phoneHref}>
                Call {business.phone}
              </a>
              <a className="button secondary" href="#services">
                View Services
              </a>
            </div>
          </div>
          <div className="hero-card" aria-label="Service highlights">
            <img src="/allborough-logo.png" alt="" />
            <ul>
              <li>Same-week inspection scheduling</li>
              <li>Residential and commercial plans</li>
              <li>Rodent, termite, bed bug, roach, ant, mosquito, and tick service</li>
            </ul>
          </div>
        </section>

        <section className="section intro-band">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Inspection first, treatment second, prevention always.</h2>
          </div>
          <p>
            Every property is different. We look for pest pressure, entry points,
            moisture, sanitation issues, and harborage areas so the service plan
            addresses the source, not just the symptoms.
          </p>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Core pest control services</p>
            <h2>Residential services</h2>
          </div>
          <div className="service-grid">
            {featuredServices.slice(0, 7).map((service) => (
              <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
                <span>{service.title}</span>
                <p>{service.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">Additional service options</p>
            <h2>Coverage for common and difficult pests.</h2>
            <p>
              Service availability can depend on licensing, equipment, and the
              exact property conditions. Honeybee concerns are handled carefully:
              if relocation is appropriate, customers should be referred to a
              qualified beekeeper.
            </p>
          </div>
          <div className="tag-list">
            {coreServices.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </section>

        <section className="section commercial-band">
          <div>
            <p className="eyebrow">Commercial pest control</p>
            <h2>Recurring service for business properties.</h2>
            <p>
              Restaurants, multifamily properties, offices, warehouses, retail
              sites, hotels, schools, healthcare facilities, manufacturing sites,
              and construction sites need consistent inspections, documentation,
              discreet visits, emergency response, and compliance-aware service.
            </p>
            <Link className="button primary" href="/commercial">
              View Business Services
            </Link>
          </div>
          <div className="segment-grid">
            {commercialSegments.slice(0, 6).map((segment) => (
              <span key={segment}>{segment}</span>
            ))}
          </div>
        </section>

        <section className="section" id="plans">
          <div className="section-heading">
            <p className="eyebrow">Service plans</p>
            <h2>Simple packages customers understand.</h2>
          </div>
          <div className="plan-grid">
            {plans.map(([name, description]) => (
              <article className="plan-card" key={name}>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">High-value service pages</p>
            <h2>Detailed help for frequent pest problems.</h2>
          </div>
          <div className="link-grid">
            {featuredServices.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                {service.title}
              </Link>
            ))}
          </div>
        </section>

        <CTA label="Get a Free Quote" />
      </main>
      <Footer />
    </>
  );
}
