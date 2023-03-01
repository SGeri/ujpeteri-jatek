import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Header from "@components/Header";

import "../styles/globals.css";

export default function Application({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>
    </MantineProvider>
  );
}
