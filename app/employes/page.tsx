"use client";
import { Title } from "@/ui";
import styled from "styled-components";

const Container = styled.div`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  gap: 90px;

  @media ${(props) => props.theme.media.tablet} {
    margin: 64px 0;
    gap: 64px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 0 24px;
    margin: 40px 0;
  }
`;
const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  @media ${(props) => props.theme.media.tablet} {
    gap: 24px;
  }
`;

import db from "../../db/employes.json";
import { EmployeCardComponent } from "@/components";
import { IEmploye } from "@/types";
export default function EmployeePage() {
  const employeesData: IEmploye[] = db;
  return (
    <Container>
      <Title tag="h1" size={6.4} color="#44597D">
        Наши сотрудники
      </Title>
      <CardBox>
        {employeesData.map((data) => (
          <EmployeCardComponent key={data.id} data={data} />
        ))}
      </CardBox>
    </Container>
  );
}
