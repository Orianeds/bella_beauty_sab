import { prestationsContent } from "@/constants/content";
import { PrestationsSection } from "@/components/prestations/PrestationsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prestations coiffure & beauté | Bella Beauty Sab",
  description:
    "Découvrez toutes les prestations : lissages professionnels, soins botox capillaires et réhaussement de cils.",
  openGraph : {
    title: "Prestations coiffure & beauté | Bella Beauty Sab",
    description:
    "Découvrez toutes les prestations : lissages professionnels, soins botox capillaires et réhaussement de cils.",
    type: "website"
  }
};

export default function PrestationsPage() {
    return (
        <PrestationsSection
            title={prestationsContent.title}
            description={prestationsContent.description}
            categories={prestationsContent.categories}
        />
    );
}