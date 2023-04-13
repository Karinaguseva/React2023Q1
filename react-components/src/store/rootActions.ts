import { actions as formActions } from './slice/form.slice';
import { actions as searchActions } from './slice/search.slice';
import { actions as cardIdActions } from './slice/cardId.slice';

export const rootActions = {
  ...formActions,
  ...searchActions,
  ...cardIdActions,
};
