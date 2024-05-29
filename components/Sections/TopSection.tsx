import { Button, Text, Title } from "@/ui";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  margin-top: 100px;

  @media ${(props) => props.theme.media.tablet} {
    margin-top: 0;
  }

  @media ${(props) => props.theme.media.large_phone} {
    flex-direction: column;
    gap: 32px;
  }
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    gap: 32px;
  }

  > .titleBox {
    max-width: 850px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > .descBox {
    display: flex;
    flex-direction: column;
    max-width: 598px;
    gap: 8px;
  }
`;

export const TopSectionComponent = () => {
  return (
    <TitleContainer>
      <div className="titleBox">
        <Title tag="h1" size={6.4} color="#44597d">
          Свобода - это выбор,
        </Title>
        <Text size={3.2} color="#858a92">
          принятый с осознанием всей полноты ответственности за его последствия
        </Text>
      </div>
      <div className="descBox">
        <Text size={2.6} color="#0b1424">
          Оформите регулярное пожертвование и мы превратим ваше желание в добрые
          дела.
        </Text>
        <Button $background="filled" height={6.2} radius={32} href={"/"}>
          Поддержать
        </Button>
      </div>
    </TitleContainer>
  );
};
