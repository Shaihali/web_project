import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const FlexStyled = styled.div`
  display: flex;
  align-items: center;
  gap: calc(100vw / 6);

  @media ${(props) => props.theme.media.large} {
    gap: 70px;
  }
  @media ${(props) => props.theme.media.tablet} {
    gap: 24px;
  }
`;
export const Flex: FC<PropsWithChildren> = ({ children }) => {
  return <FlexStyled>{children}</FlexStyled>;
};
