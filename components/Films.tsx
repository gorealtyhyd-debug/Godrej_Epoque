'use client';
import { useEffect, useRef, useState } from 'react';
import { FILMS } from '@/lib/data';

const DUR = 6500;

export default function Films() {
  const [i, setI] = useState(0);
  const sec = useRef<HTMLElement>(null);
  const bars = useRef<(HTMLDivElement | null)[]>([]);
  const vid = useRef<HTMLVideoElement>(null);
  const start = useRef(0);
  const idx = useRef(0);
  idx.current = i;

  useEffect(() => {
    let raf = 0; start.current = performance.now();
    const loop = (now: number) => {
      const r = sec.current?.getBoundingClientRect();
      const vis = !!r && r.bottom > 0 && r.top < innerHeight;
      let p = (now - start.current) / DUR;
      if (!vis) start.current = now - Math.min(p, 0.99) * DUR;
      else if (p >= 1) { start.current = now; p = 0; setI((x) => (x + 1) % FILMS.length); }
      bars.current.forEach((b, k) => { if (b) b.style.transform = `scaleX(${k < idx.current ? 1 : k === idx.current ? Math.min(1, p) : 0})`; });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  useEffect(() => { const v = vid.current; if (v) { v.muted = true; v.play().catch(() => {}); } }, [i]);

  const f = FILMS[i];
  return (
    <section id="films" ref={sec} aria-labelledby="films-h" className="relative flex min-h-screen flex-col overflow-hidden bg-[#0d0a08] text-white">
      {FILMS.map((x, k) => (
        <div key={x.src} aria-hidden className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]" style={{ backgroundImage: `url(${x.src})`, opacity: k === i ? 1 : 0 }} />
      ))}
      <video key={f.vid} ref={vid} src={f.vid} muted autoPlay playsInline loop preload="auto" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,rgba(13,10,8,.15)_0%,rgba(13,10,8,.55)_75%),linear-gradient(0deg,rgba(13,10,8,.92)_0%,rgba(13,10,8,0)_42%),linear-gradient(180deg,rgba(13,10,8,.6)_0%,rgba(13,10,8,0)_25%)]" />
      <div className="pointer-events-none absolute inset-[clamp(14px,2vw,28px)] border border-gold-light/40" />
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-between gap-10 px-[clamp(36px,5vw,90px)] pb-[clamp(40px,6vh,64px)] pt-[clamp(110px,14vh,150px)]">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 id="films-h" className="kicker m-0 font-normal text-gold-light"><span className="star" />Godrej Epoque · the film</h2>
          <div className="flex items-center gap-2.5 text-[10.5px] uppercase tracking-[.3em] text-white/75"><span className="h-[7px] w-[7px] rounded-full bg-[#e0584a] shadow-[0_0_0_4px_rgba(224,88,74,.25)]" />Now playing · Ultra HD</div>
        </div>
        <div className="flex flex-col items-center gap-[18px] text-center" aria-live="polite">
          <div className="text-[11px] uppercase tracking-kicker text-gold-light">Chapter <span className="num tracking-[.16em]">{String(i + 1).padStart(2, '0')} / 06</span> · {f.tag}</div>
          <div className="font-serif text-[clamp(56px,9vw,160px)] italic leading-[.92] [text-shadow:0_10px_50px_rgba(0,0,0,.35)]">{f.title}</div>
          <p className="m-0 max-w-[560px] text-[clamp(15px,1.2vw,18px)] font-light leading-[1.7] text-white/90">{f.sub}</p>
        </div>
        <div className="grid grid-cols-2 gap-[clamp(10px,1.2vw,18px)] sm:grid-cols-3 lg:grid-cols-6">
          {FILMS.map((x, k) => (
            <button key={x.src} onClick={() => { start.current = performance.now(); setI(k); }} aria-label={`Play chapter ${k + 1}: ${x.title}`}
              className={`group flex flex-col gap-3 text-left transition-opacity hover:opacity-100 ${k === i ? 'opacity-100' : 'opacity-50'}`}>
              <div className={`relative aspect-video overflow-hidden border transition-colors ${k === i ? 'border-gold-light' : 'border-white/20'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={x.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.08]" />
              </div>
              <div className="h-px overflow-hidden bg-white/20"><div ref={(el) => { bars.current[k] = el; }} className="h-full origin-left scale-x-0 bg-gold-light" /></div>
              <div className="flex items-baseline gap-2.5"><span className="num text-xs text-gold-light">{String(k + 1).padStart(2, '0')}</span><span className="text-[11.5px] uppercase tracking-[.16em]">{x.title}</span></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
