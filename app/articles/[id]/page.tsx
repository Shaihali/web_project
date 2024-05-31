"use client";
import { Text, Title } from "@/ui";
import { IconArrowLeft, IconCalendar } from "@tabler/icons-react";
import { useParams, useRouter } from "next/navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 40px;
`;
const TitleBox = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Back = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 85px;
  height: 24px;
  gap: 8px;
  cursor: pointer;
`;
const InfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
const SocBox = styled.div`
  display: flex;
  gap: 8px;
`;
const ArticleBox = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;
`;

import db from "../../../db/news.json";
import { INew } from "@/types";
import { IconOdnoklassniki, IconSmile, IconTwitter, IconVK1 } from "@/assets";
import Link from "next/link";

const SOC_ITEMS: { id: number; icon: JSX.ElementType; href: string }[] = [
  { id: 1, icon: IconVK1, href: "https://vk.ru" },
  { id: 2, icon: IconSmile, href: "#" },
  { id: 3, icon: IconTwitter, href: "https://twitter.com" },
  { id: 4, icon: IconOdnoklassniki, href: "#" },
];
export default function Articles() {
  const router = useRouter();
  const params = useParams();

  const paramId = Number(params.id);
  const data: INew[] = db.filter((item) => item.id === paramId);
  const dateCreatedFormat = new Date(data[0].create_date).toLocaleDateString();

  const midifyArticles = data[0].full_article.sections.map((item) => {
    return { title: item.title, text: item.text.split("&nbsp;") };
  });
  console.log(midifyArticles);
  return (
    <Wrapper>
      <TitleBox>
        <Back onClick={router.back}>
          <IconArrowLeft size={"1.8rem"} stroke={1} />
          <Text size={1.4} color="#44597D">
            Назад
          </Text>
        </Back>
        <Title tag="h2" size={4.8} color="#44597D">
          {data[0].full_article.title}
        </Title>
        <InfoBlock>
          <div>
            <IconCalendar stroke={0.8} size={"3.2rem"} />
            <Text size={2.6} color="#44597D">
              {dateCreatedFormat}
            </Text>
          </div>
          <SocBox>
            {SOC_ITEMS.map((item) => (
              <Link key={item.id} href={item.href}>
                {<item.icon />}
              </Link>
            ))}
          </SocBox>
        </InfoBlock>
      </TitleBox>
      {midifyArticles.map((item, i) => (
        <ArticleBox key={i}>
          <Title tag="h3" size={4} color="#44597D">
            {item.title}
          </Title>
          {item.text.map((parag, i) => (
            <Text key={i} size={2.2} color="#858A92">
              {parag}
            </Text>
          ))}
        </ArticleBox>
      ))}
    </Wrapper>
  );
}
