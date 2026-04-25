import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion-helpers";
import { whatsappLink } from "@/lib/site";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Bridal Makeup Portfolio | Divya Tiruvannamalai" },
      { name: "description", content: "Browse our portfolio of stunning South Indian brides — HD makeup, hairstyling, and saree draping by Divya in Tiruvannamalai." },
      { property: "og:title", content: "Bridal Portfolio — Divya Bridal Makeup Artist" },
      { property: "og:description", content: "Real brides, real looks. Browse our recent bridal makeup work." },
      { property: "og:image", content: g1 },
      { name: "twitter:image", content: g1 },
    ],
  }),
  component: Portfolio,
});

const items = [
  { src: g1, label: "Traditional Red Bridal" },
  { src: g2, label: "HD Glam Look" },
  { src: g3, label: "Floral Hairstyling" },
  { src: g4, label: "Reception Glam" },
  { src: g5, label: "Engagement Soft Glam" },
  { src: g6, label: "Royal South Indian Bride" },
  { src: g1, label: "Classic Bridal" },
  { src: g2, label: "Airbrush Finish" },
  { src: g3, label: "Mehendi Day" },
];

function Portfolio() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our portfolio"
          title="Real brides. Real radiance."
          subtitle="A curated selection of recent bridal looks crafted with love in Tiruvannamalai and across Tamil Nadu."
        />

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05} className="mb-5 break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-xl shadow-card-soft"
              >
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/5]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/80 via-burgundy-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <p className="font-display text-ivory text-lg">{it.label}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <a
              href={whatsappLink("Hi Divya, I love your portfolio. I'd like to discuss my bridal look.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full gradient-cta px-7 py-4 text-base font-semibold text-primary-foreground shadow-luxe hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Book your bridal trial
            </a>
          </div>
        </Reveal>
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 bg-burgundy-deep/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-ivory hover:text-gold"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={items[active].src}
            alt={items[active].label}
            className="max-h-[85vh] max-w-full rounded-xl shadow-luxe"
          />
        </div>
      )}
    </section>
  );
}
