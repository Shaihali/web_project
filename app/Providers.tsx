"use client";
import { Layout } from "@/ui";
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
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
    <ThemeProvider theme={theme}>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};
