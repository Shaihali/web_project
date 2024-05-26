"use client";
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const TitleStyled = styled((props: TitleProps) => props.tag)<TitleProps>`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
`;
type TitleProps = PropsWithChildren & {
  tag?: string;
  size?: number;
  color?: string;
};
export const Title: FC<TitleProps> = ({ children, tag = "h1", ...props }) => {
  return (
    <TitleStyled as={tag} {...props}>
      {children}
    </TitleStyled>
  );
};
