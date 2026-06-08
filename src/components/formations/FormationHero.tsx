import { formationsPageContent } from "@/constants/content";
import { FormationsHeroProps } from "@/dto/formation/formation.types";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react";


export function FormationsHero({ content }: FormationsHeroProps) {
  return (
    <Box bg="primary.50" py={{ base: 12, md: 20 }}>
      <Container maxW="container.lg">
        <VStack spacing={6} textAlign="center">
          <Heading
            as="h1"
            color="gold.400"
            fontSize={{ base: "3xl", md: "4xl" }}
            textTransform="uppercase"
            fontFamily="body"
          >
            {content.title}
          </Heading>

          <VStack spacing={2}>
            {content.description.map((item, index) => (
              <Text 
                key={index}
                fontSize={{ base: "md", md: "lg" }} 
                color="gray.700" 
                fontFamily="heading">
                  {item.text}
            </Text>
            ))}
          </VStack>

          
          
        </VStack>
      </Container>
    </Box>
  );
}
