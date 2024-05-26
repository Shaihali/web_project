import { FC } from "react";
import styled from "styled-components";

const TextStyled = styled.p<TextProps>`
  font-size: ${(props) => props.size}rem;
  color: ${(props) => props.color};
  padding-right: ${(props) => props.pr}px;
  z-index: 10;
`;
type TextProps = {
  children: string;
  size?: number;
  color?: string;
  pr?: number;
  textcut?: number;
};
export const Text: FC<TextProps> = ({ children, ...props }) => {
  const { textcut } = props;
  return (
    <TextStyled {...props}>
      {children.length > textcut!
        ? `${children.slice(0, textcut)}. . .`
        : children}
    </TextStyled>
  );
};
