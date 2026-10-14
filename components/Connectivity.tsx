import Image from 'next/image';
import { DISTANCES } from '@/lib/data';

export default function Connectivity() {
  return (
    <section id="connectivity" aria-labelledby="conn-h" className="relative bg-cream px-[clamp(20px,5vw,72px)] py-[clamp(90px,11vw,150px)] text-cocoa">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,96px)]">
        <div>
          <div className="text-[11.5px] uppercase tracking-[.38em] text-bronze">Infrastructure &amp; connectivity</div>
          <h2 id="conn-h" data-reveal className="m-0 mt-[18px] font-serif text-[clamp(40px,4.8vw,74px)] font-normal leading-[1.02]">Plugged into the <em className="italic text-gold-deep">Outer Ring Road.</em></h2>
          <table className="mt-9 w-full border-collapse border-t border-gold-line/50">
            <caption className="sr-only">Distances and drive times from Godrej Epoque, Kokapet</caption>
            <thead className="sr-only"><tr><th>Destination</th><th>Distance</th><th>Drive time</th></tr></thead>
            <tbody>
              {DISTANCES.map(([place, km, min]) => (
                <tr key={place} className="border-b border-gold-line/35">
                  <th scope="row" className="py-[17px] pr-3.5 text-left font-normal">
                    <div className="flex flex-col gap-2.5"><span className="text-[15.5px]">{place}</span>
                      <div className="h-0.5 bg-cocoa/10"><div data-bar={Math.max(4, Math.round((parseFloat(km.replace(/[^\d.]/g, '')) / 26) * 100))} className="h-full w-0 bg-gradient-to-r from-gold-deep to-gold-light transition-[width] duration-[1600ms] ease-lux" /></div>
                    </div>
                  </th>
                  <td className="w-[72px] py-[17px] text-right text-[13.5px] text-umber">{km}</td>
                  <td className="w-[86px] py-[17px] text-right font-serif text-2xl text-gold-deep">{min}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div data-clip className="relative aspect-[4/5] max-h-[820px] overflow-hidden">
          <Image data-par="0.1" data-scale="1.18" src="/assets/skyline.jpg" alt="Financial District and Kokapet skyline, West Hyderabad" fill sizes="(max-width:900px) 100vw, 50vw" className="object-cover will-change-transform" />
          <div className="absolute inset-x-5 bottom-5 border border-gold/30 bg-ink/80 px-[22px] py-5 backdrop-blur-md">
            <div className="text-[10.5px] uppercase tracking-[.3em] text-gold">Coming up</div>
            <p className="m-0 mt-2 text-[15px] leading-[1.55] text-cream">Proposed metro extension into the Kokapet corridor and a dedicated ORR trumpet interchange into the Neopolis grid.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
