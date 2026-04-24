'use client';

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { PrestationsCategory } from "./PrestationsCategory";
import { PrestationsSectionProps } from "@/dto/prestation/prestation.types";


export function PrestationsSection({ title, description, categories }: PrestationsSectionProps) {
    return (
    <Box bg="gray.50" minH="100vh">
      {/* Header */}
      <Box bg="primary.50" py={16}>
        <VStack spacing={4} textAlign="center">
          <Heading color="gold.400" fontFamily="body" textTransform="uppercase">{title}</Heading>
          <Text maxW="3xl" fontFamily="heading">{description}</Text>
        </VStack>
      </Box>

      {/* Categories */}
      <Container maxW="container.xl" py={12}>
        {categories.map((category: any) => (
          <PrestationsCategory key={category.id} category={category} />
        ))}
      </Container>
    </Box>
    );
}