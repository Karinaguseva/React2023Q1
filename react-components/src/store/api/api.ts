import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const API_URL = 'https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['cards'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (action.type === HYDRATE) {
  //     return action.payload[reducerPath];
  //   }
  // },
  endpoints: () => ({}),
});
