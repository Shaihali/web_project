import { ITabsList } from "@/types";

import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./tabs.css";

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

const TabsItem = styled(Link)<{ $isSelected?: boolean }>`
  font-size: 2.2rem;
  font-weight: ${(props) => (props.$isSelected ? "600" : "400")};
  color: ${(props) => (props.$isSelected ? "#44597D" : "#B4B9BB")};
  cursor: pointer;
  border-bottom: ${(props) => (props.$isSelected ? "3px solid #44597D" : "")};
  padding-bottom: 12px;
  position: relative;
  text-decoration: none;
  bottom: ${(props) => (props.$isSelected ? "-7px" : "0")};

  @media ${(props) => props.theme.media.tablet} {
    font-size: 1.6rem;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1.6rem;
  }

  @media ${(props) => props.theme.media.small_phone} {
    margin-top: 20px;
  }
  @media (max-width: 1366px) and (min-width: 376px) {
    bottom: ${(props) => (props.$isSelected ? "0px" : "0")};
    border-bottom: ${(props) => (props.$isSelected ? "0" : "")};
    padding-bottom: 0px;
  }
`;

export const TabsComponent = () => {
  const params = useParams();

  return (
    <Swiper slidesPerView={2} spaceBetween={5} className="swiper_tab">
      {TABS_LIST.map((tab) => (
        <SwiperSlide key={tab.id}>
          <TabsItem
            href={`/${tab.label}`}
            $isSelected={params.slug === tab.label}
          >
            {tab.value}
          </TabsItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
