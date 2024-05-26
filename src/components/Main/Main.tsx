import { TitleSection } from "@/ui";
import styled from "styled-components";
import { LargeCard } from "./Cards";
import image from "../../assets/card/Image.jpg";
import { StaticImageData } from "next/image";
import { Carousel } from "../Corousel";

const Main = styled.main``;
const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.large} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 1166px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopContainer = styled.div`
  padding-top: 120px;
  background-color: #cfd8dd;
  height: 678px;
  padding: 20px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 20px 0 20px 20px;
  }
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
    id: 2,
    title: "Профилактика правонарушений",
    description:
      "в Пермском крае через осуществление общественного контроля членами ОНК и ресоциализацию освободившихся из мест принудительного содержания через социальное сопровождение",
    image: image,
  },
  {
    id: 3,
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
          <Carousel>
            {cardsData.map((data) => (
              <LargeCard key={data.id} data={data} />
            ))}
          </Carousel>
        </Wrapper>
      </TopContainer>
    </Main>
  );
};
