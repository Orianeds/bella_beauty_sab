'use client';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Textarea,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

export function ContactForm() {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });

    setLoading(false);

    if (res.ok) {
      toast({
        title: 'Message envoyé',
        status: 'success',
        duration: 4000,
      });
      form.reset();
    } else {
      toast({
        title: 'Erreur',
        description: 'Impossible d’envoyer le message',
        status: 'error',
      });
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit} fontFamily="heading">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Nom</FormLabel>
          <Input name="lastName" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Prénom</FormLabel>
          <Input name="firstName" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Sujet</FormLabel>
          <Select name="subject">
            <option value="Contact">Contact</option>
            <option value="Formation cheveux">Formation cheveux</option>
            <option value="Formation cils">Formation cils</option>
          </Select>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea name="message" rows={5} />
        </FormControl>

        <Text fontSize="xs" color="gray.500" textAlign="center">
          Les informations transmises sont utilisées uniquement pour répondre à votre
          demande.  
          En savoir plus dans notre{" "}
          <Link href="/politique-confidentialite" style={{ textDecoration: "underline" }}>
            politique de confidentialité
          </Link>.
        </Text>

        <Button
          type="submit"
          colorScheme="gold"
          isLoading={loading}
          w="full"
        >
          Envoyer
        </Button>
      </VStack>
    </Box>
  );
}
