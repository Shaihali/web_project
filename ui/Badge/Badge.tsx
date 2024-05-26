import { IconCheck } from "@/assets";
import { Text } from "@/ui";
import { FC } from "react";
import styled from "styled-components";

const BadgeStyled = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) =>
    props.$status === "completed" ? "#30c76c" : "red"};
  width: 166px;
  height: 36px;
  border-radius: 8px;
  position: ${(props) => props.$pos};
  top: ${(props) => props.$top}px;
  right: ${(props) => props.$right}px;
`;
type BadgeProps = {
  $status?: string;
  $pos?: string;
  $top?: number;
  $right?: number;
};
export const Badge: FC<BadgeProps> = ({ ...props }) => {
  const { $status } = props;
  return (
    <BadgeStyled {...props}>
      <Text color="#fff" size={1.8}>
        {$status === "completed" ? "ЗАВЕРШЕН" : "АКТИВНЫЙ"}
      </Text>
      <IconCheck />
    </BadgeStyled>
  );
};
