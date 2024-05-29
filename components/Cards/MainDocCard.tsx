import { IDocCardData } from "@/types";
import { Button, Text, Title } from "@/ui";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 663px;

  @media ${(props) => props.theme.media.tablet} {
    height: 726px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 600px;
  }
  @media ${(props) => props.theme.media.small_phone} {
    height: 586px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  gap: 32px;
`;
const ImageBox = styled.div<{ flex?: number }>`
  flex: ${(props) => `0 1 ${props.flex}%`};
  height: 500px;
  @media ${(props) => props.theme.media.large_phone} {
    height: 460px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 300px;
  }
`;
const Image = styled.img`
  width: 100%;
  border-radius: 24px;
  height: 100%;
  object-fit: cover;
`;

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 39% 59%;
  column-gap: 32px;
  margin-top: 30px;

  @media ${(props) => props.theme.media.phone} {
    grid-template-rows: 0.5fr 1fr 1fr;
    column-gap: 0px;
  }
`;

const Button_mod = styled(Button)`
  width: 100%;
  border: 1px solid;
  margin-top: 16px;
  color: #44597d;
  padding: 10px 0;

  @media ${(props) => props.theme.media.phone} {
    grid-row-start: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
const Text_mod = styled(Text)`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;

  @media ${(props) => props.theme.media.phone} {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const Title_mod = styled(Title)`
  @media ${(props) => props.theme.media.phone} {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

type MainDocCardComponentProps = {
  data: IDocCardData;
};
export const MainDocCardComponent: FC<MainDocCardComponentProps> = ({
  data,
}) => {
  return (
    <Container>
      <ImageContainer>
        <ImageBox flex={40}>
          <Image alt="" src={data.image} />
        </ImageBox>
        <ImageBox flex={60}>
          <Image alt="" src={data.data?.image} />
        </ImageBox>
      </ImageContainer>
      <GridStyled>
        <Title_mod size={4.8} color={"#44597D"}>
          {data.title}
        </Title_mod>
        <Button_mod height={6.4} as={Link} href={`/articles/${data.id}`}>
          Открыть документ
        </Button_mod>
        <Text_mod color="#44597D" size={2.6}>
          {String(data.data?.text)}
        </Text_mod>
      </GridStyled>
    </Container>
  );
};
