"use client";
import { MainLayout } from "@/ui";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};
