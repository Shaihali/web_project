import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  font-size: 2.5rem;
`;
export const NoDataComponent = () => {
  return <Container style={{ height: "800" }}>Нет Данных</Container>;
};
