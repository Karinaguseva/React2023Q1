import { api } from './api';
export const CardsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCards: builder.query({
            query: (getParams) => {
                const params = {};
                if (getParams.search)
                    params.name_like = getParams.search;
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
