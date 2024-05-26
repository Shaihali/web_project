import { FC, PropsWithChildren } from "react";
import styled, { useTheme } from "styled-components";

type TitleProps = PropsWithChildren & {
  tag?: string;
  size?: number;
  color?: string;
};
export const Title: FC<TitleProps> = ({ children, tag = "h1", ...props }) => {
  const theme = useTheme();

  const TitleStyled = styled(tag)<TitleProps>`
    ${({ size, color }) => `
      font-size: ${size ? `${size}px;` : "34px"}
      color: ${color ? `${color};` : "#000"}
       @media ${theme.media.tablet} {
        font-size: 24px;
      }
    `}
  `;
  return <TitleStyled {...props}>{children}</TitleStyled>;
};
