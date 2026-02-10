'use client';

import { Box, Heading, VStack } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";

export function PrestationsCategory({ category }: any){
    return( 
    <Box mb={12}>
      <Heading 
        mb={8} 
        textAlign="center"
        textTransform="uppercase"
        color="gold.400"
        fontFamily="body"
        fontSize={{ base: "3xl", md: "4xl" }}>
        {category.title}
      </Heading>

      <VStack spacing={6}>
        {category.services.map((service: any) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </VStack>
    </Box>
    );
}