import { ArrowDownRight, HeartHandshake } from "lucide-react";
import { business, serviceMessages } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

const links = [
  ["Servicios", "#servicios"],
  ["Independientes", "#independientes"],
  ["Empresas", "#empresas"],
  ["Cómo funciona", "#proceso"],
  ["Preguntas", "#preguntas"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label={`${business.name}, inicio`}>
          <span className="brand-mark"><HeartHandshake aria-hidden="true" size={25} strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>{business.name}</strong><small>{business.tagline}</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>

        <div className="header-action">
          <WhatsAppLink message={serviceMessages.affiliations} className="header-cta">Hablar con un asesor</WhatsAppLink>
        </div>

        <details className="mobile-nav">
          <summary aria-label="Abrir navegación"><span></span><span></span></summary>
          <nav aria-label="Navegación móvil">
            {links.map(([label, href]) => <a href={href} key={href}>{label}<ArrowDownRight aria-hidden="true" size={16} /></a>)}
            <WhatsAppLink message={serviceMessages.affiliations}>Hablar con un asesor</WhatsAppLink>
          </nav>
        </details>
      </div>
    </header>
  );
}