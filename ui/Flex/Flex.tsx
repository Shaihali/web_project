"use client";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const FlexStyled = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$align || "center"};
  gap: ${(props) => props.$gap || 0}px;
  justify-content: ${(props) => props.$justify};
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "no-wrap")};
`;

type FlexProps = PropsWithChildren & {
  $gap?: number;
  $align?: string;
  $direction?: string;
  $justify?: string;
  $wrap?: boolean;
};
export const Flex: FC<FlexProps> = ({ children, ...props }) => {
  return <FlexStyled {...props}>{children}</FlexStyled>;
};
