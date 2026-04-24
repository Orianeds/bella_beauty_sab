import { TrainerSectionProps } from "@/dto/formation/formation.types";
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
} from "@chakra-ui/react";


export function TrainerSection({ content }: TrainerSectionProps) {
  return (
    <Box bg="white" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={6} textAlign="center">
          <Heading
            as="h2"
            color="gold.400"
            fontSize={{ base: "2xl", md: "3xl" }}
            textTransform="uppercase"
            fontFamily="body"
          >
            {content.title}
          </Heading>

          <Text fontSize="lg" color="gray.700" lineHeight="tall" fontFamily="heading">
            {content.content}
          </Text>
          <Text fontSize="lg" color="gray.700" lineHeight="tall" fontFamily="heading" >
            Numéro NDA : {content.ndaNumber}
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
