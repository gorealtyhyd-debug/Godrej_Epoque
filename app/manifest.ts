import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name, short_name: 'Epoque', description: SITE.description, start_url: '/',
    display: 'standalone', background_color: '#4e3c30', theme_color: '#4e3c30',
    icons: [{ src: '/assets/godrej-logo.png', sizes: 'any', type: 'image/png' }],
  };
}
