'use client';

import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";

export function FormationsHero({ content }: any) {
  return (
    <Box bg="primary.50" py={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <VStack spacing={6} textAlign="center">
          <Heading
            as="h1"
            color="gold.400"
            fontSize={{ base: "3xl", md: "4xl" }}
            textTransform="uppercase"
          >
            {content.title}
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" fontFamily="heading">
            {content.description}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
