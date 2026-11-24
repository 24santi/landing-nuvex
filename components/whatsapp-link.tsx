import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

type WhatsAppLinkProps = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "text";
  className?: string;
};

export function WhatsAppLink({
  message,
  children,
  variant = "primary",
  className = "",
}: WhatsAppLinkProps) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={whatsappHref(message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children} por WhatsApp`}
    >
      <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />
      <span>{children}</span>
      {variant !== "text" && <ArrowUpRight aria-hidden="true" size={16} />}
    </a>
  );
}