'use client';

import {
    Box,
    Button,
    Grid,
    Heading,
    HStack,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
import { faqCategories } from '@/constants/faq';
import { siteInfo } from '@/constants/content';
import { FaqCategoryBlock } from './FaqCategoryBlock';
import { FaqContact } from './FaqContact';

export function FaqSection() {
  return (
    <Box maxW="1800px" mx="auto" px={6} py={16}>
        <Heading mb={12} textAlign="center" color="gold.400">
        Foire aux questions
        </Heading>

        <Grid
        templateColumns={{ base: '1fr', md: '70% 5% 25%' }}
        alignItems="start"
        >
            <Stack spacing={16}>
            {faqCategories.map((category) => (
                <FaqCategoryBlock
                key={category.slug}
                title={category.title}
                questions={category.questions}
                />
            ))}
            </Stack>

            <Box />

            <Box>
              <FaqContact />
            </Box>
            
        </Grid>

     <Box mt={24} textAlign="center" fontFamily="heading">
        <Text mb={6} fontWeight="large">
          N'hésitez plus et réservez votre moment !
        </Text>

        <HStack justify="center" spacing={4}>
          <Button
            as="a"
            href={siteInfo.socialLinks.instagram}
            target="_blank"
            colorScheme="gold"
          >
            Réserver mon moment
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}
