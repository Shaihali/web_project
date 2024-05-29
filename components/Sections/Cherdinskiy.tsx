import { docCardData } from "@/db";
import { Text, Title } from "@/ui";
import styled from "styled-components";
import { DocCardComponent, MainDocCardComponent } from "../Cards";
import { IDocCardData } from "@/types";
import { PaginationComponent } from "../Pagination";

const dataList = docCardData;
const Container = styled.div`
  width: 100%;
  @media ${(props) => props.theme.media.small_phone} {
    padding-right: 20px;
    box-sizing: border-box;
  }
`;
console.log(dataList);
const ContentBox = styled.div``;
const FlexStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 80px;
  margin-top: 32px;
  justify-content: center;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.media.small_phone} {
    row-gap: 36px;
  }
`;
export const CherdinskiyComponent = () => {
  const data = {
    title: "Чердынский район",
  };
  const mainDoc: IDocCardData = dataList.filter((data) => data.data)[0];

  return (
    <Container>
      <Title tag={"h2"} size={6}>
        {data.title}
      </Title>
      <ContentBox>
        <MainDocCardComponent data={mainDoc} />
        <FlexStyled>
          {dataList.map((data) => {
            if (data.data) {
              return;
            } else {
              return <DocCardComponent key={data.id} data={data} />;
            }
          })}
        </FlexStyled>
      </ContentBox>
      <PaginationComponent />
    </Container>
  );
};
