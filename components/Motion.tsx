'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * One rAF loop drives every scroll effect, reading data-* hooks from server-rendered markup:
 * data-reveal, data-par, data-clip, data-count, data-bar, data-bignum, data-expand, data-hscroll, data-herocopy/-herofilm, video[data-clip-range]
 */
export default function Motion() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduce ? null : new Lenis({ lerp: 0.085, smoothWheel: true });
    if (lenis) window.__lenis = lenis as unknown as Window['__lenis'];

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href')!;
      const el = href === '#top' ? document.body : document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      window.dispatchEvent(new Event('epoque:navigate'));
      if (lenis) lenis.scrollTo(href === '#top' ? 0 : (el as HTMLElement), { offset: -60, duration: 1.6 });
      else scrollTo({ top: href === '#top' ? 0 : el.getBoundingClientRect().top + scrollY - 60, behavior: 'smooth' });
      history.replaceState(null, '', href);
    };
    document.addEventListener('click', onClick);

    const vh0 = innerHeight;
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top > vh0 * 0.95) el.setAttribute('data-reveal-hidden', '');
    });

    const cl = (v: number) => Math.max(0, Math.min(1, v));
    let raf = 0;
    const loop = (now: number) => {
      lenis?.raf(now);
      const vh = innerHeight, y = scrollY;
      document.documentElement.toggleAttribute('data-scrolled', y > 40);

      document.querySelectorAll<HTMLElement>('[data-reveal-hidden]').forEach((el) => {
        if (el.getBoundingClientRect().top < vh * 0.92) el.removeAttribute('data-reveal-hidden');
      });
      if (!reduce) {
        const hp = cl(y / vh);
        const hc = document.querySelector<HTMLElement>('[data-herocopy]');
        if (hc) { hc.style.opacity = String(1 - hp * 1.3); hc.style.transform = `translate3d(0,${hp * 80}px,0)`; }
        const hf = document.querySelector<HTMLElement>('[data-herofilm]');
        if (hf) hf.style.transform = `translate3d(0,${hp * vh * 0.35}px,0) scale(${1 + hp * 0.08})`;

        document.querySelectorAll<HTMLElement>('[data-par]').forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect(); if (r.bottom < -50 || r.top > vh + 50) return;
          el.style.transform = `translate3d(0,${(r.top + r.height / 2 - vh / 2) * +el.dataset.par!}px,0) scale(${el.dataset.scale || 1.15})`;
        });
        document.querySelectorAll<HTMLElement>('[data-clip]').forEach((el) => {
          const r = el.getBoundingClientRect(); const p = cl((vh - r.top) / (vh * 0.75));
          el.style.clipPath = `inset(${(1 - p) * 12}% ${(1 - p) * 8}% ${(1 - p) * 4}% ${(1 - p) * 8}%)`;
        });
        const ex = document.querySelector<HTMLElement>('[data-expand]');
        if (ex) {
          const r = ex.getBoundingClientRect(); const p = cl(-r.top / Math.max(1, r.height - vh));
          const box = ex.querySelector<HTMLElement>('[data-expand-box]'), txt = ex.querySelector<HTMLElement>('[data-expand-txt]'), pre = ex.querySelector<HTMLElement>('[data-expand-pre]');
          const e = 1 - Math.pow(1 - cl(p / 0.6), 3), ix = (1 - e) * (innerWidth < 960 ? 6 : 24), iy = (1 - e) * 18;
          if (box) { box.style.clipPath = `inset(${iy * 1.9}% ${ix}% ${iy * 0.34}% ${ix}% round ${(1 - e) * 24}px)`; (box.firstElementChild as HTMLElement).style.transform = `scale(${1.08 - e * 0.08})`; }
          if (pre) { pre.style.opacity = String(1 - cl(p / 0.3)); pre.style.transform = `translate3d(0,${-p * 120}px,0)`; }
          if (txt) { const k = cl((p - 0.55) / 0.3); txt.style.opacity = String(k); txt.style.transform = `translate3d(0,${(1 - k) * 40}px,0)`; }
        }
        const bn = document.querySelector<HTMLElement>('[data-bignum]');
        if (bn) { const r = bn.parentElement!.getBoundingClientRect(); const p = cl((vh - r.top) / (vh + r.height)); bn.style.transform = `translate3d(0,${(0.5 - p) * 80}px,0) scale(${0.6 + p * 0.55})`; }
      }
      const hs = document.querySelector<HTMLElement>('[data-hscroll]'), tr = document.querySelector<HTMLElement>('[data-htrack]');
      if (hs && tr) {
        const r = hs.getBoundingClientRect(); const p = cl(-r.top / Math.max(1, r.height - vh));
        tr.style.transform = `translate3d(${-p * Math.max(0, tr.scrollWidth - innerWidth)}px,0,0)`;
        const pr = document.querySelector<HTMLElement>('[data-hprog]'); if (pr) pr.style.transform = `scaleX(${p})`;
      }
      document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
        if (el.dataset.done || el.getBoundingClientRect().top > vh * 0.95) return;
        if (!el.dataset.st) el.dataset.st = String(now);
        const p = Math.min(1, (now - +el.dataset.st) / 1800), e = 1 - Math.pow(1 - p, 3);
        el.textContent = (+el.dataset.count! * e).toFixed(+(el.dataset.dec || 0));
        if (p >= 1) el.dataset.done = '1';
      });
      document.querySelectorAll<HTMLElement>('[data-bar]').forEach((el) => { if (el.getBoundingClientRect().top < vh * 0.9) el.style.width = el.dataset.bar + '%'; });
      document.querySelectorAll<HTMLVideoElement>('video[data-clip-range]').forEach((v) => {
        const [a, b] = (v.dataset.clipRange || '0,10').split(',').map(Number);
        if (!v.dataset.bound) { v.dataset.bound = '1'; v.muted = true; const go = () => { try { v.currentTime = a; } catch {} v.play().catch(() => {}); }; if (v.readyState >= 1) go(); else v.addEventListener('loadedmetadata', go, { once: true }); }
        if (v.readyState >= 1 && (v.currentTime >= b - 0.05 || v.currentTime < a - 0.5)) { v.currentTime = a; v.play().catch(() => {}); }
      });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); document.removeEventListener('click', onClick); lenis?.destroy(); };
  }, []);
  return null;
}
