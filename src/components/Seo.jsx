import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { site } from '../data/site';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({
  title,
  description = site.description,
  path,
  image,
  type = 'website',
  jsonLd,
}) {
  const location = useLocation();
  const pagePath = path || location.pathname;
  const canonical = `${site.url}${pagePath === '/' ? '/' : pagePath}`;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const ogImage = image || `${site.url}/logo_Dark.jpg`;

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', 'Lubabalo Ntsholo Attorneys, Kuils River attorney, Cape Town lawyer, civil litigation, criminal law, land reform, environmental law, evictions, family law, customary law, Road Accident Fund, wills and estates');
    upsertMeta('name', 'author', site.name);
    upsertMeta('name', 'robots', 'index,follow');
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:locale', 'en_ZA');
    upsertMeta('property', 'og:site_name', site.name);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertLink('canonical', canonical);

    const existing = document.getElementById('ld-json');
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'ld-json';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, canonical, ogImage, type, jsonLd]);

  return null;
}

export function firmJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'Attorney', 'LocalBusiness'],
        '@id': `${site.url}/#firm`,
        name: site.name,
        url: site.url,
        image: `${site.url}/logo_Dark.jpg`,
        email: site.email,
        telephone: site.phone,
        foundingDate: String(site.founded),
        priceRange: '$$',
        description: site.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -33.9321,
          longitude: 18.687,
        },
        areaServed: ['Cape Town', 'Western Cape', 'South Africa'],
        knowsAbout: [
          'Civil litigation',
          'Criminal law',
          'Environmental law',
          'Land reform',
          'Evictions',
          'Family law',
          'Customary law',
          'Personal injury',
          'Wills and estates',
        ],
        founder: {
          '@type': 'Person',
          name: site.director.name,
          jobTitle: site.director.role,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { '@id': `${site.url}/#firm` },
      },
    ],
  };
}
