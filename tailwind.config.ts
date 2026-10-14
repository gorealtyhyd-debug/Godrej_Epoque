import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cocoa: '#4e3c30',
        ink: '#3f3026',
        night: '#211913',
        umber: '#6b5444',
        bronze: '#8a6a3c',
        cream: '#fdf3e6',
        paper: '#fffaf2',
        sand: '#e4d2b4',
        gold: { DEFAULT: '#d9b465', deep: '#b8913f', light: '#f0d79a', line: '#c9a24c' },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { kicker: '.42em', wide2: '.24em' },
      transitionTimingFunction: { lux: 'cubic-bezier(.2,.7,.2,1)', swing: 'cubic-bezier(.65,0,.25,1)' },
      keyframes: {
        panelIn: { from: { opacity: '0', transform: 'translate(-50%,-47%) scale(.98)' }, to: { opacity: '1', transform: 'translate(-50%,-50%)' } },
        menuIn: { from: { opacity: '0', transform: 'translateY(-12px)' }, to: { opacity: '1', transform: 'none' } },
        cue: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        panelIn: 'panelIn .45s cubic-bezier(.2,.7,.2,1)',
        menuIn: 'menuIn .5s cubic-bezier(.2,.7,.2,1)',
        cue: 'cue 2.4s cubic-bezier(.6,0,.3,1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
