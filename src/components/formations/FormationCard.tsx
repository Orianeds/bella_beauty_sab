'use client';

import {
    FormationCardProps,
    FormationDescriptionLine
} from "@/dto/formation/formation.types";

import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    Center,
} from "@chakra-ui/react";

import Link from "next/link";

export function FormationCard({ formation }: FormationCardProps) {

    const renderDescription = () => {
        if (typeof formation.description === "string") {
            return <Text>{formation.description}</Text>;
        }

        return formation.description.map((line, index) => (
            <Text
                key={index}
                textAlign={line.center ? "center" : "left"}
                w="full"
                fontWeight={line.center ? "bold" : "normal"}
                textTransform={line.center ? "uppercase" : "none"}
            >
                {line.text}
            </Text>
        ));
    };

    return (
        <Box bg="white" p={8} borderRadius="xl" boxShadow="md">

            <VStack align="start" spacing={4} fontFamily="heading">

                <Heading as="h3" color="gold.400" size="lg">
                    {formation.title}
                </Heading>

                <Text fontWeight="bold">
                    Durée : {formation.duration}
                </Text>

                {/* ✅ CLEAN */}
                {renderDescription()}

                <VStack align="start" spacing={1}>
                    {"withKit" in formation.price && formation.price.withKit && (
                        <Text fontWeight="bold">
                            Avec kit : {formation.price.withKit}
                        </Text>
                    )}

                    <Text fontWeight="bold">
                        Sans kit : {formation.price.withoutKit}
                    </Text>

                    {formation.price.kitDescription && (
                        <Text fontSize="sm" color="gray.600">
                            {formation.price.kitDescription}
                        </Text>
                    )}

                    {formation.price.paymentInfo && (
                        <Text fontSize="sm" color="gray.600">
                            {formation.price.paymentInfo}
                        </Text>
                    )}
                </VStack>

                <Center w="full" pt={4}>
                    <Button as={Link} href="/contact" colorScheme="gold">
                        Je veux me former
                    </Button>
                </Center>

            </VStack>
        </Box>
    );
}