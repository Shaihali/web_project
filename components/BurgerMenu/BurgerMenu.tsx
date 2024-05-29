import styled from "styled-components";
import { FC, useState, useEffect } from "react";
import { INavMenu } from "@/types";
import Link from "next/link";

const Menu = styled.div`
  display: none;

  @media ${(props) => props.theme.media.tablet} {
    display: block;
  }
`;

const CheckBox = styled.input`
  position: absolute;
  visibility: hidden;
`;
const Burger = styled.div`
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: block;
  position: relative;
  border: none;
  background: transparent;
  width: 40px;
  height: 26px;
`;

const BurgerBefore = styled.div<{ $isOpen: boolean }>`
  content: "";
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #fff;
  top: ${(props) => (props.$isOpen ? 11 : 0)}px;
  transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "")};
  box-shadow: ${(props) =>
    props.$isOpen ? "0 6px 0 rgba(0, 0, 0, 0)" : "0 11px 0 #fff"};
  transition: box-shadow 0.3s 0.15s, top 0.3s 0.15s, transform 0.3s;
`;

const BurgerAfter = styled.div<{ $isOpen: boolean }>`
  content: "";
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: #fff;
  bottom: ${(props) => (props.$isOpen ? 11 : 0)}px;
  transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "")};
  transition: bottom 0.3s 0.15s, transform 0.3s;
`;

const MenuList = styled.ul<{ $isOpen: boolean; $isNone: boolean }>`
  top: var(--header-height);
  left: 0;
  position: absolute;
  display: ${(props) => (props.$isNone ? "flex" : "none")};
  gap: 24px;
  border-top: 2px solid #a3b1c9;
  padding-top: 80px;
  flex-direction: column;
  background: #44597d;
  list-style-type: none;

  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.3s;
  width: 100%;
  height: 100vh;
  z-index: 100;
`;

const MenuItem = styled.li`
  display: block;
  padding: 8px;
  color: white;
  font-size: 18px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  > a {
    color: inherit;
    text-decoration: none;
  }
`;
type BurgerMenuProps = {
  data: INavMenu[];
};
export const BurgerMenuComponent: FC<BurgerMenuProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNone, setIsNone] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const handleItemClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    setIsNone(true);
  }, []);
  return (
    <Menu>
      <CheckBox type="checkbox" />
      <Burger onClick={handleToggle}>
        <BurgerBefore $isOpen={isOpen} />
        <BurgerAfter $isOpen={isOpen} />
      </Burger>
      <MenuList $isOpen={isOpen} $isNone={isNone}>
        {data.map((item) => (
          <MenuItem key={item.id}>
            <Link href={item.href} onClick={handleItemClick}>
              {item.label}
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
