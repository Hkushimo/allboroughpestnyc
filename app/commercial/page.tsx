import { CTA, Footer, Header } from "../components";
import { business, commercialSegments } from "../data";

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <p className="eyebrow">Commercial Pest Control</p>
          <h1>Business pest programs built around inspections, documentation, and discretion.</h1>
          <p>
            All Borough Pest Control supports commercial properties across
            {` ${business.serviceArea}`} Service can include recurring plans,
            monitoring, treatment, emergency response, and compliance-aware
            documentation where applicable.
          </p>
          <a className="button primary" href={business.phoneHref}>
            Call {business.phone}
          </a>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Industries served</p>
            <h2>Plans for high-traffic, high-accountability properties.</h2>
          </div>
          <div className="service-grid compact">
            {commercialSegments.map((segment) => (
              <article className="service-card" key={segment}>
                <span>{segment}</span>
                <p>
                  Scheduled inspections, monitoring, treatment recommendations,
                  and service records tailored to the property.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">What to expect</p>
            <h2>Clear service records and recurring prevention.</h2>
          </div>
          <div className="process-list">
            <p>Initial facility inspection and pest-pressure review.</p>
            <p>Monitoring devices and targeted treatment where needed.</p>
            <p>Recurring monthly, quarterly, or custom service schedules.</p>
            <p>Discreet visits for customer-facing businesses.</p>
            <p>Emergency response for urgent activity or failed inspections.</p>
          </div>
        </section>

        <CTA label="Request a Commercial Inspection" />
      </main>
      <Footer />
    </>
  );
}
