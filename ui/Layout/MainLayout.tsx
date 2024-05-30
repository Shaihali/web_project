"use client";
import {
  CarouselComponent,
  InfoMinorComponent,
  TopSectionComponent,
} from "@/components";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.tablet} {
    max-width: 1166px;
  }
`;
const PaddingBox = styled.div`
  padding: 20px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.tablet} {
    padding: 20px 0 20px 20px;
  }
  @media ${(props) => props.theme.media.small_phone} {
    padding: 20px 0 20px 20px;
  }
`;

const BackGround = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #cfd8dd;
  height: 648px;
  width: 100%;
  z-index: -1;
`;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Wrapper>
        <PaddingBox>
          <BackGround />
          <TopSectionComponent />
          <CarouselComponent />
          <InfoMinorComponent />
          {children}
        </PaddingBox>
      </Wrapper>
    </main>
  );
};
