import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styled from "styled-components";

import { useState } from "react";

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  height: 48px;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.media.small_phone} {
    flex-direction: column;
    height: 144px;
  }
`;
const PageBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media ${(props) => props.theme.media.small_phone} {
    flex-direction: column;
  }
`;

const Info = styled.p`
  font-size: 1.8rem;
`;
const PageValueBox = styled.div`
  display: flex;
  gap: 4px;
`;
const PageValue = styled.div<{ isCurr: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 48px;
  height: 48px;
  background-color: ${(props) => (props.isCurr ? "#44597d" : "")};
  border: 1px solid #44597d;
  border-radius: 50%;
  color: #fff;
`;
const Value = styled.span<{ isCurr: boolean }>`
  color: ${(props) => (props.isCurr ? "#fff" : "#000")};
  font-size: 1.5rem;
`;

const Divider = styled.div`
  height: 66%;
`;
const DividerLine = styled.div`
  border: 0.5px solid #a3b1c9;
  margin: 0 20px;
  height: 100%;
`;

const Controller = styled.div`
  display: flex;
  gap: 16px;
  cursor: pointer;
`;

const Button = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #cfd8dd;
  border-radius: 50%;
`;

export const PaginationComponent = () => {
  const [pageNum, setPagwNum] = useState<number>(1);
  const handleClickLeft = () => {
    setPagwNum((curr: number) => {
      console.log(curr);
      if (curr === 1) {
        return 1;
      }
      return curr - 1;
    });
  };
  const handleClickRight = () => {
    setPagwNum((curr: number) => curr + 1);
  };
  return (
    <Container>
      <PageBox>
        <Info>{`страница ${pageNum} из 2 (6 документов)`}</Info>
        <PageValueBox>
          {new Array(1, 2).map((el, index) => (
            <PageValue key={index} isCurr={el === pageNum}>
              <Value isCurr={el === pageNum}>{el}</Value>
            </PageValue>
          ))}
        </PageValueBox>
      </PageBox>
      <Divider>
        <DividerLine />
      </Divider>
      <Controller>
        <Button onClick={handleClickLeft}>
          <IconChevronLeft />
        </Button>
        <Button onClick={handleClickRight}>
          <IconChevronRight />
        </Button>
      </Controller>
    </Container>
  );
};
