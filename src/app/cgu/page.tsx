import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export const metadata = {
  title: "Conditions générales d’utilisation – Bella Beauty Sab",
  robots: "noindex",
};

export default function CguPage() {
  return (
    <Box py={20} fontFamily="heading">
      <Container maxW="container.md">
        <VStack align="start" spacing={6}>
          <Heading 
            size="xl" 
            color="gold.400"
            textTransform="uppercase" 
            textAlign="center"
            alignSelf="center"
          >
            Conditions Générales d’Utilisation
          </Heading>

          <Text>
            L’utilisation du site implique l’acceptation pleine et entière des
            présentes conditions générales d’utilisation.
          </Text>

          <Text>
            Le site Bella Beauty Sab a pour objet la présentation de prestations
            esthétiques et de formations professionnelles.
          </Text>

          <Text>
            <strong>Responsabilité :</strong><br />
            Les informations sont fournies à titre indicatif. L’éditeur ne saurait
            être tenu responsable des erreurs ou omissions.
          </Text>

          <Text>
            <strong>Droit applicable :</strong><br />
            Les présentes CGU sont soumises au droit français.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
