import { HeartHandshake } from "lucide-react";
import { business, serviceMessages, whatsappHref } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <a className="brand footer-brand" href="#inicio" aria-label={`${business.name}, volver al inicio`}>
          <span className="brand-mark"><HeartHandshake aria-hidden="true" size={24} strokeWidth={1.8} /></span>
          <span className="brand-copy"><strong>{business.name}</strong><small>{business.tagline}</small></span>
        </a>
        <p>Seguridad social con atención humana.</p>
        <a className="footer-whatsapp" href={whatsappHref(serviceMessages.affiliations)} target="_blank" rel="noreferrer">Escríbenos por WhatsApp <span aria-hidden="true">↗</span></a>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} NUVEX. Todos los derechos reservados.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}