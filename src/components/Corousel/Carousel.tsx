import { getSliderMetrics } from "@/utils";
import { IconArrowBadgeLeft, IconArrowBadgeRight } from "@tabler/icons-react";
import {
  FC,
  PropsWithChildren,
  ReactNode,
  TouchList,
  useRef,
  useState,
} from "react";
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
  transition: translate;
  transition-property: transform;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
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

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX);
    console.log("событие Down", event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const diff = startX - event.clientX;
      const metrics = getSliderMetrics(sliderRef);
      if (!metrics) {
        return;
      }
      const cardWidth = metrics.elemntWidth + metrics.gapNum;
      const newOffset = Math.round(diff / cardWidth) * cardWidth;
      setOffset((current) => current - newOffset);
      setStartX(event.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    console.log("событие Up");
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      const metrics = getSliderMetrics(sliderRef);
      if (!metrics) {
        return;
      }

      const newX = event.touches[0].clientX;
      const diff = startX - newX;
      setOffset((current) => current + diff);
      setStartX(newX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <MainContainer>
      <IconArrowBadgeLeft
        style={{ cursor: "pointer", position: "absolute", left: 0 }}
        onClick={handleLeftArrowClick}
      />
      <Window
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AllPagesContainer offset={offset} ref={sliderRef}>
          {children}
        </AllPagesContainer>
      </Window>
      <IconArrowBadgeRight
        style={{ cursor: "pointer", position: "absolute", right: 0 }}
        onClick={handleRightArrowClick}
      />
    </MainContainer>
  );
};
