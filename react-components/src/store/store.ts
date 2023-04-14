import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from './slice/form.slice';
import { reducer as searchReducer } from './slice/search.slice';
import { reducer as cardIdReducer } from './slice/cardId.slice';
import { api } from './api/api';

const reducers = combineReducers({
  form: formReducer,
  search: searchReducer,
  cardId: cardIdReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
