export const U = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const MK = (id: number) => ({ vid: `https://assets.mixkit.co/videos/${id}/${id}-1080.mp4`, src: `https://assets.mixkit.co/videos/${id}/${id}-thumb-720-0.jpg` });

export const NAV = [
  ['Overview', '#overview'], ['Films', '#films'], ['Amenities', '#amenities'], ['Podium', '#podium'],
  ['Clubhouse', '#club'], ['Residences', '#residences'], ['Location', '#location'],
] as const;

export const HERO_STATS = [
  { v: 5.03, dec: 2, pre: '', suf: '', label: 'Acres' },
  { v: 2, dec: 0, pre: '', suf: '', label: 'Towers' },
  { v: 57, dec: 0, pre: 'G+', suf: '', label: 'Floors' },
  { v: 75, dec: 0, pre: '~', suf: '%', label: 'Open space' },
];

export const STANDARD = [
  { big: 'E', tag: 'Site', t: 'Perfect east-facing plot', d: 'An east-facing parcel in the heart of Neopolis, turned to the morning sun and the Gandipet breeze.', img: '/assets/aerial.jpg' },
  { big: '100%', tag: 'Air', t: 'Every home ventilated', d: 'Cross-ventilated layouts that open wide through aluminium French windows — light and air in every room.', img: U('1600607687939-ce8a6c25118c', 1400) },
  { big: '01', tag: 'Stone', t: 'Natural marble flooring', d: 'Natural marble underfoot across living, dining and bedrooms — each slab with its own veining.', img: U('1600210492486-724fe5c67fb0', 1400) },
  { big: '02', tag: 'Bath', t: 'Grohe CP & sanitary fittings', d: 'High-end Grohe CP and sanitary fittings, specified for a lifetime of quiet performance.', img: U('1600566752355-35792bedcfea', 1400) },
  { big: '03', tag: 'View', t: 'Full-glass balcony railings', d: 'Frameless glass railings keep every view of the skyline uninterrupted.', img: '/assets/skybridge-day.jpg' },
  { big: '56', tag: 'North', t: 'North-facing 2,487 sq.ft. homes', d: 'All 2,487 sq.ft. homes are north facing — only 56 units.', img: U('1600585154340-be6161a56a0c', 2000) },
];

export const WHY = [
  { tag: 'Master plan', t: 'Government-planned district', d: '530-acre HMDA master plan with ₹300 cr of state trunk infrastructure delivered in 18 months.', img: '/assets/aerial.jpg' },
  { tag: 'Infrastructure', t: 'World-class infrastructure', d: '36–45 m arterial roads, 100% underground utilities and a dedicated 400 kV substation.', img: U('1486406146926-c627a92ad1ab', 1000) },
  { tag: 'Appreciation', t: 'Proven appreciation', d: 'Land rose from ₹14 cr to ₹151 cr per acre (2007–2025), inside an SDZ under Master Plan 2031.', img: '/assets/skyline.jpg' },
  { tag: 'Connectivity', t: 'Unmatched connectivity', d: 'Airport 30–45 min, HITEC City 10–15 min, Financial District under 10 min; metro extension planned.', img: U('1545324418-cc1a3fa10c00', 1000) },
  { tag: 'Demand', t: 'Jobs & demand engine', d: 'Kokapet SEZ ~5 lakh jobs and a $2 bn IT park; 2.5–3.5 lakh professionals already within 5 km.', img: U('1497366216548-37526070297c', 1000) },
  { tag: 'Clean title', t: 'Clean-title investment', d: 'Supreme Court–validated government land — luxury living paired with strong appreciation.', img: '/assets/arrival.jpg' },
];

export const FILMS = [
  { ...MK(43607), tag: 'Aerial', title: 'The Approach', sub: 'Golden hour over the hills — the arrival into West Hyderabad.' },
  { ...MK(4046), tag: 'Residence', title: 'Light & Water', sub: 'Interiors that open onto water and sky.' },
  { ...MK(4196), tag: 'Interiors', title: 'Quiet Luxury', sub: 'Minimal, generous rooms finished in natural marble.' },
  { ...MK(4184), tag: 'Wellness', title: 'The Spa', sub: 'Marble-clad treatment rooms for slow afternoons.' },
  { ...MK(4029), tag: 'Living', title: 'The Terrace', sub: 'Full-glass balconies — your private view, framed.' },
  { ...MK(4030), tag: 'Suite', title: 'The Master Suite', sub: 'Hotel-grade comfort, every single night.' },
];

export const SKY_BRIDGE = [
  'Rooftop BBQ, where every gathering rises above the ordinary',
  '400m walking & jogging track',
  'A 300-book library in 1,000 sq.ft. of stories',
  'Yoga lounge and a fully operated terrace café',
];

export const AMEN_CARDS = [
  { img: '/assets/clubhouse.jpg', where: 'Club House', t: 'The clubhouse', d: '~25,000 sq.ft. at the heart of the community.' },
  { img: U('1576013551627-0cc20b96c2a7', 1000), where: 'Club House', t: 'Heated pool', d: 'A temperature-controlled pool and sun deck.' },
  { img: U('1544161515-4ab6ce6db874', 1000), where: 'Club House', t: 'Spa', d: 'Treatment rooms for slow afternoons.' },
  { img: U('1534438327276-14e5300c3a48', 1000), where: 'Club House', t: 'Gym', d: 'Strength and cardio, with a view.' },
  { img: U('1590381105924-c72589b9ef3f', 1000), where: 'Sky deck', t: '300-book library', d: '1,000 sq.ft. of stories to lose yourself in.' },
  { img: U('1584132967334-10e028bd69f7', 1000), where: 'Sky deck', t: 'Rooftop deck', d: 'BBQ evenings above the ordinary.' },
  { img: U('1519167758481-83f550bb49b3', 1000), where: 'Club House', t: 'Multi-purpose hall', d: 'Celebrations with a pantry on hand.' },
  { img: U('1596997000103-e597b3ca50df', 1000), where: 'Podium', t: "Kids' play area", d: 'Sand pit, play zones and a pet park.' },
  { img: U('1554068865-24cecd4e34b8', 1000), where: 'Podium', t: 'Pickleball court', d: 'The game everyone is playing.' },
  { img: U('1546519638-68e109498ffc', 1000), where: 'Podium', t: 'Multipurpose court', d: 'Basketball, cricket nets and bleachers.' },
];

export type Showcase = { kicker: string; name: string; copy: string; img: string; tags: string[] };

const PODIUM_RAW: [string, string[], string, string][] = [
  ['Sports & Recreation', ['Jogging track', 'Skating rink', 'Pickleball court', 'Cricket practice pitch', 'Multipurpose court', 'Adult fitness gym', 'Elderly fitness court', 'Reflexology walk', 'Bleachers'], '1599586120429-48281b6f0ece', 'Courts, tracks and fitness zones across the landscaped podium — for every age and every pace.'],
  ['Wellness & Nature', ['Butterfly garden', 'Bamboo walk on mound', 'Miyawaki forest walk', 'Fruit orchard'], '1441974231531-c6227db76b6e', 'Forest walks, orchards and a butterfly garden — nature, woven through daily life.'],
  ['Children & Family', ["Kids' play area", 'Sand pit', 'Pet park', 'Board games'], '1596997000103-e597b3ca50df', 'Safe, joyful spaces to play, explore and grow — with a park for the pets, too.'],
  ['Social & Gathering', ['Celebration lawn', 'Networking court', 'Dialogue court', 'Outdoor workstation', 'Raised star-gazing deck', 'Floating pavilion in lily pond', 'Sunken sit-out', 'Gazebo sit-out'], '1519225421980-715cb0215aed', 'Lawns, decks and pavilions made for celebrations, conversations and starlit evenings.'],
  ['Landscape & Water', ['Central green island', 'Linear water feature', 'Signage wall with water feature', 'Feature mound', 'Edge plantation'], '1585320806297-9794b3e4eeae', 'A central green island and linear water features that cool and calm the podium.'],
];
export const PODIUM: Showcase[] = PODIUM_RAW.map(([name, tags, u, copy]) => ({
  kicker: `The podium · ${String(tags.length).padStart(2, '0')} experiences`, name, copy, img: U(u, 1800), tags,
}));

export const CLUB: Showcase[] = [
  { kicker: 'The clubhouse · ~25,000 sq.ft.', name: 'A club at the heart', copy: 'Glass, gold and a green roof — a curated destination for wellness, recreation and meaningful connection.', img: '/assets/clubhouse.jpg', tags: ['Reception lounge', 'Café', 'Association office'] },
  { kicker: 'Wellness', name: 'Heated pool & spa', copy: 'A temperature-controlled pool and deck, spa, pilates and a dance studio — your morning ritual, a lift ride away.', img: U('1571896349842-33c89424de2d', 1800), tags: ['Heated pool', 'Pool deck', 'Spa', 'Pilates', 'Gym'] },
  { kicker: 'Sport & play', name: 'Courts & games', copy: 'Two badminton courts, a squash court and indoor games, with a kids club and crèche next door.', img: U('1626224583764-f87db24ac4ea', 1800), tags: ['2 badminton courts', 'Squash', 'Indoor games', 'Kids club'] },
  { kicker: 'Culture & work', name: 'Theatre & studio', copy: 'A mini theatre for premieres at home, a music room, and a co-working lounge for the days you stay in.', img: U('1489599849927-2ee91cede3ba', 1800), tags: ['Mini theatre', 'Music room', 'Co-working', 'Multi-purpose hall'] },
  { kicker: 'Hospitality', name: 'Four guest suites', copy: 'Hotel-style guest rooms so visiting family stay close — without giving up your study.', img: U('1618773928121-c32242e63f39', 1800), tags: ['4 guest rooms', 'Pantry', 'Concierge'] },
];

export type Residence = { name: string; area: string; view: string; plan2d?: string; facing: string; units: string };
export const RESIDENCES: Residence[] = [
  { name: '3 BHK', area: '1,960', view: '/assets/render/plan-1960.jpg', plan2d: '/assets/plan-1950.jpg', facing: 'East-facing site', units: 'Limited' },
  { name: '3 BHK', area: '2,268', view: '/assets/render/plan-2268.jpg', plan2d: '/assets/plan-2250.jpg', facing: 'East-facing site', units: 'Limited' },
  { name: '3 BHK + 3T', area: '2,268', view: '/assets/render/plan-2268-3t.jpg', plan2d: '/assets/plan-2250-3t.jpg', facing: 'East-facing site', units: 'Limited' },
  { name: '3 BHK', area: '2,302', view: '/assets/render/plan-2302.jpg', facing: 'East-facing site', units: 'Limited' },
  { name: 'Signature · North', area: '2,487', view: '/assets/render/plan-2487.jpg', facing: 'North facing', units: 'Only 56 units' },
  { name: '3 BHK + 3T + ST', area: '2,704', view: '/assets/render/plan-2704.jpg', facing: 'East-facing site', units: 'Limited' },
  { name: '4 BHK + 4T + ST', area: '3,147', view: '/assets/render/plan-3147.jpg', plan2d: '/assets/plan-3150.jpg', facing: 'East-facing site', units: 'Limited' },
  { name: '4 BHK', area: '3,236', view: '/assets/render/plan-3236.jpg', facing: 'East-facing site', units: 'Limited' },
];

export const RES_HIGHLIGHTS = ['Fully cross-ventilated', 'Aluminium French windows', 'Natural marble flooring', 'Grohe CP & sanitary fittings', 'Full-glass balcony railing', 'Vastu-compliant layout', 'Spacious master bedroom', 'Open, modern kitchen'];

export const SPECS = [
  { k: 'Structure', v: 'RCC shear-wall construction with aluminium formwork (Alu-form).', img: U('1486406146926-c627a92ad1ab', 1400) },
  { k: 'Flooring', v: 'Natural marble in living, dining and bedrooms; anti-skid vitrified tile in balconies, toilets and utility.', img: U('1600210492486-724fe5c67fb0', 1400) },
  { k: 'Main door', v: '2400 mm (8 ft) teak / hardwood veneer flush door with smart door lock.', img: U('1600573472550-8090b5e0745e', 1400) },
  { k: 'Windows', v: 'Aluminium French windows with performance glass and mosquito mesh — every home fully cross-ventilated.', img: U('1600607687939-ce8a6c25118c', 1400) },
  { k: 'Balcony railing', v: 'Full-glass balcony railings for frameless, uninterrupted views.', img: '/assets/skybridge-day.jpg' },
  { k: 'Air conditioning', v: 'Chilled-water HVAC system with hi-wall units in every residence.', img: U('1618221195710-dd6b41faaea6', 1400) },
  { k: 'Bath fittings', v: 'Grohe high-end CP and sanitary fittings; European WC; under-counter basins.', img: U('1600566752355-35792bedcfea', 1400) },
  { k: 'Lifts', v: 'SS-finish lifts with automatic rescue device (ARD) and emergency call.', img: '/assets/crown-night.jpg' },
  { k: 'Utilities', v: '100% DG backup, EV-charging provision, smart water meters, WTP & STP, piped LPG.', img: '/assets/aerial.jpg' },
  { k: 'Safety', v: 'CCTV surveillance, sprinkler and fire-alarm systems throughout.', img: '/assets/arrival.jpg' },
];

export const DISTANCES: [string, string, string][] = [
  ['ORR Exit / Trumpet Jn', '~1 km', '3 min'], ['CBIT College', '~1.7 km', '5 min'], ['Financial District', '~2 km', '<10 min'],
  ['Medicover Hospital', '~3.7 km', '10 min'], ['Gachibowli IT hubs', '~8 km', '15 min'], ['Raidurg Metro · Blue Line', '~11 km', '20 min'],
  ['HITEC City', '~12 km', '20 min'], ['RGIA Airport · via ORR', '~26 km', '35 min'],
];

export const FAQ: { q: string; a: string }[] = [
  { q: 'Where is Godrej Epoque located?', a: 'Godrej Epoque is on Kokapet SEZ Main Road in the HMDA-planned Neopolis layout, Kokapet, Hyderabad 500075 — about 1 km from the ORR exit and around 2 km from the Financial District.' },
  { q: 'What configurations and sizes are available at Godrej Epoque?', a: 'Godrej Epoque offers 3 BHK and 4 BHK residences in eight plans from 1,960 sq.ft. to 3,236 sq.ft. (approx.), including a north-facing 2,487 sq.ft. signature plan limited to 56 units.' },
  { q: 'What is the starting price of Godrej Epoque?', a: 'Residences at Godrej Epoque start from approximately ₹2.9 Cr onwards. Final pricing depends on plan, floor and orientation — enquire for the current price sheet.' },
  { q: 'How big is the Godrej Epoque project?', a: 'The project spans 5.03 acres with two Art Deco towers of 5 basements + ground + 57 floors, roughly 75% open space, a 20 m sky bridge amenity deck and a ~25,000 sq.ft. clubhouse.' },
  { q: 'What are the key specifications at Godrej Epoque?', a: 'Natural marble flooring, Grohe high-end CP and sanitary fittings, aluminium French windows with every home cross-ventilated, full-glass balcony railings, chilled-water HVAC, RCC shear-wall construction and 100% DG backup.' },
  { q: 'Is the Godrej Epoque plot east facing?', a: 'Yes. Godrej Epoque sits on a perfectly east-facing plot within Neopolis, Kokapet.' },
  { q: 'Is EOI open for Godrej Epoque?', a: 'Yes, the Expression of Interest (EOI) window is open for priority allotment during the pre-launch phase.' },
  { q: 'Why invest in Neopolis, Kokapet?', a: 'Neopolis is a 530-acre HMDA master-planned district with 36–45 m roads, underground utilities and a dedicated 400 kV substation. Land values rose from about ₹14 cr to ₹151 cr per acre between 2007 and 2025.' },
];
