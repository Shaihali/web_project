import { FC } from "react";
import { CardData } from "../Main";
import styled, { CSSProperties } from "styled-components";
import Image from "next/image";
import { Text, Title } from "@/ui";
import { Badge } from "@/components";

const Card = styled.div`
  height: 540px;
  max-width: 724px;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${(props) => props.theme.media.tablet} {
    max-width: 571px;
  }

  @media ${(props) => props.theme.media.phone} {
    max-width: 540px;
  }
`;

const CardItem = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 369px;
  position: relative;
`;

const imageStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderBottomLeftRadius: "24px",
  borderBottomRightRadius: "24px",
};

type LargeCardProps = {
  data: CardData;
};
export const LargeCard: FC<LargeCardProps> = ({ data }) => {
  return (
    <Card>
      <CardItem>
        <Title tag="h3" size={28} color="#44597d">
          {data.title}
        </Title>
        <Text size={18} color="#858a92" textcut={170}>
          {data.description}
        </Text>
      </CardItem>
      <ImageBox>
        <Badge status="completed" pos="absolute" top={24} right={24} />
        <Image src={data.image} alt={data.title} style={imageStyle} />
      </ImageBox>
    </Card>
  );
};
