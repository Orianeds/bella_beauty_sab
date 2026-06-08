'use client';
import { PrestationDetailProps } from '@/dto/prestation/prestation-detail.types';
import { MediaGallery } from "../ui/MediaGallery";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  List,
  ListItem,
  Divider,
  SimpleGrid,
  HStack,
  Button,
  Link,
  Center
} from '@chakra-ui/react';
import { PrestationsButtons } from '../ui/PrestationsButtons';
import { siteInfo } from '@/constants/content';
import { StarIcon } from '@chakra-ui/icons';

export function PrestationDetail({ prestation, defaultMedia }: PrestationDetailProps) {
  
  return (
    <Box bg="gray.50" minH="100vh">
      {/* HERO */}
      <Box bg="primary.50" py={16}>
        <VStack spacing={4} textAlign="center">
          <Heading color="gold.400" textTransform="uppercase">{prestation.title}</Heading>
          <Text  textTransform="uppercase" fontFamily="heading">{prestation.subtitle}</Text>

          <HStack spacing={6} justify="center">
            <Text fontWeight="bold" fontFamily="heading">Durée : {prestation.duration}</Text>
            <Text fontWeight="bold" fontFamily="heading">{prestation.priceRange}</Text>
          </HStack>

          <PrestationsButtons />
        </VStack>
      </Box>

      <Container maxW="container.xl" py={12}>
        <Stack spacing={12}>
          {/* INTRODUCTION */}
          <Box>
            <Heading as="h2" size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.introduction.title}
            </Heading>
            <Text fontFamily="heading">{prestation.introduction.content}</Text>
          </Box>
          
          {/* DIAGNOSTIC */}
          {prestation.diagnostic && (
            <>
            <Divider />
            <Box>
              <Heading as="h2" size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
                {prestation.diagnostic.title}
              </Heading>
              <Text fontFamily="heading">{prestation.diagnostic.content}</Text>
            </Box>
          </>
          )}

          <Divider />

          {/* BÉNÉFICES */}
          <Box>
            <Heading as="h2" size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.benefits.title}
            </Heading>
            <List fontFamily="heading" spacing={2}>
              {prestation.benefits.list.map((item, index) => (
                <ListItem key={index}>• {item}</ListItem>
              ))}
            </List>
          </Box>

          <Divider />

          {/* MEDIA (images + vidéos) */}
          {(prestation.mediaGroups?.length ?? 0) > 0 && (
            <Box>
              <Heading size="md" mb={6} textAlign="center" color="primary.400" textTransform="uppercase">
                Des transformations visibles dès la première prestation
              </Heading>

              <MediaGallery
                groups={prestation.mediaGroups ?? []}
                defaultGroupId={defaultMedia}
              />
              
              <Center w="full" pt={4}>
                    <Button 
                     as={Link} 
                     href={siteInfo.socialLinks.instagram} 
                     target="_blank" 
                     colorScheme="gold" 
                     textTransform="uppercase"
                    >
                        Voir plus de résultats sur Instagram
                    </Button>
              </Center>
            </Box>
          )}

          <Divider />

          {/* PROCESSUS */}
          <Box>
            <Heading as="h2" size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.process.title}
            </Heading>
            <Stack fontFamily="heading" spacing={4}>
              {prestation.process.steps.map((step, index) => (
                <Box key={index}>
                  <Text fontWeight="bold">{step.title}</Text>
                  <Text>{step.description}</Text>
                </Box>
              ))}
            </Stack>
          </Box>

          <Divider />

          {/* POUR QUI */}
          <Box>
            <Heading as="h2" size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.forWhom.title}
            </Heading>
            <Text fontFamily="heading">{prestation.forWhom.content}</Text>
          </Box>


          {/* ENTRETIEN */}
          {prestation.maintenance && (
            <>
              <Divider />
              <Box>
                <Heading as="h2" size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
                  {prestation.maintenance.title}
                </Heading>
                <List fontFamily="heading" spacing={2}>
                  {prestation.maintenance.tips.map((tip, index) => (
                    <ListItem key={index}>• {tip}</ListItem>
                  ))}
                </List>
              </Box>
            </>
          )}

          <Divider />

          {/* VARIANTES */}
          {prestation.variants && (
            <Box>
              <Heading as="h2" size="md" mb={6} textTransform="uppercase" textAlign="center" color="primary.400">
                Mes formules
              </Heading>

              <Stack spacing={6}>
                {prestation.variants.map((variant) => (
                  <Box
                    key={variant.id}
                    p={6}
                    bg="white"
                    borderRadius="lg"
                    boxShadow="sm"
                  >
                    <Heading as="h3" size="sm" mb={2}>
                      {variant.name}
                    </Heading>

                    <Text fontSize="sm" color="gray.600" mb={2} fontFamily="heading">
                      {variant.shortDescription}
                    </Text>

                    <Text mb={2} fontFamily="heading">{variant.description}</Text>
                    <Text mb={3} fontFamily="heading">{variant.benefits}</Text>

                    <Text fontWeight="bold" color="gold.400" fontFamily="heading">
                      Tarif : {variant.price} — Durée : {variant.duration}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          )}

          <Divider />

          {/* AVIS */}
          {prestation.testimonials.length > 0 && (
            <Box>
              <Heading as="h2" size="md" mb={6} textTransform="uppercase" textAlign="center" color="primary.400">
                Des résultats visibles, des clientes satisfaites et un accompagnement personnalisé à chaque rendez-vous.
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {prestation.testimonials.map((review) => (
                  <Box
                    key={review.id}
                    p={4}
                    bg="white"
                    borderRadius="md"
                    boxShadow="sm"
                  >
                    <HStack justify="space-between" align="center">
                      <Text fontFamily="heading" fontWeight="bold">{review.author}</Text>

                      <HStack spacing={1}>
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            color={index < review.rating ? "gold.400" : "gray.300"}
                            boxSize={4}
                          />
                        ))}
                      </HStack>
                    </HStack>
                    

                    <Text fontFamily="heading" fontSize="sm" color="gray.500">
                      {review.date}
                    </Text>
                    <Text fontFamily="heading" mt={2}>{review.text}</Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}