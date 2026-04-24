import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrainingSection from '@/components/sections/TrainingSection';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box>
      <HeroSection />
      <TrainingSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
    </Box>
  );
}
