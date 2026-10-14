import Image from 'next/image';
import { SITE } from '@/lib/site';
import { EnquireButton } from './Enquiry';

export default function Footer() {
  return (
    <>
      <footer className="border-t border-gold/15 bg-ink px-[clamp(20px,5vw,72px)] pb-24 pt-[clamp(60px,7vw,96px)] lg:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex flex-col items-center gap-2.5">
              <Image src="/assets/godrej-logo.png" alt="Godrej" width={168} height={84} className="h-[clamp(56px,6vw,84px)] w-auto" />
              <span className="-mr-[.5em] font-serif text-[clamp(20px,2vw,28px)] tracking-[.5em] text-cream">EPOQUE</span>
            </div>
            <nav aria-label="Footer" className="flex flex-wrap gap-7 text-[11.5px] uppercase tracking-[.22em]">
              <a href="#amenities">Amenities</a><a href="#residences">Residences</a><a href="#location">Location</a><a href="#faq">FAQ</a>
            </nav>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-5 border-t border-cream/10 pt-7 text-[11.5px] leading-relaxed text-cream/50">
            <address className="not-italic" itemScope itemType="https://schema.org/PostalAddress">
              Godrej Epoque · <span itemProp="streetAddress">{SITE.address.street}</span>, <span itemProp="addressLocality">{SITE.address.locality}</span>, {SITE.address.city} <span itemProp="postalCode">{SITE.address.postalCode}</span>
              {' · '}<a href={SITE.mapsUrl} target="_blank" rel="noopener">View on Google Maps</a>
            </address>
            <div className="max-w-[640px]">All images are artist&apos;s impressions or representative. Areas are approximate. Specifications and plans are indicative and subject to change.</div>
          </div>
          <p className="m-0 mt-5 max-w-[900px] text-[11.5px] leading-[1.7] text-cream/50"><span className="text-[10.5px] uppercase tracking-[.2em] text-gold">Disclaimer:</span> This website is meant only for information purposes. It should not be considered/ claimed as an official site. This website belongs to authorized channel partner.</p>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-[45] border-t border-gold/30 lg:hidden">
        <EnquireButton className="min-h-14 w-full bg-gold text-[11.5px] font-semibold uppercase tracking-wide2 text-cocoa">Enquire now</EnquireButton>
      </div>
    </>
  );
}
