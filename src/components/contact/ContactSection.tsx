import { Grid, Box, Heading } from '@chakra-ui/react';
import { ContactForm } from './ContactForm';
import { FaqContact } from '@/components/faq/FaqContact';

export function ContactSection() {
  return (
    <Box maxW="1200px" mx="auto" px={6} py={16}>
      <Heading
        mb={12}
        textAlign="center"
        color="gold.400"
        textTransform="uppercase"
        fontFamily="body"
      >
        N’hésitez pas à me contacter
      </Heading>

      <Grid templateColumns={{ base: '1fr', md: '70% 30%' }} gap={12}>
        <ContactForm />
        <FaqContact />
      </Grid>
    </Box>
  );
}
