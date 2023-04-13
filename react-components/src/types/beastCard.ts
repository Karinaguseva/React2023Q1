export type BeastCardForm = {
  id: number;
  image: FileList;
  // image: string;
  name: string;
  date: string;
  description: string;
  ingredient: string;
  cost: string;
  house: string;
  checkbox: boolean;
};

export type BeastCard = Omit<BeastCardForm, 'image' | 'checkbox'> & {
  image: string;
};

export interface CardsProps {
  cards: BeastCardForm[];
}
