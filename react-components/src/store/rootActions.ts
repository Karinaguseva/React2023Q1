import { actions as formActions } from './slice/form.slice';
import { actions as searchActions } from './slice/search.slice';

export const rootActions = {
  ...formActions,
  ...searchActions,
};
