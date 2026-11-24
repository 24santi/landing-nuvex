export const business = {
  name: "NUVEX",
  tagline: "Soluciones que cuidan tu futuro",
  whatsappPhone: process.env.NEXT_PUBLIC_NUVEX_WHATSAPP ?? "",
  contactEmail: process.env.NEXT_PUBLIC_NUVEX_EMAIL ?? "",
  city: process.env.NEXT_PUBLIC_NUVEX_CITY ?? "Colombia",
};

export const serviceMessages = {
  affiliations: "Hola NUVEX, quiero información sobre afiliaciones a EPS, ARL, pensión y caja.",
  independent: "Hola NUVEX, soy independiente y quiero información sobre pagos a seguridad social.",
  business: "Hola NUVEX, represento una empresa y quiero conocer el servicio de administración de seguridad social.",
  professional: "Hola NUVEX, quiero información sobre otros servicios profesionales de seguridad social.",
};

export function whatsappHref(message: string) {
  const phone = business.whatsappPhone.replace(/\D/g, "");
  const recipient = phone ? `/${phone}` : "/";
  return `https://wa.me${recipient}?text=${encodeURIComponent(message)}`;
}