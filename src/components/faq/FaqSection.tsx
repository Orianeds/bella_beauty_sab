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
import { bookingLink, siteInfo } from '@/constants/content';
import { FaqCategoryBlock } from './FaqCategoryBlock';
import { FaqContact } from './FaqContact';
import { BookingButtons } from '../ui/BookingButtons';

export function FaqSection() {
  return (
    <Box maxW="1800px" mx="auto" px={6} py={16}>
        <Heading mb={12} textAlign="center" color="gold.400" fontFamily="body" textTransform="uppercase">
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

     <Box pt={16}>
      <BookingButtons />
    </Box>
    </Box>
  );
}
