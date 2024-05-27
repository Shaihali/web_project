import { IDocCardData } from "@/types";
import { Button, Text, Title } from "@/ui";
import { FC } from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  &:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  &:nth-child(2) {
    grid-column-start: 3;
    grid-column-end: 5;
  }
  &:last-child {
    grid-column-start: 3;
    grid-column-end: 5;
  }
`;
const ImageBox = styled.div`
  height: 90%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 24px;
  height: 100%;
  object-fit: cover;
`;

type DocCardComponent = {
  data: IDocCardData;
};
export const DocCardComponent: FC<DocCardComponent> = ({ data }) => {
  return (
    <Card>
      <ImageBox>
        <Image src={data.image} alt="" />
      </ImageBox>
      <Title size={2.6} color={"#44597D"}>
        {data.title}
      </Title>
      <Button $background="filled" style={{ width: "100%" }}>
        Открыть документ
      </Button>
    </Card>
  );
};
