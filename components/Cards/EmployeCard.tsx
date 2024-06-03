"use client";

import { IConFacebook, IconVK1 } from "@/assets";
import { IEmploye } from "@/types";
import { Flex, Text } from "@/ui";
import { IconMail, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const INITIAL =
  "https://s3-alpha-sig.figma.com/img/45c0/98ab/857ace9493305c66ab969d7a8af924cc?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xts0R9wQpqgg9eN2pfjP6MF-l1-qhHOWhYViO8TRMVA9IDOOsNqMPN8VUIVSX9KjUtOZPPJ7MioMPrXbWZC50xerXiElXUcpF3TxQHoc7dkjiwz37hPWKbPJUwXkuXKfJBwnEwT92NMggmnsNg6hi-r0abiZZ~iY2aKaZdDnDQ0MEdAlZi477u47~9DUYu83y9pk2VTA1TNX3OW86eVf6FwvxSvdykmssbOqUAy-BnoDxjPEwk4E~Cxzw00rkT7bD-ZLST71EyjBlFG4gz297rHrsDf0ytoo-dznsDIwcoJJUZMEYcit9L0xfIdyLWkDB2fwkxsVuKiOOYtN7xBjlQ__";
const ICON_MAP: {
  [key: string]: JSX.ElementType;
} = {
  vkontakte: IconVK1,
  facebook: IConFacebook,
};
const Card = styled.div`
  max-height: 873px;
  width: 724px;
  border-radius: 24px;
  background-color: #fff;

  @media ${(props) => props.theme.media.large} {
    width: 646px;
    max-height: 930px;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 464px;
  }
`;

const ImageBox = styled.div`
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;

  @media ${(props) => props.theme.media.tablet} {
    height: 490px;
  }
  @media ${(props) => props.theme.media.phone} {
    height: 390px;
  }

  > img {
    width: 100%;
    height: auto !important;
    object-fit: cover;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
  }
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 16px 24px 16px;
`;

type EmployeCardComponentProps = {
  data: IEmploye;
};
export const EmployeCardComponent: FC<EmployeCardComponentProps> = ({
  data,
}) => {
  const { full_name, image, descriptions, contacts, job_title, id } = data;

  return (
    <Card>
      <ImageBox>
        <Image src={image ? image : INITIAL} alt="employee" fill />
      </ImageBox>
      <InfoBox>
        <Flex $justify="space-between">
          <Text size={2.6} color="#44597D">
            {full_name}
          </Text>
          <Flex $gap={4}>
            {contacts?.social.length! > 0
              ? contacts?.social.map((item) => {
                  const key = Object.keys(item);
                  return key.map((item, i) => {
                    const Icon = ICON_MAP[item];
                    return <Icon key={i} />;
                  });
                })
              : null}
          </Flex>
        </Flex>
        {contacts?.phone && contacts.email ? (
          <Flex $gap={10} $wrap>
            {contacts?.phone
              ? contacts.phone.map((phone, i) => (
                  <Flex key={i}>
                    <IconPhone stroke={1} />
                    <Text size={2.2} color="#858A92">
                      {phone}
                    </Text>
                  </Flex>
                ))
              : null}
            {contacts?.email ? (
              <Flex $gap={4}>
                <IconMail stroke={1} />
                <Text size={2.2} color="#858A92">
                  {contacts.email}
                </Text>
              </Flex>
            ) : null}
          </Flex>
        ) : null}
        <Flex $direction="column" $align="flex-start" $gap={8}>
          {job_title && (
            <Text size={2.2} color="#0B1424">
              {job_title}
            </Text>
          )}
          {descriptions && (
            <Text size={1.8} color="#858A92" $textcut={120}>
              {descriptions}
            </Text>
          )}
        </Flex>
        {descriptions?.length! > 120 ? (
          <Link
            href={`/employes/${id}`}
            style={{ fontSize: "1.4rem", color: "#44597D" }}
          >
            ЧИТАТЬ ПОЛНОСТЬЮ
          </Link>
        ) : null}
      </InfoBox>
    </Card>
  );
};
