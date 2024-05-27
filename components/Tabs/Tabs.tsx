import { ITabsList } from "@/types";
import { useState } from "react";
import styled from "styled-components";
import { CherdinskiyComponent } from "../Sections";

const TABS_LIST: ITabsList[] = [
  { id: 1, value: "ОНК", label: "onk" },
  { id: 2, value: "ОСУЖДЕННЫМ", label: "convicted" },
  { id: 3, value: "ЧЕРДЫНСКИЙ РАЙОН", label: "cherdinskiy" },
  { id: 4, value: "УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ", label: "constituentDoc" },
  { id: 5, value: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", label: "privacyPolice" },
];

const Tabs = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #b4b9bb;
  //   padding: 10px;
`;

const TabsItem = styled.li`
  font-size: 2.2rem;
  color: ${(props) => (props.isSelected ? "#44597D" : "#B4B9BB")};
  cursor: pointer;
  border-bottom: ${(props) => (props.isSelected ? "2px solid #44597D" : "")};
  padding-bottom: 12px;
  position: relative;
  bottom: ${(props) => (props.isSelected ? "-2px" : "0")};
`;

export const TabsComponent = () => {
  const [selected, setSelected] = useState("cherdinskiy");

  const handleClick = (value: string) => {
    setSelected(value);
  };

  const getContent = () => {
    switch (selected) {
      case "onk":
        return {
          content: <div>onk</div>,
        };

      case "convicted":
        return {
          content: <div>convicted</div>,
        };

      case "cherdinskiy":
        return {
          content: <CherdinskiyComponent />,
        };

      case "constituentDoc":
        return {
          content: <div>constituentDoc</div>,
        };

      case "privacyPolice":
        return {
          content: <div>privacyPolice</div>,
        };
      default:
        return {
          content: null,
        };
    }
  };

  return (
    <>
      <Tabs>
        {TABS_LIST.map((tab) => (
          <TabsItem
            key={tab.id}
            isSelected={selected === tab.label}
            onClick={() => handleClick(tab.label)}
          >
            {tab.value}
          </TabsItem>
        ))}
      </Tabs>
      {getContent().content}
    </>
  );
};
