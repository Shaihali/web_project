"use client";
import {
  CarouselComponent,
  InfoMinorComponent,
  TabsComponent,
  TopSectionComponent,
} from "@/components";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

// Styles

const PaddingBox = styled.div`
  // padding: 20px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.media.phone} {
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
      <>
        <PaddingBox>
          <BackGround />
          <TopSectionComponent />
          <CarouselComponent />
          <InfoMinorComponent />
          <TabsComponent />
          {children}
        </PaddingBox>
      </>
    </main>
  );
};
