import { Metadata } from "next";
import { getTarifs } from "@/constants/selectors";
import { TarifTable } from "@/components/tarifs/TarifTable";

export const metadata: Metadata = {
  title: "Tarifs des prestations | Bella Beauty Sab",
  description:
    "Consultez les tarifs des prestations beauté : lissages capillaires, soins botox et réhaussement de cils. Prestations professionnelles à Savenay.",
};

export default function TarifsPage() {
  const tarifs = getTarifs();

  return <TarifTable tarifs={tarifs} />;
}
