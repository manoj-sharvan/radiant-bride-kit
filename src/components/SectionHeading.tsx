import { Reveal } from "./motion-helpers";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Optional id so parent <section> can use aria-labelledby */
  titleId?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleId,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3 ornament">
          {eyebrow}
        </p>
      )}
      <h2
        id={titleId}
        className="font-display text-3xl sm:text-4xl md:text-5xl text-burgundy text-balance"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-serif-elegant text-balance">
          {subtitle}
        </p>
      )}
      <div aria-hidden="true" className="mt-6 mx-auto h-px w-24 gold-divider" />
    </Reveal>
  );
}

