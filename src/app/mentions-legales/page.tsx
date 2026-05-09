import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { siteInfo } from "@/constants/content";

export const metadata = {
  title: "Mentions légales – Bella Beauty Sab",
  robots: "noindex",
};

export default function MentionsLegalesPage() {
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
            Mentions légales
          </Heading>

          <Text>
            Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique, il est précisé aux utilisateurs du site
            l’identité des différents intervenants.
          </Text>

          <Text>
            <strong>Éditeur du site :</strong><br />
            Bella Beauty Sab<br />
            Responsable de publication : Mosbah Sabrina<br />
            Statut juridique : Auto-entrepreneur<br />
            Adresse : {siteInfo.address.fullAddress} <br />
            Email : {siteInfo.email} <br />
            Téléphone : {siteInfo.phone}
          </Text>

          <Text>
            <strong>Hébergement :</strong><br />
            L'hébergement du site est assuré par la société Netlify, Inc., dont le siège social est situé au 2325 3rd Street, Suite 296, San Francisco, 
            CA 94107, États-Unis — <Link href="https://www.netlify.com" isExternal aria-label="Netlify">https://www.netlify.com</Link>
          </Text>

          <Text>
            <strong>Propriété intellectuelle :</strong><br />
            L’ensemble du contenu du site est protégé par le droit d’auteur.
            Toute reproduction est interdite sans autorisation préalable.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
