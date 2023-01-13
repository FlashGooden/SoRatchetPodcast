import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const theme = extendTheme({ config, colors })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
