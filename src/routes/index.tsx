import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Heart, Crown, Home as HomeIcon, MessageCircle, Star, Instagram, ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroBride from "@/assets/hero-bride.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { CountUp, Reveal } from "@/components/motion-helpers";
import { SectionHeading } from "@/components/SectionHeading";
import { whatsappLink, SITE } from "@/lib/site";
import { testimonials } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divya Bridal Makeup Artist in Tiruvannamalai | HD Bridal Makeup" },
      { name: "description", content: "Premium HD bridal makeup, saree draping & hairstyling in Tiruvannamalai. 100+ happy brides. Book on WhatsApp now." },
      { property: "og:title", content: "Divya — Premium Bridal Makeup Artist in Tiruvannamalai" },
      { property: "og:description", content: "Expert HD bridal makeup, saree draping & hairstyling. 100+ happy brides." },
      { property: "og:image", content: heroBride },
      { name: "twitter:image", content: heroBride },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://divyabridal.in",
          name: "Divya Bridal Makeup Artist",
          image: heroBride,
          telephone: `+91${SITE.phonePrimary}`,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruvannamalai",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "100",
          },
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: Home,
});

const galleryImages = [g1, g2, g3, g4, g5, g6];

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChoose />
      <FeaturedGallery />
      <TestimonialsCarousel />
      <InstagramSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBride}
          alt="South Indian bride in red silk saree with HD bridal makeup"
          className="h-full w-full object-cover object-[center_20%] animate-ken-burns"
          width={1080}
          height={1920}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(40,10,20,0.55) 0%, rgba(40,10,20,0.35) 40%, rgba(40,10,20,0.85) 100%)" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8 pb-24 pt-32 md:justify-center md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-ivory"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold mb-5 ornament">
            Tiruvannamalai · Tamil Nadu
          </p>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance text-ivory">
            Premium Bridal Makeup Artist in Tiruvannamalai
          </h1>
          <p className="mt-5 text-base sm:text-xl font-serif-elegant text-ivory/85 italic max-w-xl">
            HD Makeup · Saree Draping · Hairstyling · Home Service
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-7 py-4 text-base font-semibold text-primary-foreground shadow-luxe hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/40 backdrop-blur-sm bg-ivory/10 px-7 py-4 text-base font-medium text-ivory hover:bg-ivory hover:text-burgundy transition-colors"
            >
              View Portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-divider z-10" />
    </section>
  );
}

function TrustBar() {
  const stats = [
    { num: 100, suffix: "+", label: "Happy Brides" },
    { num: 12, suffix: "+", label: "Premium Brands" },
    { num: 50, suffix: "+", label: "Venues Covered" },
    { num: 5, suffix: "★", label: "Avg. Rating" },
  ];
  return (
    <section className="bg-ivory py-14 sm:py-20 border-y border-gold/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="font-display text-4xl sm:text-5xl text-burgundy">
                <CountUp end={s.num} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const cards = [
    { icon: Crown, title: "Expert Bridal Makeup", desc: "Years of experience crafting timeless South Indian bridal looks." },
    { icon: Sparkles, title: "HD & Airbrush", desc: "Camera-ready finish using professional HD and airbrush techniques." },
    { icon: Heart, title: "Complete Package", desc: "Makeup, hair, draping & mehendi — one artist, total peace of mind." },
    { icon: HomeIcon, title: "Home Service", desc: "We come to your home or venue across Tamil Nadu." },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why brides choose Divya"
          title="Crafted with care, finished to perfection"
          subtitle="Every bride deserves an experience as beautiful as her wedding day."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-gold hover:-translate-y-1 hover:shadow-luxe">
                <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-burgundy-deep group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-burgundy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedGallery() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured looks"
          title="A glimpse of recent brides"
          subtitle="Each look custom-crafted to celebrate your individuality."
        />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {galleryImages.map((src, i) => (
            <Reveal key={src} delay={i * 0.06}>
              <div className={`relative overflow-hidden rounded-xl shadow-card-soft group ${i === 0 || i === 5 ? "md:row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}>
                <img
                  src={src}
                  alt={`Bridal makeup look ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-burgundy font-medium border-b-2 border-gold pb-1 hover:gap-3 transition-all"
          >
            View Full Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[idx];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-burgundy/10 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Words from our brides"
          title="Loved by real South Indian brides"
        />
        <Reveal delay={0.15}>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-3xl border border-gold/30 bg-card p-8 sm:p-12 shadow-luxe text-center"
          >
            <div className="flex justify-center gap-1 text-gold">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-6 font-serif-elegant italic text-lg sm:text-2xl text-charcoal leading-relaxed text-balance">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-6 gold-divider mx-auto w-16" />
            <p className="mt-4 font-display text-burgundy text-lg">{t.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
          </motion.div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-1.5 bg-burgundy/20"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-burgundy/20 text-burgundy hover:bg-burgundy hover:text-primary-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`@${SITE.instagram}`}
          title="Follow our latest work on Instagram"
        />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                loading="lazy"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy-deep/0 group-hover:bg-burgundy-deep/60 flex items-center justify-center transition-colors">
                <Instagram className="h-6 w-6 text-ivory opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl gradient-cta p-10 sm:p-16 text-center text-ivory shadow-luxe relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            <p className="relative text-xs uppercase tracking-[0.3em] text-gold-light mb-4">Limited Availability</p>
            <h2 className="relative font-display text-3xl sm:text-5xl text-ivory text-balance">
              Peak Bridal Dates Are Filling Fast
            </h2>
            <p className="relative mt-4 text-ivory/85 max-w-xl mx-auto font-serif-elegant text-lg">
              Reserve your wedding date today and let's begin crafting the look you've always dreamed of.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-ivory px-8 py-4 text-base font-semibold text-burgundy shadow-luxe hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-5 w-5" />
              Book Your Bridal Date Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
