'use client';
import { useEffect, useRef } from 'react';
import { HERO_STATS } from '@/lib/data';
import { EnquireButton } from './Enquiry';

const CLIPS = [
  { src: 'https://assets.mixkit.co/videos/43607/43607-1080.mp4', a: 0, b: 0 },
  { src: '/assets/drone.mp4', a: 10, b: 20 },
];

export default function Hero() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.muted = true; let i = -1;
    const next = () => {
      i = (i + 1) % CLIPS.length; const c = CLIPS[i];
      el.src = c.src; el.load();
      el.addEventListener('loadedmetadata', () => { if (c.a) el.currentTime = c.a; el.play().catch(() => {}); }, { once: true });
    };
    const tu = () => { const c = CLIPS[i]; if (c?.b && el.currentTime >= c.b) next(); };
    el.addEventListener('ended', next); el.addEventListener('timeupdate', tu);
    next();
    return () => { el.removeEventListener('ended', next); el.removeEventListener('timeupdate', tu); };
  }, []);

  return (
    <section id="top" aria-label="Godrej Epoque introduction" className="relative flex min-h-svh items-center overflow-hidden bg-ink">
      <div data-herofilm className="absolute inset-0 will-change-transform">
        <video ref={ref} muted playsInline preload="auto" aria-hidden="true" poster="https://assets.mixkit.co/videos/43607/43607-thumb-720-0.jpg" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(63,48,38,.9)_0%,rgba(63,48,38,.62)_40%,rgba(63,48,38,.1)_75%),linear-gradient(180deg,rgba(63,48,38,.55)_0%,rgba(63,48,38,0)_22%,rgba(63,48,38,0)_70%,rgba(63,48,38,.7)_100%)]" />
      <div data-herocopy className="relative mx-auto w-full max-w-[1600px] px-[clamp(20px,4.5vw,72px)] pb-[clamp(60px,8vh,96px)] pt-[clamp(120px,15vh,170px)]">
        <div className="flex max-w-[680px] flex-col">
          <p className="m-0 text-[clamp(13px,1.1vw,16px)] uppercase tracking-[.2em] text-cream/90">Godrej is coming to Kokapet with</p>
          <h1 className="m-0 mt-3.5 font-serif text-[clamp(50px,6.6vw,108px)] font-normal leading-none tracking-[-.01em] text-cream">
            Godrej <em className="italic text-gold">Epoque.</em>
            <span className="sr-only"> — Luxury 3 &amp; 4 BHK apartments in Neopolis, Kokapet, Hyderabad</span>
          </h1>
          <p className="m-0 mt-3 font-serif text-[clamp(22px,2vw,30px)] italic text-cream">The dawn of a new époque.</p>
          <p className="m-0 mt-7 max-w-[600px] text-[clamp(15px,1.25vw,18px)] font-light leading-[1.75] text-cream/90 [text-wrap:pretty]">
            Two Art Deco towers crowned in gold jali, joined by a 20-metre sky bridge — ultra-luxury 3 &amp; 4 BHK residences on 5 acres in West Hyderabad&apos;s most coveted address.
          </p>
          <div className="mt-9 grid max-w-[660px] grid-cols-1 min-[560px]:grid-cols-[1.45fr_1fr]">
            <div className="flex flex-col justify-center bg-paper px-6 pb-4 pt-[18px] text-cocoa">
              <div className="text-[10px] uppercase tracking-[.3em] text-umber">Residences starting at</div>
              <div className="mt-1.5 flex flex-wrap items-baseline gap-3"><span className="num text-[clamp(34px,3.4vw,48px)] leading-none">₹2.9 Cr</span><span className="text-[11px] uppercase tracking-wide2 text-umber">Onwards</span></div>
            </div>
            <EnquireButton className="flex flex-col justify-center gap-2 bg-cocoa px-6 pb-4 pt-[18px] text-left text-cream hover:bg-[#5c4738]">
              <span className="text-[10px] uppercase tracking-[.3em] text-gold">Pre-launch · EOI open</span>
              <span className="text-[14.5px] leading-snug">EOI open · Priority allotment for early buyers</span>
            </EnquireButton>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <EnquireButton className="btn-gold px-[30px]">Enquire now</EnquireButton>
          </div>
          <dl className="m-0 mt-8 grid max-w-[640px] grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-6 border-t border-cream/25 pt-7">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-2.5 text-[10px] uppercase tracking-[.28em] text-cream/80">{s.label}</dt>
                <dd className="num m-0 text-[clamp(30px,2.6vw,40px)] leading-none">{s.pre}<span data-count={s.v} data-dec={s.dec}>{s.v.toFixed(s.dec)}</span>{s.suf}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="absolute bottom-10 right-[clamp(20px,4.5vw,72px)] hidden flex-col items-center gap-3.5 text-[10px] tracking-[.32em] text-cream/70 lg:flex" aria-hidden="true">
        <span className="[writing-mode:vertical-rl]">SCROLL</span>
        <div className="h-[60px] w-px overflow-hidden bg-cream/20"><div className="h-full w-full animate-cue bg-gold" /></div>
      </div>
    </section>
  );
}
