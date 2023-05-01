import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://my-json-server.typicode.com/karinaguseva/api-for-react2023Q1/cards';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['cards'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),

  endpoints: () => ({}),
});
