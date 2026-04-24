import { siteInfo } from "@/constants/content";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export const metadata = {
  title: "Politique de confidentialité – Bella Beauty Sab",
  robots: "noindex",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <Box py={20} fontFamily="heading">
      <Container maxW="container.md">
        <VStack align="start" spacing={6}>
          <Heading 
            size="xl" 
            color="gold.400"
            textTransform="uppercase" 
            textAlign="center"
            alignSelf="center">
            Politique de confidentialité
          </Heading>

          <Text>
            Les données personnelles collectées via le formulaire de contact sont
            utilisées uniquement pour répondre à votre demande.
          </Text>

          <Text>
            <strong>Données collectées :</strong><br />
            Nom, prénom, email, message.
          </Text>

          <Text>
            <strong>Durée de conservation :</strong><br />
            12 mois maximum.
          </Text>

          <Text>
            <strong>Droits :</strong><br />
            Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données.<br />
            Contact : {siteInfo.email}
          </Text>

          <Text>
            Le site n’utilise pas de cookies publicitaires ou de suivi.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
