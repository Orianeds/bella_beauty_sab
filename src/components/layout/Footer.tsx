'use client';

import { Box, Flex, HStack, Text, VStack, Link as ChakraLink, Icon, Divider } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { siteInfo, footerLinks, copyright } from "@/constants/content";
import { BookingButtons } from "../ui/BookingButtons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return(
        <Box
            as="footer"
            bg="primary.400"
            color="white"
            fontFamily="heading"
            role="contentinfo"
        >
            <Box py={8} px={{ base: 4, md: 8, lg: 12 }}>
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-around"
                    align={{ base: 'center', md: 'flex-start' }}
                    gap={8} 
                    maxW="100%"   
                >
                    {/* Logo */}
                    <VStack align={{ base: 'center', md: 'flex-start'}} spacing={3} flex={1}>
                        <Link href="/" style={{ textDecoration: 'none' }} aria-label="Retour à l'accueil">
                            <Image 
                                src="/images/logo.png" 
                                alt="Bella Beauty Sab – Logo"
                                width={150}
                                height={90} 
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </Link>
                    </VStack>

                    {/* Adresse */}
                    <VStack align={{ base: 'center', md: 'flex-start'}} spacing={2} flex={1} fontSize="sm">
                        <Text fontWeight="bold" textTransform="uppercase">Adresse</Text>
                        <Text as="address" textAlign={{ base: 'center', md: 'left' }}>
                            {siteInfo.address.street}
                            <br />
                            {siteInfo.address.city}
                        </Text>
                    </VStack>

                    {/* Horaires */}
                    <VStack align="center" spacing={3} flex={1} fontSize="sm">
                        <Text fontWeight="bold" textTransform="uppercase" textAlign="center">Horaires</Text>
                        <Flex gap={6} direction={{ base: 'column', sm: 'row'}}>
                            <VStack align="flex-start" spacing={1}>
                                <Text>{siteInfo.schedule.monday}</Text>
                                <Text>{siteInfo.schedule.tuesday}</Text>
                                <Text>{siteInfo.schedule.wednesday}</Text>
                            </VStack>
                            <VStack align="flex-start" spacing={1}>
                                <Text>{siteInfo.schedule.thursday}</Text>
                                <Text>{siteInfo.schedule.friday}</Text>
                                <Text>{siteInfo.schedule.saturday}</Text>
                            </VStack>
                        </Flex>
                    </VStack>

                    {/* Liens rapides */}
                    <VStack 
                        align={{ base: 'center', md: 'flex-start'}} 
                        spacing={3} 
                        flex={1} 
                        fontSize="sm"
                    >
                        <Text fontWeight="bold" textTransform="uppercase">Liens rapides</Text>
                        <VStack spacing={2} align={{base: 'center', md: 'flex-start' }}>
                            {footerLinks.quick.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{textDecoration: 'none' }}
                                >
                                    <Text
                                        cursor="pointer"
                                        _hover={{ color: 'gold.200' }}
                                        transition="color 0.2s"
                                    >
                                        {link.label}
                                    </Text>
                                </Link>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Réseaux sociaux */}
                    <VStack 
                        align={{ base: 'center', md: 'flex-start'}} 
                        spacing={3} 
                        flex={1}
                    >
                        <Text fontWeight="bold" textTransform="uppercase" fontSize="sm">
                            Suivez-moi
                        </Text>
                        <HStack spacing={4}>
                                <ChakraLink
                                    href={siteInfo.socialLinks.instagram}
                                    isExternal
                                    aria-label="Instagram"
                                    _hover={{ color: 'gold.200' }}
                                    transition="color 0.2s"
                                >
                                    <FaInstagram size={24} />
                                </ChakraLink>
                                <ChakraLink
                                    href={siteInfo.socialLinks.facebook}
                                    isExternal
                                    aria-label="Facebook"
                                    _hover={{ color: 'gold.200' }}
                                    transition="color 0.2s"
                                >
                                    <FaFacebookF size={24} />
                                </ChakraLink>
                                <ChakraLink
                                    href={siteInfo.socialLinks.whatsappLink}
                                    isExternal
                                    aria-label="WhatsApp"
                                    _hover={{ color: 'gold.200' }}
                                    transition="color 0.2s"
                                >
                                    <FaWhatsapp size={24} />
                                </ChakraLink>
                        </HStack>
                    </VStack>

                    {/* Prendre rdv */}
                    <VStack 
                        align="center" 
                        spacing={3} 
                        flex={1}
                    >
                        <Text fontWeight="bold" textTransform="uppercase" fontSize="sm" align="center">
                            Prendre rdv
                        </Text>
                        <BookingButtons variant="footer" />
                    </VStack>
                </Flex>
            </Box>

            <Divider borderColor="whiteAlpha.300" />

            {/* Section légale */}
            <Box bg="primary.500" py={4} px={{ base: 4, md: 8, lg: 12 }}>
                <Flex
                    direction={{base: 'column', md:'row'}}
                    justify="space-between"
                    align="center"
                    gap={4}
                >
                    {/* Copyright */}
                    <Text fontSize="xs" textAlign={{ base: 'center', md: 'left' }}>
                        © {copyright.year} {copyright.text}
                    </Text>
                    {/* Liens légaux */}
                    <HStack 
                    spacing={{ base: 4, md: 6 }} 
                    fontSize="xs"
                    flexWrap="wrap"
                    justify="center"
                    >
                    {footerLinks.legal.map((link, index) => (
                        <Box key={link.href}>
                            <Link href={link.href} style={{ textDecoration: 'none' }}>
                                <Text
                                cursor="pointer"
                                _hover={{ color: 'gold.200' }}
                                transition="color 0.2s"
                                >
                                {link.label}
                                </Text>
                            </Link>
                        </Box>
                    ))}
                    </HStack>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;