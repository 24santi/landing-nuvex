import { Plus } from "lucide-react";

const questions = [
  {
    question: "¿Qué servicios ofrece NUVEX?",
    answer: "Acompañamos afiliaciones a EPS, ARL, pensión y caja; pagos para independientes; administración de seguridad social para empresas y otros trámites relacionados.",
  },
  {
    question: "¿Puedo solicitar ayuda si trabajo como independiente?",
    answer: "Sí. Te orientamos sobre afiliación y pagos de seguridad social según tu situación. Escríbenos y un asesor te indica los pasos aplicables a tu caso.",
  },
  {
    question: "¿Qué necesita una empresa para empezar?",
    answer: "Cuéntanos qué gestión necesitas. Revisaremos contigo la información requerida antes de iniciar; los requisitos pueden variar según el trámite y la entidad.",
  },
  {
    question: "¿Cuánto tarda una afiliación?",
    answer: "Los tiempos dependen de la entidad y de que la información esté completa. Te explicaremos el proceso y daremos seguimiento a las novedades.",
  },
  {
    question: "¿NUVEX reemplaza a las entidades del sistema?",
    answer: "No. NUVEX brinda orientación y acompañamiento. Las decisiones y confirmaciones de afiliación corresponden a las entidades responsables.",
  },
];

export function FaqSection() {
  return (
    <section className="section faq-section" id="preguntas" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <p className="eyebrow"><span></span> RESPUESTAS CLARAS</p>
          <h2 id="faq-title">Preguntas <em>frecuentes.</em></h2>
          <p>¿Tienes otra pregunta? Nuestro equipo puede orientarte según tu necesidad.</p>
          <a className="inline-link" href="#contacto">Contactar a NUVEX <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary><span>{question}</span><Plus aria-hidden="true" size={19} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}