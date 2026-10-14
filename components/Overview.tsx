import Image from 'next/image';
import { U } from '@/lib/data';
import { EnquireButton } from './Enquiry';

const ERAS = [
  { n: 'I', yrs: '1871 — 1914', t: 'Belle Époque', d: 'The age of grace and celebration that gives Epoque its name.' },
  { n: 'II', yrs: '1910 — 1930', t: 'Art Deco', d: 'Bold geometry, gilded metalwork and the vertical rhythm of ascent.' },
  { n: 'III', yrs: 'Today · Neopolis', t: 'Godrej Epoque', d: 'Jali, cornices and a gold crown — designed for the future, built for legacy.', now: true },
];
const FIGS = [
  { src: U('1618221195710-dd6b41faaea6', 1400), alt: 'Grand living room — representative interior', cap: 'Grand living', ratio: 'aspect-[4/5]', par: -0.07 },
  { src: '/assets/crown-night.jpg', alt: 'Godrej Epoque Art Deco crown lit at dusk', cap: 'The crown, at dusk', ratio: 'aspect-[3/4]', par: -0.12, framed: true },
  { src: U('1616594039964-ae9021a400a0', 1400), alt: 'Master suite — representative interior', cap: 'Master suite', ratio: 'aspect-[4/5]', par: -0.08 },
];
const Corner = ({ c }: { c: string }) => <span className={`absolute h-[34px] w-[34px] border-gold-deep ${c}`} />;

export default function Overview() {
  return (
    <section id="overview" aria-labelledby="overview-h" className="relative overflow-hidden bg-cream px-[clamp(20px,5vw,72px)] pb-[clamp(80px,10vw,140px)] pt-[clamp(90px,12vw,170px)] text-cocoa">
      <div className="relative mx-auto max-w-[1440px]">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[clamp(40px,5vw,80px)] aspect-[2/1] w-[min(1100px,96vw)] -translate-x-1/2 [background:repeating-conic-gradient(from_-90deg_at_50%_100%,rgba(184,145,63,.13)_0deg_0.6deg,transparent_0.6deg_7.5deg)] [mask-image:radial-gradient(ellipse_at_50%_100%,#000_20%,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute right-0 top-[clamp(30px,4vw,60px)] select-none font-serif text-[clamp(260px,32vw,520px)] leading-[.8] text-gold-deep/[.07]">É</div>
        <div data-reveal className="relative mx-auto flex max-w-[1060px] flex-col items-center gap-[26px] px-[clamp(20px,4vw,64px)] py-[clamp(40px,5vw,72px)] text-center">
          <Corner c="left-0 top-0 border-l border-t" /><Corner c="right-0 top-0 border-r border-t" /><Corner c="bottom-0 left-0 border-b border-l" /><Corner c="bottom-0 right-0 border-b border-r" />
          <div className="text-[11px] uppercase tracking-kicker text-bronze">Époque · /e.pɔk/ · an era</div>
          <div aria-hidden className="flex w-[min(420px,70%)] items-center gap-4"><div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-line" /><div className="star !h-[18px] !w-[18px]" /><div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-line" /></div>
          <h2 id="overview-h" className="m-0 font-serif text-[clamp(38px,5vw,80px)] font-normal uppercase leading-[1.08] tracking-[.06em] [text-wrap:balance]">A defining moment <span className="normal-case italic tracking-[.01em] text-gold-deep">in time</span></h2>
          <p className="m-0 max-w-[700px] text-[clamp(16px,1.2vw,18px)] font-light leading-[1.85] text-umber">
            Named for the French word for an era, Godrej Epoque evokes the elegance of the Belle Époque and the Art Deco that followed it — reimagined as two high-rise towers rising 5B + G + 57 floors above Neopolis, Kokapet.
          </p>
          <ul className="m-0 mt-1.5 flex list-none flex-wrap justify-center border border-gold-deep/55 bg-paper p-0">
            {[['5.03', 'Acres'], ['02', 'Towers'], ['G+57', 'Floors'], ['3 & 4', 'BHK']].map(([v, l], i, a) => (
              <li key={l} className={`flex flex-col items-center gap-1 px-[clamp(16px,2.4vw,32px)] py-4 ${i < a.length - 1 ? 'border-r border-gold-deep/35' : ''}`}>
                <span className="num text-[clamp(24px,2vw,32px)] leading-none">{v}</span><span className="text-[9.5px] uppercase tracking-[.3em] text-bronze">{l}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-3">
            <EnquireButton className="btn-dark">Book a private preview</EnquireButton>
            <EnquireButton ctx="brochure" className="btn-line">Download brochure</EnquireButton>
          </div>
        </div>

        <div className="relative mt-[clamp(64px,8vw,110px)]">
        <div aria-hidden className="absolute left-[8%] right-[8%] top-2 h-px bg-[linear-gradient(90deg,rgba(184,145,63,0),#b8913f_15%,#b8913f_85%,rgba(184,145,63,0))]" />
        <ol className="relative m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-y-12 p-0">
          {ERAS.map((e) => (
            <li key={e.n} data-reveal className="relative flex flex-col items-center px-[clamp(12px,2vw,32px)] text-center">
              <div className={`relative z-[1] h-[18px] w-[18px] rotate-45 border border-gold-deep ${e.now ? 'bg-gold-deep shadow-[0_0_0_6px_#fdf3e6,0_0_0_7px_rgba(184,145,63,.5),0_0_24px_rgba(217,180,101,.7)]' : 'bg-cream shadow-[0_0_0_6px_#fdf3e6]'}`} />
              <div aria-hidden className="mt-[22px] font-serif text-[clamp(70px,7vw,110px)] leading-none text-transparent [-webkit-text-stroke:1px_#c9a24c]">{e.n}</div>
              <div className="mt-1.5 text-[10.5px] uppercase tracking-[.34em] text-bronze">{e.yrs}</div>
              <h3 className={`m-0 mt-3.5 font-serif text-[clamp(28px,2.6vw,40px)] font-normal ${e.now ? 'text-gold-deep' : ''}`}>{e.t}</h3>
              <p className="m-0 mt-2.5 max-w-[300px] text-[15px] font-light leading-[1.7] text-umber">{e.d}</p>
            </li>
          ))}
        </ol>
        </div>

        <div className="mt-[clamp(56px,7vw,96px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-end gap-[clamp(16px,2vw,28px)]">
          {FIGS.map((f, i) => (
            <figure key={f.cap} className="m-0">
              <div data-clip className={`relative overflow-hidden ${f.ratio} ${f.framed ? 'border border-gold-line bg-white p-2.5' : ''}`}>
                <div className="relative h-full w-full overflow-hidden">
                  <Image data-par={f.par} data-scale="1.2" src={f.src} alt={f.alt} fill sizes="(max-width:900px) 100vw, 33vw" className="object-cover will-change-transform" />
                </div>
              </div>
              <figcaption className="mt-4 flex justify-between text-[10.5px] uppercase tracking-[.3em]"><span>{f.cap}</span><span className="text-gold-deep">{String(i + 1).padStart(2, '0')}</span></figcaption>
            </figure>
          ))}
        </div>
        <p className="m-0 mt-[18px] text-[11px] tracking-[.16em] text-cocoa/55">Interiors 01 &amp; 03 are representative mood images.</p>
      </div>
    </section>
  );
}
