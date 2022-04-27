import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider theme={theme}>
         <Component {...pageProps} />
      </ChakraProvider>
   );
}

export default MyApp;

const theme = extendTheme({
   fonts: {
      heading: 'Raleway, sans-serif',
      body: 'Raleway, sans-serif',
   },
});
