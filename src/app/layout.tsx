import type { Metadata } from 'next';
import { Montserrat, Old_Standard_TT } from 'next/font/google';
import { Providers } from './providers';
import type { ReactNode } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Box } from '@chakra-ui/react';

// Police pour les titres (Montserrat)
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Police pour le texte (Old Standard TT)
const oldStandardTT = Old_Standard_TT({
  weight: ['400', '700'], // Regular et Bold
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-old-standard',
});

export const metadata: Metadata = {
  title: 'Bella Beauty - Formation & Prestations Lissage',
  description: 'Formations professionnelles et prestations de lissage brésilien, botox capillaire et soins capillaires de qualité.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html 
      lang="fr"
      suppressHydrationWarning 
      className={`${montserrat.variable} ${oldStandardTT.variable}`}
    >
      <body>
        <Providers>
          <Box minH="100vh" display="flex" flexDirection="column">
            <Navbar />
              <Box as='main' flex="1">
                {children}
              </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}