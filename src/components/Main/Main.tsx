import { TitleSection } from "@/ui";
import styled from "styled-components";
import { LargeCard } from "./Cards";
import image from "../../assets/card/Image.jpg";
import { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = styled.main``;
const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  padding-top: 120px;
  background-color: #cfd8dd;
  height: 678px;
  padding: 20px;
`;

const CardContainer = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 32px;
`;

export type CardData = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};
const cardsData: CardData[] = [
  {
    id: 1,
    title: "Комплексная помощь женщинам",
    description:
      "без определенного места жительства освободившимся из МПС Пермского края",
    image: image,
  },
  {
    id: 1,
    title: "Профилактика правонарушений",
    description:
      "в Пермском крае через осуществление общественного контроля членами ОНК и ресоциализацию освободившихся из мест принудительного содержания через социальное сопровождение",
    image: image,
  },
];

export const MainComponent = () => {
  return (
    <Main>
      <TopContainer>
        <Wrapper>
          <TitleSection />
          <CardContainer>
            {cardsData.map((data) => (
              <LargeCard key={data.id} data={data} />
            ))}
          </CardContainer>
        </Wrapper>
      </TopContainer>
    </Main>
  );
};
