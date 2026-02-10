'use client';

import { testimonialsContent } from "@/constants/content";
import { Avatar, Box, Container, Grid, GridItem, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
    return (
        <Box bg="white" py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl">
                <VStack spacing={12} align="center">
                    <VStack spacing={4} textAlign="center">
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                            color="primary.600"
                            fontFamily="heading"
                            textTransform="uppercase"
                        >
                            {testimonialsContent.title}
                        </Heading>
                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="gray.600"
                            maxW="2xl"
                            fontFamily="heading"
                        >
                            {testimonialsContent.description}
                        </Text>
                    </VStack>

                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                        gap={8}
                        w="full"
                    >
                        {testimonialsContent.reviews.map((review) => (
                            <GridItem key={review.id}>
                                <VStack
                                    bg="white"
                                    p={8}
                                    borderRadius="xl"
                                    spacing={4}
                                    align="flex-start"
                                    h="full"
                                    boxShadow="md"
                                    transition="all 0.3s"
                                    _hover={{
                                        boxShadow: 'xl',
                                        transform: 'translateY(-4px)',
                                    }}
                                >
                                    <Icon as={FaQuoteLeft} w={8} h={8} color="primary.300" />

                                    <HStack spacing={1}>
                                        {[...Array(5)].map((_,i) => (
                                            <Icon
                                                key={i}
                                                as={FaStar}
                                                color={i < review.rating ? 'yellow.400' : 'gray.300'}
                                            />
                                        ))}
                                    </HStack>

                                    <Text
                                        fontSize={{ base: 'sm', md: 'md' }}
                                        color="gray.700"
                                        fontFamily="heading"
                                        lineHeight="1.8"
                                        flex={1}
                                    >
                                        {review.text}
                                    </Text>

                                    <HStack spacing={4} pt={4}>
                                        <Avatar 
                                            name={review.author}
                                            src={review.avatar}
                                            size="md"
                                        />
                                        <VStack align="flex-start" spacing={0}>
                                            <Text
                                                fontWeight="bold"
                                                fontSize="md"
                                                color="primary.600"
                                                fontFamily="heading"
                                            >
                                                {review.author}
                                            </Text>
                                            <Text
                                                fontSize="sm"
                                                color="gray.500"
                                                fontFamily="heading"
                                            >
                                                {review.date}
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </VStack>
                            </GridItem>
                        ))}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    )
};

export default TestimonialsSection;