import { Title } from "@/ui";
import styled from "styled-components";
import { DocCardComponent, MainDocCardComponent } from "../Cards";
import { INew } from "@/types";
import { PaginationComponent } from "../Pagination";
import { useEffect, useState } from "react";

import { Services } from "@/services";
import { findNewsClosestToDateToday } from "@/utils";
import { useMutation } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  @media ${(props) => props.theme.media.small_phone} {
    padding-right: 20px;
    box-sizing: border-box;
  }
`;

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
  const [pageNum, setPageNum] = useState<number>(1);

  const { newsServices } = Services();
  const {
    data: news,
    mutateAsync,
    isSuccess,
    status,
  } = useMutation({
    mutationFn: async (num: number) => await newsServices.getNews(num),
    mutationKey: ["news"],
  });
  useEffect(() => {
    mutateAsync(pageNum);
  }, [pageNum]);

  const data = {
    title: "Чердынский район",
  };
  if (!(status === "success")) {
    return <div>loading...</div>;
  }

  const lastNews = isSuccess ? findNewsClosestToDateToday(news.news) : [];
  const otherNews = isSuccess
    ? news.news.filter((item: INew) => item.id !== lastNews[0].id)
    : [];

  return (
    <Container>
      <Title tag={"h2"} size={6} color="#44597D">
        {data.title}
      </Title>
      <ContentBox>
        <MainDocCardComponent data={lastNews[0]} />
        <FlexStyled>
          {otherNews.map((data: INew) => (
            <DocCardComponent key={data.id} data={data} />
          ))}
        </FlexStyled>
      </ContentBox>
      <PaginationComponent
        setPagwNum={setPageNum}
        totalItems={isSuccess ? news.count : null}
        currentPage={pageNum}
      />
    </Container>
  );
};
