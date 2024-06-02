"use client";
import { FooterComponent, HeaderComponent } from "@/components";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.large} {
    max-width: 1326px;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 952px;
  }
  @media ${(props) => props.theme.media.large_phone} {
    max-width: 600px;
  }
`;
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <Wrapper>{children}</Wrapper>
      <FooterComponent />
    </>
  );
};
