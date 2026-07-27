import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA, Footer, Header } from "../../components";
import { business, featuredServices } from "../../data";

export function generateStaticParams() {
  return featuredServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = featuredServices.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | All Borough Pest Control`,
    description: `${service.summary} Serving ${business.serviceArea}`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = featuredServices.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="subhero">
          <p className="eyebrow">Service detail</p>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href={business.phoneHref}>
              Call {business.phone}
            </a>
            <Link className="button secondary" href="/#services">
              All Services
            </Link>
          </div>
        </section>

        <section className="section detail-grid">
          <article>
            <h2>Signs you may need service</h2>
            <ul>
              {service.signs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Our treatment process</h2>
            <ul>
              {service.process.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h2>Prevention tips</h2>
            <ul>
              {service.prevention.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Local help from Jersey City.</h2>
          </div>
          <p>
            All Borough Pest Control is based at {business.address} and serves
            {` ${business.serviceArea}`} Request an inspection for a clear
            diagnosis, treatment options, and practical prevention steps.
          </p>
        </section>

        <CTA label="Get a Free Quote" />
      </main>
      <Footer />
    </>
  );
}
