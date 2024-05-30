"use client";
import { Layout } from "@/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { ThemeProvider } from "styled-components";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  const theme = {
    media: {
      small_phone: "(max-width: 576px)",
      phone: "(max-width: 640px)",
      large_phone: "(max-width: 992px)",
      tablet: "(max-width: 1366px)",
      large: "(max-width: 1586px) and (min-width: 1366px)",
    },
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
