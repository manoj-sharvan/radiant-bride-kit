import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink, telLink } from "@/lib/site";

export function StickyCTAs() {
  return (
    <>
      {/* WhatsApp - desktop & mobile */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-luxe animate-pulse-soft hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      </a>

      {/* Call - mobile only */}
      <a
        href={telLink(SITE.phonePrimary)}
        aria-label="Call now"
        className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full gradient-cta text-primary-foreground shadow-luxe sm:hidden animate-pulse-soft"
      >
        <Phone className="h-5 w-5" />
      </a>
    </>
  );
}
