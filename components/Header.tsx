'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/data';
import { EnquireButton } from './Enquiry';

export default function Header() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = () => setMenu(false);
    addEventListener('epoque:navigate', close);
    return () => removeEventListener('epoque:navigate', close);
  }, []);
  useEffect(() => { menu ? window.__lenis?.stop() : window.__lenis?.start(); }, [menu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-[68px] items-center justify-between gap-6 border-b border-transparent px-[clamp(18px,4vw,56px)] transition-[background,border-color] duration-500 sm:h-[84px] [[data-scrolled]_&]:border-gold/15 [[data-scrolled]_&]:bg-ink/90 [[data-scrolled]_&]:backdrop-blur-[14px]">
        <a href="#top" aria-label="Godrej Epoque — home" className="flex shrink-0 flex-col items-center gap-1 leading-none text-cream">
          <Image src="/assets/godrej-logo.png" alt="Godrej" width={120} height={60} priority className="h-[26px] w-auto sm:h-[34px]" />
          <span className="-mr-[.5em] font-serif text-xs tracking-[.5em] text-cream sm:text-[15px]">EPOQUE</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-[clamp(16px,2vw,32px)] xl:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="whitespace-nowrap text-[11px] uppercase tracking-wide2 text-cream/80 hover:text-gold">{l}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <EnquireButton className="hidden whitespace-nowrap bg-gold px-6 pb-[13px] pt-[15px] text-[11.5px] font-semibold uppercase tracking-wide2 text-cocoa transition-colors hover:bg-[#ecd08e] sm:inline-flex">Enquire now</EnquireButton>
          <button onClick={() => setMenu((m) => !m)} aria-label="Menu" aria-expanded={menu} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-gold/60 bg-ink/35 xl:hidden">
            <span className={`block h-px w-[18px] bg-cream transition-transform duration-300 ${menu ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`block h-px w-[18px] bg-cream transition-transform duration-300 ${menu ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      {menu && (
        <div data-lenis-prevent className="fixed inset-0 z-[49] flex animate-menuIn flex-col justify-between overflow-auto bg-night px-[clamp(24px,6vw,56px)] pb-10 pt-[110px]">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map(([l, h], i) => (
              <a key={h} href={h} className="flex items-baseline gap-[18px] border-b border-gold/20 py-4 font-serif text-[clamp(30px,7vw,44px)] leading-tight text-cream hover:text-gold">
                <span className="num text-xs tracking-[.1em] text-gold">{String(i + 1).padStart(2, '0')}</span>{l}
              </a>
            ))}
          </nav>
          <div className="mt-9 flex flex-col gap-3.5">
            <EnquireButton className="bg-gold px-6 pb-[17px] pt-[19px] text-xs font-semibold uppercase tracking-wide2 text-cocoa">Enquire now</EnquireButton>
            <address className="not-italic text-xs leading-relaxed text-cream/60">Kokapet SEZ Main Road, Neopolis, Hyderabad</address>
          </div>
        </div>
      )}
    </>
  );
}
