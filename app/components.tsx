import Link from "next/link";
import { business } from "./data";

export function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="All Borough Pest Control home">
        <img src="/allborough-logo.png" alt="All Borough Pest Control" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#services">Services</Link>
        <Link href="/commercial">Commercial</Link>
        <Link href="/#plans">Plans</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
      <a className="header-call" href={business.phoneHref}>
        {business.phone}
      </a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <strong>{business.name}</strong>
        <p>{business.address}</p>
        <p>{business.serviceArea}</p>
      </div>
      <div className="footer-actions">
        <a className="button primary" href={business.phoneHref}>
          Call {business.phone}
        </a>
        <a className="button secondary" href="mailto:service@allboroughpestcontrol.com">
          Request an Inspection
        </a>
      </div>
    </footer>
  );
}

export function CTA({ label = "Request an Inspection" }: { label?: string }) {
  return (
    <div className="cta-panel">
      <div>
        <p className="eyebrow">Jersey City Pest Control</p>
        <h2>Need help with pest activity?</h2>
        <p>
          Call All Borough Pest Control for inspections, treatment options, and
          recurring prevention plans.
        </p>
      </div>
      <div className="cta-actions">
        <a className="button primary" href={business.phoneHref}>
          Call {business.phone}
        </a>
        <a className="button secondary" href="mailto:service@allboroughpestcontrol.com">
          {label}
        </a>
      </div>
    </div>
  );
}
