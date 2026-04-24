import { productContent } from "@/constants/product";
import { ProductsSection } from "@/components/produits/ProductsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produits capillaires professionnels | Bella Beauty Sab",
  description:
    "Découvrez les produits capillaires professionnels utilisés chez Bella Beauty Sab : lissages, soins botox et traitements experts pour sublimer vos cheveux.",
  openGraph: {
    title: "Produits capillaires professionnels | Bella Beauty Sab",
    description:
      "Découvrez les produits capillaires professionnels utilisés chez Bella Beauty Sab : lissages, soins botox et traitements experts pour sublimer vos cheveux.",
    type: "website",
  },
};

export default function PrestationsPage() {
    return (
        <ProductsSection content={productContent} />
    );
}