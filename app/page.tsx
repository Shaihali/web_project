"use client";

import {
  CarouselComponent,
  LargeCardComponent,
  SmallCardComponent,
  TabsComponent,
  TopSectionComponent,
} from "@/components";
import { cardsData, smallCardsData } from "@/db";
import { Flex } from "@/ui";
import styled from "styled-components";
import { useCallback } from "react";

const dataValues = cardsData;
const dataValues2 = smallCardsData;

const BackgroundContainer = styled.div`
  padding-top: 120px;
  background-color: #cfd8dd;
  height: 678px;
  padding: 20px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 20px 0 20px 20px;
  }
`;

const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.tablet} {
    max-width: 1166px;
  }
`;

const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 32px;
  row-gap: 16px;
  margin: 80px 0;

  @media ${(props) => props.theme.media.tablet} {
    column-gap: 20px;
  }
  @media ${(props) => props.theme.media.large_phone} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 20px;
  }
  @media ${(props) => props.theme.media.small_phone} {
    margin: 0;
    padding-right: 10px;
  }
`;

export default function Home() {
  const handleTabsClick = useCallback((value: string) => {
    console.log(value);
  }, []);
  return (
    <main>
      <BackgroundContainer>
        <Wrapper>
          <Flex $direction="column">
            <TopSectionComponent />
            <CarouselComponent>
              {dataValues.map((data) => (
                <LargeCardComponent key={data.id} data={data} />
              ))}
            </CarouselComponent>
            <SmallCardContainer>
              {dataValues2.map((data) => (
                <SmallCardComponent key={data.id} data={data} />
              ))}
            </SmallCardContainer>
            <TabsComponent callback={handleTabsClick} />
            <div style={{ width: "100px" }}>ff</div>
          </Flex>
        </Wrapper>
      </BackgroundContainer>
    </main>
  );
}
