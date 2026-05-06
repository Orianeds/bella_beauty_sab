'use client';

import { servicesContent } from "@/constants/content";
import { Box, Button, Container, Grid, GridItem, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight, FaCut, FaEye, FaSpa, FaTooth } from "react-icons/fa";

const ICON_MAP: Record<string, any> = {
    cut: FaCut,
    spa: FaSpa,
    eye: FaEye,
    tooth: FaTooth
};

const ServicesSection = () => {
    const { title, description, categories } = servicesContent ;

    return(
        <Box bg="primary.50" py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl">
                <VStack spacing={12} align="center">

                    <VStack spacing={4} textAlign="center">
                        <Heading
                            as="h2"
                            fontSize={{ base: '2xl', md: '3xl', lg: '4xl'}}
                            color="primary.600"
                            fontFamily="heading"
                            textTransform="uppercase"
                        >
                            {title}
                        </Heading>

                        <Text
                            fontSize={{ base: 'md', md: 'lg' }}
                            color="gray.600"
                            maxW="2xl"
                            fontFamily="heading"
                        >
                            {description}
                        </Text>
                    </VStack>

                    <Grid
                        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                        gap={8}
                        w="full"
                    >
                        {categories.flatMap((category) => 
                            category.services.map((service) => {

                                return(
                                    <GridItem key={service.id}>
                                        <VStack
                                            as={Link}
                                            href={`/prestations/${category.slug}?media=${service.id}`}
                                            bg="white"
                                            p={8}
                                            borderRadius="xl"
                                            spacing={4}
                                            align="flex-start"
                                            h="full"
                                            transition="all 0.3s"
                                            _hover={{
                                                transform: 'translateY(-8px)',
                                                boxShadow: 'xl',
                                                bg: 'primary.100',
                                            }}
                                        >
                                            <Heading
                                                as="h3"
                                                fontSize={{ base: 'xl', md: '2xl' }}
                                                color="primary.600"
                                                fontFamily="heading"
                                            >
                                                {service.name}
                                            </Heading>

                                            <Text
                                                fontSize={{ base: 'sm', md: 'md' }}
                                                color="gray.700"
                                                fontFamily="heading"
                                                flex={1}
                                            >
                                                {service.description}
                                            </Text>

                                            <Button
                                                rightIcon={<FaArrowRight />}
                                                variant="link"
                                                color="primary.500"
                                                fontWeight="bold"
                                                fontFamily="heading"
                                            >
                                                En savoir plus
                                            </Button>
                                        </VStack>
                                    </GridItem>
                                );
                            })
                        )}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    );
};

export default ServicesSection;