import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import {
  AffiliationsSection,
  CompanySection,
  IndependentSection,
  OtherServicesSection,
  ProcessSection,
} from "@/components/service-sections";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-nuvex-navy" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <AffiliationsSection />
        <IndependentSection />
        <CompanySection />
        <OtherServicesSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
