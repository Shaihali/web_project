import styled from "styled-components";
import { SmallCardComponent } from "../Cards";
import { useQuery } from "@tanstack/react-query";
import { ISmallCardData } from "@/types";

const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 32px;
  row-gap: 16px;
  margin: 80px 0;

  @media ${(props) => props.theme.media.tablet} {
    column-gap: 20px;
    box-sizing: border-box;
  }
  @media ${(props) => props.theme.media.large_phone} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 20px;
  }
  @media ${(props) => props.theme.media.small_phone} {
    margin: 0;
    padding-right: 20px;
  }
`;
interface IData {
  //Временно
  infoMinor: ISmallCardData[];
}
import db from "../../db/info_minor.json"; //Временно
const URL = process.env.NEXT_PUBLIC_URL;
export const InfoMinorComponent = () => {
  const isSuccess = true; // временно
  const data: IData = { infoMinor: db }; // временно
  // const { data, isLoading, isSuccess } = useQuery({
  //   queryFn: async () => {
  //     const res = await fetch(`${URL}api/infominor`);
  //     return await res.json();
  //   },
  //   queryKey: ["infoMinor"],
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <SmallCardContainer>
      {isSuccess
        ? data.infoMinor.map((data: ISmallCardData) => (
            <SmallCardComponent key={data.id} data={data} />
          ))
        : null}
    </SmallCardContainer>
  );
};
