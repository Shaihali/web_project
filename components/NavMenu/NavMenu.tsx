import { BurgerMenuComponent } from "@/components";
import { INavMenu } from "@/types";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const LIST_DATA: INavMenu[] = [
  { id: 1, label: "ГЛАВНАЯ", href: "/" },
  { id: 2, label: "КОНТАКТЫ", href: "/" },
  { id: 3, label: "КАК ПОМОЧЬ", href: "/" },
  { id: 4, label: "СОТРУДНИКИ", href: "/employes" },
  { id: 5, label: "ПАРТНЕРЫ", href: "/" },
  { id: 6, label: "РЕКВИЗИТЫ", href: "/" },
];

const List = styled.ul<{ $isView: string | undefined }>`
  display: flex;
  gap: 48px;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  @media ${(props) => props.theme.media.tablet} {
    ${(props) => props.$isView || "display: none"};
  }
`;

const Item = styled.li`
  list-style-type: none;
`;

const Links = styled.link`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 22.78px;
  color: #fff;

  @media ${(props) => props.theme.media.large} {
    font-size: 14px;
  }
`;

type NavMenuComponentProps = {
  pos?: string;
};
export const NavMenuComponent: FC<NavMenuComponentProps> = ({ pos }) => {
  return (
    <>
      {pos === "footer" ? "" : <BurgerMenuComponent data={LIST_DATA} />}
      <List $isView={pos}>
        {LIST_DATA.map((item) => (
          <Item key={item.id}>
            <Links as={Link} href={item.href}>
              {item.label}
            </Links>
          </Item>
        ))}
      </List>
    </>
  );
};
