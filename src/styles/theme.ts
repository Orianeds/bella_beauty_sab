import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({

   // 1. THÈME DE BASE
   theme: {
    tokens: {
      // COULEURS PERSONNALISÉES
      colors: {
        // Couleur navbar/footer : #D3B8A5 (Beige rosé)
        primary: {
          50: { value: '#FAF7F4' },
          100: { value: '#F2EBE4' },
          200: { value: '#E8DACD' },
          300: { value: '#DEC9B9' },
          400: { value: '#D3B8A5' },  // Navbar/Footer
          500: { value: '#C8A791' },
          600: { value: '#B4917A' },
          700: { value: '#9D7B66' },
          800: { value: '#7D6251' },
          900: { value: '#5E4A3D' },
        },

        // Couleur titres : #D7B175 (Or champagne)
        gold: {
          50: { value: '#FBF8F2' },
          100: { value: '#F5EDDC' },
          200: { value: '#EEDEC0' },
          300: { value: '#E4CDA4' },
          400: { value: '#D7B175' },  // Titres
          500: { value: '#CDA863' },
          600: { value: '#B99551' },
          700: { value: '#9D7D44' },
          800: { value: '#7D6336' },
          900: { value: '#5E4A29' },
        },
      },

      // POLICES
      fonts: {
        heading: { value: `var(--font-montserrat), 'Montserrat', -apple-system, sans-serif` },
        body: { value: `var(--font-old-standard), 'Old Standard TT', Georgia, serif` },
      },
    },
   },

    // 2. STYLES GLOBAUX
  globalCss: {
    body: {
      bg: 'white',
      color: 'black',
      lineHeight: '1.7',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: 'gold.400',
      fontFamily: 'heading',
      fontWeight: 'bold',
    },
    a: {
      color: 'gold.400',
      _hover: {
        color: 'gold.500',
        textDecoration: 'none',
      },
    },
    html: {
      scrollBehavior: 'smooth',
    },
  },
});

export const system = createSystem(defaultConfig, config);

export default system;
