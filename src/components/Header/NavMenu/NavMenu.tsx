import { BurgerMenu } from "@/components";
import Link from "next/link";
import styled from "styled-components";

export interface ListData {
  id: number;
  label: string;
  href: string;
}
const LIST_DATA: ListData[] = [
  { id: 1, label: "ГЛАВНАЯ", href: "/" },
  { id: 2, label: "КОНТАКТЫ", href: "/contacts" },
  { id: 3, label: "КАК ПОМОЧЬ", href: "/help" },
  { id: 4, label: "СОТРУДНИКИ", href: "/employes" },
  { id: 5, label: "ПАРТНЕРЫ", href: "/partners" },
  { id: 6, label: "РЕКВИЗИТЫ", href: "/requisites" },
];

const List = styled.ul`
  display: flex;
  gap: 48px;
  align-items: center;
  margin: 0;
  padding: 0;
  @media ${(props) => props.theme.media.tablet} {
    display: none;
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

export const NavMenu = () => {
  return (
    <>
      <BurgerMenu data={LIST_DATA} />
      <List>
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
