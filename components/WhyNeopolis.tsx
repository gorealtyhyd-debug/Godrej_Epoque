'use client';
import Image from 'next/image';
import { WHY } from '@/lib/data';

function move(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget, r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
  el.style.setProperty('--mx', `${x * 100}%`); el.style.setProperty('--my', `${y * 100}%`);
  el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`); el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`);
}
function leave(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget; ['--rx', '--ry'].forEach((k) => el.style.setProperty(k, '0deg')); ['--mx', '--my'].forEach((k) => el.style.setProperty(k, '50%'));
}

export default function WhyNeopolis() {
  return (
    <section id="location" aria-labelledby="why-h" className="section bg-white text-cocoa">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-stretch gap-[clamp(32px,5vw,80px)]">
          <div data-reveal className="flex flex-col justify-center gap-[22px]">
            <div className="kicker text-bronze"><span className="star" />Why Neopolis, Kokapet</div>
            <h2 id="why-h" className="m-0 font-serif text-[clamp(42px,5.2vw,84px)] font-normal leading-[1.02]">At the centre of Hyderabad&apos;s <em className="italic text-gold-deep">economic expansion.</em></h2>
            <p className="m-0 max-w-[480px] text-base font-light leading-[1.8] text-umber">Kokapet · West Hyderabad&apos;s premier business and lifestyle address, beside Gandipet Lake and the Osman Sagar green belt.</p>
          </div>
          <div data-clip className="relative min-h-[380px] overflow-hidden bg-night text-cream">
            <Image data-par="-0.06" data-scale="1.15" src="/assets/skyline.jpg" alt="West Hyderabad skyline near Kokapet" fill sizes="(max-width:900px) 100vw, 50vw" className="object-cover opacity-45 will-change-transform" />
            <div className="pointer-events-none absolute inset-3.5 border border-gold-light/45" />
            <div className="relative flex h-full flex-col justify-between gap-7 p-[clamp(28px,3.4vw,52px)]">
              <span className="text-[10.5px] uppercase tracking-[.32em] text-gold-light">Land value per acre · 2007 → 2025</span>
              <div className="flex flex-wrap items-end gap-[clamp(16px,2.4vw,36px)]">
                <div className="flex flex-col gap-1.5"><span className="num text-[clamp(34px,3vw,48px)] leading-none text-cream/70">₹14 cr</span><span className="num text-xs tracking-[.2em] text-cream/60">2007</span></div>
                <span className="mb-[22px] h-px min-w-[60px] flex-1 bg-gradient-to-r from-gold-light/20 to-gold-light" />
                <div className="flex flex-col gap-1.5"><span className="num text-[clamp(64px,7vw,116px)] leading-[.9] text-gold-light">₹<span data-count="151">151</span> cr</span><span className="num text-xs tracking-[.2em] text-cream/80">2025</span></div>
              </div>
            </div>
          </div>
        </div>
        <ul className="m-0 mt-[clamp(40px,5vw,72px)] grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-[clamp(16px,1.8vw,26px)] p-0 [perspective:1400px]">
          {WHY.map((w, k) => (
            <li key={w.t} data-reveal className="flex">
              <div onMouseMove={move} onMouseLeave={leave}
                className="group relative flex-1 p-px shadow-[0_30px_60px_-36px_rgba(30,22,16,.6)] transition-[transform,box-shadow] duration-300 ease-out [--mx:50%] [--my:50%] [--rx:0deg] [--ry:0deg] [background:linear-gradient(145deg,rgba(240,215,154,.9),rgba(184,145,63,.25)_40%,rgba(184,145,63,.15)_60%,rgba(240,215,154,.8))] [transform-style:preserve-3d] [transform:rotateX(var(--rx))_rotateY(var(--ry))] hover:shadow-[0_50px_90px_-40px_rgba(30,22,16,.75)]">
                <div className="relative flex h-full flex-col overflow-hidden bg-night text-cream">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={w.img} alt={w.t} fill loading="lazy" sizes="(max-width:700px) 100vw, 33vw" className="object-cover brightness-[.85] saturate-[.7] transition-[transform,filter] duration-[1600ms] ease-lux group-hover:scale-110 group-hover:brightness-100 group-hover:saturate-100" />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,#211913_0%,rgba(33,25,19,.2)_55%,rgba(33,25,19,0)_100%)]" />
                    <div className="absolute inset-x-5 top-[18px] flex items-center justify-between">
                      <span className="border border-gold-light/50 bg-night/55 px-3 pb-[5px] pt-[7px] text-[10px] uppercase tracking-[.3em] text-gold-light backdrop-blur-sm">{w.tag}</span>
                      <span className="h-[9px] w-[9px] rotate-45 border border-gold-light" />
                    </div>
                  </div>
                  <div className="relative flex flex-1 flex-col gap-3.5 px-[clamp(22px,2.2vw,32px)] pb-[clamp(26px,2.6vw,36px)] pt-1.5 [transform:translateZ(30px)]">
                    <div aria-hidden className="num -mt-[34px] text-[clamp(50px,4.6vw,72px)] leading-[.9] text-transparent [-webkit-text-stroke:1px_#d9b465]">{String(k + 1).padStart(2, '0')}</div>
                    <h3 className="m-0 font-serif text-[clamp(25px,2.2vw,34px)] font-normal leading-[1.08]">{w.t}</h3>
                    <div className="h-px w-10 bg-gold" />
                    <p className="m-0 text-[14.5px] font-light leading-[1.75] text-cream/80">{w.d}</p>
                  </div>
                  <div className="pointer-events-none absolute inset-0 mix-blend-screen [background:radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(240,215,154,.16),transparent_45%)]" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
