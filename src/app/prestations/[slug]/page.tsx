import { prestationDetailsContent } from "@/constants/content";
import { notFound } from "next/navigation";
import { PrestationDetail } from "@/components/prestations/PrestationDetail";

interface Props {
    params: { slug: string };
}

export default function PrestationPage({ params }: Props) {
  const prestation =
    prestationDetailsContent[
      params.slug as keyof typeof prestationDetailsContent
    ];

  if (!prestation) {
    notFound();
  }

  return <PrestationDetail prestation={prestation} />;
}

// import { prestationDetailsContent } from "@/constants/content";
// import { Box, Heading, VStack, Text, HStack, Button, Container, Grid, GridItem, ListIcon, ListItem, List, Image } from "@chakra-ui/react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { FaCheckCircle, FaClock, FaEuroSign, FaStar } from "react-icons/fa";

// interface PrestationDetailPageProps {
//     params: {
//         slug: string;
//     };
// }

// interface Testimonial {
//     id: number;
//     author: string;
//     rating: number;
//     text: string;
//     date: string;
//     avatar: string;
// }

// interface Variant {
//     id: string;
//     name: string;
//     shortDescription: string;
//     description: string;
//     benefits: string;
//     price: string;
//     duration: string;
// }

// interface DetailComponent {
//     name: string;
//     description: string;
// }

// const PrestationDetailPage = ({ params }: PrestationDetailPageProps) => {
//     const { slug } = params;
//     const prestationData = prestationDetailsContent[slug as keyof typeof prestationDetailsContent];

//     if(!prestationData) {
//         notFound();
//     }

//     const {
//         title,
//         subtitle,
//         duration,
//         priceRange,
//         introduction,
//         benefits,
//         process,
//         forWhom,
//         images,
//         testimonials,
//     } = prestationData;

//     const diagnostic = 'diagnostic' in prestationData ? prestationData.diagnostic : undefined;
//     const maintenance = 'maintenance' in prestationData ? prestationData.maintenance : undefined;
//     const variants = 'variants' in prestationData ? prestationData.variants : undefined;
//     const details = 'details' in prestationData ? prestationData.details : undefined;

//     return (
//         <Box minH="100vh" bg="gray.50">
//             {/* Hero Section */}
//             <Box
//                 bgGradient="linear(to-r, primary.50, primary.100)"
//                 py={{ base: 12, md: 16 }}
//                 px={{ base: 4, md: 8 }}
//             >
//                 <VStack spacing={6} textAlign="center" maxW="container.xl" mx="auto">
//                     <Heading
//                         as="h1"
//                         fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                     >
//                         {title}
//                     </Heading>

//                     <Text
//                         fontSize={{ base: 'lg', md: 'xl' }}
//                         color="gray.700"
//                         fontFamily="heading"
//                         fontWeight="medium"
//                     >
//                         {subtitle}
//                     </Text>

//                     <HStack spacing={8} flexWrap="wrap" justify="center">
//                         <HStack>
//                         <FaClock color="var(--chakra-colors-gold-400)" size={24} />
//                         <Text
//                             fontSize={{ base: 'md', md: 'lg' }}
//                             fontFamily="body"
//                             fontWeight="bold"
//                         >
//                             Durée : {duration}
//                         </Text>
//                         </HStack>

//                         <HStack>
//                         <FaEuroSign color="var(--chakra-colors-gold-400)" size={24} />
//                         <Text
//                             fontSize={{ base: 'md', md: 'lg' }}
//                             fontFamily="body"
//                             fontWeight="bold"
//                         >
//                             {priceRange}
//                         </Text>
//                         </HStack>
//                     </HStack>

//                     <Button
//                         as={Link}
//                         href="/rdv"
//                         colorScheme="gold"
//                         size="lg"
//                         fontFamily="heading"
//                         mt={4}
//                     >
//                         Prendre rendez-vous
//                     </Button>
//                 </VStack>
//             </Box>

//             <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
//                 {/* Introduction */}
//                 <VStack spacing={12} align="stretch">
//                 <Box>
//                     <Heading
//                     as="h2"
//                     fontSize={{ base: '2xl', md: '3xl' }}
//                     color="gold.400"
//                     fontFamily="body"
//                     textTransform="uppercase"
//                     mb={4}
//                     >
//                     {introduction.title}
//                     </Heading>
//                     <Text
//                     fontSize={{ base: 'md', md: 'lg' }}
//                     color="gray.700"
//                     fontFamily="heading"
//                     lineHeight="tall"
//                     >
//                     {introduction.content}
//                     </Text>
//                 </Box>

//                 {/* Diagnostic (si présent) */}
//                 {diagnostic && (
//                     <Box bg="gold.50" p={{ base: 6, md: 8 }} borderRadius="xl">
//                     <Heading
//                         as="h3"
//                         fontSize={{ base: 'xl', md: '2xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         mb={4}
//                     >
//                         {diagnostic.title}
//                     </Heading>
//                     <Text
//                         fontSize={{ base: 'md', md: 'lg' }}
//                         color="gray.700"
//                         fontFamily="heading"
//                         lineHeight="tall"
//                     >
//                         {diagnostic.content}
//                     </Text>
//                     </Box>
//                 )}

//                 {/* Benefits */}
//                 <Box>
//                     <Heading
//                     as="h2"
//                     fontSize={{ base: '2xl', md: '3xl' }}
//                     color="gold.400"
//                     fontFamily="body"
//                     textTransform="uppercase"
//                     mb={6}
//                     >
//                     {benefits.title}
//                     </Heading>
//                     <Grid
//                     templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
//                     gap={4}
//                     >
//                     {benefits.list.map((benefit, index) => (
//                         <GridItem key={index}>
//                         <HStack align="start" spacing={3}>
//                             <ListIcon
//                             as={FaCheckCircle}
//                             color="gold.400"
//                             boxSize={5}
//                             mt={1}
//                             />
//                             <Text
//                             fontSize={{ base: 'md', md: 'lg' }}
//                             color="gray.700"
//                             fontFamily="heading"
//                             >
//                             {benefit}
//                             </Text>
//                         </HStack>
//                         </GridItem>
//                     ))}
//                     </Grid>
//                 </Box>

//                 {/* Process */}
//                 <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="md">
//                     <Heading
//                     as="h2"
//                     fontSize={{ base: '2xl', md: '3xl' }}
//                     color="gold.400"
//                     fontFamily="body"
//                     textTransform="uppercase"
//                     mb={6}
//                     textAlign="center"
//                     >
//                     {process.title}
//                     </Heading>
//                     <VStack spacing={6} align="stretch">
//                     {process.steps.map((step, index) => (
//                         <HStack key={index} align="start" spacing={4}>
//                         <Box
//                             bg="gold.400"
//                             color="white"
//                             borderRadius="full"
//                             w={10}
//                             h={10}
//                             display="flex"
//                             alignItems="center"
//                             justifyContent="center"
//                             fontWeight="bold"
//                             flexShrink={0}
//                         >
//                             {index + 1}
//                         </Box>
//                         <VStack align="start" spacing={1} flex={1}>
//                             <Text
//                             fontSize={{ base: 'lg', md: 'xl' }}
//                             fontWeight="bold"
//                             color="gray.800"
//                             fontFamily="body"
//                             >
//                             {step.title}
//                             </Text>
//                             <Text
//                             fontSize={{ base: 'sm', md: 'md' }}
//                             color="gray.600"
//                             fontFamily="heading"
//                             >
//                             {step.description}
//                             </Text>
//                         </VStack>
//                         </HStack>
//                     ))}
//                     </VStack>
//                 </Box>

//                 {/* For Whom */}
//                 <Box>
//                     <Heading
//                     as="h2"
//                     fontSize={{ base: '2xl', md: '3xl' }}
//                     color="gold.400"
//                     fontFamily="body"
//                     textTransform="uppercase"
//                     mb={4}
//                     >
//                     {forWhom.title}
//                     </Heading>
//                     <Text
//                     fontSize={{ base: 'md', md: 'lg' }}
//                     color="gray.700"
//                     fontFamily="heading"
//                     lineHeight="tall"
//                     >
//                     {forWhom.content}
//                     </Text>
//                 </Box>

//                 {/* Details (si présent - pour réhaussement) */}
//                 {details && (
//                     <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" boxShadow="md">
//                     <Heading
//                         as="h2"
//                         fontSize={{ base: '2xl', md: '3xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                         mb={6}
//                     >
//                         {details.title}
//                     </Heading>
//                     <VStack spacing={4} align="stretch">
//                         {details.components.map((component, index) => (
//                         <Box key={index}>
//                             <Text
//                             fontSize={{ base: 'lg', md: 'xl' }}
//                             fontWeight="bold"
//                             color="gray.800"
//                             fontFamily="body"
//                             mb={2}
//                             >
//                             {component.name}
//                             </Text>
//                             <Text
//                             fontSize={{ base: 'sm', md: 'md' }}
//                             color="gray.600"
//                             fontFamily="heading"
//                             >
//                             {component.description}
//                             </Text>
//                         </Box>
//                         ))}
//                     </VStack>
//                     </Box>
//                 )}

//                 {/* Variants */}
//                 {variants && variants.length > 0 && (
//                     <Box>
//                     <Heading
//                         as="h2"
//                         fontSize={{ base: '2xl', md: '3xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                         mb={6}
//                         textAlign="center"
//                     >
//                         Nos formules
//                     </Heading>
//                     <VStack spacing={6} align="stretch">
//                         {variants.map((variant) => (
//                         <Box
//                             key={variant.id}
//                             bg="white"
//                             p={{ base: 6, md: 8 }}
//                             borderRadius="xl"
//                             boxShadow="md"
//                         >
//                             <Heading
//                             as="h3"
//                             fontSize={{ base: 'xl', md: '2xl' }}
//                             color="gold.400"
//                             fontFamily="body"
//                             textTransform="uppercase"
//                             mb={2}
//                             >
//                             {variant.name}
//                             </Heading>
//                             <Text
//                             fontSize={{ base: 'sm', md: 'md' }}
//                             color="gray.600"
//                             fontFamily="heading"
//                             fontStyle="italic"
//                             mb={4}
//                             >
//                             {variant.shortDescription}
//                             </Text>
//                             <Text
//                             fontSize={{ base: 'md', md: 'lg' }}
//                             color="gray.700"
//                             fontFamily="heading"
//                             lineHeight="tall"
//                             mb={3}
//                             >
//                             {variant.description}
//                             </Text>
//                             <Text
//                             fontSize={{ base: 'md', md: 'lg' }}
//                             color="gray.700"
//                             fontFamily="heading"
//                             lineHeight="tall"
//                             mb={4}
//                             >
//                             {variant.benefits}
//                             </Text>
//                             <HStack justify="space-between" flexWrap="wrap">
//                             <VStack align="start" spacing={1}>
//                                 <Text
//                                 fontSize={{ base: 'lg', md: 'xl' }}
//                                 fontWeight="bold"
//                                 color="gold.400"
//                                 fontFamily="body"
//                                 >
//                                 {variant.price}
//                                 </Text>
//                                 <Text
//                                 fontSize={{ base: 'sm', md: 'md' }}
//                                 color="gray.600"
//                                 fontFamily="heading"
//                                 >
//                                 Durée : {variant.duration}
//                                 </Text>
//                             </VStack>
//                             <Button
//                                 as={Link}
//                                 href="/rdv"
//                                 colorScheme="gold"
//                                 size={{ base: 'sm', md: 'md' }}
//                                 fontFamily="heading"
//                             >
//                                 Réserver
//                             </Button>
//                             </HStack>
//                         </Box>
//                         ))}
//                     </VStack>
//                     </Box>
//                 )}

//                 {/* Maintenance */}
//                 {maintenance && (
//                     <Box bg="gold.50" p={{ base: 6, md: 8 }} borderRadius="xl">
//                     <Heading
//                         as="h2"
//                         fontSize={{ base: '2xl', md: '3xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                         mb={6}
//                     >
//                         {maintenance.title}
//                     </Heading>
//                     <List spacing={3}>
//                         {maintenance.tips.map((tip, index) => (
//                         <ListItem key={index}>
//                             <HStack align="start" spacing={3}>
//                             <ListIcon
//                                 as={FaCheckCircle}
//                                 color="gold.400"
//                                 boxSize={5}
//                                 mt={1}
//                             />
//                             <Text
//                                 fontSize={{ base: 'md', md: 'lg' }}
//                                 color="gray.700"
//                                 fontFamily="heading"
//                             >
//                                 {tip}
//                             </Text>
//                             </HStack>
//                         </ListItem>
//                         ))}
//                     </List>
//                     </Box>
//                 )}

//                 {/* Photos */}
//                 {images && images.length > 0 && (
//                     <Box>
//                     <Heading
//                         as="h2"
//                         fontSize={{ base: '2xl', md: '3xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                         mb={6}
//                         textAlign="center"
//                     >
//                         Nos Réalisations
//                     </Heading>
//                     <Grid
//                         templateColumns={{
//                         base: '1fr',
//                         md: 'repeat(2, 1fr)',
//                         lg: 'repeat(3, 1fr)',
//                         }}
//                         gap={6}
//                     >
//                         {images.map((image, index) => (
//                         <GridItem key={index}>
//                             <Box
//                             borderRadius="xl"
//                             overflow="hidden"
//                             boxShadow="md"
//                             transition="all 0.3s"
//                             _hover={{
//                                 transform: 'scale(1.05)',
//                                 boxShadow: 'xl',
//                             }}
//                             >
//                             <Image
//                                 src={image}
//                                 alt={`${title} - Réalisation ${index + 1}`}
//                                 w="full"
//                                 h="300px"
//                                 objectFit="cover"
//                             />
//                             </Box>
//                         </GridItem>
//                         ))}
//                     </Grid>
//                     </Box>
//                 )}

//                 {/* Testimonials */}
//                 {testimonials && testimonials.length > 0 && (
//                     <Box>
//                     <Heading
//                         as="h2"
//                         fontSize={{ base: '2xl', md: '3xl' }}
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                         mb={6}
//                         textAlign="center"
//                     >
//                         Avis Clients
//                     </Heading>
//                     <VStack spacing={6} align="stretch">
//                         {testimonials.map((testimonial) => (
//                         <Box
//                             key={testimonial.id}
//                             bg="white"
//                             p={{ base: 6, md: 8 }}
//                             borderRadius="xl"
//                             boxShadow="md"
//                         >
//                             <HStack justify="space-between" mb={4} flexWrap="wrap">
//                             <VStack align="start" spacing={1}>
//                                 <Text
//                                 fontSize={{ base: 'lg', md: 'xl' }}
//                                 fontWeight="bold"
//                                 color="gray.800"
//                                 fontFamily="body"
//                                 >
//                                 {testimonial.author}
//                                 </Text>
//                                 <Text
//                                 fontSize={{ base: 'xs', md: 'sm' }}
//                                 color="gray.500"
//                                 fontFamily="heading"
//                                 >
//                                 {testimonial.date}
//                                 </Text>
//                             </VStack>
//                             <HStack>
//                                 {Array.from({ length: testimonial.rating }).map((_, i) => (
//                                 <FaStar key={i} color="var(--chakra-colors-gold-400)" />
//                                 ))}
//                             </HStack>
//                             </HStack>
//                             <Text
//                             fontSize={{ base: 'sm', md: 'md' }}
//                             color="gray.700"
//                             fontFamily="heading"
//                             lineHeight="tall"
//                             >
//                             {testimonial.text}
//                             </Text>
//                         </Box>
//                         ))}
//                     </VStack>
//                     </Box>
//                 )}

//                 {/* CTA Final */}
//                 <Box
//                     bg="gold.400"
//                     p={{ base: 8, md: 12 }}
//                     borderRadius="xl"
//                     textAlign="center"
//                 >
//                     <Heading
//                     as="h2"
//                     fontSize={{ base: '2xl', md: '3xl' }}
//                     color="white"
//                     fontFamily="body"
//                     mb={4}
//                     >
//                     Prête à sublimer votre beauté ?
//                     </Heading>
//                     <Text
//                     fontSize={{ base: 'md', md: 'lg' }}
//                     color="white"
//                     fontFamily="heading"
//                     mb={6}
//                     >
//                     Prenez rendez-vous dès maintenant pour profiter de cette prestation
//                     </Text>
//                     <Button
//                     as={Link}
//                     href="/rdv"
//                     size="lg"
//                     bg="white"
//                     color="gold.400"
//                     fontFamily="heading"
//                     _hover={{
//                         bg: 'gray.100',
//                     }}
//                     >
//                     Réserver maintenant
//                     </Button>
//                 </Box>
//                 </VStack>
//             </Container>
//         </Box>
//     )
// }

// export default PrestationDetailPage;