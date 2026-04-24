import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: "#F5ECE6",
      100: "#EAD9CC",
      200: "#D3B8A5",
      300: "#C7A28F",
      400: "#B98A75",
      500: "#9F6F5D",
      600: "#805848",
      700: "#604236",
      800: "#422D24",
      900: "#281A15",
    },
    gold: {
      50: "#F8F1E6",
      100: "#F1DDC0",
      200: "#E5C397",
      300: "#DCAC74",
      400: "#D7B175",
      500: "#C2925D",
      600: "#9F7447",
      700: "#7D5834",
      800: "#593C22",
      900: "#372414",
    },
  },
  fonts: {
    heading: 'Montserrat, sans-serif',
    body: 'Old Standard TT, serif',
  },
});

export default theme;
