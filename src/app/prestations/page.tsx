import { prestationsContent } from "@/constants/content";
import { PrestationsSection } from "@/components/prestations/PrestationsSection";

export default function PrestationsPage() {
    return (
        <PrestationsSection
            title={prestationsContent.title}
            description={prestationsContent.description}
            categories={prestationsContent.categories}
        />
    );
}

// import { prestationsContent } from "@/constants/content";
// import { Box, Button, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
// import Link from "next/link";

// interface Service {
//     id: string;
//     name: string;
//     description: string;
//     price: string;
// }

// interface Category {
//     id: string;
//     title: string;
//     services: Service[];
// }

// interface ServiceCardProps {
//     service: Service;
//     categoryId: string;
// }

// const getCategorySlug = (categoryId: string): string => {
//     const slugMap: Record<string, string> = {
//         'lissages': 'lissages',
//         'botox': 'soins-botox',
//         'beaute': 'rehaussement-de-cils'
//     };
//     return slugMap[categoryId] || categoryId;
// }

// const ServiceCard = ({ service }: ServiceCardProps) => {
//     return (
//         <Box
//             bg="white"
//             p={{ base: 6, md: 8 }}
//             borderRadius="xl"
//             boxShadow="md"
//             transition="all 0.3s"
//             _hover={{
//                 boxShadow: 'xl',
//                 transform: 'translateY(-4px)'
//             }}
//         >
//             <VStack align="stretch" spacing={4} h="full">
//                 <Heading
//                     as="h3"
//                     textAlign="center"
//                     alignSelf="center"
//                     fontSize={{ base: 'xl', md: '2xl' }}
//                     color="gold.400"
//                     fontFamily="body"
//                     textTransform="uppercase"
                    
//                 >
//                     {service.name}
//                 </Heading>

//                 <Text
//                     fontSize={{ base: 'sm', md: 'md'}}
//                     color="gray.600"
//                     fontFamily="heading"
//                     lineHeight="tall"
//                     flex={1}
//                 >
//                     {service.description}
//                 </Text>

//                 <HStack justify="space-between" align="center" pt={4}>
//                     <Text
//                         fontSize={{ base: 'lg', md: 'xl' }}
//                         fontWeight="bold"
//                         color="gold.400"
//                         fontFamily="body"
//                         textTransform="uppercase"
//                     >
//                         Tarif : {service.price}
//                     </Text>

//                     <HStack spacing={3}>
//                         <Button
//                             as={Link}
//                             href={`/prestations/${service.id}`}
//                             variant="outline"
//                             colorScheme="gold"
//                             size={{ base: 'sm', md: 'md'}}
//                             fontFamily="heading"
//                             _hover={{
//                                 bg: 'gold.50'
//                             }}
//                         >
//                             En savoir +
//                         </Button>

//                         <Button
//                             as={Link}
//                             href="/rdv"
//                             colorScheme="gold"
//                             size={{ base: 'sm', md: 'md' }}
//                             fontFamily="heading"
//                         >
//                             Réserver
//                         </Button>
//                     </HStack>
//                 </HStack>
//             </VStack>
//         </Box>
//     );
// };

// interface CategorySectionProps {
//     category: Category;
// }

// const CategorySection = ({ category }: CategorySectionProps) => {
//     return (
//         <Box  as="section" mb={12}>
//             <Heading
//                 as="h2"
//                 fontSize={{ base: '3xl', md: '4xl' }}
//                 color="gold.400"
//                 fontFamily="body"
//                 textAlign="center"
//                 textTransform="uppercase"
//                 letterSpacing="wide"
//                 mb={8}
//             >
//                 {category.title}
//             </Heading>

//             <VStack spacing={6} align="stretch">
//                 {category.services.map((service) => (
//                     <ServiceCard key={service.id} service={service} categoryId={category.id} />
//                 ))}
//             </VStack>        
//         </Box>
//     );
// };

// const PrestationsPage = () => {
//     const { title, description, categories } = prestationsContent;

//     return (
//         <Box minH="100vh" bg="gray.50">
//             <Box
//                 bgGradient="linear(to-r, primary.50, primary.100)"
//                 py={{ base: 12, md: 16 }}
//                 px={{ base: 4, md: 8 }}
//             >
//                 {/* <Container maxW="container.xl"> */}
//                     <VStack spacing={4} textAlign="center" maxW="container.xl" mx="auto">
//                         <Heading
//                             as="h1"
//                             fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
//                             color="primary.500"
//                             fontFamily="heading"
//                         >
//                             {title}
//                         </Heading>

//                         <Text
//                             fontSize={{ base: 'lg', md: 'xl' }}
//                             color="gray.700"
//                             fontFamily="heading"
//                             lineHeight="tall"
//                             // maxW="3xl"
//                             w="full"
//                         >
//                             {description}
//                         </Text>
//                     </VStack>
//                 {/* </Container> */}
//             </Box>

//             {/* Services Section */}
//             <Container maxW="container.xl" py={{ base: 8, md: 12 }}>
//                 {categories.map((category) => (
//                 <CategorySection key={category.id} category={category} />
//                 ))}
//             </Container>
//         </Box>
//     );
// };

// export default PrestationsPage;