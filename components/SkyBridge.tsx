import Image from 'next/image';
import { SKY_BRIDGE } from '@/lib/data';

export default function SkyBridge() {
  return (
    <section aria-labelledby="sky-h" className="relative overflow-hidden bg-sand px-[clamp(20px,5vw,72px)] py-[clamp(80px,10vw,140px)] text-cocoa">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12">
        <div className="flex min-h-[clamp(300px,36vw,520px)] items-center justify-center" aria-hidden>
          <div data-bignum className="num text-[clamp(130px,26vw,420px)] leading-[.8] tracking-[-.04em] text-umber will-change-transform">20<span className="text-[.3em] tracking-normal">m</span></div>
        </div>
        <div data-reveal>
          <div className="text-[11.5px] uppercase tracking-[.38em] text-bronze">Sky bridge amenity deck · 20m × 11m</div>
          <h2 id="sky-h" className="m-0 mt-[18px] font-serif text-[clamp(40px,4.8vw,74px)] font-normal leading-none">An exclusive sky retreat, <em className="italic text-bronze">above the everyday.</em></h2>
          <ul className="m-0 mt-[30px] flex list-none flex-col border-t border-cocoa/20 p-0">
            {SKY_BRIDGE.map((t) => <li key={t} className="flex gap-4 border-b border-cocoa/20 py-[15px] text-base font-light"><span className="text-bronze" aria-hidden>✦</span>{t}</li>)}
          </ul>
        </div>
      </div>
      <div data-clip className="relative mx-auto mt-[clamp(50px,6vw,90px)] aspect-[21/9] min-h-[300px] max-w-[1440px] overflow-hidden">
        <Image data-par="-0.1" data-scale="1.18" src="/assets/skybridge.jpg" alt="20-metre sky bridge connecting the two Godrej Epoque towers" fill sizes="100vw" className="object-cover will-change-transform" />
      </div>
    </section>
  );
}
