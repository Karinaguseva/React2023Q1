import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useCardId = () => {
  const cardId = useSelector<RootState, string | null>((state) => state.cardId.initialState);

  return cardId;
};
