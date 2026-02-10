'use client';

import { portfolioContent } from '@/constants/content';
import { Box, Container, Heading, Text, Grid, GridItem, VStack, Button, Link as ChakraLink} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import NextImage from 'next/image';

const PortfolioSection = () => {
  return (
    <Box bg="primary.50" py={{ base: 16, md: 24 }}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <VStack spacing={4} textAlign="center">
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="primary.600"
              fontFamily="heading"
              textTransform="uppercase"
            >
              {portfolioContent.title}
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="2xl"
              fontFamily="heading"
            >
              {portfolioContent.description}
            </Text>
          </VStack>

          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
            w="full"
          >
            {portfolioContent.featured.map((item) => (
              <GridItem key={item.id}>
                <VStack
                  spacing={4}
                  bg="gray.50"
                  borderRadius="xl"
                  overflow="hidden"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-8px)',
                    boxShadow: 'xl',
                  }}
                >
                  <Box position="relative" w="full" h="300px">
                    <NextImage
                      src={item.before}
                      alt={`${item.title} - Avant`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <Box
                      position="absolute"
                      top={4}
                      left={4}
                      bg="white"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontWeight="bold"
                      fontSize="sm"
                      color="primary.600"
                    >
                      AVANT
                    </Box>
                  </Box>

                  <Box position="relative" w="full" h="300px">
                    <NextImage
                      src={item.after}
                      alt={`${item.title} - Après`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <Box
                      position="absolute"
                      top={4}
                      left={4}
                      bg="primary.500"
                      color="white"
                      px={3}
                      py={1}
                      borderRadius="md"
                      fontWeight="bold"
                      fontSize="sm"
                    >
                      APRÈS
                    </Box>
                  </Box>

                  <Box p={4} w="full">
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="primary.600"
                      fontFamily="heading"
                    >
                      {item.title}
                    </Text>
                  </Box>
                </VStack>
              </GridItem>
            ))}
          </Grid>

          <ChakraLink
            href={portfolioContent.link} 
            isExternal
            aria-label="Instagram"
          >
            <Button
              rightIcon={<FaArrowRight />}
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
              {portfolioContent.cta}
            </Button>  
          </ChakraLink>
        </VStack>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
