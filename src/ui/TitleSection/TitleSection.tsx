import styled from "styled-components";
import { Button } from "../Buttons";

const TitleContainer = styled.div`
  display: flex;

  > .titleBox {
    max-width: 850px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .titleBox_title {
      font-size: 64px;
      color: #44597d;
    }
    & .titleBox_subTitle {
      font-size: 32px;
      color: #858a92;
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
