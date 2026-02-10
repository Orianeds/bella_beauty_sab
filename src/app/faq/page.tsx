import { Metadata } from "next";
import { faqCategories } from "@/constants/faq";
import { FaqSection } from "@/components/faq/FaqSection";

export const metadata: Metadata = {
  title: "FAQ | Bella Beauty Sab",
  description:
    "Toutes les réponses à vos questions sur les lissages capillaires, soins botox et prestations beauté.",
};

export default function FaqPage() {
  return <FaqSection />;
}
