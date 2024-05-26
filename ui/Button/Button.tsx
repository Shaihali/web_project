"use client";
import { FC, MouseEvent, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  border: transparent;
  border-radius: ${(props) => props.radius || 24}px;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 19.5px;
  font-family: inherit;
  color: ${(props) => (props.$background === "filled" ? "#fff" : "#000")};
  background-color: ${(props) =>
    props.$background === "filled" ? "#44597D" : "#fff"};
  width: ${(props) => props.width || 18.8}rem;
  height: ${(props) => props.height || 4.8}rem;
`;

type ButtonProps = PropsWithChildren & {
  width?: number;
  height?: number;
  $background?: string;
  radius?: number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
