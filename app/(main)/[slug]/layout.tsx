"use client";
import { MainLayout } from "@/ui";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
