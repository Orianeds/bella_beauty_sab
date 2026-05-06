'use client';

import { bookingLink } from "@/constants/content";
import { ServiceCardProps } from "@/dto/prestation/service.types";
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BookingButtons } from "../ui/BookingButtons";



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
        <VStack pt={4} spacing={4} align="stretch">

          {/* Ligne 1 */}
          <HStack justify="space-between" align="center">
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="bold"
              color="gold.400"
              fontFamily="body"
              textTransform="uppercase"
            >
              Tarif : {service.price}
            </Text>

            <Button
              as={Link}
              href={`/prestations/${service.slug}?media=${service.id}`}
              variant="outline"
              colorScheme="gold"
              size={{ base: 'sm', md: 'md'}}
              fontFamily="heading"
              _hover={{ bg: 'gold.50' }}
              whiteSpace="normal"
              textAlign="center"
              height="auto"
              py={2}
            >
              <Text display={{ base: 'block', md: 'none' }}>En savoir plus</Text>
              <Text display={{ base: 'none', md: 'block' }}>En savoir plus sur {service.name}</Text>
            </Button>
          </HStack>

          {/* Ligne 2 */}
          <BookingButtons />

        </VStack>  
      </VStack>
    </Box>
  );
}