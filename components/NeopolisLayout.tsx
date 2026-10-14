import Image from 'next/image';

const ROWS = [['Planning authority', 'HMDA'], ['Arterial roads', '36 m & 45 m wide'], ['Access', 'ORR service road · existing underpasses'], ['Neighbours', '45.92 & 42 acre SEZ land']];

export default function NeopolisLayout() {
  return (
    <section id="neopolis" aria-labelledby="neo-h" className="section bg-white text-cocoa">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-[clamp(40px,6vw,96px)]">
        <div data-reveal className="flex flex-col gap-6">
          <div className="kicker text-bronze"><span className="star" />Neopolis layout · HMDA</div>
          <h2 id="neo-h" className="m-0 font-serif text-[clamp(40px,4.8vw,76px)] font-normal leading-[1.02]">A planned district, <em className="italic text-gold-deep">by design.</em></h2>
          <p className="m-0 max-w-[480px] text-base font-light leading-[1.8] text-umber">Godrej Epoque sits within the HMDA-planned Neopolis layout at Kokapet — a grid of 36 m and 45 m wide roads, SEZ land and open spaces, with direct access from the ORR service road.</p>
          <dl className="m-0 flex max-w-[480px] flex-col border-t border-gold-line">
            {ROWS.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-gold-line/40 py-[15px] text-[14.5px]"><dt className="text-[10.5px] uppercase tracking-[.26em] text-bronze">{k}</dt><dd className="m-0 text-right">{v}</dd></div>
            ))}
          </dl>
        </div>
        <figure data-clip className="relative m-0 border border-gold-line bg-cream p-[clamp(10px,1.2vw,18px)]">
          <div className="relative aspect-[940/1160] overflow-hidden">
            <Image src="/assets/neopolis-layout.png" alt="HMDA Neopolis layout plan, Kokapet, showing the Godrej Epoque site" fill sizes="(max-width:900px) 100vw, 50vw" className="origin-[65.7%_61.9%] object-cover transition-transform duration-[1200ms] ease-lux hover:scale-[1.6]" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-3 text-[9.5px] uppercase tracking-[.26em] text-bronze"><span>Source · HMDA layout</span><span>Hover to zoom</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
