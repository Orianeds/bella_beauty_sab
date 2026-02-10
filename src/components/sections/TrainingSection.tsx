'use client';

import { trainingContent } from "@/constants/content";
import { Box, Button, Container, Grid, GridItem, Heading, HStack, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { FaCheckCircle, FaGraduationCap } from "react-icons/fa";

const TrainingSection = () => {
    return(
        <Box bg="white" py={{ base: 16, md: 24 }}>
            <Container maxW="container.xl">
                <Grid
                    templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                    gap={12}
                    alignItems="center"
                >
                    <GridItem>
                        <VStack align="flex-start" spacing={6}>
                            <HStack spacing={3}>
                                <FaGraduationCap size={40} color="var(--chakra-colors-primary-500)" />
                                <Heading
                                    as="h2"
                                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                                    color="primary.600"
                                    fontFamily="heading"
                                    textTransform="uppercase"
                                >
                                    {trainingContent.title}
                                </Heading>
                            </HStack>

                            <Text
                                fontSize={{ base: '3xl', md:'2xl', sm: 'xl'}}
                                color="gray.700"
                                fontFamily="heading"
                                lineHeight="1.8"
                            >
                                {trainingContent.description}
                            </Text>

                            <List spacing={3}>
                                {trainingContent.highlights.map((highlight, index) => (
                                    <ListItem
                                        key={index}
                                        display="flex"
                                        alignItems="center"
                                        fontSize={{ base: 'xl', md: '2xl' }}
                                        color="gray.700"
                                        fontFamily="heading"
                                    >
                                        <ListIcon as={FaCheckCircle} color="primary.500" />
                                        {highlight}
                                    </ListItem>
                                ))}
                            </List>

                            <Link href={trainingContent.link}>
                                <Button
                                    size="lg"
                                    bg="primary.400"
                                    color="white"
                                    fontFamily="heading"
                                    fontWeight="600"
                                    textTransform="uppercase"
                                    px={10}
                                    py={7}
                                    _hover={{
                                        bg: 'primary.500',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                >
                                    {trainingContent.cta}
                                </Button>
                            </Link>
                        </VStack>
                    </GridItem>

                    <GridItem>
                        <Box
                            bg="white"
                            p={10}
                            borderRadius="2xl"
                            boxShadow="2xl"
                        >
                            <VStack align="flex-start" spacing={4}>
                                <Heading
                                    as="h2"
                                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                                    color="primary.600"
                                    fontFamily="heading"
                                >
                                    Formations disponibles
                                </Heading>
                                {trainingContent.programs.map((program, index) => (
                                    <Box key={index} w="full" p={4} bg="primary.50" borderRadius="lg">
                                        <Text
                                            fontWeight="bold"
                                            fontSize={{ base: 'xl', md: '2xl'}}
                                            color="primary.600"
                                            fontFamily="heading"
                                        >
                                            {program.name}
                                        </Text>
                                        <Text
                                            fontSize={{ base: 'sm', md: 'md' }}
                                            color="gray.600"
                                            fontFamily="heading"
                                        >
                                            {program.duration}
                                        </Text>
                                    </Box>
                                ))}
                            </VStack>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};

export default TrainingSection;