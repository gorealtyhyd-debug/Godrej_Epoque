'use client';
import Image from 'next/image';
import { useState } from 'react';
import { STANDARD } from '@/lib/data';

const SPAN = ['md:col-span-2 md:row-span-2', '', '', '', '', 'md:col-span-4'];

export default function Standard() {
  const [on, setOn] = useState(0);
  return (
    <section id="standard" aria-labelledby="standard-h" className="section bg-cream text-cocoa">
      <div className="mx-auto max-w-[1440px]">
        <div data-reveal className="flex flex-col items-center gap-5 text-center">
          <div className="kicker text-bronze"><span className="star" />The Epoque standard</div>
          <h2 id="standard-h" className="m-0 font-serif text-[clamp(44px,5.6vw,92px)] font-normal leading-none">Built around light, <em className="italic text-gold-deep">air and stone.</em></h2>
          <p className="m-0 max-w-[560px] text-[16.5px] font-light leading-[1.85] text-umber">Six commitments that set every residence apart — from a perfectly east-facing plot in Neopolis to the stone beneath your feet.</p>
        </div>
        <ul className="m-0 mt-[clamp(44px,5vw,72px)] grid list-none auto-rows-[clamp(220px,22vw,320px)] grid-cols-1 gap-[clamp(10px,1.2vw,18px)] p-0 md:grid-cols-4">
          {STANDARD.map((r, k) => {
            const a = k === on;
            return (
              <li key={r.t} data-reveal onMouseEnter={() => setOn(k)} onClick={() => setOn(k)} className={`relative cursor-pointer overflow-hidden bg-cocoa ${SPAN[k]}`}>
                <Image src={r.img} alt={r.t} fill sizes="(max-width:768px) 100vw, 50vw" className={`object-cover transition-transform duration-[2200ms] ease-lux ${a ? 'scale-[1.06]' : ''}`} />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(30,22,16,.88)_0%,rgba(30,22,16,.25)_55%,rgba(30,22,16,.1)_100%)]" />
                <div className={`pointer-events-none absolute inset-3 border transition-colors duration-500 ${a ? 'border-gold-light/70' : 'border-transparent'}`} />
                <div className="absolute inset-x-7 top-[26px] flex items-center justify-between text-[10.5px] uppercase tracking-[.32em] text-gold-light"><span>{r.tag}</span><span className="num tracking-[.14em]">{String(k + 1).padStart(2, '0')}</span></div>
                <div className="absolute inset-x-7 bottom-[26px] text-white">
                  <div className="num text-[clamp(40px,4.4vw,72px)] leading-none text-gold-light">{r.big}</div>
                  <h3 className="m-0 mt-2.5 font-serif text-[clamp(24px,2.3vw,36px)] font-normal leading-[1.08]">{r.t}</h3>
                  <div className={`grid transition-[grid-template-rows] duration-700 ease-swing ${a ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="min-h-0 overflow-hidden"><p className="m-0 mt-3 max-w-[460px] text-[14.5px] font-light leading-[1.7] text-white/85">{r.d}</p></div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
