import { FAQ } from '@/lib/data';

// Visible FAQ mirrors the FAQPage JSON-LD — answer-first copy that search and AI engines can quote.
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-h" className="section bg-cream text-cocoa">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[clamp(32px,5vw,80px)] lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)]">
        <div data-reveal className="flex flex-col gap-5 lg:sticky lg:top-32 lg:self-start">
          <div className="kicker text-bronze"><span className="star" />Questions, answered</div>
          <h2 id="faq-h" className="m-0 font-serif text-[clamp(40px,4.8vw,74px)] font-normal leading-[1.02]">Godrej Epoque <em className="italic text-gold-deep">FAQ.</em></h2>
          <p className="m-0 max-w-[420px] text-base font-light leading-[1.8] text-umber">Everything buyers ask first about Godrej Epoque, Neopolis, Kokapet.</p>
        </div>
        <div className="border-t border-gold-line">
          {FAQ.map((f, i) => (
            <details key={f.q} className="group border-b border-gold-line/45" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer list-none items-baseline gap-5 py-6 [&::-webkit-details-marker]:hidden">
                <span className="num w-7 shrink-0 text-[13px] text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="m-0 flex-1 font-serif text-[clamp(22px,2vw,30px)] font-normal leading-snug">{f.q}</h3>
                <span aria-hidden className="text-xl text-gold-deep transition-transform duration-300 group-open:rotate-45">+</span>
              </summary>
              <p className="m-0 pb-7 pl-12 pr-8 text-[15.5px] font-light leading-[1.8] text-umber">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
