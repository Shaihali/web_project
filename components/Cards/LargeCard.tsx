/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

import styled, { CSSProperties } from "styled-components";

import { Badge, Text, Title } from "@/ui";
import { ICardData } from "@/types";

const Card = styled.div`
  height: 540px;
  min-width: 724px;
  max-width: 724px;
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${(props) => props.theme.media.large} {
    min-width: 571px;
    max-width: 571px;
  }
  @media ${(props) => props.theme.media.tablet} {
    min-width: 571px;
    max-width: 571px;
  }

  @media ${(props) => props.theme.media.phone} {
    min-width: 540px;
    max-width: 540px;
  }

  @media ${(props) => props.theme.media.small_phone} {
    max-height: 440px;
    min-height: 440px;
    min-width: 380px;
    max-width: 380px;
  }
`;

const CardItem = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 10px;

  @media ${(props) => props.theme.media.small_phone} {
    height: 164px;
    max-height: 164px;
    overflow: hidden;
    gap: 10px;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 369px;
  position: relative;
  font-size: 10px;
  overflow: hidden;
`;

const imageStyle: CSSProperties = {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  borderBottomLeftRadius: "24px",
  borderBottomRightRadius: "24px",
};

type LargeCardProps = {
  data: ICardData;
};
export const LargeCardComponent: FC<LargeCardProps> = ({ data }) => {
  return (
    <Card>
      <CardItem>
        <Title tag="h3" size={2.8} color="#44597d">
          {data.title}
        </Title>
        <Text size={1.8} color="#858a92" $textcut={170}>
          {data.description}
        </Text>
      </CardItem>
      <ImageBox>
        <Badge $status="completed" $pos="absolute" $top={24} $right={24} />
        {/* <Image
          src={data.image}
          alt={data.title}
          style={imageStyle}
          
        /> */}

        <img src={data.image} alt={data.title} style={imageStyle} />
      </ImageBox>
    </Card>
  );
};
