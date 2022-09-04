import type { AppProps } from "next/app";
import LayoutProvider from "@/components/provider/LayoutProvider";
import ReactQueryProvider from "@/components/provider/ReactQueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider pageProps={pageProps}>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </ReactQueryProvider>
  );
}

export default MyApp;
