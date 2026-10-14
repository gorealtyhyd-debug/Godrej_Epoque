import Image from 'next/image';

export default function Arrival() {
  return (
    <section data-expand aria-labelledby="arrival-h" className="relative h-[260vh] bg-cream">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div data-expand-pre className="pointer-events-none absolute inset-x-0 top-[clamp(100px,14vh,150px)] z-[2] px-6 text-center">
          <div className="text-[11.5px] uppercase tracking-[.38em] text-bronze">The arrival</div>
          <div className="mt-3.5 font-serif text-[clamp(22px,2.2vw,32px)] text-cocoa">Under a coffered canopy of gold</div>
        </div>
        <div data-expand-box className="absolute inset-0 overflow-hidden will-change-[clip-path] [clip-path:inset(34%_24%_6%_24%_round_24px)]">
          <div className="absolute inset-0 will-change-transform">
            <Image src="/assets/arrival.jpg" alt="Grand Arrival Court at Godrej Epoque with fluted gold columns" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,48,38,.2)_0%,rgba(63,48,38,0)_40%,rgba(63,48,38,.88)_100%)]" />
        </div>
        <div data-expand-txt className="absolute inset-x-0 bottom-0 z-[2] flex flex-wrap items-end justify-between gap-7 px-[clamp(20px,5vw,72px)] pb-[clamp(48px,8vh,90px)] opacity-0">
          <h2 id="arrival-h" className="m-0 max-w-[820px] font-serif text-[clamp(40px,5.6vw,92px)] font-normal leading-none text-cream">The Grand <em className="italic text-gold">Arrival Court.</em></h2>
          <p className="m-0 max-w-[380px] text-base font-light leading-[1.8] text-cream/90">A signature drop-off framed by fluted gold columns and floor-to-ceiling glass — every homecoming at Epoque feels like a private hotel.</p>
        </div>
      </div>
    </section>
  );
}
