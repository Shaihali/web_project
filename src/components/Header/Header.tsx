import { Button, Flex, Title } from "@/ui";
import styled from "styled-components";
import { NavMenu } from "./NavMenu";
import { BurgerMenu } from "../BurgerMenu";

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
  @media ${(props) => props.theme.media.tablet} {
    max-width: 1366px;
    padding: 0 24px;
  }
  @media ${(props) => props.theme.media.phone} {
    max-width: 640px;
    padding: 0 24px;
  }
`;

const Logo = styled(Title)`
  @media ${(props) => props.theme.media.tablet} {
    order: 1;
    font-weight: 400;
  }
`;
export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderBox>
        <Flex>
          <Logo tag="h2" color="#fff" size={3.4}>
            Выбор
          </Logo>
          <NavMenu />
        </Flex>
        <Button w={18.8} h={4.8}>
          Помочь нам
        </Button>
      </HeaderBox>
    </Header>
  );
};
