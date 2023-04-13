import { useSelector } from 'react-redux';
export const useFormCards = () => {
    const cards = useSelector((state) => state.form);
    return cards;
};
