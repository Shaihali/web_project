import { HeaderComponent } from "@/components";
import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderComponent />

      {children}
    </>
  );
};
