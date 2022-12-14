// import "../styles/globals.css";
import "@fontsource/poppins";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Pokedex</title>
                <meta name="keywords" content="Pokemon" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
