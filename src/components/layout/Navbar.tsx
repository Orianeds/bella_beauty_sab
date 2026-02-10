'use client';

import { Box, Button, Container, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/constants/content';
import { ChevronDownIcon } from "@chakra-ui/icons";
import { societeLinks } from "@/constants/societeLinks";

  const Navbar = () => {
    const pathname = usePathname();

    const isActive = (href: string) => {
      if (href === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(href);
    };


  return (
    <Box as="nav" bg="primary.400" color="white" fontFamily="heading" py={8} position="sticky" top={0} zIndex={1000} boxShadow="sm">
      <Container maxW="8.5xl">
        <HStack justify="space-between" align="center">
          <Link href="/" style={{ textDecoration: 'none' }} aria-label="Retour à l'accueil">
            <Image 
                src="/images/logo.png" 
                alt="logo"
                width={150}
                height={90} 
                style={{ objectFit: "contain" }}
            />
          </Link>
          
          <HStack as="ul" gap={8} fontFamily="heading" fontSize="xl" listStyleType="none">
            {navigationLinks.map((item) => (
              <Box as="li" key={item.href}>
                <Link 
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
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
                  >
                    {item.label}
                  </Text>
                </Link>
              </Box>
            ))};

                        {/* Menu Société */}
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

                <MenuList
                  bg="primary.400"
                  border="none"
                  borderRadius="xl"
                  boxShadow="lg"
                  py={2}
                >
                  {societeLinks.map((link) => (
                    <MenuItem
                      key={link.href}
                      as="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      bg="transparent"
                      fontWeight="bold"
                      textTransform="uppercase"
                      _hover={{
                        bg: 'gold.100',
                        color: 'primary.400',
                      }}
                    >
                      {link.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};


export default Navbar;