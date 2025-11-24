"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "../components/ui/color-mode"
import { ThemeProvider } from "next-themes"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ChakraProvider value={defaultSystem}>
        <ColorModeProvider {...props} />
      </ChakraProvider>
    </ThemeProvider>
  )
}
