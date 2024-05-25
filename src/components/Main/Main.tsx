import { TitleSection } from "@/ui";
import styled from "styled-components";

const Main = styled.main``;
const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  padding-top: 120px;
  background-color: #cfd8dd;
  height: 678px;
  padding: 20px;
`;

export const MainComponent = () => {
  return (
    <Main>
      <TopContainer>
        <Wrapper>
          <TitleSection />
        </Wrapper>
      </TopContainer>
    </Main>
  );
};
