import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const ColorModeConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const FontConfig = {
  fonts: {
    header: '"Bakbak One", sans-serif',
    body: 'Ubuntu, sans-serif',
    heading: '"Bakbak One"',
    mone: '"Roboto Mono", sans-serif'
  }
}

export const theme = extendTheme({ ...ColorModeConfig, ...FontConfig })
