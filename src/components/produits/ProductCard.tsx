'use client';

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Product } from "@/dto/produits/produit.types";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <Box
      bg="white"
      p={{ base: 6, md: 8 }}
      borderRadius="xl"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{
        boxShadow: "xl",
        transform: "translateY(-4px)",
      }}
      w="full"
      maxW="1100px"
      mx="auto"
    >
      <HStack
        spacing={8}
        align="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Image */}
        <Box
          flexShrink={0}
          w={{ base: "100%", md: "200px" }}
          h={{ base: "auto", md: "200px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={product.image}
            alt={product.name}
            w="100%"
            h="100%"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>

        {/* Contenu */}
        <VStack align="stretch" spacing={4} flex={1}>
          <Heading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            // color="gold.400"
            fontFamily="heading"
            textTransform="uppercase"
            textAlign="center"          
          >
            {product.name}
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            fontFamily="heading"
            lineHeight="tall"
            whiteSpace="pre-line"
          >
            {product.description}
          </Text>

          {product.property && (
            <Box>
              <Heading
                as="h4"
                fontSize="sm"
                mb={2}
                textTransform="uppercase"
                color="gold.400"
                fontFamily="heading"
                textAlign="center"
              >
                {product.property_title ?? "Propriétés & bénéfices"}
              </Heading>

              <List fontFamily="heading" spacing={1}>
                {product.property.map((item, index) => (
                  <ListItem key={index} fontSize="sm" color="gray.600">
                    • {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {product.how_to_use && (
            <Box>
              <Heading
                as="h4"
                fontSize="sm"
                mb={2}
                textTransform="uppercase"
                color="gold.400"
                fontFamily="heading"
                textAlign="center"
              >
                {product.how_to_use_title ?? "Utilisation"}
              </Heading>

              <Text
                fontSize="sm"
                color="gray.600"
                whiteSpace="pre-line"
                fontFamily="heading"
              >
                {product.how_to_use}
              </Text>
            </Box>
          )}

          {product.quantity && (
            <Text
              fontSize="md"
              fontWeight="bold"
              color="gold.400"
              textTransform="uppercase"
              fontFamily="body"
            >
              {product.quantity_title ?? "Quantité"} : {product.quantity}
            </Text>
          )}
        </VStack>
      </HStack>
    </Box>
  );
};
