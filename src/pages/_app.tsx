import "@radix-ui/themes/styles.css";
import './global.css';

import { Theme } from "@radix-ui/themes";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Theme accentColor="jade">
      <Component {...pageProps} />
    </Theme>
  );
}
