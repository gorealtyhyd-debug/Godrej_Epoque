export const SITE = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.your-domain.com').replace(/\/$/, ''),
  name: 'Godrej Epoque',
  title: 'Godrej Epoque Kokapet | Luxury 3 & 4 BHK Apartments in Neopolis, Hyderabad',
  description:
    'Godrej Epoque at Neopolis, Kokapet — ultra-luxury 3 & 4 BHK Art Deco residences (1,960–3,236 sq.ft.) on 5.03 acres, 2 towers of 5B+G+57 floors, 20 m sky bridge, ~25,000 sq.ft. clubhouse. Price from ₹2.9 Cr. EOI open.',
  keywords: [
    'Godrej Epoque', 'Godrej Epoque Kokapet', 'Godrej Neopolis', 'Godrej Properties Hyderabad',
    'luxury apartments Kokapet', '3 BHK Kokapet', '4 BHK Kokapet', 'Neopolis apartments',
    'luxury flats Financial District Hyderabad', 'new launch Kokapet', 'Godrej Epoque price', 'Godrej Epoque floor plan',
  ],
  phone: '', // add sales number, e.g. '+91 90000 00000'
  email: '', // add sales email
  address: {
    street: 'Kokapet SEZ Main Road, Neopolis',
    locality: 'Kokapet',
    city: 'Hyderabad',
    region: 'Telangana',
    regionCode: 'IN-TG',
    postalCode: '500075',
    country: 'IN',
  },
  // Approximate — confirm from the Google Maps pin before launch.
  geo: { lat: 17.3961, lng: 78.3397 },
  mapsUrl: 'https://maps.app.goo.gl/Wec2W3XBxdKFakzv9',
  priceFrom: 29000000,
  currency: 'INR',
  ogImage: '/assets/skybridge.jpg',
};
