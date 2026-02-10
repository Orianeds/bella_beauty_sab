'use client';

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
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
    >
      <VStack align="stretch" spacing={4} h="full">
        {/* Titre */}
        <Heading
          as="h3"
          textAlign="center"
          fontSize={{ base: "xl", md: "2xl" }}
          color="gold.400"
          fontFamily="body"
          textTransform="uppercase"
        >
          {service.name}
        </Heading>

        {/* Description */}
        <Text
          fontSize={{ base: "sm", md: "md" }}
          color="gray.600"
          fontFamily="heading"
          lineHeight="tall"
          flex={1}
          textAlign="center"
        >
          {service.description}
        </Text>

        {/* Bas de carte */}
 <HStack justify="space-between" align="center" pt={4}>
                     <Text
                         fontSize={{ base: 'lg', md: 'xl' }}
                         fontWeight="bold"
                         color="gold.400"
                         fontFamily="body"
                         textTransform="uppercase"
                     >
                         Tarif : {service.price}
                     </Text>

                     <HStack spacing={3}>
                         <Button
                             as={Link}
                             href={`/prestations/${service.slug}`}
                             variant="outline"
                             colorScheme="gold"
                             size={{ base: 'sm', md: 'md'}}
                             fontFamily="heading"
                             _hover={{
                                 bg: 'gold.50'
                             }}
                         >
                             En savoir +
                         </Button>

                         <Button
                             as={Link}
                             href="/rdv"
                             colorScheme="gold"
                             size={{ base: 'sm', md: 'md' }}
                             fontFamily="heading"
                         >
                             Réserver
                         </Button>
                     </HStack>
                 </HStack>
      </VStack>
    </Box>
  );
}