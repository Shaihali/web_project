"use client";
import { CherdinskiyComponent, NoDataComponent } from "@/components";
import { useParams } from "next/navigation";

export default function MainContentPages() {
  const params = useParams();

  const getContent = () => {
    switch (params.slug) {
      case "onk":
        return {
          content: <NoDataComponent />,
        };

      case "convicted":
        return {
          content: <NoDataComponent />,
        };

      case "cherdinskiy":
        return {
          content: <CherdinskiyComponent />,
        };

      case "constituentDoc":
        return {
          content: <NoDataComponent />,
        };

      case "privacyPolice":
        return {
          content: <NoDataComponent />,
        };
      default:
        return {
          content: null,
        };
    }
  };

  const { content } = getContent();
  return <>{content}</>;
}
