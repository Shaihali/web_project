import styled from "styled-components";
import { Button } from "../Buttons";

const TitleContainer = styled.div`
  display: flex;

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

    & .titleBox_title {
      font-size: 64px;
      color: #44597d;

      @media ${(props) => props.theme.media.tablet} {
        font-size: 59px;
      }
      @media ${(props) => props.theme.media.phone} {
        font-size: 46px;
      }
    }
    & .titleBox_subTitle {
      font-size: 32px;
      color: #858a92;

      @media ${(props) => props.theme.media.tablet} {
        font-size: 22px;
      }
      @media ${(props) => props.theme.media.phone} {
        font-size: 26px;
      }
    }
  }

  > .descBox {
    display: flex;
    flex-direction: column;
    max-width: 598px;
    gap: 8px;

    & .descBox_text {
      font-size: 26px;
      color: #0b1424;

      @media ${(props) => props.theme.media.tablet} {
        font-size: 22px;
      }
      @media ${(props) => props.theme.media.phone} {
        font-size: 20px;
      }
    }
  }
`;
export const TitleSection = () => {
  return (
    <TitleContainer>
      <div className="titleBox">
        <h1 className="titleBox_title">Свобода - это выбор,</h1>
        <p className="titleBox_subTitle">
          принятый с осознанием всей полноты ответственности за его последствия
        </p>
      </div>
      <div className="descBox">
        <p className="descBox_text">
          Оформите регулярное пожертвование и мы превратим ваше желание в добрые
          дела.
        </p>
        <Button bg="filled" h={62} radius={32}>
          Поддержать
        </Button>
      </div>
    </TitleContainer>
  );
};
