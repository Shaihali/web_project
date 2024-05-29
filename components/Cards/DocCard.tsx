import { IDocCardData } from "@/types";
import { Button, Text, Title } from "@/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  &:first-child {
    flex: 0 0 58%;
    max-height: 684px;
    min-height: 661px;

    @media ${(props) => props.theme.media.large_phone} {
      flex: 1 0 58%;
    }
    @media ${(props) => props.theme.media.phone} {
      min-height: 516px;
    }

    div > img {
      height: 500px;
      @media ${(props) => props.theme.media.phone} {
        height: 360px;
      }
    }
  }
  &:nth-child(2) {
    flex: 0 0 39%;
    max-height: 684px;
    min-height: 661px;

    @media ${(props) => props.theme.media.large_phone} {
      flex: 1 0 39%;
      min-height: 556px;
    }
    div > img {
      height: 500px;
      @media ${(props) => props.theme.media.large_phone} {
        height: 340px;
      }
      @media ${(props) => props.theme.media.phone} {
        height: 360px;
      }
    }
  }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    flex: 0 1 31.5%;
    max-height: 556px;
    min-height: 556px;
    @media ${(props) => props.theme.media.large_phone} {
      flex: 1 1 31.5%;
    }
    @media ${(props) => props.theme.media.small_phone} {
      min-height: 456px;
    }

    div > img {
      height: 340px;
    }
  }
`;
const ImageBox = styled.div``;

const Image = styled.img`
  width: 100%;
  border-radius: 24px;
  height: 100%;
  object-fit: cover;
`;

const Box = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
type DocCardComponent = {
  data: IDocCardData;
};
export const DocCardComponent: FC<DocCardComponent> = ({ data }) => {
  const route = useRouter();
  return (
    <Card>
      <ImageBox>
        <Image src={data.image} alt="" />
      </ImageBox>
      <Box>
        <Title size={2.6} color={"#44597D"}>
          {data.title}
        </Title>
        <Button
          $background="filled"
          style={{ width: "100%" }}
          height={6.4}
          href={`/articles/${data.id}`}
        >
          Открыть документ
        </Button>
      </Box>
    </Card>
  );
};
