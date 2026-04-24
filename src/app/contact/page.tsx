import { ContactSection } from '@/components/contact/ContactSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & inscription formations | Bella Beauty Sab",
  description:
    "Contactez Bella Beauty Sab pour vos prestations ou inscriptions aux formations. Réponse rapide par email.",
  openGraph : {
  title: "Contact & inscription formations | Bella Beauty Sab",
  description:
    "Contactez Bella Beauty Sab pour vos prestations ou inscriptions aux formations. Réponse rapide par email.",
  type: "website"
  }
};


export default function ContactPage() {
  return <ContactSection />;
}