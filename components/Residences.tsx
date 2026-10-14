'use client';
import Image from 'next/image';
import { useState } from 'react';
import { RESIDENCES, RES_HIGHLIGHTS } from '@/lib/data';
import { EnquireButton } from './Enquiry';

export default function Residences() {
  const [t, setT] = useState(0);
  const [pv, setPv] = useState<'3d' | '2d'>('3d');
  const r = RESIDENCES[t];
  const pick = (k: number) => { if (k !== t) { setT(k); setPv('3d'); } };
  const step = (d: number) => pick((t + d + RESIDENCES.length) % RESIDENCES.length);
  const view = pv === '2d' && r.plan2d ? r.plan2d : r.view;

  return (
    <section id="residences" aria-labelledby="res-h" className="section bg-cream text-cocoa">
      <div className="mx-auto max-w-[1500px]">
        <div data-reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-[clamp(24px,5vw,80px)]">
          <div>
            <div className="kicker text-bronze"><span className="star" />The residences · 3 &amp; 4 BHK</div>
            <h2 id="res-h" className="m-0 mt-[18px] font-serif text-[clamp(46px,5.8vw,96px)] font-normal leading-[.98]">Eight plans. <em className="italic text-gold-deep">One standard.</em></h2>
          </div>
          <dl className="m-0 grid grid-cols-3 border-y border-gold-line">
            {[['10', 'Tower 1 · per floor'], ['08', 'Tower 2 · per floor'], ['56', 'North-facing 2,487']].map(([v, l], i) => (
              <div key={l} className={`flex flex-col-reverse justify-end gap-1.5 py-4 ${i === 0 ? 'pr-3' : i === 2 ? 'pl-3' : 'px-3'} ${i < 2 ? 'border-r border-gold-line/45' : ''}`}>
                <dt className="text-[10px] uppercase tracking-[.24em] text-bronze">{l}</dt><dd className="num m-0 text-[clamp(30px,2.6vw,40px)] leading-none text-gold-deep">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-[clamp(44px,5vw,72px)] grid grid-cols-1 items-start gap-[clamp(24px,3.4vw,56px)] lg:grid-cols-[minmax(260px,.55fr)_minmax(0,1.45fr)]">
          <div role="tablist" aria-label="Floor plans" className="flex flex-col border-t border-gold-line">
            {RESIDENCES.map((x, k) => (
              <button key={k} role="tab" aria-selected={k === t} onClick={() => pick(k)} onMouseEnter={() => pick(k)}
                className={`relative grid grid-cols-[minmax(0,1fr)_64px] items-center gap-3.5 border-b border-gold-line/40 pb-3 pt-3.5 text-left transition-[opacity,padding] duration-300 ${k === t ? 'pl-[18px] opacity-100' : 'pl-0 opacity-55'}`}>
                <span className={`absolute inset-y-0 left-0 w-0.5 origin-top bg-gold-deep transition-transform duration-500 ${k === t ? 'scale-y-100' : 'scale-y-0'}`} />
                <span className="flex flex-col gap-[5px]">
                  <span className="num text-[clamp(26px,2.2vw,34px)] leading-none">{x.area}<span className="ml-[7px] text-[9.5px] tracking-[.16em]">SQ.FT.</span></span>
                  <span className="text-[10px] uppercase tracking-[.22em] text-bronze">{x.name}</span>
                </span>
                <span className="relative aspect-[3/2] overflow-hidden border border-gold-line/50 bg-white"><Image src={x.view} alt="" fill sizes="64px" className="object-cover" /></span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-[clamp(16px,1.8vw,24px)]" role="tabpanel">
            <div className="relative bg-white p-[clamp(14px,1.8vw,26px)] shadow-[0_50px_90px_-50px_rgba(78,60,48,.5)]">
              <div className="pointer-events-none absolute inset-[clamp(7px,.9vw,12px)] border border-gold-line" />
              <div className="relative flex aspect-[3/2] items-center justify-center overflow-hidden [background:radial-gradient(ellipse_at_center,#fffaf2_0%,#f3e9d8_100%)]">
                <div className="relative h-[96%] w-[96%] cursor-zoom-in transition-transform duration-1000 ease-lux hover:scale-[1.45]">
                  <Image key={view} src={view} alt={`Godrej Epoque ${r.name} ${r.area} sq.ft. floor plan`} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-contain" />
                </div>
                <div className="absolute left-4 top-3.5 flex items-baseline gap-2.5 border border-gold-line/50 bg-paper/90 px-3.5 pb-1.5 pt-2">
                  <span className="num text-xs text-gold-deep">{String(t + 1).padStart(2, '0')} / {String(RESIDENCES.length).padStart(2, '0')}</span>
                  <span className="text-[9.5px] uppercase tracking-[.26em] text-bronze">Hover to explore</span>
                </div>
                {r.plan2d && (
                  <div className="absolute right-3.5 top-3 flex rounded-full border border-gold-line bg-white p-[3px]">
                    {(['3d', '2d'] as const).map((m) => (
                      <button key={m} onClick={() => setPv(m)} className={`rounded-full px-4 pb-1.5 pt-2 text-[10px] uppercase tracking-wide2 ${pv === m ? 'bg-cocoa text-cream' : 'text-cocoa'}`}>{m.toUpperCase()}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] bg-cocoa text-cream">
              <div className="flex flex-col gap-1.5 border-r border-gold/25 px-[22px] py-[18px]"><dt className="text-[9.5px] uppercase tracking-[.28em] text-gold">{r.name}</dt><dd className="num m-0 text-[clamp(30px,2.6vw,40px)] leading-none text-gold-light">{r.area}<span className="ml-1.5 text-[10px] tracking-[.16em] text-cream">SQ.FT.</span></dd></div>
              <div className="flex flex-col gap-1.5 border-r border-gold/25 px-[22px] py-[18px]"><dt className="text-[9.5px] uppercase tracking-[.28em] text-gold">Orientation</dt><dd className="m-0 text-[15px]">{r.facing}</dd></div>
              <div className="flex flex-col gap-1.5 border-r border-gold/25 px-[22px] py-[18px]"><dt className="text-[9.5px] uppercase tracking-[.28em] text-gold">Availability</dt><dd className="m-0 text-[15px]">{r.units}</dd></div>
              <div className="flex flex-col gap-1.5 px-[22px] py-[18px]"><dt className="text-[9.5px] uppercase tracking-[.28em] text-gold">Starting</dt><dd className="num m-0 text-[17px]">₹2.9 Cr onwards</dd></div>
            </dl>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {RES_HIGHLIGHTS.map((h) => <li key={h} className="border border-gold-deep/50 bg-paper px-3.5 pb-[7px] pt-[9px] text-[12.5px] tracking-[.04em]">{h}</li>)}
            </ul>
            <div className="flex flex-wrap items-center gap-3">
              <EnquireButton ctx="price" className="btn-dark">Get price &amp; availability</EnquireButton>
              <EnquireButton ctx="brochure" className="btn-line">Download brochure</EnquireButton>
              <div className="ml-auto flex gap-2">
                <button onClick={() => step(-1)} aria-label="Previous plan" className="h-[50px] w-[50px] rounded-full border border-cocoa text-[17px] hover:bg-cocoa hover:text-cream">←</button>
                <button onClick={() => step(1)} aria-label="Next plan" className="h-[50px] w-[50px] rounded-full border border-cocoa text-[17px] hover:bg-cocoa hover:text-cream">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
