'use client';
import {
  Box, Button, Container, HStack, Menu, MenuButton,
  MenuItem, MenuList, Text, IconButton, Drawer,
  DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent,
  DrawerCloseButton, VStack, useDisclosure
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/constants/content';
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { societeLinks } from "@/constants/societeLinks";

const Navbar = () => {
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <Box as="nav" bg="primary.400" color="white" fontFamily="heading" py={8} position="sticky" top={0} zIndex={1000} boxShadow="sm">
      <Container maxW="8.5xl">
        <HStack justify="space-between" align="center">

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }} aria-label="Retour à l'accueil">
            <Image
              src="/images/logo-test.png"
              alt="Bella Beauty Sab – Logo"
              width={150}
              height={90}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* Menu desktop — caché sur mobile */}
          <HStack as="ul" gap={8} fontFamily="heading" fontSize="xl" listStyleType="none" display={{ base: 'none', lg: 'flex' }}>
            {navigationLinks.map((item) => (
              <Box as="li" key={item.href}>
                <Link href={item.href} style={{ textDecoration: 'none' }}>
                  <Text
                    cursor="pointer"
                    _hover={{ color: 'gold.200' }}
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color={isActive(item.href) ? 'gold.200' : 'white'}
                    transition="color 0.2s"
                    borderBottom={isActive(item.href) ? '2px solid' : 'none'}
                    borderColor="gold.200"
                    pb={1}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Text>
                </Link>
              </Box>
            ))}

            {/* Menu Société desktop */}
            <Box as="li">
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                  fontWeight="extrabold"
                  fontSize="xl"
                  textTransform="uppercase"
                  color="white"
                  _hover={{ color: 'gold.200', bg: 'transparent' }}
                  _active={{ bg: 'transparent' }}
                >
                  Société
                </MenuButton>
                <MenuList bg="primary.400" border="none" borderRadius="xl" boxShadow="lg" py={2}>
                  {societeLinks.map((link) => (
                    <MenuItem
                      key={link.href}
                      as={Link}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      bg="transparent"
                      fontWeight="bold"
                      textTransform="uppercase"
                      _hover={{ bg: 'gold.100', color: 'primary.400' }}
                    >
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </HStack>

          {/* Bouton hamburger — visible uniquement sur mobile */}
          <IconButton
            display={{ base: 'flex', lg: 'none' }}
            aria-label="Ouvrir le menu"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            fontSize="2xl"
            _hover={{ bg: 'transparent', color: 'gold.200' }}
            onClick={onOpen}
          />
        </HStack>
      </Container>

      {/* Drawer mobile */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="primary.400" color="white">
          <DrawerCloseButton color="white" size="lg" />
          <DrawerHeader>
            <Image
              src="/images/logo.png"
              alt="Bella Beauty Sab – Logo"
              width={120}
              height={72}
              style={{ objectFit: "contain" }}
            />
          </DrawerHeader>
          <DrawerBody>
            <VStack align="flex-start" spacing={6} mt={4} fontSize="lg" fontFamily="heading">

              {/* Liens navigation */}
              {navigationLinks.map((item) => (
                <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }} onClick={onClose}>
                  <Text
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color={isActive(item.href) ? 'gold.200' : 'white'}
                    _hover={{ color: 'gold.200' }}
                    transition="color 0.2s"
                    borderBottom={isActive(item.href) ? '2px solid' : 'none'}
                    borderColor="gold.200"
                    pb={1}
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}

              {/* Liens Société */}
              <Text fontWeight="extrabold" textTransform="uppercase" color="gold.200">
                Société
              </Text>
              {societeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  onClick={onClose}
                >
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    _hover={{ color: 'gold.200' }}
                    transition="color 0.2s"
                    pl={3}
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}

            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;