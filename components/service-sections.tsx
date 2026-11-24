import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ClipboardList,
  HandHeart,
  HardHat,
  HeartPulse,
  Landmark,
  LifeBuoy,
  UsersRound,
} from "lucide-react";
import { serviceMessages } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

const affiliationTypes = [
  { title: "EPS", description: "Orientación para cuidar tu salud y la de quienes más quieres.", icon: HeartPulse },
  { title: "ARL", description: "Acompañamiento para la protección frente a riesgos laborales.", icon: HardHat },
  { title: "Pensión", description: "Guía para construir y proteger tu futuro pensional.", icon: Landmark },
  { title: "Caja de compensación", description: "Acceso a beneficios y bienestar para tu familia.", icon: UsersRound },
];

const independentBenefits = [
  "Afiliación y pagos a seguridad social",
  "Orientación para la planilla integrada (PILA)",
  "Acompañamiento en cobertura y beneficios",
  "Seguimiento claro para ayudarte a cumplir a tiempo",
];

const companyBenefits = [
  "Afiliación de empleados",
  "Liquidación y pago de planillas",
  "Gestión de novedades y reportes",
  "Acompañamiento en obligaciones de seguridad social",
];

const otherServices = [
  { title: "Traslados", description: "Orientación para cambios entre EPS y fondos.", icon: ArrowUpRight },
  { title: "Corrección de datos", description: "Acompañamiento para solicitar la actualización de información.", icon: ClipboardList },
  { title: "Asesoría personalizada", description: "Revisamos tu caso y te ayudamos a entender los siguientes pasos.", icon: HandHeart },
  { title: "Acompañamiento continuo", description: "Atención cercana durante el proceso y sus novedades.", icon: LifeBuoy },
];

export function AffiliationsSection() {
  return (
    <section className="section affiliations-section" id="servicios" aria-labelledby="affiliations-title">
      <div className="wrap">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow"><span></span> PROTECCIÓN PARA CADA ETAPA</p>
            <h2 id="affiliations-title">Afiliaciones que cuidan <em>tu tranquilidad.</em></h2>
          </div>
          <p>Te orientamos para entender tus opciones y avanzar con seguridad social para ti, tu familia o tu equipo.</p>
        </div>
        <div className="affiliation-grid">
          {affiliationTypes.map(({ title, description, icon: Icon }, index) => (
            <a className="affiliation-item" href="#contacto" key={title}>
              <span className="affiliation-index">0{index + 1}</span>
              <span className="service-icon"><Icon aria-hidden="true" size={25} strokeWidth={1.7} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="item-link">Conocer más <ArrowUpRight aria-hidden="true" size={15} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndependentSection() {
  return (
    <section className="independent-section" id="independientes" aria-labelledby="independent-title">
      <div className="independent-image">
        <Image src="/images/company-team.jpg" alt="Equipo de profesionales trabajando en conjunto" fill sizes="(max-width: 760px) 100vw, 48vw" unoptimized />
        <span className="image-caption"><span className="caption-dot"></span> Tu trabajo merece respaldo</span>
      </div>
      <div className="independent-copy">
        <p className="eyebrow eyebrow-on-dark"><span></span> PARA INDEPENDIENTES</p>
        <h2 id="independent-title">Tu esfuerzo, con el respaldo que merece.</h2>
        <p className="section-lead">Te acompañamos con la afiliación y el pago de seguridad social para que puedas enfocarte en lo que haces mejor.</p>
        <ul className="check-list check-list-light">
          {independentBenefits.map(item => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}
        </ul>
        <WhatsAppLink message={serviceMessages.independent} variant="light">Consultar como independiente</WhatsAppLink>
      </div>
    </section>
  );
}

export function CompanySection() {
  return (
    <section className="section company-section" id="empresas" aria-labelledby="company-title">
      <div className="wrap company-layout">
        <div className="company-copy">
          <p className="eyebrow"><span></span> PARA EMPRESAS</p>
          <h2 id="company-title">Tu equipo crece. <em>Nosotros te acompañamos.</em></h2>
          <p className="section-lead">Organiza la gestión de seguridad social de tu empresa con apoyo claro para cada etapa.</p>
          <ul className="check-list">
            {companyBenefits.map(item => <li key={item}><Check aria-hidden="true" size={17} />{item}</li>)}
          </ul>
          <WhatsAppLink message={serviceMessages.business}>Hablar de mi empresa</WhatsAppLink>
        </div>
        <figure className="company-photo">
          <Image src="/images/business-office.jpg" alt="Oficina empresarial luminosa y organizada" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
          <figcaption><Building2 aria-hidden="true" size={20} /> Administración cercana, con visión de equipo</figcaption>
        </figure>
      </div>
    </section>
  );
}

export function OtherServicesSection() {
  return (
    <section className="section other-services" id="otros-servicios" aria-labelledby="other-services-title">
      <div className="wrap">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow"><span></span> TAMBIÉN TE ACOMPAÑAMOS</p>
            <h2 id="other-services-title">Más apoyo. <em>Menos vueltas.</em></h2>
          </div>
          <p>Si tienes una novedad o no sabes por dónde empezar, conversemos para orientarte.</p>
        </div>
        <div className="other-grid">
          {otherServices.map(({ title, description, icon: Icon }, index) => (
            <article className="other-item" key={title}>
              <span className="other-number">0{index + 1}</span>
              <Icon aria-hidden="true" className="other-icon" size={24} strokeWidth={1.7} />
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
        <div className="other-cta">
          <span><BriefcaseBusiness aria-hidden="true" size={21} /> ¿Tienes un caso particular?</span>
          <WhatsAppLink message={serviceMessages.professional} variant="text">Cuéntanos por WhatsApp</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const steps = [
    { number: "01", title: "Nos cuentas", description: "Elige el servicio y escríbenos por WhatsApp. Te escuchamos y entendemos tu necesidad." },
    { number: "02", title: "Te orientamos", description: "Un asesor te explica los pasos y la información necesaria para tu caso." },
    { number: "03", title: "Te acompañamos", description: "Avanzamos contigo y te mantenemos al tanto de cada etapa del proceso." },
  ];
  return (
    <section className="section process-section" id="proceso" aria-labelledby="process-title">
      <div className="wrap">
        <div className="section-heading process-heading">
          <p className="eyebrow"><span></span> SENCILLO Y CERCANO</p>
          <h2 id="process-title">Así funciona <em>nuestro servicio.</em></h2>
        </div>
        <ol className="process-grid">
          {steps.map(step => (
            <li className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div className="process-rule"></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}