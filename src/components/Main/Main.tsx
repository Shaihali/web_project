import { TitleSection } from "@/ui";
import styled from "styled-components";
import { LargeCard, SmallCard } from "./Cards";
import image from "../../assets/card/Image.jpg";
import { StaticImageData } from "next/image";
import { Carousel } from "../Corousel";

const IMAGE_PATH_LARGE =
  "https://s3-alpha-sig.figma.com/img/e14d/869c/b80b878fe960c3607502514fd5d35b42?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qxKGfgMtOsydyT62icU6h267d2-qItMYGY7tfhgGrfZXFJERARR75Y7fatof4PJijve2YJxv0EVg3Lx9HEDwWl-y2S4R9YoHPcJFP67WIdrKpbcRLyIINEv5nzG0rda-E6aPf26JXNPm6~LjvN42T5LkaVfkP2Uu5p3a8Unr3p8yn70db1k~A1A8P0y9VQJ4x0eD6Lb8n~6YQcuDTR2ZUA82hXrpJPpt2jYn3oaKydApe4KvkxmG~rEoOo~5dcxTWQWRtT13~HbaHaLC2W2pk321T2ZWNOjlLyBJR9GNXgaJpW7ymATj~C99bgjRcMNKtUxjSbxYdegN7L4fc5Gruw__";
const IMAGE_PATH_LARGE2 =
  "https://s3-alpha-sig.figma.com/img/3d97/81e5/e6f9f5eda73baff88d198effdacce86e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MnDSCktx2aCQN~II1MkSeVquMZioFO0tI~bKHm-C7A~RS1rxkamzT7wbFj2SNT9VN5w6Fn8Uui72F~tNoYvwCekln5n-VkKgT0~JhFVMPmMcz3ZXOiidfdt23EVlaCWfUNYBUUuvkegTmeMSIC4MItbIraWO5obuRdlnCPjlFUkAl59T9IW0zvbebXjO2rCppC~eAj3Fi5XhIRFJFmwZVYZdJw6wOOVp9cHkIsbZYYb9iN1y9a5DG1o1QhsTE38wFiBAI3FQ~WbCBY-Kg-afKDkw0Hzindn5YLIDokD~dJpDWI~Agug0x8caJ1m9173K1T~9hf2uj8-60LQoVgl2KQ__";
const IMAGEPATH_LARGE3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wk7YbOy_1P2JlNjUoBLcIqBV0PN-8aiTsTrBnchnjQ&s";

const IMAGE_PATH =
  "https://s3-alpha-sig.figma.com/img/3261/a5da/2491aaca49385e0a62bfaadf56c87015?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2~oBk3SihYc0x6UE3B-~JCX8c9bMSxzJcwRSaY0M-jT-ac9tJFyE0J8TQpb6vzEHa68zgVXhJHn83ENVMydwEyzfMUZMUb~GkwjWieVPgiDtVJ9W77XMkhmXeSqcSWLZNeO1hoERJGOzagEdWHGmZLsVn~XJ4wGs76S~wA~OH~B3qmh~PF~O6g2pBsOiKqxBIRr~I9eBAy6Zg4DjBQxMqiLD7rWvW4t7afBdp772OCV9wqvlddg05dTDUgi57Jo1EANbv2LaHXAlm5KWIcTcDOF0FLpCV7zPRb3Vya5YBbYJXK4Mrg2KvCztNlBfzxJ~UvKCNauE~KTzVOPyeCHNA__";
const IMAGE_PATH2 =
  "https://s3-alpha-sig.figma.com/img/9da4/66fc/fc4ef1d53503d65669260ebb153c9895?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RbDsbL3wav-7nrMd~fnFi97GO4WlLdtW6vHW2L9KCLlCthSntlRJ7YzIeSaRy7FnlWkacc7v9PmTGkzfZSHHgcBaFvriJBK-oEOm~h7o1X6E-8RGeSJZe6yFvTkOM-mssXzGhz29Gyf~hFKL7RmBXHiP1-jd~cAG5whHVrgGem9Cg2IKHQNt-CYCoWx85sNgEG0TjNvuqFAVItSl4UZ6aW0WIFbM8dMJwUy13F-E1ZVAM-upZIKBqP1Y06mfYv8lWOfnpg~TlYHkqt-~BMnxf0fYeA8mbiy-yVKfvjLa34gstiihXlw7QhVB1-s4xC8EDx2Cj~s-D4sUDYQ~y9qQeg__";
const IMAGE_PATH3 =
  "https://s3-alpha-sig.figma.com/img/da83/f975/8da18de7bb3dfc93669e8870e608d88e?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kYhcKgVqs186nvRzlADyMjRO23MDFzzZcLkNTR5sHWeorFcqQUnnzYVYzelmZkvS3Oke1B6rJ~kDLBXJt~UvPb0Rz9oLOx-AwylH6FedmFJpTqOn4gqkH~sHCcPVWIco1Ccm9U22FDiFaTfS5Pb7t8tvVVryi59ulYcVZ~~DLnJrJhAZE2816ZjvSwFP4uo2R5OMJrPYXyKIMaE1rWFeXl~vB2YHVelrlma6vy1Y6Y4Xa2N~ov3aZR~TVClHyCyO9~v3oJAACOfrHS-mfjKrhjTLSM5cHv-SZXn7z9lW1PF3LHFKYW~Sa~761zbe19XWEAbasHe7Jnr~fMGua402Tg__";
const IMAGE_PATH4 =
  "https://s3-alpha-sig.figma.com/img/b81f/d840/8e312fdf861f6520e8caaa3e6bd47939?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dR174hw0E6jlGG8WJviiei~c4hkjNasFMUcnirg6gS7yz1tOwQepDmeHCox~WxH~QkCPZ4g~0aHJl5tS5gOtMw5bEZnp2wJT5kXU-Lg~PA~e6iWYVJSNdqHe4ltNK36QJODzOEhGvQXuSRDNB2v0HY5O-f1pi25fMmVsVUoRxRaGCBfgDT0vrVL3Pq62fpyajEm6fTF9mq5KLPmMyNUPWRbUMCdH81lehZl~8lzbN00wgbniwa8QmAY2BYe7BUIO8hdHaUrYSlOoEeDP6oPCShOAY6EcNGE9pAbVsYnsg2TEAL6-PAXX6NCP0nxIKCB80ILiATEyDxNzHTGgkBzUvQ__";
const IMAGE_PATH5 =
  "https://s3-alpha-sig.figma.com/img/69ab/816f/c3f69e2134406908cc4f3fc018a85b96?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kFiaiVzdGx5Ez13apr-ssgyEfK~NJMCTPvfihJlL3~aJT9GhiW0l68DOhhR3p44JzXZz815Ya3Ytw-~RY2RrOVvpCxBo2-oAq1jOSUoY8ZEgaoG4RDF4zTuV3qMi0qOarBVkhamZ1joXWBEHQDp9DKsp3vFMC-q5Q04X3Hbr~zbfeehaO7DTz6HIc7cS7s1CGIdvSIhBYvG5uvFFizW~Yc~jaO0vat0dllmbBfamS-hjItmv6f2sNl8fQbOo6YvKtDYkmKMzkJlI8cA52Pdo8a34CLehZ4QfGOWYItZKCTZLzUIi0R5XXRRgO0jAGF-XtdVBMIq~jWX2qhS-uB9CeA__";

const Main = styled.main``;
const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.large} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${(props) => props.theme.media.tablet} {
    max-width: 1166px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const TopContainer = styled.div`
  padding-top: 120px;
  background-color: #cfd8dd;
  height: 678px;
  padding: 20px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 20px 0 20px 20px;
  }
`;

const SmallCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 32px;
  row-gap: 16px;
  margin: 80px 0;

  @media ${(props) => props.theme.media.tablet} {
    column-gap: 20px;
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
    padding-right: 10px;
  }
`;

export type CardData = {
  id: number;
  title: string;
  description: string;
  image: string;
};
export type SmallCardData = {
  id: number;
  description: string;
  image: string;
};
const cardsData: CardData[] = [
  {
    id: 1,
    title: "Комплексная помощь женщинам",
    description:
      "без определенного места жительства освободившимся из МПС Пермского края",
    image: IMAGE_PATH_LARGE,
  },
  {
    id: 2,
    title: "Профилактика правонарушений",
    description:
      "в Пермском крае через осуществление общественного контроля членами ОНК и ресоциализацию освободившихся из мест принудительного содержания через социальное сопровождение",
    image: IMAGE_PATH_LARGE2,
  },
  {
    id: 3,
    title: "Профилактика правонарушений",
    description:
      "в Пермском крае через осуществление общественного контроля членами ОНК и ресоциализацию освободившихся из мест принудительного содержания через социальное сопровождение",
    image: IMAGEPATH_LARGE3,
  },
];

const smallCardsData: SmallCardData[] = [
  {
    id: 1,
    description: "Уполномоченный по правам человека в Пермском крае",
    image: IMAGE_PATH2,
  },
  {
    id: 2,
    description: "ГУФСИН России по Пермскому краю",
    image: IMAGE_PATH,
  },
  {
    id: 3,
    description: "Министерство Социального Развития Пермского края",
    image: IMAGE_PATH4,
  },
  {
    id: 4,
    description: "АСЭТ - Альянс Социально-этнических технологий ",
    image: IMAGE_PATH5,
  },
  {
    id: 5,
    description:
      "Пермский краевой центр про профилактике и борьбе со СПИД и инфекционными заболеваниями",
    image: IMAGE_PATH3,
  },
];

export const MainComponent = () => {
  return (
    <Main>
      <TopContainer>
        <Wrapper>
          <TitleSection />
          <Carousel>
            {cardsData.map((data) => (
              <LargeCard key={data.id} data={data} />
            ))}
          </Carousel>
          <SmallCardContainer>
            {smallCardsData.map((data) => (
              <SmallCard key={data.id} data={data} />
            ))}
          </SmallCardContainer>
        </Wrapper>
      </TopContainer>
    </Main>
  );
};
