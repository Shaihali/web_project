import styled from "styled-components";
import { NavMenuComponent } from "../NavMenu";
import { Button, Flex, Title } from "@/ui";

const Header = styled.header`
  background-color: #44597d;
  height: var(--header-height);
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

const Flex_mod = styled(Flex)`
  gap: calc(100vw / 6);

  @media ${(props) => props.theme.media.large} {
    gap: 70px;
  }
  @media ${(props) => props.theme.media.tablet} {
    gap: 24px;
  }
`;
export const HeaderComponent = () => {
  return (
    <Header>
      <HeaderBox>
        <Flex_mod>
          <Logo tag="h2" color="#fff" size={3.4}>
            Выбор
          </Logo>
          <NavMenuComponent />
        </Flex_mod>
        <Button width={18.8} height={4.8} href={"/"}>
          Помочь нам
        </Button>
      </HeaderBox>
    </Header>
  );
};
