'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Showcase } from '@/lib/data';

export default function StickyShowcase({ id, label, items }: { id: string; label: string; items: Showcase[] }) {
  const [on, setOn] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      let idx = 0; refs.current.forEach((el, k) => { if (el && el.getBoundingClientRect().top < innerHeight * 0.55) idx = k; });
      setOn((p) => (p === idx ? p : idx));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id={id} aria-label={label} className="relative bg-cream text-cocoa">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="sticky top-0 z-[1] hidden h-screen overflow-hidden lg:block">
          {items.map((c, k) => (
            <Image key={c.name} src={c.img} alt={c.name} fill sizes="50vw"
              className={`object-cover transition-[opacity,transform] duration-[1100ms,2600ms] ease-lux ${k === on ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`} />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(63,48,38,.75),rgba(63,48,38,0)_45%)]" />
          <div className="absolute inset-x-[clamp(20px,3vw,40px)] bottom-[clamp(20px,3vw,40px)] flex items-end justify-between gap-4">
            <div className="num text-[clamp(48px,5vw,72px)] leading-none text-gold">{String(on + 1).padStart(2, '0')}</div>
            <div className="flex gap-2" aria-hidden>
              {items.map((c, k) => <span key={c.name} className={`h-0.5 transition-all duration-500 ${k === on ? 'w-9 bg-gold' : 'w-3.5 bg-cream/35'}`} />)}
            </div>
          </div>
        </div>
        <div className="px-[clamp(20px,5vw,80px)]">
          {items.map((c, k) => (
            <article key={c.name} ref={(el) => { refs.current[k] = el; }}
              className={`flex flex-col justify-center border-b border-gold-line/35 py-[60px] transition-opacity duration-500 lg:min-h-[90vh] ${k === on ? 'opacity-100' : 'opacity-100 lg:opacity-30'}`}>
              <div className="relative mb-7 aspect-[4/3] w-full overflow-hidden lg:hidden"><Image src={c.img} alt={c.name} fill sizes="100vw" className="object-cover" /></div>
              <div className="text-[11px] uppercase tracking-[.34em] text-bronze">{c.kicker}</div>
              <h3 className="m-0 mt-4 font-serif text-[clamp(40px,4.6vw,72px)] font-normal leading-none">{c.name}</h3>
              <p className="m-0 mt-6 max-w-[460px] text-[15.5px] font-light leading-[1.8] text-umber">{c.copy}</p>
              <ol className="m-0 mt-[26px] grid max-w-[520px] list-none grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-x-8 border-t border-cocoa/15 p-0">
                {c.tags.map((t, i) => (
                  <li key={t} className="flex items-center gap-4 border-b border-cocoa/15 pb-[13px] pt-[15px]"><span className="num w-[22px] text-[13px] text-gold-deep">{String(i + 1).padStart(2, '0')}</span><span className="text-[15.5px]">{t}</span></li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
