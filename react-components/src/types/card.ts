export type CardPreview = {
  id: number;
  name: string;
  image: string;
};

export type Card = CardPreview & {
  description: string;
  ingredient: string;
  prerequisite: string;
  cost: number;
};
