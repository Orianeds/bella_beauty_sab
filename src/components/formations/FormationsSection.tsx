'use client';

import { Grid } from "@chakra-ui/react";
import { FormationCard } from "./FormationCard";

export function FormationsSection({ formations }: any) {
    return(
        <Grid
            maxW="container.xl"
            mx="auto"
            py={16}
            px={4}
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={8}
        >
            <FormationCard formation={formations.hair} />
            <FormationCard formation={formations.lashes} />
        </Grid>
    )
}