import { IDocCardData } from "@/types";
import { Button, Text, Title } from "@/ui";
import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 663px;
`;
const ImageContainer = styled.div`
  display: flex;
  gap: 32px;
`;
const ImageBox = styled.div`
  flex: ${(props) => `0 1 ${props.flex}%`};
  height: 500px;
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
  padding: 16px 0;
`;

const Button_mod = styled(Button)`
  width: 100%;
  border: 1px solid;
  margin-top: 16px;
`;
const Text_mod = styled(Text)`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
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
          <Image alt="" src={data.image} />
        </ImageBox>
      </ImageContainer>
      <GridStyled>
        <Title size={4.8} color={"#44597D"}>
          {data.title}
        </Title>
        <Button_mod>Открыть документ</Button_mod>
        <Text_mod color="#44597D" size={2.6}>
          {data.data?.text}
        </Text_mod>
      </GridStyled>
    </Container>
  );
};
