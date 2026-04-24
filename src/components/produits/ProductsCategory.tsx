import { VStack, Heading } from "@chakra-ui/react";
import { ProductCategory as ProductCategoryType } from "@/dto/produits/produit.types";
import { ProductCard } from "./ProductCard";

interface Props {
  category: ProductCategoryType;
}

export const ProductsCategory = ({ category }: Props) => {
  return (
    <VStack spacing={10} align="stretch">
      <Heading as="h2" size="lg" textAlign="center" textTransform="uppercase" fontFamily="body" color="gold.400">
        {category.title}
      </Heading>

      {category.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </VStack>
  );
};
