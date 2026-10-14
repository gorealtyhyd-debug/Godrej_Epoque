'use client';
import Image from 'next/image';
import { useState } from 'react';
import { SPECS } from '@/lib/data';

export default function Specifications() {
  const [on, setOn] = useState(0);
  return (
    <section id="specs" aria-labelledby="specs-h" className="section bg-white text-cocoa">
      <div className="mx-auto max-w-[1440px]">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-7">
          <div>
            <div className="text-[11.5px] uppercase tracking-[.38em] text-bronze">Specifications · the material library</div>
            <h2 id="specs-h" className="m-0 mt-[18px] font-serif text-[clamp(40px,5vw,78px)] font-normal leading-[1.02]">Finished to a <em className="italic text-gold-deep">quieter</em> luxury.</h2>
          </div>
          <p className="m-0 max-w-[340px] text-[15px] font-light leading-[1.8] text-umber">Hover or tap each specification to explore it.</p>
        </div>
        <div className="mt-[clamp(44px,5vw,72px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(32px,5vw,80px)]">
          {/* All specs are in the DOM (dl) so search engines and AI engines can read them */}
          <dl className="m-0 flex flex-col border-t border-gold-line/50">
            {SPECS.map((s, k) => (
              <div key={s.k} onMouseEnter={() => setOn(k)} onClick={() => setOn(k)}
                className={`grid cursor-pointer grid-cols-[44px_minmax(0,1fr)] gap-4 border-b border-gold-line/35 pb-[18px] pt-5 transition-[opacity,padding] duration-300 ${k === on ? 'pl-3 opacity-100' : 'pl-0 opacity-45'}`}>
                <span className="num pt-1.5 text-base text-gold-deep">{String(k + 1).padStart(2, '0')}</span>
                <span className="flex flex-col gap-2">
                  <dt className="font-serif text-[clamp(22px,2vw,30px)]">{s.k}</dt>
                  <dd className={`m-0 overflow-hidden text-sm font-light leading-relaxed text-umber transition-[max-height] duration-500 ${k === on ? 'max-h-[120px]' : 'max-h-0'}`}>{s.v}</dd>
                </span>
              </div>
            ))}
          </dl>
          <div className="sticky top-[110px] aspect-[4/5] overflow-hidden bg-cocoa">
            {SPECS.map((s, k) => (
              <Image key={s.k} src={s.img} alt={s.k} fill sizes="(max-width:900px) 100vw, 45vw"
                className={`object-cover transition-[opacity,transform] duration-[900ms,1800ms] ease-lux ${k === on ? 'scale-100 opacity-100' : 'scale-[1.08] opacity-0'}`} />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(63,48,38,.85),rgba(63,48,38,0)_50%)]" />
            <div className="absolute inset-x-[26px] bottom-6">
              <div className="num text-[clamp(70px,8vw,130px)] leading-[.8] text-gold/85">{String(on + 1).padStart(2, '0')}</div>
              <div className="mt-3.5 text-[11px] uppercase tracking-[.3em] text-cream">{SPECS[on].k}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
