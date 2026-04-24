'use client';

import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { siteInfo } from '@/constants/content';

export function FaqContact() {
  return (
    <Box
      borderLeft="1px solid"
      borderColor="gray.200"
      pl={8}
      fontFamily="heading"
    >
      <VStack align="center" spacing={4}>
        <Text
          fontSize="md"
          textTransform="uppercase"
          color="gold.400"
        >
          Votre question n’apparaît pas ?
        </Text>

        <Text fontSize="sm">Contactez-moi :</Text>

        <Text fontSize="sm" lineHeight="tall">
          {siteInfo.name}
          <br />
          {siteInfo.address.city}
          <br />
          {siteInfo.phone}
          <br />
          {siteInfo.email}
        </Text>

        <HStack spacing={4} pt={2}>
          <Link href="https://www.instagram.com" color="gold.400" isExternal>
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com" color="gold.400" isExternal>
            <FaFacebook />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
