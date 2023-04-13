import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useSearch = () => {
  // const search = useSelector((state) => state);
  const search = useSelector<RootState, string>((state) => state.search.initialState);

  return search;
};
