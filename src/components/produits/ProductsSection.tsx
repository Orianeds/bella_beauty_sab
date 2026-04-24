import { VStack, Heading } from "@chakra-ui/react";
import { ProductContent } from "@/dto/produits/produit.types";
import { ProductsCategory } from "./ProductsCategory";

interface Props {
  content: ProductContent;
}

export const ProductsSection = ({ content }: Props) => {
  return (
    <VStack spacing={16} align="stretch">
      <Heading as="h1" size="xl" textAlign="center" textTransform="uppercase" color="gold.400">
        {content.title}
      </Heading>

      {content.categories.map((category) => (
        <ProductsCategory key={category.id} category={category} />
      ))}
    </VStack>
  );
};
