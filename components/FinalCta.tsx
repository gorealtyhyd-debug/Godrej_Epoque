import { SITE } from '@/lib/site';
import { EnquireButton } from './Enquiry';

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-h" className="relative flex min-h-screen items-end overflow-hidden bg-black">
      <video data-clip-range="10,20" muted autoPlay playsInline preload="metadata" aria-hidden="true" src="/assets/drone.mp4" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.1)_40%,rgba(0,0,0,.78))]" />
      <div className="pointer-events-none absolute inset-[clamp(14px,2vw,28px)] border border-gold-light/45" />
      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-12 px-[clamp(36px,5vw,80px)] pb-[clamp(70px,9vw,120px)] text-white">
        <div data-reveal>
          <div className="text-[11.5px] uppercase tracking-[.38em] text-gold-light">Private previews now open</div>
          <h2 id="cta-h" className="m-0 mt-[18px] font-serif text-[clamp(46px,6.4vw,104px)] font-normal leading-[.98]">Your era<br />begins <em className="italic text-gold-light">here.</em></h2>
        </div>
        <div data-reveal className="flex max-w-[480px] flex-col gap-6">
          <p className="m-0 text-base font-light leading-[1.75] text-white/90">Speak with our relationship team for pricing, availability and a guided walkthrough.</p>
          <div className="flex flex-wrap gap-3.5">
            <EnquireButton className="bg-gold px-[26px] pb-4 pt-[18px] text-[11.5px] font-semibold uppercase tracking-wide2 text-cocoa hover:bg-[#ecd08e]">Enquire now</EnquireButton>
            <a href={SITE.mapsUrl} target="_blank" rel="noopener" className="border border-white/60 px-[26px] pb-4 pt-[18px] text-[11.5px] font-semibold uppercase tracking-wide2 text-white hover:border-gold-light hover:text-gold-light">Get directions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
