import { formationsPageContent } from "@/constants/content";
import { FormationsHero } from "@/components/formations/FormationHero";
import { TrainerSection } from "@/components/formations/TrainerSection";
import { FormationsSection } from "@/components/formations/FormationsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Formations professionnelles beauté | Bella Beauty Sab",
    description:
        "Formations professionnelles en lissage capillaire et réhaussement de cils. Apprenez en présentiel avec une formatrice experte. Inscription sur demande.",
};

export default function FormationsPage() {
    return (
        <>
            <FormationsHero content={formationsPageContent.hero} />
            <TrainerSection content={formationsPageContent.trainer} />
            <FormationsSection formations={formationsPageContent.formations} />
        </>
    )
}