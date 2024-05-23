import { Button } from "@/ui";
import styled from "styled-components";
import { NavMenu } from "./NavMenu";

const Header = styled.header`
  background-color: #44597d;
  height: 90px;
`;
const HeaderBox = styled.div`
  max-width: 1920px;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 80px;
`;

const Logo = styled.h2`
  color: #fff;
`;
export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderBox>
        <Logo>Выбор</Logo>
        <NavMenu />
        <Button w={188} h={48}>
          Помочь нам
        </Button>
      </HeaderBox>
    </Header>
  );
};
