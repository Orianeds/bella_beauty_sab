'use client';

import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    Center,
} from "@chakra-ui/react";

export function FormationCard({ formation }: any) {
    return (
        <Box
            bg="white"
            p={8}
            borderRadius="xl"
            boxShadow="md"
        >
            <VStack align="start" spacing={4} fontFamily="heading">
                <Heading color="gold.400" size="lg">
                {formation.title}
                </Heading>

                <Text fontWeight="bold">
                Durée : {formation.duration}
                </Text>

                {Array.isArray(formation.description) ? (
                formation.description.map(
                    (
                        line: { text: string; center?: boolean }, 
                        index: number
                    ) => (
                    <Text 
                        key={index}
                        textAlign="center"
                        w="full"
                        fontWeight={line.center ? "bold" : "normal"}
                        textTransform={line.center ? "uppercase" : "none"}
                    >
                        {line.text}
                    </Text>
                ))
                ) : (
                <Text>{formation.description}</Text>
                )}

                <Text fontWeight="bold">
                {formation.price}
                </Text>

                <Center w="full" pt={4}>
                <Button
                    colorScheme="gold"
                    as="a"
                    href="/contact"
                >
                    Demande d'inscription
                </Button>
                </Center>
            </VStack>
        </Box>
    )
}