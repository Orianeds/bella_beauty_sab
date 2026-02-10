'use client';

import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrainingSection from '@/components/sections/TrainingSection';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Input,
  Badge,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Box>
      {/* Hero */}
      <HeroSection />
      <TrainingSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
    </Box>
  );
}