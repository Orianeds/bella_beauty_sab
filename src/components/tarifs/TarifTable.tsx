'use client';

import { TarifTableProps } from "@/dto/tarifs/tarifs.types";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Text
} from "@chakra-ui/react";
import Link from "next/link";

export function TarifTable({ tarifs }: TarifTableProps) {
  return (
    <Container maxW="6xl" py={{ base: 10, md: 16 }}>
      {/* Titre SEO */}
      <Heading
        as="h1"
        textAlign="center"
        mb={10}
        color="gold.400"
        fontFamily="body"
        textTransform="uppercase"
      >
        Tarifs des prestations
      </Heading>

      <Box
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        overflowX="auto"
      >
        
        <Table variant="simple" fontFamily="heading">
          <Thead bg="gray.50">
            <Tr>
              <Th>Prestation</Th>
              <Th>Tarif</Th>
              <Th textAlign="center">Détails</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tarifs.map((tarif) => (
              <Tr key={`${tarif.slug}-${tarif.name}`}>
                <Td fontWeight="medium">{tarif.name}</Td>

                <Td color="gold.400" fontWeight="bold">
                  {tarif.price}
                </Td>

                <Td textAlign="center">
                  <Button
                    as={Link}
                    href={`/prestations/${tarif.slug}?media=${tarif.mediaId}`}
                    size="sm"
                    variant="outline"
                    colorScheme="gold"
                  >
                    Voir +
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Text
        fontWeight="bold"
        textAlign="center"
        mt={8}
        fontFamily="heading"
      >
        Le tarif final est confirmé après diagnostic selon la longueur, l'épaisseur et le besoin du cheveu.
      </Text>
    </Container>
  );
}
