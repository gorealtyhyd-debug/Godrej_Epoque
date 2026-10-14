'use client';
import Image from 'next/image';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { RESIDENCES } from '@/lib/data';

type Ctx = 'general' | 'plan' | 'price' | 'brochure';
type EnqApi = { open: (ctx?: Ctx) => void; planUnlocked: boolean };
const EnqContext = createContext<EnqApi>({ open: () => {}, planUnlocked: false });
export const useEnquiry = () => useContext(EnqContext);

const KICKER: Record<Ctx, string> = { general: 'Enquiry · Godrej Epoque', plan: 'Master layout access', price: 'Price & availability', brochure: 'Floor plans & brochure' };
const field = 'w-full rounded-sm border border-cocoa/15 bg-white px-4 pb-[13px] pt-[15px] font-sans text-[15px] text-cocoa outline-none focus:border-gold-deep';
const label = 'text-[10.5px] font-medium uppercase tracking-[.28em] text-bronze';

declare global { interface Window { __lenis?: { stop: () => void; start: () => void; scrollTo: (t: unknown, o?: unknown) => void } } }

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [ctx, setCtx] = useState<Ctx | null>(null);
  const [sent, setSent] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [planUnlocked, setPlanUnlocked] = useState(false);

  const open = useCallback((c: Ctx = 'general') => { setCtx(c); setSent(''); setErr(''); window.__lenis?.stop(); }, []);
  const close = useCallback(() => { setCtx(null); window.__lenis?.start(); }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && close();
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  }, [close]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const name = (data.name || '').trim();
    if (!name) return setErr('Please enter your name.');
    if ((data.phone || '').replace(/\D/g, '').length < 10) return setErr('Please enter a valid 10-digit mobile number.');
    setBusy(true); setErr('');
    try {
      const r = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, context: ctx }) });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || 'Something went wrong.');
      setSent(name.split(' ')[0]);
      if (ctx === 'plan') setPlanUnlocked(true);
    } catch (x) { setErr((x as Error).message); } finally { setBusy(false); }
  }

  return (
    <EnqContext.Provider value={{ open, planUnlocked }}>
      {children}
      {ctx && (
        <>
          <div onClick={close} className="fixed inset-0 z-[58] bg-ink/65 backdrop-blur-md" />
          <div role="dialog" aria-modal="true" aria-labelledby="enq-title" data-lenis-prevent
            className="fixed left-1/2 top-1/2 z-[59] max-h-[calc(100svh-24px)] w-[520px] max-w-[calc(100vw-24px)] -translate-x-1/2 -translate-y-1/2 animate-panelIn overflow-auto bg-white p-6 text-cocoa shadow-[0_40px_90px_-20px_rgba(0,0,0,.6)] sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-[18px]">
                <div className="flex shrink-0 flex-col items-center gap-1">
                  <Image src="/assets/godrej-logo.png" alt="Godrej" width={80} height={40} className="h-10 w-auto" />
                  <span className="-mr-[.5em] font-serif text-base tracking-[.5em]">EPOQUE</span>
                </div>
                <div className="border-l border-cocoa/20 pl-[18px]">
                  <div id="enq-title" className="font-serif text-2xl leading-tight">Godrej Epoque</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[.3em] text-bronze">{KICKER[ctx]}</div>
                </div>
              </div>
              <button onClick={close} aria-label="Close" className="h-11 w-11 shrink-0 rounded-full border border-cocoa/25 text-base hover:border-cocoa">✕</button>
            </div>
            <div className="my-6 h-px bg-cocoa/15" />
            {!sent ? (
              <form onSubmit={submit} className="flex flex-col gap-5">
                <label className="flex flex-col gap-2.5"><span className={label}>Name</span><input name="name" autoComplete="name" placeholder="Your full name" className={field} /></label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2.5"><span className={label}>Number</span><input name="phone" inputMode="tel" autoComplete="tel" placeholder="+91 00000 00000" className={field} /></label>
                  <label className="flex flex-col gap-2.5"><span className={label}>Mail</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} /></label>
                </div>
                <label className="flex flex-col gap-2.5"><span className={label}>Unit type</span>
                  <select name="unit" className={field}>{RESIDENCES.map((r, i) => <option key={i}>{r.name} · {r.area} Sq.ft.</option>)}</select>
                </label>
                <label className="flex flex-col gap-2.5"><span className={label}>Budget range</span>
                  <select name="budget" className={field}><option>₹2.9 – 4 Cr</option><option>₹4 – 5 Cr</option><option>₹5 Cr +</option></select>
                </label>
                <label className="flex flex-col gap-2.5"><span className={label}>Message</span><textarea name="message" rows={3} placeholder="Anything you'd like us to know" className={`${field} min-h-[92px] resize-y`} /></label>
                {err && <div className="text-[13px] text-[#b4442a]">{err}</div>}
                <button type="submit" disabled={busy} className="rounded-full bg-cocoa px-5 pb-[17px] pt-[19px] text-xs font-semibold uppercase tracking-[.26em] text-cream transition-colors hover:bg-umber disabled:opacity-60">{busy ? 'Sending…' : 'Submit enquiry'}</button>
                <p className="m-0 text-[11.5px] leading-relaxed text-cocoa/65">By submitting you agree to be contacted by phone, SMS, WhatsApp and email about Godrej Epoque.</p>
              </form>
            ) : (
              <div className="flex flex-col gap-3.5 pb-2 pt-3">
                <div className="font-serif text-[28px] leading-tight">Thank you, {sent}.</div>
                <p className="m-0 text-[15px] font-light leading-[1.7] text-cocoa/75">
                  {ctx === 'plan' ? 'The master layout is now unlocked on the page. Your relationship manager will call you shortly.' : 'Your relationship manager will call you shortly with pricing and a private preview slot.'}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </EnqContext.Provider>
  );
}

export function EnquireButton({ ctx = 'general', className, children }: { ctx?: Ctx; className?: string; children: React.ReactNode }) {
  const { open } = useEnquiry();
  return <button type="button" onClick={() => open(ctx)} className={className}>{children}</button>;
}
