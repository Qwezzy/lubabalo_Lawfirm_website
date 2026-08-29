import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { site, practiceAreas } from '../data/site';

function Footer() {
  return (
    <footer className="bg-ink-950 text-parchment-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img className="h-14 w-auto bg-white" src="/logo.jpg" alt={site.name} />
            <p className="mt-6 text-sm leading-7 text-white/70 max-w-sm">
              A Kuils River practice offering considered advice on litigation, land, environment, family and estates.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-400">{site.tagline}</p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Visit</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex gap-3">
                <PhoneIcon className="h-5 w-5 text-gold-400 shrink-0" />
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex gap-3">
                <EnvelopeIcon className="h-5 w-5 text-gold-400 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPinIcon className="h-5 w-5 text-gold-400 shrink-0" />
                <span>
                  {site.address.street}<br />
                  {site.address.locality}, {site.address.postalCode}<br />
                  {site.address.region}
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Practice</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {practiceAreas.slice(0, 6).map((item) => (
                <li key={item.slug}>
                  <Link to="/practice-areas" className="text-white/75 hover:text-white">{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">Hours</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {site.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8">Request a consultation</Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Attorney of the High Court of South Africa</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
