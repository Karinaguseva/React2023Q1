import { useSelector } from 'react-redux';
export const useSearch = () => {
    const search = useSelector((state) => state.search.initialState);
    return search;
};
