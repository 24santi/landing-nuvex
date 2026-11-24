import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NUVEX | Seguridad social que cuida tu futuro",
    template: "%s | NUVEX",
  },
  description:
    "Afiliaciones a EPS, ARL, pensión y caja; pagos para independientes y administración de seguridad social para empresas.",
  applicationName: "NUVEX",
  keywords: [
    "seguridad social",
    "afiliaciones EPS",
    "ARL",
    "pensión",
    "caja de compensación",
    "PILA",
    "independientes",
    "empresas",
  ],
  openGraph: {
    title: "NUVEX | Seguridad Social",
    description: "Soluciones que cuidan tu futuro y el de tu familia.",
    locale: "es_CO",
    type: "website",
    images: ["/images/nuvex-family.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CO">
      <body>{children}</body>
    </html>
  );
}
