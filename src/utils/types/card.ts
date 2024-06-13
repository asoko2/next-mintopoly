import { CardAttributes } from "./card-attributes";

export type Card = {
  action: string;
  attributes: CardAttributes[];
  cardID: string;
  category: number;
  description: string;
  external_url: string;
  function: string;
  hash: string;
  image: string;
  name: string;
  quantityOwned: number;
  value: string | number;
  _id: string;
}