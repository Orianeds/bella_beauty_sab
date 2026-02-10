'use client';

import { heroContent } from "@/constants/content";
import { Box, Container, Text, Grid, GridItem, Image, Heading, VStack, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";

const HeroSection = () => {
    return (
        <Box
            bg="primary.50"
            py={{ base: 12, md: 20 }}
            px={{ base: 4, md: 12, lg: 16 }}
            minH="600px"
        >
            <Grid
                templateColumns={{ base: '1fr', lg: '80fr 20fr' }}
                gap={16}
                alignItems="center"
                w="100%"
            >
                {/* Partie gauche : textes et boutons */}
                <GridItem display="flex" justifyContent="center">
                    <VStack
                        spacing={6}
                        align="center"
                        maxW="1600px"
                        w="100%"
                        mx="auto"

                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                            fontWeight="bold"
                            color="primary.600"
                            fontFamily="heading"
                            lineHeight="1.3"
                            letterSpacing="-0.02em"
                            textTransform="uppercase"
                        >
                            {heroContent.title}
                        </Heading>
                        <VStack align="flex-start" spacing={6}>
                            <Text
                                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                color="gray.700"
                                fontFamily="heading"
                                fontWeight="400"
                                lineHeight="1.6"
                            >
                                {heroContent.subtitle_presentation}
                            </Text>
                            <Box>
                                <Text 
                                    fontWeight={700} 
                                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                    color="primary.600" mb={3} 
                                    fontFamily="heading"
                                >
                                    {heroContent.services.title}
                                </Text>

                                <VStack align="flex-start" spacing={3}>
                                    {heroContent.services.list.map((service, index) => (
                                        <Box key={index}>
                                            <Text 
                                                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                                fontWeight="700" 
                                                color="gray.800"
                                                fontFamily="heading"
                                            >
                                                {service.name}
                                            </Text>
                                            <Text 
                                                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                                fontFamily="heading"
                                                color="gray.600"
                                            >
                                                {service.description}
                                            </Text>
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>

                            <Box>
                                <Text 
                                    fontWeight="700" 
                                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                    fontFamily="heading"
                                    color="primary.600" 
                                    mb={2}
                                >
                                    {heroContent.whyChooseMe.title}
                                </Text>

                                <Text 
                                    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                                    fontFamily="heading"
                                    color="gray.700" 
                                    lineHeight="1.7"
                                >
                                    {heroContent.whyChooseMe.description}
                                </Text>
                            </Box>
                        </VStack>

                        <HStack
                            spacing={4}
                            pt={4}
                            flexWrap="wrap"
                            justify="flex-start"
                        >
                            <Link href={heroContent.primaryCTA.href}>
                                <Button
                                    size="lg"
                                    bg="primary.400"
                                    color="white"
                                    fontFamily="heading"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    fontSize="sm"
                                    px={10}
                                    py={7}
                                    _hover={{
                                        bg: 'primary.500',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                    w={{ base: 'full', sm: 'auto' }}
                                >
                                    {heroContent.primaryCTA.label}
                                </Button>
                            </Link>

                            <Link href={heroContent.secondaryCTA.href}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    borderColor="primary.400"
                                    color="primary.400"
                                    fontFamily="heading"
                                    fontWeight="bold"
                                    textTransform="uppercase"
                                    px={10}
                                    py={7}
                                    _hover={{
                                        bg: 'primary.50',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s" 
                                >
                                    {heroContent.secondaryCTA.label}
                                </Button>
                            </Link>
                        </HStack>
                    </VStack>
                </GridItem>

                {/* Partie droite : Image */}
                <GridItem>
                    <Box
                        position="relative"
                        w="full"
                        h={{ base: '450px', md: '650px' }}
                        borderRadius="2xl"
                        overflow="hidden"
                        boxShadow="2xl"
                    >
                        <Image 
                            src="/images/photo_accueil.jpeg"
                            alt="Bella Beauty Sab - Formations et prestations en lissage"
                            objectFit="cover"
                            w="100%"
                            h="100%"
                            fallback={
                                <Box
                                    w="full"
                                    h="full"
                                    bg="primary.100"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Text color="primary.600" fontWeight="bold" fontSize="xl" fontFamily="heading">
                                        Votre Image ici
                                    </Text>
                                </Box>
                            }
                        />
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default HeroSection;