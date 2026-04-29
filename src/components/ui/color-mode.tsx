"use client"
import { useColorMode as useChakraColorMode } from "@chakra-ui/react"

export type ColorMode = "light" | "dark"

export interface ColorModeProviderProps {
  children: React.ReactNode
}

export function ColorModeProvider({ children }: ColorModeProviderProps) {
  return <>{children}</>
}

export function useColorMode() {
  const { colorMode, toggleColorMode, setColorMode } = useChakraColorMode()
  return {
    colorMode: colorMode as ColorMode,
    toggleColorMode,
    setColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}