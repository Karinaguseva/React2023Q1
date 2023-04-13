import { api } from './api';
interface SerchParams {
  _page: string;
  name_like: string;
}

export const CardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (getParams) => {
        const params = {} as SerchParams;

        if (getParams.pageParams) params._page = getParams.pageParams;
        if (getParams.search) params.name_like = getParams.search;

        return {
          url: `/cards/`,
          params,
        };
      },
    }),

    getCard: builder.query({
      query: (id) => `/cards/?id=${id}`,
      providesTags: (id) => [{ type: 'cards', id }],
    }),
    // getTotalPages: builder.query({
    //   query: (totalCards) => `/info/?name_like=${totalCards}`,
    // }),
  }),
});

export const { useGetCardsQuery } = CardsApi;

export const { useGetCardQuery } = CardsApi;

// export const { useGetTotalPagesQuery } = CardsApi;
