import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Standard from '@/components/Standard';
import Arrival from '@/components/Arrival';
import WhyNeopolis from '@/components/WhyNeopolis';
import Films from '@/components/Films';
import SkyBridge from '@/components/SkyBridge';
import Amenities from '@/components/Amenities';
import StickyShowcase from '@/components/StickyShowcase';
import Residences from '@/components/Residences';
import Specifications from '@/components/Specifications';
import Connectivity from '@/components/Connectivity';
import MasterLayout from '@/components/MasterLayout';
import NeopolisLayout from '@/components/NeopolisLayout';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import { PODIUM, CLUB } from '@/lib/data';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Overview />
        <Standard />
        <Arrival />
        <WhyNeopolis />
        <Films />
        <SkyBridge />
        <Amenities />
        <StickyShowcase id="podium" label="Podium amenities" items={PODIUM} />
        <StickyShowcase id="club" label="Clubhouse amenities" items={CLUB} />
        <Residences />
        <Specifications />
        <Connectivity />
        <MasterLayout />
        <NeopolisLayout />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
