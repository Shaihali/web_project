import { FC, MouseEvent, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: transparent;
  border-radius: ${(props: ButtonProps) => props.radius || 24}px;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  font-family: inherit;
  color: ${(props: ButtonProps) => (props.bg === "filled" ? "#fff" : "#000")};
  background-color: ${(props: ButtonProps) =>
    props.bg === "filled" ? "#44597D" : "#fff"};
  width: ${(props: ButtonProps) => props.w || 188}px;
  height: ${(props: ButtonProps) => props.h || 48}px;

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
