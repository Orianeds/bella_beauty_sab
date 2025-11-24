'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Input,
  Badge,
} from '@chakra-ui/react';
import { Button } from '@/components/ui/CustomButton';

export default function Home() {
  return (
    <Box>
      {/* Navbar */}
      <Box bg="primary.400" color="white" py={4}>
        <Container maxW="7xl">
          <HStack justify="space-between">
            <Text fontSize="xl" fontWeight="bold" fontFamily="heading">
              BELLA BEAUTY SAB
            </Text>
            <HStack gap={8} fontFamily="heading" fontSize="sm">
              <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Accueil</Text>
              <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Formations Lissage</Text>
              <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Prestations</Text>
              <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Société</Text>
              <Text cursor="pointer" _hover={{ color: 'gold.200' }}>FAQ</Text>
              <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Contact</Text>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Hero */}
      <Box bg="white" py={20}>
        <Container maxW="7xl" textAlign="center">
          <Heading size="4xl" mb={4}>
            Formations & Prestations de Lissage
          </Heading>
          <Text fontSize="xl" color="gray.700" mb={8} maxW="2xl" mx="auto">
            Découvrez nos formations certifiantes et nos prestations haut de gamme
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} gap={4} justify="center">
            <Button size="lg">
              Nos Formations
            </Button>
            <Button variant="outline" size="lg">
              Nos Prestations
            </Button>
          </Stack>
        </Container>
      </Box>

    {/* Contenu principal */}
      <Container maxW="7xl" py={16}>
        <VStack gap={16} align="stretch">
          
          {/* Test des titres (en or #D7B175) */}
          <Box>
            <Heading size="3xl" mb={6}>
              Nos Titres en Or Champagne
            </Heading>
            <Stack gap={4}>
              <Heading size="2xl">Formation Lissage Brésilien</Heading>
              <Heading size="xl">Devenez Expert en Lissage</Heading>
              <Heading size="lg">Programme Complet 2 Jours</Heading>
              <Heading size="md">Certification Professionnelle</Heading>
            </Stack>
            
            <Box my={8} h="1px" bg="primary.200" />
            
            <Text fontSize="lg" color="black">
              Le texte principal est en noir avec la police Old Standard TT, 
              élégante et lisible. Parfait pour un contenu professionnel dans 
              le domaine de la beauté et du bien-être.
            </Text>
          </Box>

          {/* Test des boutons */}
          <Box>
            <Heading size="xl" mb={6}>
              Nos Boutons
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
              <Button>Bouton Or (CTA)</Button>
              <Button variant="primary">Bouton Beige</Button>
              <Button variant="outline">Bouton Outline</Button>
              <Button variant="ghost">Bouton Ghost</Button>
            </SimpleGrid>
            
            <Heading size="lg" mt={8} mb={4}>
              Différentes Tailles
            </Heading>
            <Stack direction="row" gap={4}>
              <Button size="sm">Petit</Button>
              <Button size="md">Moyen</Button>
              <Button size="lg">Grand</Button>
            </Stack>
          </Box>

          {/* Test des cartes */}
          <Box>
            <Heading size="xl" mb={6}>
              Cartes Prestations
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
              
              <Box 
                p={6} 
                bg="white" 
                borderRadius="xl" 
                shadow="md"
                transition="all 0.3s"
                _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              >
                <Heading size="lg" mb={3}>
                  Formation Lissage
                </Heading>
                <Text mb={4}>
                  Maîtrisez toutes les techniques professionnelles du lissage 
                  brésilien.
                </Text>
                <HStack gap={2} mb={4}>
                  <Badge colorScheme="green">2 jours</Badge>
                  <Badge colorScheme="blue">Certifiant</Badge>
                </HStack>
                <Text fontWeight="bold" fontSize="3xl" color="gold.400" mb={4}>
                  890€
                </Text>
                <Button width="full">S'inscrire</Button>
              </Box>

              <Box 
                p={6} 
                bg="white" 
                borderRadius="xl" 
                shadow="md"
                transition="all 0.3s"
                _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              >
                <Heading size="lg" mb={3}>
                  Lissage Brésilien
                </Heading>
                <Text mb={4}>
                  Prestation professionnelle longue durée pour des cheveux soyeux.
                </Text>
                <HStack gap={2} mb={4}>
                  <Badge colorScheme="purple">3h</Badge>
                  <Badge colorScheme="orange">Premium</Badge>
                </HStack>
                <Text fontWeight="bold" fontSize="3xl" color="gold.400" mb={4}>
                  250€
                </Text>
                <Button variant="primary" width="full">Réserver</Button>
              </Box>

              <Box 
                p={6} 
                bg="white" 
                borderRadius="xl" 
                borderWidth="2px"
                borderColor="gold.400"
                transition="all 0.3s"
                _hover={{ shadow: 'lg' }}
              >
                <Heading size="lg" mb={3}>
                  Botox Capillaire
                </Heading>
                <Text mb={4}>
                  Traitement régénérant pour cheveux abîmés.
                </Text>
                <HStack gap={2} mb={4}>
                  <Badge colorScheme="pink">2h</Badge>
                  <Badge colorScheme="teal">Sans formol</Badge>
                </HStack>
                <Text fontWeight="bold" fontSize="3xl" color="gold.400" mb={4}>
                  180€
                </Text>
                <Button variant="outline" width="full">En savoir plus</Button>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Test du formulaire */}
          <Box>
            <Heading size="xl" mb={6}>
              Formulaire de Contact
            </Heading>
            <Box 
              maxW="md" 
              mx="auto" 
              p={8} 
              borderWidth="1px" 
              borderColor="primary.200" 
              borderRadius="xl"
            >
              <Stack gap={4}>
                <Box>
                  <Text mb={2} fontWeight="semibold">Votre nom</Text>
                  <Input placeholder="Jean Dupont" />
                </Box>
                <Box>
                  <Text mb={2} fontWeight="semibold">Votre email</Text>
                  <Input placeholder="jean@exemple.fr" type="email" />
                </Box>
                <Box>
                  <Text mb={2} fontWeight="semibold">Votre message</Text>
                  <Input 
                    placeholder="Bonjour, je souhaite..." 
                    height="120px"
                  />
                </Box>
                <Button width="full" size="lg">
                  Envoyer le message
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Palette de couleurs */}
          <Box>
            <Heading size="xl" mb={6}>
              Palette de Couleurs
            </Heading>
            
            <Text mb={4} fontWeight="bold" fontSize="lg">
              Beige Rosé (Navbar/Footer) - #D3B8A5
            </Text>
            <SimpleGrid columns={{ base: 5, md: 10 }} gap={2} mb={8}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Box
                  key={shade}
                  bg={`primary.${shade}`}
                  h="80px"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={shade >= 400 ? 'white' : 'black'}
                  fontSize="xs"
                  fontWeight="bold"
                  flexDirection="column"
                  borderWidth={shade === 400 ? '3px' : '0'}
                  borderColor="gold.400"
                >
                  <Text>{shade}</Text>
                  {shade === 400 && <Text fontSize="10px">★</Text>}
                </Box>
              ))}
            </SimpleGrid>

            <Text mb={4} fontWeight="bold" fontSize="lg">
              Or Champagne (Titres) - #D7B175
            </Text>
            <SimpleGrid columns={{ base: 5, md: 10 }} gap={2}>
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                <Box
                  key={shade}
                  bg={`gold.${shade}`}
                  h="80px"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color={shade >= 500 ? 'white' : 'black'}
                  fontSize="xs"
                  fontWeight="bold"
                  flexDirection="column"
                  borderWidth={shade === 400 ? '3px' : '0'}
                  borderColor="primary.400"
                >
                  <Text>{shade}</Text>
                  {shade === 400 && <Text fontSize="10px">★</Text>}
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Test des polices */}
          <Box>
            <Heading size="xl" mb={6}>
              Test des Polices
            </Heading>
            
            <Box p={6} bg="gray.50" borderRadius="lg" mb={4}>
              <Text fontFamily="heading" fontSize="2xl" fontWeight="bold" mb={2}>
                Montserrat (Titres & Boutons)
              </Text>
              <Text fontFamily="heading" fontSize="lg">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </Text>
            </Box>

            <Box p={6} bg="primary.50" borderRadius="lg">
              <Text fontFamily="body" fontSize="2xl" fontWeight="bold" mb={2}>
                Old Standard TT (Corps de texte)
              </Text>
              <Text fontFamily="body" fontSize="lg">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789<br />
                <br />
                Cette police élégante et classique apporte une touche raffinée 
                à votre contenu, parfaite pour un site de beauté professionnel.
              </Text>
            </Box>
          </Box>

        </VStack>
      </Container>

      {/* Footer (beige rosé #D3B8A5 avec texte blanc) */}
      <Box bg="primary.400" color="white" py={12} mt={16}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box>
              <Text fontFamily="heading" fontSize="xl" fontWeight="bold" mb={4}>
                BELLA BEAUTY
              </Text>
              <Text fontSize="sm">
                Formations et prestations de lissage professionnel
              </Text>
            </Box>
            <Box>
              <Text fontFamily="heading" fontWeight="bold" mb={4}>
                Navigation
              </Text>
              <Stack gap={2} fontSize="sm">
                <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Accueil</Text>
                <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Formations</Text>
                <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Prestations</Text>
                <Text cursor="pointer" _hover={{ color: 'gold.200' }}>Contact</Text>
              </Stack>
            </Box>
            <Box>
              <Text fontFamily="heading" fontWeight="bold" mb={4}>
                Contact
              </Text>
              <Stack gap={2} fontSize="sm">
                <Text>📍 123 Rue de la Beauté, Paris</Text>
                <Text>📞 01 23 45 67 89</Text>
                <Text>✉️ contact@bellabeauty.fr</Text>
              </Stack>
            </Box>
          </SimpleGrid>
          <Box my={8} h="1px" bg="whiteAlpha.300" />
          <Text textAlign="center" fontSize="sm">
            © 2025 Bella Beauty - Tous droits réservés
          </Text>
        </Container>
      </Box>  
    </Box>
  );  
}
