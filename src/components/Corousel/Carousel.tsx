import { getSliderMetrics } from "@/utils";
import { IconArrowBadgeLeft, IconArrowBadgeRight } from "@tabler/icons-react";
import { FC, PropsWithChildren, ReactNode, useRef, useState } from "react";
import styled from "styled-components";

interface AllPagesContainerProps {
  offset: number;
  theme: {
    media: {
      tablet: string;
      phone: string;
      large: string;
    };
  };
}

const MainContainer = styled.div`
  margin-top: 64px;
  height: 540px;
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;

  @media ${(props) => props.theme.media.large} {
    width: 1166px;
  }
`;
const Window = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const AllPagesContainer = styled.div<AllPagesContainerProps>`
  height: 100%;
  display: flex;
  gap: 32px;
  transform: translateX(${(props) => props.offset}px);

  @media ${(props) => props.theme.media.large} {
    gap: 24px;
  }
  @media ${(props) => props.theme.media.tablet} {
    gap: 24px;
  }
  @media ${(props) => props.theme.media.phone} {
    gap: 10px;
  }
`;
export const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleLeftArrowClick = () => {
    setOffset((current) => {
      const metrics = getSliderMetrics(sliderRef);
      if (!metrics) {
        return current;
      }

      const newOffset = current + (metrics.elemntWidth + metrics.gapNum);
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((current) => {
      const metrics = getSliderMetrics(sliderRef);
      if (!metrics) {
        return current;
      }
      const newOffset = current - (metrics.elemntWidth + metrics.gapNum);
      const maxOffset = -(
        metrics.elemntWidth *
        (sliderRef.current?.children.length! - 1)
      );
      return Math.max(newOffset, maxOffset);
    });
  };

  const handleWheel = () => {
    console.log("ss");
  };
  return (
    <MainContainer>
      <IconArrowBadgeLeft
        style={{ cursor: "pointer", position: "absolute" }}
        onClick={handleLeftArrowClick}
      />
      <Window>
        <AllPagesContainer
          offset={offset}
          ref={sliderRef}
          onWheel={handleWheel}
        >
          {children}
        </AllPagesContainer>
      </Window>
      <IconArrowBadgeRight
        style={{ cursor: "pointer", position: "absolute" }}
        onClick={handleRightArrowClick}
      />
    </MainContainer>
  );
};
