'use client';
import { Box, Grid } from "@chakra-ui/react";
import { FormationCard } from "./FormationCard";
import { FormationSectionProps } from "@/dto/formation/formation.types";


export function FormationsSection({ formations }: FormationSectionProps) {
    const formationList = Object.values(formations);

    return(
        <Box as="section" aria-labelledby="formations-title">
            <Grid
                maxW="container.xl"
                mx="auto"
                py={16}
                px={4}
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
                gap={8}
            >
                {formationList.map((formation, index) => (
                    <FormationCard key={formation.id} formation={formation} />
                ))}
            </Grid>
        </Box>
    )
}