import { ITabsList } from "@/types";
import { useState } from "react";
import styled from "styled-components";
import { CherdinskiyComponent, NoDataComponent } from "../Sections";
import { PaginationComponent } from "../Pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "./style.css";

const TABS_LIST: ITabsList[] = [
  { id: 1, value: "ОНК", label: "onk" },
  { id: 2, value: "ОСУЖДЕННЫМ", label: "convicted" },
  { id: 3, value: "ЧЕРДЫНСКИЙ РАЙОН", label: "cherdinskiy" },
  { id: 4, value: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ", label: "constituentDoc" },
  { id: 5, value: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", label: "privacyPolice" },
];

const Tabs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #b4b9bb;
  //   padding: 10px;
`;

const TabsItem = styled.li<{ isSelected?: boolean }>`
  font-size: 2.2rem;
  color: ${(props) => (props.isSelected ? "#44597D" : "#B4B9BB")};
  cursor: pointer;
  border-bottom: ${(props) => (props.isSelected ? "2px solid #44597D" : "")};
  padding-bottom: 12px;
  position: relative;
  bottom: ${(props) => (props.isSelected ? "-2px" : "0")};

  @media ${(props) => props.theme.media.tablet} {
    font-size: 1.6rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1rem;
  }

  @media ${(props) => props.theme.media.small_phone} {
    margin-top: 20px;
  }
`;

export const TabsComponent = () => {
  const [selected, setSelected] = useState("cherdinskiy");

  const handleClick = (value: string) => {
    setSelected(value);
  };

  const getContent = () => {
    switch (selected) {
      case "onk":
        return {
          content: <NoDataComponent />,
        };

      case "convicted":
        return {
          content: <NoDataComponent />,
        };

      case "cherdinskiy":
        return {
          content: <CherdinskiyComponent />,
        };

      case "constituentDoc":
        return {
          content: <NoDataComponent />,
        };

      case "privacyPolice":
        return {
          content: <NoDataComponent />,
        };
      default:
        return {
          content: null,
        };
    }
  };

  return (
    <>
      <Tabs>
        {TABS_LIST.map((tab) => (
          <TabsItem
            key={tab.id}
            isSelected={selected === tab.label}
            onClick={() => handleClick(tab.label)}
          >
            {tab.value}
          </TabsItem>
        ))}
      </Tabs>
      {/* <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          1366: {
            slidesPerView: 5,

            spaceBetween: 0,
            centeredSlides: false,
            allowTouchMove: false,
          },
        }}
      >
        {TABS_LIST.map((tab) => (
          <SwiperSlide key={tab.id} onClick={() => handleClick(tab.label)}>
            {tab.value}
          </SwiperSlide>
        ))}
      </Swiper> */}
      {getContent().content}
    </>
  );
};
