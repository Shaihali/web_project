import { Text } from "@/ui";
import { FC } from "react";
import styled from "styled-components";

import { IconArrowRight } from "@tabler/icons-react";
import { ISmallCardData } from "@/types";

interface CardStyledProps {
  $image: string;
}
const Card = styled.div<CardStyledProps>`
  width: 472px;
  min-height: 134px;
  max-height: 284px;
  position: relative;
  display: flex;
  gap: 4px;
  align-items: flex-end;
  padding: 16px;
  box-sizing: border-box;
  font-size: 10px;

  @media ${(props) => props.theme.media.large} {
    width: 374px;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 324px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    border-radius: 24px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }

  &:last-child {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 3;
    grid-column-end: 4;

    @media ${(props) => props.theme.media.large_phone} {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
`;
const ArrowBox = styled.div`
  min-width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
`;
type SmallCardProps = {
  data: ISmallCardData;
};
export const SmallCardComponent: FC<SmallCardProps> = ({ data }) => {
  return (
    <Card $image={data.image}>
      <Text size={2.2} color="#fff">
        {data.description}
      </Text>
      <ArrowBox>
        <IconArrowRight />
      </ArrowBox>
    </Card>
  );
};
