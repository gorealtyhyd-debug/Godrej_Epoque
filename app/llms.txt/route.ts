import { SITE } from '@/lib/site';
import { FAQ, RESIDENCES, DISTANCES, SPECS } from '@/lib/data';

export const dynamic = 'force-static';

// llms.txt — a plain-text, citation-friendly summary for AI answer engines (GEO).
export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

Website: ${SITE.url}
Location: ${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}, India
Map: ${SITE.mapsUrl}
Coordinates: ${SITE.geo.lat}, ${SITE.geo.lng}
Developer brand: Godrej Properties
Status: Pre-launch — EOI open
Price: from ₹2.9 Cr onwards

## Key facts
- Land area: 5.03 acres, ~75% open space
- Towers: 2, each 5 basements + ground + 57 floors
- Architecture: Art Deco — gold metallic jali, vertical fins, crown
- Sky bridge amenity deck: 20 m × 11 m
- Clubhouse: ~25,000 sq.ft.
- Plot orientation: east facing
- 2,487 sq.ft. plan: north facing, 56 units only

## Residences
${RESIDENCES.map((r) => `- ${r.name}: ${r.area} sq.ft. (${r.facing})`).join('\n')}

## Specifications
${SPECS.map((s) => `- ${s.k}: ${s.v}`).join('\n')}

## Connectivity
${DISTANCES.map(([p, km, t]) => `- ${p}: ${km}, ${t}`).join('\n')}

## FAQ
${FAQ.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Notes
Information from an authorised channel partner. Images are artist's impressions or representative. Areas approximate; specifications indicative and subject to change.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
