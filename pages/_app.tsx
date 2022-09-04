import type { AppProps } from "next/app";
import LayoutStyleProvider from "@/components/provider/LayoutStyleProvider";
import ReactQueryProvider from "@/components/provider/ReactQueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider pageProps={pageProps}>
      <LayoutStyleProvider>
        <Component {...pageProps} />
      </LayoutStyleProvider>
    </ReactQueryProvider>
  );
}

export default MyApp;
