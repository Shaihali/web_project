"use client";
import { HeaderComponent } from "@/components";
import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
};
