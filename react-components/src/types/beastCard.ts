export type BeastCardForm = {
  id: number;
  image: string;
  imageForm: FileList;
  title: string;
  birth: string;
  description: string;
  ingredient: string;
  cost: string;
  house: string;
  checkbox: boolean;
};

export type BeastCard = Omit<BeastCardForm, 'imageForm' | 'checkbox'>;
