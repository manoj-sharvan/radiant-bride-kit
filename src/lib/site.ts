export const SITE = {
  name: "Divya Bridal Makeup Artist",
  tagline: "Premium Bridal Makeup Artist in Tiruvannamalai",
  location: "Tiruvannamalai, Tamil Nadu",
  phonePrimary: "8838114951",
  phoneSecondary: "8667671121",
  whatsappNumber: "918838114951",
  instagram: "divya_bridalmakeupartist",
  instagramUrl: "https://instagram.com/divya_bridalmakeupartist",
  email: "bookings@divyabridal.in",
} as const;

export const whatsappLink = (
  message = "Hello Divya! I'd like to book your bridal makeup services."
) => `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const telLink = (phone: string = SITE.phonePrimary) => `tel:+91${phone}`;
