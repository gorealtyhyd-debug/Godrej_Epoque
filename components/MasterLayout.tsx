'use client';
import Image from 'next/image';
import { useEnquiry } from './Enquiry';

export default function MasterLayout() {
  const { open, planUnlocked } = useEnquiry();
  return (
    <section id="masterplan" aria-labelledby="mp-h" className="bg-cream px-[clamp(20px,5vw,72px)] py-[clamp(90px,12vw,170px)] text-cocoa">
      <div className="mx-auto max-w-[1440px]">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-7">
          <div>
            <div className="text-[11.5px] uppercase tracking-[.38em] text-bronze">Master layout · 5.03 acres</div>
            <h2 id="mp-h" className="m-0 mt-[18px] font-serif text-[clamp(40px,5vw,78px)] font-normal leading-[1.02]">A central green island, <em className="italic text-bronze">ringed by life.</em></h2>
          </div>
          <p className="m-0 max-w-[400px] text-base font-light leading-[1.8]">Two towers spaced for light and privacy, ~75% open landscape and over fifty marked experiences across the podium.</p>
        </div>
        <div data-clip onClick={() => !planUnlocked && open('plan')} className={`relative mt-[clamp(40px,5vw,64px)] overflow-hidden bg-cocoa ${planUnlocked ? 'cursor-zoom-in' : 'cursor-pointer'}`}>
          <Image src="/assets/masterplan.jpg" alt="Godrej Epoque master layout plan" width={2000} height={1200} sizes="100vw"
            className={`block h-auto w-full transition-[filter,transform] duration-[1200ms] ${planUnlocked ? '' : 'scale-[1.06] blur-[14px] saturate-[.8]'}`} />
          {!planUnlocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-ink/40 p-6">
              <div className="flex max-w-[460px] flex-col items-center gap-4 border border-gold/40 bg-ink/80 p-[clamp(26px,3vw,44px)] text-center text-cream backdrop-blur-md">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold"><div className="relative top-[3px] h-3 w-4 rounded-sm border-[1.5px] border-gold" /></div>
                <div className="font-serif text-[clamp(26px,2.6vw,36px)] leading-tight">Unlock the master layout</div>
                <p className="m-0 text-[14.5px] font-light leading-relaxed text-cream/80">Share your details to view the full plan with its amenity legend.</p>
                <span className="btn-gold">Click to view plan</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
