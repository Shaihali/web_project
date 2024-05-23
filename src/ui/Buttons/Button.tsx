import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: transparent;
  border-radius: 24px;
  font: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 19.5px;
  font-family: inherit;
  color: ${(props: ButtonProps) => (props.bg === "filled" ? "#fff" : "#000")};
  background-color: ${(props: ButtonProps) =>
    props.bg === "filled" ? "#44597D" : "#fff"};
  width: ${(props: ButtonProps) => props.w}px;
  height: ${(props: ButtonProps) => props.h}px;
`;

type ButtonProps = PropsWithChildren & {
  w?: number;
  h?: number;
  bg?: string;
};

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
