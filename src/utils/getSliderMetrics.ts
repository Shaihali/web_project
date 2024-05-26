import { FC, RefObject } from "react";


export const getSliderMetrics = (ref: RefObject<HTMLDivElement>) => {
  const parentNode = ref.current;
  if (!parentNode) {
    return null;
  }

  const elemntWidth = parentNode.children[0].getBoundingClientRect().width;
  const paddingStringValue = getComputedStyle(parentNode).gap;
  const gapNum = parseFloat(paddingStringValue);

  return { elemntWidth, gapNum };
}