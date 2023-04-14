import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { BeastCard } from '../types/beastCard';

export const useFormCards = () => {
  const cards = useSelector<RootState, BeastCard[]>((state) => state.form);

  return cards;
};
