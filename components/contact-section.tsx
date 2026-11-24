import { ArrowUpRight, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { business, serviceMessages, whatsappHref } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function ContactSection() {
  return (
    <section className="contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="wrap contact-wrap">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-on-dark"><span></span> ESTAMOS PARA ACOMPAÑARTE</p>
          <h2 id="contact-title">Hablemos de lo que <em>necesitas.</em></h2>
          <p>Escríbenos y cuéntanos si necesitas ayuda personal o para tu empresa. Te responderemos con orientación clara.</p>
          <WhatsAppLink message={serviceMessages.affiliations} variant="light">Iniciar conversación</WhatsAppLink>
        </div>
        <div className="contact-options" aria-label="Elegir motivo de contacto">
          <a href={whatsappHref(serviceMessages.independent)} target="_blank" rel="noreferrer"><span><MessageCircle size={19} aria-hidden="true" /> Soy independiente</span><ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={whatsappHref(serviceMessages.business)} target="_blank" rel="noreferrer"><span><MessageCircle size={19} aria-hidden="true" /> Represento una empresa</span><ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={whatsappHref(serviceMessages.professional)} target="_blank" rel="noreferrer"><span><MessageCircle size={19} aria-hidden="true" /> Necesito otro servicio</span><ArrowUpRight size={17} aria-hidden="true" /></a>
          {business.contactEmail && <a href={`mailto:${business.contactEmail}`}><span><Mail size={19} aria-hidden="true" />{business.contactEmail}</span><ArrowUpRight size={17} aria-hidden="true" /></a>}
          {business.city && <div className="contact-detail"><MapPin size={18} aria-hidden="true" /><span>Atención en {business.city}</span></div>}
          {business.whatsappPhone && <a href={`tel:+${business.whatsappPhone.replace(/\D/g, "")}`}><span><Phone size={18} aria-hidden="true" />Llámanos</span><ArrowUpRight size={17} aria-hidden="true" /></a>}
        </div>
      </div>
    </section>
  );
}