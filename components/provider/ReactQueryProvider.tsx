import { AppInitialProps } from "next/app";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props {
  children: React.ReactNode;
  pageProps: AppInitialProps["pageProps"];
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
    },
  },
});

const ReactQueryProvider = ({ children, pageProps }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
