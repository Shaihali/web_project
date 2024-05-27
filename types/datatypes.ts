export interface INavMenu {
  id: number;
  label: string;
  href: string;
}

export interface ISmallCardData {
  id: number;
  description: string;
  image: string;
}

export interface ICardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ITabsList {
  id: number;
  label: string;
  value: string;
}

export interface IDocCardData {
  id: number;
  title: string;
  image: string;
  data?: { [key: string]: string };
}
