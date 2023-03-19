import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Header from "@components/Header";
import Footer from "@components/Footer";

import "../styles/globals.css";
import Head from "next/head";

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Újpéteri Kincskeresés</title>
        <meta name="description" content="Újpéteri Kincskeresés" />
      </Head>

      <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
        <Header />

        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </MantineProvider>
    </>
  );
}
