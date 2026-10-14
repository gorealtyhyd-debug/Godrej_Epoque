import Image from 'next/image';
import { AMEN_CARDS } from '@/lib/data';

export default function Amenities() {
  return (
    <>
      <section id="amenities" aria-labelledby="amen-h" className="bg-cream px-[clamp(20px,5vw,72px)] pb-[clamp(30px,4vw,60px)] pt-[clamp(90px,12vw,170px)] text-cocoa">
        <div data-reveal className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-7">
          <div>
            <div className="text-[11.5px] uppercase tracking-[.38em] text-bronze">Amenities · 50+ curated experiences</div>
            <h2 id="amen-h" className="m-0 mt-[18px] max-w-[820px] font-serif text-[clamp(40px,5.2vw,82px)] font-normal leading-[1.02] [text-wrap:balance]">A sanctuary of <em className="italic text-bronze">leisure,</em> at your door.</h2>
          </div>
          <p className="m-0 max-w-[420px] text-[16.5px] font-light leading-[1.85] text-cocoa/85">A podium of forest walks, courts and water gardens, set across roughly 75% open space — and a clubhouse curated for wellness and connection.</p>
        </div>
      </section>
      <section data-hscroll aria-label="Amenities gallery" className="relative h-[420vh] bg-cream text-cocoa lg:h-[340vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center gap-[clamp(24px,4vh,40px)] overflow-hidden">
          <div className="flex items-end justify-between gap-6 px-[clamp(20px,5vw,72px)]">
            <div className="font-serif text-[clamp(26px,2.8vw,42px)] leading-tight">Live the <em className="italic text-bronze">époque.</em></div>
            <div className="relative h-px flex-[0_1_280px] overflow-hidden bg-cocoa/25"><div data-hprog className="absolute inset-0 origin-left scale-x-0 bg-bronze" /></div>
          </div>
          <ul data-htrack className="m-0 flex w-max list-none gap-[clamp(16px,2vw,28px)] p-0 px-[clamp(20px,5vw,72px)] will-change-transform">
            {AMEN_CARDS.map((a, k) => (
              <li key={a.t} className="group relative h-[min(64vh,640px)] w-[clamp(270px,30vw,500px)] shrink-0 overflow-hidden bg-cocoa">
                <Image src={a.img} alt={`${a.t} at Godrej Epoque`} fill sizes="(max-width:768px) 80vw, 30vw" className="object-cover transition-transform duration-[1600ms] ease-lux group-hover:scale-[1.07]" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(63,48,38,.92),rgba(63,48,38,0)_55%)]" />
                <div className="pointer-events-none absolute left-6 top-[22px] text-[10px] uppercase tracking-[.3em] text-gold-light">{a.where}</div>
                <div className="pointer-events-none absolute inset-x-[26px] bottom-[26px] text-cream">
                  <div className="num text-[10.5px] tracking-[.3em] text-gold">{String(k + 1).padStart(2, '0')}</div>
                  <h3 className="m-0 mt-2.5 font-serif text-[clamp(24px,2.2vw,34px)] font-normal leading-[1.1]">{a.t}</h3>
                  <p className="m-0 mt-2.5 text-sm font-light leading-relaxed text-cream/80">{a.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
