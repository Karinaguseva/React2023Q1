export type BeastCardForm = {
  image: FileList;
  name: string;
  date: string;
  description: string;
  ingredient: string;
  cost: string;
  house: string;
  checkbox: boolean;
};

export type BeastCard = Omit<BeastCardForm, 'image' | 'checkbox'> & { image: string; id: number };
