import { api } from './api';

interface SerchParams {
  name_like: string;
}

export const CardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (getParams) => {
        const params = {} as SerchParams;

        if (getParams.search) params.name_like = getParams.search;

        return {
          url: `/`,
          params,
        };
      },
    }),

    getCard: builder.query({
      query: (id) => `/?id=${id}`,
    }),
  }),
});

export const { useGetCardsQuery } = CardsApi;

export const { useGetCardQuery } = CardsApi;
