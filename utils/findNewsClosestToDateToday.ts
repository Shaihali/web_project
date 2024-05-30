import { INew } from "@/types";

export const findNewsClosestToDateToday = (arr: INew[]): INew[] => {
  const today = new Date();
  let closestItem = arr;
  let minDiff = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const itemDate = new Date(arr[i].create_date);
    const diff = Math.abs(today.getTime() - itemDate.getTime());

    if (diff < minDiff) {
      minDiff = diff;

      closestItem = [arr[i]];
    }
  }
  return closestItem;
};
