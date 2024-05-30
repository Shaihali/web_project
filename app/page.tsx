"use client";
import {
  LargeCardComponent,
  SmallCardComponent,
  TabsComponent,
  TopSectionComponent,
} from "@/components";
import { cardsData, smallCardsData } from "@/db";
import { Flex } from "@/ui";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const dataValues = cardsData;
const dataValues2 = smallCardsData;

const BackgroundContainer = styled.div`
  padding: 20px;
  padding-bottom: 120px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 20px 0 20px 20px;
  }
  @media ${(props) => props.theme.media.small_phone} {
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
    box-sizing: border-box;
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
    padding-right: 20px;
  }
`;

const Flex_mod = styled(Flex)`
  flex-direction: column;
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

const slug = "onk";
export default function Home() {
  return (
    <main>
      <BackgroundContainer>
        <Wrapper>
          <Flex_mod>
            <BackGround />
            <TopSectionComponent />
            {/* <CarouselComponent> */}
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 320px
                1146: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 480px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                540: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                376: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 358,
                },
              }}
            >
              {dataValues.map((data) => (
                <SwiperSlide key={data.id}>
                  <LargeCardComponent data={data} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* </CarouselComponent> */}
            <SmallCardContainer>
              {dataValues2.map((data) => (
                <SmallCardComponent key={data.id} data={data} />
              ))}
            </SmallCardContainer>
            <TabsComponent />
          </Flex_mod>
        </Wrapper>
      </BackgroundContainer>
    </main>
  );
}
