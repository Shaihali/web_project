import styled from "styled-components";
import { NavMenuComponent } from "../NavMenu";
import { Text, Title } from "@/ui";
import { IconVK } from "@/assets";

const Container = styled.div`
  width: 100%;
  height: 492px;
  background-color: #44597d;
`;
const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  height: 100%;
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 120px 20px;
  box-sizing: border-box;
  gap: 32px;

  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    padding: 50px 20px;
  }
`;
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 388px;
`;
const Connect = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media ${(props) => props.theme.media.phone} {
    justify-content: space-between;
  }
`;
const NavBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const IconBox = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
`;

export const FooterComponent = () => {
  return (
    <Container>
      <Wrapper>
        <FooterBox>
          <TitleBox>
            <Title color={"#fff"} size={8.5}>
              Выбор
            </Title>
            <Text color="#CFD8DD" size={2.2}>
              Межрегиональная общественная организация социального
              предупреждения правонарушений &quot;ВЫБОР&quot;
            </Text>
          </TitleBox>
          <NavBox>
            <NavMenuComponent pos="footer" />
            <Connect>
              <Text color="#CFD8DD" size={2.2}>
                Присоединяйся к нам ВКонтакте
              </Text>
              <IconBox>
                <IconVK />
              </IconBox>
            </Connect>
          </NavBox>
        </FooterBox>
      </Wrapper>
    </Container>
  );
};
