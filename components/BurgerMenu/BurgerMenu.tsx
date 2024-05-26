import styled from "styled-components";
import "./BurgerMenu.css";
import { FC } from "react";
import { INavMenu } from "@/types";

const Menu = styled.div`
  display: none;

  @media ${(props) => props.theme.media.tablet} {
    display: block;
  }
`;
type BurgerMenuProps = {
  data: INavMenu[];
};
export const BurgerMenuComponent: FC<BurgerMenuProps> = ({ data }) => {
  return (
    <Menu>
      <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
      <label htmlFor="burger-checkbox" className="burger"></label>
      <ul className="menu-list">
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.href} className="menu-item">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </Menu>
  );
};
