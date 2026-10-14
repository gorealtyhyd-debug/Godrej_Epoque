import { SITE } from '@/lib/site';
import { FAQ, RESIDENCES } from '@/lib/data';

export default function JsonLd() {
  const url = SITE.url;
  const address = {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  };
  const geo = { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng };

  const graph = [
    {
      '@type': 'WebSite', '@id': `${url}/#website`, url, name: SITE.name, inLanguage: 'en-IN',
      publisher: { '@id': `${url}/#agent` },
    },
    {
      '@type': 'RealEstateAgent', '@id': `${url}/#agent`, name: `${SITE.name} — Authorised Channel Partner`, url,
      image: `${url}${SITE.ogImage}`, address, geo, areaServed: 'Hyderabad',
      ...(SITE.phone ? { telephone: SITE.phone } : {}), ...(SITE.email ? { email: SITE.email } : {}),
      hasMap: SITE.mapsUrl,
    },
    {
      '@type': ['ApartmentComplex', 'Place'], '@id': `${url}/#project`, name: SITE.name,
      description: SITE.description, url, address, geo, hasMap: SITE.mapsUrl,
      image: ['/assets/skybridge.jpg', '/assets/arrival.jpg', '/assets/clubhouse.jpg', '/assets/aerial.jpg'].map((p) => `${url}${p}`),
      numberOfBuildings: 2, floorLevel: '5B + G + 57',
      containedInPlace: { '@type': 'Place', name: 'Neopolis, Kokapet, Hyderabad' },
      brand: { '@type': 'Brand', name: 'Godrej Properties' },
      amenityFeature: ['Heated pool', 'Spa', 'Gym', '20 m sky bridge deck', 'Mini theatre', 'Squash court', 'Badminton courts', 'Co-working space', 'Guest rooms', 'Miyawaki forest walk', 'Jogging track', 'Pickleball court']
        .map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
      petsAllowed: true,
    },
    {
      '@type': 'Product', '@id': `${url}/#offer`, name: `${SITE.name} — 3 & 4 BHK residences`,
      brand: { '@type': 'Brand', name: 'Godrej Properties' }, image: `${url}${SITE.ogImage}`,
      description: 'Luxury 3 & 4 BHK apartments from 1,960 to 3,236 sq.ft. at Neopolis, Kokapet, Hyderabad.',
      offers: {
        '@type': 'AggregateOffer', priceCurrency: SITE.currency, lowPrice: SITE.priceFrom,
        offerCount: RESIDENCES.length, availability: 'https://schema.org/PreOrder', url: `${url}/#residences`,
      },
    },
    ...RESIDENCES.map((r, i) => ({
      '@type': 'Apartment', '@id': `${url}/#plan-${i + 1}`, name: `${SITE.name} ${r.name} — ${r.area} sq.ft.`,
      numberOfRooms: r.name.includes('4') ? 4 : 3,
      floorSize: { '@type': 'QuantitativeValue', value: Number(r.area.replace(/,/g, '')), unitCode: 'FTK' },
      containedInPlace: { '@id': `${url}/#project` }, image: `${url}${r.view}`,
    })),
    {
      '@type': 'FAQPage', '@id': `${url}/#faq`,
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hyderabad', item: url },
        { '@type': 'ListItem', position: 2, name: 'Kokapet · Neopolis', item: `${url}/#location` },
        { '@type': 'ListItem', position: 3, name: SITE.name, item: url },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  );
}
