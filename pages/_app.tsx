import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider, StyleFunctionProps } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  heading: "Typeka",
  body: "Typeka",
};

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: '"Typeka", "Noto", sans-serif"',
      },
    }),
  },
};

const theme = extendTheme({ config, colors, fonts });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component className="testing" {...pageProps} />
    </ChakraProvider>
  );
}
