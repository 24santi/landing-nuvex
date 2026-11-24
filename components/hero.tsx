import Image from "next/image";
import { ArrowDown, ArrowUpRight, HeartPulse, HardHat, Landmark, UsersRound } from "lucide-react";
import { serviceMessages } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

const highlights = [
  { label: "EPS", icon: HeartPulse },
  { label: "ARL", icon: HardHat },
  { label: "Pensión", icon: Landmark },
  { label: "Caja", icon: UsersRound },
];

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-image"
        src="/images/nuvex-family.jpg"
        alt="Familia reunida al aire libre, símbolo del bienestar que protegemos"
        fill
        priority
        sizes="100vw"
        unoptimized
      />
      <div className="hero-shade" aria-hidden="true"></div>
      <div className="hero-content wrap">
        <p className="eyebrow eyebrow-on-dark"><span></span> SEGURIDAD SOCIAL CON ACOMPAÑAMIENTO</p>
        <h1 id="hero-title">
          Seguridad Social.
          <span>Cuidamos lo más importante:</span>
          <em>tu bienestar y el de tu familia.</em>
        </h1>
        <p className="hero-intro">Afiliaciones, pagos y asesoría para personas independientes y empresas, con atención cercana en cada paso.</p>
        <div className="hero-actions">
          <WhatsAppLink message={serviceMessages.affiliations} variant="light">Cuéntanos qué necesitas</WhatsAppLink>
          <a className="button button-ghost" href="#servicios">Conoce nuestros servicios <ArrowUpRight aria-hidden="true" size={17} /></a>
        </div>
        <div className="hero-bottom">
          <span>Una gestión más clara, de principio a fin</span>
          <a href="#servicios" aria-label="Desplazarse a servicios"><ArrowDown aria-hidden="true" size={19} /></a>
        </div>
      </div>
      <div className="hero-services" aria-label="Áreas de afiliación">
        {highlights.map(({ label, icon: Icon }) => (
          <div className="hero-service" key={label}><Icon aria-hidden="true" size={19} strokeWidth={1.7} /><span>{label}</span></div>
        ))}
      </div>
    </section>
  );
}