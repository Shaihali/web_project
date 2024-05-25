import { FC, MouseEvent, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  border: transparent;
  border-radius: ${(props) => props.radius || 24}px;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  font-family: inherit;
  color: ${(props) => (props.bg === "filled" ? "#fff" : "#000")};
  background-color: ${(props) => (props.bg === "filled" ? "#44597D" : "#fff")};
  width: ${(props) => props.w || 188}px;
  height: ${(props) => props.h || 48}px;

  @media ${(props) => props.theme.media.tablet} {
    width: 172px;
    height: 42px;
    order: 2;
  }
`;

type ButtonProps = PropsWithChildren & {
  w?: number;
  h?: number;
  bg?: string;
  radius?: number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
