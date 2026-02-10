'use client';

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  List,
  ListItem,
  Divider,
  SimpleGrid,
  Image,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';

interface PrestationVariant {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string;
  price: string;
  duration: string;
}

interface PrestationTestimonial {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface PrestationDetailData {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  priceRange: string;

  introduction: {
    title: string;
    content: string;
  };

  diagnostic?: {
    title: string;
    content: string;
  };

  benefits: {
    title: string;
    list: string[];
  };

  process: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  forWhom: {
    title: string;
    content: string;
  };

  maintenance?: {
    title: string;
    tips: string[];
  };

  variants?: PrestationVariant[];
  images: string[];
  testimonials: PrestationTestimonial[];
}

interface PrestationDetailProps {
  prestation: PrestationDetailData;
}

export function PrestationDetail({ prestation }: PrestationDetailProps) {
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

          <Button as={Link} href="/rdv" colorScheme="gold" fontFamily="heading">
            Prendre rendez-vous
          </Button>
        </VStack>
      </Box>

      <Container maxW="container.xl" py={12}>
        <Stack spacing={12}>
          {/* INTRODUCTION */}
          <Box>
            <Heading size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.introduction.title}
            </Heading>
            <Text fontFamily="heading">{prestation.introduction.content}</Text>
          </Box>
          
          {/* DIAGNOSTIC */}
          {prestation.diagnostic && (
            <>
            <Divider />
            <Box>
              <Heading size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
                {prestation.diagnostic.title}
              </Heading>
              <Text fontFamily="heading">{prestation.diagnostic.content}</Text>
            </Box>
          </>
          )}

          <Divider />

          {/* BÉNÉFICES */}
          <Box>
            <Heading size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.benefits.title}
            </Heading>
            <List fontFamily="heading" spacing={2}>
              {prestation.benefits.list.map((item, index) => (
                <ListItem key={index}>• {item}</ListItem>
              ))}
            </List>
          </Box>

          <Divider />

          {/* PROCESSUS */}
          <Box>
            <Heading size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
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
            <Heading size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
              {prestation.forWhom.title}
            </Heading>
            <Text fontFamily="heading">{prestation.forWhom.content}</Text>
          </Box>


          {/* ENTRETIEN */}
          {prestation.maintenance && (
            <>
              <Divider />
              <Box>
                <Heading size="md" mb={4} textTransform="uppercase" textAlign="center" color="primary.400">
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
              <Heading size="md" mb={6} textTransform="uppercase" textAlign="center" color="primary.400">
                Nos formules
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
                    <Heading size="sm" mb={2}>
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

          {/* IMAGES */}
          {prestation.images.length > 0 && (
            <Box>
              <Heading size="md" mb={6} textTransform="uppercase" textAlign="center" color="primary.400">
                Nos réalisations
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {prestation.images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`${prestation.title} ${index + 1}`}
                    borderRadius="lg"
                    objectFit="cover"
                  />
                ))}
              </SimpleGrid>
            </Box>
          )}

          {/* AVIS */}
          {prestation.testimonials.length > 0 && (
            <Box>
              <Heading size="md" mb={6} textTransform="uppercase" textAlign="center" color="primary.400">
                Avis clientes
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
                    <Text fontFamily="heading" fontWeight="bold">{review.author}</Text>
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