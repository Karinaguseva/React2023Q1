import { useSelector } from 'react-redux';
export const useCardId = () => {
    const cardId = useSelector((state) => state.cardId.initialState);
    return cardId;
};
